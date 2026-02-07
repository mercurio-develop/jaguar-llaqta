"use client";

import { useTranslations } from "next-intl";
import ContactInfo from "@/features/contacto/components/ContactInfo";
import ContactForm from "@/features/contacto/components/ContactForm";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <div className="pt-20">
      <section className="py-24 bg-primary-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="section-title mb-4">{t("title")}</h1>
            <p className="section-subtitle">{t("subtitle")}</p>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
