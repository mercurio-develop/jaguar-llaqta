"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mountain, Clock, Gauge, MapPin, ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const activities = [
  {
    id: "salkantay",
    name: "Salkantay Trek",
    nameEn: "Salkantay Trek",
    duration: "5 días / 4 noches",
    durationEn: "5 days / 4 nights",
    difficulty: "Moderada - Alta",
    difficultyEn: "Moderate - High",
    description: "Ruta alternativa a Machu Picchu atravesando el nevado Salkantay (6,271m). Paisajes diversos desde glaciares hasta selva nublada.",
    descriptionEn: "Alternative route to Machu Picchu crossing the Salkantay snow peak (6,271m). Diverse landscapes from glaciers to cloud forest.",
    highlights: ["Nevado Salkantay", "Laguna Humantay", "Machu Picchu", "Selva nublada"],
    highlightsEn: ["Salkantay Mountain", "Humantay Lake", "Machu Picchu", "Cloud forest"],
  },
  {
    id: "ausangate",
    name: "Ausangate y Montaña de Colores",
    nameEn: "Ausangate and Rainbow Mountain",
    duration: "4 días / 3 noches",
    durationEn: "4 days / 3 nights",
    difficulty: "Moderada",
    difficultyEn: "Moderate",
    description: "Trek circular alrededor del Apu Ausangate con la famosa Montaña de Siete Colores. Lagunas glaciares y vistas espectaculares.",
    descriptionEn: "Circular trek around Apu Ausangate with the famous Rainbow Mountain. Glacial lagoons and spectacular views.",
    highlights: ["Montaña de Colores", "Lagunas glaciares", "Comunidades alpaqueras", "Aguas termales"],
    highlightsEn: ["Rainbow Mountain", "Glacial lagoons", "Alpaca communities", "Hot springs"],
  },
  {
    id: "lares",
    name: "Trek de Lares",
    nameEn: "Lares Trek",
    duration: "4 días / 3 noches",
    durationEn: "4 days / 3 nights",
    difficulty: "Moderada",
    difficultyEn: "Moderate",
    description: "Combina naturaleza y cultura visitando comunidades andinas auténticas. Incluye Machu Picchu y aguas termales de Lares.",
    descriptionEn: "Combines nature and culture visiting authentic Andean communities. Includes Machu Picchu and Lares hot springs.",
    highlights: ["Comunidades tejedoras", "Aguas termales", "Machu Picchu", "Mercado de Pisac"],
    highlightsEn: ["Weaving communities", "Hot springs", "Machu Picchu", "Pisac Market"],
  },
  {
    id: "choquequirao",
    name: "Choquequirao",
    nameEn: "Choquequirao",
    duration: "5 días / 4 noches",
    durationEn: "5 days / 4 nights",
    difficulty: "Alta",
    difficultyEn: "High",
    description: "La 'hermana sagrada' de Machu Picchu. Trek desafiante hacia ruinas incas poco visitadas en medio de paisajes impresionantes.",
    descriptionEn: "The 'sacred sister' of Machu Picchu. Challenging trek to little-visited Inca ruins amid stunning landscapes.",
    highlights: ["Ruinas de Choquequirao", "Cañón del Apurímac", "Flora y fauna", "Sin multitudes"],
    highlightsEn: ["Choquequirao ruins", "Apurímac Canyon", "Flora and fauna", "No crowds"],
  },
];

export default function CuerpoPage() {
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
              <Mountain className="w-10 h-10 text-accent" />
            </div>
            <p className="text-accent uppercase tracking-widest mb-2">
              {isSpanish ? "Para el Cuerpo" : "For the Body"}
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-white uppercase tracking-wider mb-4">
              {isSpanish ? "Rutas y Trekkings" : "Routes & Treks"}
            </h1>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              {isSpanish
                ? "Desafía tu cuerpo mientras conectas con la tierra sagrada de los Andes. Senderos ancestrales, montañas nevadas y paisajes que transforman."
                : "Challenge your body while connecting with the sacred land of the Andes. Ancestral trails, snow-capped mountains and transformative landscapes."}
            </p>
            <div className="w-24 h-0.5 bg-accent mx-auto mt-8" />
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <h2 className="font-display text-2xl text-white uppercase tracking-wider mb-8">
            {isSpanish ? "Nuestras Rutas" : "Our Routes"}
          </h2>
          <div className="space-y-6">
            {activities.map((activity) => (
              <Card key={activity.id} variant="hover" className="p-0 overflow-hidden border border-support">
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="aspect-[4/3] lg:aspect-auto bg-support/30 relative flex items-center justify-center">
                    <Mountain className="w-16 h-16 text-white/10" />
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <h3 className="font-display text-2xl text-white uppercase tracking-wider mb-4">
                      {isSpanish ? activity.name : activity.nameEn}
                    </h3>
                    <div className="flex flex-wrap gap-6 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-muted">
                        <Clock className="w-4 h-4 text-accent" />
                        <span>{isSpanish ? activity.duration : activity.durationEn}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted">
                        <Gauge className="w-4 h-4 text-accent" />
                        <span>{isSpanish ? activity.difficulty : activity.difficultyEn}</span>
                      </div>
                    </div>
                    <p className="text-muted leading-relaxed mb-4">
                      {isSpanish ? activity.description : activity.descriptionEn}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {(isSpanish ? activity.highlights : activity.highlightsEn).map((h, i) => (
                        <span key={i} className="flex items-center gap-1 px-3 py-1 border border-support text-white/70 text-sm">
                          <MapPin className="w-3 h-3 text-accent" />
                          {h}
                        </span>
                      ))}
                    </div>
                    <Link href={`/${locale}/paquetes?categoria=cuerpo`} className="inline-flex items-center gap-2 text-accent hover:text-accent-alt transition-colors">
                      <span className="font-medium uppercase tracking-wider text-sm">
                        {isSpanish ? "Ver paquetes disponibles" : "View available packages"}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Card className="inline-block p-8 border border-support">
              <h3 className="font-display text-xl text-white uppercase tracking-wider mb-4">
                {isSpanish ? "¿Listo para la aventura?" : "Ready for adventure?"}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href={`/${locale}/paquetes?categoria=cuerpo`}>
                  <Button>{isSpanish ? "Ver paquetes de rutas" : "View route packages"}</Button>
                </Link>
                <Link href={`/${locale}/galeria?categoria=cuerpo`}>
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
