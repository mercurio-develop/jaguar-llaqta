import { getPackageById } from "@/config/packages";
import ActivityClientPage from "./ActivityClientPage";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string; locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id, locale } = await params;
  const pkg = getPackageById(id);
  
  if (!pkg) return {};
  
  const isSpanish = locale === "es";
  const name = isSpanish ? pkg.name : pkg.nameEn;
  const description = isSpanish ? pkg.description : pkg.descriptionEn;
  const baseUrl = "https://jaguarllaqta.com";
  
  const keywords = [
    name,
    "Jaguar Llaqta",
    isSpanish ? "turismo ancestral" : "ancestral tourism",
    isSpanish ? "turismo alternativo" : "alternative tourism",
    isSpanish ? "Cusco" : "Cusco Peru",
    isSpanish ? "Valle Sagrado" : "Sacred Valley",
    ...pkg.categories.map(c => isSpanish ? (c === 'rutas' ? 'trekking' : c) : c)
  ];
  
  return {
    title: `${name} | Jaguar Llaqta`,
    description: description,
    keywords: keywords.join(", "),
    alternates: {
      canonical: `${baseUrl}/${locale}/actividades/${id}`,
      languages: {
        "x-default": `${baseUrl}/es/actividades/${id}`,
        es: `${baseUrl}/es/actividades/${id}`,
        en: `${baseUrl}/en/actividades/${id}`,
      },
    },
    openGraph: {
      title: `${name} | Jaguar Llaqta`,
      description: description,
      url: `${baseUrl}/${locale}/actividades/${id}`,
      siteName: "Jaguar Llaqta",
      locale: isSpanish ? "es_PE" : "en_US",
      type: "website",
      images: pkg.heroImage ? [{ 
        url: `${baseUrl}${pkg.heroImage}`,
        width: 1200,
        height: 630,
        alt: name
      }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} | Jaguar Llaqta`,
      description: description,
      images: pkg.heroImage ? [`${baseUrl}${pkg.heroImage}`] : [],
    }
  };
}

export default async function ActivityPage({ params }: PageProps) {
  const { id, locale } = await params;
  const pkg = getPackageById(id);
  
  if (!pkg) {
    notFound();
  }

  const isSpanish = locale === "es";
  const name = isSpanish ? pkg.name : pkg.nameEn;
  const description = isSpanish ? pkg.description : pkg.descriptionEn;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: name,
    description: description,
    image: `https://jaguarllaqta.com${pkg.heroImage || ''}`,
    offers: {
      "@type": "Offer",
      price: pkg.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `https://jaguarllaqta.com/${locale}/actividades/${id}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ActivityClientPage params={{ id }} />
    </>
  );
}
