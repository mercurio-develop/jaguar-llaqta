"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";
import { Package } from "@/config/packages";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface ActivitySidebarProps {
  pkg: Package;
  locale: string;
}

export default function ActivitySidebar({ pkg, locale }: ActivitySidebarProps) {
  const isSpanish = locale === "es";

  return (
    <div className="lg:col-span-1">
      <div className="sticky top-40">
        <Card className="p-6 border border-support">
          <div className="text-center mb-8 pb-8 border-b border-support">
            <p className="text-muted text-sm uppercase tracking-wider mb-2">
              {isSpanish ? "Desde" : "From"}
            </p>
            <p className="text-4xl font-bold text-accent tracking-tight">
              ${pkg.price}
              <span className="text-lg font-normal text-muted"> USD</span>
            </p>
            <p className="text-muted text-sm">
              {isSpanish ? "por persona" : "per person"}
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted uppercase tracking-wider">
                {isSpanish ? "Duración" : "Duration"}
              </span>
              <span className="text-white">
                {isSpanish ? pkg.duration : (pkg.durationEn || pkg.duration)}
              </span>
            </div>
            {pkg.difficulty && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted uppercase tracking-wider">
                  {isSpanish ? "Dificultad" : "Difficulty"}
                </span>
                <span className="text-white">
                  {isSpanish ? pkg.difficulty : (pkg.difficultyEn || pkg.difficulty)}
                </span>
              </div>
            )}
          </div>

          <Link href={`/${locale}/reservas?paquete=${pkg.id}`}>
            <Button className="w-full">
              {isSpanish ? "Pre-Reservar" : "Pre-Book"}
            </Button>
          </Link>

          <div className="mt-8 pt-8 border-t border-support">
            <p className="text-muted text-sm mb-4">
              {isSpanish ? "¿Tienes preguntas?" : "Have questions?"}
            </p>
            <Link href={`/${locale}/contacto`}>
              <Button variant="outline" className="w-full">
                {isSpanish ? "Contáctanos" : "Contact Us"}
              </Button>
            </Link>
          </div>
        </Card>

        {pkg.bestSeason && (
          <Card className="p-4 mt-4 border border-support">
            <div className="flex items-start gap-4">
              <Calendar className="w-5 h-5 text-accent flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-medium mb-1 uppercase tracking-wider">
                  {isSpanish ? "Mejor Temporada" : "Best Season"}
                </p>
                <p className="text-muted text-sm">{pkg.bestSeason}</p>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
