"use client";

import { useTranslations } from "next-intl";
import { Handshake } from "lucide-react";
import Card from "@/components/ui/Card";

const partners = [
  {
    name: "Comunidad de Chinchero",
    type: "Comunidad Local",
    description: "Artesanos textiles que preservan técnicas ancestrales de tejido andino.",
  },
  {
    name: "Asociación de Guías de Montaña",
    type: "Guías Especializados",
    description: "Guías certificados con profundo conocimiento de las rutas sagradas.",
  },
  {
    name: "Pampamesayoq de Ollantaytambo",
    type: "Maestros Espirituales",
    description: "Herederos de la tradición espiritual andina.",
  },
  {
    name: "Turismo Sostenible Perú",
    type: "ONG",
    description: "Organización comprometida con el turismo responsable y comunitario.",
  },
];

export default function PartnersPage() {
  const t = useTranslations("about");

  return (
    <div className="pt-20">
      <section className="py-24 bg-primary-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="section-title mb-6">{t("partnersTitle")}</h1>
            <p className="text-muted text-lg">{t("partnersText")}</p>
            <div className="w-24 h-1 bg-accent mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <Card key={index} variant="hover" className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Handshake className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-white mb-1">{partner.name}</h3>
                    <p className="text-accent text-sm mb-2">{partner.type}</p>
                    <p className="text-muted text-sm">{partner.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
