"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Clock, Check, ArrowRight, Eye } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { packages, type Package } from "@/config/packages";
import { categoryImages } from "@/features/activities/activities-config";

interface ReservationPackageSelectProps {
  selectedPackage: Package | null;
  onSelect: (pkg: Package) => void;
  onContinue: () => void;
}

export default function ReservationPackageSelect({
  selectedPackage,
  onSelect,
  onContinue,
}: ReservationPackageSelectProps) {
  const t = useTranslations("reservations");
  const locale = useLocale() as "es" | "en";

  return (
    <div className="pt-20">
      <section className="py-16 bg-primary-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="section-title mb-4">{t("title")}</h1>
            <p className="section-subtitle">
              {locale === "es"
                ? "Selecciona el paquete que deseas reservar"
                : "Select the package you want to book"}
            </p>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => {
              const pkgImage =
                pkg.heroImage ||
                pkg.gallery.find((g) => g.type === "image" && g.url)?.url ||
                categoryImages[pkg.category];
              const isSelected = selectedPackage?.id === pkg.id;

              return (
                <Card
                  key={pkg.id}
                  variant="hover"
                  className={cn(
                    "p-0 overflow-hidden flex flex-col cursor-pointer transition-all",
                    isSelected && "ring-2 ring-accent"
                  )}
                  onClick={() => onSelect(pkg)}
                >
                  {/* Image */}
                  <div className="aspect-[16/10] bg-support/50 relative overflow-hidden">
                    <img
                      src={pkgImage}
                      alt={locale === "es" ? pkg.name : pkg.nameEn}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                    {isSelected && (
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                        <Check className="w-5 h-5 text-primary" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-display text-lg text-white uppercase tracking-wider mb-2">
                      {locale === "es" ? pkg.name : pkg.nameEn}
                    </h3>

                    <div className="flex items-start gap-2 text-muted text-sm mb-3">
                      <Clock className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="min-w-0 leading-snug">
                        {locale === "es"
                          ? pkg.duration
                          : pkg.durationEn || pkg.duration}
                      </span>
                    </div>

                    <p className="text-muted text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
                      {locale === "es" ? pkg.tagline : pkg.taglineEn}
                    </p>

                    {/* Price and actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-support">
                      <span className="text-accent font-bold tracking-tight">
                        ${pkg.price}{" "}
                        <span className="text-xs font-normal text-muted">
                          USD
                        </span>
                      </span>
                      <Link
                        href={`/${locale}/actividades/${pkg.id}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-1" />
                          {locale === "es" ? "Ver más" : "View more"}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {selectedPackage && (
            <div className="mt-8 text-center">
              <Button onClick={onContinue}>
                {locale === "es"
                  ? `Continuar con ${selectedPackage.name}`
                  : `Continue with ${selectedPackage.nameEn}`}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
