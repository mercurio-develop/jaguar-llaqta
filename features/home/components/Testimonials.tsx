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
    id: 5,
    name: "Nika Lozovska",
    country: "Ucrania",
    rating: 5,
    text: {
      es: "Mi amigo y yo tuvimos la increíble oportunidad de hacer una ruta con Álvaro y su equipo durante 4 días... no exagero al decir que cambió mi vida y mi percepción de 'explorar el mundo' en general. Estuvimos en plena naturaleza salvaje, pero con total seguridad gracias a este guía experimentado y profesional. Conocimos la cultura y pasamos tiempo a solas con la naturaleza. Fue simplemente espectacular.",
      en: "Me and my friend had an absolutely amazing chance to do a trail with Alvaro and his team during 4 days….i am not exaggerating if saying that it had changed my life and my perception of “exploring the world” in general. We were in absolute wild, but in absolute safety thanks to this experienced and professional guide. We got to know about culture, we got to spend time one on one with nature. It was just spectacular.",
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

  const scrollBy = (direction: "prev" | "next") => {
    if (!trackRef.current) return;
    const firstCard = trackRef.current.firstElementChild as HTMLElement;
    if (!firstCard) return;
    
    const cardWidth = firstCard.offsetWidth;
    const gap = 24; // gap-6
    const step = cardWidth + gap;
    
    trackRef.current.scrollBy({ left: direction === "next" ? step : -step, behavior: "smooth" });
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

        {/* Carousel Container */}
        <div className="container-custom relative">
          {/* Navigation Arrows - Adjusted position to be outside on large screens if possible, or inside */}
          <button
            onClick={() => scrollBy("prev")}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 text-white/60 hover:text-accent transition-colors hidden md:block"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={() => scrollBy("next")}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 text-white/60 hover:text-accent transition-colors hidden md:block"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Scrollable track */}
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab py-4"
            style={{ scrollSnapType: "x mandatory" }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 bg-support/50 border border-white/10 shadow-md shadow-black/20 rounded-xl px-8 py-6 flex flex-col"
                style={{ scrollSnapAlign: "start" }}
              >
                {/* Name + Quote */}
                <div className="flex items-start justify-between mb-1">
                  <p className="font-display text-xl font-semibold text-white">{testimonial.name}</p>
                  <Quote className="w-8 h-8 text-accent/20 flex-shrink-0" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-[#d1d5db] text-base font-normal leading-[1.6] flex-1 italic">
                  &ldquo;{testimonial.text[locale]}&rdquo;
                </p>

                {/* Country — always at the bottom */}
                <div className="border-t border-white/10 pt-3 mt-3">
                  <p className="text-sm text-[#9ca3af]">{testimonial.country}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Arrows */}
          <div className="flex justify-center gap-8 mt-8 md:hidden">
            <button
              onClick={() => scrollBy("prev")}
              className="text-white/60 hover:text-accent transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={() => scrollBy("next")}
              className="text-white/60 hover:text-accent transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
