"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Mountain, Users, Sparkles, Clock } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const activities = [
  {
    id: 1,
    title: "Salkantay Trek",
    category: "ruta",
    date: new Date(2026, 1, 15),
    duration: "5 días",
    price: 450,
    spots: 4,
  },
  {
    id: 2,
    title: "Ceremonia Luna Llena",
    category: "espiritual",
    date: new Date(2026, 1, 12),
    duration: "Noche",
    price: 70,
    spots: 6,
  },
  {
    id: 3,
    title: "Taller de Textiles",
    category: "comunidad",
    date: new Date(2026, 1, 18),
    duration: "Medio día",
    price: 75,
    spots: 8,
  },
  {
    id: 4,
    title: "Ausangate Trek",
    category: "ruta",
    date: new Date(2026, 1, 22),
    duration: "4 días",
    price: 380,
    spots: 6,
  },
  {
    id: 5,
    title: "Experiencia Gastronómica",
    category: "comunidad",
    date: new Date(2026, 1, 20),
    duration: "Día completo",
    price: 95,
    spots: 10,
  },
  {
    id: 6,
    title: "Ceremonia Pachamama",
    category: "espiritual",
    date: new Date(2026, 2, 1),
    duration: "Medio día",
    price: 80,
    spots: 8,
  },
];

const categoryIcons = {
  ruta: Mountain,
  comunidad: Users,
  espiritual: Sparkles,
};

const categoryColors = {
  ruta: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  comunidad: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  espiritual: "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

export default function CalendarPage() {
  const t = useTranslations("calendar");
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1, 1));

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const getActivitiesForDay = (day: number) => {
    return activities.filter((activity) => {
      return (
        activity.date.getDate() === day &&
        activity.date.getMonth() === currentDate.getMonth() &&
        activity.date.getFullYear() === currentDate.getFullYear()
      );
    });
  };

  const upcomingActivities = activities
    .filter((a) => a.date >= new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 5);

  return (
    <div className="pt-20">
      <section className="py-24 bg-primary-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="section-title mb-4">{t("title")}</h1>
            <p className="section-subtitle">{t("subtitle")}</p>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <div className="lg:col-span-2">
              <Card className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={previousMonth}
                    className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <h2 className="font-display text-xl text-white">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </h2>
                  <button
                    onClick={nextMonth}
                    className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Day names */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {dayNames.map((day) => (
                    <div
                      key={day}
                      className="text-center text-muted text-sm py-2"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Days */}
                <div className="grid grid-cols-7 gap-1">
                  {/* Empty cells for days before the first of the month */}
                  {[...Array(firstDayOfMonth)].map((_, i) => (
                    <div key={`empty-${i}`} className="aspect-square" />
                  ))}

                  {/* Days of the month */}
                  {[...Array(daysInMonth)].map((_, i) => {
                    const day = i + 1;
                    const dayActivities = getActivitiesForDay(day);
                    const hasActivities = dayActivities.length > 0;

                    return (
                      <div
                        key={day}
                        className={cn(
                          "aspect-square p-1 rounded-lg border transition-colors",
                          hasActivities
                            ? "border-accent/30 bg-accent/5 hover:bg-accent/10 cursor-pointer"
                            : "border-transparent hover:bg-white/5"
                        )}
                      >
                        <div className="text-sm text-white/70 mb-1">{day}</div>
                        <div className="space-y-1">
                          {dayActivities.slice(0, 2).map((activity) => {
                            const Icon = categoryIcons[activity.category as keyof typeof categoryIcons];
                            return (
                              <div
                                key={activity.id}
                                className={cn(
                                  "text-xs px-1 py-0.5 rounded truncate flex items-center gap-1",
                                  categoryColors[activity.category as keyof typeof categoryColors]
                                )}
                              >
                                <Icon className="w-3 h-3 flex-shrink-0" />
                                <span className="hidden sm:inline truncate">{activity.title}</span>
                              </div>
                            );
                          })}
                          {dayActivities.length > 2 && (
                            <div className="text-xs text-muted">
                              +{dayActivities.length - 2} más
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Legend */}
                <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-white/10">
                  {Object.entries(categoryIcons).map(([key, Icon]) => (
                    <div key={key} className="flex items-center gap-2 text-sm text-muted">
                      <div className={cn("w-3 h-3 rounded", categoryColors[key as keyof typeof categoryColors])} />
                      <span className="capitalize">{key}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Upcoming activities */}
            <div>
              <h3 className="font-display text-lg text-white mb-4">Próximas Actividades</h3>
              <div className="space-y-4">
                {upcomingActivities.map((activity) => {
                  const Icon = categoryIcons[activity.category as keyof typeof categoryIcons];
                  return (
                    <Card key={activity.id} variant="hover" className="p-4">
                      <div className="flex items-start gap-3">
                        <div
                          className={cn(
                            "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                            categoryColors[activity.category as keyof typeof categoryColors]
                          )}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-white truncate">{activity.title}</h4>
                          <div className="flex items-center gap-2 text-muted text-sm">
                            <span>{activity.date.toLocaleDateString()}</span>
                            <span>·</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {activity.duration}
                            </span>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-accent font-medium">${activity.price}</span>
                            <span className="text-xs text-muted">{activity.spots} plazas</span>
                          </div>
                        </div>
                      </div>
                      <Link href={`/${locale}/reservas?activity=${activity.id}`} className="mt-3 block">
                        <Button size="sm" className="w-full">Reservar</Button>
                      </Link>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
