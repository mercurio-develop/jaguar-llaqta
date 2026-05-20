import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs ? "Términos y Condiciones | Jaguar Llaqta" : "Terms and Conditions | Jaguar Llaqta",
    description: isEs
      ? "Términos y condiciones de los servicios de Jaguar Llaqta."
      : "Terms and conditions for Jaguar Llaqta services.",
    alternates: {
      canonical: `https://jaguarllaqta.com/${locale}/terminos`,
      languages: {
        "x-default": `https://jaguarllaqta.com/es/terminos`,
        es: `https://jaguarllaqta.com/es/terminos`,
        en: `https://jaguarllaqta.com/en/terminos`,
      },
    },
  };
}

export default function TerminosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
