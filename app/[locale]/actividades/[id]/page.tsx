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
  
  return {
    title: name,
    description: description,
    openGraph: {
      title: `${name} | Jaguar Llaqta`,
      description: description,
      images: pkg.heroImage ? [{ url: pkg.heroImage }] : [],
    },
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
