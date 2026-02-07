"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";

const experiences = [
  {
    id: "rutas",
    image: "/images/ausangate-trek/IMG_8942.jpg",
    titleKey: "expRoutesTitle",
    descKey: "expRoutesDesc",
    href: "/actividades#rutas",
  },
  {
    id: "comunidad",
    image: "/images/comunidad.jpg",
    titleKey: "expCommunityTitle",
    descKey: "expCommunityDesc",
    href: "/actividades#comunidad",
  },
  {
    id: "ceremonias",
    image: "/images/machu-picchu.jpg",
    titleKey: "expCeremoniesTitle",
    descKey: "expCeremoniesDesc",
    href: "/actividades#ceremonias",
  },
];

export default function FeaturedExperiences() {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <section className="py-24 bg-primary">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title">{t("experiencesTitle")}</h2>
          <p className="section-subtitle">{t("experiencesSubtitle")}</p>
        </div>

        {/* Experiences grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((exp) => (
            <Link
              key={exp.id}
              href={`/${locale}${exp.href}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${exp.image}')` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-display text-2xl text-white uppercase tracking-wider mb-2 group-hover:text-accent transition-colors">
                  {t(exp.titleKey)}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-2">
                  {t(exp.descKey)}
                </p>
                <div className="flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium uppercase tracking-wider">
                    {locale === "es" ? "Descubrir" : "Discover"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent/50 group-hover:border-accent transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
