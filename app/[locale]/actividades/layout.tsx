import { Metadata } from "next";

const BASE_URL = "https://jaguarllaqta.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs ? "Actividades y Experiencias en Cusco | Jaguar Llaqta" : "Activities & Experiences in Cusco | Jaguar Llaqta",
    description: isEs
      ? "Explora nuestro catálogo de experiencias andinas. Rutas de trekking, ceremonias, y turismo vivencial con comunidades nativas en Cusco."
      : "Explore our catalog of Andean experiences. Trekking routes, ceremonies, and experiential tourism with native communities in Cusco.",
    keywords: isEs
      ? ["actividades cusco", "experiencias andinas", "trekking cusco", "ceremonias cusco", "paquetes turisticos cusco", "turismo vivencial"]
      : ["cusco activities", "andean experiences", "cusco trekking", "cusco ceremonies", "cusco tour packages", "experiential tourism"],
    alternates: {
      canonical: `${BASE_URL}/${locale}/actividades`,
      languages: {
        "x-default": `${BASE_URL}/es/actividades`,
        es: `${BASE_URL}/es/actividades`,
        en: `${BASE_URL}/en/actividades`,
      },
    },
  };
}

export default function ActividadesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
