
export type Certificate = {
  id: string;
  title: string;
  issueDate: string;
  expiryDate?: string;
  course: string;
  instructor: string;
  type: "completed" | "in-progress" | "expired";
  image: string;
  accredited?: {
    organization: string;
    accreditationDate: string;
    expiryDate?: string;
    verificationId: string;
  };
};
