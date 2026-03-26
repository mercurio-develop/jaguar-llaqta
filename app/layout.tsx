import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Jaguar Llaqta | Turismo Ancestral y Alternativo en Cusco, Perú",
    template: "%s | Jaguar Llaqta",
  },
  description: "Turismo ancestral y alternativo en Cusco, Perú. Trekking, comunidades nativas y ceremonias andinas. Ancestral and alternative tourism in Cusco, Peru.",
  keywords: [
    "turismo ancestral cusco",
    "turismo alternativo cusco",
    "turismo ancestral peru",
    "turismo alternativo peru",
    "ancestral tourism cusco",
    "alternative tourism cusco",
    "trekking cusco",
    "ceremonias andinas",
    "comunidades nativas cusco",
    "jaguar llaqta",
    "turismo espiritual cusco",
    "andean ceremonies",
    "cusco trekking",
  ],
  authors: [{ name: "Jaguar Llaqta" }],
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://jaguarllaqta.com",
    siteName: "Jaguar Llaqta",
    title: "Jaguar Llaqta | Turismo Ancestral y Alternativo en Cusco",
    description: "Turismo ancestral y alternativo en Cusco, Perú. Trekking, comunidades nativas y ceremonias andinas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaguar Llaqta | Turismo Ancestral y Alternativo en Cusco",
    description: "Turismo ancestral y alternativo en Cusco, Perú. Trekking, comunidades nativas y ceremonias andinas.",
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
  "@type": "TravelAgency",
  name: "Jaguar Llaqta",
  description: "Agencia de turismo ancestral y alternativo en Cusco, Perú. Trekking, comunidades nativas y ceremonias andinas. Ancestral and alternative tourism agency in Cusco, Peru.",
  url: "https://jaguarllaqta.com",
  email: "jaguarllaqta@gmail.com",
  telephone: "+51926935820",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cusco",
    addressRegion: "Cusco",
    addressCountry: "PE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -13.5226,
    longitude: -71.9674,
  },
  areaServed: ["Cusco", "Perú"],
  priceRange: "$$",
  knowsAbout: [
    "turismo ancestral",
    "turismo alternativo",
    "trekking cusco",
    "ceremonias andinas",
    "comunidades nativas",
    "ancestral tourism",
    "alternative tourism",
  ],
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
