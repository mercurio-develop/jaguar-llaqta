"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Gallery from "@/components/Gallery";
import { packages, type ActivityCategory } from "@/config/packages";
import { durationFilters, difficultyFilters } from "@/features/activities/activities-config";
import ActivityCategoryCards from "@/features/activities/components/ActivityCategoryCards";
import ActivityFilters from "@/features/activities/components/ActivityFilters";
import PackageGrid from "@/features/activities/components/PackageGrid";

export default function AllActivitiesPage() {
  const t = useTranslations("activities");
  const tNav = useTranslations("nav");
  const locale = useLocale() as "es" | "en";

  const [selectedCategories, setSelectedCategories] = useState<ActivityCategory[]>([]);
  const [selectedDuration, setSelectedDuration] = useState<string | "all">("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");

  const filteredPackages = packages.filter((pkg) => {
    const matchCategory = selectedCategories.length === 0 || pkg.categories.some((c) => selectedCategories.includes(c));
    const matchDuration = selectedDuration === "all" || durationFilters.find(f => f.id === selectedDuration)?.check(pkg.duration);
    const matchDifficulty = selectedDifficulty === "all" || (pkg.difficulty ? difficultyFilters.find(f => f.id === selectedDifficulty)?.check(pkg.difficulty) : false);
    return matchCategory && matchDuration && matchDifficulty;
  });

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedDuration("all");
    setSelectedDifficulty("all");
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedDuration !== "all" || selectedDifficulty !== "all";

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/choquequirao/IMG_6584.jpg')" }}
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
            selectedCategories={selectedCategories}
            onCategoriesChange={(cat) => {
              setSelectedCategories((prev) =>
                prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
              );
            }}
            onClearCategories={() => setSelectedCategories([])}
            selectedDuration={selectedDuration}
            onDurationChange={setSelectedDuration}
            selectedDifficulty={selectedDifficulty}
            onDifficultyChange={setSelectedDifficulty}
            onClear={clearFilters}
            hasActiveFilters={hasActiveFilters}
          />

          <p className="text-accent text-base capitalize tracking-wider mb-6">
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
          <Gallery locale={locale} showFilters={true} columns={3} initialLoadCount={6} loadMoreCount={6} />
        </div>
      </section>

    </div>
  );
}
