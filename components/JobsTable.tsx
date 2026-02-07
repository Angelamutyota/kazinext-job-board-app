import { Job } from "@/types/job";
import JobRow from "./JobRow";

interface Props {
  jobs: Job[];
  onSelect: (job: Job) => void;
}

export default function JobsTable({ jobs, onSelect }: Props) {
  return (
    <table className="w-full  rounded-lg overflow-hidden">
      <thead className="bg-gray-100 text-left">
        <tr>
          <th className="p-4">Company</th>
          <th className="p-4">Job Title</th>
          <th className="p-4">Location</th>
          <th className="p-4">Date Posted</th>
          <th className="p-4">Action</th>
        </tr>
      </thead>

      <tbody>
        {jobs.map((job) => (
          <JobRow
            key={job.id}
            job={job}
            onSelect={onSelect}
          />
        ))}
      </tbody>
    </table>
  );
}
