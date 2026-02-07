"use client";

import Link from "next/link";
import { Clock } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { type Package, type ActivityCategory } from "@/config/packages";
import { categoryLabelsConfig, categoryImages } from "@/features/activities/activities-config";

interface PackageGridProps {
  locale: "es" | "en";
  packages: Package[];
}

export default function PackageGrid({ locale, packages }: PackageGridProps) {
  if (packages.length === 0) {
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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {packages.map((pkg) => {
        const pkgImage =
          pkg.heroImage ||
          (pkg.gallery.find(g => g.type === "image" && g.url)?.url) ||
          categoryImages[pkg.category];
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
                  {categoryLabelsConfig[pkg.category].label[locale]}
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
                  <p className="text-xl font-bold text-accent tracking-tight">${pkg.price} <span className="text-xs font-normal text-muted">USD</span></p>
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
  );
}
