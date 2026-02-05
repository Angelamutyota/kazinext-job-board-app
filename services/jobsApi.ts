import { SmartRecruitersResponse } from "@/types/job";

const BASE_URL =
  "https://api.smartrecruiters.com/v1/companies/smartrecruiters/postings";

export async function fetchJobs(
  query?: string
): Promise<SmartRecruitersResponse> {

  const url = query
    ? `${BASE_URL}?q=${query}`
    : BASE_URL;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }

  return res.json();
}
