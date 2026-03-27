"use client";

import { useRef, useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Star, Quote } from "lucide-react";

const PAGE_SIZE = 1;

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
      en: "Me and my friend had an absolutely amazing chance to do a trail with Alvaro and his team during 4 days….i am not exaggerating if saying that it had changed my life and my perception of \"exploring the world\" in general. We were in absolute wild, but in absolute safety thanks to this experienced and professional guide. We got to know about culture, we got to spend time one on one with nature. It was just spectacular.",
    },
  },
  {
    id: 6,
    name: "Monserratt Guajardo",
    country: "Estados Unidos",
    rating: 5,
    text: {
      es: "He contratado a Alvaro en cuatro viajes distintos para explorar el Valle Sagrado en diferentes niveles de caminata y no puedo recomendarlo lo suficiente! Como mujer que viaja sola y siendo principiante, puedo garantizar que él entiende perfectamente el terreno y se adaptará a tus necesidades, intereses y nivel. Tiene una conexión tan hermosa con la geografía y las comunidades que hace que cada viaje se sienta verdaderamente auténtico y especial. Él diseña rutas inolvidables tanto para caminatas de nivel principiante como avanzado, proporciona snacks, carpas/equipo de campamento y deliciosas comidas preparadas por gente local. ¡El mejor guía de los Andes!",
      en: "I've hired Alvaro on four separate trips to explore the Sacred Valley at various hike levels and I can't recommend him enough! As a female solo traveler and beginner, I can guarantee he understands the terrain and will cater to your needs, interest and level. He has such a beautiful connection with the geography and the communities making every trip feel truly authentic and special. He builds unforgettable routes for beginner or advanced hikes, provides snacks, tents/camping gear and delicious meals prepared by locals. The best guide in the Andes!",
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

  const [visibleCount, setVisibleCount] = useState(2);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [needsTruncation, setNeedsTruncation] = useState<Record<number, boolean>>({});

  const sentinelRef = useRef<HTMLDivElement>(null);
  const visibleCountRef = useRef(visibleCount);
  visibleCountRef.current = visibleCount;
  const wrapperRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const visible = testimonials.slice(0, visibleCount);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setNeedsTruncation((prev) => {
        const result = { ...prev };
        visible.forEach((item) => {
          if (item.id in result) return;
          const el = wrapperRefs.current[item.id];
          if (el) result[item.id] = el.scrollHeight > el.offsetHeight + 2;
        });
        return result;
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleCount]);

  // Infinite scroll — keep loading while sentinel stays in view
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    let timeoutId: ReturnType<typeof setTimeout>;

    const tryLoadMore = () => {
      if (visibleCountRef.current >= testimonials.length) return;
      const rect = sentinel.getBoundingClientRect();
      if (rect.top < window.innerHeight + 300) {
        setVisibleCount((c) => Math.min(c + PAGE_SIZE, testimonials.length));
        timeoutId = setTimeout(tryLoadMore, 300);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) tryLoadMore();
      },
      { rootMargin: "300px" }
    );

    observer.observe(sentinel);
    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);


  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/machu-picchu-2.jpg')" }}
      />
      <div className="absolute inset-0 bg-primary/85" />

      <div className="relative z-10">
        <div className="container-custom text-center mb-16">
          <h2 className="section-title">{t("testimonialsTitle")}</h2>
        </div>

        <div className="container-custom">
          <div className="flex flex-wrap items-start gap-6">
            {visible.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full sm:w-[calc(50%-12px)] min-h-[340px] bg-support/50 border border-white/10 shadow-md shadow-black/20 rounded-xl px-8 py-6 flex flex-col animate-card-in"
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
                  <div className="flex-1">
                    <div
                      ref={(el) => { wrapperRefs.current[testimonial.id] = el; }}
                      className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
                      style={{ maxHeight: expanded[testimonial.id] ? "40rem" : "9.6rem" }}
                    >
                      <p className="text-[#d1d5db] text-base font-normal leading-[1.6] italic">
                        &ldquo;{testimonial.text[locale]}&rdquo;
                      </p>
                    </div>
                    {needsTruncation[testimonial.id] && (
                      <button
                        onClick={() => setExpanded((prev) => ({ ...prev, [testimonial.id]: !prev[testimonial.id] }))}
                        className="mt-2 text-xs text-accent/70 hover:text-accent transition-colors"
                      >
                        {expanded[testimonial.id] ? t("showLess") : t("showMore")}
                      </button>
                    )}
                  </div>

                  {/* Country */}
                  <div className="border-t border-white/10 pt-3 mt-3">
                    <p className="text-sm text-[#9ca3af]">{testimonial.country}</p>
                  </div>
                </div>
            ))}
          </div>

          {/* Sentinel for IntersectionObserver */}
          <div ref={sentinelRef} className="h-1" />
        </div>
      </div>
    </section>
  );
}