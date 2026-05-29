"use client";

import { useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

export interface Section {
  id: string;
  label: string;
}

interface SectionNavigationProps {
  sections: Section[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  enableScrollDetection?: boolean;
  scrollOffset?: number;
  className?: string;
}

export default function SectionNavigation({
  sections,
  activeSection,
  onSectionChange,
  enableScrollDetection = false,
  scrollOffset = 140,
  className,
}: SectionNavigationProps) {
  const scrollToSection = useCallback(
    (sectionId: string) => {
      onSectionChange(sectionId);
      const element = document.getElementById(sectionId);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - scrollOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    },
    [onSectionChange, scrollOffset]
  );

  useEffect(() => {
    if (!enableScrollDetection) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + scrollOffset + 50;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          if (activeSection !== sections[i].id) {
            onSectionChange(sections[i].id);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, activeSection, onSectionChange, enableScrollDetection, scrollOffset]);

  return (
    <nav className={cn("sticky top-[var(--header-height)] z-40 bg-primary/95 backdrop-blur-sm border-b border-white/10", className)}>
      <div className="container-custom">
        <div className="flex justify-start md:justify-center items-center gap-2 md:gap-8 overflow-x-auto scrollbar-hide py-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "relative px-4 pt-4 pb-2 text-xs md:text-sm font-medium transition-all whitespace-nowrap uppercase tracking-widest",
                activeSection === section.id
                  ? "text-accent"
                  : "text-white/50 hover:text-white"
              )}
            >
              {section.label}
              {activeSection === section.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent shadow-[0_0_8px_rgba(201,162,77,0.5)]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
