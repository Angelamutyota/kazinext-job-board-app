import { apiClient } from "./apiClient";
import { JobResponse } from "@/types/job";

export async function fetchJobs(
  query?: string
): Promise<JobResponse> {

  const endpoint = query
    ? `/postings?q=${query}`
    : `/postings`;

  return apiClient<JobResponse>(endpoint);
}



export async function fetchJobDetails(
  postingId: string
) {

  return apiClient(`/postings/${postingId}`);
}
