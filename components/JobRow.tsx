import { Job } from "@/types/job";

interface Props {
  job: Job;
  onSelect: (job: Job) => void;
}

export default function JobRow({ job, onSelect }: Props) {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-100">
      <td className="p-4">{job.company.name}</td>
      <td className="p-4">{job.name}</td>
      <td className="p-4">{job.location.fullLocation}</td>
      <td className="p-4">{job.experienceLevel?.label}</td>
      <td className="p-4">
        <button
          onClick={() => onSelect(job)}
          className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800"
        >
          View Details
        </button>
      </td>
    </tr>
  );
}
