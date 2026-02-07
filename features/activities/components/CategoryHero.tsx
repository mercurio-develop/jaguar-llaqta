"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { categoryConfig } from "./category-config";
import type { ActivityCategory } from "@/config/packages";

interface CategoryHeroProps {
  category: ActivityCategory;
}

export default function CategoryHero({ category }: CategoryHeroProps) {
  const t = useTranslations("activities");
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  const config = categoryConfig[category];
  const Icon = config.icon;

  const titleKey = `category${category.charAt(0).toUpperCase() + category.slice(1)}Title` as const;
  const descKey = `category${category.charAt(0).toUpperCase() + category.slice(1)}Desc` as const;

  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-end">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${config.heroImage}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30" />
      <div className="relative z-10 container-custom pb-12">
        <Link
          href={`/${locale}/actividades`}
          className="inline-flex items-center gap-2 text-accent hover:text-accent-alt transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{locale === "es" ? "Todos los tours" : "All tours"}</span>
        </Link>

        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
            <Icon className="w-8 h-8 text-accent" />
          </div>
          <div>
            <h1 className="font-display text-4xl md:text-5xl text-white uppercase tracking-wider">
              {t(titleKey)}
            </h1>
          </div>
        </div>

        <p className="text-white/70 text-lg max-w-2xl">
          {t(descKey)}
        </p>
      </div>
    </section>
  );
}
