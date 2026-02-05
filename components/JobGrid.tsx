import JobCard from "./JobCard";
import { jobs } from "@/utils/mockJobs";

export default function JobGrid() {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col justify-center">
      
      <div className="max-w-6xl mx-auto px-4 w-full">

        <h2 className="text-3xl text-black font-semibold mb-8">
          Explore job opportunities
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

      </div>

    </section>
  );
}
