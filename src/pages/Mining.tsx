
import React from "react";
import PageLayout from "@/components/layout/PageLayout";

const Mining = () => {
  return (
    <PageLayout 
      title="Minería" 
      subtitle="Explora nuestros cursos especializados en minería"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Aquí irán los cursos de minería */}
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold">Contenido próximamente</h3>
          <p className="text-gray-500 mt-2">
            Estamos preparando contenido especializado en minería.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Mining;
