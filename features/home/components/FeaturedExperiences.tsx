"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";

const experiences = [
  {
    id: "rutas",
    image: "/images/home/home-featured-rutas.jpg",
    titleKey: "expRoutesTitle",
    descKey: "expRoutesDesc",
    href: "/actividades/rutas",
  },
  {
    id: "comunidad",
    image: "/images/home/home-featured-comunidad.jpg",
    titleKey: "expCommunityTitle",
    descKey: "expCommunityDesc",
    href: "/actividades/comunidad",
  },
  {
    id: "ceremonias",
    image: "/images/home/home-featured-ceremonias.jpg",
    titleKey: "expCeremoniesTitle",
    descKey: "expCeremoniesDesc",
    href: "/actividades/ceremonias",
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
        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <Link
              key={exp.id}
              href={`/${locale}${exp.href}`}
              className="group flex flex-col rounded-lg border border-[#333] bg-white/[0.03] overflow-hidden hover:border-accent/40 transition-colors"
            >
              {/* Image - rounded top */}
              <div className="relative aspect-[4/3] overflow-hidden" onContextMenu={(e) => e.preventDefault()}>
                <Image
                  src={exp.image}
                  alt={t(exp.titleKey)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={60}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  draggable={false}
                />
              </div>

              {/* Text area */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wider mb-3 group-hover:text-accent transition-colors">
                  {t(exp.titleKey)}
                </h3>
                <p className="text-[#9ca3af] text-sm leading-[1.7] mb-5 flex-1">
                  {t(exp.descKey)}
                </p>
                <div className="flex items-center gap-2 text-accent">
                  <span className="text-sm font-medium uppercase tracking-wider">
                    {locale === "es" ? "Descubrir" : "Discover"}
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
