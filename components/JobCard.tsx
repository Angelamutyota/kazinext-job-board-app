import { Job } from "@/types/job";
import { useRouter } from "next/router";

interface Props {
  job: Job;
}

export default function JobCard({ job }: Props) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/jobs/${job.id}`)}
      className="cursor-pointer bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition hover:-translate-y-1"
    >
      {/* Title */}
      <h3 className="text-lg text-gray-800 font-semibold">
        {job.name}
      </h3>

      {/* Company */}
      <p className="text-brand font-medium mt-1">
        {job.company.name}
      </p>

      {/* Meta */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-4">
        <span>{job.location.fullLocation}</span>

        {job.experienceLevel && (
          <span>{job.experienceLevel.label}</span>
        )}

        {job.typeOfEmployment && (
          <span>{job.typeOfEmployment.label}</span>
        )}
      </div>

      {/* Department */}
      {job.department && (
        <span className="inline-block mt-4 text-xs border px-2 py-1 rounded-md">
          {job.department.label}
        </span>
      )}
    </div>
  );
}
