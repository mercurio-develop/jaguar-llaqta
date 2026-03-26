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
    title: isEs ? "Ceremonias Andinas en Cusco | Jaguar Llaqta" : "Andean Ceremonies in Cusco | Jaguar Llaqta",
    description: isEs
      ? "Participa en ceremonias andinas auténticas en Cusco. Ofrenda a la Pachamama, ceremonias de coca y rituales de la cosmovisión andina con Jaguar Llaqta."
      : "Participate in authentic Andean ceremonies in Cusco. Pachamama offering, coca ceremonies and Andean cosmovision rituals with Jaguar Llaqta.",
    keywords: isEs
      ? ["ceremonias andinas cusco", "pachamama cusco", "ritual andino", "espiritualidad andina", "ceremonia coca cusco"]
      : ["andean ceremonies cusco", "pachamama ritual", "andean spirituality", "shamanic ceremonies peru"],
    alternates: {
      canonical: `${BASE_URL}/${locale}/actividades/ceremonias`,
      languages: { es: `${BASE_URL}/es/actividades/ceremonias`, en: `${BASE_URL}/en/actividades/ceremonias` },
    },
  };
}

export default function CeremoniasPage() {
  return (
    <div className="pt-20">
      <CategoryHero category="ceremonias" />
      <CategoryStats category="ceremonias" />
      <CategoryPackageList category="ceremonias" />
      <CategoryCTA />
    </div>
  );
}
