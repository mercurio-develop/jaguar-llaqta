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
    <nav className={cn("sticky top-20 z-40 bg-primary border-b border-support", className)}>
      <div className="container-custom">
        <div className="flex justify-center gap-1 overflow-x-auto py-3">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "px-5 py-2 font-medium transition-colors whitespace-nowrap uppercase tracking-wider text-sm",
                activeSection === section.id
                  ? "text-accent border-b-2 border-accent"
                  : "text-muted hover:text-white"
              )}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
