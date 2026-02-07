"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

export default function CategoryCTA() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  return (
    <section className="py-16 bg-primary-alt">
      <div className="container-custom text-center">
        <h3 className="font-display text-2xl text-white uppercase tracking-wider mb-4">
          {locale === "es" ? "¿No encuentras lo que buscas?" : "Can't find what you're looking for?"}
        </h3>
        <p className="text-muted mb-6 max-w-xl mx-auto">
          {locale === "es"
            ? "Diseñamos experiencias personalizadas según tus intereses."
            : "We design custom experiences based on your interests."}
        </p>
        <Link href={`/${locale}/contacto`}>
          <Button variant="outline">
            {locale === "es" ? "Contáctanos" : "Contact us"}
          </Button>
        </Link>
      </div>
    </section>
  );
}
