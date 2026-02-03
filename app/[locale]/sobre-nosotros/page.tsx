"use client";

import { useTranslations } from "next-intl";
import { History, Target, Users } from "lucide-react";
import Card from "@/components/ui/Card";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div className="pt-20">
      {/* Hero section */}
      <section className="py-24 bg-primary-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="section-title mb-6">{t("title")}</h1>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>
        </div>
      </section>

      {/* History section */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <History className="w-8 h-8 text-accent" />
                <h2 className="font-display text-3xl text-white">{t("historyTitle")}</h2>
              </div>
              <p className="text-muted leading-relaxed text-lg">
                {t("historyText")}
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-support rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted">Imagen de historia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-20 bg-primary-alt">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <Card variant="bordered" className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-accent" />
                <h3 className="font-display text-2xl text-white">{t("visionTitle")}</h3>
              </div>
              <p className="text-muted leading-relaxed">
                {t("visionText")}
              </p>
            </Card>

            {/* Mission */}
            <Card variant="bordered" className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-accent" />
                <h3 className="font-display text-2xl text-white">{t("missionTitle")}</h3>
              </div>
              <p className="text-muted leading-relaxed">
                {t("missionText")}
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
