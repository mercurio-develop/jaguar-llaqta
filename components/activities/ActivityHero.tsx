"use client";

import Link from "next/link";
import { Clock, Mountain, MapPin, Calendar, ArrowLeft } from "lucide-react";
import { Package, ActivityCategory } from "@/config/packages";

interface ActivityHeroProps {
  pkg: Package;
  locale: string;
}

const categoryLabels: Record<ActivityCategory, { es: string; en: string }> = {
  rutas: { es: "Rutas", en: "Routes" },
  comunidad: { es: "Comunidad", en: "Community" },
  ceremonias: { es: "Ceremonias", en: "Ceremonies" },
};

export default function ActivityHero({ pkg, locale }: ActivityHeroProps) {
  const isSpanish = locale === "es";

  // Choose a representative hero image for the package
  const categoryFallback: Record<ActivityCategory, string> = {
    rutas: "/images/ausangate-1.jpg",
    comunidad: "/images/comunidad.jpg",
    ceremonias: "/images/coca-leaf.jpg",
  };
  const heroImage =
    pkg.heroImage ||
    pkg.gallery.find((g) => g.type === "image" && g.url)?.url ||
    categoryFallback[pkg.category];

  return (
    <section className="relative min-h-[60vh] flex items-end">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${heroImage}')` }}
      />
      {/* Readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/20" />

      <div className="container-custom relative z-10 pb-12">
        <Link
          href={`/${locale}/actividades#${pkg.category}`}
          className="inline-flex items-center gap-2 text-accent hover:text-accent-alt transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isSpanish ? "Volver a actividades" : "Back to activities"}</span>
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 border border-accent/30 text-accent text-sm uppercase tracking-widest">
            {categoryLabels[pkg.category][isSpanish ? "es" : "en"]}
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
            <span>{isSpanish ? pkg.duration : (pkg.durationEn || pkg.duration)}</span>
          </div>
          {pkg.difficulty && (
            <div className="flex items-center gap-2">
              <Mountain className="w-5 h-5 text-accent" />
              <span>{isSpanish ? pkg.difficulty : (pkg.difficultyEn || pkg.difficulty)}</span>
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
              <span>{isSpanish ? pkg.bestSeason : (pkg.bestSeasonEn || pkg.bestSeason)}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
