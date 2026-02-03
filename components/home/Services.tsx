"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Mountain, Users, Sparkles, ArrowRight } from "lucide-react";
import Card, { CardContent, CardDescription, CardTitle } from "@/components/ui/Card";

const services = [
  {
    id: "body",
    icon: Mountain,
    titleKey: "serviceBody",
    descKey: "serviceBodyDesc",
    href: "/actividades/rutas",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "mind",
    icon: Users,
    titleKey: "serviceMind",
    descKey: "serviceMindDesc",
    href: "/actividades/comunidad",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "spirit",
    icon: Sparkles,
    titleKey: "serviceSpirit",
    descKey: "serviceSpiritDesc",
    href: "/actividades/espiritual",
    color: "from-purple-500 to-pink-600",
  },
];

export default function Services() {
  const t = useTranslations("home");
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  return (
    <section className="py-24 bg-primary-alt">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title">{t("servicesTitle")}</h2>
          <p className="section-subtitle">{t("servicesSubtitle")}</p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.id} href={`/${locale}${service.href}`}>
                <Card variant="hover" className="h-full group cursor-pointer">
                  <CardContent>
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <CardTitle className="text-2xl mb-3 group-hover:text-accent transition-colors">
                      {t(service.titleKey)}
                    </CardTitle>

                    {/* Description */}
                    <CardDescription className="text-base leading-relaxed">
                      {t(service.descKey)}
                    </CardDescription>

                    {/* Link indicator */}
                    <div className="mt-6 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm font-medium">Explorar</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
