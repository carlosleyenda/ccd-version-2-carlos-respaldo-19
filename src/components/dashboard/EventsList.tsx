
import React from "react";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  instructor: string;
}

interface EventsListProps {
  events: Event[];
}

const EventsList: React.FC<EventsListProps> = ({ events }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <div key={event.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <div className="bg-mining-100 dark:bg-mining-900/30 text-mining-800 dark:text-mining-300 text-xs font-medium px-2.5 py-0.5 rounded">
              Próximo evento
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">{event.date}</span>
          </div>
          <h3 className="font-semibold mb-2">{event.title}</h3>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
            <Clock className="h-4 w-4 mr-1" />
            <span>{event.time}</span>
          </div>
          <div className="text-sm">Instructor: {event.instructor}</div>
          <div className="mt-4">
            <Button className="w-full" variant="outline">
              Agregar al calendario
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsList;
