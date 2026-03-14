"use client";

import { useTranslations } from "next-intl";
import { values, objectives } from "@/features/about/about-config";

export default function VisionMissionSection() {
  const t = useTranslations("about");

  const cardBase =
    "flex flex-col min-h-[420px] bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 shadow-lg shadow-black/30 hover:border-accent/30 transition-colors duration-300";

  return (
    <section id="vision-mision" className="py-16 md:py-28 scroll-mt-24">
      <div className="container-custom">

        {/* Section title */}
        <div className="text-center mb-10 md:mb-16">
          {/* Decorative ornament */}
          <div className="flex items-center justify-center gap-3 mb-7">
            <div className="h-px w-12 bg-accent/40" />
            <div className="w-2 h-2 rotate-45 bg-accent/60" />
            <div className="h-px w-12 bg-accent/40" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-wide md:tracking-wider">
            {t("visionMissionTitle")}
          </h2>
          <div className="w-64 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6" />
        </div>

        {/* 4 equal cards — 2×2 on desktop */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* VISIÓN */}
          <div className={cardBase}>
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              {t("visionTitle")}
            </h3>
            <div className="w-16 h-[1px] bg-accent/50 mb-6" />
            <p className="flex-1 text-[#d1d5db] text-base leading-[1.9]">
              {t("visionText")}
            </p>
          </div>

          {/* MISIÓN */}
          <div className={cardBase}>
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              {t("missionTitle")}
            </h3>
            <div className="w-16 h-[1px] bg-accent/50 mb-6" />
            <p className="flex-1 text-[#d1d5db] text-base leading-[1.9]">
              {t("missionText")}
            </p>
          </div>

          {/* OBJETIVOS */}
          <div className={cardBase}>
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              {t("objectivesTitle")}
            </h3>
            <div className="w-16 h-[1px] bg-accent/50 mb-6" />
            <div className="flex-1 space-y-8">
              {objectives.map((key, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-3" />
                  <p className="text-[#d1d5db] text-base leading-[1.85]">
                    {t(key)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* VALORES */}
          <div className={cardBase}>
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              {t("valuesTitle")}
            </h3>
            <div className="w-16 h-[1px] bg-accent/50 mb-6" />
            <div className="flex-1 space-y-7">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2.5" />
                  <div>
                    <h4 className="font-display text-base font-bold text-white mb-1">
                      {t(value.titleKey)}
                    </h4>
                    <p className="text-[#d1d5db] text-base leading-[1.75]">
                      {t(value.descKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
