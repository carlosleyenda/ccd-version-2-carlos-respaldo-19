
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
import CoursePreview from "./pages/CoursePreview";
import Ranking from "./pages/Ranking";
import NotFound from "./pages/NotFound";
import Store from "./pages/Store";
import Pricing from "./pages/Pricing";
import UserProfile from "./pages/UserProfile";
import LearningPaths from "./pages/LearningPaths";
import AssessmentCenter from "./pages/AssessmentCenter";
import ResourceLibrary from "./pages/ResourceLibrary";
import PathDetail from "./pages/PathDetail";
import JobBoard from "./pages/JobBoard";
import Referrals from "./pages/Referrals";
import Admin from "./pages/Admin";
import AiAssistant from "./components/ai/AiAssistant";

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
        <Route path="/course/:id/preview" element={<CoursePreview />} />
        <Route path="/course/lesson/:id" element={<CourseLesson />} />
        <Route path="/course/exam/:id" element={<CourseExam />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/store" element={<Store />} />
        <Route path="/pricing" element={<Pricing />} />
        
        {/* Rutas */}
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/learning-paths" element={<LearningPaths />} />
        <Route path="/learning-paths/:id" element={<PathDetail />} />
        <Route path="/assessment" element={<AssessmentCenter />} />
        <Route path="/resources" element={<ResourceLibrary />} />
        <Route path="/job-board" element={<JobBoard />} />
        <Route path="/referrals" element={<Referrals />} />
        
        {/* Ruta del panel de administración */}
        <Route path="/admin" element={<Admin />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <AiAssistant />
    </div>
  );
};

export default App;
