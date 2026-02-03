"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Clock, Star, ArrowRight, Moon, Sun } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const ceremonies = [
  {
    id: "pachamama",
    name: "Ceremonia a la Pachamama",
    nameEn: "Pachamama Ceremony",
    duration: "Medio día",
    durationEn: "Half day",
    icon: Star,
    description: "Ofrenda tradicional a la Madre Tierra guiada por un pampamesayoq. Conexión profunda con la cosmovisión andina.",
    descriptionEn: "Traditional offering to Mother Earth guided by a pampamesayoq. Deep connection with the Andean worldview.",
    highlights: ["Despacho andino", "Meditación", "Coca kintu", "Lugar sagrado"],
    highlightsEn: ["Andean despacho", "Meditation", "Coca kintu", "Sacred place"],
  },
  {
    id: "amanecer",
    name: "Ritual del Amanecer",
    nameEn: "Sunrise Ritual",
    duration: "4 horas",
    durationEn: "4 hours",
    icon: Sun,
    description: "Recibe la energía del primer sol en un sitio sagrado. Ceremonia de limpieza y renovación espiritual.",
    descriptionEn: "Receive the energy of the first sun at a sacred site. Ceremony of cleansing and spiritual renewal.",
    highlights: ["Templo del Sol", "Limpieza energética", "Meditación guiada", "Mate de coca"],
    highlightsEn: ["Temple of the Sun", "Energy cleansing", "Guided meditation", "Coca tea"],
  },
  {
    id: "retiro",
    name: "Retiro Espiritual",
    nameEn: "Spiritual Retreat",
    duration: "3 días / 2 noches",
    durationEn: "3 days / 2 nights",
    icon: Sparkles,
    description: "Inmersión completa en las prácticas espirituales andinas. Incluye ceremonias, meditación y conexión con la naturaleza.",
    descriptionEn: "Complete immersion in Andean spiritual practices. Includes ceremonies, meditation and connection with nature.",
    highlights: ["Múltiples ceremonias", "Alojamiento", "Ayuno opcional", "Guía espiritual"],
    highlightsEn: ["Multiple ceremonies", "Lodging", "Optional fasting", "Spiritual guide"],
  },
  {
    id: "luna",
    name: "Ceremonia de Luna Llena",
    nameEn: "Full Moon Ceremony",
    duration: "Noche",
    durationEn: "Evening",
    icon: Moon,
    description: "Ritual bajo la luz de la luna llena en las montañas sagradas. Liberación y manifestación de intenciones.",
    descriptionEn: "Ritual under the light of the full moon in the sacred mountains. Release and manifestation of intentions.",
    highlights: ["Sitio sagrado", "Fuego ceremonial", "Cantos andinos", "Cielo estrellado"],
    highlightsEn: ["Sacred site", "Ceremonial fire", "Andean chants", "Starry sky"],
  },
];

export default function EspirituPage() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const isSpanish = locale === "es";

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-support/30 to-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <div className="w-20 h-20 border border-accent/30 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-accent" />
            </div>
            <p className="text-accent uppercase tracking-widest mb-2">
              {isSpanish ? "Para el Espíritu" : "For the Spirit"}
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-white uppercase tracking-wider mb-4">
              {isSpanish ? "Ceremonias y Rituales" : "Ceremonies & Rituals"}
            </h1>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              {isSpanish
                ? "Conecta con lo sagrado a través de ceremonias ancestrales guiadas por maestros andinos. Experimenta la cosmovisión viva de los Andes."
                : "Connect with the sacred through ancestral ceremonies guided by Andean masters. Experience the living worldview of the Andes."}
            </p>
            <div className="w-24 h-0.5 bg-accent mx-auto mt-8" />
          </div>

          {/* Note */}
          <div className="max-w-2xl mx-auto">
            <Card className="border border-accent/20 text-center p-6">
              <Star className="w-8 h-8 text-accent mx-auto mb-3" />
              <p className="text-white/80 text-sm">
                {isSpanish
                  ? "Todas nuestras ceremonias son guiadas por maestros andinos auténticos (pampamesayoq y altomesayoq) que han heredado el conocimiento de sus ancestros."
                  : "All our ceremonies are guided by authentic Andean masters (pampamesayoq and altomesayoq) who have inherited the knowledge of their ancestors."}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Ceremonies */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <h2 className="font-display text-2xl text-white uppercase tracking-wider mb-8">
            {isSpanish ? "Nuestras Ceremonias" : "Our Ceremonies"}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {ceremonies.map((ceremony) => {
              const Icon = ceremony.icon;
              return (
                <Card key={ceremony.id} variant="hover" className="p-0 overflow-hidden border border-support">
                  <div className="aspect-video bg-support/30 relative flex items-center justify-center">
                    <Icon className="w-16 h-16 text-white/10" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-white uppercase tracking-wider mb-2">
                      {isSpanish ? ceremony.name : ceremony.nameEn}
                    </h3>
                    <div className="flex items-center gap-2 text-muted text-sm mb-3">
                      <Clock className="w-4 h-4 text-accent" />
                      <span>{isSpanish ? ceremony.duration : ceremony.durationEn}</span>
                    </div>
                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {isSpanish ? ceremony.description : ceremony.descriptionEn}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(isSpanish ? ceremony.highlights : ceremony.highlightsEn).map((h, i) => (
                        <span key={i} className="px-2 py-1 border border-support text-white/70 text-xs">
                          {h}
                        </span>
                      ))}
                    </div>
                    <Link href={`/${locale}/paquetes?categoria=espiritu`} className="inline-flex items-center gap-2 text-accent hover:text-accent-alt transition-colors">
                      <span className="text-sm font-medium uppercase tracking-wider">
                        {isSpanish ? "Ver paquetes" : "View packages"}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Card className="inline-block p-8 border border-support">
              <h3 className="font-display text-xl text-white uppercase tracking-wider mb-4">
                {isSpanish ? "¿Listo para conectar con lo sagrado?" : "Ready to connect with the sacred?"}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href={`/${locale}/paquetes?categoria=espiritu`}>
                  <Button>{isSpanish ? "Ver paquetes espirituales" : "View spiritual packages"}</Button>
                </Link>
                <Link href={`/${locale}/galeria?categoria=espiritu`}>
                  <Button variant="outline">{isSpanish ? "Ver galería" : "View gallery"}</Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
