"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const t = useTranslations("home");
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A24D' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
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
            <Link href={`/${locale}/actividades`} className="btn-primary text-lg px-8 py-4">
              {t("heroCta_activities")}
            </Link>
            <Link href={`/${locale}/contacto`} className="btn-secondary text-lg px-8 py-4">
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
