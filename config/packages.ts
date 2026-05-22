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
  id: string;
  type: "image" | "video";
  url?: string;
}

export interface Package {
  id: string;
  categories: ActivityCategory[];
  name: string;
  nameEn: string;
  /**
   * Optional explicit hero image for this package.
   * If provided, it will be used in ActivityHero and package cards
   * before falling back to the first gallery image or category defaults.
   */
  heroImage?: string;
  /**
   * Optional CSS object-position for the hero image.
   * e.g., "center 25%" or "top center".
   */
  heroImagePosition?: string;
  tagline: string;
  taglineEn: string;
  duration: string;
  durationEn?: string;
  difficulty?: string;
  difficultyEn?: string;
  maxPeople?: string;
  elevation?: string;
  elevationEn?: string;
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
  // RUTAS - Cancha Cancha Full Day
  {
    id: "cancha-cancha",
    categories: ["comunidad", "rutas"],
    name: "Cancha Cancha",
    nameEn: "Cancha Cancha",
    heroImage: "/images/cancha-cancha/cancha-cancha-hero.jpg",
    tagline: "Caminata y Encuentro con una Comunidad Altoandina",
    taglineEn: "Hike and encounter with a high Andean community",
    duration: "Día completo",
    durationEn: "Full day",
    difficulty: "Moderado",
    difficultyEn: "Moderate",
    elevation: "3,200 m.s.n.m. - 4,000 m.s.n.m.",
    elevationEn: "3,200 m.a.s.l. - 4,000 m.a.s.l.",
    bestSeason: "",
    bestSeasonEn: "",
    price: 400,
    description: "Esta caminata de día completo se realiza en el valle de Huaran, dentro de la cordillera del Urubamba. El recorrido ofrece paisajes naturales, flora nativa y ecosistemas altoandinos. La experiencia culmina en la comunidad altoandina de Cancha Cancha, donde una familia local recibe a los visitantes para compartir un almuerzo tradicional y conocer su forma de vida, agricultura, ganadería y textiles ancestrales.",
    descriptionEn: "This full-day trek takes place in the Huaran Valley, located in the Urubamba mountain range. The route offers scenic landscapes with native plants, high-Andean ecosystems, and traditional rural life. The experience culminates in the high Andean community of Cancha Cancha, where visitors are welcomed by a local family to share a traditional lunch and learn about daily life, agriculture, livestock, and traditional textiles.",
    highlights: ["Comunidad Cancha Cancha", "Almuerzo tradicional", "Textiles ancestrales", "Ecosistemas altoandinos"],
    highlightsEn: [
      "Cancha Cancha community",
      "Traditional lunch",
      "Ancestral textiles",
      "High-Andean ecosystems"
    ],
    includes: [
      "Transporte ida y retorno desde el punto de encuentro",
      "Guía",
      "Snack",
      "Almuerzo local tradicional",
      "Experiencia cultural con familia local"
    ],
    includesEn: [
      "Round-trip transportation from the meeting point",
      "Guide",
      "Snack",
      "Traditional local lunch",
      "Cultural experience with a local family"
    ],
    notIncludes: [
      "Transporte al punto de encuentro",
      "Gastos personales",
      "Equipo personal de montaña (Bastón, Sleeping, Aislante) (Bastones, calzado, cobertor de lluvia)"
    ],
    notIncludesEn: [
      "Transportation to the meeting point",
      "Personal expenses",
      "Equipo personal de montaña (Bastón, Sleeping, Aislante) (Bastones, calzado, cobertor de lluvia)"
    ],
    requirements: [
      "Sombrero o gorra",
      "Bloqueador solar",
      "Botella de agua",
      "Dinero en efectivo",
      "DNI o Pasaporte",
      "Cámara fotográfica",
      "Ropa para Lluvia",
      "Bastones de Trekking"
    ],
    requirementsEn: [
      "Hat or cap",
      "Sunscreen",
      "Water bottle",
      "Cash",
      "ID or Passport",
      "Camera",
      "Rain gear",
      "Trekking poles"
    ],
    itinerary: [
      {
        day: 1,
        title: "Valle Sagrado – Cancha Cancha – Valle Sagrado",
        titleEn: "Sacred Valley – Cancha Cancha – Sacred Valley",
        description: "07:15 AM – Partimos de Urubamba en transporte privado en dirección a Huarán (Saywapata) (3,200 m.s.n.m.). 08:30 AM – Inicio de la caminata. Ascenso aproximado de 3 horas. 11:30 AM – Llegada a la comunidad de Cancha Cancha. Recepción y almuerzo tradicional. 02:00 PM – Caminata de retorno a Saywapata (aprox. 2 horas en descenso). 04:30 PM – Traslado de retorno a Urubamba.",
        descriptionEn: "07:15 AM – We depart from Urubamba by private transport towards Huarán (Saywapata) (3,200 m.a.s.l.). 08:30 AM – Start of the hike. Approx. 3-hour ascent. 11:30 AM – Arrival at Cancha Cancha community. Welcome and traditional lunch. 02:00 PM – Return hike to Saywapata (approx. 2 hours downhill). 04:30 PM – Transfer back to Urubamba.",
        highlights: ["Cancha Cancha", "Almuerzo tradicional"],
        highlightsEn: [
      "Cancha Cancha",
      "Traditional lunch"
    ],
        meals: "Almuerzo",
        mealsEn: "Lunch",
        accommodation: "",
        accommodationEn: "",
      }
    ],
    gallery: [
      { id: "8eeojk39", type: "image", url: "/images/cancha-cancha/cancha-cancha-gallery-1.jpg" },
      { id: "9cssu3ua", type: "image", url: "/images/cancha-cancha/cancha-cancha-gallery-2.jpg" },
      { id: "f6e6ebc7", type: "image", url: "/images/cancha-cancha/cancha-cancha-gallery-3.jpg" },
      { id: "0fqtldv4", type: "image", url: "/images/cancha-cancha/cancha-cancha-gallery-4.jpg" },
      { id: "l1x41bkd", type: "image", url: "/images/cancha-cancha/cancha-cancha-gallery-5.jpg" },
      { id: "7tig1v5x", type: "image", url: "/images/cancha-cancha/cancha-cancha-gallery-6.jpg" },
      { id: "u8wxyko6", type: "image", url: "/images/cancha-cancha/cancha-cancha-gallery-7.jpg" },
      { id: "ds7iwwbp", type: "image", url: "/images/cancha-cancha/cancha-cancha-gallery-8.jpg" },
      { id: "wmpsz7ey", type: "image", url: "/images/cancha-cancha/cancha-cancha-gallery-9.jpg" },
      { id: "0a0tqu2z", type: "image", url: "/images/cancha-cancha/cancha-cancha-gallery-10.jpg" },
      { id: "hoebm8rq", type: "image", url: "/images/cancha-cancha/cancha-cancha-gallery-11.jpg" },
      { id: "34pihb95", type: "image", url: "/images/cancha-cancha/cancha-cancha-gallery-12.jpg" },
      { id: "s3uh31dx", type: "image", url: "/images/cancha-cancha/cancha-cancha-gallery-13.jpg" },
    ]
  },

  // RUTAS - Inti Punku Full Day
  {
    id: "inti-punku",
    categories: ["rutas"],
    name: "Inti Punku",
    nameEn: "Inti Punku",
    heroImage: "/images/inti-punku/inti-punku-hero.jpg",
    tagline: "Camina hacia el portal sagrado de los incas",
    taglineEn: "Hike to the sacred Inca portal",
    duration: "Día completo",
    durationEn: "Full day",
    difficulty: "Moderado a Desafiante",
    difficultyEn: "Moderate to Challenging",
    elevation: "3000 m.s.n.m. - 3900 m.s.n.m.",
    elevationEn: "3000 m.a.s.l. - 3900 m.a.s.l.",
    bestSeason: "",
    bestSeasonEn: "",
    price: 400,
    description: "Esta caminata de día completo se realiza en los alrededores del histórico pueblo inca de Ollantaytambo. Un transporte nos lleva hasta la comunidad andina de Cacchicata, punto de inicio de la caminata. El recorrido incluye aproximadamente cuatro horas de ascenso a través de paisajes con flora y fauna nativa. La caminata conduce a un sitio arqueológico enigmático y culmina en Inti Punku, conocido por los incas como la Puerta del Sol, un portal sagrado con una de las mejores vistas del Valle Sagrado, el río Wilkamayu y la montaña sagrada Apu Waqay Willka (Apu Verónica).",
    descriptionEn: "This full-day hike takes place just outside the historic Inca town of Ollantaytambo. Transportation takes us to the Andean community of Cacchicata, where the trek begins. The route includes approximately four hours of ascent through landscapes rich in native flora and fauna. The hike leads to an enigmatic archaeological site and culminates at Inti Punku, known by the Incas as the Sun Gate — a sacred portal offering one of the most impressive panoramic views of the Sacred Valley, the Wilkamayu River, and the sacred mountain Apu Waqay Willka (Apu Veronica).",
    highlights: ["Comunidad de Cacchicata", "Puerta del Sol (Inti Punku)", "Vistas del Apu Waqay Willka", "Canteras Incas"],
    highlightsEn: [
      "Cacchicata Community",
      "Sun Gate (Inti Punku)",
      "Views of Apu Waqay Willka",
      "Inca Quarries"
    ],
    includes: [
      "Transporte ida y retorno desde el punto de encuentro",
      "Guía",
      "Snack",
      "Interpretación cultural e histórica"
    ],
    includesEn: [
      "Round-trip transportation from the meeting point",
      "Guide",
      "Snack",
      "Cultural and historical interpretation"
    ],
    notIncludes: [
      "Transporte al punto de encuentro",
      "Gastos personales",
      "Equipo personal de montaña (Bastón, Sleeping, Aislante) (Bastones, calzado, cobertor de lluvia)"
    ],
    notIncludesEn: [
      "Transportation to the meeting point",
      "Personal expenses",
      "Equipo personal de montaña (Bastón, Sleeping, Aislante) (Bastones, calzado, cobertor de lluvia)"
    ],
    requirements: [
      "Sombrero o gorra",
      "Bloqueador solar",
      "Botella de agua",
      "Dinero en efectivo",
      "DNI o Pasaporte",
      "Cámara fotográfica",
      "Ropa para Lluvia",
      "Mochila pequeña para caminatas",
      "Bastones de Trekking"
    ],
    requirementsEn: [
      "Hat or cap",
      "Sunscreen",
      "Water bottle",
      "Cash",
      "ID or Passport",
      "Camera",
      "Rain gear",
      "Small backpack for hikes",
      "Trekking poles"
    ],
    itinerary: [
      {
        day: 1,
        title: "Ollantaytambo– Cacchicata – Inti Punku",
        titleEn: "Ollantaytamboy – Cacchicata – Inti Punku",
        description: "06:30 AM – Partimos de Urubamba en transporte privado y nos trasladamos a la comunidad de Cacchicata (Ollantaytambo). 08:00 AM – Inicio de la caminata. Ascenso de aproximadamente 3 a 4 horas. 12:00 PM – Llegada a Inti Punku. Tiempo de descanso, apreciación del paisaje y refrigerio. 02:00 PM – Inicio del descenso, visitando las antiguas canteras incas de Cacchicata. 04:00 PM – Fin de la caminata y retorno a Urubamba.",
        descriptionEn: "06:30 AM – We depart from Urubamba by private transport and transfer to the community of Cacchicata (Ollantaytambo). 08:00 AM – Start of the hike. Ascent of approximately 3 to 4 hours. 12:00 PM – Arrival at Inti Punku. Time to rest, enjoy the landscape and have a snack. 02:00 PM – Start of the descent, passing by the ancient Inca quarries of Cacchicata. 04:00 PM – End of the hike and return to Urubamba.",
        highlights: ["Inti Punku", "Canteras Incas", "Ofrenda de hojas de coca"],
        highlightsEn: [
      "Inti Punku",
      "Inca Quarries",
      "Coca leaf offering"
    ],
        meals: "Almuerzo",
        mealsEn: "Lunch",
        accommodation: "",
        accommodationEn: ""
      }
    ],
    gallery: [
      { id: "jxpkz2hk", type: "image", url: "/images/inti-punku/inti-punku-gallery-1.jpg" },
      { id: "8nlfcszx", type: "image", url: "/images/inti-punku/inti-punku-gallery-2.jpg" },
      { id: "1qz9928b", type: "image", url: "/images/inti-punku/inti-punku-gallery-3.jpg" },
      { id: "bdxgk5y8", type: "image", url: "/images/inti-punku/inti-punku-gallery-4.jpg" },
      { id: "5m8swlmc", type: "image", url: "/images/inti-punku/inti-punku-gallery-5.jpg" },
      { id: "a1rur5g2", type: "image", url: "/images/inti-punku/inti-punku-gallery-6.jpg" },
    ]
  },

