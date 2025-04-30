
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  RadioGroup, 
  RadioGroupItem 
} from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Clock, AlertTriangle, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import PageLayout from "@/components/layout/PageLayout";

const CourseExam = () => {
  const { id, examId } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(60); // minutos
  
  // Datos de ejemplo para el examen (en una aplicación real, vendrían de una API)
  const examData = {
    title: "Examen Parcial - Módulo 1",
    description: "Evaluación de conceptos fundamentales de minería subterránea",
    duration: "60 minutos",
    totalQuestions: 5,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        text: "¿Cuál de los siguientes NO es un método principal para acceder a depósitos minerales subterráneos?",
        options: [
          { id: "a", text: "Pozos verticales" },
          { id: "b", text: "Rampas inclinadas" },
          { id: "c", text: "Túneles horizontales" },
          { id: "d", text: "Excavaciones diagonales cruzadas" }
        ],
        correctAnswer: "d"
      },
      {
        id: "q2",
        text: "¿Qué sistema es esencial para proporcionar aire respirable a los trabajadores en minería subterránea?",
        options: [
          { id: "a", text: "Sistema de drenaje" },
          { id: "b", text: "Sistema de ventilación" },
          { id: "c", text: "Sistema de iluminación" },
          { id: "d", text: "Sistema de comunicación" }
        ],
        correctAnswer: "b"
      },
      {
        id: "q3",
        text: "¿Cuál de los siguientes NO es un método común de soporte de terreno en minería subterránea?",
        options: [
          { id: "a", text: "Pernos de anclaje" },
          { id: "b", text: "Mallas metálicas" },
          { id: "c", text: "Hormigón proyectado (shotcrete)" },
          { id: "d", text: "Pilares hidráulicos expansivos" }
        ],
        correctAnswer: "d"
      },
      {
        id: "q4",
        text: "La geometría del yacimiento mineral es un factor determinante para:",
        options: [
          { id: "a", text: "La selección del método de extracción" },
          { id: "b", text: "La ubicación de la planta de procesamiento" },
          { id: "c", text: "El tipo de explosivos a utilizar" },
          { id: "d", text: "La duración del proyecto minero" }
        ],
        correctAnswer: "a"
      },
      {
        id: "q5",
        text: "¿Cuál es el propósito principal de un sistema de ventilación en minería subterránea?",
        options: [
          { id: "a", text: "Reducir costos operativos" },
          { id: "b", text: "Incrementar la producción" },
          { id: "c", text: "Garantizar condiciones ambientales seguras" },
          { id: "d", text: "Facilitar el transporte de mineral" }
        ],
        correctAnswer: "c"
      }
    ]
  };

  const currentQuestionData = examData.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / examData.totalQuestions) * 100;
  
  const handleNext = () => {
    if (currentQuestion < examData.totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  
  const handleAnswerChange = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };
  
  const calculateScore = () => {
    let correct = 0;
    examData.questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return (correct / examData.totalQuestions) * 100;
  };
  
  const handleSubmit = () => {
    // Verificar si todas las preguntas han sido respondidas
    if (Object.keys(answers).length < examData.totalQuestions) {
      toast.error(`Por favor responde todas las preguntas antes de enviar el examen.`);
      return;
    }
    
    const score = calculateScore();
    setSubmitted(true);
    
    if (score >= examData.passingScore) {
      toast.success(`¡Felicidades! Has aprobado con un ${score.toFixed(0)}% de puntuación.`);
    } else {
      toast.error(`Has obtenido un ${score.toFixed(0)}%. Necesitas un ${examData.passingScore}% para aprobar.`);
    }
  };
  
  const handleFinish = () => {
    navigate(`/course/${id}`);
  };
  
  // En un escenario real, habría un temporizador que actualiza timeRemaining
  
  if (submitted) {
    const score = calculateScore();
    const passed = score >= examData.passingScore;
    
    return (
      <PageLayout title="Resultados del Examen" subtitle={examData.title}>
        <div className="max-w-3xl mx-auto my-8">
          <Card className="border-2 shadow-md">
            <CardHeader className={passed ? "bg-green-50 dark:bg-green-900/20" : "bg-red-50 dark:bg-red-900/20"}>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className={passed ? "text-green-700 dark:text-green-300" : "text-red-700 dark:text-red-300"}>
                    {passed ? "¡Examen Aprobado!" : "Examen No Aprobado"}
                  </CardTitle>
                  <CardDescription>
                    {passed 
                      ? "Has demostrado un buen dominio de los conceptos evaluados." 
                      : "Te recomendamos revisar nuevamente el material del módulo."}
                  </CardDescription>
                </div>
                {passed ? (
                  <CheckCircle className="h-12 w-12 text-green-500" />
                ) : (
                  <AlertTriangle className="h-12 w-12 text-red-500" />
                )}
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">{score.toFixed(0)}%</div>
                  <p className="text-muted-foreground">Tu puntuación</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Puntuación mínima para aprobar</span>
                    <span>{examData.passingScore}%</span>
                  </div>
                  <Progress value={examData.passingScore} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Tu puntuación</span>
                    <span>{score.toFixed(0)}%</span>
                  </div>
                  <Progress 
                    value={score} 
                    className={`h-2 ${passed ? 'bg-green-500' : 'bg-red-500'}`} 
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Total de preguntas</p>
                    <p className="font-medium">{examData.totalQuestions}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Respuestas correctas</p>
                    <p className="font-medium">{Math.round(score / 100 * examData.totalQuestions)}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Fecha</p>
                    <p className="font-medium">{new Date().toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Tiempo utilizado</p>
                    <p className="font-medium">{examData.duration}</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setSubmitted(false)}>
                Ver respuestas
              </Button>
              <Button onClick={handleFinish}>
                Volver al curso
              </Button>
            </CardFooter>
          </Card>
        </div>
      </PageLayout>
    );
  }
  
  return (
    <PageLayout title="Examen del Curso" subtitle={examData.title}>
      <div className="max-w-3xl mx-auto my-8">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>{examData.title}</CardTitle>
                <CardDescription>{examData.description}</CardDescription>
              </div>
              <div className="flex items-center text-amber-600 dark:text-amber-500 bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-full">
                <Clock className="h-4 w-4 mr-1" /> 
                <span className="text-sm font-medium">{timeRemaining} min restantes</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Pregunta {currentQuestion + 1} de {examData.totalQuestions}</span>
                  <span>{progress.toFixed(0)}% completado</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
              
              <div className="pt-4">
                <h3 className="text-lg font-medium mb-4">
                  {currentQuestion + 1}. {currentQuestionData.text}
                </h3>
                
                <RadioGroup 
                  value={answers[currentQuestion] || ''} 
                  onValueChange={handleAnswerChange}
                  className="space-y-3"
                >
                  {currentQuestionData.options.map(option => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.id} id={`option-${option.id}`} />
                      <Label 
                        htmlFor={`option-${option.id}`}
                        className="text-base cursor-pointer py-2"
                      >
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button 
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex items-center gap-1"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Anterior</span>
            </Button>
            
            <div>
              {currentQuestion === examData.totalQuestions - 1 ? (
                <Button onClick={handleSubmit}>
                  Finalizar examen
                </Button>
              ) : (
                <Button onClick={handleNext} className="flex items-center gap-1">
                  <span>Siguiente</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </CardFooter>
        </Card>
      </div>
    </PageLayout>
  );
};

export default CourseExam;
