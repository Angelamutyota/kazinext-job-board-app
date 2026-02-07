// export interface Job {
//   id: string;
//   title: string;
//   company: string;
//   location: string;
//   experience: "Junior" | "Mid" | "Senior";
//   description: string;
//   salary: string;
//   type: "Full-time" | "Part-time" | "Contract";
// }

export interface Job {
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

export interface JobResponse {
  content: Job[];
  totalFound: number;
}
