"use client";

import { useTranslations } from "next-intl";
import { MapPin, Heart, Leaf } from "lucide-react";

const features = [
  {
    id: "local",
    icon: MapPin,
    titleKey: "whyLocal",
    descKey: "whyLocalDesc",
  },
  {
    id: "authentic",
    icon: Heart,
    titleKey: "whyAuthentic",
    descKey: "whyAuthenticDesc",
  },
  {
    id: "sustainable",
    icon: Leaf,
    titleKey: "whySustainable",
    descKey: "whySustainableDesc",
  },
];

export default function WhyChooseUs() {
  const t = useTranslations("home");

  return (
    <section className="py-24 bg-primary">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title">{t("whyTitle")}</h2>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.id} className="text-center group">
                {/* Icon with decorative ring */}
                <div className="relative inline-flex mb-6">
                  <div className="absolute inset-0 w-20 h-20 rounded-full border-2 border-accent/20 group-hover:border-accent/40 transition-colors" />
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-10 h-10 text-accent" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl text-white mb-3">
                  {t(feature.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-muted leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
