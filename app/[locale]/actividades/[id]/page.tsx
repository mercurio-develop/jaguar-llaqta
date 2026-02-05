"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import { useLocale } from "next-intl";
import { Check, X, AlertCircle } from "lucide-react";
import { packages } from "@/config/packages";
import Card from "@/components/ui/Card";
import Gallery from "@/components/Gallery";
import {
  ItineraryDay,
  ActivitySidebar,
  ActivityHero,
  ActivityNav,
} from "@/components/activities";

export default function ActivityDetailPage({ params }: { params: { id: string } }) {
  const locale = useLocale();
  const isSpanish = locale === "es";

  const pkg = packages.find((p) => p.id === params.id);

  if (!pkg) {
    notFound();
  }

  const [openDays, setOpenDays] = useState<number[]>([1]);
  const [activeSection, setActiveSection] = useState("overview");

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

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 140;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="pt-20">
      <ActivityHero pkg={pkg} locale={locale} />

      <ActivityNav
        activeSection={activeSection}
        onSectionChange={scrollToSection}
        locale={locale}
      />

      {/* Main Content */}
      <div className="bg-primary">
        <div className="container-custom py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-20">
              {/* Overview Section */}
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

              {/* Itinerary Section */}
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

              {/* Requirements Section */}
              <section id="requirements">
                <h2 className="font-display text-2xl text-white uppercase tracking-wider mb-8">
                  {isSpanish ? "Requisitos y Qué Traer" : "Requirements & What to Bring"}
                </h2>

                <Card className="p-6 border border-support">
                  <div className="flex items-start gap-4 mb-6">
                    <AlertCircle className="w-6 h-6 text-accent flex-shrink-0" />
                    <p className="text-muted">
                      {isSpanish
                        ? "Para garantizar una experiencia segura y placentera, asegúrate de cumplir con estos requisitos:"
                        : "To ensure a safe and pleasant experience, make sure you meet these requirements:"}
                    </p>
                  </div>

                  <ul className="space-y-4">
                    {(isSpanish ? pkg.requirements : pkg.requirementsEn).map((req, i) => (
                      <li key={i} className="flex items-start gap-4 text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </Card>
              </section>

              {/* Gallery Section */}
              <section id="gallery">
                <h2 className="font-display text-2xl text-white uppercase tracking-wider mb-8">
                  {isSpanish ? "Galería" : "Gallery"}
                </h2>

                <Gallery
                  locale={locale as "es" | "en"}
                  items={pkg.gallery}
                  showFilters={false}
                  columns={3}
                />
              </section>
            </div>

            {/* Right Sidebar */}
            <ActivitySidebar pkg={pkg} locale={locale} />
          </div>
        </div>
      </div>
    </div>
  );
}
