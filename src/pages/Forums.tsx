
import PageLayout from "@/components/layout/PageLayout";
import { ForumsList } from "@/components/forums/ForumsList";

const Forums = () => {
  return (
    <PageLayout 
      title="Foros de Discusión" 
      subtitle="Comunícate con otros estudiantes y profesores sobre los temas de tu interés"
    >
      <div className="w-full">
        <ForumsList />
      </div>
    </PageLayout>
  );
};

export default Forums;
