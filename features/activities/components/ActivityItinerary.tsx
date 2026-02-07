"use client";

import { useState } from "react";
import { ItineraryDay } from "@/features/activities/components";
import type { Package } from "@/config/packages";

interface ActivityItineraryProps {
  pkg: Package;
  locale: string;
}

export default function ActivityItinerary({ pkg, locale }: ActivityItineraryProps) {
  const isSpanish = locale === "es";
  const [openDays, setOpenDays] = useState<number[]>([1]);

  const toggleDay = (day: number) => {
    setOpenDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const expandAll = () => {
    setOpenDays(pkg.itinerary.map((d) => d.day));
  };

  const collapseAll = () => {
    setOpenDays([]);
  };

  return (
    <section id="itinerary">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-display text-2xl text-white uppercase tracking-wider">
          {isSpanish ? "Itinerario Día a Día" : "Day by Day Itinerary"}
        </h2>
        <div className="flex gap-4 text-sm">
          <button
            onClick={expandAll}
            className="text-muted hover:text-accent transition-colors"
          >
            {isSpanish ? "Expandir" : "Expand"}
          </button>
          <span className="text-support">|</span>
          <button
            onClick={collapseAll}
            className="text-muted hover:text-accent transition-colors"
          >
            {isSpanish ? "Colapsar" : "Collapse"}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {pkg.itinerary.map((day) => (
          <ItineraryDay
            key={day.day}
            day={day}
            isOpen={openDays.includes(day.day)}
            onToggle={() => toggleDay(day.day)}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
}
