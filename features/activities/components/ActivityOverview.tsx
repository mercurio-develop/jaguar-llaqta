"use client";

import { Check, X } from "lucide-react";
import Card from "@/components/ui/Card";
import type { Package } from "@/config/packages";

interface ActivityOverviewProps {
  pkg: Package;
  locale: string;
}

export default function ActivityOverview({ pkg, locale }: ActivityOverviewProps) {
  const isSpanish = locale === "es";

  return (
    <section id="overview">
      <h2 className="font-display text-2xl text-white uppercase tracking-wider mb-8">
        {isSpanish ? "Resumen del Viaje" : "Trip Overview"}
      </h2>

      <p className="text-muted leading-relaxed text-lg mb-6">
        {isSpanish ? pkg.description : pkg.descriptionEn}
      </p>

      {/* Note/Glossary */}
      {(pkg.note || pkg.noteEn) && (
        <div className="mb-10 p-4 bg-accent/5 border-l-2 border-accent">
          <p className="text-white/80 text-sm italic">
            {isSpanish ? pkg.note : pkg.noteEn}
          </p>
        </div>
      )}

      {/* Highlights */}
      <div className="mb-10">
        <h3 className="font-display text-lg text-white uppercase tracking-wider mb-4">
          {isSpanish ? "Destacados" : "Highlights"}
        </h3>
        <div className="flex flex-wrap gap-3">
          {(isSpanish ? pkg.highlights : pkg.highlightsEn).map((highlight, i) => (
            <span
              key={i}
              className="flex items-center gap-2 px-4 py-2 border border-accent/20 text-white/80"
            >
              <span className="text-accent text-xs">◆</span>
              {highlight}
            </span>
          ))}
        </div>
      </div>

      {/* Includes / Not Includes */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-display text-lg text-white uppercase tracking-wider mb-4 flex items-center gap-3">
            <Check className="w-5 h-5 text-accent" />
            {isSpanish ? "Incluye" : "Includes"}
          </h3>
          <ul className="space-y-3">
            {(isSpanish ? pkg.includes : pkg.includesEn).map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted">
                <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="font-display text-lg text-white uppercase tracking-wider mb-4 flex items-center gap-3">
            <X className="w-5 h-5 text-muted" />
            {isSpanish ? "No Incluye" : "Not Included"}
          </h3>
          <ul className="space-y-3">
            {(isSpanish ? pkg.notIncludes : pkg.notIncludesEn).map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted">
                <X className="w-4 h-4 text-white/30 mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
