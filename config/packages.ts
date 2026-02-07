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
  /**
   * Optional explicit hero image for this package.
   * If provided, it will be used in ActivityHero and package cards
   * before falling back to the first gallery image or category defaults.
   */
  heroImage?: string;
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
  // // COMUNIDAD - Textiles
  // {
  //   id: "textiles",
  //   category: "comunidad",
  //   name: "Taller de Textiles en Chinchero",
  //   nameEn: "Textile Workshop in Chinchero",
  //   heroImage: "/images/textiles.jpg",
  //   tagline: "Aprende el arte milenario del tejido andino",
  //   taglineEn: "Learn the ancient art of Andean weaving",
  //   duration: "Medio día (5 horas)",
  //   price: 75,
  //   description: "Sumérgete en el mundo de los textiles andinos con las maestras tejedoras de Chinchero. Aprenderás el proceso completo: desde el esquilado de alpacas hasta el tejido en telar, pasando por el teñido natural con plantas locales.",
  //   descriptionEn: "Immerse yourself in the world of Andean textiles with master weavers from Chinchero. You'll learn the complete process: from alpaca shearing to loom weaving, including natural dyeing with local plants.",
  //   highlights: ["Teñido natural", "Tejido en telar", "Almuerzo típico", "Mercado local"],
  //   highlightsEn: ["Natural dyeing", "Loom weaving", "Typical lunch", "Local market"],
  //   includes: ["Transporte desde Cusco", "Guía", "Materiales", "Almuerzo tradicional", "Visita al mercado"],
  //   includesEn: ["Transport from Cusco", "Guide", "Materials", "Traditional lunch", "Market visit"],
  //   notIncludes: ["Compras personales", "Propinas"],
  //   notIncludesEn: ["Personal shopping", "Tips"],
  //   requirements: ["Ningún requisito físico especial", "Interés en artesanía"],
  //   requirementsEn: ["No special physical requirements", "Interest in crafts"],
  //   itinerary: [
  //     { day: 1, title: "Experiencia completa de textiles", titleEn: "Complete textile experience", description: "8:00 AM recojo del hotel. Viaje a Chinchero. Demostración de teñido natural. Práctica en telar. Almuerzo con la comunidad. Visita al mercado. Regreso a Cusco 1:00 PM.", descriptionEn: "8:00 AM hotel pickup. Travel to Chinchero. Natural dyeing demonstration. Loom practice. Lunch with community. Market visit. Return to Cusco 1:00 PM.", meals: "Almuerzo", accommodation: "N/A" }
  //   ],
  //   gallery: [
  //     { id: 1, type: "image", title: "Tejedoras de Chinchero", url: "/images/textiles.jpg" },
  //     { id: 2, type: "image", title: "Textiles tradicionales", url: "/images/textiles-2.jpg" },
  //     { id: 3, type: "image", title: "Tejido en telar", url: "/images/textiles-3.jpg" },
  //     { id: 4, type: "image", title: "Colores naturales", url: "/images/chincheros.jpg" }
  //   ]
  // },
  //
  // // COMUNIDAD - Gastronomía
  // {
  //   id: "gastronomia",
  //   category: "comunidad",
  //   name: "Experiencia Gastronómica Andina",
  //   nameEn: "Andean Gastronomic Experience",
  //   heroImage: "/images/cocina-rustica.jpg",
  //   tagline: "Cocina, sabores y tradición de los Andes",
  //   taglineEn: "Cooking, flavors and Andean tradition",
  //   duration: "Día completo (8 horas)",
  //   price: 95,
  //   description: "Una inmersión total en la gastronomía andina. Visita al mercado de San Pedro, cosecha de ingredientes en una chacra familiar, y preparación de platos tradicionales como pachamanca y chicha de jora.",
  //   descriptionEn: "A total immersion in Andean gastronomy. Visit San Pedro market, harvest ingredients at a family farm, and prepare traditional dishes like pachamanca and chicha de jora.",
  //   highlights: ["Mercado San Pedro", "Cocina con leña", "Pachamanca", "Chicha de jora"],
  //   highlightsEn: ["San Pedro Market", "Wood fire cooking", "Pachamanca", "Chicha de jora"],
  //   includes: ["Transporte", "Guía culinario", "Todos los ingredientes", "Almuerzo preparado", "Recetario"],
  //   includesEn: ["Transport", "Culinary guide", "All ingredients", "Prepared lunch", "Recipe book"],
  //   notIncludes: ["Bebidas alcohólicas extra", "Propinas"],
  //   notIncludesEn: ["Extra alcoholic drinks", "Tips"],
  //   requirements: ["Ninguno", "Informar alergias alimentarias"],
  //   requirementsEn: ["None", "Inform food allergies"],
  //   itinerary: [
  //     { day: 1, title: "Del mercado a la mesa", titleEn: "From market to table", description: "7:30 AM Mercado San Pedro. 9:30 AM viaje a comunidad. 10:30 AM cosecha. 12:00 PM preparación pachamanca. 2:00 PM almuerzo. 4:00 PM regreso.", descriptionEn: "7:30 AM San Pedro Market. 9:30 AM travel to community. 10:30 AM harvest. 12:00 PM pachamanca preparation. 2:00 PM lunch. 4:00 PM return.", meals: "Almuerzo completo", accommodation: "N/A" }
  //   ],
  //   gallery: [
  //     { id: 1, type: "image", title: "Cocina rústica", url: "/images/cocina-rustica.jpg" },
  //     { id: 2, type: "image", title: "Comunidad local", url: "/images/comunidad.jpg" },
  //     { id: 3, type: "image", title: "Tradiciones andinas", url: "/images/comunidad-1.jpg" },
  //     { id: 4, type: "image", title: "Paisaje andino", url: "/images/comunidad-2.jpg" }
  //   ]
  // },
  //
  // // CEREMONIAS - Pachamama
  // {
  //   id: "pachamama",
  //   category: "ceremonias",
  //   name: "Ceremonia a la Pachamama",
  //   nameEn: "Pachamama Ceremony",
  //   heroImage: "/images/coca-leaf.jpg",
  //   tagline: "Ofrenda sagrada a la Madre Tierra",
  //   taglineEn: "Sacred offering to Mother Earth",
  //   duration: "Medio día (4 horas)",
  //   price: 80,
  //   description: "Participa en una ceremonia de ofrenda (despacho) a la Pachamama guiada por un pampamesayoq, heredero de la tradición espiritual andina. Aprende sobre la cosmovisión andina y conecta con la energía de la Madre Tierra.",
  //   descriptionEn: "Participate in an offering ceremony (despacho) to Pachamama guided by a pampamesayoq, heir to the Andean spiritual tradition. Learn about the Andean worldview and connect with Mother Earth's energy.",
  //   highlights: ["Despacho andino", "Meditación", "Coca kintu", "Lugar sagrado"],
  //   highlightsEn: ["Andean despacho", "Meditation", "Coca kintu", "Sacred place"],
  //   includes: ["Transporte", "Maestro pampamesayoq", "Materiales ceremoniales", "Mate de coca", "Traducción"],
  //   includesEn: ["Transport", "Pampamesayoq master", "Ceremonial materials", "Coca tea", "Translation"],
  //   notIncludes: ["Propinas al maestro"],
  //   notIncludesEn: ["Tips for the master"],
  //   requirements: ["Mente abierta", "Respeto por las tradiciones", "No consumir alcohol 24h antes"],
  //   requirementsEn: ["Open mind", "Respect for traditions", "No alcohol 24h before"],
  //   itinerary: [
  //     { day: 1, title: "Ceremonia de ofrenda", titleEn: "Offering ceremony", description: "8:00 AM recojo. Viaje a sitio sagrado. Introducción a cosmovisión andina. Preparación del despacho. Ceremonia de ofrenda. Meditación. Regreso 12:00 PM.", descriptionEn: "8:00 AM pickup. Travel to sacred site. Introduction to Andean worldview. Despacho preparation. Offering ceremony. Meditation. Return 12:00 PM.", meals: "Mate de coca", accommodation: "N/A" }
  //   ],
  //   gallery: [
  //     { id: 1, type: "image", title: "Hoja de coca", url: "/images/coca-leaf.jpg" },
  //     { id: 2, type: "image", title: "Sacsayhuaman", url: "/images/sacsayhuaman.jpg" },
  //     { id: 3, type: "image", title: "Ruinas sagradas", url: "/images/ruins.jpg" },
  //     { id: 4, type: "image", title: "Moray", url: "/images/moray.jpg" }
  //   ]
  // },
  //
  // // CEREMONIAS - Retiro
  // {
  //   id: "retiro-espiritual",
  //   category: "ceremonias",
  //   name: "Retiro Espiritual Completo",
  //   nameEn: "Complete Spiritual Retreat",
  //   heroImage: "/images/sacsayhuaman.jpg",
  //   tagline: "Inmersión profunda en la espiritualidad andina",
  //   taglineEn: "Deep immersion in Andean spirituality",
  //   duration: "3 días / 2 noches",
  //   price: 450,
  //   description: "Un retiro transformador que combina múltiples ceremonias, meditación diaria, visitas a lugares sagrados y guía espiritual personalizada. Incluye ceremonia de Pachamama, ritual del amanecer y ceremonia de cierre bajo las estrellas.",
  //   descriptionEn: "A transformative retreat combining multiple ceremonies, daily meditation, visits to sacred places and personalized spiritual guidance. Includes Pachamama ceremony, sunrise ritual and closing ceremony under the stars.",
  //   highlights: ["Múltiples ceremonias", "Meditación diaria", "Lugares sagrados", "Guía personal"],
  //   highlightsEn: ["Multiple ceremonies", "Daily meditation", "Sacred places", "Personal guide"],
  //   includes: ["Alojamiento en retiro", "Alimentación vegetariana", "Todas las ceremonias", "Transporte", "Guía espiritual personal"],
  //   includesEn: ["Retreat lodging", "Vegetarian meals", "All ceremonies", "Transport", "Personal spiritual guide"],
  //   notIncludes: ["Vuelos", "Seguro", "Gastos personales"],
  //   notIncludesEn: ["Flights", "Insurance", "Personal expenses"],
  //   requirements: ["Compromiso con el proceso", "Abstinencia de alcohol/drogas 1 semana antes", "Buena salud mental"],
  //   requirementsEn: ["Commitment to the process", "No alcohol/drugs 1 week before", "Good mental health"],
  //   itinerary: [
  //     { day: 1, title: "Llegada y apertura", titleEn: "Arrival and opening", description: "Recepción en el retiro. Ceremonia de bienvenida. Introducción al programa. Meditación guiada. Cena y descanso.", descriptionEn: "Reception at retreat. Welcome ceremony. Program introduction. Guided meditation. Dinner and rest.", meals: "C", accommodation: "Retiro" },
  //     { day: 2, title: "Día de ceremonias", titleEn: "Ceremony day", description: "4:00 AM Ritual del amanecer en Sacsayhuamán. Desayuno. Ceremonia de Pachamama. Almuerzo consciente. Tarde de meditación y reflexión. Cena.", descriptionEn: "4:00 AM Sunrise ritual at Sacsayhuaman. Breakfast. Pachamama ceremony. Conscious lunch. Afternoon meditation and reflection. Dinner.", meals: "D, A, C", accommodation: "Retiro" },
  //     { day: 3, title: "Cierre e integración", titleEn: "Closing and integration", description: "Meditación matutina. Desayuno. Ceremonia de cierre y gratitud. Círculo de compartir. Almuerzo de despedida. Regreso a Cusco.", descriptionEn: "Morning meditation. Breakfast. Closing and gratitude ceremony. Sharing circle. Farewell lunch. Return to Cusco.", meals: "D, A", accommodation: "Fin" }
  //   ],
  //   gallery: [
  //     { id: 1, type: "image", title: "Sacsayhuaman", url: "/images/sacsayhuaman.jpg" },
  //     { id: 2, type: "image", title: "Inti Punku", url: "/images/inti-punku.jpg" },
  //     { id: 3, type: "image", title: "Moray", url: "/images/moray.jpg" },
  //     { id: 4, type: "image", title: "Hoja de coca", url: "/images/coca-leaf.jpg" },
  //     { id: 5, type: "image", title: "Montañas sagradas", url: "/images/montanias.jpg" },
  //     { id: 6, type: "image", title: "Ruinas", url: "/images/ruins.jpg" }
  //   ]
  // },

  // RUTAS - Cancha Cancha Full Day
  {
    id: "cancha-cancha",
    category: "rutas",
    name: "Cancha Cancha – Experiencia Comunitaria Andina",
    nameEn: "Cancha Cancha – Full Day High Andean Community Experience",
    heroImage: "/images/cancha-cancha/IMG_0310.jpg",
    tagline: "Caminata y encuentro con una comunidad altoandina",
    taglineEn: "Hike and encounter with a high Andean community",
    duration: "Día completo (5 horas de caminata)",
    durationEn: "Full day (5 hours hiking)",
    difficulty: "Moderado",
    difficultyEn: "Moderate",
    elevation: "3,200m inicio",
    bestSeason: "Abril - Noviembre",
    bestSeasonEn: "April - November",
    price: 150,
    description: "Esta caminata de día completo se realiza en el valle de Huaran, dentro de la cordillera del Urubamba. El recorrido ofrece paisajes naturales, flora nativa y ecosistemas altoandinos. La experiencia culmina en la comunidad altoandina de Cancha Cancha, donde una familia local recibe a los visitantes para compartir un almuerzo tradicional y conocer su forma de vida, agricultura, ganadería y textiles ancestrales.",
    descriptionEn: "This full-day trek takes place in the Huaran Valley, located in the Urubamba mountain range. The route offers scenic landscapes with native plants, high-Andean ecosystems, and traditional rural life. The experience culminates in the high Andean community of Cancha Cancha, where visitors are welcomed by a local family to share a traditional lunch and learn about daily life, agriculture, livestock, and traditional textiles.",
    highlights: ["Comunidad Cancha Cancha", "Almuerzo tradicional", "Textiles ancestrales", "Ecosistemas altoandinos"],
    highlightsEn: ["Cancha Cancha community", "Traditional lunch", "Ancestral textiles", "High-Andean ecosystems"],
    includes: [
      "Transporte privado ida y vuelta",
      "Guía profesional",
      "Almuerzo local tradicional",
      "Experiencia cultural con familia local"
    ],
    includesEn: [
      "Private round-trip transportation",
      "Professional guide",
      "Traditional local lunch",
      "Cultural experience with a local family"
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
      "Sombrero o gorra",
      "Bloqueador solar",
      "Botella de agua",
      "Dinero en efectivo",
      "DNI o Pasaporte",
      "Cámara fotográfica",
      "Ropa para lluvia"
    ],
    requirementsEn: [
      "Sun hat or cap",
      "Sunscreen",
      "Water bottle",
      "Cash for souvenirs",
      "ID / Passport",
      "Camera",
      "Rain gear"
    ],
    itinerary: [
      {
        day: 1,
        title: "Valle Sagrado – Cancha Cancha – Valle Sagrado",
        titleEn: "Sacred Valley – Cancha Cancha – Sacred Valley",
        description: "07:15 AM – Recojo desde su alojamiento en el Valle Sagrado y traslado a Saywapata (3,200 m s. n. m.). 08:30 AM – Inicio de la caminata. Ascenso aproximado de 3 horas. 11:30 AM – Llegada a la comunidad de Cancha Cancha. Recepción y almuerzo tradicional. 02:00 PM – Caminata de retorno (aprox. 2 horas en descenso). 04:30 PM – Traslado de retorno al Valle Sagrado.",
        descriptionEn: "07:15 AM – Pick-up from your accommodation in the Sacred Valley and transfer to Saywapata (3,200 m a.s.l.). 08:30 AM – Start of the hike. Approx. 3-hour ascent. 11:30 AM – Arrival at Cancha Cancha community. Welcome and traditional lunch. 02:00 PM – Return hike (approx. 2 hours downhill). 04:30 PM – Transfer back to the Sacred Valley.",
        highlights: ["Cancha Cancha", "Almuerzo tradicional"],
        highlightsEn: ["Cancha Cancha", "Traditional lunch"],
        meals: "Almuerzo",
        mealsEn: "Lunch",
        accommodation: "N/A",
        accommodationEn: "N/A"
      }
    ],
    gallery: [
      { id: 1, type: "image", title: "Comunidad Cancha Cancha", url: "/images/cancha-cancha/IMG_0119.jpg" },
      { id: 2, type: "image", title: "Sendero altoandino", url: "/images/cancha-cancha/IMG_0135.jpg" },
      { id: 3, type: "image", title: "Paisaje del valle", url: "/images/cancha-cancha/IMG_0177.jpg" },
      { id: 4, type: "image", title: "Vista panorámica", url: "/images/cancha-cancha/IMG_0211-2.jpg" },
      { id: 5, type: "image", title: "Caminata por el valle", url: "/images/cancha-cancha/IMG_0238.jpg" },
      { id: 6, type: "image", title: "Flora nativa", url: "/images/cancha-cancha/IMG_0291.jpg" },
      { id: 7, type: "image", title: "Ecosistema altoandino", url: "/images/cancha-cancha/IMG_0299.jpg" },
      { id: 8, type: "image", title: "Comunidad andina", url: "/images/cancha-cancha/IMG_0302.jpg" },
      { id: 9, type: "image", title: "Textiles tradicionales", url: "/images/cancha-cancha/IMG_0307.jpg" },
      { id: 10, type: "image", title: "Familia local", url: "/images/cancha-cancha/IMG_0310.jpg" },
      { id: 11, type: "image", title: "Vida comunitaria", url: "/images/cancha-cancha/IMG_0312.jpg" },
      { id: 12, type: "image", title: "Paisaje andino", url: "/images/cancha-cancha/IMG_0338.jpg" },
      { id: 13, type: "image", title: "Montañas del Urubamba", url: "/images/cancha-cancha/IMG_0344.jpg" },
      { id: 14, type: "image", title: "Naturaleza andina", url: "/images/cancha-cancha/IMG_5994.jpg" },
      { id: 15, type: "image", title: "Valle de Huaran", url: "/images/cancha-cancha/IMG_6001.jpg" },
      { id: 16, type: "image", title: "Artesanía textil", url: "/images/cancha-cancha/IMG_7271.jpg" },
      { id: 17, type: "image", title: "Experiencia comunitaria", url: "/images/cancha-cancha/IMG_9323.JPG" }
    ]
  },

  // RUTAS - Inti Punku Full Day
  {
    id: "inti-punku",
    category: "rutas",
    name: "Inti Punku – Puerta del Sol",
    nameEn: "Inti Punku – Sun Gate Experience",
    heroImage: "/images/inti-punku/IMG_5633.jpg",
    tagline: "Camina hacia el portal sagrado de los incas",
    taglineEn: "Hike to the sacred Inca portal",
    duration: "Día completo (6–7 horas de caminata)",
    durationEn: "Full day (6–7 hours hiking)",
    difficulty: "Moderado",
    difficultyEn: "Moderate",
    elevation: "Cacchicata",
    bestSeason: "Abril - Noviembre",
    bestSeasonEn: "April - November",
    price: 150,
    description: "Esta caminata de día completo se realiza en los alrededores del histórico pueblo inca de Ollantaytambo. Un transporte nos lleva hasta la comunidad andina de Cacchicata, punto de inicio de la caminata. El recorrido incluye aproximadamente cuatro horas de ascenso a través de paisajes con flora y fauna nativa. La caminata conduce a un sitio arqueológico enigmático y culmina en Inti Punku, conocido por los incas como la Puerta del Sol, un portal sagrado con una de las mejores vistas del Valle Sagrado, el río Wilkamayu y la montaña sagrada Apu Waqay Willka (Apu Verónica).",
    descriptionEn: "This full-day hike takes place just outside the historic Inca town of Ollantaytambo. Transportation takes us to the Andean community of Cacchicata, where the trek begins. The route includes approximately four hours of ascent through landscapes rich in native flora and fauna. The hike leads to an enigmatic archaeological site and culminates at Inti Punku, known by the Incas as the Sun Gate — a sacred portal offering one of the most impressive panoramic views of the Sacred Valley, the Wilkamayu River, and the sacred mountain Apu Waqay Willka (Apu Veronica).",
    highlights: ["Inti Punku (Puerta del Sol)", "Canteras incas de Cacchicata", "Vista del Valle Sagrado", "Apu Waqay Willka"],
    highlightsEn: ["Inti Punku (Sun Gate)", "Inca quarries of Cacchicata", "Sacred Valley views", "Apu Waqay Willka"],
    includes: [
      "Transporte privado ida y vuelta desde el Valle Sagrado",
      "Guía profesional",
      "Almuerzo tipo box lunch",
      "Interpretación cultural e histórica"
    ],
    includesEn: [
      "Private round-trip transportation from the Sacred Valley",
      "Professional guide",
      "Box lunch",
      "Cultural and historical interpretation"
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
      "Sombrero o gorra",
      "Bloqueador solar",
      "Botella de agua",
      "Dinero en efectivo",
      "DNI o Pasaporte",
      "Cámara fotográfica",
      "Ropa para lluvia"
    ],
    requirementsEn: [
      "Sun hat or cap",
      "Sunscreen",
      "Water bottle",
      "Cash for souvenirs",
      "ID / Passport",
      "Camera",
      "Rain gear"
    ],
    itinerary: [
      {
        day: 1,
        title: "Cacchicata – Inti Punku – Ollantaytambo",
        titleEn: "Cacchicata – Inti Punku – Ollantaytambo",
        description: "06:30 AM – Recojo desde su alojamiento en el Valle Sagrado y traslado a Cacchicata. 08:00 AM – Inicio de la caminata. Ascenso de 3 a 4 horas. 12:00 PM – Llegada a Inti Punku. Descanso, apreciación del paisaje, ofrenda andina tradicional y almuerzo tipo box lunch. 02:00 PM – Inicio del descenso, visitando las antiguas canteras incas de Cacchicata. 05:00 PM – Fin de la caminata y traslado privado de retorno.",
        descriptionEn: "06:30 AM – Pick-up from your accommodation in the Sacred Valley and transfer to Cacchicata. 08:00 AM – Start of the hike. Ascent of approximately 3 to 4 hours. 12:00 PM – Arrival at Inti Punku. Time to rest, enjoy the views, perform a traditional Andean offering, and enjoy a box lunch. 02:00 PM – Start of the descent, passing by the ancient Inca quarries of Cacchicata. 05:00 PM – End of the hike and private transfer back.",
        highlights: ["Inti Punku", "Canteras de Cacchicata", "Ofrenda andina"],
        highlightsEn: ["Inti Punku", "Cacchicata quarries", "Andean offering"],
        meals: "Almuerzo",
        mealsEn: "Lunch",
        accommodation: "N/A",
        accommodationEn: "N/A"
      }
    ],
    gallery: [
      { id: 1, type: "image", title: "Inti Punku", url: "/images/inti-punku/IMG_5633.jpg" },
      { id: 2, type: "image", title: "Vista del Valle Sagrado", url: "/images/inti-punku/IMG_5648-2.jpg" },
      { id: 3, type: "image", title: "Sendero hacia Inti Punku", url: "/images/inti-punku/IMG_5658.jpg" },
      { id: 4, type: "image", title: "Paisaje andino", url: "/images/inti-punku/32627201693_5cc37e75b2_o.jpg" },
      { id: 5, type: "image", title: "Canteras de Cacchicata", url: "/images/inti-punku/33121893274_e26c65da39_o.jpg" },
      { id: 6, type: "image", title: "Portal sagrado", url: "/images/inti-punku/33580393130_c342837737_o.jpg" },
      { id: 7, type: "image", title: "Puerta del Sol", url: "/images/inti-punku/33924324086_3318d9120b_o.jpg" }
    ]
  },

  // RUTAS - Ñaupa Waka Half Day
  {
    id: "naupa-waka",
    category: "rutas",
    name: "Ñaupa Waka – Experiencia Sagrada",
    nameEn: "Ñaupa Waka – Sacred Site Experience",
    heroImage: "/images/naupa-waka/IMG_4874.JPG",
    tagline: "Visita un oráculo inca oculto en la montaña",
    taglineEn: "Visit an Inca oracle hidden within the mountain",
    duration: "Medio día",
    durationEn: "Half day",
    difficulty: "Fácil",
    difficultyEn: "Easy",
    elevation: "Pacchar, Valle Sagrado",
    bestSeason: "Todo el año",
    bestSeasonEn: "Year-round",
    price: 80,
    description: "Esta experiencia de medio día se desarrolla en el Valle Sagrado de los Incas, cerca del pueblo de Pacchar, ubicado antes de Ollantaytambo. El recorrido conduce a un extraordinario sitio ceremonial inca oculto en la montaña. Tras una corta caminata en ascenso, se llega a Ñaupa Waka, un oráculo sagrado utilizado como centro ceremonial y observatorio estelar. En el interior de una cueva se encuentra un altar de piedra tallado con formas geométricas relacionadas con la Chakana inca, símbolo de gran importancia espiritual. Es un lugar único y especial, ideal para quienes buscan una conexión profunda con la cultura andina.",
    descriptionEn: "This half-day experience takes place in the Sacred Valley of the Incas, near the town of Pacchar, located before Ollantaytambo. The journey leads to an extraordinary Inca ceremonial site hidden within the mountain. After a short uphill walk, visitors reach Ñaupa Waka, a sacred Inca oracle believed to have been used as a ceremonial center and stellar observatory. Inside a cave, a carved stone altar displays geometric shapes closely related to the Inca Chakana, a symbol of great spiritual importance. This is a unique and powerful place, ideal for travelers seeking a deep cultural and spiritual connection.",
    highlights: ["Templo sagrado Ñaupa Waka", "Ofrenda andina con hojas de coca", "Chakana inca", "Cervecería del Valle Sagrado"],
    highlightsEn: ["Sacred temple Ñaupa Waka", "Andean offering with coca leaves", "Inca Chakana", "Sacred Valley Brewery"],
    includes: [
      "Transporte privado",
      "Guía profesional e interpretación",
      "Ofrenda andina tradicional",
      "Snack"
    ],
    includesEn: [
      "Private transportation",
      "Professional guide and interpretation",
      "Traditional Andean offering",
      "Snack"
    ],
    notIncludes: [
      "Consumos en la cervecería",
      "Gastos personales"
    ],
    notIncludesEn: [
      "Meals at the brewery",
      "Personal expenses"
    ],
    requirements: [
      "Sombrero o gorra",
      "Cámara fotográfica",
      "Dinero en efectivo para la cervecería",
      "Botella de agua"
    ],
    requirementsEn: [
      "Sun hat or cap",
      "Camera",
      "Cash for the brewery",
      "Water bottle"
    ],
    itinerary: [
      {
        day: 1,
        title: "Valle Sagrado – Ñaupa Waka – Valle Sagrado",
        titleEn: "Sacred Valley – Ñaupa Waka – Sacred Valley",
        description: "08:30 AM – Recojo desde su hotel en el Valle Sagrado y traslado al pueblo de Pacchar (aprox. 45 minutos). 09:30 AM – Llegada al punto de inicio y caminata corta de 25–30 minutos en ascenso hacia las terrazas incas y el templo. 10:00 AM – Visita al templo sagrado de Ñaupa Waka. Ofrenda andina tradicional con hojas de coca, acompañada de música intuitiva. Tiempo libre para recorrer y disfrutar del sitio (aprox. 2 horas). 12:00 PM – Descenso hacia Pacchar y visita a la Cervecería del Valle Sagrado (opcional). 01:00 PM – Traslado privado de retorno a su hotel.",
        descriptionEn: "08:30 AM – Pick-up from your hotel in the Sacred Valley and transfer to Pacchar (approx. 45 minutes). 09:30 AM – Arrival at the starting point. Short uphill walk of approximately 25–30 minutes towards the Inca terraces and temple. 10:00 AM – Visit to the sacred temple of Ñaupa Waka. Traditional Andean offering using coca leaves, accompanied by intuitive music. Free time to explore (approx. 2 hours). 12:00 PM – Descent to Pacchar and visit to the Sacred Valley Brewery (optional). 01:00 PM – Private transport back to your hotel.",
        highlights: ["Ñaupa Waka", "Ofrenda andina", "Cervecería del Valle Sagrado"],
        highlightsEn: ["Ñaupa Waka", "Andean offering", "Sacred Valley Brewery"],
        meals: "Snack",
        mealsEn: "Snack",
        accommodation: "N/A",
        accommodationEn: "N/A"
      }
    ],
    gallery: [
      { id: 1, type: "image", title: "Templo de Ñaupa Waka", url: "/images/naupa-waka/IMG_4874.JPG" },
      { id: 2, type: "image", title: "Escalinata sagrada", url: "/images/naupa-waka/escalinata.JPG" },
      { id: 3, type: "image", title: "Interior del templo", url: "/images/naupa-waka/IMG_4921.JPG" },
      { id: 4, type: "image", title: "Altar de piedra", url: "/images/naupa-waka/IMG_4853-copia.JPG" },
      { id: 5, type: "image", title: "Sitio arqueológico", url: "/images/naupa-waka/IMG_4854-copia.JPG" },
      { id: 6, type: "image", title: "Vista del sitio", url: "/images/naupa-waka/IMG_4985.JPG" },
      { id: 7, type: "image", title: "Restos ancestrales", url: "/images/naupa-waka/momias.JPG" }
    ]
  },

  // RUTAS - Pumamarca Full Day
  {
    id: "pumamarca",
    category: "rutas",
    name: "Pumamarca – Caminata Arqueológica",
    nameEn: "Pumamarca – Archaeological Hike",
    heroImage: "/images/pumamarca/IMG_5005.jpg",
    tagline: "Explora un sitio preinca con vistas impresionantes",
    taglineEn: "Explore a pre-Inca site with stunning views",
    duration: "Día completo (6 horas de caminata)",
    durationEn: "Full day (6 hours hiking)",
    difficulty: "Moderado",
    difficultyEn: "Moderate",
    elevation: "Munaypata, Ollantaytambo",
    bestSeason: "Abril - Noviembre",
    bestSeasonEn: "April - November",
    price: 150,
    description: "Esta hermosa caminata de día completo se realiza en los alrededores del histórico pueblo de Ollantaytambo. El recorrido atraviesa un valle con gran diversidad de plantas nativas, riachuelos y antiguos sistemas de terrazas agrícolas. La caminata inicia en Munaypata, una pequeña comunidad andina ubicada a unos 10 minutos de Ollantaytambo. Tras un ascenso gradual de aproximadamente tres horas, se llega al sitio arqueológico preinca de Pumamarca, donde es posible apreciar la magnitud de su construcción, su ubicación estratégica y su notable ingeniería, todo ello acompañado de vistas impresionantes de los valles y montañas circundantes.",
    descriptionEn: "This beautiful full-day hike takes place on the outskirts of the historic town of Ollantaytambo. The route crosses a scenic valley rich in native plants, streams, and ancient agricultural terrace systems. The hike begins in Munaypata, a small Andean community located approximately 10 minutes from Ollantaytambo. After a gradual ascent of about three hours, we reach the pre-Inca archaeological site of Pumamarca, where visitors can appreciate its impressive architecture, strategic location, and advanced engineering, all surrounded by spectacular views of the surrounding valleys and mountains.",
    highlights: ["Sitio arqueológico de Pumamarca", "Terrazas incas", "Vistas panorámicas", "Ollantaytambo"],
    highlightsEn: ["Pumamarca archaeological site", "Inca terraces", "Panoramic views", "Ollantaytambo"],
    includes: [
      "Transporte privado ida y vuelta desde el Valle Sagrado",
      "Guía profesional",
      "Almuerzo tipo box lunch",
      "Boleto de ingreso al sitio arqueológico"
    ],
    includesEn: [
      "Private round-trip transportation from the Sacred Valley",
      "Professional guide",
      "Box lunch",
      "Entrance ticket to the archaeological site"
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
      "Sombrero o gorra",
      "Bloqueador solar",
      "Botella de agua",
      "Dinero en efectivo",
      "DNI o Pasaporte",
      "Cámara fotográfica",
      "Ropa para lluvia"
    ],
    requirementsEn: [
      "Sun hat or cap",
      "Sunscreen",
      "Water bottle",
      "Cash for souvenirs",
      "ID / Passport",
      "Camera",
      "Rain gear"
    ],
    itinerary: [
      {
        day: 1,
        title: "Munaypata – Pumamarca – Ollantaytambo",
        titleEn: "Munaypata – Pumamarca – Ollantaytambo",
        description: "07:00 AM – Recojo desde su hotel en el Valle Sagrado y traslado a Munaypata, Ollantaytambo. 08:30 AM – Inicio de la caminata. Durante el ascenso se observan antiguas terrazas incas y paisajes impresionantes. 11:30 AM – Llegada al sitio arqueológico de Pumamarca. Tiempo para descansar, recorrer el complejo preinca, disfrutar de las vistas panorámicas y almorzar (box lunch). 01:30 PM – Inicio de la caminata de retorno (aprox. 3 horas). 04:00 PM – Llegada a Ollantaytambo y traslado de retorno a su hotel.",
        descriptionEn: "07:00 AM – Pick-up from your hotel in the Sacred Valley and transfer to Munaypata, Ollantaytambo. 08:30 AM – Start of the hike. During the ascent, we observe ancient Inca terraces and stunning landscapes. 11:30 AM – Arrival at Pumamarca archaeological site. Time to rest, explore the pre-Inca ruins, enjoy panoramic views, and have a box lunch. 01:30 PM – Start of the return hike (approx. 3 hours). 04:00 PM – Arrival in Ollantaytambo and transfer back.",
        highlights: ["Pumamarca", "Terrazas incas", "Vistas panorámicas"],
        highlightsEn: ["Pumamarca", "Inca terraces", "Panoramic views"],
        meals: "Almuerzo",
        mealsEn: "Lunch",
        accommodation: "N/A",
        accommodationEn: "N/A"
      }
    ],
    gallery: [
      { id: 1, type: "image", title: "Sitio de Pumamarca", url: "/images/pumamarca/IMG_4987.jpg" },
      { id: 2, type: "image", title: "Ruinas preincas", url: "/images/pumamarca/IMG_5005.jpg" },
      { id: 3, type: "image", title: "Terrazas antiguas", url: "/images/pumamarca/IMG_5010.jpg" },
      { id: 4, type: "image", title: "Arquitectura preinca", url: "/images/pumamarca/IMG_5011.jpg" },
      { id: 5, type: "image", title: "Vista panorámica", url: "/images/pumamarca/IMG_5013.jpg" },
      { id: 6, type: "image", title: "Valle circundante", url: "/images/pumamarca/IMG_5024.jpg" },
      { id: 7, type: "image", title: "Paisaje de montaña", url: "/images/pumamarca/IMG_5028.jpg" },
      { id: 8, type: "image", title: "Caminata por el sendero", url: "/images/pumamarca/IMG_5074.jpg" },
      { id: 9, type: "image", title: "Flora nativa", url: "/images/pumamarca/IMG_5084.jpg" },
      { id: 10, type: "image", title: "Muros de piedra", url: "/images/pumamarca/IMG_5096.jpg" },
      { id: 11, type: "image", title: "Paisaje andino", url: "/images/pumamarca/IMG_5149.jpg" },
      { id: 12, type: "image", title: "Montañas del entorno", url: "/images/pumamarca/IMG_5179.jpg" },
      { id: 13, type: "image", title: "Ollantaytambo", url: "/images/pumamarca/IMG_5202.jpg" }
    ]
  },

  // RUTAS - Pumawanka Full Day
  {
    id: "pumawanka",
    category: "rutas",
    name: "Pumawanka – Trekking de Naturaleza",
    nameEn: "Pumawanka – Nature Trek",
    heroImage: "/images/montanias.jpg",
    tagline: "Camino inca ancestral entre los Andes y la selva",
    taglineEn: "Ancient Inca trail connecting the Andes to the jungle",
    duration: "Día completo (6 horas de caminata)",
    durationEn: "Full day (6 hours hiking)",
    difficulty: "Fácil a Moderado",
    difficultyEn: "Easy to Moderate",
    elevation: "Chupani, Valle de Pumawanka",
    bestSeason: "Abril - Noviembre",
    bestSeasonEn: "April - November",
    price: 125,
    description: "Esta hermosa caminata de día completo se realiza en el valle de Pumawanka, ubicado en la cordillera del Urubamba. Es una experiencia ideal para quienes buscan una conexión profunda con la naturaleza. La ruta sigue un antiguo camino inca a través de ecosistemas altoandinos, bosques, plantas nativas y ríos. Durante el recorrido se visita un sitio arqueológico enigmático antes de llegar a la comunidad altoandina de Sutoc Paccha. Históricamente, este camino fue una de las rutas más importantes del Imperio Inca, conectando los Andes con la selva.",
    descriptionEn: "This beautiful full-day trek takes place in the Pumawanka Valley, located within the Urubamba mountain range. It is an ideal experience for travelers seeking a deep connection with nature. The hike follows an ancient Inca trail through high-Andean ecosystems, forests, native plants, and rivers. Along the way, we visit an enigmatic archaeological site before reaching the high-Andean community of Sutoc Paccha. Historically, this route was one of the most important Inca paths connecting the Andes with the jungle regions.",
    highlights: ["Camino inca ancestral", "Sitio arqueológico Inca Raqay", "Comunidad Sutoc Paccha", "Cascadas"],
    highlightsEn: ["Ancient Inca trail", "Inca Raqay archaeological site", "Sutoc Paccha community", "Waterfalls"],
    includes: [
      "Guía profesional",
      "Almuerzo tipo box lunch"
    ],
    includesEn: [
      "Professional guide",
      "Box lunch"
    ],
    notIncludes: [
      "Snacks personales",
      "Equipo personal de montaña",
      "Transporte desde su ubicación hasta Chupani (punto de inicio)"
    ],
    notIncludesEn: [
      "Personal snacks",
      "Personal mountain equipment",
      "Transportation from your location to Chupani (starting point)"
    ],
    requirements: [
      "Sombrero o gorra",
      "Bloqueador solar",
      "Botella de agua",
      "Dinero en efectivo",
      "DNI o Pasaporte",
      "Cámara fotográfica"
    ],
    requirementsEn: [
      "Sun hat or cap",
      "Sunscreen",
      "Water bottle",
      "Cash for souvenirs",
      "ID / Passport",
      "Camera"
    ],
    itinerary: [
      {
        day: 1,
        title: "Chupani – Inca Raqay – Sutoc Paccha – Cascadas – Chupani",
        titleEn: "Chupani – Inca Raqay – Sutoc Paccha – Waterfalls – Chupani",
        description: "08:00 AM – Recojo desde su alojamiento en el Valle Sagrado y traslado a Chupani. 09:00 AM – Inicio de la caminata, ascendiendo por el valle (aprox. 2 horas). 11:00 AM – Llegada al sitio arqueológico Inca Raqay y posterior caminata hacia Sutoc Paccha. Ofrenda andina tradicional con hojas de coca. 01:00 PM – Continuamos una hora más hasta las cascadas. Almuerzo y tiempo de descanso con vistas espectaculares. 02:30 PM – Inicio del descenso de retorno. 04:00 PM – Llegada a Chupani y traslado de retorno a su hotel.",
        descriptionEn: "08:00 AM – Pick-up from your accommodation in the Sacred Valley and transfer to Chupani. 09:00 AM – Start of the hike, ascending through the valley (approximately 2 hours). 11:00 AM – Arrival at Inca Raqay archaeological site, followed by a walk to Sutoc Paccha community. Traditional Andean offering with coca leaves. 01:00 PM – Continue one more hour to the waterfalls. Lunch and rest with spectacular views. 02:30 PM – Begin the descent. 04:00 PM – Arrival in Chupani. Transfer back to your hotel.",
        highlights: ["Inca Raqay", "Sutoc Paccha", "Cascadas"],
        highlightsEn: ["Inca Raqay", "Sutoc Paccha", "Waterfalls"],
        meals: "Almuerzo",
        mealsEn: "Lunch",
        accommodation: "N/A",
        accommodationEn: "N/A"
      }
    ],
    gallery: [
      { id: 1, type: "image", title: "Valle de Pumawanka", url: "/images/montanias.jpg" }
    ]
  },

  // RUTAS - Ausangate Trek 3D2N (Seven Lakes)
  {
    id: "ausangate-trek-3d2n",
    category: "rutas",
    name: "Trek Ausangate – Siete Lagunas",
    nameEn: "Ausangate Trek – Seven Lakes",
    heroImage: "/images/ausangate-trek/IMG_8942.jpg",
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
      { id: 1, type: "image", title: "Nevado Ausangate", url: "/images/ausangate-trek/IMG_8942.jpg" },
      { id: 2, type: "image", title: "Laguna glaciar", url: "/images/ausangate-trek/IMG_8938.jpg" },
      { id: 3, type: "image", title: "Siete Lagunas", url: "/images/ausangate-trek/IMG_8960.jpg" },
      { id: 4, type: "image", title: "Vista panorámica", url: "/images/ausangate-trek/IMG_8971.jpg" },
      { id: 5, type: "image", title: "Laguna turquesa", url: "/images/ausangate-trek/IMG_8952.jpg" },
      { id: 6, type: "image", title: "Paisaje andino", url: "/images/ausangate-trek/IMG_8970.jpg" },
      { id: 7, type: "image", title: "Amanecer en Ausangate", url: "/images/ausangate-trek/IMG_8937.jpg" },
      { id: 8, type: "image", title: "Montaña de colores", url: "/images/ausangate-trek/IMG_3172.jpg" },
      { id: 9, type: "image", title: "Caminata por el valle", url: "/images/ausangate-trek/IMG_3130.jpg" },
      { id: 10, type: "image", title: "Paisaje de alta montaña", url: "/images/ausangate-trek/IMG_3148.jpg" },
      { id: 11, type: "image", title: "Sendero del Ausangate", url: "/images/ausangate-trek/IMG_3159.jpg" },
      { id: 12, type: "image", title: "Valle glaciar", url: "/images/ausangate-trek/IMG_3200.jpg" },
      { id: 13, type: "image", title: "Comunidad Pacchanta", url: "/images/ausangate-trek/IMG_8550.jpg" },
      { id: 14, type: "image", title: "Laguna cristalina", url: "/images/ausangate-trek/IMG_8523.jpg" },
      { id: 15, type: "image", title: "Reflejos en la laguna", url: "/images/ausangate-trek/IMG_8544.jpg" },
      { id: 16, type: "image", title: "Atardecer andino", url: "/images/ausangate-trek/IMG_8788.jpg" },
      { id: 17, type: "image", title: "Fauna local", url: "/images/ausangate-trek/IMG_8798.jpg" },
      { id: 18, type: "image", title: "Paisaje místico", url: "/images/ausangate-trek/IMG_9123-2.jpg" }
    ]
  },

  // RUTAS - Lares Trek 3D2N
  {
    id: "lares-trek-3d2n",
    category: "rutas",
    name: "Lares Trek",
    nameEn: "Lares Trek",
    heroImage: "/images/lares-trek/IMG_3449.jpg",
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
      { id: 1, type: "image", title: "Laguna Yanaqocha", url: "/images/lares-trek/IMG_3461.jpg" },
      { id: 2, type: "image", title: "Paso de montaña", url: "/images/lares-trek/IMG_3450.jpg" },
      { id: 3, type: "image", title: "Vista panorámica", url: "/images/lares-trek/IMG_3449.jpg" },
      { id: 4, type: "image", title: "Bosque altoandino", url: "/images/lares-trek/IMG_3482.jpg" },
      { id: 5, type: "image", title: "Valle del Lares", url: "/images/lares-trek/IMG_3487.jpg" },
      { id: 6, type: "image", title: "Comunidad Cancha Cancha", url: "/images/lares-trek/IMG_3347.jpg" },
      { id: 7, type: "image", title: "Comunidad Quishuarani", url: "/images/lares-trek/IMG_3349.jpg" },
      { id: 8, type: "image", title: "Caminata por el sendero", url: "/images/lares-trek/IMG_3441.jpg" },
      { id: 9, type: "image", title: "Textiles tradicionales", url: "/images/lares-trek/IMG_3312.jpg" },
      { id: 10, type: "image", title: "Tejedoras andinas", url: "/images/lares-trek/IMG_3118.jpg" },
      { id: 11, type: "image", title: "Familia local", url: "/images/lares-trek/IMG_7274.jpg" },
      { id: 12, type: "image", title: "Artesanía textil", url: "/images/lares-trek/IMG_7271.jpg" },
      { id: 13, type: "image", title: "Comunidad andina", url: "/images/lares-trek/IMG_7303.jpg" },
      { id: 14, type: "image", title: "Tradiciones vivas", url: "/images/lares-trek/IMG_7327.jpg" },
      { id: 15, type: "image", title: "Cultura local", url: "/images/lares-trek/IMG_7334.jpg" },
      { id: 16, type: "image", title: "Encuentro comunitario", url: "/images/lares-trek/IMG_7337.jpg" },
      { id: 17, type: "image", title: "Paisaje montañoso", url: "/images/lares-trek/IMG_0008.jpg" },
      { id: 18, type: "image", title: "Trekking andino", url: "/images/lares-trek/IMG_0177.jpg" },
      { id: 19, type: "image", title: "Sendero del Lares", url: "/images/lares-trek/IMG_0211-2.jpg" },
      { id: 20, type: "image", title: "Vista del valle", url: "/images/lares-trek/IMG_0276.jpg" },
      { id: 21, type: "image", title: "Naturaleza andina", url: "/images/lares-trek/IMG_1768.jpg" },
      { id: 22, type: "image", title: "Flora local", url: "/images/lares-trek/IMG_1770.jpg" },
      { id: 23, type: "image", title: "Paisaje verde", url: "/images/lares-trek/IMG_1772.jpg" },
      { id: 24, type: "image", title: "Montañas del Lares", url: "/images/lares-trek/IMG_1783.jpg" },
      { id: 25, type: "image", title: "Camino ancestral", url: "/images/lares-trek/IMG_3092.jpg" },
      { id: 26, type: "image", title: "Tejido en proceso", url: "/images/lares-trek/IMG_3123-2.jpg" },
      { id: 27, type: "image", title: "Colores andinos", url: "/images/lares-trek/IMG_3295-2.jpg" },
      { id: 28, type: "image", title: "Telar tradicional", url: "/images/lares-trek/IMG_3340-3.jpg" },
      { id: 29, type: "image", title: "Caminata grupal", url: "/images/lares-trek/IMG_3385.jpg" },
      { id: 30, type: "image", title: "Descanso en ruta", url: "/images/lares-trek/IMG_3392-2.jpg" },
      { id: 31, type: "image", title: "Sendero de montaña", url: "/images/lares-trek/IMG_3409.jpg" },
      { id: 32, type: "image", title: "Vista elevada", url: "/images/lares-trek/IMG_3420.jpg" },
      { id: 33, type: "image", title: "Campamento base", url: "/images/lares-trek/IMG_3424.jpg" },
      { id: 34, type: "image", title: "Atardecer en Lares", url: "/images/lares-trek/IMG_3465.jpg" },
      { id: 35, type: "image", title: "Refugio andino", url: "/images/lares-trek/IMG_3468.jpg" },
      { id: 36, type: "image", title: "Momento de descanso", url: "/images/lares-trek/IMG_3492.jpg" },
      { id: 37, type: "image", title: "Laguna escondida", url: "/images/lares-trek/IMG_3499-2.jpg" },
      { id: 38, type: "image", title: "Reflejo en el agua", url: "/images/lares-trek/IMG_3499.jpg" },
      { id: 39, type: "image", title: "Aventura en grupo", url: "/images/lares-trek/IMG_4668.jpg" },
      { id: 40, type: "image", title: "Experiencia única", url: "/images/lares-trek/IMG_8864.jpg" },
      { id: 41, type: "image", title: "Recuerdos del Lares", url: "/images/lares-trek/IMG_8867.jpg" },
      { id: 42, type: "image", title: "Final del trek", url: "/images/lares-trek/IMG_5025.jpg" }
    ]
  },

  // RUTAS - Selva del Manu 5D4N
  {
    id: "manu-rainforest-5d4n",
    category: "rutas",
    name: "Selva del Manu",
    nameEn: "Manu Rainforest",
    heroImage: "/images/manu.jpg",
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
