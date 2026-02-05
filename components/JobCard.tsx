import { Job } from "@/types/job";

interface Props {
  job: Job;
}

export default function JobCard({ job }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition">
      <h3 className="text-lg text-gray-500 font-semibold">{job.title}</h3>

      <p className="text-brand font-medium mt-1">
        {job.company}
      </p>

      <div className="flex gap-4 text-sm text-gray-500 mt-4">
        <span>{job.location}</span>
        <span>{job.experience}</span>
        <span>${job.salary}</span>
      </div>

      <span className="inline-block text-gray-300 mt-4 text-xs border px-2 py-1 rounded-md">
        {job.type}
      </span>
    </div>
  );
}
