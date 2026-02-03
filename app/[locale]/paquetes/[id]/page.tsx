"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { notFound } from "next/navigation";
import {
  ChevronDown,
  ChevronUp,
  Clock,
  Mountain,
  MapPin,
  Calendar,
  Check,
  X,
  AlertCircle,
  Image as ImageIcon,
  Play,
  ArrowLeft,
} from "lucide-react";
import { packages, DayItinerary } from "@/config/packages";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface ItineraryDayProps {
  day: DayItinerary;
  isOpen: boolean;
  onToggle: () => void;
  locale: string;
}

function ItineraryDay({ day, isOpen, onToggle, locale }: ItineraryDayProps) {
  const isSpanish = locale === "es";

  return (
    <div className="border border-support rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 bg-support/30 hover:bg-support/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold">
            {day.day}
          </span>
          <span className="font-display text-white text-left">
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
          <p className="text-muted leading-relaxed mb-4">
            {isSpanish ? day.description : day.descriptionEn}
          </p>

          <div className="flex flex-wrap gap-6 text-sm">
            {day.highlights && day.highlights.length > 0 && (
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <div>
                  <span className="text-white font-medium block mb-1">
                    {isSpanish ? "Destacados" : "Highlights"}
                  </span>
                  <span className="text-muted">{day.highlights.join(" · ")}</span>
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
                  <span className="text-muted">{day.meals}</span>
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
                  <span className="text-muted">{day.accommodation}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function PackageDetailPage({ params }: { params: { id: string } }) {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
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

  const categoryLabels = {
    cuerpo: isSpanish ? "Cuerpo" : "Body",
    mente: isSpanish ? "Mente" : "Mind",
    espiritu: isSpanish ? "Espíritu" : "Spirit",
  };

  const typeLabels = {
    privado: isSpanish ? "Privado" : "Private",
    grupal: isSpanish ? "Grupal" : "Group",
    personalizado: isSpanish ? "Personalizado" : "Custom",
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-b from-support/50 to-primary flex items-end">
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <Mountain className="w-96 h-96 text-white" />
        </div>

        <div className="container-custom relative z-10 pb-12">
          <Link
            href={`/${locale}/paquetes?categoria=${pkg.category}`}
            className="inline-flex items-center gap-2 text-accent hover:text-accent-alt transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isSpanish ? "Volver a paquetes" : "Back to packages"}</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 border border-accent/30 text-accent text-sm uppercase tracking-widest">
              {categoryLabels[pkg.category]}
            </span>
            <span className="px-3 py-1 border border-white/20 text-white/70 text-sm uppercase tracking-widest">
              {typeLabels[pkg.type]}
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wider mb-4">
            {isSpanish ? pkg.name : pkg.nameEn}
          </h1>

          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mb-8">
            {isSpanish ? pkg.tagline : pkg.taglineEn}
          </p>

          <div className="flex flex-wrap gap-8 text-white/60">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              <span>{pkg.duration}</span>
            </div>
            {pkg.difficulty && (
              <div className="flex items-center gap-2">
                <Mountain className="w-5 h-5 text-accent" />
                <span>{pkg.difficulty}</span>
              </div>
            )}
            {pkg.elevation && (
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                <span>{pkg.elevation}</span>
              </div>
            )}
            {pkg.bestSeason && (
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-accent" />
                <span>{pkg.bestSeason}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <nav className="sticky top-20 z-40 bg-primary border-b border-support">
        <div className="container-custom">
          <div className="flex gap-1 overflow-x-auto py-3">
            {[
              { id: "overview", label: isSpanish ? "Resumen" : "Overview" },
              { id: "itinerary", label: isSpanish ? "Itinerario" : "Itinerary" },
              { id: "requirements", label: isSpanish ? "Requisitos" : "Requirements" },
              { id: "gallery", label: isSpanish ? "Galería" : "Gallery" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-5 py-2 font-medium transition-colors whitespace-nowrap uppercase tracking-wider text-sm ${
                  activeSection === item.id
                    ? "text-accent border-b-2 border-accent"
                    : "text-muted hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

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

                <p className="text-muted leading-relaxed text-lg mb-10">
                  {isSpanish ? pkg.description : pkg.descriptionEn}
                </p>

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

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {pkg.gallery.map((item) => (
                    <div
                      key={item.id}
                      className="aspect-square bg-support/50 overflow-hidden relative group cursor-pointer border border-support hover:border-accent/30 transition-colors"
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        {item.type === "video" ? (
                          <Play className="w-12 h-12 text-white/20 group-hover:text-accent/50 transition-colors" />
                        ) : (
                          <ImageIcon className="w-12 h-12 text-white/20 group-hover:text-white/40 transition-colors" />
                        )}
                      </div>
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary to-transparent p-4">
                        <p className="text-white/80 text-sm">{item.title}</p>
                        {item.type === "video" && (
                          <span className="text-xs text-accent uppercase tracking-wider">Video</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-40">
                <Card className="p-6 border border-support">
                  <div className="text-center mb-8 pb-8 border-b border-support">
                    <p className="text-muted text-sm uppercase tracking-wider mb-2">
                      {isSpanish ? "Desde" : "From"}
                    </p>
                    <p className="font-display text-4xl text-accent">
                      ${pkg.price}
                      <span className="text-lg text-muted font-body"> USD</span>
                    </p>
                    <p className="text-muted text-sm">
                      {isSpanish ? "por persona" : "per person"}
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted uppercase tracking-wider">{isSpanish ? "Duración" : "Duration"}</span>
                      <span className="text-white">{pkg.duration}</span>
                    </div>
                    {pkg.difficulty && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted uppercase tracking-wider">{isSpanish ? "Dificultad" : "Difficulty"}</span>
                        <span className="text-white">{pkg.difficulty}</span>
                      </div>
                    )}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted uppercase tracking-wider">{isSpanish ? "Tipo" : "Type"}</span>
                      <span className="text-white">{typeLabels[pkg.type]}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full" disabled>
                      {isSpanish ? "Reservar Ahora" : "Book Now"}
                    </Button>
                    <p className="text-center text-muted text-xs">
                      {isSpanish
                        ? "Sistema de reservas próximamente"
                        : "Booking system coming soon"}
                    </p>
                  </div>

                  <div className="mt-8 pt-8 border-t border-support">
                    <p className="text-muted text-sm mb-4">
                      {isSpanish ? "¿Tienes preguntas?" : "Have questions?"}
                    </p>
                    <Link href={`/${locale}/contacto`}>
                      <Button variant="outline" className="w-full">
                        {isSpanish ? "Contáctanos" : "Contact Us"}
                      </Button>
                    </Link>
                  </div>
                </Card>

                {/* Best Season Note */}
                {pkg.bestSeason && (
                  <Card className="p-4 mt-4 border border-support">
                    <div className="flex items-start gap-4">
                      <Calendar className="w-5 h-5 text-accent flex-shrink-0" />
                      <div>
                        <p className="text-white text-sm font-medium mb-1 uppercase tracking-wider">
                          {isSpanish ? "Mejor Temporada" : "Best Season"}
                        </p>
                        <p className="text-muted text-sm">{pkg.bestSeason}</p>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
