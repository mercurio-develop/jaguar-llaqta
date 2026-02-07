"use client";

import { useTranslations } from "next-intl";
import { Building2, Handshake } from "lucide-react";
import Card from "@/components/ui/Card";
import { partnerOrganizations } from "@/features/about/about-config";

export default function PartnersSection() {
  const t = useTranslations("about");

  return (
    <section id="organizaciones" className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/selva-manu.jpg')" }}
      />
      <div className="absolute inset-0 bg-primary/80" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Building2 className="w-8 h-8 text-accent" />
            <h2 className="font-display text-3xl text-white">{t("organizationsTitle")}</h2>
          </div>
          <p className="text-muted text-lg">{t("organizationsText")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {partnerOrganizations.map((org, index) => (
            <Card key={index} variant="hover" className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Handshake className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-white mb-1">{org.name}</h3>
                  <p className="text-accent text-sm mb-2">{org.type}</p>
                  <p className="text-muted text-sm">{org.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
