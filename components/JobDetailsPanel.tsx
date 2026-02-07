import { useEffect, useState } from "react";
import { fetchJobDetails } from "@/services/jobsApi";
import { Job } from "@/types/job";
import { useRouter } from "next/router";


interface Props {
  job: Job;
  onClose: () => void;
}

export default function JobDetailsPanel({ job, onClose }: Props) {

  const [details, setDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const postingId = job.ref.split("/").pop();

  useEffect(() => {

    const loadDetails = async () => {
      try {
        const data = await fetchJobDetails(postingId!);
        setDetails(data);
      } catch {
        console.error("Failed to fetch details");
      } finally {
        setLoading(false);
      }
    };

    loadDetails();

  }, [postingId]);

  if (loading) return <div className="p-6">Loading details...</div>;

  return (
    <div className="bg-white border rounded-lg shadow-lg p-6 sticky top-6 h-[85vh] overflow-y-auto">

      <div className="flex justify-between mb-4">
        <span className="text-green-600 text-sm font-medium">Active</span>
        <button onClick={onClose}>✕</button>
      </div>

      <h2 className="text-2xl font-bold mb-6">Overview</h2>

      <div className="space-y-3 mb-8 border p-4 rounded-lg">

        <p><b>Company:</b> {details.company.name}</p>
        <p><b>Location:</b> {details.location.fullLocation}</p>
        <p><b>Employment:</b> {details.typeOfEmployment?.label}</p>
        <p><b>Experience:</b> {details.experienceLevel?.label}</p>

      </div>

      <h3 className="text-xl font-bold mb-4">
        Job Description
      </h3>

      {/* 🔥 Render HTML safely */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{
          __html: details.jobAd?.sections?.jobDescription?.text
        }}
      />

      <div className="flex gap-3 mt-8">

        <a
          href={details.applyUrl}
          target="_blank"
          className="flex-1 bg-blue-900 text-white py-2.5 rounded-md text-center"
        >
          Apply
        </a>

        <button
          onClick={() => router.push(`/jobs/${postingId}`)
}
          className="flex-1 border py-2.5 rounded-md"
        >
          View More
        </button>

      </div>

    </div>
  );
}
