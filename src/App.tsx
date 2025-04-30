import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import LiveCourses from "./pages/LiveCourses";
import Engineering from "./pages/Engineering";
import Mining from "./pages/Mining";
import Management from "./pages/Management";
import Certifications from "./pages/Certifications";
import Schedule from "./pages/Schedule";
import Forums from "./pages/Forums";
import CourseView from "./pages/CourseView";
import CourseLesson from "./pages/CourseLesson";
import CourseExam from "./pages/CourseExam";
import Ranking from "./pages/Ranking"; // Add the import for Ranking page
import NotFound from "./pages/NotFound";
import Store from "./pages/Store"; // Add import for Store page

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/live-courses" element={<LiveCourses />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/mining" element={<Mining />} />
        <Route path="/management" element={<Management />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/forums" element={<Forums />} />
        <Route path="/course/:id" element={<CourseView />} />
        <Route path="/course/lesson/:id" element={<CourseLesson />} />
        <Route path="/course/exam/:id" element={<CourseExam />} />
        <Route path="/ranking" element={<Ranking />} /> {/* Add the route for Ranking */}
        <Route path="/store" element={<Store />} /> {/* Add route for Store */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
