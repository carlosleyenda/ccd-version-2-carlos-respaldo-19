
import PageLayout from "@/components/layout/PageLayout";
import { CertificatesList } from "@/components/certificates/CertificatesList";

const Certifications = () => {
  return (
    <PageLayout 
      title="Mis Certificaciones" 
      subtitle="Gestiona y visualiza tus certificados obtenidos"
    >
      <div className="w-full relative z-10">
        <CertificatesList />
      </div>
    </PageLayout>
  );
};

export default Certifications;
