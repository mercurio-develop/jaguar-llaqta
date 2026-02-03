"use client";

import { useTranslations } from "next-intl";
import { Eye, Target, Compass, Heart } from "lucide-react";
import Card from "@/components/ui/Card";

export default function VisionMisionPage() {
  const t = useTranslations("about");

  const values = [
    { icon: Compass, title: "Autenticidad", desc: "Experiencias genuinas conectadas con nuestra cultura" },
    { icon: Heart, title: "Respeto", desc: "Por nuestras comunidades, tradiciones y la naturaleza" },
    { icon: Target, title: "Compromiso", desc: "Con la preservación del patrimonio ancestral" },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-primary-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="section-title mb-6">Visión y Misión</h1>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Vision */}
            <Card className="p-8 text-center">
              <Eye className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="font-display text-2xl text-white mb-4">{t("visionTitle")}</h2>
              <p className="text-muted leading-relaxed">{t("visionText")}</p>
            </Card>

            {/* Mission */}
            <Card className="p-8 text-center">
              <Target className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="font-display text-2xl text-white mb-4">{t("missionTitle")}</h2>
              <p className="text-muted leading-relaxed">{t("missionText")}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Nuestros Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="font-display text-xl text-white mb-2">{value.title}</h3>
                  <p className="text-muted">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
