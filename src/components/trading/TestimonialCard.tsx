
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, TrendingUp } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  rating: number;
  testimonial: string;
  monthlyEarnings: string;
  beforeAfter: {
    before: string;
    after: string;
  };
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  image,
  rating,
  testimonial,
  monthlyEarnings,
  beforeAfter
}) => {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full object-cover border-2 border-emerald-200"
          />
          <div className="flex-1">
            <h4 className="font-bold text-lg">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <blockquote className="text-gray-600 dark:text-gray-400 mb-4 italic">
          "{testimonial}"
        </blockquote>
        
        <div className="space-y-3">
          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="h-4 w-4 text-emerald-600" />
              <span className="font-semibold text-emerald-700 dark:text-emerald-300">
                Ganancia mensual actual:
              </span>
            </div>
            <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
              {monthlyEarnings}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-center p-2 bg-red-50 dark:bg-red-900/20 rounded">
              <p className="text-red-600 dark:text-red-400 font-medium">Antes</p>
              <p className="text-red-700 dark:text-red-300">{beforeAfter.before}</p>
            </div>
            <div className="text-center p-2 bg-green-50 dark:bg-green-900/20 rounded">
              <p className="text-green-600 dark:text-green-400 font-medium">Después</p>
              <p className="text-green-700 dark:text-green-300">{beforeAfter.after}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
