import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs ? "Contacto | Jaguar Llaqta" : "Contact | Jaguar Llaqta",
    description: isEs
      ? "Contáctanos para organizar tu próxima aventura andina. Estamos aquí para ayudarte a planificar tu viaje a Cusco."
      : "Contact us to organize your next Andean adventure. We are here to help you plan your trip to Cusco.",
    alternates: {
      canonical: `https://jaguarllaqta.com/${locale}/contacto`,
      languages: {
        "x-default": `https://jaguarllaqta.com/es/contacto`,
        es: `https://jaguarllaqta.com/es/contacto`,
        en: `https://jaguarllaqta.com/en/contacto`,
      },
    },
  };
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
