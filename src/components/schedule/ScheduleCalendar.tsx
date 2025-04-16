
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar as CalendarIcon, Video, BookOpen, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

type EventType = "live" | "class" | "exam" | "practice";

interface ScheduleEvent {
  id: string;
  title: string;
  description: string;
  date: Date;
  startTime: string;
  endTime: string;
  type: EventType;
  location?: string;
  courseId?: string;
  instructorName?: string;
  participants?: number;
}

const typeColors: Record<EventType, string> = {
  live: "bg-red-500",
  class: "bg-blue-500",
  exam: "bg-yellow-500",
  practice: "bg-green-500"
};

const typeLabels: Record<EventType, string> = {
  live: "En vivo",
  class: "Clase",
  exam: "Examen",
  practice: "Práctica"
};

export const ScheduleCalendar = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedEvent, setSelectedEvent] = useState<ScheduleEvent | null>(null);
  
  // Mock events data - in a real app, this would come from an API
  const events: ScheduleEvent[] = [
    {
      id: "event-1",
      title: "Técnicas Avanzadas de Minería Subterránea",
      description: "Sesión en vivo sobre sistemas de ventilación",
      date: new Date(),
      startTime: "10:00",
      endTime: "12:00",
      type: "live",
      courseId: "course-1",
      instructorName: "Dr. Carlos Rodríguez",
      participants: 245
    },
    {
      id: "event-2",
      title: "Seguridad en Excavaciones",
      description: "Clase sobre protocolos de emergencia",
      date: new Date(),
      startTime: "14:30",
      endTime: "16:00",
      type: "class",
      location: "Aula Virtual 3",
      courseId: "course-2",
      instructorName: "Ing. María Sánchez"
    },
    {
      id: "event-3",
      title: "Evaluación de Impacto Ambiental",
      description: "Examen parcial del módulo 2",
      date: new Date(new Date().setDate(new Date().getDate() + 2)),
      startTime: "09:00",
      endTime: "11:00",
      type: "exam",
      courseId: "course-3"
    },
    {
      id: "event-4",
      title: "Laboratorio de Análisis de Muestras",
      description: "Práctica virtual de identificación de minerales",
      date: new Date(new Date().setDate(new Date().getDate() + 1)),
      startTime: "15:00",
      endTime: "17:30",
      type: "practice",
      location: "Laboratorio Virtual",
      courseId: "course-4",
      instructorName: "Dr. Felipe Torres"
    },
  ];

  // Filter events for the selected date
  const filteredEvents = events.filter(event => 
    date && 
    event.date.getDate() === date.getDate() && 
    event.date.getMonth() === date.getMonth() && 
    event.date.getFullYear() === date.getFullYear()
  );

  // Highlight dates with events
  const highlightedDates = events.map(event => event.date);

  const handleJoinEvent = (event: ScheduleEvent) => {
    if (event.type === "live") {
      toast.success("Uniéndote a la transmisión en vivo...");
      navigate(`/course/${event.courseId}/live`);
    } else if (event.type === "class") {
      toast.success("Accediendo a la clase virtual...");
      navigate(`/course/${event.courseId}`);
    } else if (event.type === "exam") {
      toast.info("Preparando examen...");
      navigate(`/course/${event.courseId}`);
    } else {
      toast.success("Accediendo a la práctica virtual...");
      navigate(`/course/${event.courseId}`);
    }
  };

  const handleEventClick = (event: ScheduleEvent) => {
    setSelectedEvent(event);
  };

  const handleAddToCalendar = (event: ScheduleEvent) => {
    toast.success("Evento añadido a tu calendario personal");
    // In a real app, this would integrate with calendar APIs
  };

  const handleSetReminder = (event: ScheduleEvent) => {
    toast.success("Recordatorio configurado con éxito");
    // In a real app, this would set up notifications
  };

  return (
    <div className="container max-w-6xl py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Mi Horario</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Administra y visualiza tu horario de clases, exámenes y eventos
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Calendario</CardTitle>
              <CardDescription>Selecciona una fecha para ver los eventos</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                modifiers={{
                  highlighted: highlightedDates
                }}
                modifiersStyles={{
                  highlighted: {
                    fontWeight: 'bold',
                    backgroundColor: 'var(--primary-50)',
                    color: 'var(--primary)',
                    borderRadius: '0'
                  }
                }}
              />
              
              <div className="mt-4">
                <h4 className="font-medium mb-2">Leyenda</h4>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(typeLabels).map(([key, label]) => (
                    <div key={key} className="flex items-center">
                      <div 
                        className={`w-3 h-3 rounded-full mr-1 ${typeColors[key as EventType]}`}
                      />
                      <span className="text-xs">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>
                {date ? (
                  <div className="flex items-center">
                    <CalendarIcon className="h-5 w-5 mr-2" />
                    {date.toLocaleDateString('es-ES', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                ) : (
                  "Eventos"
                )}
              </CardTitle>
              <CardDescription>
                {filteredEvents.length} evento{filteredEvents.length !== 1 ? 's' : ''} programado{filteredEvents.length !== 1 ? 's' : ''}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {filteredEvents.length > 0 ? (
                <div className="space-y-4">
                  {filteredEvents.map((event) => (
                    <Card 
                      key={event.id} 
                      className={`border-l-4 ${typeColors[event.type]} hover:shadow-md transition-shadow cursor-pointer`}
                      onClick={() => handleEventClick(event)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center mb-1">
                              <Badge variant="outline" className={`mr-2 text-xs ${event.type === 'live' ? 'bg-red-100 text-red-800' : ''}`}>
                                {typeLabels[event.type]}
                              </Badge>
                              <span className="text-sm text-gray-500 flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {event.startTime} - {event.endTime}
                              </span>
                            </div>
                            <h3 className="font-medium mb-1">{event.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                              {event.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                              {event.instructorName && (
                                <span className="flex items-center">
                                  <Users className="h-3 w-3 mr-1" />
                                  {event.instructorName}
                                </span>
                              )}
                              {event.location && (
                                <span className="flex items-center">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  {event.location}
                                </span>
                              )}
                              {event.participants && (
                                <span className="flex items-center">
                                  <Users className="h-3 w-3 mr-1" />
                                  {event.participants} participantes
                                </span>
                              )}
                            </div>
                          </div>
                          
                          <Button
                            size="sm"
                            className="ml-2"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleJoinEvent(event);
                            }}
                          >
                            {event.type === "live" ? (
                              <>
                                <Video className="h-4 w-4 mr-1" />
                                Unirse
                              </>
                            ) : event.type === "exam" ? (
                              <>
                                <BookOpen className="h-4 w-4 mr-1" />
                                Preparar
                              </>
                            ) : (
                              <>
                                <BookOpen className="h-4 w-4 mr-1" />
                                Acceder
                              </>
                            )}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <CalendarIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium mb-2">No hay eventos</h3>
                  <p className="text-gray-500 mb-6">
                    No tienes eventos programados para este día.
                  </p>
                  <Button variant="outline" onClick={() => toast.info("Funcionalidad de agregar evento no implementada")}>
                    Agregar evento
                  </Button>
                </div>
              )}

              {selectedEvent && (
                <div className="mt-8">
                  <Separator className="my-4" />
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Detalles del evento</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Card>
                        <CardContent className="p-4">
                          <h4 className="font-medium mb-2">{selectedEvent.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            {selectedEvent.description}
                          </p>
                          
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center">
                              <CalendarIcon className="h-4 w-4 mr-2 text-gray-500" />
                              {selectedEvent.date.toLocaleDateString()}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-gray-500" />
                              {selectedEvent.startTime} - {selectedEvent.endTime}
                            </div>
                            {selectedEvent.location && (
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                                {selectedEvent.location}
                              </div>
                            )}
                            {selectedEvent.instructorName && (
                              <div className="flex items-center">
                                <Users className="h-4 w-4 mr-2 text-gray-500" />
                                Instructor: {selectedEvent.instructorName}
                              </div>
                            )}
                            {selectedEvent.participants && (
                              <div className="flex items-center">
                                <Users className="h-4 w-4 mr-2 text-gray-500" />
                                {selectedEvent.participants} participantes
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                      
                      <div className="flex flex-col gap-4">
                        <Button 
                          className="w-full" 
                          onClick={() => handleJoinEvent(selectedEvent)}
                        >
                          {selectedEvent.type === "live" ? (
                            <>
                              <Video className="h-4 w-4 mr-2" />
                              Unirse ahora
                            </>
                          ) : selectedEvent.type === "exam" ? (
                            <>
                              <BookOpen className="h-4 w-4 mr-2" />
                              Preparar examen
                            </>
                          ) : (
                            <>
                              <BookOpen className="h-4 w-4 mr-2" />
                              Acceder al contenido
                            </>
                          )}
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          className="w-full"
                          onClick={() => handleAddToCalendar(selectedEvent)}
                        >
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          Añadir a calendario
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          className="w-full"
                          onClick={() => handleSetReminder(selectedEvent)}
                        >
                          <Clock className="h-4 w-4 mr-2" />
                          Establecer recordatorio
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
