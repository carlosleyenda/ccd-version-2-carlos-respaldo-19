
import PageLayout from "@/components/layout/PageLayout";
import { AssessmentStats } from "@/components/assessment/AssessmentStats";
import { AssessmentFilters } from "@/components/assessment/AssessmentFilters";
import { AssessmentList } from "@/components/assessment/AssessmentList";

const Assessment = () => {
  return (
    <PageLayout 
      title="Centro de Evaluación" 
      subtitle="Realiza evaluaciones y exámenes para medir tu progreso"
    >
      <div className="w-full relative z-10 space-y-6">
        <AssessmentStats />
        <AssessmentFilters />
        <AssessmentList />
      </div>
    </PageLayout>
  );
};

export default Assessment;
