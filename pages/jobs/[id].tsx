import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchJobDetails } from "@/services/jobsApi";

export default function JobDetailsPage() {

  const router = useRouter();
  const { id } = router.query;

  const [job, setJob] = useState<any>(null);

  useEffect(() => {

    if (!id) return;

    const load = async () => {
      const data = await fetchJobDetails(id as string);
      setJob(data);
    };

    load();

  }, [id]);

  if (!job) return <div className="p-10">Loading...</div>;

  return (
    <main className="max-w-4xl mx-auto py-16 text-gray-900">

      <h1 className="text-4xl font-bold mb-4 text-brand">
        {job.name}
      </h1>

      <p className="text-gray-600 mb-8">
        {job.company.name} • {job.location.fullLocation}
      </p>

    <h2 className="text-2xl font-bold mb-4">{job.jobAd.sections.companyDescription.title}</h2>
       <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{
          __html: job.jobAd.sections.companyDescription.text
        }}
      />

<h2 className="text-2xl font-bold mt-5 mb-4">{job.jobAd.sections.jobDescription.title}</h2>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{
          __html: job.jobAd.sections.jobDescription.text
        }}
      />

      <h2 className="text-2xl font-bold mt-5 mb-4">{job.jobAd.sections.qualifications.title}</h2>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{
          __html: job.jobAd.sections.qualifications.text
        }}
      />

      <a
        href={job.applyUrl}
        target="_blank"
        className="inline-block mt-10 bg-blue-900 text-white px-6 py-3 rounded-md"
      >
        Apply Now
      </a>

    </main>
  );
}
