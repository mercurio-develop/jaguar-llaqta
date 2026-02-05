"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Mountain, Users, Sparkles, Clock, ArrowRight, Filter, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Calendar from "@/components/Calendar";
import Gallery from "@/components/Gallery";
import { packages, type ActivityCategory } from "@/config/packages";

const categoryConfig: Record<
  ActivityCategory,
  { icon: typeof Mountain; label: { es: string; en: string } }
> = {
  rutas: {
    icon: Mountain,
    label: { es: "Rutas", en: "Routes" },
  },
  comunidad: {
    icon: Users,
    label: { es: "Comunidad", en: "Community" },
  },
  ceremonias: {
    icon: Sparkles,
    label: { es: "Ceremonias", en: "Ceremonies" },
  },
};

const durationFilters = [
  { id: "half-day", label: { es: "Medio día", en: "Half day" }, check: (d: string) => d.toLowerCase().includes("medio") || d.toLowerCase().includes("half") },
  { id: "full-day", label: { es: "Día completo", en: "Full day" }, check: (d: string) => d.toLowerCase().includes("día completo") || d.toLowerCase().includes("full day") || d.includes("8 horas") },
  { id: "multi-day", label: { es: "Varios días", en: "Multi-day" }, check: (d: string) => d.includes("días") || d.includes("days") || d.includes("noches") || d.includes("nights") },
];

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
      {/* Hero section */}
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

      {/* Category Cards */}
      <section className="py-12 bg-primary-alt border-b border-white/10">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {(Object.keys(categoryConfig) as ActivityCategory[]).map((cat) => {
              const config = categoryConfig[cat];
              const Icon = config.icon;
              const count = packages.filter(p => p.category === cat).length;
              return (
                <Link key={cat} href={`/${locale}/actividades/${cat}`}>
                  <Card variant="hover" className="p-6 flex items-center gap-4 group">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg text-white uppercase tracking-wider group-hover:text-accent transition-colors">
                        {config.label[locale]}
                      </h3>
                      <p className="text-muted text-sm">{count} {locale === "es" ? "experiencias" : "experiences"}</p>
                    </div>
                    {/* Thumbnail preview removed per request to place images within package cards */}
                    <ArrowRight className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filters & Packages */}
      <section className="py-12 bg-primary">
        <div className="container-custom">
          {/* Filters */}
          <div className="mb-8 p-6 bg-support/30 border border-white/10 rounded">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-white">
                <Filter className="w-5 h-5 text-accent" />
                <span className="font-medium uppercase tracking-wider text-sm">
                  {locale === "es" ? "Filtros" : "Filters"}
                </span>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-sm text-muted hover:text-accent transition-colors"
                >
                  <X className="w-4 h-4" />
                  {locale === "es" ? "Limpiar filtros" : "Clear filters"}
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-6">
              {/* Category filter */}
              <div>
                <p className="text-muted text-xs uppercase tracking-wider mb-2">
                  {locale === "es" ? "Categoría" : "Category"}
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={cn(
                      "px-3 py-1.5 text-sm transition-all border rounded",
                      selectedCategory === "all"
                        ? "bg-accent text-primary border-accent"
                        : "border-white/20 text-muted hover:text-white hover:border-white/40"
                    )}
                  >
                    {locale === "es" ? "Todos" : "All"}
                  </button>
                  {(Object.keys(categoryConfig) as ActivityCategory[]).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={cn(
                        "px-3 py-1.5 text-sm transition-all border rounded flex items-center gap-1.5",
                        selectedCategory === cat
                          ? "bg-accent/10 text-accent border-accent/30"
                          : "border-white/20 text-muted hover:text-white hover:border-white/40"
                      )}
                    >
                      {categoryConfig[cat].label[locale]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration filter */}
              <div>
                <p className="text-muted text-xs uppercase tracking-wider mb-2">
                  {locale === "es" ? "Duración" : "Duration"}
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedDuration("all")}
                    className={cn(
                      "px-3 py-1.5 text-sm transition-all border rounded",
                      selectedDuration === "all"
                        ? "bg-accent text-primary border-accent"
                        : "border-white/20 text-muted hover:text-white hover:border-white/40"
                    )}
                  >
                    {locale === "es" ? "Todos" : "All"}
                  </button>
                  {durationFilters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setSelectedDuration(filter.id)}
                      className={cn(
                        "px-3 py-1.5 text-sm transition-all border rounded",
                        selectedDuration === filter.id
                          ? "bg-accent/10 text-accent border-accent/30"
                          : "border-white/20 text-muted hover:text-white hover:border-white/40"
                      )}
                    >
                      {filter.label[locale]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results count */}
          <p className="text-muted text-sm mb-6">
            {filteredPackages.length} {locale === "es" ? "experiencias encontradas" : "experiences found"}
          </p>

          {/* Packages Grid */}
          {filteredPackages.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted">
                {locale === "es"
                  ? "No se encontraron experiencias con los filtros seleccionados."
                  : "No experiences found with the selected filters."}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPackages.map((pkg) => {
                const Icon = categoryConfig[pkg.category].icon;
                // Determine package image with a safe fallback per category
                const categoryFallback: Record<ActivityCategory, string> = {
                  rutas: "/images/ausangate-1.jpg",
                  comunidad: "/images/comunidad.jpg",
                  ceremonias: "/images/coca-leaf.jpg",
                };
                const pkgImage = (pkg.gallery.find(g => g.type === "image" && g.url)?.url) || categoryFallback[pkg.category];
                return (
                  <Card key={pkg.id} variant="hover" className="p-0 overflow-hidden flex flex-col border border-support">
                    {/* Image */}
                    <div className="aspect-[16/10] bg-support/50 relative overflow-hidden">
                      <img
                        src={pkgImage}
                        alt={(locale === "es" ? pkg.name : pkg.nameEn) || "Experience image"}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/10" />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-primary/80 text-accent text-xs uppercase tracking-wider rounded">
                          {categoryConfig[pkg.category].label[locale]}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-display text-lg text-white uppercase tracking-wider mb-2">
                        {locale === "es" ? pkg.name : pkg.nameEn}
                      </h3>

                      <div className="flex items-center gap-2 text-muted text-sm mb-3">
                        <Clock className="w-4 h-4 text-accent" />
                        <span>{locale === "es" ? pkg.duration : (pkg.durationEn || pkg.duration)}</span>
                      </div>

                      <p className="text-muted text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
                        {locale === "es" ? pkg.tagline : pkg.taglineEn}
                      </p>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-support">
                        <div>
                          <span className="text-muted text-xs uppercase tracking-wider">
                            {locale === "es" ? "Desde" : "From"}
                          </span>
                          <p className="font-display text-xl text-accent">${pkg.price}</p>
                        </div>
                        <Link href={`/${locale}/actividades/${pkg.id}`}>
                          <Button size="sm">
                            {locale === "es" ? "Ver más" : "View more"}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Gallery Section */}
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

      {/* Calendar Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title mb-4">
              {locale === "es" ? "Calendario de Actividades" : "Activity Calendar"}
            </h2>
            <p className="section-subtitle">
              {locale === "es"
                ? "Encuentra la fecha perfecta para tu próxima aventura"
                : "Find the perfect date for your next adventure"}
            </p>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          <Calendar locale={locale} showUpcoming={true} />
        </div>
      </section>
    </div>
  );
}
