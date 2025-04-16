
import { Certificate } from "../types";

// Mock certificates data - in a real app, this would come from an API
export const certificatesData: Certificate[] = [
  {
    id: "cert-1",
    title: "Diploma en Minería Subterránea",
    issueDate: "2024-02-15",
    course: "Técnicas Avanzadas de Minería Subterránea",
    instructor: "Dr. Carlos Rodríguez",
    type: "completed",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cert-2",
    title: "Certificado de Seguridad en Excavaciones",
    issueDate: "2023-11-10",
    expiryDate: "2025-11-10",
    course: "Seguridad y Prevención en Minería",
    instructor: "Ing. María Sánchez",
    type: "completed",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=800&q=80",
    accredited: {
      organization: "CIP",
      accreditationDate: "2023-12-05",
      verificationId: "CIP-2023-1235"
    }
  },
  {
    id: "cert-3",
    title: "Gestión Ambiental Minera",
    issueDate: "2024-04-01",
    course: "Impacto Ambiental en Minería",
    instructor: "Dra. Ana Martínez",
    type: "in-progress",
    image: "https://images.unsplash.com/photo-1557434440-30fd8ae3d22e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cert-4",
    title: "Técnico en Topografía Minera",
    issueDate: "2022-09-15",
    expiryDate: "2024-03-15",
    course: "Topografía Avanzada para Minería",
    instructor: "Ing. Felipe Torres",
    type: "expired",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
  },
];
