
export interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  category: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  requiredSkills: string[];
  benefits: string[];
  salary: string;
  postedDate: string;
  recommendedCourses: {
    id: string;
    title: string;
    description: string;
  }[];
}

export interface MarketTrend {
  skillsDemand: {
    name: string;
    demand: number;
    growth: number;
  }[];
  jobsBySector: {
    name: string;
    value: number;
  }[];
  salaryTrend: {
    year: string;
    engineering: number;
    mining: number;
    management: number;
  }[];
  growingSkills: {
    name: string;
    growth: number;
  }[];
  decliningSkills: {
    name: string;
    growth: number;
  }[];
  recommendedCourses: {
    id: string;
    title: string;
    description: string;
    demandGrowth: number;
  }[];
}
