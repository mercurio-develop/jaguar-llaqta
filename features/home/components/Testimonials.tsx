"use client";

import { useRef, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Noemí",
    country: "España",
    rating: 5,
    text: {
      es: "Álvaro habla quechua, lo que hace que la conexión con las comunidades locales sea totalmente auténtica. En la ruta del Ausangate compartimos momentos muy especiales con una comunidad indígena que nos acogió con una hospitalidad que nunca olvidaremos.",
      en: "Álvaro speaks Quechua, which makes the connection with local communities completely authentic. On the Ausangate route we shared very special moments with an indigenous community that welcomed us with a hospitality we will never forget.",
    },
  },
  {
    id: 2,
    name: "Javier",
    country: "España",
    rating: 5,
    text: {
      es: "Álvaro es una persona cercana, educada y siempre está pendiente de las personas (...) es alguien que realmente entiende y respeta la cultura andina. Lo recomendamos al 100%. Nos quedamos con ganas de seguir haciendo más actividades con él y seguir conociendo el Perú menos turístico.",
      en: "Álvaro is a warm, polite person who is always attentive to everyone (...) he is someone who truly understands and respects Andean culture. We recommend him 100%. We left wanting to keep doing more activities with him and keep discovering the less touristy side of Peru.",
    },
  },
  {
    id: 3,
    name: "Emilio",
    country: "España",
    rating: 5,
    text: {
      es: "En nuestro viaje a Perú hicimos varias rutas de montaña y fue una experiencia espectacular. No solo por los paisajes, sino por la forma en que Álvaro los vive y los transmite.",
      en: "On our trip to Peru we hiked several mountain routes and it was a spectacular experience. Not only for the landscapes, but for the way Álvaro lives them and shares that feeling with you.",
    },
  },
  {
    id: 4,
    name: "Raquel",
    country: "España",
    rating: 5,
    text: {
      es: "Álvaro conoce la montaña a la perfección, está pendiente en todo momento y sabe crear un ambiente cercano y auténtico. Gracias a él no solo caminamos por lugares increíbles, sino que entendimos mejor la cultura y la vida en los Andes.",
      en: "Álvaro knows the mountains perfectly, he is attentive at all times and knows how to create a warm and authentic atmosphere. Thanks to him we not only walked through incredible places, but we also understood the culture and life in the Andes much better.",
    },
  },
];

export default function Testimonials() {
  const t = useTranslations("home");
  const locale = useLocale() as "es" | "en";
  const trackRef = useRef<HTMLDivElement>(null);

  // Mouse drag state
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const scrollStartLeft = useRef(0);

  const CARD_WIDTH = 420;
  const GAP = 24;
  const STEP = CARD_WIDTH + GAP;

  const scrollBy = (direction: "prev" | "next") => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: direction === "next" ? STEP : -STEP, behavior: "smooth" });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    isDragging.current = true;
    dragStartX.current = e.clientX;
    scrollStartLeft.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = "grabbing";
    trackRef.current.style.userSelect = "none";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const dx = e.clientX - dragStartX.current;
    trackRef.current.scrollLeft = scrollStartLeft.current - dx;
  };

  const stopDrag = () => {
    if (!trackRef.current) return;
    isDragging.current = false;
    trackRef.current.style.cursor = "grab";
    trackRef.current.style.userSelect = "";
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/machu-picchu-2.jpg')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary/85" />

      <div className="relative z-10">
        {/* Section header */}
        <div className="container-custom text-center mb-16">
          <h2 className="section-title">{t("testimonialsTitle")}</h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scrollBy("prev")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/60 hover:text-accent transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scrollBy("next")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/60 hover:text-accent transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Scrollable track */}
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab px-16 py-2"
            style={{ scrollSnapType: "x mandatory" }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-[420px] flex-shrink-0 bg-support/50 border border-white/10 shadow-md shadow-black/20 rounded-xl p-8 flex flex-col"
                style={{ scrollSnapAlign: "start" }}
              >
                {/* Name + Quote */}
                <div className="flex items-start justify-between mb-2">
                  <p className="font-display text-xl font-semibold text-white">{testimonial.name}</p>
                  <Quote className="w-8 h-8 text-accent/20 flex-shrink-0" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-[#d1d5db] text-base font-normal leading-[1.7] flex-1">
                  &ldquo;{testimonial.text[locale]}&rdquo;
                </p>

                {/* Country — always at the bottom */}
                <div className="border-t border-white/10 pt-4 mt-4">
                  <p className="text-sm text-[#9ca3af]">{testimonial.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
