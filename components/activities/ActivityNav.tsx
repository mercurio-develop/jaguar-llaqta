"use client";

import SectionNavigation, { Section } from "@/components/navigation/SectionNavigation";

interface ActivityNavProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  locale: string;
}

export default function ActivityNav({ activeSection, onSectionChange, locale }: ActivityNavProps) {
  const isSpanish = locale === "es";

  const sections: Section[] = [
    { id: "overview", label: isSpanish ? "Resumen" : "Overview" },
    { id: "itinerary", label: isSpanish ? "Itinerario" : "Itinerary" },
    { id: "requirements", label: isSpanish ? "Requisitos" : "Requirements" },
    { id: "gallery", label: isSpanish ? "Galería" : "Gallery" },
  ];

  return (
    <SectionNavigation
      sections={sections}
      activeSection={activeSection}
      onSectionChange={onSectionChange}
    />
  );
}
