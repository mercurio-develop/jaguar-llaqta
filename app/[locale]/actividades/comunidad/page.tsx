import type { Metadata } from "next";
import CategoryHero from "@/features/activities/components/CategoryHero";
import CategoryStats from "@/features/activities/components/CategoryStats";
import CategoryPackageList from "@/features/activities/components/CategoryPackageList";
import CategoryCTA from "@/features/activities/components/CategoryCTA";

const BASE_URL = "https://jaguarllaqta.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  return {
    title: isEs ? "Turismo Comunitario en Cusco | Jaguar Llaqta" : "Community Tourism in Cusco | Jaguar Llaqta",
    description: isEs
      ? "Vive una experiencia genuina con las comunidades nativas del Perú. Conoce sus costumbres, tradiciones y formas de vida en los Andes de Cusco."
      : "Live a genuine experience with the native communities of Peru. Discover their customs, traditions and ways of life in the Andes of Cusco.",
    keywords: isEs
      ? ["turismo comunitario cusco", "comunidades nativas peru", "turismo vivencial", "comunidades andinas cusco"]
      : ["community tourism cusco", "native communities peru", "cultural tourism cusco", "andean communities"],
    alternates: {
      canonical: `${BASE_URL}/${locale}/actividades/comunidad`,
      languages: { es: `${BASE_URL}/es/actividades/comunidad`, en: `${BASE_URL}/en/actividades/comunidad` },
    },
  };
}

export default function ComunidadPage() {
  return (
    <div className="pt-[var(--header-height)]">
      <CategoryHero category="comunidad" />
      <CategoryStats category="comunidad" />
      <CategoryPackageList category="comunidad" />
      <CategoryCTA />
    </div>
  );
}