  // RUTAS - Naupa Waka Half Day
  {
    id: "naupa-waka",
    categories: ["rutas"],
    name: "Ñaupa Waka",
    nameEn: "Ñaupa Waka",
    heroImage: "/images/naupa-waka/naupa-waka-hero.jpg",
    tagline: "Centro ceremonial Inca",
    taglineEn: "Inca ceremonial center",
    duration: "Medio día",
    durationEn: "Half day",
    difficulty: "Fácil",
    difficultyEn: "Easy",
    elevation: "2800 m.s.n.m.",
    elevationEn: "2800 m.a.s.l.",
    bestSeason: "",
    bestSeasonEn: "",
    price: 230,
    description: "Esta experiencia de medio día se desarrolla en el Valle Sagrado de los Incas, cerca del pueblo de Pacchar, ubicado antes de Ollantaytambo. El recorrido conduce a un extraordinario sitio ceremonial inca oculto en la montaña. Tras una corta caminata en ascenso se llega a Ñaupa Waka, un oráculo sagrado al exterior de una cueva, utilizado como centro ceremonial y observatorio estelar de piedra, tallado con formas geométricas relacionadas con la Chakana inca, símbolo de gran importancia espiritual. En el interior de la cueva encontraremos un nicho tallado en forma geométrica, en el cual realizaremos una ofrenda. Es un lugar único y especial, ideal para quienes buscan una conexión profunda con la cultura andina.",
    descriptionEn: "This half-day experience takes place in the Sacred Valley of the Incas, near the town of Pacchar, located before Ollantaytambo. The journey leads to an extraordinary Inca ceremonial site hidden within the mountain. After a short uphill walk, we reach Ñaupa Waka, a sacred oracle outside a cave, used as a ceremonial center and stellar stone observatory, carved with geometric shapes related to the Inca Chakana, a symbol of great spiritual importance. Inside the cave, we will find a geometrically carved niche where we will make an offering. This is a unique and special place, ideal for travelers seeking a deep cultural and spiritual connection.",
    highlights: ["Nicho de piedra tallado", "Observatorio estelar Inca", "Ofrenda de hojas de coca", "Chichería tradicional"],
    highlightsEn: [
      "Carved stone niche",
      "Inca stellar observatory",
      "Coca leaf offering",
      "Traditional Chichería"
    ],
    includes: [
      "Transporte ida y retorno desde el punto de encuentro",
      "Guía e interpretación",
      "Ofrenda andina tradicional",
      "Bebida tradicional",
      "Snack"
    ],
    includesEn: [
      "Round-trip transportation from the meeting point",
      "Guía e interpretación",
      "Ofrenda andina tradicional",
      "Traditional beverage",
      "Snack"
    ],
    notIncludes: [
      "Transporte al punto de encuentro",
      "Bastones de Trekking",
      "Gastos personales"
    ],
    notIncludesEn: [
      "Transportation to the meeting point",
      "Trekking poles",
      "Personal expenses"
    ],
    requirements: [
      "Sombrero o gorra",
      "Bloqueador",
      "Cámara fotográfica",
      "Botella de agua",
      "Bastones de Trekking"
    ],
    requirementsEn: [
      "Hat or cap",
      "Sunscreen",
      "Camera",
      "Water bottle",
      "Trekking poles"
    ],
    itinerary: [
      {
        day: 1,
        title: "Valle Sagrado – Pacchar – Ñaupa Waka",
        titleEn: "Sacred Valley – Pacchar – Ñaupa Waka",
        description: "08:30 AM – Partimos de Urubamba en transporte privado al pueblo de Pacchar. 09:30 AM – Llegada al punto de inicio y caminata corta de 25–30 minutos en ascenso hacia las terrazas incas y el templo. 10:00 AM – Visita al templo sagrado de Ñaupa Waka. Ofrenda andina tradicional con hojas de coca, acompañada de música intuitiva para conectar con el lugar. Tiempo libre para recorrer y disfrutar del sitio. 11:45 AM – Descenso hacia Pacchar y visita a una Chichería Tradicional, donde se puede disfrutar de una bebida de Chicha de Jora tradicional y comida local (opcional). 01:00 PM – Retorno al punto de inicio.",
        descriptionEn: "08:30 AM – Pick-up from your hotel in the Sacred Valley and transfer to the town of Pacchar (approx. 45 minutes). 09:30 AM – Arrival at the starting point. Short uphill walk of approximately 25–30 minutes towards the Inca terraces and temple. 10:00 AM – Visit to the sacred temple of Ñaupa Waka. Traditional Andean offering using coca leaves, accompanied by intuitive music to connect with the place. Free time to explore and enjoy the site (approx. 2 hours). 12:00 PM – Descent back to Pacchar and visit to the Sacred Valley Brewery, where you can enjoy handmade beer and local food (optional). 01:00 PM – Private transport back to your hotel.",
        highlights: ["Ñaupa Waka", "Ofrenda de hojas de coca"],
        highlightsEn: [
      "Ñaupa Waka",
      "Coca leaf offering"
    ],
        meals: "Snack",
        mealsEn: "Snack",
        accommodation: "",
        accommodationEn: ""
      }
    ],
    gallery: [
      { id: "iwyq5upe", type: "image", url: "/images/naupa-waka/naupa-waka-gallery-1.jpg" },
      { id: "0hh0jb13", type: "image", url: "/images/naupa-waka/naupa-waka-gallery-2.jpg" },
      { id: "5ens8142", type: "image", url: "/images/naupa-waka/naupa-waka-gallery-3.jpg" },
      { id: "fvz1gf5z", type: "image", url: "/images/naupa-waka/naupa-waka-gallery-4.jpg" },
      { id: "w7myu03d", type: "image", url: "/images/naupa-waka/naupa-waka-gallery-5.jpg" },
      { id: "c1mtrq6i", type: "image", url: "/images/naupa-waka/naupa-waka-gallery-6.jpg" },
    ]
  },

  // RUTAS - Pumamarca Full Day
  {
    id: "pumamarca",
    categories: ["rutas"],
    name: "Pumamarca",
    nameEn: "Pumamarca",
    heroImage: "/images/pumamarca/pumamarca-hero.jpg",
    tagline: "Explora un sitio preinca con vistas impresionantes",
    taglineEn: "Explore a pre-Inca site with stunning views",
    duration: "Día completo",
    durationEn: "Full day",
    difficulty: "Moderado",
    difficultyEn: "Moderate",
    elevation: "3600 m.s.n.m.",
    elevationEn: "3600 m.a.s.l.",
    bestSeason: "",
    bestSeasonEn: "",
    price: 400,
    description: "Esta hermosa caminata de día completo se realiza en los alrededores del histórico pueblo de Ollantaytambo. El recorrido atraviesa un valle con gran diversidad de plantas nativas, riachuelos y antiguos sistemas de terrazas agrícolas. La caminata inicia en Munaypata, una pequeña comunidad andina ubicada a unos 10 minutos de Ollantaytambo. Tras un ascenso gradual de aproximadamente tres horas, se llega al sitio arqueológico preinca de Pumamarca, donde es posible apreciar la magnitud de su construcción, su ubicación estratégica y su notable ingeniería, todo ello acompañado de vistas impresionantes de los valles y montañas circundantes.",
    descriptionEn: "This beautiful full-day hike takes place on the outskirts of the historic town of Ollantaytambo. The route crosses a scenic valley rich in native plants, streams, and ancient agricultural terrace systems. The hike begins in Munaypata, a small Andean community located approximately 10 minutes from Ollantaytambo. After a gradual ascent of about three hours, we reach the pre-Inca archaeological site of Pumamarca, where visitors can appreciate its impressive architecture, strategic location, and advanced engineering, all surrounded by spectacular views of the surrounding valleys and mountains.",
    highlights: ["Comunidad de Munaypata", "Sitio arqueológico de Pumamarca", "Sistema de Andenería Incaica y Pre-Incas", "Vistas del Valle Sagrado"],
    highlightsEn: [
      "Munaypata community",
      "Pumamarca archaeological site",
      "Inca and Pre-Inca terraces system",
      "Sacred Valley views"
    ],
    includes: [
      "Transporte ida y retorno desde el punto de encuentro",
      "Guía",
      "Snack",
      "Boleto de ingreso al sitio arqueológico"
    ],
    includesEn: [
      "Round-trip transportation from the meeting point",
      "Guide",
      "Snack",
      "Entrance ticket to the archaeological site"
    ],
    notIncludes: [
      "Transporte al punto de encuentro",
      "Gastos personales",
      "Equipo personal de montaña (Bastón, Sleeping, Aislante) (Bastones, calzado, cobertor de lluvia)"
    ],
    notIncludesEn: [
      "Transportation to the meeting point",
      "Personal expenses",
      "Equipo personal de montaña (Bastón, Sleeping, Aislante) (Bastones, calzado, cobertor de lluvia)"
    ],
    requirements: [
      "Sombrero o gorra",
      "Bloqueador solar",
      "Botella de agua",
      "Dinero en efectivo",
      "DNI o Pasaporte",
      "Cámara fotográfica",
      "Ropa para Lluvia",
      "Mochila pequeña para caminatas",
      "Bastones de Trekking"
    ],
    requirementsEn: [
      "Hat or cap",
      "Sunscreen",
      "Water bottle",
      "Cash",
      "ID or Passport",
      "Camera",
      "Rain gear",
      "Small backpack for hikes",
      "Trekking poles"
    ],
    itinerary: [
      {
        day: 1,
        title: "Valle Sagrado – Munaypata – Pumamarca",
        titleEn: "Sacred Valley – Munaypata – Pumamarca",
        description: "07:00 AM – Partimos de Urubamba en transporte privado y nos trasladamos al punto de inicio en Munaypata, Ollantaytambo. 08:30 AM – Inicio de la caminata. Durante el ascenso se observan antiguas andenerías incas y flora y fauna de la región, junto a paisajes impresionantes. 11:30 AM – Llegada al sitio arqueológico de Pumamarca. Tiempo para descansar, recorrer el complejo preinca, disfrutar de las vistas panorámicas, realizar una ofrenda con hojas de coca y disfrutar de un refrigerio. 01:30 PM – Inicio de la caminata de retorno hacia Munaypata (aprox. 2:30 horas). 04:00 PM – Llegada a Ollantaytambo y traslado de retorno a Urubamba.",
        descriptionEn: "07:00 AM – We depart from Urubamba by private transport and transfer to the starting point in Munaypata, Ollantaytambo. 08:30 AM – Start of the hike. During the ascent, we observe ancient Inca terraces, local flora and fauna, and stunning landscapes. 11:30 AM – Arrival at the archaeological site of Pumamarca. Time to rest, explore the pre-Inca ruins, enjoy panoramic views, make a coca leaf offering, and have a snack. 01:30 PM – Start of the return hike to Munaypata (approx. 2.5 hours). 04:00 PM – Arrival in Ollantaytambo and return transfer to Urubamba.",
        highlights: ["Sitio Pumamarca", "Vistas panorámicas"],
        highlightsEn: [
      "Pumamarca site",
      "Panoramic views"
    ],
        meals: "Snack",
        mealsEn: "Lunch",
        accommodation: "",
        accommodationEn: ""
      }
    ],
    gallery: [
      { id: "vaijgdc3", type: "image", url: "/images/pumamarca/pumamarca-gallery-1.jpg" },
      { id: "y3h34reg", type: "image", url: "/images/pumamarca/pumamarca-gallery-2.jpg" },
      { id: "lscht4o0", type: "image", url: "/images/pumamarca/pumamarca-gallery-3.jpg" },
      { id: "g39qstxs", type: "image", url: "/images/pumamarca/pumamarca-gallery-4.jpg" },
      { id: "alrdh6my", type: "image", url: "/images/pumamarca/pumamarca-gallery-5.jpg" },
      { id: "dmzwpp6s", type: "image", url: "/images/pumamarca/pumamarca-gallery-6.jpg" },
      { id: "nwm8qfo6", type: "image", url: "/images/pumamarca/pumamarca-gallery-7.jpg" },
      { id: "38j0lzx8", type: "image", url: "/images/pumamarca/pumamarca-gallery-8.jpg" },
      { id: "knxtyco1", type: "image", url: "/images/pumamarca/pumamarca-gallery-9.jpg" },
      { id: "vdqge3pe", type: "image", url: "/images/pumamarca/pumamarca-gallery-10.jpg" },
      { id: "5hcowdba", type: "image", url: "/images/pumamarca/pumamarca-gallery-11.jpg" },
    ]
  },

