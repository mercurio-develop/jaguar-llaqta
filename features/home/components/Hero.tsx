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
        <div className="absolute inset-0 blur-sm overflow-hidden" onContextMenu={(e) => e.preventDefault()}>
          <Image
            src="/images/home/home-hero-bg.jpg"
            alt="Jaguar Llaqta Hero"
            fill
            priority
            className="object-cover object-[center_20%]"
            quality={90}
            draggable={false}
          />
        </div>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/75 to-primary" />
      </div>


      {/* Content */}
      <div className="relative z-10 container-custom text-center mt-5">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">


                    {/* Main title */}
          <div className="flex justify-center -my-6 px-4">
            <h1 className="sr-only">{t("heroTitle")}</h1>
            <Image
              src="/logo/only-text.png"
              alt="Jaguar Llaqta"
              width={600}
              height={150}
              className="object-contain w-[80%] md:w-[600px] h-auto drop-shadow-xl"
              priority
            />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed to-accent/50 ">
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

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-accent/60" />
      </div>
    </section>
  );
}
