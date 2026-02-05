import { useState } from "react";
import { jobs } from "@/utils/mockJobs";
import { Job } from "@/types/job";

import JobsTable from "@/components/JobsTable";
import JobDetailsPanel from "@/components/JobDetailsPanel";
import JobsSearch from "@/components/JobsSearch";

export default function JobsPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="max-w-7xl mx-auto px-4 py-12 text-black">

      <h1 className="text-3xl font-bold mb-6 text-brand">
        Top job picks for you
      </h1>

      <JobsSearch
        value={search}
        onChange={setSearch}
      />

      <div className="mt-6 flex gap-6">
        {/* Left side - Jobs table */}
        <div className={selectedJob ? "w-2/3" : "w-full"}>
          <JobsTable
            jobs={filteredJobs}
            onSelect={setSelectedJob}
          />
        </div>

        {/* Right side - Job details panel */}
        {selectedJob && (
          <div className="w-1/3">
            <JobDetailsPanel
              job={selectedJob}
              onClose={() => setSelectedJob(null)}
            />
          </div>
        )}
      </div>
    </main>
  );
}
