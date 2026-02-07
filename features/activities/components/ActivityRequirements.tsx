"use client";

import { AlertCircle } from "lucide-react";
import Card from "@/components/ui/Card";
import type { Package } from "@/config/packages";

interface ActivityRequirementsProps {
  pkg: Package;
  locale: string;
}

export default function ActivityRequirements({ pkg, locale }: ActivityRequirementsProps) {
  const isSpanish = locale === "es";

  return (
    <section id="requirements">
      <h2 className="font-display text-2xl text-white uppercase tracking-wider mb-8">
        {isSpanish ? "Requisitos y Qué Traer" : "Requirements & What to Bring"}
      </h2>

      <Card className="p-6 border border-support">
        <div className="flex items-start gap-4 mb-6">
          <AlertCircle className="w-6 h-6 text-accent flex-shrink-0" />
          <p className="text-muted">
            {isSpanish
              ? "Para garantizar una experiencia segura y placentera, asegúrate de cumplir con estos requisitos:"
              : "To ensure a safe and pleasant experience, make sure you meet these requirements:"}
          </p>
        </div>

        <ul className="space-y-4">
          {(isSpanish ? pkg.requirements : pkg.requirementsEn).map((req, i) => (
            <li key={i} className="flex items-start gap-4 text-white/80">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              {req}
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
