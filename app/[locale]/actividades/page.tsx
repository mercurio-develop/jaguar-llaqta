"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Mountain, Users, Sparkles, ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";

const categories = [
  {
    id: "cuerpo",
    icon: Mountain,
    titleKey: "categoryBody",
    subtitleKey: "categoryBodySubtitle",
    descKey: "categoryBodyDesc",
    href: "/actividades/cuerpo",
  },
  {
    id: "mente",
    icon: Users,
    titleKey: "categoryMind",
    subtitleKey: "categoryMindSubtitle",
    descKey: "categoryMindDesc",
    href: "/actividades/mente",
  },
  {
    id: "espiritu",
    icon: Sparkles,
    titleKey: "categorySpirit",
    subtitleKey: "categorySpiritSubtitle",
    descKey: "categorySpiritDesc",
    href: "/actividades/espiritu",
  },
];

export default function ActivitiesPage() {
  const t = useTranslations("activities");
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const isSpanish = locale === "es";

  return (
    <div className="pt-20">
      <section className="py-24 bg-primary-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl text-white uppercase tracking-wider mb-4">
              {t("title")}
            </h1>
            <p className="text-muted text-lg">{t("subtitle")}</p>
            <div className="w-24 h-0.5 bg-accent mx-auto mt-6" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link key={category.id} href={`/${locale}${category.href}`}>
                  <Card variant="hover" className="h-full group overflow-hidden p-0 border border-support">
                    <div className="aspect-[3/2] bg-support/30 relative overflow-hidden flex items-center justify-center">
                      <Icon className="w-20 h-20 text-accent/20 group-hover:text-accent/40 transition-colors" />
                    </div>
                    <div className="p-6">
                      <p className="text-accent text-sm uppercase tracking-widest mb-2">
                        {t(category.subtitleKey)}
                      </p>
                      <h3 className="font-display text-xl text-white uppercase tracking-wider mb-3 group-hover:text-accent transition-colors">
                        {t(category.titleKey)}
                      </h3>
                      <p className="text-muted leading-relaxed mb-4 text-sm">
                        {t(category.descKey)}
                      </p>
                      <div className="flex items-center gap-2 text-accent">
                        <span className="text-sm font-medium uppercase tracking-wider">
                          {isSpanish ? "Explorar" : "Explore"}
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted mb-6">
              {isSpanish ? "¿Ya sabes lo que buscas?" : "Already know what you're looking for?"}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={`/${locale}/paquetes`} className="px-6 py-3 bg-accent text-primary font-medium uppercase tracking-wider text-sm hover:bg-accent-alt transition-colors">
                {isSpanish ? "Ver todos los paquetes" : "View all packages"}
              </Link>
              <Link href={`/${locale}/calendario`} className="px-6 py-3 border border-accent text-accent font-medium uppercase tracking-wider text-sm hover:bg-accent/10 transition-colors">
                {isSpanish ? "Ver calendario" : "View calendar"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
