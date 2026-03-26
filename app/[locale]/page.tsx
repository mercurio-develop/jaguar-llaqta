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
      ? "Jaguar Llaqta | Turismo Alternativo en Cusco, Perú"
      : "Jaguar Llaqta | Alternative Tourism in Cusco, Peru",
    description: isEs
      ? "Agencia de turismo alternativo en Cusco. Rutas de trekking, comunidades nativas, ceremonias andinas y experiencias auténticas en los Andes del Perú."
      : "Alternative tourism agency in Cusco. Trekking routes, native communities, Andean ceremonies and authentic experiences in the Peruvian Andes.",
    keywords: isEs
      ? ["turismo cusco", "trekking peru", "turismo alternativo cusco", "comunidades andinas", "ceremonias andinas", "jaguar llaqta", "ausangate", "choquequirao", "experiencias cusco"]
      : ["cusco tourism", "trekking peru", "alternative tourism cusco", "andean communities", "andean ceremonies", "jaguar llaqta", "ausangate", "choquequirao"],
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: { es: `${BASE_URL}/es`, en: `${BASE_URL}/en` },
    },
    openGraph: {
      url: `${BASE_URL}/${locale}`,
      locale: isEs ? "es_PE" : "en_US",
      images: [{ url: `${BASE_URL}/images/og-home.jpg`, width: 1200, height: 630 }],
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
