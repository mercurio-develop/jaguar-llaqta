"use client";

import { useTranslations } from "next-intl";
import { Eye, Users, CheckCircle } from "lucide-react";
import Card from "@/components/ui/Card";
import { values, objectives } from "@/features/about/about-config";

export default function VisionMissionSection() {
  const t = useTranslations("about");

  return (
    <section id="vision-mision" className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/moray.jpg')" }}
      />
      <div className="absolute inset-0 bg-primary/85" />

      <div className="container-custom relative z-10">
        <h2 className="font-display text-3xl text-white text-center mb-12">{t("visionMissionTitle")}</h2>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Card className="p-8 text-center">
            <Eye className="w-12 h-12 text-accent mx-auto mb-6" />
            <h3 className="font-display text-2xl text-white mb-4">{t("visionTitle")}</h3>
            <p className="text-muted leading-relaxed">{t("visionText")}</p>
          </Card>

          <Card className="p-8 text-center">
            <Users className="w-12 h-12 text-accent mx-auto mb-6" />
            <h3 className="font-display text-2xl text-white mb-4">{t("missionTitle")}</h3>
            <p className="text-muted leading-relaxed">{t("missionText")}</p>
          </Card>
        </div>

        {/* Objectives */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="font-display text-2xl text-white text-center mb-8">{t("objectivesTitle")}</h3>
          <div className="space-y-4">
            {objectives.map((key, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-muted">{t(key)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-2xl text-white text-center mb-10">{t("valuesTitle")}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-display text-lg text-white mb-2">{t(value.titleKey)}</h4>
                  <p className="text-muted text-sm">{t(value.descKey)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
