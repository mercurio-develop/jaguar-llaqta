import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs ? "Reservas | Jaguar Llaqta" : "Reservations | Jaguar Llaqta",
    description: isEs
      ? "Reserva tu próxima experiencia de turismo ancestral en Cusco con Jaguar Llaqta."
      : "Book your next ancestral tourism experience in Cusco with Jaguar Llaqta.",
    alternates: {
      canonical: `https://jaguarllaqta.com/${locale}/reservas`,
      languages: {
        "x-default": `https://jaguarllaqta.com/es/reservas`,
        es: `https://jaguarllaqta.com/es/reservas`,
        en: `https://jaguarllaqta.com/en/reservas`,
      },
    },
  };
}

export default function ReservasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
