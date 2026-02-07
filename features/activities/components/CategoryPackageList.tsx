"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock, Mountain, MapPin, Calendar, ArrowRight, Check } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { categoryConfig } from "./category-config";
import { getPackagesByCategory, type ActivityCategory } from "@/config/packages";

interface CategoryPackageListProps {
  category: ActivityCategory;
}

export default function CategoryPackageList({ category }: CategoryPackageListProps) {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] as "es" | "en";

  const config = categoryConfig[category];
  const categoryPackages = getPackagesByCategory(category);

  return (
    <section className="py-16 bg-primary">
      <div className="container-custom">
        <h2 className="font-display text-2xl text-white uppercase tracking-wider mb-8 text-center">
          {locale === "es" ? "Nuestras Experiencias" : "Our Experiences"}
        </h2>

        <div className="space-y-8">
          {categoryPackages.map((pkg) => (
            <Card key={pkg.id} className="p-0 overflow-hidden border border-support">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Image */}
                <div className="md:col-span-2 aspect-[4/3] md:aspect-auto bg-support/50 relative min-h-[250px] overflow-hidden">
                  <img
                    src={pkg.heroImage || (pkg.gallery.find((g) => g.type === "image" && g.url)?.url) || config.heroImage}
                    alt={(locale === "es" ? pkg.name : pkg.nameEn) || "Experience image"}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Content */}
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
                        <span>{pkg.duration}</span>
                      </div>
                      {pkg.difficulty && (
                        <div className="flex items-center gap-2">
                          <Mountain className="w-4 h-4 text-accent" />
                          <span>{pkg.difficulty}</span>
                        </div>
                      )}
                      {pkg.elevation && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-accent" />
                          <span>{pkg.elevation}</span>
                        </div>
                      )}
                      {pkg.bestSeason && (
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-accent" />
                          <span>{pkg.bestSeason}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                      {locale === "es" ? pkg.description : pkg.descriptionEn}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {(locale === "es" ? pkg.highlights : pkg.highlightsEn).slice(0, 4).map((h, i) => (
                        <span key={i} className="flex items-center gap-1 text-xs text-white/70">
                          <Check className="w-3 h-3 text-accent" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-support">
                    <div>
                      <span className="text-muted text-xs uppercase tracking-wider">
                        {locale === "es" ? "Desde" : "From"}
                      </span>
                      <p className="text-2xl font-bold text-accent tracking-tight">${pkg.price} <span className="text-sm font-normal text-muted">USD</span></p>
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
          ))}
        </div>
      </div>
    </section>
  );
}
