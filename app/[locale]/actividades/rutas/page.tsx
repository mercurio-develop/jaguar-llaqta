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
    title: isEs ? "Rutas de Trekking en Cusco | Jaguar Llaqta" : "Trekking Routes in Cusco | Jaguar Llaqta",
    description: isEs
      ? "Recorre rutas alternativas de trekking en Cusco: Ausangate, Choquequirao, Siete Lagunas y más. Experiencias auténticas en los Andes del Perú con Jaguar Llaqta."
      : "Explore alternative trekking routes in Cusco: Ausangate, Choquequirao, Seven Lakes and more. Authentic experiences in the Peruvian Andes with Jaguar Llaqta.",
    keywords: isEs
      ? ["trekking cusco", "rutas cusco", "ausangate trek", "choquequirao", "siete lagunas", "caminatas peru"]
      : ["trekking cusco", "cusco routes", "ausangate trek", "choquequirao", "seven lakes cusco"],
    alternates: {
      canonical: `${BASE_URL}/${locale}/actividades/rutas`,
      languages: { es: `${BASE_URL}/es/actividades/rutas`, en: `${BASE_URL}/en/actividades/rutas` },
    },
  };
}

export default function RutasPage() {
  return (
    <div className="pt-[var(--header-height)]">
      <CategoryHero category="rutas" />
      <CategoryStats category="rutas" />
      <CategoryPackageList category="rutas" />
      <CategoryCTA />
    </div>
  );
}
