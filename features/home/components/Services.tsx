"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Mountain, Users, Sparkles, ArrowRight } from "lucide-react";

const services = [
  {
    id: "routes",
    icon: Mountain,
    titleKey: "serviceRoutes",
    descKey: "serviceRoutesDesc",
    href: "/actividades/rutas",
  },
  {
    id: "community",
    icon: Users,
    titleKey: "serviceCommunity",
    descKey: "serviceCommunityDesc",
    href: "/actividades/comunidad",
  },
  {
    id: "ceremonies",
    icon: Sparkles,
    titleKey: "serviceCeremonies",
    descKey: "serviceCeremoniesDesc",
    href: "/actividades/ceremonias",
  },
];

export default function Services() {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <section className="py-24 bg-primary-alt">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title">{t("servicesTitle")}</h2>
          <p className="section-subtitle">{t("servicesSubtitle")}</p>
        </div>

        {/* Services grid - seamless, no boxes */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                href={`/${locale}${service.href}`}
                className="group text-center"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-8 h-8 text-accent" />
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                  {t(service.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-[#d1d5db] text-base leading-[1.7] mb-5">
                  {t(service.descKey)}
                </p>

                {/* Link */}
                <div className="flex items-center justify-center gap-2 text-accent">
                  <span className="text-sm font-medium uppercase tracking-wider">
                    {locale === "es" ? "Explorar" : "Explore"}
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
