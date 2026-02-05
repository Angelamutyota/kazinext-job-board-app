import { createContext, useContext, useState, ReactNode } from 'react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  category: string;
  experience: 'Entry-Level' | 'Mid-Level' | 'Senior';
  description: string;
  // add more fields from your API
}

interface JobsContextType {
  jobs: Job[];
  filteredJobs: Job[];
  filters: {
    category: string;
    location: string;
    experience: string;
  };
  loading: boolean;
  error: string | null;
  setFilters: (filters: any) => void;
  // we'll add fetch later
}

const JobsContext = createContext<JobsContextType | undefined>(undefined);

export function JobsProvider({ children }: { children: ReactNode }) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    experience: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Later: useEffect to fetch jobs and apply filters

  const value = {
    jobs,
    filteredJobs,
    filters,
    loading,
    error,
    setFilters,
  };

  return <JobsContext.Provider value={value}>{children}</JobsContext.Provider>;
}

export const useJobs = () => {
  const context = useContext(JobsContext);
  if (!context) throw new Error('useJobs must be used within JobsProvider');
  return context;
};