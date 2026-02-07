const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function apiClient<T>(endpoint: string): Promise<T> {

  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 8000);

  try {

    const res = await fetch(
      `${API_BASE}${endpoint}`,
      { signal: controller.signal }
    );

    if (!res.ok) {
      throw new Error(`API Error: ${res.status}`);
    }

    return await res.json();

  } finally {
    clearTimeout(timeout);
  }
}

