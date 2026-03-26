import type { Metadata } from "next";

const BASE_URL = "https://jaguarllaqta.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Actividades de Turismo Ancestral y Alternativo en Cusco | Jaguar Llaqta"
      : "Ancestral & Alternative Tourism Activities in Cusco | Jaguar Llaqta",
    description: isEs
      ? "Descubre todas nuestras actividades de turismo ancestral y alternativo en Cusco: rutas de trekking, turismo comunitario y ceremonias andinas auténticas."
      : "Discover all our ancestral and alternative tourism activities in Cusco: trekking routes, community tourism and authentic Andean ceremonies.",
    keywords: isEs
      ? ["turismo ancestral cusco", "turismo alternativo cusco", "actividades cusco", "trekking cusco", "ceremonias andinas", "turismo comunitario cusco"]
      : ["ancestral tourism cusco", "alternative tourism cusco", "activities cusco", "trekking cusco", "andean ceremonies", "community tourism cusco"],
    alternates: {
      canonical: `${BASE_URL}/${locale}/actividades`,
      languages: { es: `${BASE_URL}/es/actividades`, en: `${BASE_URL}/en/actividades` },
    },
  };
}

export default function ActividadesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
