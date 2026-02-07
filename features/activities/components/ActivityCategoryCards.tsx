"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { packages, type ActivityCategory } from "@/config/packages";
import {
  categoryLabelsConfig,
  categoryImages,
  categoryDescriptions,
} from "@/features/activities/activities-config";

interface ActivityCategoryCardsProps {
  locale: "es" | "en";
}

export default function ActivityCategoryCards({ locale }: ActivityCategoryCardsProps) {
  return (
    <section className="py-16 bg-primary">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-6">
          {(Object.keys(categoryLabelsConfig) as ActivityCategory[]).map((cat) => {
            const config = categoryLabelsConfig[cat];
            const count = packages.filter(p => p.category === cat).length;
            return (
              <Link
                key={cat}
                href={`/${locale}/actividades/${cat}`}
                className="group relative aspect-[4/5] overflow-hidden rounded-lg"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${categoryImages[cat]}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="font-display text-2xl text-white uppercase tracking-wider mb-2 group-hover:text-accent transition-colors">
                    {config.label[locale]}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-2">
                    {categoryDescriptions[cat][locale]}
                  </p>
                  <p className="text-accent text-sm mb-4">
                    {count} {locale === "es" ? "experiencias" : "experiences"}
                  </p>
                  <div className="flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium uppercase tracking-wider">
                      {locale === "es" ? "Explorar" : "Explore"}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent/50 group-hover:border-accent transition-colors" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
