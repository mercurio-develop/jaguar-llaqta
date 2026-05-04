import type { Metadata } from "next";
import Hero from "@/features/home/components/Hero";
import FeaturedExperiences from "@/features/home/components/FeaturedExperiences";
import WhyChooseUs from "@/features/home/components/WhyChooseUs";
import Testimonials from "@/features/home/components/Testimonials";

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
      ? "Jaguar Llaqta | Turismo Ancestral y Alternativo en Cusco, Perú"
      : "Jaguar Llaqta | Ancestral & Alternative Tourism in Cusco, Peru",
    description: isEs
      ? "Turismo ancestral y alternativo en Cusco, Perú. Trekking por rutas únicas, vivencias con comunidades nativas y ceremonias andinas auténticas. Experimenta el Perú profundo con Jaguar Llaqta."
      : "Ancestral and alternative tourism in Cusco, Peru. Trekking unique routes, experiences with native communities and authentic Andean ceremonies. Experience deep Peru with Jaguar Llaqta.",
    keywords: isEs
      ? ["turismo ancestral cusco", "turismo alternativo cusco", "cultura viva cusco", "trekking cusco", "rutas cusco", "expediciones cusco", "comunidades alto andinas", "ceremonias andinas", "pachamama", "naturaleza cusco", "cultura inca", "descubre peru", "viajes peru", "jaguar llaqta"]
      : ["ancestral tourism cusco", "alternative tourism cusco", "living culture cusco", "cusco trekking", "andean expeditions", "high andean communities", "andean ceremonies", "pachamama", "inca culture", "nature cusco", "discover peru", "travel peru", "andes travel", "jaguar llaqta"],
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        "x-default": `${BASE_URL}/es`,
        es: `${BASE_URL}/es`,
        en: `${BASE_URL}/en`,
      },
    },
    openGraph: {
      url: `${BASE_URL}/${locale}`,
      locale: isEs ? "es_PE" : "en_US",
      images: [{ url: `${BASE_URL}/images/seo/og-image.jpg`, width: 1200, height: 630 }],
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedExperiences />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}
