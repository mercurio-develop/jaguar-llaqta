import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs ? "Política de Privacidad | Jaguar Llaqta" : "Privacy Policy | Jaguar Llaqta",
    description: isEs
      ? "Política de privacidad y protección de datos de Jaguar Llaqta."
      : "Privacy policy and data protection for Jaguar Llaqta.",
    alternates: {
      canonical: `https://jaguarllaqta.com/${locale}/privacidad`,
      languages: {
        "x-default": `https://jaguarllaqta.com/es/privacidad`,
        es: `https://jaguarllaqta.com/es/privacidad`,
        en: `https://jaguarllaqta.com/en/privacidad`,
      },
    },
  };
}

export default function PrivacidadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
