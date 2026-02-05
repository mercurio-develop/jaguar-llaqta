export type ActivityCategory = "rutas" | "comunidad" | "ceremonias";

export interface DayItinerary {
  day: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  highlights?: string[];
  highlightsEn?: string[];
  meals?: string;
  mealsEn?: string;
  accommodation?: string;
  accommodationEn?: string;
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
  name: string;
  nameEn: string;
  tagline: string;
  taglineEn: string;
  duration: string;
  durationEn?: string;
  difficulty?: string;
  difficultyEn?: string;
  maxPeople?: string;
  elevation?: string;
  bestSeason?: string;
  bestSeasonEn?: string;
  price: number;
  description: string;
  descriptionEn: string;
  note?: string;
  noteEn?: string;
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
  // COMUNIDAD - Textiles
  {
    id: "textiles",
    category: "comunidad",
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
      { id: 1, type: "image", title: "Tejedoras de Chinchero", url: "/images/textiles.jpg" },
      { id: 2, type: "image", title: "Textiles tradicionales", url: "/images/textiles-2.jpg" },
      { id: 3, type: "image", title: "Tejido en telar", url: "/images/textiles-3.jpg" },
      { id: 4, type: "image", title: "Colores naturales", url: "/images/chincheros.jpg" }
    ]
  },

  // COMUNIDAD - Gastronomía
  {
    id: "gastronomia",
    category: "comunidad",
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
      { id: 1, type: "image", title: "Cocina rústica", url: "/images/cocina-rustica.jpg" },
      { id: 2, type: "image", title: "Comunidad local", url: "/images/comunidad.jpg" },
      { id: 3, type: "image", title: "Tradiciones andinas", url: "/images/comunidad-1.jpg" },
      { id: 4, type: "image", title: "Paisaje andino", url: "/images/comunidad-2.jpg" }
    ]
  },

  // CEREMONIAS - Pachamama
  {
    id: "pachamama",
    category: "ceremonias",
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
      { id: 1, type: "image", title: "Hoja de coca", url: "/images/coca-leaf.jpg" },
      { id: 2, type: "image", title: "Sacsayhuaman", url: "/images/sacsayhuaman.jpg" },
      { id: 3, type: "image", title: "Ruinas sagradas", url: "/images/ruins.jpg" },
      { id: 4, type: "image", title: "Moray", url: "/images/moray.jpg" }
    ]
  },

  // CEREMONIAS - Retiro
  {
    id: "retiro-espiritual",
    category: "ceremonias",
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
      { id: 1, type: "image", title: "Sacsayhuaman", url: "/images/sacsayhuaman.jpg" },
      { id: 2, type: "image", title: "Inti Punku", url: "/images/inti-punku.jpg" },
      { id: 3, type: "image", title: "Moray", url: "/images/moray.jpg" },
      { id: 4, type: "image", title: "Hoja de coca", url: "/images/coca-leaf.jpg" },
      { id: 5, type: "image", title: "Montañas sagradas", url: "/images/montanias.jpg" },
      { id: 6, type: "image", title: "Ruinas", url: "/images/ruins.jpg" }
    ]
  },

  // RUTAS - Ausangate Trek 3D2N (Seven Lakes)
  {
    id: "ausangate-trek-3d2n",
    category: "rutas",
    name: "Trek Ausangate – Siete Lagunas",
    nameEn: "Ausangate Trek – Seven Lakes",
    tagline: "Descubre el Apu más sagrado y sus lagunas glaciares",
    taglineEn: "Discover the most sacred Apu and its glacial lagoons",
    duration: "3 días / 2 noches",
    durationEn: "3 days / 2 nights",
    difficulty: "Moderada",
    difficultyEn: "Moderate",
    elevation: "4,800m máx.",
    bestSeason: "Abril - Noviembre",
    bestSeasonEn: "April - November",
    price: 450,
    description: "El Ausangate es la montaña más alta de la región Cusco y la quinta más alta del Perú, con una altitud de 6,385 metros sobre el nivel del mar. Se encuentra aproximadamente a 84 kilómetros al sureste de la ciudad del Cusco. Esta montaña sagrada es una de las más importantes dentro de la cosmovisión andina. El Apu Ausangate es considerado el padre de todas las montañas circundantes y un poderoso espíritu protector de la región. La zona también es reconocida por sus tradicionales textiles andinos, un conocimiento ancestral que se mantiene vivo y se transmite de generación en generación.",
    descriptionEn: "Ausangate is the highest mountain in the Cusco region and the fifth highest in Peru, reaching 6,385 meters above sea level. It is located approximately 84 kilometers southeast of Cusco. This sacred mountain is one of the most important in Andean culture. Apu Ausangate is considered the father of all surrounding mountains and a powerful protector spirit of the region. The area is also renowned for its traditional Andean textiles—ancestral knowledge that remains alive and is passed down through local families.",
    note: "APU: Palabra quechua que significa Dios o Espíritu Sagrado de la Montaña.",
    noteEn: "APU: Quechua word meaning God or Sacred Mountain Spirit.",
    highlights: ["Siete Lagunas del Ausangate", "Aguas termales de Pacchanta", "Comunidad local", "Nevado Ausangate"],
    highlightsEn: ["Seven Lakes of Ausangate", "Pacchanta hot springs", "Local community", "Ausangate snow peak"],
    includes: [
      "Transporte privado (ida y vuelta)",
      "Guía profesional",
      "Alimentación completa por 3 días / 2 noches",
      "Una noche de alojamiento en casa de familia local",
      "Boleto de ingreso al Área de Conservación Ausangate",
      "Equipo de montaña para una noche (carpa y bolsa de dormir)"
    ],
    includesEn: [
      "Private transportation (round trip)",
      "Professional guide",
      "All meals for 3 days / 2 nights (lunch, dinner, breakfast, lunch)",
      "One night accommodation with a local family",
      "Entrance ticket to the Ausangate Conservation Area",
      "Mountain equipment for one night (tent and sleeping bag)"
    ],
    notIncludes: [
      "Snacks personales",
      "Equipo personal de montaña"
    ],
    notIncludesEn: [
      "Personal snacks",
      "Personal mountain equipment"
    ],
    requirements: [
      "Sombrero para el sol",
      "Bloqueador solar",
      "Botella de agua",
      "Dinero en efectivo para souvenirs",
      "DNI o Pasaporte",
      "Cámara fotográfica"
    ],
    requirementsEn: [
      "Sun hat",
      "Sunscreen",
      "Water bottle",
      "Cash for souvenirs",
      "ID / Passport",
      "Camera"
    ],
    itinerary: [
      {
        day: 1,
        title: "Valle Sagrado – Pacchanta",
        titleEn: "Sacred Valley – Pacchanta",
        description: "12:00 PM – Recojo desde el Valle Sagrado y traslado al pueblo de Pacchanta (4,200 m s. n. m.). Tiempo aproximado de viaje: 4 horas en vehículo privado. 4:00 PM – Llegada a Pacchanta. Alojamiento en casa de una familia local, con alimentación incluida. La tarde está dedicada a la aclimatación, con una caminata suave por la zona y tiempo para relajarse en las aguas termales naturales. Cena y pernocte.",
        descriptionEn: "12:00 PM – Pick-up from the Sacred Valley and transfer to the village of Pacchanta (4,200 m a.s.l.). Approximate travel time: 4 hours by private vehicle. 4:00 PM – Arrival in Pacchanta. Overnight stay with a local family, including meals and basic accommodation. The afternoon is dedicated to acclimatization, including a gentle walk and time to relax in the natural hot springs. Dinner and overnight stay.",
        highlights: ["Pacchanta", "Aguas termales naturales"],
        highlightsEn: ["Pacchanta", "Natural hot springs"],
        meals: "Almuerzo, Cena",
        mealsEn: "Lunch, Dinner",
        accommodation: "Casa de familia local",
        accommodationEn: "Local family home"
      },
      {
        day: 2,
        title: "Siete Lagunas del Ausangate",
        titleEn: "Seven Lakes of Ausangate",
        description: "7:00 AM – Caminata de día completo para visitar las Siete Lagunas del Ausangate (ida y vuelta: 4 a 6 horas). Altitud máxima: 4,800 m s. n. m. Si las condiciones climáticas son favorables, existe la posibilidad de pasar la noche en la montaña en campamento. Si el clima no es favorable, retorno a Pacchanta para el almuerzo y tiempo adicional en las aguas termales. Cena y última noche en Pacchanta.",
        descriptionEn: "7:00 AM – Full-day hike to visit the Seven Lakes of Ausangate (round trip: 4–6 hours). Highest altitude: 4,800 m a.s.l. If weather conditions are favorable, there is the possibility of camping overnight in the mountains. If weather conditions are unfavorable, return to Pacchanta for lunch and additional time at the hot springs. Dinner and overnight stay in Pacchanta.",
        highlights: ["Siete Lagunas", "4,800 m s.n.m.", "Vistas del Ausangate"],
        highlightsEn: ["Seven Lakes", "4,800 m a.s.l.", "Ausangate views"],
        meals: "Desayuno, Almuerzo, Cena",
        mealsEn: "Breakfast, Lunch, Dinner",
        accommodation: "Casa de familia local o Campamento",
        accommodationEn: "Local family home or Camping"
      },
      {
        day: 3,
        title: "Pacchanta – Valle Sagrado",
        titleEn: "Pacchanta – Sacred Valley",
        description: "7:00 AM – Retorno en vehículo privado al Valle Sagrado de los Incas. Tiempo aproximado de viaje: 4 horas.",
        descriptionEn: "7:00 AM – Departure by private vehicle back to the Sacred Valley of the Incas. Approximate travel time: 4 hours.",
        highlights: ["Paisajes andinos"],
        highlightsEn: ["Andean landscapes"],
        meals: "Desayuno, Almuerzo",
        mealsEn: "Breakfast, Lunch",
        accommodation: "Fin del tour",
        accommodationEn: "End of tour"
      }
    ],
    gallery: [
      { id: 1, type: "image", title: "Lagunas del Ausangate", url: "/images/ausangate-1.jpg" },
      { id: 2, type: "image", title: "Nevado Ausangate", url: "/images/ausangate-2.jpg" },
      { id: 3, type: "image", title: "Comunidad local", url: "/images/comunidad-1.jpg" },
      { id: 4, type: "image", title: "Textiles andinos", url: "/images/textiles.jpg" },
      { id: 5, type: "image", title: "Paisaje de alta montaña", url: "/images/montanias.jpg" },
      { id: 6, type: "image", title: "Laguna glaciar", url: "/images/laguna.jpg" }
    ]
  },

  // RUTAS - Lares Trek 3D2N
  {
    id: "lares-trek-3d2n",
    category: "rutas",
    name: "Lares Trek",
    nameEn: "Lares Trek",
    tagline: "Travesía por la cordillera del Urubamba con comunidades tradicionales",
    taglineEn: "Journey through the Urubamba range with traditional communities",
    duration: "3 días / 2 noches",
    durationEn: "3 days / 2 nights",
    difficulty: "Moderada a desafiante",
    difficultyEn: "Moderate to challenging",
    elevation: "4,800m máx.",
    bestSeason: "Abril - Octubre",
    bestSeasonEn: "April - October",
    price: 450,
    description: "El Lares Trek es una de las rutas de montaña más atractivas de la región Cusco. Atraviesa la cordillera del Urubamba, considerada tropical por su cercanía a la selva amazónica. Durante la caminata se recorren diversos ecosistemas andinos como ríos, bosques altoandinos, lagunas, cascadas y montañas nevadas, además de visitar comunidades tradicionales donde se mantienen vivas prácticas ancestrales. El recorrido finaliza en el pueblo de Lares, conocido por sus aguas termales y medicinales.",
    descriptionEn: "The Lares Trek is one of the most scenic mountain routes in the Cusco region. It crosses the Urubamba mountain range, a tropical range in the Peruvian Andes due to its proximity to the rainforest. Along the trek, travelers experience diverse Andean ecosystems including rivers, high-Andean forests, lagoons, waterfalls, snow-capped peaks, and traditional communities. The route also offers opportunities to observe local wildlife such as condors, deer, eagles, viscachas, and hummingbirds. The journey concludes in the town of Lares, famous for its thermal and medicinal hot springs.",
    highlights: ["Laguna Yanaqocha", "Comunidades tradicionales", "Bosques altoandinos", "Aguas termales de Lares", "Paso de montaña 4,800m"],
    highlightsEn: ["Yanaqocha Lagoon", "Traditional communities", "High-Andean forests", "Lares hot springs", "Mountain pass 4,800m"],
    includes: [
      "Transporte ida y vuelta",
      "Alimentación completa (3 días / 2 noches)",
      "Alojamiento y campamento",
      "Equipo de montaña (carpas, colchonetas y bolsas de dormir)",
      "Guiado y acompañamiento profesional",
      "Ingreso a las aguas termales de Lares"
    ],
    includesEn: [
      "Round-trip transportation",
      "Full board (3 days / 2 nights)",
      "Camping and lodging",
      "Mountaineering equipment (tents, sleeping mats, sleeping bags)",
      "Professional guiding and support",
      "Entrance to the Lares hot springs"
    ],
    notIncludes: [
      "Equipo personal de montaña",
      "Snacks personales"
    ],
    notIncludesEn: [
      "Personal mountaineering equipment",
      "Personal snacks"
    ],
    requirements: [
      "Ropa abrigadora e impermeable",
      "Botella personal de agua",
      "Documentos personales",
      "Dinero en efectivo",
      "Artículos de aseo",
      "Ropa de baño y toalla",
      "Sombrero o gorra",
      "Bloqueador solar"
    ],
    requirementsEn: [
      "Warm and rain clothing",
      "Personal water bottle",
      "Personal documents",
      "Cash for souvenirs",
      "Toiletries kit",
      "Swimsuit and towel",
      "Sun hat or cap",
      "Sunscreen"
    ],
    itinerary: [
      {
        day: 1,
        title: "Huaran – Cancha Cancha – Laguna Yanaqocha",
        titleEn: "Huaran – Cancha Cancha – Yanaqocha Lagoon",
        description: "07:30 AM – Recojo en transporte privado hacia Huaran y luego a Saywapata (3,200 m s. n. m.). 08:30 AM – Inicio de la caminata. Ascenso de aproximadamente 3 horas por quebradas, ríos y bosques altoandinos. 11:30 AM – Llegada a la comunidad de Cancha Cancha. Descanso, mate de coca y snacks locales con una familia anfitriona. 12:30 PM – Continuación del ascenso hacia zonas más altas y armado de campamento cerca de la laguna Yanaqocha. 06:00 PM – Cena y pernocte en campamento.",
        descriptionEn: "07:30 AM – Pick-up by private transport to Huaran, continuing to Saywapata (3,200 m a.s.l.). 08:30 AM – Start of the hike. Approx. 3-hour ascent through ravines, rivers, and high-Andean forests. 11:30 AM – Arrival at the community of Cancha Cancha. Rest, coca tea, and local snacks with a host family. 12:30 PM – Continued ascent to higher elevations and camp setup near Yanaqocha Lagoon. 06:00 PM – Dinner and overnight camping.",
        highlights: ["Cancha Cancha", "Laguna Yanaqocha", "Bosques altoandinos"],
        highlightsEn: ["Cancha Cancha", "Yanaqocha Lagoon", "High-Andean forests"],
        meals: "Almuerzo, Cena",
        mealsEn: "Lunch, Dinner",
        accommodation: "Campamento cerca de Laguna Yanaqocha",
        accommodationEn: "Camping near Yanaqocha Lagoon"
      },
      {
        day: 2,
        title: "Paso de montaña – Quishuarani",
        titleEn: "Mountain Pass – Quishuarani",
        description: "07:00 AM – Desayuno y desmontaje del campamento. 08:00 AM – Caminata hacia el paso de montaña (4,800 m s. n. m.), disfrutando de vistas panorámicas espectaculares. Duración aproximada: 4 a 5 horas. 01:00 PM – Llegada a la comunidad de Quishuarani. 02:30 PM – Almuerzo en casa local y armado de campamento. 04:00 PM – Caminata opcional por la comunidad para conocer sus tradiciones. 07:00 PM – Cena.",
        descriptionEn: "07:00 AM – Breakfast and camp packing. 08:00 AM – Trek to the mountain pass (4,800 m a.s.l.), enjoying panoramic views. Approx. 4–5 hours of hiking. 01:00 PM – Arrival at the community of Quishuarani. 02:30 PM – Lunch with a local family and camp setup. 04:00 PM – Optional community walk. 07:00 PM – Dinner.",
        highlights: ["Paso 4,800m", "Vistas panorámicas", "Comunidad Quishuarani"],
        highlightsEn: ["Pass 4,800m", "Panoramic views", "Quishuarani community"],
        meals: "Desayuno, Almuerzo, Cena",
        mealsEn: "Breakfast, Lunch, Dinner",
        accommodation: "Campamento en Quishuarani",
        accommodationEn: "Camping in Quishuarani"
      },
      {
        day: 3,
        title: "Cuncani – Aguas termales de Lares – Valle Sagrado",
        titleEn: "Cuncani – Lares Hot Springs – Sacred Valley",
        description: "06:00 AM – Desayuno. 07:30 AM – Caminata de 4 horas hacia la comunidad de Cuncani. 11:00 AM – Parada para almuerzo ligero. 12:00 PM – Traslado a las aguas termales de Lares (45 minutos). Tiempo libre para relajarse en las aguas termales medicinales (2–3 horas). 03:00 PM – Transporte hacia el Valle Sagrado (aprox. 2.5 horas). 05:30 PM – Llegada.",
        descriptionEn: "06:00 AM – Breakfast. 07:30 AM – 4-hour hike to the community of Cuncani. 11:00 AM – Packed lunch stop. 12:00 PM – Transfer to the Lares Hot Springs (45 minutes). Relaxation time: 2–3 hours. 03:00 PM – Transport to the Sacred Valley (approx. 2.5 hours). 05:30 PM – Arrival.",
        highlights: ["Cuncani", "Aguas termales de Lares"],
        highlightsEn: ["Cuncani", "Lares hot springs"],
        meals: "Desayuno, Almuerzo",
        mealsEn: "Breakfast, Lunch",
        accommodation: "Fin del tour",
        accommodationEn: "End of tour"
      }
    ],
    gallery: [
      { id: 1, type: "image", title: "Paisajes del Lares Trek", url: "/images/montanias.jpg" },
      { id: 2, type: "image", title: "Laguna Yanaqocha", url: "/images/laguna.jpg" },
      { id: 3, type: "image", title: "Comunidad tradicional", url: "/images/comunidad-2.jpg" },
      { id: 4, type: "image", title: "Paso de montaña", url: "/images/ausangate-1.jpg" },
      { id: 5, type: "image", title: "Textiles locales", url: "/images/textiles-2.jpg" },
      { id: 6, type: "image", title: "Comunidad andina", url: "/images/comunidad-3.jpg" }
    ]
  },

  // RUTAS - Selva del Manu 5D4N
  {
    id: "manu-rainforest-5d4n",
    category: "rutas",
    name: "Selva del Manu",
    nameEn: "Manu Rainforest",
    tagline: "Aventura en una de las zonas con mayor biodiversidad del planeta",
    taglineEn: "Adventure in one of the most biodiverse areas on Earth",
    duration: "5 días / 4 noches",
    durationEn: "5 days / 4 nights",
    difficulty: "Moderada",
    difficultyEn: "Moderate",
    elevation: "300m – 4,000m",
    bestSeason: "Mayo - Octubre",
    bestSeasonEn: "May - October",
    price: 600,
    description: "El Parque Nacional del Manu es un área natural protegida ubicada en el sureste del Perú, entre las regiones de Cusco y Madre de Dios. Con una extensión de más de 1.9 millones de hectáreas, abarca desde los 300 m s. n. m. en la Amazonía hasta más de 4,000 m s. n. m. en los Andes. Este territorio alberga una de las mayores biodiversidades del planeta y conserva zonas prácticamente vírgenes. La tradición oral menciona que en sus profundidades podría encontrarse el mítico Paititi, la ciudad perdida de los Incas.",
    descriptionEn: "Manu National Park is a protected natural area located in southeastern Peru, between the regions of Cusco and Madre de Dios. Covering more than 1.9 million hectares, it extends from 300 m a.s.l. in the Amazon rainforest to over 4,000 m a.s.l. in the Andes. This territory shelters one of the highest levels of biodiversity on Earth and preserves vast pristine areas. According to oral tradition, the legendary lost Inca city of Paititi may lie hidden deep within this jungle.",
    highlights: ["Parque Nacional del Manu", "Bosque nublado", "Comunidad nativa Harakbut", "Aguas termales de Pantiaqoya", "Cataratas y piscinas naturales"],
    highlightsEn: ["Manu National Park", "Cloud forest", "Harakbut native community", "Pantiaqoya hot springs", "Waterfalls and natural pools"],
    includes: [
      "Guiado y acompañamiento profesional",
      "Alojamiento y alimentación completa por 5 días / 4 noches",
      "Transporte vehicular y fluvial",
      "Logística general del viaje"
    ],
    includesEn: [
      "Professional guiding and assistance",
      "Accommodation and full meals for 5 days / 4 nights",
      "Land and river transportation",
      "Trip logistics"
    ],
    notIncludes: [
      "Equipo personal",
      "Snacks personales"
    ],
    notIncludesEn: [
      "Personal equipment",
      "Personal snacks"
    ],
    requirements: [
      "Ropa para lluvia y calor",
      "Repelente de insectos",
      "Botella reutilizable de agua",
      "Cámara fotográfica",
      "Documentos personales",
      "Dinero en efectivo"
    ],
    requirementsEn: [
      "Clothing for rain and heat",
      "Insect repellent",
      "Refillable water bottle",
      "Camera",
      "Personal documents",
      "Cash"
    ],
    itinerary: [
      {
        day: 1,
        title: "Cusco – Salvación – Reserva Qocha Wasi",
        titleEn: "Cusco – Salvación – Qocha Wasi Reserve",
        description: "Salida desde Cusco en transporte público hacia el poblado de Salvación (aprox. 7 horas). En el camino se atraviesan paisajes altoandinos y bosques nublados. Parada técnica en Paucartambo. Llegada a Salvación por la tarde. Alojamiento en cabañas ubicadas en una colina con vistas panorámicas. Visita a la reserva natural Qocha Wasi, paseo en balsa y caminata por senderos de selva. Cena y descanso.",
        descriptionEn: "Departure from Cusco to the town of Salvación by public transport (approx. 7 hours). Along the way, travelers enjoy high-Andean landscapes and cloud forests. Technical stop in Paucartambo. Arrival in Salvación in the afternoon. Overnight stay in hillside cabins with panoramic views. Visit to Qocha Wasi Nature Reserve, including a rafting activity and jungle walk. Dinner and rest.",
        highlights: ["Paucartambo", "Bosque nublado", "Reserva Qocha Wasi"],
        highlightsEn: ["Paucartambo", "Cloud forest", "Qocha Wasi Reserve"],
        meals: "Cena",
        mealsEn: "Dinner",
        accommodation: "Cabañas en Salvación",
        accommodationEn: "Cabins in Salvación"
      },
      {
        day: 2,
        title: "Shintuya – Excursión con comunidad Harakbut",
        titleEn: "Shintuya – Harakbut Community Excursion",
        description: "Traslado en transporte local al poblado de Shintuya. Excursión de día y noche junto a una familia de la comunidad nativa Harakbut. Caminata de aproximadamente 4 horas hacia el interior de la selva, conociendo ríos, cascadas, plantas medicinales y fauna local. Noche en campamento rústico.",
        descriptionEn: "Transfer by local transport to Shintuya village. One-day and one-night excursion into the rainforest with a local Harakbut family. Approximately 4-hour hike into the jungle, learning about rivers, waterfalls, medicinal plants and wildlife. Overnight in a rustic jungle camp.",
        highlights: ["Comunidad Harakbut", "Selva virgen", "Plantas medicinales"],
        highlightsEn: ["Harakbut community", "Virgin rainforest", "Medicinal plants"],
        meals: "Desayuno, Almuerzo, Cena",
        mealsEn: "Breakfast, Lunch, Dinner",
        accommodation: "Campamento rústico en la selva",
        accommodationEn: "Rustic jungle camp"
      },
      {
        day: 3,
        title: "Retorno a Shintuya – Apu Pantiaqoya",
        titleEn: "Return to Shintuya – Apu Pantiaqoya",
        description: "Desayuno y caminata de retorno (aprox. 3 horas) hasta Shintuya. Almuerzo y traslado en bote hacia las faldas del Apu Pantiaqoya. Descanso en un complejo local y disfrute de aguas termomedicinales. Cena y pernocte.",
        descriptionEn: "Breakfast and return hike (approx. 3 hours) to Shintuya. Lunch followed by a short boat ride to the foothills of the sacred Pantiaqoya Mountain. Time to relax in local thermomedicinal hot springs. Dinner and overnight stay.",
        highlights: ["Apu Pantiaqoya", "Aguas termomedicinales", "Viaje en bote"],
        highlightsEn: ["Apu Pantiaqoya", "Thermomedicinal hot springs", "Boat ride"],
        meals: "Desayuno, Almuerzo, Cena",
        mealsEn: "Breakfast, Lunch, Dinner",
        accommodation: "Hospedaje local en Pantiaqoya",
        accommodationEn: "Local lodge in Pantiaqoya"
      },
      {
        day: 4,
        title: "Cataratas y piscinas naturales – Salvación",
        titleEn: "Waterfalls and Natural Pools – Salvación",
        description: "Caminata de 45 minutos hacia cataratas y piscinas naturales. Tiempo para nadar y disfrutar del entorno. Almuerzo y retorno en bote a Shintuya. Traslado por la tarde al poblado de Salvación para pasar la última noche.",
        descriptionEn: "45-minute hike to waterfalls and natural pools. Time to swim and enjoy the surroundings. Lunch and boat return to Shintuya. Afternoon transfer to Salvación for the final overnight stay.",
        highlights: ["Cataratas", "Piscinas naturales", "Río Madre de Dios"],
        highlightsEn: ["Waterfalls", "Natural pools", "Madre de Dios River"],
        meals: "Desayuno, Almuerzo, Cena",
        mealsEn: "Breakfast, Lunch, Dinner",
        accommodation: "Cabañas en Salvación",
        accommodationEn: "Cabins in Salvación"
      },
      {
        day: 5,
        title: "Salvación – Cusco",
        titleEn: "Salvación – Cusco",
        description: "Retorno desde Salvación hasta la ciudad del Cusco durante todo el día. Llegada por la tarde. Nota: A mayor número de personas, la tarifa se reduce.",
        descriptionEn: "Full-day return journey from Salvación to Cusco. Arrival in Cusco in the afternoon. Note: Price decreases with a larger group size.",
        highlights: ["Paisajes andinos", "Bosque nublado"],
        highlightsEn: ["Andean landscapes", "Cloud forest"],
        meals: "Desayuno",
        mealsEn: "Breakfast",
        accommodation: "Fin del tour",
        accommodationEn: "End of tour"
      }
    ],
    gallery: [
      { id: 1, type: "image", title: "Parque Nacional del Manu", url: "/images/manu.jpg" },
      { id: 2, type: "image", title: "Bosque nublado del Manu", url: "/images/manu-3.jpg" },
      { id: 3, type: "image", title: "Selva amazónica", url: "/images/manu-4.jpg" },
      { id: 4, type: "image", title: "Comunidad Harakbut", url: "/images/comunidad-3.jpg" },
      { id: 5, type: "image", title: "Naturaleza del Manu", url: "/images/manu-5.jpg" },
      { id: 6, type: "image", title: "Selva del Manu", url: "/images/selva-manu.jpg" }
    ]
  }
];

export const getPackagesByCategory = (category: ActivityCategory) =>
  packages.filter((p) => p.category === category);

export const getPackageById = (id: string) =>
  packages.find((p) => p.id === id);
