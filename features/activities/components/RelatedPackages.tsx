"use client";

import { packages, type Package, type ActivityCategory } from "@/config/packages";
import PackageGrid from "./PackageGrid";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface RelatedPackagesProps {
  currentPackageId: string;
  categories: ActivityCategory[];
  locale: "es" | "en";
}

export default function RelatedPackages({ currentPackageId, categories, locale }: RelatedPackagesProps) {
  // Find related packages in the same categories, excluding the current one
  const related = packages
    .filter(
      (pkg) =>
        pkg.id !== currentPackageId &&
        pkg.categories.some((cat) => categories.includes(cat))
    )
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section id="related" className="border-t border-support pt-20 mt-20">
      <h2 className="font-display text-2xl text-white uppercase tracking-wider mb-8">
        {locale === "es" ? "Experiencias Relacionadas" : "Related Experiences"}
      </h2>
      <PackageGrid locale={locale} packages={related} />
      
      {/* FAQ Banner */}
      <div className="mt-16 bg-white/5 border border-white/10 p-8 md:p-12 rounded text-center flex flex-col items-center gap-6">
        <h3 className="font-display text-2xl text-white uppercase tracking-wider">
          {locale === "es" ? "¿Tienes dudas?" : "Have questions?"}
        </h3>
        <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
          {locale === "es" 
            ? "Para conocer más detalles sobre nuestras expediciones, el equipo requerido y nuestras políticas, te invitamos a revisar nuestra sección de preguntas frecuentes."
            : "To learn more about our expeditions, required gear, and our policies, we invite you to check our frequently asked questions section."}
        </p>
        <Link href={`/${locale}/sobre-nosotros#faq`}>
          <Button variant="outline">
            {locale === "es" ? "Ir a Preguntas Frecuentes" : "Go to FAQ"}
          </Button>
        </Link>
      </div>
    </section>
  );
}
