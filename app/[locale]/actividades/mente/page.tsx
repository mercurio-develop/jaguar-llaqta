"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Users, Clock, ArrowRight, Heart, Utensils, Palette } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const activities = [
  {
    id: "textiles",
    name: "Taller de Textiles en Chinchero",
    nameEn: "Textile Workshop in Chinchero",
    duration: "Medio día",
    durationEn: "Half day",
    icon: Palette,
    description: "Aprende técnicas ancestrales de tejido andino con artesanas locales. Conoce el proceso desde la esquila hasta el telar.",
    descriptionEn: "Learn ancestral Andean weaving techniques with local artisans. Discover the process from shearing to loom.",
    highlights: ["Teñido natural", "Tejido en telar", "Almuerzo típico", "Mercado local"],
    highlightsEn: ["Natural dyeing", "Loom weaving", "Traditional lunch", "Local market"],
  },
  {
    id: "gastronomia",
    name: "Experiencia Gastronómica Andina",
    nameEn: "Andean Gastronomic Experience",
    duration: "Día completo",
    durationEn: "Full day",
    icon: Utensils,
    description: "Inmersión culinaria: visita al mercado, cosecha de ingredientes y preparación de platos tradicionales con familias locales.",
    descriptionEn: "Culinary immersion: market visit, ingredient harvesting and preparation of traditional dishes with local families.",
    highlights: ["Mercado San Pedro", "Cocina con leña", "Pachamanca", "Chicha de jora"],
    highlightsEn: ["San Pedro Market", "Wood fire cooking", "Pachamanca", "Chicha de jora"],
  },
  {
    id: "agricultura",
    name: "Día con Agricultores",
    nameEn: "Day with Farmers",
    duration: "Día completo",
    durationEn: "Full day",
    icon: Heart,
    description: "Participa en las labores agrícolas tradicionales. Siembra, cosecha y conoce los secretos de la agricultura andina.",
    descriptionEn: "Participate in traditional agricultural work. Plant, harvest and learn the secrets of Andean agriculture.",
    highlights: ["Trabajo en chacra", "Técnicas ancestrales", "Almuerzo campestre", "Convivencia familiar"],
    highlightsEn: ["Farm work", "Ancestral techniques", "Country lunch", "Family experience"],
  },
  {
    id: "convivencia",
    name: "Convivencia en Comunidad",
    nameEn: "Community Homestay",
    duration: "2 días / 1 noche",
    durationEn: "2 days / 1 night",
    icon: Users,
    description: "Vive con una familia andina. Comparte su día a día, tradiciones, comidas y aprende de su sabiduría.",
    descriptionEn: "Live with an Andean family. Share their daily life, traditions, meals and learn from their wisdom.",
    highlights: ["Hospedaje familiar", "Comidas incluidas", "Actividades diarias", "Intercambio cultural"],
    highlightsEn: ["Family lodging", "Meals included", "Daily activities", "Cultural exchange"],
  },
];

export default function MentePage() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const isSpanish = locale === "es";

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-support/30 to-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 border border-accent/30 flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-accent" />
            </div>
            <p className="text-accent uppercase tracking-widest mb-2">
              {isSpanish ? "Para la Mente" : "For the Mind"}
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-white uppercase tracking-wider mb-4">
              {isSpanish ? "Experiencias Comunitarias" : "Community Experiences"}
            </h1>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              {isSpanish
                ? "Expande tu mente a través del encuentro con comunidades vivas. Aprende de la sabiduría ancestral, las tradiciones y la vida cotidiana andina."
                : "Expand your mind through encounters with living communities. Learn from ancestral wisdom, traditions and everyday Andean life."}
            </p>
            <div className="w-24 h-0.5 bg-accent mx-auto mt-8" />
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <h2 className="font-display text-2xl text-white uppercase tracking-wider mb-8">
            {isSpanish ? "Nuestras Experiencias" : "Our Experiences"}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity) => {
              const Icon = activity.icon;
              return (
                <Card key={activity.id} variant="hover" className="p-0 overflow-hidden border border-support">
                  <div className="aspect-video bg-support/30 relative flex items-center justify-center">
                    <Icon className="w-16 h-16 text-white/10" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-white uppercase tracking-wider mb-2">
                      {isSpanish ? activity.name : activity.nameEn}
                    </h3>
                    <div className="flex items-center gap-2 text-muted text-sm mb-3">
                      <Clock className="w-4 h-4 text-accent" />
                      <span>{isSpanish ? activity.duration : activity.durationEn}</span>
                    </div>
                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {isSpanish ? activity.description : activity.descriptionEn}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(isSpanish ? activity.highlights : activity.highlightsEn).map((h, i) => (
                        <span key={i} className="px-2 py-1 border border-support text-white/70 text-xs">
                          {h}
                        </span>
                      ))}
                    </div>
                    <Link href={`/${locale}/paquetes?categoria=mente`} className="inline-flex items-center gap-2 text-accent hover:text-accent-alt transition-colors">
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
                {isSpanish ? "¿Quieres conocer nuestras comunidades?" : "Want to meet our communities?"}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href={`/${locale}/paquetes?categoria=mente`}>
                  <Button>{isSpanish ? "Ver paquetes comunitarios" : "View community packages"}</Button>
                </Link>
                <Link href={`/${locale}/galeria?categoria=mente`}>
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
