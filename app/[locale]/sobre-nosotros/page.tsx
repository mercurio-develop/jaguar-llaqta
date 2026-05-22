import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import AboutClientPage from "./AboutClientPage";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  
  return {
    title: t("title"),
    description: t("historyText").slice(0, 150) + "...",
    alternates: {
      canonical: `https://jaguarllaqta.com/${locale}/sobre-nosotros`,
      languages: {
        "x-default": `https://jaguarllaqta.com/es/sobre-nosotros`,
        es: `https://jaguarllaqta.com/es/sobre-nosotros`,
        en: `https://jaguarllaqta.com/en/sobre-nosotros`,
      },
    },
    openGraph: {
      title: `${t("title")} | Jaguar Llaqta`,
      description: t("historyText").slice(0, 150) + "...",
      images: [{ url: "/images/about/about-community.jpg" }],
    },
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const tFaq = await getTranslations({ locale, namespace: "faq" });

  const faqs = [
    { q: tFaq("q1"), a: tFaq("a1") },
    { q: tFaq("q2"), a: tFaq("a2") },
    { q: tFaq("q3"), a: tFaq("a3") },
    { q: tFaq("q4"), a: tFaq("a4") },
    { q: tFaq("q5"), a: tFaq("a5") },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClientPage />
    </>
  );
}
