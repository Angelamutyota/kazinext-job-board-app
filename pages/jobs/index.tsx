import { useEffect, useState } from "react";
import { fetchJobs } from "@/services/jobsApi";
import { Job } from "@/types/job";

import JobsTable from "@/components/JobsTable";
import JobDetailsPanel from "@/components/JobDetailsPanel";
import JobsSearch from "@/components/JobsSearch";

export default function JobsPage() {

  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 🔥 Fetch jobs
  useEffect(() => {

    const loadJobs = async () => {
      try {
        const data = await fetchJobs();
        setJobs(data.content);
      } catch (err) {
        setError("Failed to load jobs.");
      } finally {
        setLoading(false);
      }
    };

    loadJobs();

  }, []);

  // 🔥 Client filtering
  const filteredJobs = jobs.filter((job) =>
    job.name.toLowerCase().includes(search.toLowerCase()) ||
    job.company.name.toLowerCase().includes(search.toLowerCase())
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

      {/* 🔥 Loading */}
      {loading && (
        <p className="mt-6 text-gray-500">
          Loading jobs...
        </p>
      )}

      {/* 🔥 Error */}
      {error && (
        <p className="mt-6 text-red-500">
          {error}
        </p>
      )}

      {/* 🔥 Data */}
      {!loading && !error && (
        <div className="mt-6 flex gap-6">

          <div className={selectedJob ? "w-2/3" : "w-full"}>
            <JobsTable
              jobs={filteredJobs}
              onSelect={setSelectedJob}
            />
          </div>

          {selectedJob && (
            <div className="w-1/3">
              <JobDetailsPanel
                job={selectedJob}
                onClose={() => setSelectedJob(null)}
              />
            </div>
          )}

        </div>
      )}
    </main>
  );
}
