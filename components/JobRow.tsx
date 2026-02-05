import { Job } from "@/types/job";

interface Props {
  job: Job;
  onSelect: (job: Job) => void;
}

export default function JobRow({ job, onSelect }: Props) {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-100">
      <td className="p-4">{job.company}</td>
      <td>{job.title}</td>
      <td>{job.location}</td>
      <td>{job.experience}</td>
      <td>
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