  // RUTAS - Pumawanka Full Day
  {
    id: "pumawanka",
    categories: ["rutas"],
    name: "Pumawanka",
    nameEn: "Pumawanka",
    heroImage: "/images/pumawanka/pumawanka-hero.jpg",
    tagline: "Camino Inca  entre los Andes y la selva",
    taglineEn: "Ancient Inca trail connecting the Andes to the jungle",
    duration: "Día completo",
    durationEn: "Full day",
    difficulty: "Moderado a Fácil",
    difficultyEn: "Moderate to Easy",
    elevation: "3150. m.s.n.m. - 3700 m.s.n.m.",
    elevationEn: "3150. m.a.s.l. - 3700 m.a.s.l.",
    bestSeason: "",
    bestSeasonEn: "",
    price: 330,
    description: "Esta hermosa caminata de día completo se realiza en el valle de Pumawanka, ubicado en la cordillera del Urubamba. Es una experiencia ideal para quienes buscan una conexión profunda con la naturaleza. La ruta sigue un antiguo camino inca a través de ecosistemas altoandinos, bosques, plantas nativas y ríos. Durante el recorrido se visita un sitio arqueológico enigmático antes de llegar a la comunidad altoandina de Sutoc Paccha. Históricamente, este camino fue una de las rutas más importantes del Imperio Inca, conectando los Andes con la Selva.",
    descriptionEn: "This beautiful full-day trek takes place in the Pumawanka Valley, located within the Urubamba mountain range. It is an ideal experience for travelers seeking a deep connection with nature. The hike follows an ancient Inca trail through high-Andean ecosystems, forests, native plants, and rivers. Along the way, we visit an enigmatic archaeological site before reaching the high-Andean community of Sutoc Paccha. Historically, this route was one of the most important Inca paths connecting the Andes with the jungle regions.",
    highlights: ["Camino inca ancestral", "Sitio arqueológico Inca Raqay", "Comunidad Sutoc Paccha", "Cascadas"],
    highlightsEn: [
      "Ancient Inca trail",
      "Inca Raqay archaeological site",
      "Sutoc Paccha community",
      "Waterfalls"
    ],
    includes: [
      "Transporte ida y retorno desde el punto de encuentro",
      "Guía",
      "Snack",
      "Ingreso a Comunidad"
    ],
    includesEn: [
      "Round-trip transportation from the meeting point",
      "Guide",
      "Snack",
      "Community Entrance"
    ],
    notIncludes: [
      "Transporte al punto de encuentro",
      "Gastos personales",
      "Equipo personal de montaña (Bastón, Sleeping, Aislante) (Bastones, calzado, cobertor de lluvia)"
    ],
    notIncludesEn: [
      "Transportation to the meeting point",
      "Personal expenses",
      "Equipo personal de montaña (Bastón, Sleeping, Aislante) (Bastones, calzado, cobertor de lluvia)"
    ],
    requirements: [
      "Sombrero o gorra",
      "Bloqueador solar",
      "Botella de agua",
      "Dinero en efectivo",
      "DNI o Pasaporte",
      "Cámara fotográfica",
      "Bastones de Trekking"
    ],
    requirementsEn: [
      "Hat or cap",
      "Sunscreen",
      "Water bottle",
      "Cash",
      "ID or Passport",
      "Camera",
      "Trekking poles"
    ],
    itinerary: [
      {
        day: 1,
        title: "Chupani – Inca Raqay – Sutoc Paccha – Cascadas – Chupani",
        titleEn: "Chupani – Inca Raqay – Sutoc Paccha – Waterfalls – Chupani",
        description: "08:00 AM – Partimos de Urubamba en transporte privado  y traslado a Chupani. 09:00 AM – Inicio de la caminata, ascendiendo por la Quebrada de Pumawanka (aprox. 2 horas). 11:00 AM – Llegada al sitio arqueológico Inca Raqay y posterior caminata hacia la comunidad alto andina Sutoc Paccha. Ofrenda tradicional con hojas de coca. 01:00 PM – Continuamos una hora más caminando hasta las cascadas. Snack y tiempo de descanso con vistas espectaculares. 02:30 PM – Inicio del descenso de retorno. 04:00 PM – Llegada a Chupani y traslado de retorno a Urubamba.",
        descriptionEn: "08:00 AM – We depart from Urubamba by private transport and transfer to Chupani. 09:00 AM – Start of the hike, ascending through the Pumawanka Ravine (approx. 2 hours). 11:00 AM – Arrival at Inca Raqay archaeological site, followed by a walk to the high-Andean community of Sutoc Paccha. Traditional offering with coca leaves. 01:00 PM – Continue walking for one more hour to the waterfalls. Snack and rest time with spectacular views. 02:30 PM – Begin the return descent. 04:00 PM – Arrival in Chupani and transfer back to Urubamba.",
        highlights: ["Inca Raqay", "Sutoc Paccha", "Cascadas"],
        highlightsEn: [
      "Inca Raqay",
      "Sutoc Paccha",
      "Waterfalls"
    ],
        meals: "Snack",
        mealsEn: "Box Lunch",
        accommodation: "",
        accommodationEn: ""
      }
    ],
    gallery: [
      { id: "kwcz88qm", type: "image", url: "/images/pumawanka/pumawanka-gallery-1.jpg" },
      { id: "e06j0vdo", type: "image", url: "/images/pumawanka/pumawanka-gallery-2.jpg" },
      { id: "2ofcdq93", type: "image", url: "/images/pumawanka/pumawanka-gallery-3.jpg" },
      { id: "svovt5ri", type: "image", url: "/images/pumawanka/pumawanka-gallery-4.jpg" },
      { id: "bioeuofr", type: "image", url: "/images/pumawanka/pumawanka-gallery-5.jpg" },
      { id: "a7g5vpoj", type: "image", url: "/images/pumawanka/pumawanka-gallery-6.jpg" },
      { id: "92v4ai1p", type: "image", url: "/images/pumawanka/pumawanka-gallery-7.jpg" },
      { id: "h6qfrd71", type: "image", url: "/images/pumawanka/pumawanka-gallery-8.jpg" },
      { id: "1wwkmbtk", type: "image", url: "/images/pumawanka/pumawanka-gallery-9.jpg" },
      { id: "8ietzq3h", type: "image", url: "/images/pumawanka/pumawanka-gallery-10.jpg" },
      { id: "svxie3s0", type: "image", url: "/images/pumawanka/pumawanka-gallery-11.jpg" },
      { id: "ph0ont9b", type: "image", url: "/images/pumawanka/pumawanka-gallery-12.jpg" },
      { id: "csym3wwu", type: "image", url: "/images/pumawanka/pumawanka-gallery-13.jpg" },
      { id: "60ng1b7c", type: "image", url: "/images/pumawanka/pumawanka-gallery-14.jpg" },
    ]
  },

  // RUTAS - Ausangate Trek 3D2N
  {
    id: "ausangate-trek-3d2n",
    categories: ["comunidad", "rutas"],
    name: "Ausangate",
    nameEn: "Ausangate",
    heroImage: "/images/ausangate-trek-3d2n/ausangate-trek-3d2n-hero.jpg",
    tagline: "Descubre al Apu más importante de la región andina, sus hermosas lagunas y paisajes alto andinos.",
    taglineEn: "Discover the most important Apu of the Andean region, its beautiful lagoons and high Andean landscapes.",
    duration: "3 días / 2 noches",
    durationEn: "3 days / 2 nights",
    difficulty: "Moderado a Desafiante",
    difficultyEn: "Moderate to Challenging",
    elevation: "4,800 m.s.n.m.",
    elevationEn: "4,800 m.a.s.l.",
    bestSeason: "",
    bestSeasonEn: "",
    price: 1700,
    description: "El Ausangate es la montaña más alta de la región Cusco y la quinta más alta del Perú, con una altitud de 6,385 metros sobre el nivel del mar. Se encuentra aproximadamente a 84 kilómetros al sureste de la ciudad del Cusco. Esta montaña sagrada es una de las más importantes dentro de la cosmovisión andina. El Apu Ausangate es considerado el padre de todas las montañas circundantes y un poderoso espíritu protector de la región. La zona también es reconocida por sus tradicionales textiles andinos, un conocimiento ancestral que se mantiene vivo y se transmite de generación en generación.",
    descriptionEn: "Ausangate is the highest mountain in the Cusco region and the fifth highest in Peru, reaching 6,385 meters above sea level. It is located approximately 84 kilometers southeast of Cusco. This sacred mountain is one of the most important in Andean culture. Apu Ausangate is considered the father of all surrounding mountains and a powerful protector spirit of the region. The area is also renowned for its traditional Andean textiles—ancestral knowledge that remains alive and is passed down through local families.",
    note: "APU: Palabra quechua que significa Dios o Espíritu Sagrado de la Montaña.",
    noteEn: "APU: Quechua word meaning God or Sacred Mountain Spirit.",
    highlights: ["Siete Lagunas del Ausangate", "Aguas termales de Pacchanta", "Comunidad local", "Nevado Ausangate"],
    highlightsEn: [
      "Seven Lakes of Ausangate",
      "Pacchanta hot springs",
      "Local community",
      "Ausangate Glacier"
    ],
    includes: [
      "Transporte ida y retorno desde el punto de encuentro",
      "Guía",
      "Refrigerio completa por 3 días / 2 noches",
      "Una noche de alojamiento en casa de familia local",
      "Ingreso al Área de Conservación de Ausangate",
      "Ingreso a Aguas Termales",
      "Equipo de montaña para una noche (carpa)"
    ],
    includesEn: [
      "Round-trip transportation from the meeting point",
      "Guide",
      "Snacks and meals for 3 days / 2 nights",
      "One night accommodation with a local family",
      "Entrance to Ausangate Conservation Area",
      "Entrance to Hot Springs",
      "Mountain equipment for one night (tent)"
    ],
    notIncludes: [
      "Transporte al punto de encuentro",
      "Gastos personales",
      "Sleeping",
      "Aislante",
      "Equipo personal de montaña (Bastón, Sleeping, Aislante) (Bastones, calzado, cobertor de lluvia)"
    ],
    notIncludesEn: [
      "Transportation to the meeting point",
      "Personal expenses",
      "Sleeping bag",
      "Sleeping mat",
      "Equipo personal de montaña (Bastón, Sleeping, Aislante) (Bastones, calzado, cobertor de lluvia)"
    ],
    requirements: [
      "Sombrero o gorra",
      "Bloqueador solar",
      "Botella de agua",
      "Dinero en efectivo",
      "DNI o Pasaporte",
      "Cámara fotográfica",
      "Abrigo",
      "Ropa para Lluvia",
      "Ropa de Baño",
      "Toalla",
      "Mochila pequeña para caminatas",
      "Aislante",
      "Sleeping",
      "Bastones de Trekking"
    ],
    requirementsEn: [
      "Hat or cap",
      "Sunscreen",
      "Water bottle",
      "Cash",
      "ID or Passport",
      "Camera",
      "Warm clothes",
      "Rain gear",
      "Swimwear",
      "Towel",
      "Small backpack for hikes",
      "Sleeping mat",
      "Sleeping bag",
      "Trekking poles"
    ],
    itinerary: [
      {
        day: 1,
        title: "Valle Sagrado – Pacchanta",
        titleEn: "Sacred Valley – Pacchanta",
        description: "11:00 PM – Partimos de Urubamba en transporte privado y traslado al pueblo de Pacchanta (4,200 m.s.n.m.). Tiempo aproximado de viaje: 4 horas en vehículo privado. 3:00 PM – Llegada a Pacchanta. Alojamiento en casa de una familia local y almuerzo. 4:00 PM – La tarde está dedicada a la aclimatación, con una caminata suave por la zona y tiempo para relajarse en las aguas termales naturales. 7:00 PM – Cena y pernocte.",
        descriptionEn: "11:00 AM – We depart from Urubamba by private transport to the town of Pacchanta (4,200 m.a.s.l.). Approximate travel time: 4 hours by private vehicle. 3:00 PM – Arrival in Pacchanta. Accommodation in a local family home and lunch. 4:00 PM – The afternoon is dedicated to acclimatization, with a gentle walk around the area and time to relax in the natural hot springs. 7:00 PM – Dinner and overnight stay.",
        highlights: ["Pacchanta", "Aguas termales","Nevado Ausangate"],
        highlightsEn: [
      "Pacchanta",
      "Hot springs",
      "Ausangate Glacier"
    ],
        meals: "Almuerzo, Cena",
        mealsEn: "Lunch, Dinner",
        accommodation: "Casa de familia local",
        accommodationEn: "Local family home"
      },
      {
        day: 2,
        title: "Siete Lagunas del Ausangate",
        titleEn: "Seven Lakes of Ausangate",
        description: "8:00 AM – Caminata de día completo para visitar las Siete Lagunas del Ausangate y sus hermosos paisajes. Ofrenda Andina con hojas de coca. 1:00 PM – Almuerzo y armado de campamento. Disfrute de la tarde en la montaña y sus paisajes durante el atardecer. 7:00 PM – Cena y descanso.",
        descriptionEn: "8:00 AM – Full-day hike to visit the Seven Lakes of Ausangate and its beautiful landscapes. Andean Offering with coca leaves. 1:00 PM – Lunch and camp setup. Enjoy the afternoon in the mountain and its landscapes during sunset. 7:00 PM – Dinner and rest.",
        highlights: ["Siete Lagunas", "Vista del Apu Ausangate"],
        highlightsEn: [
      "Seven Lakes",
      "Apu Ausangate View"
    ],
        meals: "Desayuno, Almuerzo, Cena",
        mealsEn: "Breakfast, Lunch, Dinner",
        accommodation: "Campamento",
        accommodationEn: "Camping"
      },
      {
        day: 3,
        title: "Pacchanta – Urubamba",
        titleEn: "Pacchanta – Urubamba",
        description: "7:00 AM – Retorno a Pacchanta. 10:00 AM – Tiempo para ir a las Aguas Termales y acomodar equipos. 11:00 AM – Salida de retorno hacia Urubamba. 3:00 PM – Llegada a Urubamba.",
        descriptionEn: "7:00 AM – Return to Pacchanta. 10:00 AM – Time to visit the Hot Springs and pack equipment. 11:00 AM – Departure back to Urubamba. 3:00 PM – Arrival in Urubamba.",
        highlights: ["Retorno"],
        highlightsEn: [
      "Return"
    ],
        meals: "Desayuno",
        mealsEn: "Breakfast",
        accommodation: "",
        accommodationEn: ""
      }
    ],
    gallery: [
      { id: "ans1uhdi", type: "image", url: "/images/ausangate-trek-3d2n/ausangate-trek-3d2n-gallery-1.jpg" },
      { id: "ijsprnar", type: "image", url: "/images/ausangate-trek-3d2n/ausangate-trek-3d2n-gallery-2.jpg" },
      { id: "7nrorzav", type: "image", url: "/images/ausangate-trek-3d2n/ausangate-trek-3d2n-gallery-3.jpg" },
      { id: "m9ej4p1u", type: "image", url: "/images/ausangate-trek-3d2n/ausangate-trek-3d2n-gallery-4.jpg" },
      { id: "45u5twvx", type: "image", url: "/images/ausangate-trek-3d2n/ausangate-trek-3d2n-gallery-5.jpg" },
      { id: "6ghbxi4w", type: "image", url: "/images/ausangate-trek-3d2n/ausangate-trek-3d2n-gallery-6.jpg" },
      { id: "vtfu030v", type: "image", url: "/images/ausangate-trek-3d2n/ausangate-trek-3d2n-gallery-7.jpg" },
      { id: "lo96kchu", type: "image", url: "/images/ausangate-trek-3d2n/ausangate-trek-3d2n-gallery-8.jpg" },
      { id: "i77q56zh", type: "image", url: "/images/ausangate-trek-3d2n/ausangate-trek-3d2n-gallery-9.jpg" },
      { id: "v1s0gvhm", type: "image", url: "/images/ausangate-trek-3d2n/ausangate-trek-3d2n-gallery-10.jpg" },
      { id: "huito51p", type: "image", url: "/images/ausangate-trek-3d2n/ausangate-trek-3d2n-gallery-11.jpg" },
      { id: "ifcht0gz", type: "image", url: "/images/ausangate-trek-3d2n/ausangate-trek-3d2n-gallery-12.jpg" },
      { id: "qo04psf9", type: "image", url: "/images/ausangate-trek-3d2n/ausangate-trek-3d2n-gallery-13.jpg" },
      { id: "ja09cfo6", type: "image", url: "/images/ausangate-trek-3d2n/ausangate-trek-3d2n-gallery-14.jpg" },
      { id: "sksz1dlu", type: "image", url: "/images/ausangate-trek-3d2n/ausangate-trek-3d2n-gallery-15.jpg" },
      { id: "kmp4sp02", type: "image", url: "/images/ausangate-trek-3d2n/ausangate-trek-3d2n-gallery-16.jpg" },
      { id: "le8da9g7", type: "image", url: "/images/ausangate-trek-3d2n/ausangate-trek-3d2n-gallery-17.jpg" },
    ]
  },

