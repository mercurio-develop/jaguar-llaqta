"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import { useLocale } from "next-intl";
import { packages } from "@/config/packages";
import Gallery from "@/components/Gallery";
import {
  ActivitySidebar,
  ActivityHero,
  ActivityNav,
} from "@/features/activities/components";
import ActivityOverview from "@/features/activities/components/ActivityOverview";
import ActivityItinerary from "@/features/activities/components/ActivityItinerary";
import ActivityRequirements from "@/features/activities/components/ActivityRequirements";

export default function ActivityDetailPage({ params }: { params: { id: string } }) {
  const locale = useLocale();
  const isSpanish = locale === "es";

  const pkg = packages.find((p) => p.id === params.id);

  if (!pkg) {
    notFound();
  }

  const [activeSection, setActiveSection] = useState("overview");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 140;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="pt-20">
      <ActivityHero pkg={pkg} locale={locale} />

      <ActivityNav
        activeSection={activeSection}
        onSectionChange={scrollToSection}
        locale={locale}
      />

      <div className="bg-primary">
        <div className="container-custom py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-20">
              <ActivityOverview pkg={pkg} locale={locale} />
              <ActivityItinerary pkg={pkg} locale={locale} />
              <ActivityRequirements pkg={pkg} locale={locale} />

              {/* Gallery */}
              <section id="gallery">
                <h2 className="font-display text-2xl text-white uppercase tracking-wider mb-8">
                  {isSpanish ? "Galería" : "Gallery"}
                </h2>
                <Gallery
                  locale={locale as "es" | "en"}
                  items={pkg.gallery}
                  showFilters={false}
                  columns={3}
                />
              </section>
            </div>

            <ActivitySidebar pkg={pkg} locale={locale} />
          </div>
        </div>
      </div>
    </div>
  );
}
