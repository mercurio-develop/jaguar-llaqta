"use client";

import Image from "next/image";
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
    <section className="py-12 bg-primary">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {(Object.keys(categoryLabelsConfig) as ActivityCategory[]).map((cat) => {
            const config = categoryLabelsConfig[cat];
            const count = packages.filter(p => p.categories.includes(cat)).length;
            return (
              <Link
                key={cat}
                href={`/${locale}/actividades/${cat}`}
                className="group flex flex-col rounded-lg border border-[#333] bg-white/[0.03] overflow-hidden hover:border-accent/40 transition-colors"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden" onContextMenu={(e) => e.preventDefault()}>
                  <Image
                    src={categoryImages[cat]}
                    alt={config.label[locale]}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    quality={80}
                    draggable={false}
                  />
                </div>

                {/* Text area */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wider mb-3 group-hover:text-accent transition-colors">
                    {config.label[locale]}
                  </h3>
                  <p className="text-[#9ca3af] text-sm leading-[1.7] mb-4 flex-1">
                    {categoryDescriptions[cat][locale]}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-accent text-sm font-medium">
                      {count} {locale === "es" ? "experiencias" : "experiences"}
                    </p>
                    <div className="flex items-center gap-2 text-accent">
                      <span className="text-sm font-medium uppercase tracking-wider">
                        {locale === "es" ? "Explorar" : "Explore"}
                      </span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
