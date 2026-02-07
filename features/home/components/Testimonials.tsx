"use client";

import { useTranslations, useLocale } from "next-intl";
import { Star, Quote } from "lucide-react";
import Card from "@/components/ui/Card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    country: "United States",
    rating: 5,
    text: {
      es: "Una experiencia transformadora. Los guías locales compartieron su sabiduría ancestral de una manera auténtica y respetuosa. Nunca olvidaré la ceremonia al amanecer.",
      en: "A transformative experience. The local guides shared their ancestral wisdom in an authentic and respectful way. I will never forget the sunrise ceremony.",
    },
  },
  {
    id: 2,
    name: "Marco Rossi",
    country: "Italy",
    rating: 5,
    text: {
      es: "El trekking por los senderos sagrados fue desafiante pero increíblemente gratificante. La conexión con la naturaleza y las comunidades locales fue profunda.",
      en: "The trek through the sacred trails was challenging but incredibly rewarding. The connection with nature and local communities was profound.",
    },
  },
  {
    id: 3,
    name: "Emma Thompson",
    country: "Australia",
    rating: 5,
    text: {
      es: "La inmersión cultural con las familias andinas cambió mi perspectiva de vida. Aprendí tanto sobre sus tradiciones, textiles y gastronomía. Altamente recomendado.",
      en: "The cultural immersion with Andean families changed my perspective on life. I learned so much about their traditions, textiles and gastronomy. Highly recommended.",
    },
  },
];

export default function Testimonials() {
  const t = useTranslations("home");
  const locale = useLocale() as "es" | "en";

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/machu-picchu-2.jpg')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary/80" />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title">{t("testimonialsTitle")}</h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} variant="default" className="relative">
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/20" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/80 leading-relaxed mb-6">
                &ldquo;{testimonial.text[locale]}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-white/10 pt-4">
                <p className="font-medium text-white">{testimonial.name}</p>
                <p className="text-sm text-muted">{testimonial.country}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
