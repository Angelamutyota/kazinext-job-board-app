export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  experience: "Junior" | "Mid" | "Senior";
  description: string;
  salary: string;
  type: "Full-time" | "Part-time" | "Contract";
}

export interface SmartRecruitersJob {
  id: string;
  name: string;
  releasedDate: string;

  company: {
    name: string;
  };

  location: {
    fullLocation: string;
    remote: boolean;
  };

  department?: {
    label: string;
  };

  experienceLevel?: {
    label: string;
  };

  typeOfEmployment?: {
    label: string;
  };

  ref: string;
}

export interface SmartRecruitersResponse {
  content: SmartRecruitersJob[];
  totalFound: number;
}
