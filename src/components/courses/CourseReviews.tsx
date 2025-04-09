
import { Star } from "lucide-react";

interface CourseReviewsProps {
  rating: number;
  reviews: number;
}

export const CourseReviews = ({ rating, reviews }: CourseReviewsProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold">Valoraciones y Reseñas</h3>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
          <div className="text-5xl font-bold">{rating.toFixed(1)}</div>
          <div className="flex mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(rating)
                    ? "fill-amber-400 text-amber-400"
                    : "text-gray-300 dark:text-gray-600"
                }`}
              />
            ))}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {reviews} valoraciones
          </div>
        </div>
        
        <div className="flex-1 space-y-2">
          {[5, 4, 3, 2, 1].map((star) => {
            const percentage = star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 7 : star === 2 ? 2 : 1;
            return (
              <div key={star} className="flex items-center">
                <div className="flex items-center mr-2">
                  <span className="text-sm mr-1">{star}</span>
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                </div>
                <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-400"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm ml-2">{percentage}%</span>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="mt-6">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-medium">Reseñas recientes</h4>
          <select className="text-sm bg-transparent border rounded-md px-2 py-1">
            <option>Más recientes</option>
            <option>Mejor calificados</option>
            <option>Peor calificados</option>
          </select>
        </div>
        
        <div className="space-y-6">
          <div className="border-b pb-6">
            <div className="flex justify-between items-start">
              <div className="flex items-start">
                <img
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&auto=format&fit=crop"
                  alt="Avatar"
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <h5 className="font-medium">Carlos Méndez</h5>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < 5
                            ? "fill-amber-400 text-amber-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                      hace 2 semanas
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm">
              Excelente curso, muy completo y con aplicaciones prácticas que he podido implementar inmediatamente en mi trabajo. El instructor explica claramente conceptos complejos.
            </p>
          </div>
          
          <div className="border-b pb-6">
            <div className="flex justify-between items-start">
              <div className="flex items-start">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&auto=format&fit=crop"
                  alt="Avatar"
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <h5 className="font-medium">Ana Martínez</h5>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < 4
                            ? "fill-amber-400 text-amber-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                      hace 1 mes
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm">
              Muy buen curso, aunque algunas secciones podrían actualizarse con ejemplos más recientes. En general, el material es valioso y me ha ayudado a comprender mejor los procesos mineros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
