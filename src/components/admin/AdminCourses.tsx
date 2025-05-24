
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdminCoursesHeader } from "./courses/AdminCoursesHeader";
import { CourseFilters } from "./courses/CourseFilters";
import { CoursesTable } from "./courses/CoursesTable";
import { CourseModal } from "./courses/CourseModal";
import { useCourses } from "@/hooks/useCourses";
import { showNotification } from "@/components/ui/notification-toast";

const AdminCourses = () => {
  const [activeTab, setActiveTab] = useState("courses");
  const [courseModalOpen, setCourseModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  
  const { filteredCourses, filterCategory, setFilterCategory } = useCourses();

  const handleCreateCourse = () => {
    setSelectedCourse(null);
    setCourseModalOpen(true);
  };

  const handleEditCourse = (course: any) => {
    setSelectedCourse(course);
    setCourseModalOpen(true);
  };

  const handleDeleteCourse = (courseId: number) => {
    showNotification({
      type: "success",
      title: "Curso eliminado",
      message: "El curso ha sido eliminado exitosamente"
    });
  };

  const handleSaveCourse = (course: any) => {
    showNotification({
      type: "success",
      title: selectedCourse ? "Curso actualizado" : "Curso creado",
      message: `El curso ha sido ${selectedCourse ? "actualizado" : "creado"} exitosamente`
    });
  };

  return (
    <div>
      <AdminCoursesHeader onCreateCourse={handleCreateCourse} />

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="courses">Cursos</TabsTrigger>
          <TabsTrigger value="modules">Módulos</TabsTrigger>
          <TabsTrigger value="lessons">Lecciones</TabsTrigger>
        </TabsList>

        <TabsContent value="courses">
          <div className="flex justify-between mb-4">
            <CourseFilters 
              filterCategory={filterCategory}
              onFilterChange={setFilterCategory}
            />
          </div>
          
          <CoursesTable 
            courses={filteredCourses}
            onEdit={handleEditCourse}
            onDelete={handleDeleteCourse}
          />
        </TabsContent>

        <TabsContent value="modules">
          <div className="p-8 text-center text-gray-500">
            <p>Funcionalidad de módulos en desarrollo</p>
          </div>
        </TabsContent>

        <TabsContent value="lessons">
          <div className="p-8 text-center text-gray-500">
            <p>Funcionalidad de lecciones en desarrollo</p>
          </div>
        </TabsContent>
      </Tabs>

      <CourseModal
        open={courseModalOpen}
        onOpenChange={setCourseModalOpen}
        course={selectedCourse}
        onSave={handleSaveCourse}
      />
    </div>
  );
};

export default AdminCourses;
