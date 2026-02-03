"use client";

import { useTranslations } from "next-intl";
import { MapPin, Mountain, Users, Sparkles } from "lucide-react";
import Card from "@/components/ui/Card";

const locations = [
  {
    id: "cusco",
    name: "Cusco",
    type: "city",
    description: "Capital del antiguo Imperio Inca y base de operaciones",
    lat: -13.5319,
    lng: -71.9675,
  },
  {
    id: "machu-picchu",
    name: "Machu Picchu",
    type: "archaeological",
    description: "La maravilla del mundo y destino principal",
    lat: -13.1631,
    lng: -72.5450,
  },
  {
    id: "salkantay",
    name: "Nevado Salkantay",
    type: "mountain",
    description: "Apu sagrado de 6,271 metros",
    lat: -13.3342,
    lng: -72.5500,
  },
  {
    id: "ausangate",
    name: "Ausangate",
    type: "mountain",
    description: "Montaña sagrada y hogar de la Montaña de Colores",
    lat: -13.7833,
    lng: -71.2333,
  },
  {
    id: "chinchero",
    name: "Chinchero",
    type: "community",
    description: "Comunidad de artesanos textiles",
    lat: -13.3933,
    lng: -72.0500,
  },
  {
    id: "pisac",
    name: "Pisac",
    type: "community",
    description: "Famoso por su mercado y ruinas incas",
    lat: -13.4167,
    lng: -71.8500,
  },
];

export default function MapsPage() {
  const t = useTranslations("gallery");

  return (
    <div className="pt-20">
      <section className="py-24 bg-primary-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="section-title mb-4">{t("mapsTitle")}</h1>
            <p className="section-subtitle">{t("mapsDesc")}</p>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map placeholder */}
            <div className="lg:col-span-2">
              <Card className="aspect-[4/3] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-accent/30 mx-auto mb-4" />
                  <p className="text-muted">
                    Mapa interactivo<br />
                    <span className="text-sm">(Integrar Leaflet o Mapbox aquí)</span>
                  </p>
                </div>
              </Card>
            </div>

            {/* Locations list */}
            <div className="space-y-4">
              <h3 className="font-display text-lg text-white mb-4">Nuestros Destinos</h3>
              {locations.map((location) => {
                const icons = {
                  city: MapPin,
                  archaeological: Mountain,
                  mountain: Mountain,
                  community: Users,
                };
                const Icon = icons[location.type as keyof typeof icons] || MapPin;

                return (
                  <Card
                    key={location.id}
                    variant="hover"
                    className="p-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{location.name}</h4>
                        <p className="text-muted text-sm">{location.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
