"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
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
    { id: "organizaciones", label: t("organizationsTitle") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

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
      <nav className="sticky top-20 z-40 bg-primary border-b border-white/10">
        <div className="container-custom">
          <div className="flex justify-center overflow-x-auto scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors border-b-2",
                  activeSection === section.id
                    ? "text-accent border-accent"
                    : "text-white/60 border-transparent hover:text-white"
                )}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <HistorySection />
      <VisionMissionSection />
      <TeamSection />
      <FAQSection />
      <PartnersSection />
    </div>
  );
}
