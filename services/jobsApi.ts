import { apiClient } from "./apiClient";
import { JobResponse } from "@/types/job";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/postings`;


interface JobFilters {
  category?: string;
  location?: string;
  experience?: string;
  query?: string;
   limit?: number;
}
export async function fetchJobs(filters: JobFilters = {}) {
  const params = new URLSearchParams();

  if (filters.query) params.append("q", filters.query);
  if (filters.location) params.append("city", filters.location);
if (filters.limit) {
  params.append("limit", filters.limit.toString());
}

  // SmartRecruiters uses function / experienceLevel
  if (filters.category) params.append("function", filters.category);
  if (filters.experience) params.append("experienceLevel", filters.experience);

  const url =
    params.toString().length > 0
      ? `${BASE_URL}?${params.toString()}`
      : BASE_URL;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }

  return res.json();
}



export async function fetchJobDetails(
  postingId: string
) {

  return apiClient(`/postings/${postingId}`);
}
