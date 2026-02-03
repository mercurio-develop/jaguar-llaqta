import { ActivityCategory } from "./navigation";

export interface DayItinerary {
  day: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  highlights?: string[];
  meals?: string;
  accommodation?: string;
}

export interface GalleryItem {
  id: number;
  type: "image" | "video";
  title: string;
  url?: string;
}

export interface Package {
  id: string;
  category: ActivityCategory;
  type: "privado" | "grupal" | "personalizado";
  name: string;
  nameEn: string;
  tagline: string;
  taglineEn: string;
  duration: string;
  difficulty?: string;
  maxPeople?: string;
  elevation?: string;
  bestSeason?: string;
  price: number;
  description: string;
  descriptionEn: string;
  highlights: string[];
  highlightsEn: string[];
  includes: string[];
  includesEn: string[];
  notIncludes: string[];
  notIncludesEn: string[];
  requirements: string[];
  requirementsEn: string[];
  itinerary: DayItinerary[];
  gallery: GalleryItem[];
}

export const packages: Package[] = [
  // CUERPO - Salkantay Trek
  {
    id: "salkantay",
    category: "cuerpo",
    type: "grupal",
    name: "Salkantay Trek",
    nameEn: "Salkantay Trek",
    tagline: "La ruta alternativa más espectacular hacia Machu Picchu",
    taglineEn: "The most spectacular alternative route to Machu Picchu",
    duration: "5 días / 4 noches",
    difficulty: "Moderada - Alta",
    elevation: "4,630m máx.",
    bestSeason: "Abril - Octubre",
    price: 450,
    description: "Atraviesa paisajes extraordinarios desde glaciares hasta selva nublada en esta épica travesía hacia Machu Picchu. El trek de Salkantay te lleva por el corazón de los Andes, pasando por el imponente nevado Salkantay (6,271m) y la cristalina Laguna Humantay.",
    descriptionEn: "Cross extraordinary landscapes from glaciers to cloud forest on this epic journey to Machu Picchu. The Salkantay trek takes you through the heart of the Andes, passing the imposing Salkantay snow peak (6,271m) and the crystal-clear Humantay Lagoon.",
    highlights: ["Nevado Salkantay", "Laguna Humantay", "Machu Picchu", "Selva nublada", "Comunidades locales"],
    highlightsEn: ["Salkantay Mountain", "Humantay Lake", "Machu Picchu", "Cloud forest", "Local communities"],
    includes: [
      "Guía profesional bilingüe",
      "Transporte ida y vuelta desde Cusco",
      "4 noches de alojamiento (lodges y camping)",
      "Todas las comidas durante el trek",
      "Entrada a Machu Picchu",
      "Tren de regreso a Cusco",
      "Equipo de camping",
      "Botiquín de primeros auxilios",
      "Oxígeno de emergencia"
    ],
    includesEn: [
      "Professional bilingual guide",
      "Round-trip transport from Cusco",
      "4 nights accommodation (lodges and camping)",
      "All meals during the trek",
      "Machu Picchu entrance",
      "Return train to Cusco",
      "Camping equipment",
      "First aid kit",
      "Emergency oxygen"
    ],
    notIncludes: [
      "Vuelos internacionales",
      "Seguro de viaje",
      "Propinas",
      "Bebidas alcohólicas",
      "Snacks adicionales"
    ],
    notIncludesEn: [
      "International flights",
      "Travel insurance",
      "Tips",
      "Alcoholic beverages",
      "Additional snacks"
    ],
    requirements: [
      "Condición física moderada-buena",
      "Aclimatación previa en Cusco (mínimo 2 días)",
      "Botas de trekking",
      "Ropa de abrigo para temperaturas bajo cero",
      "Mochila de día (20-30L)",
      "Protector solar y gorro",
      "Botella de agua reutilizable"
    ],
    requirementsEn: [
      "Moderate-good physical condition",
      "Prior acclimatization in Cusco (minimum 2 days)",
      "Trekking boots",
      "Warm clothing for sub-zero temperatures",
      "Day backpack (20-30L)",
      "Sunscreen and hat",
      "Reusable water bottle"
    ],
    itinerary: [
      {
        day: 1,
        title: "Cusco - Soraypampa - Laguna Humantay",
        titleEn: "Cusco - Soraypampa - Humantay Lagoon",
        description: "Salida temprana de Cusco (4:00 AM). Viaje en bus hasta Mollepata para desayuno. Continuamos hasta Soraypampa (3,900m) donde iniciamos la caminata hacia la impresionante Laguna Humantay (4,200m). Tiempo para fotos y conexión con este lugar sagrado. Regreso al campamento para cena y noche en lodge.",
        descriptionEn: "Early departure from Cusco (4:00 AM). Bus ride to Mollepata for breakfast. We continue to Soraypampa (3,900m) where we start hiking to the stunning Humantay Lagoon (4,200m). Time for photos and connection with this sacred place. Return to camp for dinner and night in lodge.",
        highlights: ["Laguna Humantay", "Vistas del Salkantay"],
        meals: "Desayuno, Almuerzo, Cena",
        accommodation: "Lodge en Soraypampa"
      },
      {
        day: 2,
        title: "Soraypampa - Paso Salkantay - Chaullay",
        titleEn: "Soraypampa - Salkantay Pass - Chaullay",
        description: "El día más desafiante y espectacular. Ascenso temprano hacia el paso Salkantay (4,630m), el punto más alto del trek. Vistas impresionantes del nevado Salkantay. Descenso gradual hacia la selva nublada hasta Chaullay (2,900m). Cambio dramático de paisaje.",
        descriptionEn: "The most challenging and spectacular day. Early ascent to Salkantay Pass (4,630m), the highest point of the trek. Stunning views of Salkantay mountain. Gradual descent to the cloud forest until Chaullay (2,900m). Dramatic landscape change.",
        highlights: ["Paso Salkantay 4,630m", "Nevado Salkantay", "Cambio de ecosistemas"],
        meals: "Desayuno, Almuerzo, Cena",
        accommodation: "Camping en Chaullay"
      },
      {
        day: 3,
        title: "Chaullay - Santa Teresa",
        titleEn: "Chaullay - Santa Teresa",
        description: "Caminata relajada por la selva nublada. Observación de orquídeas, colibríes y plantaciones de café. Llegada a Santa Teresa donde disfrutamos de las aguas termales de Cocalmayo. Noche en hostal.",
        descriptionEn: "Relaxed hike through the cloud forest. Observation of orchids, hummingbirds and coffee plantations. Arrival at Santa Teresa where we enjoy Cocalmayo hot springs. Night in hostel.",
        highlights: ["Selva nublada", "Aguas termales", "Plantaciones de café"],
        meals: "Desayuno, Almuerzo, Cena",
        accommodation: "Hostal en Santa Teresa"
      },
      {
        day: 4,
        title: "Santa Teresa - Aguas Calientes",
        titleEn: "Santa Teresa - Aguas Calientes",
        description: "Caminata final por las vías del tren hacia Aguas Calientes. Tarde libre para explorar el pueblo. Briefing sobre la visita a Machu Picchu del día siguiente. Cena de celebración.",
        descriptionEn: "Final hike along the train tracks to Aguas Calientes. Free afternoon to explore the town. Briefing about the next day's Machu Picchu visit. Celebration dinner.",
        highlights: ["Río Urubamba", "Aguas Calientes"],
        meals: "Desayuno, Almuerzo, Cena",
        accommodation: "Hostal en Aguas Calientes"
      },
      {
        day: 5,
        title: "Machu Picchu - Cusco",
        titleEn: "Machu Picchu - Cusco",
        description: "Subida temprana a Machu Picchu para ver el amanecer. Tour guiado de 2 horas por la ciudadela. Tiempo libre para explorar. Opción de subir Huayna Picchu (costo adicional). Descenso a Aguas Calientes para almuerzo. Tren de regreso a Cusco.",
        descriptionEn: "Early ascent to Machu Picchu to see the sunrise. 2-hour guided tour of the citadel. Free time to explore. Option to climb Huayna Picchu (additional cost). Descent to Aguas Calientes for lunch. Return train to Cusco.",
        highlights: ["Machu Picchu", "Amanecer", "Tour guiado"],
        meals: "Desayuno, Almuerzo",
        accommodation: "Fin del tour"
      }
    ],
    gallery: [
      { id: 1, type: "image", title: "Laguna Humantay al amanecer" },
      { id: 2, type: "image", title: "Nevado Salkantay" },
      { id: 3, type: "image", title: "Paso Salkantay" },
      { id: 4, type: "image", title: "Selva nublada" },
      { id: 5, type: "video", title: "Resumen del trek" },
      { id: 6, type: "image", title: "Machu Picchu" },
      { id: 7, type: "image", title: "Grupo en la cumbre" },
      { id: 8, type: "image", title: "Campamento" }
    ]
  },

  // CUERPO - Ausangate
  {
    id: "ausangate",
    category: "cuerpo",
    type: "grupal",
    name: "Ausangate y Montaña de Colores",
    nameEn: "Ausangate and Rainbow Mountain",
    tagline: "Trek circular alrededor del Apu más sagrado del Cusco",
    taglineEn: "Circular trek around Cusco's most sacred Apu",
    duration: "4 días / 3 noches",
    difficulty: "Moderada",
    elevation: "5,200m máx.",
    bestSeason: "Abril - Noviembre",
    price: 380,
    description: "Rodea el majestuoso Ausangate, uno de los Apus más venerados de los Andes. Este trek te lleva por lagunas de colores imposibles, glaciares milenarios y la famosa Montaña de Siete Colores (Vinicunca).",
    descriptionEn: "Circle the majestic Ausangate, one of the most revered Apus of the Andes. This trek takes you through impossibly colored lagoons, ancient glaciers and the famous Rainbow Mountain (Vinicunca).",
    highlights: ["Montaña de Colores", "Lagunas glaciares", "Comunidades alpaqueras", "Aguas termales"],
    highlightsEn: ["Rainbow Mountain", "Glacial lagoons", "Alpaca communities", "Hot springs"],
    includes: ["Guía bilingüe", "Transporte", "Equipo de camping", "Alimentación completa", "Entradas"],
    includesEn: ["Bilingual guide", "Transport", "Camping equipment", "Full meals", "Entrance fees"],
    notIncludes: ["Seguro de viaje", "Propinas", "Bebidas extra"],
    notIncludesEn: ["Travel insurance", "Tips", "Extra drinks"],
    requirements: ["Buena condición física", "Aclimatación previa", "Ropa térmica"],
    requirementsEn: ["Good physical condition", "Prior acclimatization", "Thermal clothing"],
    itinerary: [
      { day: 1, title: "Cusco - Upis", titleEn: "Cusco - Upis", description: "Viaje a Tinki e inicio del trek hacia Upis.", descriptionEn: "Travel to Tinki and start trek to Upis.", meals: "A, C", accommodation: "Camping" },
      { day: 2, title: "Upis - Montaña de Colores - Anantapata", titleEn: "Upis - Rainbow Mountain - Anantapata", description: "Visita a Vinicunca y caminata hacia Anantapata.", descriptionEn: "Visit Vinicunca and hike to Anantapata.", meals: "D, A, C", accommodation: "Camping" },
      { day: 3, title: "Anantapata - Pacchanta", titleEn: "Anantapata - Pacchanta", description: "Trek por lagunas glaciares hasta aguas termales.", descriptionEn: "Trek through glacial lagoons to hot springs.", meals: "D, A, C", accommodation: "Camping" },
      { day: 4, title: "Pacchanta - Cusco", titleEn: "Pacchanta - Cusco", description: "Baño en aguas termales y regreso a Cusco.", descriptionEn: "Hot springs bath and return to Cusco.", meals: "D, A", accommodation: "Fin" }
    ],
    gallery: [
      { id: 1, type: "image", title: "Montaña de Colores" },
      { id: 2, type: "image", title: "Laguna glaciar" },
      { id: 3, type: "image", title: "Ausangate" },
      { id: 4, type: "image", title: "Alpacas" }
    ]
  },

  // MENTE - Textiles
  {
    id: "textiles",
    category: "mente",
    type: "grupal",
    name: "Taller de Textiles en Chinchero",
    nameEn: "Textile Workshop in Chinchero",
    tagline: "Aprende el arte milenario del tejido andino",
    taglineEn: "Learn the ancient art of Andean weaving",
    duration: "Medio día (5 horas)",
    price: 75,
    description: "Sumérgete en el mundo de los textiles andinos con las maestras tejedoras de Chinchero. Aprenderás el proceso completo: desde el esquilado de alpacas hasta el tejido en telar, pasando por el teñido natural con plantas locales.",
    descriptionEn: "Immerse yourself in the world of Andean textiles with master weavers from Chinchero. You'll learn the complete process: from alpaca shearing to loom weaving, including natural dyeing with local plants.",
    highlights: ["Teñido natural", "Tejido en telar", "Almuerzo típico", "Mercado local"],
    highlightsEn: ["Natural dyeing", "Loom weaving", "Typical lunch", "Local market"],
    includes: ["Transporte desde Cusco", "Guía", "Materiales", "Almuerzo tradicional", "Visita al mercado"],
    includesEn: ["Transport from Cusco", "Guide", "Materials", "Traditional lunch", "Market visit"],
    notIncludes: ["Compras personales", "Propinas"],
    notIncludesEn: ["Personal shopping", "Tips"],
    requirements: ["Ningún requisito físico especial", "Interés en artesanía"],
    requirementsEn: ["No special physical requirements", "Interest in crafts"],
    itinerary: [
      { day: 1, title: "Experiencia completa de textiles", titleEn: "Complete textile experience", description: "8:00 AM recojo del hotel. Viaje a Chinchero. Demostración de teñido natural. Práctica en telar. Almuerzo con la comunidad. Visita al mercado. Regreso a Cusco 1:00 PM.", descriptionEn: "8:00 AM hotel pickup. Travel to Chinchero. Natural dyeing demonstration. Loom practice. Lunch with community. Market visit. Return to Cusco 1:00 PM.", meals: "Almuerzo", accommodation: "N/A" }
    ],
    gallery: [
      { id: 1, type: "image", title: "Tejedoras de Chinchero" },
      { id: 2, type: "image", title: "Teñido natural" },
      { id: 3, type: "image", title: "Tejido en telar" },
      { id: 4, type: "video", title: "Proceso de tejido" }
    ]
  },

  // MENTE - Gastronomía
  {
    id: "gastronomia",
    category: "mente",
    type: "grupal",
    name: "Experiencia Gastronómica Andina",
    nameEn: "Andean Gastronomic Experience",
    tagline: "Cocina, sabores y tradición de los Andes",
    taglineEn: "Cooking, flavors and Andean tradition",
    duration: "Día completo (8 horas)",
    price: 95,
    description: "Una inmersión total en la gastronomía andina. Visita al mercado de San Pedro, cosecha de ingredientes en una chacra familiar, y preparación de platos tradicionales como pachamanca y chicha de jora.",
    descriptionEn: "A total immersion in Andean gastronomy. Visit San Pedro market, harvest ingredients at a family farm, and prepare traditional dishes like pachamanca and chicha de jora.",
    highlights: ["Mercado San Pedro", "Cocina con leña", "Pachamanca", "Chicha de jora"],
    highlightsEn: ["San Pedro Market", "Wood fire cooking", "Pachamanca", "Chicha de jora"],
    includes: ["Transporte", "Guía culinario", "Todos los ingredientes", "Almuerzo preparado", "Recetario"],
    includesEn: ["Transport", "Culinary guide", "All ingredients", "Prepared lunch", "Recipe book"],
    notIncludes: ["Bebidas alcohólicas extra", "Propinas"],
    notIncludesEn: ["Extra alcoholic drinks", "Tips"],
    requirements: ["Ninguno", "Informar alergias alimentarias"],
    requirementsEn: ["None", "Inform food allergies"],
    itinerary: [
      { day: 1, title: "Del mercado a la mesa", titleEn: "From market to table", description: "7:30 AM Mercado San Pedro. 9:30 AM viaje a comunidad. 10:30 AM cosecha. 12:00 PM preparación pachamanca. 2:00 PM almuerzo. 4:00 PM regreso.", descriptionEn: "7:30 AM San Pedro Market. 9:30 AM travel to community. 10:30 AM harvest. 12:00 PM pachamanca preparation. 2:00 PM lunch. 4:00 PM return.", meals: "Almuerzo completo", accommodation: "N/A" }
    ],
    gallery: [
      { id: 1, type: "image", title: "Mercado San Pedro" },
      { id: 2, type: "image", title: "Pachamanca" },
      { id: 3, type: "image", title: "Ingredientes andinos" },
      { id: 4, type: "image", title: "Chicha de jora" }
    ]
  },

  // ESPÍRITU - Pachamama
  {
    id: "pachamama",
    category: "espiritu",
    type: "grupal",
    name: "Ceremonia a la Pachamama",
    nameEn: "Pachamama Ceremony",
    tagline: "Ofrenda sagrada a la Madre Tierra",
    taglineEn: "Sacred offering to Mother Earth",
    duration: "Medio día (4 horas)",
    price: 80,
    description: "Participa en una ceremonia de ofrenda (despacho) a la Pachamama guiada por un pampamesayoq, heredero de la tradición espiritual andina. Aprende sobre la cosmovisión andina y conecta con la energía de la Madre Tierra.",
    descriptionEn: "Participate in an offering ceremony (despacho) to Pachamama guided by a pampamesayoq, heir to the Andean spiritual tradition. Learn about the Andean worldview and connect with Mother Earth's energy.",
    highlights: ["Despacho andino", "Meditación", "Coca kintu", "Lugar sagrado"],
    highlightsEn: ["Andean despacho", "Meditation", "Coca kintu", "Sacred place"],
    includes: ["Transporte", "Maestro pampamesayoq", "Materiales ceremoniales", "Mate de coca", "Traducción"],
    includesEn: ["Transport", "Pampamesayoq master", "Ceremonial materials", "Coca tea", "Translation"],
    notIncludes: ["Propinas al maestro"],
    notIncludesEn: ["Tips for the master"],
    requirements: ["Mente abierta", "Respeto por las tradiciones", "No consumir alcohol 24h antes"],
    requirementsEn: ["Open mind", "Respect for traditions", "No alcohol 24h before"],
    itinerary: [
      { day: 1, title: "Ceremonia de ofrenda", titleEn: "Offering ceremony", description: "8:00 AM recojo. Viaje a sitio sagrado. Introducción a cosmovisión andina. Preparación del despacho. Ceremonia de ofrenda. Meditación. Regreso 12:00 PM.", descriptionEn: "8:00 AM pickup. Travel to sacred site. Introduction to Andean worldview. Despacho preparation. Offering ceremony. Meditation. Return 12:00 PM.", meals: "Mate de coca", accommodation: "N/A" }
    ],
    gallery: [
      { id: 1, type: "image", title: "Despacho andino" },
      { id: 2, type: "image", title: "Maestro pampamesayoq" },
      { id: 3, type: "image", title: "Coca kintu" },
      { id: 4, type: "image", title: "Lugar sagrado" }
    ]
  },

  // ESPÍRITU - Retiro
  {
    id: "retiro-espiritual",
    category: "espiritu",
    type: "privado",
    name: "Retiro Espiritual Completo",
    nameEn: "Complete Spiritual Retreat",
    tagline: "Inmersión profunda en la espiritualidad andina",
    taglineEn: "Deep immersion in Andean spirituality",
    duration: "3 días / 2 noches",
    price: 450,
    description: "Un retiro transformador que combina múltiples ceremonias, meditación diaria, visitas a lugares sagrados y guía espiritual personalizada. Incluye ceremonia de Pachamama, ritual del amanecer y ceremonia de cierre bajo las estrellas.",
    descriptionEn: "A transformative retreat combining multiple ceremonies, daily meditation, visits to sacred places and personalized spiritual guidance. Includes Pachamama ceremony, sunrise ritual and closing ceremony under the stars.",
    highlights: ["Múltiples ceremonias", "Meditación diaria", "Lugares sagrados", "Guía personal"],
    highlightsEn: ["Multiple ceremonies", "Daily meditation", "Sacred places", "Personal guide"],
    includes: ["Alojamiento en retiro", "Alimentación vegetariana", "Todas las ceremonias", "Transporte", "Guía espiritual personal"],
    includesEn: ["Retreat lodging", "Vegetarian meals", "All ceremonies", "Transport", "Personal spiritual guide"],
    notIncludes: ["Vuelos", "Seguro", "Gastos personales"],
    notIncludesEn: ["Flights", "Insurance", "Personal expenses"],
    requirements: ["Compromiso con el proceso", "Abstinencia de alcohol/drogas 1 semana antes", "Buena salud mental"],
    requirementsEn: ["Commitment to the process", "No alcohol/drugs 1 week before", "Good mental health"],
    itinerary: [
      { day: 1, title: "Llegada y apertura", titleEn: "Arrival and opening", description: "Recepción en el retiro. Ceremonia de bienvenida. Introducción al programa. Meditación guiada. Cena y descanso.", descriptionEn: "Reception at retreat. Welcome ceremony. Program introduction. Guided meditation. Dinner and rest.", meals: "C", accommodation: "Retiro" },
      { day: 2, title: "Día de ceremonias", titleEn: "Ceremony day", description: "4:00 AM Ritual del amanecer en Sacsayhuamán. Desayuno. Ceremonia de Pachamama. Almuerzo consciente. Tarde de meditación y reflexión. Cena.", descriptionEn: "4:00 AM Sunrise ritual at Sacsayhuaman. Breakfast. Pachamama ceremony. Conscious lunch. Afternoon meditation and reflection. Dinner.", meals: "D, A, C", accommodation: "Retiro" },
      { day: 3, title: "Cierre e integración", titleEn: "Closing and integration", description: "Meditación matutina. Desayuno. Ceremonia de cierre y gratitud. Círculo de compartir. Almuerzo de despedida. Regreso a Cusco.", descriptionEn: "Morning meditation. Breakfast. Closing and gratitude ceremony. Sharing circle. Farewell lunch. Return to Cusco.", meals: "D, A", accommodation: "Fin" }
    ],
    gallery: [
      { id: 1, type: "image", title: "Ceremonia de amanecer" },
      { id: 2, type: "image", title: "Meditación grupal" },
      { id: 3, type: "image", title: "Lugar de retiro" },
      { id: 4, type: "video", title: "Experiencia del retiro" },
      { id: 5, type: "image", title: "Ofrenda nocturna" },
      { id: 6, type: "image", title: "Cielo estrellado" }
    ]
  }
];

export const getPackagesByCategory = (category: ActivityCategory) =>
  packages.filter((p) => p.category === category);

export const getPackagesByType = (type: Package["type"]) =>
  packages.filter((p) => p.type === type);

export const getPackageById = (id: string) =>
  packages.find((p) => p.id === id);
