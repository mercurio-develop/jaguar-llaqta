"use client";

import { usePathname } from "next/navigation";
import { getPackagesByCategory, type ActivityCategory } from "@/config/packages";

interface CategoryStatsProps {
  category: ActivityCategory;
}

export default function CategoryStats({ category }: CategoryStatsProps) {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  const categoryPackages = getPackagesByCategory(category);

  return (
    <section className="py-8 bg-primary-alt border-b border-white/10">
      <div className="container-custom">
        <div className="flex flex-wrap gap-8 justify-center text-center">
          <div>
            <p className="text-3xl font-bold text-accent tracking-tight">{categoryPackages.length}</p>
            <p className="text-muted text-sm uppercase tracking-wider">
              {locale === "es" ? "Experiencias" : "Experiences"}
            </p>
          </div>
          <div className="w-px bg-white/10 hidden sm:block" />
          <div>
            <p className="text-3xl font-bold text-accent tracking-tight">
              ${Math.min(...categoryPackages.map(p => p.price))}+
            </p>
            <p className="text-muted text-sm uppercase tracking-wider">
              {locale === "es" ? "Desde" : "Starting from"}
            </p>
          </div>
          <div className="w-px bg-white/10 hidden sm:block" />
          <div>
            <p className="text-3xl font-bold text-accent tracking-tight">100%</p>
            <p className="text-muted text-sm uppercase tracking-wider">
              {locale === "es" ? "Guías locales" : "Local guides"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
