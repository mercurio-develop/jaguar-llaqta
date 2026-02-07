"use client";

import { ChevronDown, ChevronUp, MapPin } from "lucide-react";
import { DayItinerary } from "@/config/packages";

function formatDescription(description: string) {
  const timePattern = /(\d{1,2}:\d{2}\s*(?:AM|PM|am|pm)?)\s*[–-]\s*/g;
  const parts = description.split(timePattern).filter(Boolean);

  if (parts.length <= 1) {
    return <p className="text-muted leading-relaxed">{description}</p>;
  }

  const items: { time: string; text: string }[] = [];
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i].trim();
    if (/^\d{1,2}:\d{2}\s*(?:AM|PM|am|pm)?$/.test(part)) {
      const text = parts[i + 1]?.trim() || "";
      items.push({ time: part, text });
      i++;
    }
  }

  const firstTimeIndex = description.search(timePattern);
  const prefixText = firstTimeIndex > 0 ? description.substring(0, firstTimeIndex).trim() : "";

  return (
    <div className="space-y-3">
      {prefixText && (
        <p className="text-muted leading-relaxed">{prefixText}</p>
      )}
      {items.map((item, index) => (
        <div key={index} className="flex gap-3">
          <span className="text-accent font-medium whitespace-nowrap min-w-[70px]">
            {item.time}
          </span>
          <p className="text-muted leading-relaxed">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

interface ItineraryDayProps {
  day: DayItinerary;
  isOpen: boolean;
  onToggle: () => void;
  locale: string;
}

export default function ItineraryDay({ day, isOpen, onToggle, locale }: ItineraryDayProps) {
  const isSpanish = locale === "es";
  const description = isSpanish ? day.description : day.descriptionEn;

  return (
    <div className="border border-support rounded overflow-hidden border-b-accent/30 border-b-2">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 bg-support/30 hover:bg-support/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold">
            {day.day}
          </span>
          <span className="font-medium text-white text-left text-base">
            {isSpanish ? day.title : day.titleEn}
          </span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-muted" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted" />
        )}
      </button>

      {isOpen && (
        <div className="p-6 bg-primary-alt/50">
          <div className="mb-4">
            {formatDescription(description)}
          </div>

          <div className="flex flex-wrap gap-6 text-sm pt-4 border-t border-support/50">
            {day.highlights && day.highlights.length > 0 && (
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <div>
                  <span className="text-white font-medium block mb-1">
                    {isSpanish ? "Destacados" : "Highlights"}
                  </span>
                  <span className="text-muted">
                    {(isSpanish ? day.highlights : (day.highlightsEn || day.highlights)).join(" · ")}
                  </span>
                </div>
              </div>
            )}

            {day.meals && (
              <div className="flex items-start gap-2">
                <span className="text-accent">◆</span>
                <div>
                  <span className="text-white font-medium block mb-1">
                    {isSpanish ? "Comidas" : "Meals"}
                  </span>
                  <span className="text-muted">
                    {isSpanish ? day.meals : (day.mealsEn || day.meals)}
                  </span>
                </div>
              </div>
            )}

            {day.accommodation && (
              <div className="flex items-start gap-2">
                <span className="text-accent">◆</span>
                <div>
                  <span className="text-white font-medium block mb-1">
                    {isSpanish ? "Alojamiento" : "Accommodation"}
                  </span>
                  <span className="text-muted">
                    {isSpanish ? day.accommodation : (day.accommodationEn || day.accommodation)}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
