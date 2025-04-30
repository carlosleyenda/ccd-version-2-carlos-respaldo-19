
import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import { CourseCardProps } from "./CourseCard";

interface DashboardCoursesProps {
  courses: CourseCardProps[];
}

const DashboardCourses: React.FC<DashboardCoursesProps> = ({ courses }) => {
  return (
    <div className="mt-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h2 className="text-xl font-bold">Tus cursos en progreso</h2>
        <Link to="/courses" className="text-primary hover:underline mt-2 md:mt-0">
          Ver todos los cursos
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} showContinueButton={true} />
        ))}
      </div>
    </div>
  );
};

export default DashboardCourses;
