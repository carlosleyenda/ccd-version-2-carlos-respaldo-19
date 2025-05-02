
export interface JobListing {
  id: string;
  title: string;
  company: string;
  companyId: string;
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
  experienceLevel: string;
  applicationDeadline?: string;
  applicationProcess?: string;
  interviewProcess?: string;
  contactEmail?: string;
  recommendedCourses: {
    id: string;
    title: string;
    description: string;
  }[];
}

export interface JobApplication {
  id: string;
  jobId: string;
  jobTitle: string;
  company: string;
  appliedDate: string;
  status: 'pending' | 'review' | 'interview' | 'offer' | 'rejected';
  nextStep?: string;
  notes?: string;
}

export interface Company {
  id: string;
  name: string;
  logo?: string;
  description: string;
  industry: string;
  location: string;
  website: string;
  employeeCount: string;
  founded: string;
  specialties: string[];
  openPositions: number;
  benefits: string[];
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
  locationStats: {
    location: string;
    jobs: number;
    percentChange: number;
  }[];
  topDemandRoles: {
    role: string;
    demand: number;
    salaryRange: string;
  }[];
  recommendedCourses: {
    id: string;
    title: string;
    description: string;
    demandGrowth: number;
  }[];
}
