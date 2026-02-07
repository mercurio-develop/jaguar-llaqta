"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Mountain, Users, Sparkles, Clock } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { packages, type ActivityCategory } from "@/config/packages";

const categoryIcons: Record<ActivityCategory, typeof Mountain> = {
  rutas: Mountain,
  comunidad: Users,
  ceremonias: Sparkles,
};

const categoryColors: Record<ActivityCategory, string> = {
  rutas: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  comunidad: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  ceremonias: "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

// Generate sample activities from packages
const generateActivities = () => {
  const activities: Array<{
    id: string;
    title: string;
    titleEn: string;
    category: ActivityCategory;
    date: Date;
    duration: string;
    price: number;
    spots: number;
  }> = [];

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  packages.forEach((pkg, index) => {
    // Generate 1-2 activities per package in the current/next months
    const daysOffset = (index * 5) + 7;
    const date1 = new Date(currentYear, currentMonth, daysOffset % 28 + 1);
    const date2 = new Date(currentYear, currentMonth + 1, ((index * 7) % 25) + 3);

    activities.push({
      id: `${pkg.id}-1`,
      title: pkg.name,
      titleEn: pkg.nameEn,
      category: pkg.category,
      date: date1,
      duration: pkg.duration,
      price: pkg.price,
      spots: Math.floor(Math.random() * 6) + 2,
    });

    activities.push({
      id: `${pkg.id}-2`,
      title: pkg.name,
      titleEn: pkg.nameEn,
      category: pkg.category,
      date: date2,
      duration: pkg.duration,
      price: pkg.price,
      spots: Math.floor(Math.random() * 8) + 3,
    });
  });

  return activities;
};

const activities = generateActivities();

interface CalendarProps {
  locale: "es" | "en";
  showUpcoming?: boolean;
  className?: string;
}

export default function Calendar({ locale, showUpcoming = true, className }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const isSpanish = locale === "es";

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

  const monthNames = isSpanish
    ? ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const dayNames = isSpanish
    ? ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
    : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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
    <div className={className}>
      <div className={cn("grid gap-8", showUpcoming ? "lg:grid-cols-3" : "")}>
        {/* Calendar */}
        <div className={showUpcoming ? "lg:col-span-2" : ""}>
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
                        const Icon = categoryIcons[activity.category];
                        return (
                          <div
                            key={activity.id}
                            className={cn(
                              "text-xs px-1 py-0.5 rounded truncate flex items-center gap-1",
                              categoryColors[activity.category]
                            )}
                          >
                            <Icon className="w-3 h-3 flex-shrink-0" />
                            <span className="hidden sm:inline truncate">
                              {isSpanish ? activity.title : activity.titleEn}
                            </span>
                          </div>
                        );
                      })}
                      {dayActivities.length > 2 && (
                        <div className="text-xs text-muted">
                          +{dayActivities.length - 2} {isSpanish ? "más" : "more"}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-white/10">
              {(Object.keys(categoryIcons) as ActivityCategory[]).map((key) => {
                const labels: Record<ActivityCategory, { es: string; en: string }> = {
                  rutas: { es: "Rutas", en: "Routes" },
                  comunidad: { es: "Comunidad", en: "Community" },
                  ceremonias: { es: "Ceremonias", en: "Ceremonies" },
                };
                return (
                  <div key={key} className="flex items-center gap-2 text-sm text-muted">
                    <div className={cn("w-3 h-3 rounded", categoryColors[key])} />
                    <span>{labels[key][locale]}</span>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Upcoming activities */}
        {showUpcoming && (
          <div>
            <h3 className="font-display text-lg text-white mb-4">
              {isSpanish ? "Próximas Actividades" : "Upcoming Activities"}
            </h3>
            <div className="space-y-4">
              {upcomingActivities.map((activity) => {
                const Icon = categoryIcons[activity.category];
                const pkg = packages.find(p => activity.id.startsWith(p.id));
                return (
                  <Card key={activity.id} variant="hover" className="p-4">
                    <div className="flex items-start gap-3">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                          categoryColors[activity.category]
                        )}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-white truncate">
                          {isSpanish ? activity.title : activity.titleEn}
                        </h4>
                        <div className="flex items-center gap-2 text-muted text-sm">
                          <span>{activity.date.toLocaleDateString(locale === "es" ? "es-PE" : "en-US")}</span>
                          <span>·</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {activity.duration}
                          </span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-accent font-bold tracking-tight">${activity.price}</span>
                          <span className="text-xs text-muted">
                            {activity.spots} {isSpanish ? "plazas" : "spots"}
                          </span>
                        </div>
                      </div>
                    </div>
                    {pkg && (
                      <Link href={`/${locale}/reservas?paquete=${pkg.id}`} className="mt-3 block">
                        <Button size="sm" className="w-full">
                          {isSpanish ? "Pre-Reservar" : "Pre-Book"}
                        </Button>
                      </Link>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