  // RUTAS - Lares Trek 3D2N
  {
    id: "lares-trek-3d2n",
    categories: ["rutas", "comunidad"],
    name: "Lares",
    nameEn: "Lares",
    heroImage: "/images/lares-trek-3d2n/lares-trek-3d2n-hero.jpg",
    tagline: "Explora la cordillera de Urubamba en contacto con comunidades nativas y la cultura viva de los andes del Perú.",
    taglineEn: "Explore the Urubamba mountain range in contact with native communities and the living culture of the Peruvian Andes.",
    duration: "3 días / 2 noches",
    durationEn: "3 days / 2 nights",
    difficulty: "Moderado a Desafiante",
    difficultyEn: "Moderate to Challenging",
    elevation: "4,700 m.s.n.m.",
    elevationEn: "4,700 m.a.s.l.",
    bestSeason: "",
    bestSeasonEn: "",
    price: 1700,
    description: "El Lares Trek es una de las rutas de montaña más atractivas de la región Cusco. Atraviesa la cordillera del Urubamba, considerada tropical por su cercanía a la selva amazónica. Durante la caminata se recorren diversos ecosistemas altoandinos como ríos, bosques, lagunas, cascadas y montañas nevadas, además de visitar comunidades nativas donde se mantiene viva la cultura ancestral. El recorrido finaliza en el pueblo de Lares, conocido por sus aguas termales y medicinales.",
    descriptionEn: "The Lares Trek is one of the most scenic mountain routes in the Cusco region. It crosses the Urubamba mountain range, a tropical range in the Peruvian Andes due to its proximity to the rainforest. Along the trek, travelers experience diverse Andean ecosystems including rivers, high-Andean forests, lagoons, waterfalls, snow-capped peaks, and traditional communities. The route also offers opportunities to observe local wildlife such as condors, deer, eagles, viscachas, and hummingbirds. The journey concludes in the town of Lares, famous for its thermal and medicinal hot springs.",
    highlights: ["Apu Sawasiray", "Apu Sirihuani", "Comunidades Nativas", "Bosques Alto Andinos", "Aguas termales de Lares", "Paso de montaña 4,700m"],
    highlightsEn: [
      "Apu Sawasiray",
      "Apu Sirihuani",
      "Native Communities",
      "High-Andean forests",
      "Lares hot springs",
      "Mountain pass 4,700m"
    ],
    includes: [
      "Reunión informativa (presencial/virtual)",
      "Transporte ida y retorno desde el punto de encuentro",
      "Guiado y acompañamiento",
      "Refrigerio completa (3 días / 2 noches)",
      "Campamento",
      "Equipo de montaña (carpas)",
      "Porteador/Arriero",
      "Ingreso a las aguas termales de Lares"
    ],
    includesEn: [
      "Informative briefing (in-person/virtual)",
      "Round-trip transportation from the meeting point",
      "Guiding and support",
      "Snacks and meals (3 days / 2 nights)",
      "Camping",
      "Mountain equipment (tents)",
      "Porter/Arriero",
      "Entrance to Lares Hot Springs"
    ],
    notIncludes: [
      "Equipo personal de montaña (Bastón, Sleeping, Aislante) (Bastón, Sleeping, Aislante)",
      "Snacks personales"
    ],
    notIncludesEn: [
      "Equipo personal de montaña (Bastón, Sleeping, Aislante) (Bastón, Sleeping, Aislante)",
      "Snacks personales"
    ],
    requirements: [
      "Ropa abrigadora e impermeable",
      "Botella personal de agua",
      "Documentos personales",
      "Dinero en efectivo",
      "Artículos de aseo",
      "Ropa de baño y toalla",
      "Sombrero o gorra",
      "Bloqueador solar",
      "Sleeping",
      "Aislante",
      "Bastones de Trekking"
    ],
    requirementsEn: [
      "Ropa abrigadora e impermeable",
      "Botella personal de agua",
      "Documentos personales",
      "Cash",
      "Artículos de aseo",
      "Ropa de baño y toalla",
      "Hat or cap",
      "Sunscreen",
      "Sleeping bag",
      "Sleeping mat",
      "Trekking poles"
    ],
    itinerary: [
      {
        day: 1,
        title: "Saywapata – Cancha Cancha - Yanacocha",
        titleEn: "Huaran – Saywapata – Cancha Cancha",
        description: "07:30 AM – Partimos de Urubamba en transporte privado hacia Huaran y luego a Saywapata (3,200 m.s.n.m.). 08:30 AM – Inicio de la caminata. Ascenso de aproximadamente 3 horas. 11:30 AM – Llegada a la comunidad de Cancha Cancha. Descanso, mate de coca y snacks locales. 12:30 PM – Continuación del ascenso y campamento cerca de la laguna Yanaqocha. 06:00 PM – Cena y pernocte.",
        descriptionEn: "07:30 AM – We depart from Urubamba by private transport to Huaran, continuing to Saywapata (3,200 m.a.s.l.). 08:30 AM – Start of the hike. Approx. 3-hour ascent. 11:30 AM – Arrival at the community of Cancha Cancha. Rest, coca tea, and local snacks. 12:30 PM – Continued ascent and camp setup near Yanaqocha Lagoon. 06:00 PM – Dinner and overnight stay.",
        highlights: ["Cancha Cancha", "Laguna Yanaqocha"],
        highlightsEn: [
      "Cancha Cancha",
      "Yanaqocha Lagoon"
    ],
        meals: "Almuerzo, Cena",
        mealsEn: "Lunch, Dinner",
        accommodation: "Campamento",
        accommodationEn: "Camping"
      },
      {
        day: 2,
        title: "Pachacutec – Abra Candria – Quishuarani",
        titleEn: "Pachacutec – Candria Pass – Quishuarani",
        description: "07:00 AM – Desayuno y desmontaje del campamento. 08:00 AM – Caminata hacia el abra Pachacutec y Abra Candria. 01:00 PM – Llegada a la comunidad de Quishuarani. 02:30 PM – Almuerzo en casa local y armado de campamento. 04:00 PM – Interacción con una familia local, su textilería, ganadería, agricultura y lenguaje. 07:00 PM – Cena.",
        descriptionEn: "07:00 AM – Breakfast and camp packing. 08:00 AM – Hike to the Pachacutec and Candria mountain passes. 01:00 PM – Arrival at the community of Quishuarani. 02:30 PM – Lunch with a local family and camp setup. 04:00 PM – Interaction with a local family, learning about their textiles, livestock, agriculture, and language. 07:00 PM – Dinner.",
        highlights: ["Paso de montaña 4,700m", "Comunidad Quishuarani"],
        highlightsEn: [
      "Mountain pass 4,700m",
      "Quishuarani Community"
    ],
        meals: "Desayuno, Almuerzo, Cena",
        mealsEn: "Breakfast, Lunch, Dinner",
        accommodation: "Campamento",
        accommodationEn: "Camping"
      },
      {
        day: 3,
        title: "Quishuarani – Cuncani – Lares",
        titleEn: "Quishuarani – Cuncani – Lares",
        description: "06:00 AM – Desayuno. 07:30 AM – Caminata de 4 horas hacia la comunidad de Cuncani. 11:00 AM – Snack. 12:00 PM – Traslado en transporte privado a las aguas termales de Lares (45 minutos). Tiempo libre para relajarse (2 horas). 03:00 PM – Transporte de retorno hacia el Valle Sagrado. 05:30 PM – Llegada a Urubamba.",
        descriptionEn: "06:00 AM – Breakfast. 07:30 AM – 4-hour hike to the community of Cuncani. 11:00 AM – Snack. 12:00 PM – Transfer by private transport to the Lares Hot Springs (45 minutes). Relaxation time (2 hours). 03:00 PM – Return transport to the Sacred Valley. 05:30 PM – Arrival in Urubamba.",
        highlights: ["Aguas termales de Lares"],
        highlightsEn: [
      "Lares hot springs"
    ],
        meals: "Desayuno, Almuerzo",
        mealsEn: "Breakfast, Lunch",
        accommodation: "",
        accommodationEn: ""
      }
    ],
    gallery: [
      { id: "xugaqpcb", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-1.jpg" },
      { id: "3z1oasfm", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-2.jpg" },
      { id: "yhnubbed", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-3.jpg" },
      { id: "19i6u475", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-4.jpg" },
      { id: "byghflyx", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-5.jpg" },
      { id: "mowxjo9d", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-6.jpg" },
      { id: "7owv7tpd", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-7.jpg" },
      { id: "o9181dkd", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-8.jpg" },
      { id: "d6szowzk", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-9.jpg" },
      { id: "4x1mjh0w", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-10.jpg" },
      { id: "cdb1ai17", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-11.jpg" },
      { id: "5f9hsrzk", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-12.jpg" },
      { id: "hc5pkzs8", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-13.jpg" },
      { id: "u8tltkbj", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-14.jpg" },
      { id: "gcatjtss", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-15.jpg" },
      { id: "bfkp0sui", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-16.jpg" },
      { id: "zni7m7d9", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-17.jpg" },
      { id: "655uvqk2", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-18.jpg" },
      { id: "wub0jat4", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-19.jpg" },
      { id: "x60c78m7", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-20.jpg" },
      { id: "r52pk6uh", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-21.jpg" },
      { id: "k7ey7lrm", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-22.jpg" },
      { id: "nn5gciii", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-23.jpg" },
      { id: "dbfnr916", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-24.jpg" },
      { id: "uqi81kwv", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-25.jpg" },
      { id: "u58b9pe0", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-26.jpg" },
      { id: "g00qzay8", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-27.jpg" },
      { id: "xby47q4u", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-28.jpg" },
      { id: "cvjk3lze", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-29.jpg" },
      { id: "s4r8tfub", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-30.jpg" },
      { id: "hx7508na", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-31.jpg" },
      { id: "ar1l5rse", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-32.jpg" },
      { id: "r30qman1", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-33.jpg" },
      { id: "ce98q2wf", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-34.jpg" },
      { id: "pp8j17ro", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-35.jpg" },
      { id: "5ozm6dui", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-36.jpg" },
      { id: "tx42001s", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-37.jpg" },
      { id: "9kdfy8kj", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-38.jpg" },
      { id: "dqisuox8", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-39.jpg" },
      { id: "6fstbh6p", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-40.jpg" },
      { id: "bftsquga", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-41.jpg" },
      { id: "vgjj1cgv", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-42.jpg" },
      { id: "6l9fpggd", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-43.jpg" },
      { id: "8o8ztfrd", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-44.jpg" },
      { id: "6k71vm7g", type: "image", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-45.jpg" },
    ]
  },

  // RUTAS - Selva del Manu 3D2N
  {
    id: "manu-rainforest-3d2n",
    categories: ["rutas"],
    name: "Selva del Manu",
    nameEn: "Manu Rainforest",
    heroImage: "/images/manu-rainforest-3d2n/manu-rainforest-3d2n-gallery-15.jpg",
    tagline: "Aventura en una de las zonas con mayor biodiversidad del planeta",
    taglineEn: "Adventure in one of the most biodiverse areas on Earth",
    duration: "3 días / 2 noches",
    durationEn: "3 days / 2 nights",
    difficulty: "Moderado",
    difficultyEn: "Moderate",
    elevation: "300 m.s.n.m. – 4,000 m.s.n.m.",
    elevationEn: "300 m.a.s.l. – 4,000 m.a.s.l.",
    bestSeason: "",
    bestSeasonEn: "",
    price: 2000,
    description: "La selva del Manu es un área natural protegida ubicada en el sureste del Perú, entre las regiones de Cusco y Madre de Dios. Con una extensión de más de 1.9 millones de hectáreas, abarca desde los 300 m.s.n.m. en la Amazonía hasta más de 4,000 m.s.n.m. en los Andes. Este territorio alberga una de las mayores biodiversidades del planeta y conserva zonas prácticamente vírgenes. La tradición oral menciona que en sus profundidades podría encontrarse el mítico Paititi, la ciudad perdida de los Incas.",
    descriptionEn: "The manu jungle is a protected natural area located in southeastern Peru, between the regions of Cusco and Madre de Dios. Covering more than 1.9 million hectares, it extends from 300 m.a.s.l. in the Amazon rainforest to over 4,000 m.a.s.l. in the Andes. This territory shelters one of the highest levels of biodiversity on Earth and preserves vast pristine areas. According to oral tradition, the legendary lost Inca city of Paititi may lie hidden deep within this jungle.",
    highlights: ["Selva del Manu", "Bosque Nublado", "Comunidad nativa Harakbut", "Aguas termales de Shintuya", "Pantiaqoya","Cataratas y piscinas naturales"],
    highlightsEn: [
      "Manu Jungle",
      "Cloud forest",
      "Harakbut native community",
      "Shintuya hot springs",
      "Pantiaqoya",
      "Waterfalls and natural pools"
    ],
    includes: [
      "Transporte ida y retorno desde el punto de encuentro",
      "Guía",
      "Alojamiento y alimentación completa por 3 días / 2 noches",
      "Transporte vehicular y fluvial",
      "Ingreso a las termas",
      "Logística general del viaje"
    ],
    includesEn: [
      "Round-trip transportation from the meeting point",
      "Guide",
      "Accommodation and full meals for 3 days / 2 nights",
      "Land and river transportation",
      "Ingreso a las termas",
      "Trip logistics"
    ],
    notIncludes: [
      "Transporte al punto de encuentro",
      "Gastos personales",
      "Equipo personal"
    ],
    notIncludesEn: [
      "Transportation to the meeting point",
      "Personal expenses",
      "Equipo personal"
    ],
    requirements: [
      "Sombrero o gorra",
      "Bloqueador solar",
      "Repelente",
      "Botella de agua",
      "Dinero en efectivo",
      "DNI o Pasaporte",
      "Cámara fotográfica",
      "Ropa para lluvia y calor",
      "Mochila pequeña para caminatas"
    ],
    requirementsEn: [
      "Hat or cap",
      "Sunscreen",
      "Insect repellent",
      "Water bottle",
      "Cash",
      "ID or Passport",
      "Camera",
      "Clothing for rain and heat",
      "Small backpack for hikes"
    ],
    itinerary: [
      {
        day: 1,
        title: "Valle Sagrado – Salvación – Reserva Qocha Machu Wasi",
        titleEn: "Sacred Valley – Salvación – Qocha Wasi Reserve",
        description: "08:00 AM - Partimos desde Urubamba en transporte privado hacia el poblado de Salvación (aprox. 7 horas). Parada técnica en Paucartambo. En el camino se atraviesan paisajes altoandinos y bosques nublados al ingreso a la selva alta. 03:00 PM - Llegada a Salvación, almuerzo y alojamiento en cabañas ubicadas en una colina con vistas panorámicas. 04:00 PM - Visita a la reserva natural Qocha Machu Wasi, paseo en balsa y caminata por senderos de selva. 07:00 PM - Cena y descanso.",
        descriptionEn: "08:00 AM - Departure from Urubamba by private transport to Salvación (approx. 7 hours). Technical stop in Paucartambo. Along the way, enjoy high-Andean landscapes and cloud forests. 03:00 PM - Arrival in Salvación, lunch and overnight stay in hillside cabins with panoramic views. 04:00 PM - Visit to Qocha Machu Wasi Nature Reserve, including a rafting activity and jungle walk. 07:00 PM - Dinner and rest.",
        highlights: ["Paucartambo", "Bosque nublado", "Reserva Qocha Machu Wasi"],
        highlightsEn: [
      "Paucartambo",
      "Cloud forest",
      "Qocha Machu Wasi Reserve"
    ],
        meals: "Almuerzo, Cena",
        mealsEn: "Lunch, Dinner",
        accommodation: "Cabañas en Salvación",
        accommodationEn: "Cabins in Salvación"
      },
      {
        day: 2,
        title: "Shintuya – Excursión - Aguas Termales",
        titleEn: "Shintuya – Harakbut Community Excursion",
        description: "06:30 AM - Desayuno. 07:30 AM - Traslado al poblado de Shintuya. 08:30 AM - Cruzamos en transporte fluvial hasta el sector de inicio de caminata. 09:00 AM - Excursión en la selva hacia el interior, conociendo ríos, cascadas. 2:00 PM - Snack. 03:00 PM - Retorno hacia el albergue. 4:00 PM - Alojamiento en zona de Aguas Termales y disfrute de sus propiedades medicinales. 07:00 PM - Cena y descanso.",
        descriptionEn: "06:30 AM - Breakfast. 07:30 AM - Transfer to Shintuya village. 08:30 AM - River transportation to the starting point of the hike. 09:00 AM - Excursion into the rainforest, learning about rivers and waterfalls. 02:00 PM - Box Lunch. 03:00 PM - Return to the lodge. 04:00 PM - Stay at the Hot Springs area to enjoy medicinal properties. 07:00 PM - Dinner and rest.",
        highlights: ["Comunidad Harakbut", "Selva virgen", "Plantas medicinales", "Aguas termales"],
        highlightsEn: [
      "Harakbut community",
      "Virgin rainforest",
      "Medicinal plants",
      "Hot springs"
    ],
        meals: "Desayuno, Almuerzo, Cena",
        mealsEn: "Breakfast, Lunch, Dinner",
        accommodation: "Albergue en Aguas Termales",
        accommodationEn: "Hot Springs Lodge"
      },
      {
        day: 3,
        title: "Retorno a Shintuya – Salvación – Urubamba",
        titleEn: "Return to Shintuya – Salvación – Urubamba",
        description: "07:00 AM - Desayuno. 08:00 AM - Inicio de retorno vía transporte fluvial hasta Shintuya. 08:30 AM - Continuamos nuestra ruta vía Salvación hasta Paucartambo, donde tendremos un refrigerio y luego continuaremos el retorno hacia Urubamba. 16:30 PM - Llegada a Urubamba.",
        descriptionEn: "07:00 AM - Breakfast. 08:00 AM - Return via river transport to Shintuya. 08:30 AM - Continue via Salvación to Paucartambo for a snack, then continue back to Urubamba. 04:30 PM - Arrival in Urubamba.",
        highlights: ["Retorno", "Paisajes altoandinos"],
        highlightsEn: [
      "Return",
      "High-Andean landscapes"
    ],
        meals: "Desayuno, Snack",
        mealsEn: "Breakfast, Lunch",
        accommodation: "",
        accommodationEn: ""
      }
    ],
    gallery: [      { id: "xyiav4r2", type: "image", url: "/images/manu-rainforest-3d2n/manu-rainforest-3d2n-gallery-15.jpg" },
      { id: "fk7ifocy", type: "image", url: "/images/manu-rainforest-3d2n/manu-rainforest-3d2n-gallery-34.jpg" },
      { id: "0yzqoy2m", type: "image", url: "/images/manu-rainforest-3d2n/manu-rainforest-3d2n-gallery-1.jpg" },
      { id: "et7z0sdb", type: "image", url: "/images/manu-rainforest-3d2n/manu-rainforest-3d2n-gallery-2.jpg" },
      { id: "mojxq30j", type: "image", url: "/images/manu-rainforest-3d2n/manu-rainforest-3d2n-gallery-3.jpg" },
      { id: "njezd1uv", type: "image", url: "/images/manu-rainforest-3d2n/manu-rainforest-3d2n-gallery-5.JPG" },
      { id: "w7tej2xz", type: "image", url: "/images/manu-rainforest-3d2n/manu-rainforest-3d2n-gallery-8.jpg" },
      { id: "mt3z2usi", type: "image", url: "/images/manu-rainforest-3d2n/manu-rainforest-3d2n-gallery-10.jpg" },
      { id: "ooutth0s", type: "image", url: "/images/manu-rainforest-3d2n/manu-rainforest-3d2n-gallery-11.jpg" },
      { id: "e1vb2p9b", type: "image", url: "/images/manu-rainforest-3d2n/manu-rainforest-3d2n-gallery-12.jpg" },
      { id: "fj7uc1u2", type: "image", url: "/images/manu-rainforest-3d2n/manu-rainforest-3d2n-gallery-13.jpg" },
      { id: "77hd8h7k", type: "image", url: "/images/manu-rainforest-3d2n/manu-rainforest-3d2n-gallery-14.jpg" },
      { id: "pjrjfin4", type: "image", url: "/images/manu-rainforest-3d2n/manu-rainforest-3d2n-gallery-16.jpg" },
      { id: "rp6x1ly0", type: "image", url: "/images/manu-rainforest-3d2n/manu-rainforest-3d2n-gallery-17.jpg" },
      { id: "2beu8skz", type: "image", url: "/images/manu-rainforest-3d2n/manu-rainforest-3d2n-gallery-18.jpg" },
      { id: "lgb7zvj4", type: "image", url: "/images/manu-rainforest-3d2n/manu-rainforest-3d2n-gallery-19.jpg" },
      { id: "yit0lpkg", type: "image", url: "/images/manu-rainforest-3d2n/manu-rainforest-3d2n-gallery-20.jpg" },
      { id: "5xkvxl36", type: "image", url: "/images/manu-rainforest-3d2n/manu-rainforest-3d2n-gallery-21.jpg" },
    ]
  },

  // NEW PACKAGES
  {
    id: "choquequirao-trek",
    categories: ["rutas"],
    name: "Choquequirao",
    nameEn: "Choquequirao",
    heroImage: "/images/choquequirao-trek/choquequirao-trek-hero.jpg",
    tagline: "Descubre la mítica ciudad perdida de los Incas y su misterio ancestral.",
    taglineEn: "Discover the mythical lost city of the Incas and its ancestral mystery.",
    duration: "4 días / 3 noches",
    durationEn: "4 days / 3 nights",
    difficulty: "Desafiante a Alta Exigencia",
    difficultyEn: "Challenging to High Demand",
    elevation: "3,900 m.s.n.m.",
    elevationEn: "3,900 m.a.s.l.",
    bestSeason: "",
    bestSeasonEn: "",
    price: 2200,
    description: "Este trekking de 4 días conduce a uno de los complejos arqueológicos más impresionantes y menos visitados del Perú: Choquequirao. La ruta atraviesa profundos cañones, paisajes andinos y ecosistemas diversos, ofreciendo una experiencia auténtica de conexión con la naturaleza y la historia. Choquequirao destaca por su magnitud, misterio y ubicación estratégica. Es una experiencia ideal para viajeros que buscan aventura, reto físico y conexión cultural.",
    descriptionEn: "This 4-day trek leads to one of the most impressive and least visited archaeological sites in Peru: Choquequirao. The route crosses deep canyons, Andean landscapes, and diverse ecosystems. Known as the sacred sister of Machu Picchu, Choquequirao stands out for its scale, mystery, and strategic location. It is ideal for travelers seeking adventure, physical challenge, and cultural connection.",
    highlights: ["Complejo arqueológico de Choquequirao", "Cañón del Apurímac" ],
    highlightsEn: [
      "Choquequirao archaeological complex",
      "Apurimac Canyon"
    ],
    includes: [
      "Transporte ida y retorno desde el punto de encuentro",
      "Guía",
      "Refrigerio",
      "Hospedaje",
      "Boleto de ingreso a Choquequirao"
    ],
    includesEn: [
      "Round-trip transportation from the meeting point",
      "Guide",
      "Snack",
      "Accommodation",
      "Choquequirao Entrance Ticket"
    ],
    notIncludes: [
      "Transporte al punto de encuentro",
      "Gastos personales",
      "Equipo personal de montaña (Bastón, Sleeping, Aislante) (Bastones, calzado, cobertor de lluvia)"
    ],
    notIncludesEn: [
      "Transportation to the meeting point",
      "Personal expenses",
      "Equipo personal de montaña (Bastón, Sleeping, Aislante) (Bastones, calzado, cobertor de lluvia)"
    ],
    requirements: [
      "Sombrero o gorra",
      "Bloqueador solar",
      "Repelente",
      "Botella de agua",
      "Dinero en efectivo",
      "DNI o Pasaporte",
      "Cámara fotográfica",
      "Abrigo",
      "Ropa para Lluvia",
      "Mochila pequeña para caminatas",
      "Bastones de Trekking"
    ],
    requirementsEn: [
      "Hat or cap",
      "Sunscreen",
      "Insect repellent",
      "Water bottle",
      "Cash",
      "ID or Passport",
      "Camera",
      "Warm clothes",
      "Rain gear",
      "Small backpack for hikes",
      "Trekking poles"
    ],
    itinerary: [
      {
        day: 1,
        title: "Cusco – Capuliyoc – Chiquiscca",
        titleEn: "Cusco – Capuliyoc – Chiquiscca",
        description: "10:00 AM - Traslado en transporte privado desde Urubamba hacia San Pedro de Cachora (Apurimac). Luego nos dirigiremos a Capuliyoc, donde iniciaremos la caminata (17km). Se dará un refrigerio para el camino. 02:30 PM - Descenderemos durante aproximadamente 3 horas hasta Chiquiscca (1,000mts de desnivel aproximadamente). 05:30 PM - Llegada al Primer Refugio. 07:00 PM - Cena y descanso.",
        descriptionEn: "10:00 AM - Transfer by private transport from Urubamba towards San Pedro de Cachora (Apurimac). Then we head to Capuliyoc, where we start the hike (17km). Snack provided. 02:30 PM - Descent for approx. 3 hours to Chiquisqa (approx. 1,000m descent). 05:30 PM - Arrival at the first refuge. 07:00 PM - Dinner and rest.",
        highlights: ["Capuliyoc", "Cañón del Apurímac"],
        highlightsEn: [
      "Capuliyoc",
      "Apurimac Canyon"
    ],
        meals: "Cena",
        mealsEn: "Dinner",
        accommodation: "Refugio en Chiquiscca",
        accommodationEn: "Chiquisqa Refuge"
      },
      {
        day: 2,
        title: "Chiquiscca – Playa Rosalinas – Marampata",
        titleEn: "Chiquisqa – Playa Rosalinas – Marampata",
        description: "04:30 AM - Desayuno. 05:00 AM - Empezamos la caminata y descendemos, durante unos 45 minutos, 300 metros aproximadamente hacia el río Apurímac (Playa Rosalinas). Luego ascenderemos 1,400 metos durante 4 a 6 horas hasta Marampata, en una caminata exigente de 14km. Se realizarán paradas estratégicas en el camino. 12:00 AM - Llegamos a Marampata. 01:00 PM - Almuerzo. 03:00 PM - Recorrido de cercanías y charla informativa, previa a la visita a Choquequirao a realizarse el día siguiente. 07:00 PM - Cena y descanso.",
        descriptionEn: "04:30 AM - Breakfast. 05:00 AM - Descent for 45 mins (approx. 300m) to Apurimac River (Playa Rosalinas). Then ascend 1,400m for 4-6 hours to Marampata (demanding 14km hike). 12:00 PM - Arrival at Marampata. 01:00 PM - Lunch. 03:00 PM - Local tour and briefing. 07:00 PM - Dinner and rest.",
        highlights: ["Río Apurímac", "Ascenso a Marampata"],
        highlightsEn: [
      "Apurimac River",
      "Ascent to Marampata"
    ],
        meals: "Desayuno, Almuerzo, Cena",
        mealsEn: "Breakfast, Lunch, Dinner",
        accommodation: "Refugio en Marampata",
        accommodationEn: "Marampata Refuge"
      },
      {
        day: 3,
        title: "Marampata – Choquequirao – Marampata",
        titleEn: "Marampata – Choquequirao – Marampata",
        description: "06:00 AM - Desayuno. 07:00 AM - Caminata hacia el complejo arqueológico de Choquequirao (1 hora y media). 08:30 AM - Llegada a Choquequirao y exploración completa del lugar. 11:00 AM - Snack. 03:30 PM - Retorno a Marampata. 05:00 PM - Llegada a Marampata. 07:00 PM - Cena y descanso.",
        descriptionEn: "06:00 AM - Breakfast. 07:00 AM - Hike to Choquequirao (1.5 hours). 08:30 AM - Arrival and full exploration. 11:00 AM - Box Lunch. 03:30 PM - Return to Marampata. 05:00 PM - Arrival. 07:00 PM - Dinner and rest.",
        highlights: ["Complejo Choquequirao", "Exploración"],
        highlightsEn: [
      "Choquequirao Complex",
      "Exploration"
    ],
        meals: "Desayuno, Almuerzo, Cena",
        mealsEn: "Breakfast, Lunch, Dinner",
        accommodation: "Refugio en Marampata",
        accommodationEn: "Marampata Refuge"
      },
      {
        day: 4,
        title: "Marampata – Capuliyoc – Urubamba",
        titleEn: "Marampata – Capuliyoc – Urubamba",
        description: "04:30 AM - Desayuno. 05:00 AM - Retorno por la misma ruta de descenso y ascenso hasta Capuliyoc. 12:00 PM - Llegada a Capuliyoc. 01:00 PM - Snack. 02:00 PM - Retorno desde Capuliyoc hacia Urubamba. 06:00 PM - Llegada a Urubamba.",
        descriptionEn: "04:30 AM - Breakfast. 05:00 AM - Return hike to Capuliyoc. 12:00 PM - Arrival at Capuliyoc. 01:00 PM - Lunch. 02:00 PM - Transfer back to Urubamba. 06:00 PM - Arrival.",
        highlights: ["Retorno", "Capuliyoc"],
        highlightsEn: [
      "Return",
      "Capuliyoc"
    ],
        meals: "Desayuno, Almuerzo",
        mealsEn: "Breakfast, Lunch",
        accommodation: "",
        accommodationEn: ""
      }
    ],
    gallery: [
      { id: "p2hlm43s", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-1.jpg" },
      { id: "pr6wdg24", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-2.jpg" },
      { id: "dplxlio3", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-3.jpg" },
      { id: "qhzi24d6", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-4.jpg" },
      { id: "47qeyprg", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-5.jpg" },
      { id: "lk3y2vwr", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-6.jpg" },
      { id: "0v01jh9x", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-7.jpg" },
      { id: "sekhdk9e", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-8.jpg" },
      { id: "nxweqv4f", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-9.jpg" },
      { id: "el89q8g5", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-10.jpg" },
      { id: "vl3acw2m", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-11.jpg" },
      { id: "lp3t73ku", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-12.jpg" },
      { id: "fwzfkiw9", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-13.jpg" },
      { id: "gjnaex3m", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-14.jpg" },
      { id: "fcom9k2h", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-15.jpg" },
      { id: "v2cansdf", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-16.jpg" },
      { id: "kx735bb4", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-17.jpg" },
      { id: "dnx7a20z", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-18.jpg" },
      { id: "lcn2qz0u", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-19.jpg" },
      { id: "ki2njms6", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-20.jpg" },
      { id: "07k0lxqq", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-21.jpg" },
      { id: "ja5auqyz", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-22.jpg" },
      { id: "lc4qbkrl", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-23.jpg" },
      { id: "imhsp5bu", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-24.jpg" },
      { id: "gjtewp9g", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-25.jpg" },
      { id: "d4n6pgrh", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-26.jpg" },
      { id: "f32u3l0v", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-27.jpg" },
      { id: "bw7rlusp", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-28.jpg" },
      { id: "6ptpi6ri", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-29.jpg" },
      { id: "hfnrika3", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-30.jpg" },
      { id: "a45ypx23", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-31.jpg" },
      { id: "d0jwiz96", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-32.jpg" },
      { id: "634tjjtu", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-33.jpg" },
      { id: "y4m8g0zl", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-34.jpg" },
      { id: "182mdp4j", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-35.jpg" },
      { id: "quhm3gnv", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-36.jpg" },
      { id: "c4o4btws", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-37.jpg" },
      { id: "qtkrlx96", type: "image", url: "/images/choquequirao-trek/choquequirao-trek-gallery-38.jpg" },
    ]
  },
  {
    id: "quishuarani-2d1n",
    categories: ["comunidad", "rutas"],
    name: "Quishuarani",
    nameEn: "Quishuarani",
    heroImage: "/images/quishuarani-2d1n/quishuarani-2d1n-hero.jpg",
    tagline: "Sé parte de una experiencia auténtica con familias de comunidades alto andinas.",
    taglineEn: "Community experience in the Peruvian Andes, connection with the mountain, and living with a high Andean family.",
    duration: "2 días / 1 noche",
    durationEn: "2 days / 1 night",
    difficulty: "Moderado",
    difficultyEn: "Moderate",
    elevation: "3900 m.s.n.m. - 4,400  m.s.n.m.",
    elevationEn: "3900 m.a.s.l. - 4,400  m.a.s.l.",
    bestSeason: "",
    bestSeasonEn: "",
    price: 1000,
    description: "Quishuarani es una comunidad alto andina ubicada en la cordillera de Urubamba, en la región de Lares. Esta experiencia permite un contacto directo con familias locales, sus costumbres, tradiciones y su forma de vida. Durante dos días y una noche, los viajeros conviven con una familia local, participando en actividades como la textilería tradicional, la ganadería y la vida comunitaria. Además, el recorrido incluye caminatas hacia lagunas y cataratas, así como la realización de una ofrenda andina con hojas de coca.",
    descriptionEn: "Quishuarani is a high Andean community located in the Urubamba mountain range, in the Lares region. This experience offers direct contact with local families, their traditions, and way of life. For two days and one night, travelers live with a local family, participating in activities such as traditional textile making, livestock care, and daily community life. The experience also includes hikes to lagoons and waterfalls, as well as a traditional Andean offering using coca leaves.",
    highlights: ["Convivencia familiar", "Textilería tradicional", "Laguna Qoyalay", "Cataratas de Quishuarani"],
    highlightsEn: [
      "Family coexistence",
      "Traditional textiles",
      "Qoyalay Lagoon",
      "Quishuarani Waterfalls"
    ],
    includes: [
      "Transporte ida y retorno desde el punto de encuentro",
      "Guía",
      "Refrigerio completa",
      "Alojamiento y campamento",
      "Ingreso a Termas",
      "Ingreso a Quishuarani"
    ],
    includesEn: [
      "Round-trip transportation from the meeting point",
      "Guide",
      "Refrigerio completa",
      "Alojamiento y campamento",
      "Entrance to Hot Springs",
      "Entrance to Quishuarani"
    ],
    notIncludes: [
      "Transporte al punto de encuentro",
      "Gastos personales",
      "Equipo personal de montaña (Bastón, Sleeping, Aislante) (Bastones, calzado, cobertor de lluvia)"
    ],
    notIncludesEn: [
      "Transportation to the meeting point",
      "Personal expenses",
      "Equipo personal de montaña (Bastón, Sleeping, Aislante) (Bastones, calzado, cobertor de lluvia)"
    ],
    requirements: [
      "Sombrero o gorra",
      "Bloqueador solar",
      "Botella de agua",
      "Dinero en efectivo",
      "DNI o Pasaporte",
      "Cámara fotográfica",
      "Abrigo",
      "Ropa para Lluvia",
      "Ropa de Baño",
      "Toalla",
      "Mochila pequeña para caminatas",
      "Aislante",
      "Sleeping",
      "Bastones de Trekking"
    ],
    requirementsEn: [
      "Hat or cap",
      "Sunscreen",
      "Water bottle",
      "Cash",
      "ID or Passport",
      "Camera",
      "Warm clothes",
      "Rain gear",
      "Swimwear",
      "Towel",
      "Small backpack for hikes",
      "Sleeping mat",
      "Sleeping bag",
      "Trekking poles"
    ],
    itinerary: [
      {
        day: 1,
        title: "Valle Sagrado – Quishuarani",
        titleEn: "Sacred Valley – Quishuarani",
        description: "08:00 AM – Partimos de Urubamba en transporte privado hacia la comunidad de Quishuarani. 11:00 AM – Llegada. 11:30 AM – Recepción por una familia local. 12:00 PM – Demostración de textilería tradicional. 01:00 PM – Almuerzo. 02:30 PM – Caminata hacia las cataratas de Quishuarani y la laguna Qoyalay con ofrenda simbólica. 06:00 PM – Retorno al campamento, cena y convivencia.",
        descriptionEn: "08:00 AM – Pick-up from the Sacred Valley and transfer to Quishuarani. 11:00 AM – Arrival. 11:30 AM – Welcome by a local family. 12:00 PM – Traditional textile demonstration. 01:00 PM – Lunch. 02:30 PM – Hike to waterfalls and Qoyalay lagoon with coca leaf offering. 06:00 PM – Return, dinner and time with family.",
        highlights: ["Textilería tradicional", "Laguna Qoyalay"],
        highlightsEn: [
      "Traditional textiles",
      "Qoyalay Lagoon"
    ],
        meals: "Almuerzo, Cena",
        mealsEn: "Lunch, Dinner",
        accommodation: "Campamento o Casa Comunal",
        accommodationEn: "Camping or family home"
      },
      {
        day: 2,
        title: "Quishuarani – Calca – Valle Sagrado",
        titleEn: "Quishuarani – Calca – Sacred Valley",
        description: "07:00 AM – Desayuno. 08:00 AM – Salida hacia Aguas Termales de Lares. 12:00 PM – Snack. 01:00 PM – Traslado en transporte privado hacia Urubamba. 04:00 PM – Llegada a Urubamba.",
        descriptionEn: "06:00 AM – Breakfast. 07:00 AM – Hike of approximately 3 hours through valleys, lagoons, and viewpoints. 01:00 PM – Return and lunch. 02:00 PM – Transfer to Calca. 04:30 PM – Arrival at the Sacred Valley.",
        highlights: ["Aguas termales"],
        highlightsEn: [
      "Hot springs"
    ],
        meals: "Desayuno, Snack",
        mealsEn: "Breakfast, Lunch",
        accommodation: "",
        accommodationEn: ""
      }
    ],
    gallery: [
      { id: "zsgb2zpz", type: "image", url: "/images/quishuarani-2d1n/quishuarani-2d1n-gallery-1.jpg" },
      { id: "m4dl4f3i", type: "image", url: "/images/quishuarani-2d1n/quishuarani-2d1n-gallery-2.jpg" },
      { id: "gz9d6t58", type: "image", url: "/images/quishuarani-2d1n/quishuarani-2d1n-gallery-3.jpg" },
      { id: "nq4ets9w", type: "image", url: "/images/quishuarani-2d1n/quishuarani-2d1n-gallery-4.jpg" },
      { id: "6e9h6ius", type: "image", url: "/images/quishuarani-2d1n/quishuarani-2d1n-gallery-5.jpg" },
      { id: "26kfs5ig", type: "image", url: "/images/quishuarani-2d1n/quishuarani-2d1n-gallery-6.jpg" },
      { id: "np0din6z", type: "image", url: "/images/quishuarani-2d1n/quishuarani-2d1n-gallery-7.jpg" },
      { id: "d73oj5in", type: "image", url: "/images/quishuarani-2d1n/quishuarani-2d1n-gallery-8.jpg" },
      { id: "o2qb00nx", type: "image", url: "/images/quishuarani-2d1n/quishuarani-2d1n-gallery-9.jpg" },
      { id: "zb1qqvkb", type: "image", url: "/images/quishuarani-2d1n/quishuarani-2d1n-gallery-10.jpg" },
      { id: "ex0f97ny", type: "image", url: "/images/quishuarani-2d1n/quishuarani-2d1n-gallery-11.jpg" },
      { id: "f1d8oaet", type: "image", url: "/images/quishuarani-2d1n/quishuarani-2d1n-gallery-12.jpg" },
      { id: "yk92fxyh", type: "image", url: "/images/quishuarani-2d1n/quishuarani-2d1n-gallery-13.jpg" },
      { id: "sfai9zyw", type: "image", url: "/images/quishuarani-2d1n/quishuarani-2d1n-gallery-14.jpg" },
    ]
  },
  {
    id: "cancha-cancha-2d1n",
    categories: ["comunidad", "rutas"],
    name: "Cancha Cancha - 2 dias 1 Noche",
    nameEn: "Cancha Cancha 2D1N",
    heroImage: "/images/cancha-cancha-2d1n/cancha-cancha-2d1n-hero.jpg",
    tagline: "Experiencia comunitaria en los andes del Perú, contacto con la montaña y vivencias junto a una familia altoandina.",
    taglineEn: "Community experience in the Peruvian Andes, connection with the mountain, and living with a high Andean family.",
    duration: "2 días / 1 noche",
    durationEn: "2 days / 1 night",
    difficulty: "Moderado",
    difficultyEn: "Moderate",
    elevation: "3,200 m.s.n.m. - 4,400 m.s.n.m.",
    elevationEn: "3,200 m.a.s.l. - 4,400 m.a.s.l.",
    bestSeason: "",
    bestSeasonEn: "",
    price: 290,
    description: "Hermosa caminata por el valle de Huarán, en la cordillera de Urubamba. Iniciamos en Saywapata, recorriendo un bello valle con bosques nativos por unas 4 horas de ascenso hasta llegar a la comunidad altoandina de Cancha Cancha. Aquí seremos recibidos por una familia local, con un delicioso almuerzo. Conoceremos su casa, textilería tradicional, agricultura, ganadería y compartiremos una auténtica experiencia con la naturaleza y la cultura andina. El segundo día visitamos la laguna sagrada de Wasan Qocha.",
    descriptionEn: "Beautiful trekking over the Huaran valley, located in the Urubamba mountain range. We start from Saywapata, going through a beautiful valley with native plants and trees for about 4 hours of ascent until we reach the high Andean community of Cancha Cancha. Here we will be received by one of the local families, with a delicious local lunch, we will get to know the family house, traditional textiles, agriculture, livestock, and we will share an authentic experience with nature and Andean culture. The next day we visit Wasan Qocha sacred lake.",
    highlights: ["Comunidad Cancha Cancha", "Laguna Wasan Qocha", "Convivencia cultural","Laguna Yanacocha"],
    highlightsEn: [
      "Cancha Cancha community",
      "Wasan Qocha Lagoon",
      "Cultural coexistence",
      "Yanacocha Lagoon"
    ],
    includes: [
      "Transporte privado ida y vuelta",
      "Guía",
      "Refrigerio completa",
      "Campamento",
      "Carga de equipaje"
    ],
    includesEn: [
      "Transporte privado ida y vuelta",
      "Guide",
      "Refrigerio completa",
      "Camping",
      "Carga de equipaje"
    ],
    notIncludes: [
      "Snacks personales",
      "Equipo personal de montaña (Bastón, Sleeping, Aislante)"
    ],
    notIncludesEn: [
      "Snacks personales",
      "Personal mountain equipment (Walking sticks, sleeping bag, mat)"
    ],
    requirements: [
      "Sombrero o gorra",
      "Bloqueador solar",
      "Botella de agua",
      "Dinero en efectivo",
      "DNI o Pasaporte",
      "Cámara fotográfica",
      "Ropa para Lluvia",
      "Bastones de Trekking"
    ],
    requirementsEn: [
      "Hat or cap",
      "Sunscreen",
      "Water bottle",
      "Cash",
      "ID or Passport",
      "Camera",
      "Rain gear",
      "Trekking poles"
    ],
    itinerary: [
      {
        day: 1,
        title: "Valle Sagrado – Saywapata – Cancha Cancha",
        titleEn: "Sacred Valley – Saywapata – Cancha Cancha",
        description: "08:00 AM – Recojo en transporte hacia Saywapata. 08:30 AM – Inicio de la caminata de ascenso (aprox. 4 horas). 12:30 PM – Llegada a Cancha Cancha y recepción en casa de familia local. Almuerzo y descanso. 03:00 PM – Compartir con la familia, aprender de su agricultura, textiles y animales. Posible visita a la laguna Yanaqocha para una ofrenda andina. 06:00 PM – Cena y descanso.",
        descriptionEn: "08:00 AM – Pick-up and transfer to Saywapata. 08:30 AM – Start of the hike (approx. 4 hours). 12:30 PM – Arrival at Cancha Cancha and reception in a local family house. Lunch and rest. 03:00 PM – Share with the local family, learn about agriculture, textiles and animals. Optional visit to Yanaqocha lagoon for an Andean offering. 06:00 PM – Dinner and rest.",
        highlights: ["Llegada a comunidad", "Experiencia cultural"],
        highlightsEn: [
      "Arrival at the community",
      "Cultural experience"
    ],
        meals: "Almuerzo, Cena",
        mealsEn: "Lunch, Dinner",
        accommodation: "Campamento",
        accommodationEn: "Camp"
      },
      {
        day: 2,
        title: "Cancha Cancha – Wasan Qocha – Valle Sagrado",
        titleEn: "Cancha Cancha – Wasan Qocha – Sacred Valley",
        description: "07:00 AM – Desayuno e inicio de caminata hacia la laguna sagrada Wasan Qocha (2 horas). 10:00 AM – Llegada a la laguna, descanso y ofrenda andina. 11:00 AM – Retorno a la casa de familia (1h 20m). 12:30 PM – Almuerzo y descanso. 02:00 PM – Descenso hacia Saywapata. 04:30 PM – Fin de la caminata y retorno hacia Urubamba.",
        descriptionEn: "07:00 AM – Breakfast and hike to Wasan Qocha sacred lake (2 hours). 10:00 AM – Arrival at the lake, rest and Andean offering. 11:00 AM – Return to family house (1h 20m). 12:30 PM – Lunch and rest. 02:00 PM – Descent to the Sacred Valley. 04:30 PM – End of hike.",
        highlights: ["Laguna Wasan Qocha", "Ofrenda Andina"],
        highlightsEn: [
      "Wasan Qocha Lagoon",
      "Andean offering"
    ],
        meals: "Desayuno, Almuerzo",
        mealsEn: "Breakfast, Lunch",
        accommodation: "",
        accommodationEn: ""
      }
    ],
    gallery: [
      { id: "5lv20q06", type: "image", url: "/images/cancha-cancha-2d1n/cancha-cancha-2d1n-gallery-1.jpg" },
      { id: "fzvki2za", type: "image", url: "/images/cancha-cancha-2d1n/cancha-cancha-2d1n-gallery-2.jpg" },
      { id: "4ay8yi22", type: "image", url: "/images/cancha-cancha-2d1n/cancha-cancha-2d1n-gallery-3.jpg" },
      { id: "9ndu48tz", type: "image", url: "/images/cancha-cancha-2d1n/cancha-cancha-2d1n-gallery-4.jpg" },
      { id: "ggdh40qo", type: "image", url: "/images/cancha-cancha-2d1n/cancha-cancha-2d1n-gallery-5.jpg" },
      { id: "3aatcsub", type: "image", url: "/images/cancha-cancha-2d1n/cancha-cancha-2d1n-gallery-6.jpg" },
      { id: "sdxwi7c8", type: "image", url: "/images/cancha-cancha-2d1n/cancha-cancha-2d1n-gallery-7.jpg" },
      { id: "easzet4v", type: "image", url: "/images/cancha-cancha-2d1n/cancha-cancha-2d1n-gallery-8.jpg" },
      { id: "vofnh83f", type: "image", url: "/images/cancha-cancha-2d1n/cancha-cancha-2d1n-gallery-9.jpg" },
      { id: "4obha6w8", type: "image", url: "/images/cancha-cancha-2d1n/cancha-cancha-2d1n-gallery-10.jpg" },
      { id: "legckg9w", type: "image", url: "/images/cancha-cancha-2d1n/cancha-cancha-2d1n-gallery-11.jpg" },
      { id: "uj6zwkjq", type: "image", url: "/images/cancha-cancha-2d1n/cancha-cancha-2d1n-gallery-12.jpg" },
      { id: "mmmf2rvn", type: "image", url: "/images/cancha-cancha-2d1n/cancha-cancha-2d1n-gallery-13.jpg" },
      { id: "9o7q5r35", type: "image", url: "/images/cancha-cancha-2d1n/cancha-cancha-2d1n-gallery-14.jpg" },
      { id: "l16nsmgk", type: "image", url: "/images/cancha-cancha-2d1n/cancha-cancha-2d1n-gallery-15.jpg" },
      { id: "04oewlvp", type: "image", url: "/images/cancha-cancha-2d1n/cancha-cancha-2d1n-gallery-16.jpg" },
    ]
  },
  {
    id: "full-day-spiritual",
    categories: ["ceremonias"],
    name: " Ofrenda Andina y Temazcalli",
    nameEn: "Temazcalli and Andean Offering",
    heroImage: "/images/full-day-spiritual/full-day-spiritual-hero.jpg",
    heroImagePosition: "center 25%",
    tagline: "Conecta con rituales ancestrales de purificación y conexión con el mundo espiritual de los Andes.",
    taglineEn: "Connect with ancestral purification rituals and the spiritual world of the Andes.",
    duration: "Día completo",
    durationEn: "Full day",
    difficulty: "Fácil",
    difficultyEn: "Easy",
    elevation: "",
    elevationEn: "",
    bestSeason: "",
    bestSeasonEn: "",
    price: 400,
    description: "Esta experiencia espiritual de día completo integra dos poderosos rituales: la ofrenda o “Despacho” y la ceremonia de temazcalli. La ofrenda andina es uno de los rituales más importantes de la cosmovisión andina, mediante el cual se pide permiso y bendiciones a la Pachamama, los Apus y las energías del universo. La ceremonia de Temazcalli, de origen mesoamericano, es un baño de vapor tradicional que busca la limpieza y renovación del cuerpo, la mente y el espíritu.",
    descriptionEn: "This full-day spiritual experience combines two powerful rituals: the Andean offering, known as “Despacho”, and the temazcalli ceremony. The Andean offering is one of the most important rituals in Andean cosmology, performed to ask for permission and blessings from Pachamama, the Apus, and the universe. The temazcalli ceremony, of Mesoamerican origin, is a traditional steam bath aimed at cleansing and renewing the body, mind, and spirit.",
    highlights: ["Ofrenda (Despacho)", "Ceremonia de temazcalli", "Conexión profunda"],
    highlightsEn: [
      "Andean offering (Despacho)",
      "Temazcalli ceremony",
      "Deep connection"
    ],
    includes: [
      "Transporte ida y retorno desde el punto de encuentro",
      "Guía",
      "Ofrenda (Despacho)",
      "Ceremonia de temazcalli",
      "Snack"
    ],
    includesEn: [
      "Round-trip transportation from the meeting point",
      "Guide",
      "Andean offering (Despacho)",
      "Ceremonia de temazcalli",
      "Snack"
    ],
    notIncludes: [
      "Transporte al punto de encuentro",
      "Gastos personales",
      "Artículos personales (toalla, traje de baño)"
    ],
    notIncludesEn: [
      "Transportation to the meeting point",
      "Personal expenses",
      "Artículos personales (toalla, traje de baño)"
    ],
    requirements: [
      "Sombrero o gorra",
      "Bloqueador solar",
      "Repelente",
      "Botella de agua",
      "Dinero en efectivo",
      "DNI o Pasaporte",
      "Cámara fotográfica",
      "Ropa de cambio",
      "Ropa cómoda",
      "Traje de baño",
      "Toalla",
      "Mochila pequeña"
    ],
    requirementsEn: [
      "Hat or cap",
      "Sunscreen",
      "Insect repellent",
      "Water bottle",
      "Cash",
      "ID or Passport",
      "Camera",
      "Ropa de cambio",
      "Ropa cómoda",
      "Traje de baño",
      "Towel",
      "Mochila pequeña"
    ],
    itinerary: [
      {
        day: 1,
        title: "Valle Sagrado – Arin – Temazcalli – Valle Sagrado",
        titleEn: "Sacred Valley – Arin – Temazcalli – Sacred Valley",
        description: "08:00 AM – Partimos desde Urubamba en transporte privado y nos trasladamos hacia el pueblo de Arin. 09:00 AM – Inicio de la ofrenda. 11:30 AM – Quema de la ofrenda. 12:00 PM – Ingreso al Temazcalli para iniciar la ceremonia. 03:00 PM – Finalización de ceremonia, refrigerio y tiempo de descanso. 05:00 PM – Retorno a Urubamba.",
        descriptionEn: "08:00 AM – Pick-up from your accommodation and transfer to Arin village. 09:00 AM – Start of the Andean offering (approx. 1.5 hours). 11:30 AM – Burning of the offering in the sacred fire. 12:00 PM – Entry into the temazcalli (sweat lodge) to begin the ceremony (approx. 3 hours). 03:00 PM – End of the ceremony, lunch, and relaxation time. 05:00 PM – Return transfer to your accommodation.",
        highlights: ["Ofrenda Andina", "Ceremonia Temazcalli"],
        highlightsEn: [
      "Andean offering",
      "Temazcalli Ceremony"
    ],
        meals: "Snack",
        mealsEn: "Snack",
        accommodation: "",
        accommodationEn: ""
      }
    ],
    gallery: [
      { id: "edjdao3u", type: "image", url: "/images/full-day-spiritual/full-day-spiritual-gallery-1.jpg" },
      { id: "7yc37dbe", type: "image", url: "/images/full-day-spiritual/full-day-spiritual-gallery-2.jpg" },
      { id: "euhqigy8", type: "image", url: "/images/full-day-spiritual/full-day-spiritual-gallery-3.jpg" },
      { id: "27m4dd0k", type: "image", url: "/images/full-day-spiritual/full-day-spiritual-gallery-4.jpg" },
      { id: "jmroqi7q", type: "image", url: "/images/full-day-spiritual/full-day-spiritual-gallery-5.jpg" },
      { id: "69o7fu7n", type: "image", url: "/images/full-day-spiritual/full-day-spiritual-gallery-6.jpg" },
      { id: "ufu1cgsj", type: "image", url: "/images/full-day-spiritual/full-day-spiritual-gallery-7.jpg" },
      { id: "9wf13hf3", type: "image", url: "/images/full-day-spiritual/full-day-spiritual-gallery-8.jpg" },
      { id: "7rhgjrzj", type: "image", url: "/images/full-day-spiritual/full-day-spiritual-gallery-9.jpg" },
      { id: "1gb9usdg", type: "image", url: "/images/full-day-spiritual/full-day-spiritual-gallery-10.jpg" },
      { id: "h5d4d059", type: "image", url: "/images/full-day-spiritual/full-day-spiritual-gallery-11.jpg" },
      { id: "x6jxdzxy", type: "image", url: "/images/full-day-spiritual/full-day-spiritual-gallery-12.jpg" },
      { id: "qn2jcnu2", type: "image", url: "/images/full-day-spiritual/full-day-spiritual-gallery-13.jpg" },
    ]
  },
  {
    id: "half-day-spiritual",
    categories: ["ceremonias"],
    name: "Ofrenda Ancestral Andina",
    nameEn: "Ancestral Andean Offering",
    heroImage: "/images/half-day-spiritual/half-day-spiritual-hero.jpg",
    tagline: "Sé parte de una ceremonia ancestral de conexión con el mundo andino.",
    taglineEn: "Be part of an ancestral ceremony of connection with the Andean world.",
    duration: "Medio día",
    durationEn: "Half day",
    difficulty: "Fácil",
    difficultyEn: "Easy",
    elevation: "",
    elevationEn: "",
    bestSeason: "",
    bestSeasonEn: "",
    price: 500,
    description: "Esta experiencia espiritual de medio día se centra en uno de los rituales más importantes de la cosmovisión andina: la ofrenda o “Despacho”. La ceremonia es guiada por un líder espiritual perteneciente a la nación Q’eros, comunidades consideradas descendientes directas de la tradición inca. Durante la experiencia también se realiza la lectura de hojas de coca, un ritual ancestral que permite hacer consultas sobre la vida y el camino personal.",
    descriptionEn: "This half-day spiritual experience focuses on one of the most important rituals in Andean cosmology: the Andean offering, also known as “Despacho”. The ceremony is guided by a spiritual leader from the Q’eros communities, considered direct descendants of the Inca tradition. The experience also includes a coca leaf reading, an ancient ritual that allows participants to ask questions about life and their personal path.",
    highlights: ["Ofrenda andina y limpieza energética", "Lectura de hojas de coca", "Guía espiritual Q'ero"],
    highlightsEn: [
      "Andean offering and energetic cleansing",
      "Coca leaf reading",
      "Q'ero spiritual guide"
    ],
    includes: [
      "Transporte ida y retorno desde el punto de encuentro",
      "Guía",
      "Ofrenda andina y limpieza energética",
      "Lectura de hojas de coca",
      "Snack"
    ],
    includesEn: [
      "Round-trip transportation from the meeting point",
      "Guide",
      "Ofrenda andina y limpieza energética",
      "Coca leaf reading",
      "Snack"
    ],
    notIncludes: [
      "Transporte al punto de encuentro",
      "Gastos personales",
      "Snack"
    ],
    notIncludesEn: [
      "Transportation to the meeting point",
      "Personal expenses",
      "Snack"
    ],
    requirements: [
      "Sombrero o gorra",
      "Ropa cómoda",
      "Bloqueador solar",
      "Repelente",
      "Botella de agua",
      "Dinero en efectivo",
      "DNI o Pasaporte",
      "Cámara fotográfica"
    ],
    requirementsEn: [
      "Hat or cap",
      "Ropa cómoda",
      "Sunscreen",
      "Insect repellent",
      "Water bottle",
      "Cash",
      "ID or Passport",
      "Camera"
    ],
    itinerary: [
      {
        day: 1,
        title: "Valle Sagrado – Templo Ancestral – Valle Sagrado",
        titleEn: "Sacred Valley – Ancient Temple – Sacred Valley",
        description: "08:00 AM – Partimos desde Urubamba y nos trasladamos en transporte privado hacia el lugar de la ofrenda. 09:00 AM – Inicio de la experiencia con la lectura de hojas de coca, seguida de la preparación de la ofrenda andina guiada por el líder espiritual. 12:00 PM – Ascenso a la Catarata de Arín. 13:30 PM – Retorno a Urubamba.",
        descriptionEn: "08:00 AM – Pick-up from your accommodation and transfer to an ancient temple in the Sacred Valley of the Incas. 09:00 AM – Start of the experience with coca leaf reading, followed by the preparation of the Andean offering guided by the spiritual leader. 12:30 PM – End of the experience and return.",
        highlights: ["Lectura de Coca", "Ofrenda Andina"],
        highlightsEn: [
      "Coca reading",
      "Andean offering"
    ],
        meals: "Snack",
        mealsEn: "Box Lunch",
        accommodation: "",
        accommodationEn: ""
      }
    ],
    gallery: [
      { id: "jf9q7qjh", type: "image", url: "/images/half-day-spiritual/half-day-spiritual-gallery-1.jpg" },
      { id: "r4rzlrgy", type: "image", url: "/images/half-day-spiritual/half-day-spiritual-gallery-2.jpg" },
      { id: "dk6njn2p", type: "image", url: "/images/half-day-spiritual/half-day-spiritual-gallery-3.jpg" },
      { id: "i75it110", type: "image", url: "/images/half-day-spiritual/half-day-spiritual-gallery-4.jpg" },
      { id: "jwv2wk2e", type: "image", url: "/images/half-day-spiritual/half-day-spiritual-gallery-5.jpg" },
      { id: "0qg11rtj", type: "image", url: "/images/half-day-spiritual/half-day-spiritual-gallery-6.jpg" },
      { id: "2yf7jiab", type: "image", url: "/images/half-day-spiritual/half-day-spiritual-gallery-7.jpg" },
      { id: "88euzvdb", type: "image", url: "/images/half-day-spiritual/half-day-spiritual-gallery-8.jpg" },
      { id: "3no5a0v4", type: "image", url: "/images/half-day-spiritual/half-day-spiritual-gallery-9.jpg" },
      { id: "ur8f3ykn", type: "image", url: "/images/half-day-spiritual/half-day-spiritual-gallery-10.jpg" },
      { id: "j1apr99c", type: "image", url: "/images/half-day-spiritual/half-day-spiritual-gallery-11.jpg" },
      { id: "j8y2rz6r", type: "image", url: "/images/half-day-spiritual/half-day-spiritual-gallery-12.jpg" },
      { id: "3duv22lv", type: "image", url: "/images/half-day-spiritual/half-day-spiritual-gallery-13.jpg" },
      { id: "23hmx8b5", type: "image", url: "/images/half-day-spiritual/half-day-spiritual-gallery-14.jpg" },
      { id: "zlx61bd8", type: "image", url: "/images/half-day-spiritual/half-day-spiritual-gallery-15.jpg" },
      { id: "q6ryl4ed", type: "image", url: "/images/half-day-spiritual/half-day-spiritual-gallery-16.jpg" },
      { id: "36q7giho", type: "image", url: "/images/half-day-spiritual/half-day-spiritual-gallery-17.jpg" },
      { id: "o3fnu4rd", type: "image", url: "/images/half-day-spiritual/half-day-spiritual-gallery-18.jpg" },
      { id: "q1km1gb8", type: "image", url: "/images/half-day-spiritual/half-day-spiritual-gallery-19.jpg" },
      { id: "8itzkice", type: "image", url: "/images/half-day-spiritual/half-day-spiritual-gallery-20.jpg" },
    ]
  },

];

const categoryOrder: Record<ActivityCategory, string[]> = {
  rutas: [
    "naupa-waka",
    "cancha-cancha",
    "inti-punku",
    "lares-trek-3d2n",
    "pumawanka",
    "ausangate-trek-3d2n",
    "pumamarca",
    "quishuarani-2d1n",
    "cancha-cancha-2d1n",
    "choquequirao-trek",
    "manu-rainforest-3d2n",
  ],
  comunidad: [
    "cancha-cancha",
    "cancha-cancha-2d1n",
    "lares-trek-3d2n",
    "quishuarani-2d1n",
    "ausangate-trek-3d2n",
  ],
  ceremonias: [
    "half-day-spiritual",
    "full-day-spiritual",
  ],
};

// Global order: rutas first (covers shared comunidad packages), then
// any comunidad-only not already listed, then ceremonias — spirituals always last.
const allOrder = [
  "naupa-waka",
  "cancha-cancha",
  "inti-punku",
  "lares-trek-3d2n",
  "pumawanka",
  "ausangate-trek-3d2n",
  "pumamarca",
  "quishuarani-2d1n",
  "cancha-cancha-2d1n",
  "choquequirao-trek",
  "manu-rainforest-3d2n",
  "half-day-spiritual",
  "full-day-spiritual",
];

export const getPackagesByCategory = (category: ActivityCategory) => {
  const order = categoryOrder[category];
  const filtered = packages.filter((p) => p.categories.includes(category));
  if (!order.length) return filtered;
  return filtered.sort((a, b) => {
    const ai = order.indexOf(a.id);
    const bi = order.indexOf(b.id);
    const aPos = ai === -1 ? Infinity : ai;
    const bPos = bi === -1 ? Infinity : bi;
    return aPos - bPos;
  });
};

export const getAllPackagesSorted = () =>
  [...packages].sort((a, b) => {
    const ai = allOrder.indexOf(a.id);
    const bi = allOrder.indexOf(b.id);
    const aPos = ai === -1 ? Infinity : ai;
    const bPos = bi === -1 ? Infinity : bi;
    return aPos - bPos;
  });

export const getPackageById = (id: string) =>
  packages.find((p) => p.id === id);

