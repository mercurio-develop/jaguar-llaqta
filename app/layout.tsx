import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Jaguar Llaqta | Turismo Ancestral y Alternativo en Cusco, Perú",
    template: "%s | Jaguar Llaqta",
  },
  description: "Turismo ancestral y alternativo en Cusco, Perú. Trekking, comunidades nativas y ceremonias andinas. Ancestral and alternative tourism in Cusco, Peru.",
  keywords: [
    // Core brand
    "jaguar llaqta",
    // ES - turismo
    "turismo ancestral cusco",
    "turismo alternativo cusco",
    "turismo ancestral peru",
    "turismo alternativo peru",
    "turismo espiritual cusco",
    "cultura viva cusco",
    "cultura inca",
    "pachamama",
    "comunidades alto andinas",
    "comunidades nativas cusco",
    "naturaleza cusco",
    // ES - actividades
    "trekking cusco",
    "rutas cusco",
    "expediciones cusco",
    "caminatas cusco",
    "ceremonias andinas",
    "descubre peru",
    "viajes cusco",
    "viajes peru",
    // EN - tourism
    "ancestral tourism cusco",
    "alternative tourism cusco",
    "living culture cusco",
    "inca culture",
    "high andean communities",
    "nature cusco",
    "andes travel",
    "south america travel",
    // EN - activities
    "cusco trekking",
    "andean ceremonies",
    "expeditions cusco",
    "discover peru",
    "travel cusco",
    "travel peru",
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


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
