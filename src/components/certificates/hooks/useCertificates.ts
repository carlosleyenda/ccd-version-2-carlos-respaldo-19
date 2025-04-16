
import { useMemo } from "react";
import { Certificate } from "../types";
import { certificatesData } from "../data/certificatesData";

export const useCertificates = (activeTab: string) => {
  // Get certificates from the data file
  const certificates = certificatesData;

  // Filter certificates based on the active tab
  const filteredCertificates = useMemo(() => {
    return activeTab === "all" 
      ? certificates 
      : certificates.filter(cert => cert.type === activeTab);
  }, [activeTab, certificates]);

  return { certificates, filteredCertificates };
};
