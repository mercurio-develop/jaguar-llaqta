"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Clock, Mountain, MapPin, Calendar, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import LazyImage from "@/components/ui/LazyImage";
import { categoryConfig } from "./category-config";
import { getPackagesByCategory, type ActivityCategory } from "@/config/packages";
import { durationFilters, difficultyFilters } from "@/features/activities/activities-config";
import FilterShell from "./FilterShell";

interface CategoryPackageListProps {
  category: ActivityCategory;
}

const chipBase = "px-2.5 py-1 text-xs md:text-sm transition-all border rounded whitespace-nowrap";
const chipActive = "bg-accent/10 text-accent border-accent/30";
const chipInactive = "border-white/20 text-muted hover:text-white hover:border-white/40";

export default function CategoryPackageList({ category }: CategoryPackageListProps) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] as "es" | "en";

  const config = categoryConfig[category];
  const allPackages = getPackagesByCategory(category);

  const difficulties = difficultyFilters.filter((f) =>
    allPackages.some((p) => p.difficulty && f.check(p.difficulty))
  );

  const [selectedDuration, setSelectedDuration] = useState<string>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");

  const resultsRef = useRef<HTMLDivElement>(null);

  const activeCount =
    (selectedDuration !== "all" ? 1 : 0) +
    (selectedDifficulty !== "all" ? 1 : 0);

  const clearAll = () => {
    setSelectedDuration("all");
    setSelectedDifficulty("all");
  };

  const scrollToResults = () => {
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const filtered = allPackages
    .filter((pkg) => {
      const matchDuration =
        selectedDuration === "all" ||
        durationFilters.find((f) => f.id === selectedDuration)?.check(pkg.duration);
      const matchDifficulty =
        selectedDifficulty === "all" || (pkg.difficulty ? difficultyFilters.find(f => f.id === selectedDifficulty)?.check(pkg.difficulty) : false);
      return matchDuration && matchDifficulty;
    });

  // Scroll reveal
  const [visibleIds, setVisibleIds] = useState<Set<string>>(new Set());
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id");
            if (id) {
              setVisibleIds((prev) => new Set(prev).add(id));
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { rootMargin: "0px 0px -60px 0px" }
    );
    Object.values(cardRefs.current).forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [filtered]);

  const filterContent = (
    <div className="flex flex-wrap gap-6">
      {/* Duration */}
      <div>
        <p className="text-muted text-xs uppercase tracking-wider mb-2">
          {locale === "es" ? "Duración" : "Duration"}
        </p>
        <div className="flex flex-wrap gap-1.5">
          <button onClick={() => setSelectedDuration("all")} className={cn(chipBase, selectedDuration === "all" ? "bg-accent text-primary border-accent" : chipInactive)}>
            {locale === "es" ? "Todos" : "All"}
          </button>
          {durationFilters.map((f) => (
            <button key={f.id} onClick={() => setSelectedDuration(f.id)} className={cn(chipBase, selectedDuration === f.id ? chipActive : chipInactive)}>
              {f.label[locale]}
            </button>
          ))}
        </div>
      </div>

      {/* Difficulty */}
      {difficulties.length > 0 && (
        <div>
          <p className="text-muted text-xs uppercase tracking-wider mb-2">
            {locale === "es" ? "Dificultad" : "Difficulty"}
          </p>
          <div className="flex flex-wrap gap-1.5">
            <button onClick={() => setSelectedDifficulty("all")} className={cn(chipBase, selectedDifficulty === "all" ? "bg-accent text-primary border-accent" : chipInactive)}>
              {locale === "es" ? "Todos" : "All"}
            </button>
            {difficulties.map((f) => (
              <button key={f.id} onClick={() => setSelectedDifficulty(f.id)} className={cn(chipBase, selectedDifficulty === f.id ? chipActive : chipInactive)}>
                {f.label[locale]}
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  );

  return (
    <section className="py-16 bg-primary">
      <div className="container-custom">
        <FilterShell locale={locale} activeCount={activeCount} onClear={clearAll} onClose={scrollToResults}>
          {filterContent}
        </FilterShell>

        {/* Results anchor */}
        <div ref={resultsRef}>
          <p className="text-accent text-base capitalize tracking-wider mb-6">
            {filtered.length} {locale === "es" ? "experiencias" : "experiences"}
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted">
                {locale === "es"
                  ? "No se encontraron experiencias con los filtros seleccionados."
                  : "No experiences found with the selected filters."}
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {filtered.map((pkg) => (
                <div
                  key={pkg.id}
                  data-id={pkg.id}
                  ref={(el) => { cardRefs.current[pkg.id] = el; }}
                  className={`transition-all duration-700 ease-out ${
                    visibleIds.has(pkg.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <Card 
                    className="p-0 overflow-hidden border border-support cursor-pointer"
                    onDoubleClick={() => router.push(`/${locale}/actividades/${pkg.id}`)}
                  >
                    <div className="grid md:grid-cols-5 gap-0">
                      <div className="md:col-span-2 aspect-[4/3] md:aspect-auto bg-support/50 relative min-h-[250px] overflow-hidden">
                        <LazyImage
                          src={pkg.heroImage || (pkg.gallery.find((g) => g.type === "image" && g.url)?.url) || config.heroImage}
                          alt={(locale === "es" ? pkg.name : pkg.nameEn) || "Experience image"}
                        />
                        <div className="absolute inset-0 bg-black/10" />
                      </div>

                      <div className="md:col-span-3 p-6 md:p-8 flex flex-col">
                        <div className="flex-1">
                          <h3 className="font-display text-2xl text-white uppercase tracking-wider mb-2">
                            {locale === "es" ? pkg.name : pkg.nameEn}
                          </h3>
                          <p className="text-accent mb-4">
                            {locale === "es" ? pkg.tagline : pkg.taglineEn}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm text-muted mb-4">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-accent" />
                              <span>{locale === "es" ? pkg.duration : (pkg.durationEn || pkg.duration)}</span>
                            </div>
                            {pkg.difficulty && (
                              <div className="flex items-center gap-2">
                                <Mountain className="w-4 h-4 text-accent" />
                                <span>{locale === "es" ? pkg.difficulty : (pkg.difficultyEn || pkg.difficulty)}</span>
                              </div>
                            )}
                            {pkg.elevation && (
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-accent" />
                                <span>{locale === "es" ? pkg.elevation : (pkg.elevationEn || pkg.elevation)}</span>
                              </div>
                            )}
                            {pkg.bestSeason && (
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-accent" />
                                <span>{locale === "es" ? pkg.bestSeason : (pkg.bestSeasonEn || pkg.bestSeason)}</span>
                              </div>
                            )}
                          </div>
                          <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                            {locale === "es" ? pkg.description : pkg.descriptionEn}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {(locale === "es" ? pkg.highlights : pkg.highlightsEn).slice(0, 4).map((h, i) => (
                              <span key={i} className="flex items-center gap-1 text-xs text-white/70">
                                <Check className="w-3 h-3 text-accent" />
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-support">
                          <div>
                            <span className="text-muted text-xs uppercase tracking-wider">
                              {locale === "es" ? "Desde" : "From"}
                            </span>
                            <p className="text-2xl font-bold text-accent tracking-tight">
                              $ {pkg.price} <span className="text-sm font-normal text-muted">USD</span>
                            </p>
                          </div>
                          <Link href={`/${locale}/actividades/${pkg.id}`}>
                            <Button className="flex items-center gap-2">
                              {locale === "es" ? "Ver más" : "View more"}
                              <ArrowRight className="w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
