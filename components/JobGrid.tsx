import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { fetchJobs } from "@/services/jobsApi";
import { Job } from "@/types/job";
import { useRouter } from "next/router";

export default function JobGrid() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const data = await fetchJobs({ limit: 6 }); // 🔥 request only what you need
        setJobs(data.content);
      } catch (err) {
        console.error("Failed to fetch jobs", err);
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-4 w-full">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl text-black font-semibold">
            Explore job opportunities
          </h2>

          <button
            onClick={() => router.push("/jobs")}
            className="text-brand font-medium hover:underline"
          >
            View more →
          </button>
        </div>

        {loading ? (
          <p className="text-gray-500">Loading jobs...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
