"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { cn } from "@/lib/utils";
import SectionNavigation from "@/components/navigation/SectionNavigation";
import HistorySection from "@/features/about/components/HistorySection";
import VisionMissionSection from "@/features/about/components/VisionMissionSection";
import TeamSection from "@/features/about/components/TeamSection";
import FAQSection from "@/features/about/components/FAQSection";
import PartnersSection from "@/features/about/components/PartnersSection";

export default function AboutPage() {
  const t = useTranslations("about");
  const tFaq = useTranslations("faq");
  const [activeSection, setActiveSection] = useState("historia");

  const sections = [
    { id: "historia", label: t("historyTitle") },
    { id: "vision-mision", label: t("visionMissionTitle") },
    { id: "asociados", label: t("teamTitle") },
    { id: "faq", label: tFaq("title") },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/comunidad-3.jpg')" }}
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container-custom text-center">
          <h1 className="section-title mb-6">{t("title")}</h1>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>
      </section>

      {/* Section Navigation */}
      <SectionNavigation
        sections={sections}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        enableScrollDetection={true}
      />

      <HistorySection />
      <VisionMissionSection />
      <TeamSection />
      <FAQSection />
    </div>
  );
}
