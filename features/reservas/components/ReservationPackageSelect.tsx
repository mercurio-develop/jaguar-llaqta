"use client";

import { useTranslations } from "next-intl";
import { Mountain, Users, Check, ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { packages, type Package } from "@/config/packages";

const categoryIcons = {
  rutas: Mountain,
  comunidad: Users,
  ceremonias: Users,
};

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

  return (
    <div className="pt-20">
      <section className="py-16 bg-primary-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="section-title mb-4">{t("title")}</h1>
            <p className="section-subtitle">Selecciona el paquete que deseas reservar</p>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => {
              const Icon = categoryIcons[pkg.category];
              return (
                <Card
                  key={pkg.id}
                  variant="hover"
                  className={cn(
                    "p-6 cursor-pointer transition-all",
                    selectedPackage?.id === pkg.id && "ring-2 ring-accent"
                  )}
                  onClick={() => onSelect(pkg)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">{pkg.name}</h3>
                      <p className="text-xs text-muted">{pkg.duration}</p>
                    </div>
                  </div>
                  <p className="text-muted text-sm mb-4">{pkg.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-accent font-bold tracking-tight">${pkg.price} <span className="text-xs font-normal text-muted">USD</span></span>
                    {selectedPackage?.id === pkg.id && (
                      <Check className="w-5 h-5 text-accent" />
                    )}
                  </div>
                </Card>
              );
            })}
          </div>

          {selectedPackage && (
            <div className="mt-8 text-center">
              <Button onClick={onContinue}>
                Continuar con {selectedPackage.name}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
