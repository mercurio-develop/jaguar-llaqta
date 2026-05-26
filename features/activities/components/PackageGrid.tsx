"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Clock, Mountain } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { type Package, type ActivityCategory } from "@/config/packages";
import { categoryLabelsConfig, categoryImages } from "@/features/activities/activities-config";
import LazyImage from "@/components/ui/LazyImage";

interface PackageGridProps {
  locale: "es" | "en";
  packages: Package[];
}

export default function PackageGrid({ locale, packages }: PackageGridProps) {
  const router = useRouter();
  const [displayed, setDisplayed] = useState(packages);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    setFading(true);
    const t = setTimeout(() => {
      setDisplayed(packages);
      setFading(false);
    }, 200);
    return () => clearTimeout(t);
  }, [packages]);

  if (displayed.length === 0 && !fading) {
    return (
      <div className="text-center py-12">
        <p className="text-muted">
          {locale === "es"
            ? "No se encontraron experiencias con los filtros seleccionados."
            : "No experiences found with the selected filters."}
        </p>
      </div>
    );
  }

  return (
    <div
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-200"
      style={{ opacity: fading ? 0 : 1 }}
    >
      {displayed.map((pkg, idx) => {
        const pkgImage =
          pkg.heroImage ||
          (pkg.gallery.find(g => g.type === "image" && g.url)?.url) ||
          categoryImages[pkg.categories[0]];
        return (
          <Card 
            key={pkg.id} 
            variant="hover" 
            className="p-0 overflow-hidden flex flex-col border border-support animate-card-in cursor-pointer" 
            style={{ animationDelay: `${idx * 80}ms` }}
            onDoubleClick={() => router.push(`/${locale}/actividades/${pkg.id}`)}
          >
            {/* Image */}
            <div className="aspect-[16/10] bg-support/50 relative overflow-hidden">
              <LazyImage
                src={pkgImage}
                alt={(locale === "es" ? pkg.name : pkg.nameEn) || "Experience image"}
                quality={80}
              />
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute top-3 left-3">
                <div className="flex gap-1">
                  {pkg.categories.map((cat) => (
                    <span key={cat} className="px-2 py-1 bg-primary/80 text-accent text-xs uppercase tracking-wider rounded">
                      {categoryLabelsConfig[cat].label[locale]}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-display text-lg text-white uppercase tracking-wider mb-2">
                {locale === "es" ? pkg.name : pkg.nameEn}
              </h3>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-muted text-sm mb-3">
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
              </div>

              <p className="text-muted text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
                {locale === "es" ? pkg.tagline : pkg.taglineEn}
              </p>

              {/* Price and CTA */}
              <div className="flex flex-wrap items-end justify-between gap-3 pt-4 border-t border-support mt-auto">
                <div>
                  <span className="block text-muted text-[10px] uppercase tracking-wider mb-1">
                    {locale === "es" ? "Desde" : "From"}
                  </span>
                  <p className="text-lg font-bold text-accent tracking-tight leading-none">
                    $ {pkg.price} <span className="text-xs font-normal text-muted">USD</span>
                  </p>
                </div>
                <Link href={`/${locale}/actividades/${pkg.id}`} className="shrink-0">
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
  );
}
