"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Gallery from "@/components/Gallery";
import { packages, type ActivityCategory } from "@/config/packages";
import { durationFilters } from "@/features/activities/activities-config";
import ActivityCategoryCards from "@/features/activities/components/ActivityCategoryCards";
import ActivityFilters from "@/features/activities/components/ActivityFilters";
import PackageGrid from "@/features/activities/components/PackageGrid";

export default function AllActivitiesPage() {
  const t = useTranslations("activities");
  const tNav = useTranslations("nav");
  const locale = useLocale() as "es" | "en";

  const [selectedCategory, setSelectedCategory] = useState<ActivityCategory | "all">("all");
  const [selectedDuration, setSelectedDuration] = useState<string | "all">("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  const filteredPackages = packages.filter((pkg) => {
    const matchCategory = selectedCategory === "all" || pkg.category === selectedCategory;
    const matchDuration = selectedDuration === "all" || durationFilters.find(f => f.id === selectedDuration)?.check(pkg.duration);
    const matchPrice = pkg.price >= priceRange[0] && pkg.price <= priceRange[1];
    return matchCategory && matchDuration && matchPrice;
  });

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedDuration("all");
    setPriceRange([0, 1000]);
  };

  const hasActiveFilters = selectedCategory !== "all" || selectedDuration !== "all" || priceRange[0] > 0 || priceRange[1] < 1000;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/montanias.jpg')" }}
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container-custom text-center">
          <h1 className="section-title mb-4">{tNav("allActivities")}</h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>
      </section>

      <ActivityCategoryCards locale={locale} />

      {/* Filters & Packages */}
      <section className="py-12 bg-primary">
        <div className="container-custom">
          <ActivityFilters
            locale={locale}
            selectedCategory={selectedCategory}
            selectedDuration={selectedDuration}
            onCategoryChange={setSelectedCategory}
            onDurationChange={setSelectedDuration}
            onClear={clearFilters}
            hasActiveFilters={hasActiveFilters}
          />

          <p className="text-muted text-sm mb-6">
            {filteredPackages.length} {locale === "es" ? "experiencias encontradas" : "experiences found"}
          </p>

          <PackageGrid locale={locale} packages={filteredPackages} />
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-primary-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title mb-4">
              {locale === "es" ? "Galería" : "Gallery"}
            </h2>
            <p className="section-subtitle">
              {locale === "es"
                ? "Imágenes y videos de nuestras experiencias"
                : "Images and videos from our experiences"}
            </p>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>
          <Gallery locale={locale} showFilters={true} columns={3} />
        </div>
      </section>

    </div>
  );
}
