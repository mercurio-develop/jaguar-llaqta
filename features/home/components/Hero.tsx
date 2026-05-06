"use client";

import Image from "next/image";
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
        <div className="absolute inset-0 overflow-hidden" onContextMenu={(e) => e.preventDefault()}>
          <Image
            src="/images/home/home-hero-bg.jpg"
            alt="Jaguar Llaqta Hero"
            fill
            priority
            className="object-cover object-[center_20%]"
            quality={100}
            draggable={false}
          />
        </div>
        
        {/* Center dark blur for text readability */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] md:w-[80%] max-w-5xl h-[60vh] bg-black/50 blur-[120px] rounded-full pointer-events-none" />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-primary pointer-events-none" />
      </div>


      {/* Content */}
      <div className="relative z-10 container-custom text-center mt-10">
        <div className="max-w-5xl mx-auto space-y-10 animate-fade-in">

          {/* Quote as Main Hero Text */}
          <div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-6xl text-white leading-tight drop-shadow-xl font-medium">
              {t("heroDescription")}
            </h1>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent"></div>
            <div className="w-2 h-2 rotate-45 bg-accent"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent"></div>
          </div>

          {/* Brand Signature */}
          <div>
            <p className="font-display text-sm md:text-base text-accent uppercase tracking-[0.3em]">
              {t("heroTitle")} <span className="mx-2 text-white/50">•</span> {t("heroSubtitle")}
            </p>
          </div>



          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href={`/${locale}/actividades`}
              className="btn-primary text-lg px-8 py-4"
            >
              {t("heroCta_activities")}
            </Link>
            <Link
              href={`/${locale}/contacto`}
              className="btn-outline text-lg px-8 py-4 bg-black/20 backdrop-blur-sm"
            >
              {t("heroCta_contactus")}
            </Link>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>
    </section>
  );
}
