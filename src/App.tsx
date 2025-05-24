import { Routes, Route } from "react-router-dom";
import { AppProvider } from "@/contexts/AppContext";
import { Toaster } from "@/components/ui/sonner";
import Index from "@/pages/Index";
import Dashboard from "@/pages/Dashboard";
import Courses from "@/pages/Courses";
import LearningPaths from "@/pages/LearningPaths";
import Certifications from "@/pages/Certifications";
import LiveCourses from "@/pages/LiveCourses";
import Resources from "@/pages/Resources";
import Forums from "@/pages/Forums";
import Ranking from "@/pages/Ranking";
import Schedule from "@/pages/Schedule";
import JobBoard from "@/pages/JobBoard";
import Referrals from "@/pages/Referrals";
import Store from "@/pages/Store";
import Pricing from "@/pages/Pricing";
import Admin from "@/pages/Admin";
import Profile from "@/pages/Profile";
import Settings from "@/pages/Settings";
import Help from "@/pages/Help";
import Engineering from "@/pages/Engineering";
import Mining from "@/pages/Mining";
import Management from "@/pages/Management";
import Assessment from "@/pages/Assessment";

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/learning-paths" element={<LearningPaths />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/live-courses" element={<LiveCourses />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/job-board" element={<JobBoard />} />
          <Route path="/referrals" element={<Referrals />} />
          <Route path="/store" element={<Store />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/mining" element={<Mining />} />
          <Route path="/management" element={<Management />} />
          <Route path="/assessment" element={<Assessment />} />
        </Routes>
        <Toaster />
      </div>
    </AppProvider>
  );
}

export default App;
