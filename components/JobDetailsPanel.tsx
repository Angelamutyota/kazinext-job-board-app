import { Job } from "@/types/job";

interface Props {
  job: Job;
  onClose: () => void;
}

export default function JobDetailsPanel({ job, onClose }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 sticky top-6">
      {/* Header with close button */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-green-600 font-medium">Active</span>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 text-xl"
        >
          ✕
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-6">
        Overview
      </h2>

      <div className="space-y-3 mb-8">
        <div>
          <p className="text-sm text-gray-600">Company Name:</p>
          <p className="font-medium">{job.company}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Job Title:</p>
          <p className="font-medium">{job.title}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Location:</p>
          <p className="font-medium">{job.location}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Date Posted:</p>
          <p className="font-medium">{job.experience}</p>
        </div>
      </div>

      <h3 className="text-xl font-bold mb-4">
        Job Details
      </h3>

      <div className="mb-6">
        <p className="text-sm font-semibold mb-2">About the job</p>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          {job.description}
        </p>

        {/* You can add more sections here based on your design */}
        <p className="text-sm font-semibold mb-2">Key Responsibilities</p>
        <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
          <li>Assist with monitoring and maintaining ETL.</li>
          <li>Help troubleshoot SQL Server issues.</li>
        </ul>
      </div>

      <div className="flex gap-3 mt-8">
        <button className="flex-1 bg-blue-900 text-white py-2.5 rounded-md hover:bg-blue-800 font-medium">
          Apply
        </button>
        <button className="flex-1 border border-gray-300 text-gray-700 py-2.5 rounded-md hover:bg-gray-50 font-medium">
          View More
        </button>
      </div>
    </div>
  );
}