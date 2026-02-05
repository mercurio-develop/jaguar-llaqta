"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        {/* Hero image */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm "
          style={{ backgroundImage: "url('/images/hero-banner-home.jpg')" }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/75 to-primary" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent" />
            <div className="w-3 h-3 rotate-45 border-2 border-accent" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent" />
          </div>

          {/* Main title */}
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-white uppercase tracking-widest">
            {t("heroTitle")}
          </h1>

          {/* Subtitle */}
          <p className="font-display text-2xl md:text-3xl text-accent uppercase tracking-wide">
            {t("heroSubtitle")}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            {t("heroDescription")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link
              href={`/${locale}/actividades`}
              className="btn-primary text-lg px-8 py-4"
            >
              {t("heroCta_activities")}
            </Link>
            <Link
              href={`/${locale}/contacto`}
              className="btn-secondary text-lg px-8 py-4"
            >
              {t("heroCta_contactus")}
            </Link>
          </div>

          {/* Decorative bottom element */}
          <div className="flex items-center justify-center gap-4 pt-12">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-accent/50" />
            <div className="w-2 h-2 rotate-45 bg-accent/50" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-accent/50" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-accent/60" />
      </div>
    </section>
  );
}
