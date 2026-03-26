import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Jaguar Llaqta - Turismo Ancestral en Cusco",
    template: "%s | Jaguar Llaqta",
  },
  description: "Descubre el Cusco auténtico a través de experiencias que conectan con la sabiduría ancestral andina.",
  keywords: ["turismo", "cusco", "peru", "ancestral", "espiritual", "trekking", "comunidades"],
  authors: [{ name: "Jaguar Llaqta" }],
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://jaguarllaqta.com",
    siteName: "Jaguar Llaqta",
    title: "Jaguar Llaqta - Turismo Ancestral en Cusco",
    description: "Descubre el Cusco auténtico a través de experiencias que conectan con la sabiduría ancestral andina.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaguar Llaqta - Turismo Ancestral en Cusco",
    description: "Descubre el Cusco auténtico a través de experiencias que conectan con la sabiduría ancestral andina",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "4Szsukv9JNxa1h1I5sSNvQiJWtNhNg-uuwm5oMioJ_s",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristInformationCenter",
  name: "Jaguar Llaqta",
  description: "Agencia de turismo alternativo en Cusco, Perú. Rutas de trekking, comunidades nativas y ceremonias andinas.",
  url: "https://jaguarllaqta.com",
  email: "jaguarllaqta@gmail.com",
  telephone: "+51926935820",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cusco",
    addressCountry: "PE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -13.5226,
    longitude: -71.9674,
  },
  areaServed: "Cusco, Perú",
  priceRange: "$$",
  sameAs: [
    "https://www.instagram.com/jaguarllaqta",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-primary min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
