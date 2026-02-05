import { useRouter } from 'next/router';

export default function JobDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container mx-auto p-4">
      <h1>Job ID: {id}</h1>
      {/* Fetch and show details later */}
    </div>
  );
}