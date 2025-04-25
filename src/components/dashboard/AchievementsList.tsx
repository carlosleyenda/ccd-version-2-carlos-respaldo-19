
import React from "react";
import { Trophy, Award, BookOpen } from "lucide-react";

export interface Achievement {
  id: number;
  title: string;
  icon: JSX.Element;
  date: string;
}

interface AchievementsListProps {
  achievements: Achievement[];
}

const AchievementsList: React.FC<AchievementsListProps> = ({ achievements }) => {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold mb-6">Tus logros</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="border rounded-lg p-6 flex items-center space-x-4 hover:shadow-md transition-shadow bg-white dark:bg-gray-800">
            <div className="flex-shrink-0">
              {achievement.icon}
            </div>
            <div>
              <h3 className="font-semibold">{achievement.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {achievement.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsList;
