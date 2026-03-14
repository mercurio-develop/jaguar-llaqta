"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { values } from "@/features/about/about-config";

export default function WhyChooseUs() {
  const tHome = useTranslations("home");
  const tAbout = useTranslations("about");

  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      {/* Soft decorative glow to make the section feel alive */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-20 bg-accent/30" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-20 bg-accent/20" />
      <div className="container-custom w-full">
        <div className="text-center">
          {/* Title */}
          <h2 className="section-title">{tHome("whyTitle")}</h2>

          {/* Simple text only, based on content template */}
          <div className="mt-8 space-y-6 max-w-6xl mx-auto">
            <p className="text-[#d1d5db] text-lg leading-[1.8]">
              {tHome("whyDescription")}
              {" "}
              {tHome("whyDetail")}

            </p>
            <p className="text-[#d1d5db] text-lg leading-[1.8]">
            </p>

            {/* CTA to About: Vision & Mission (Spanish path as requested) */}
            <div className="pt-8">
              <Link
                href="/es/sobre-nosotros#vision-mision"
                className="group inline-flex items-center justify-center gap-2 mt-2 font-medium gold-text underline decoration-accent/60 underline-offset-4 hover:decoration-accent transition-colors"
              >
                <span>{tAbout("visionMissionTitle")}</span>
                <ArrowRight className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Valores using the same design as in About section */}
          <div className="mt-20 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="flex flex-row items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-2">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-left text-lg font-bold text-white mb-1">
                        {tAbout(value.titleKey)}
                      </h4>
                      <p className="text-[#d1d5db] text-sm text-left leading-[1.7]">
                        {tAbout(value.descKey)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
