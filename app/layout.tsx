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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className="bg-primary min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
