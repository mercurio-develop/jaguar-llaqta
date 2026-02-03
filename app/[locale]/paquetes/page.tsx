"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";
import { Mountain, Users, Sparkles, Clock, ArrowRight, Filter } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { packages, type Package } from "@/config/packages";
import { activityCategories, type ActivityCategory } from "@/config/navigation";

const categoryIcons = {
  cuerpo: Mountain,
  mente: Users,
  espiritu: Sparkles,
};

const typeLabels = {
  privado: { es: "Privado", en: "Private" },
  grupal: { es: "Grupal", en: "Group" },
  personalizado: { es: "Personalizado", en: "Custom" },
};

const categoryLabels = {
  cuerpo: { es: "Cuerpo", en: "Body" },
  mente: { es: "Mente", en: "Mind" },
  espiritu: { es: "Espíritu", en: "Spirit" },
};

export default function PackagesPage() {
  const t = useTranslations();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = pathname.split("/")[1] as "es" | "en";

  const initialCategory = searchParams.get("categoria") as ActivityCategory | null;
  const initialType = searchParams.get("tipo") as Package["type"] | null;

  const [selectedCategory, setSelectedCategory] = useState<ActivityCategory | "all">(initialCategory || "all");
  const [selectedType, setSelectedType] = useState<Package["type"] | "all">(initialType || "all");

  const filteredPackages = packages.filter((pkg) => {
    const matchCategory = selectedCategory === "all" || pkg.category === selectedCategory;
    const matchType = selectedType === "all" || pkg.type === selectedType;
    return matchCategory && matchType;
  });

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-primary-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl text-white uppercase tracking-wider mb-4">
              {t("packages.title")}
            </h1>
            <p className="text-muted text-lg">{t("packages.subtitle")}</p>
            <div className="w-24 h-0.5 bg-accent mx-auto mt-6" />
          </div>

          {/* Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4 text-muted">
              <Filter className="w-4 h-4" />
              <span className="text-sm uppercase tracking-wider">
                {locale === "es" ? "Filtrar por" : "Filter by"}
              </span>
            </div>

            <div className="flex flex-wrap gap-6">
              {/* Category filter */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={cn(
                    "px-4 py-2 text-sm uppercase tracking-wider transition-all border",
                    selectedCategory === "all"
                      ? "bg-accent text-primary border-accent"
                      : "border-support text-muted hover:text-white hover:border-white/30"
                  )}
                >
                  {t("categories.all")}
                </button>
                {activityCategories.map((cat) => {
                  const Icon = categoryIcons[cat.id];
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={cn(
                        "px-4 py-2 text-sm uppercase tracking-wider transition-all flex items-center gap-2 border",
                        selectedCategory === cat.id
                          ? "bg-accent/10 text-accent border-accent/30"
                          : "border-support text-muted hover:text-white hover:border-white/30"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                      {categoryLabels[cat.id][locale]}
                    </button>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-10 bg-support" />

              {/* Type filter */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedType("all")}
                  className={cn(
                    "px-4 py-2 text-sm uppercase tracking-wider transition-all border",
                    selectedType === "all"
                      ? "bg-accent text-primary border-accent"
                      : "border-support text-muted hover:text-white hover:border-white/30"
                  )}
                >
                  {locale === "es" ? "Todos" : "All"}
                </button>
                {(["privado", "grupal", "personalizado"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={cn(
                      "px-4 py-2 text-sm uppercase tracking-wider transition-all border",
                      selectedType === type
                        ? "bg-white/10 text-white border-white/30"
                        : "border-support text-muted hover:text-white hover:border-white/30"
                    )}
                  >
                    {typeLabels[type][locale]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages grid */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          {filteredPackages.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted">
                {locale === "es"
                  ? "No se encontraron paquetes con los filtros seleccionados."
                  : "No packages found with the selected filters."}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPackages.map((pkg) => {
                const Icon = categoryIcons[pkg.category];

                return (
                  <Card key={pkg.id} variant="hover" className="p-0 overflow-hidden flex flex-col border border-support">
                    {/* Category badge */}
                    <div className="px-4 py-3 flex items-center justify-between border-b border-support">
                      <div className="flex items-center gap-2 text-sm text-accent uppercase tracking-wider">
                        <Icon className="w-4 h-4" />
                        <span>{categoryLabels[pkg.category][locale]}</span>
                      </div>
                      <span className="text-xs px-2 py-1 border border-support text-muted uppercase tracking-wider">
                        {typeLabels[pkg.type][locale]}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-display text-xl text-white uppercase tracking-wider mb-2">
                        {locale === "es" ? pkg.name : pkg.nameEn}
                      </h3>

                      <div className="flex items-center gap-2 text-muted text-sm mb-4">
                        <Clock className="w-4 h-4 text-accent" />
                        <span>{pkg.duration}</span>
                        {pkg.difficulty && (
                          <>
                            <span className="text-support">·</span>
                            <span>{pkg.difficulty}</span>
                          </>
                        )}
                      </div>

                      <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                        {locale === "es" ? pkg.description : pkg.descriptionEn}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {(locale === "es" ? pkg.highlights : pkg.highlightsEn).slice(0, 3).map((h, i) => (
                          <span key={i} className="text-xs px-2 py-1 border border-support text-white/60">
                            {h}
                          </span>
                        ))}
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-support">
                        <div>
                          <span className="text-muted text-xs uppercase tracking-wider">{t("packages.from")}</span>
                          <p className="font-display text-2xl text-accent">${pkg.price}</p>
                        </div>
                        <Link href={`/${locale}/paquetes/${pkg.id}`}>
                          <Button size="sm" className="flex items-center gap-2">
                            {t("packages.viewDetails")}
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}

          {/* Custom package CTA */}
          <div className="mt-16 text-center">
            <Card className="inline-block p-8 max-w-2xl border border-support">
              <h3 className="font-display text-2xl text-white uppercase tracking-wider mb-4">
                {locale === "es" ? "¿No encuentras lo que buscas?" : "Can't find what you're looking for?"}
              </h3>
              <p className="text-muted mb-6">
                {locale === "es"
                  ? "Diseñamos experiencias personalizadas según tus intereses. Cuéntanos tu sueño y lo hacemos realidad."
                  : "We design custom experiences based on your interests. Tell us your dream and we'll make it happen."}
              </p>
              <Link href={`/${locale}/contacto`}>
                <Button variant="outline">
                  {locale === "es" ? "Solicitar paquete personalizado" : "Request custom package"}
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
