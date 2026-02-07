"use client";

import { useTranslations } from "next-intl";
import { Users } from "lucide-react";
import Card from "@/components/ui/Card";
import { teamMembers } from "@/features/about/about-config";

export default function TeamSection() {
  const t = useTranslations("about");

  return (
    <section id="asociados" className="py-20 bg-primary">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-8 h-8 text-accent" />
            <h2 className="font-display text-3xl text-white">{t("teamTitle")}</h2>
          </div>
          <p className="text-muted text-lg">{t("teamText")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-support mx-auto mb-4 flex items-center justify-center">
                <span className="text-muted text-sm">Foto</span>
              </div>
              <h3 className="font-display text-xl text-white mb-1">{member.name}</h3>
              <p className="text-accent text-sm mb-3">{member.role}</p>
              <p className="text-muted text-sm">{member.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
