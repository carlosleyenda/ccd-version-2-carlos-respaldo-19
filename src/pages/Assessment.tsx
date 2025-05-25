
import PageLayout from "@/components/layout/PageLayout";
import AssessmentStats from "@/components/assessment/AssessmentStats";
import AssessmentFilters from "@/components/assessment/AssessmentFilters";
import AssessmentList from "@/components/assessment/AssessmentList";

const Assessment = () => {
  const mockStats = {
    totalAssessments: 45,
    completedAssessments: 18,
    averageScore: 82,
    totalCertifications: 3,
    lastCompletedDate: "2024-03-15"
  };

  return (
    <PageLayout 
      title="Centro de Evaluación Trading" 
      subtitle="Realiza evaluaciones y exámenes para medir tu progreso en trading"
    >
      <div className="w-full relative z-10 space-y-6">
        <AssessmentStats stats={mockStats} />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div>
            <AssessmentFilters 
              selectedCategory="all"
              setSelectedCategory={() => {}}
              selectedLevel="all"
              setSelectedLevel={() => {}}
              showCompleted={true}
              setShowCompleted={() => {}}
            />
          </div>
          <div className="lg:col-span-3">
            <AssessmentList />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Assessment;
