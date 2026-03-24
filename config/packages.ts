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
  // RUTAS - Cancha Cancha Full Day
  {
    id: "cancha-cancha",
    categories: ["comunidad", "rutas"],
    name: "Cancha Cancha",
    nameEn: "Cancha Cancha",
    heroImage: "/images/cancha-cancha/IMG_0238.jpg",
    tagline: "Caminata y Encuentro con una Comunidad Altoandina",
    taglineEn: "Hike and encounter with a high Andean community",
    duration: "Día completo",
    durationEn: "Full day",
    difficulty: "Moderado",
    difficultyEn: "Moderate",
    elevation: "3,200m. - 4,000m.",
    bestSeason: "",
    bestSeasonEn: "",
    price: 100,
    description: "Esta caminata de día completo se realiza en el valle de Huaran, dentro de la cordillera del Urubamba. El recorrido ofrece paisajes naturales, flora nativa y ecosistemas altoandinos. La experiencia culmina en la comunidad altoandina de Cancha Cancha, donde una familia local recibe a los visitantes para compartir un almuerzo tradicional y conocer su forma de vida, agricultura, ganadería y textiles ancestrales.",
    descriptionEn: "This full-day trek takes place in the Huaran Valley, located in the Urubamba mountain range. The route offers scenic landscapes with native plants, high-Andean ecosystems, and traditional rural life. The experience culminates in the high Andean community of Cancha Cancha, where visitors are welcomed by a local family to share a traditional lunch and learn about daily life, agriculture, livestock, and traditional textiles.",
    highlights: ["Comunidad Cancha Cancha", "Almuerzo tradicional", "Textiles ancestrales", "Ecosistemas altoandinos"],
    highlightsEn: ["Cancha Cancha community", "Traditional lunch", "Ancestral textiles", "High-Andean ecosystems"],
    includes: [
      "Guía profesional",
      "Almuerzo local tradicional",
      "Experiencia cultural con familia local"
    ],
    includesEn: [
      "Professional guide",
      "Traditional local lunch",
      "Cultural experience with a local family"
    ],
    notIncludes: [
      "Transporte privado ida y vuelta",
      "Snacks personales",
      "Equipo personal de montaña"
    ],
    notIncludesEn: [
      "Private round-trip transportation",
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
      "Ropa para Lluvia"
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
      { id: "wo26pxrc", type: "image", url: "/images/cancha-cancha/IMG_0119.jpg" },
      { id: "nmuqkjm4", type: "image", url: "/images/cancha-cancha/IMG_0177.jpg" },
      { id: "9rkw1vm2", type: "image", url: "/images/cancha-cancha/IMG_0211-2.jpg" },
      { id: "gyfpmb5c", type: "image", url: "/images/cancha-cancha/IMG_0238.jpg" },
      { id: "mquz6z6p", type: "image", url: "/images/cancha-cancha/IMG_0291.jpg" },
      { id: "g3fy0ios", type: "image", url: "/images/cancha-cancha/IMG_0299.jpg" },
      { id: "5dmp6qap", type: "image", url: "/images/cancha-cancha/IMG_0302.jpg" },
      { id: "uyracmto", type: "image", url: "/images/cancha-cancha/IMG_0307.jpg" },
      { id: "4zzfcf59", type: "image", url: "/images/cancha-cancha/IMG_0310.jpg" },
      { id: "3s3d5skl", type: "image", url: "/images/cancha-cancha/IMG_0312.jpg" },
      { id: "07j3lijr", type: "image", url: "/images/cancha-cancha/IMG_0338.jpg" },
      { id: "he04sxmi", type: "image", url: "/images/cancha-cancha/IMG_0344.jpg" },
      { id: "cz73rzm0", type: "image", url: "/images/cancha-cancha/IMG_5994.jpg" },
      { id: "np73pg8d", type: "image", url: "/images/cancha-cancha/IMG_6001.jpg" },
      { id: "i6s7wwxd", type: "image", url: "/images/cancha-cancha/IMG_7271.jpg" },
      { id: "mesxpz3o", type: "image", url: "/images/cancha-cancha/IMG_9323.jpg" }
    ]
  },

  // RUTAS - Inti Punku Full Day
  {
    id: "inti-punku",
    categories: ["rutas"],
    name: "Inti Punku",
    nameEn: "Inti Punku",
    heroImage: "/images/inti-punku/IMG_5633.jpg",
    tagline: "Camina hacia el portal sagrado de los incas",
    taglineEn: "Hike to the sacred Inca portal",
    duration: "Día completo",
    durationEn: "Full day",
    difficulty: "Moderado",
    difficultyEn: "Moderate",
    elevation: "Cacchicata – Inti Punku",
    bestSeason: "",
    bestSeasonEn: "",
    price: 150,
    description: "Esta caminata de día completo se realiza en los alrededores del histórico pueblo inca de Ollantaytambo. Un transporte nos lleva hasta la comunidad andina de Cacchicata, punto de inicio de la caminata. El recorrido incluye aproximadamente cuatro horas de ascenso a través de paisajes con flora y fauna nativa. La caminata conduce a un sitio arqueológico enigmático y culmina en Inti Punku, conocido por los incas como la Puerta del Sol, un portal sagrado con una de las mejores vistas del Valle Sagrado, el río Wilkamayu y la montaña sagrada Apu Waqay Willka (Apu Verónica).",
    descriptionEn: "This full-day hike takes place just outside the historic Inca town of Ollantaytambo. Transportation takes us to the Andean community of Cacchicata, where the trek begins. The route includes approximately four hours of ascent through landscapes rich in native flora and fauna. The hike leads to an enigmatic archaeological site and culminates at Inti Punku, known by the Incas as the Sun Gate — a sacred portal offering one of the most impressive panoramic views of the Sacred Valley, the Wilkamayu River, and the sacred mountain Apu Waqay Willka (Apu Veronica).",
    highlights: ["Comunidad de Cacchicata", "Puerta del Sol (Inti Punku)", "Vistas del Apu Verónica", "Canteras Incas"],
    highlightsEn: ["Cacchicata Community", "Sun Gate (Inti Punku)", "Views of Apu Veronica", "Inca Quarries"],
    includes: [
      "Guía profesional",
      "Almuerzo tipo box lunch",
      "Interpretación cultural e histórica"
    ],
    includesEn: [
      "Professional guide",
      "Box lunch",
      "Cultural and historical interpretation"
    ],
    notIncludes: [
      "Snacks personales",
      "Equipo personal de montaña",
      "Transporte privado ida y vuelta desde el Valle Sagrado"
    ],
    notIncludesEn: [
      "Private round-trip transportation from the Sacred Valley",
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
      "Ropa para Lluvia"
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
        title: "Valle Sagrado – Cacchicata – Inti Punku",
        titleEn: "Sacred Valley – Cacchicata – Inti Punku",
        description: "06:30 AM – Recojo desde su alojamiento en el Valle Sagrado y traslado a la comunidad de Cacchicata. 08:00 AM – Inicio de la caminata. Ascenso de aproximadamente 3 a 4 horas. 12:00 PM – Llegada a Inti Punku. Tiempo de descanso, apreciación del paisaje, ofrenda andina tradicional y almuerzo tipo box lunch. 02:00 PM – Inicio del descenso, visitando las antiguas canteras incas de Cacchicata. 05:00 PM – Fin de la caminata y traslado privado de retorno.",
        descriptionEn: "06:30 AM – Pick-up from your accommodation in the Sacred Valley and transfer to Cacchicata. 08:00 AM – Start of the hike. Ascent of approximately 3 to 4 hours. 12:00 PM – Arrival at Inti Punku. Time to rest, enjoy the views, perform a traditional Andean offering, and enjoy a box lunch. 02:00 PM – Start of the descent, passing by the ancient Inca quarries of Cacchicata. 05:00 PM – End of the hike and private transfer back to your accommodation.",
        highlights: ["Inti Punku", "Canteras Incas"],
        highlightsEn: ["Inti Punku", "Inca Quarries"],
        meals: "Almuerzo",
        mealsEn: "Lunch",
        accommodation: "",
        accommodationEn: ""
      }
    ],
    gallery: [
      { id: "8cre13hd", type: "image", url: "/images/inti-punku/IMG_5633.jpg" },
      { id: "z69mfj6m", type: "image", url: "/images/inti-punku/IMG_5648-2.jpg" },
      { id: "nvje1lwn", type: "image", url: "/images/inti-punku/IMG_5658.jpg" },
      { id: "u0xkm7h5", type: "image", url: "/images/inti-punku/32627201693_5cc37e75b2_o.jpg" },
      { id: "d3jsumxy", type: "image", url: "/images/inti-punku/33121893274_e26c65da39_o.jpg" },
      { id: "9zxs64gn", type: "image", url: "/images/inti-punku/33580393130_c342837737_o.jpg" },
      { id: "p7z0gzv3", type: "image", url: "/images/inti-punku/33924324086_3318d9120b_o.jpg" }
    ]
  },

  // RUTAS - Naupa Waka Half Day
  {
    id: "naupa-waka",
    categories: ["rutas", "ceremonias"],
    name: "Ñaupa Waka",
    nameEn: "Ñaupa Waka",
    heroImage: "/images/naupa-waka/IMG_4874.jpg",
    tagline: "Portal dimensional y centro ceremonial Inca",
    taglineEn: "Dimensional portal and Inca ceremonial center",
    duration: "Medio día",
    durationEn: "Half day",
    difficulty: "Fácil",
    difficultyEn: "Easy",
    elevation: "Pacchar, Valle Sagrado",
    bestSeason: "",
    bestSeasonEn: "",
    price: 80,
    description: "Esta experiencia de medio día se desarrolla en el Valle Sagrado de los Incas, cerca del pueblo de Pacchar, ubicado antes de Ollantaytambo. El recorrido conduce a un extraordinario sitio ceremonial inca oculto en la montaña. Tras una corta caminata en ascenso, se llega a Ñaupa Waka, un oráculo sagrado utilizado como centro ceremonial y observatorio estelar. En el interior de una cueva se encuentra un altar de piedra tallado con formas geométricas relacionadas con la Chakana inca, símbolo de gran importancia espiritual. Es un lugar único y especial, ideal para quienes buscan una conexión profunda con la cultura andina.",
    descriptionEn: "This half-day experience takes place in the Sacred Valley of the Incas, near the town of Pacchar, located before Ollantaytambo. The journey leads to an extraordinary Inca ceremonial site hidden within the mountain. After a short uphill walk, visitors reach Ñaupa Waka, a sacred Inca oracle believed to have been used as a ceremonial center and stellar observatory. Inside a cave, a carved stone altar displays geometric shapes closely related to the Inca Chakana, a symbol of great spiritual importance. This is a unique and powerful place, ideal for travelers seeking a deep cultural and spiritual connection.",
    highlights: ["Altar de piedra tallado", "Observatorio estelar Inca", "Ofrenda de hojas de coca", "Cervecería del Valle Sagrado (opcional)"],
    highlightsEn: ["Carved stone altar", "Inca stellar observatory", "Coca leaf offering", "Sacred Valley Brewery (optional)"],
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
        title: "Valle Sagrado – Pacchar – Ñaupa Waka",
        titleEn: "Sacred Valley – Pacchar – Ñaupa Waka",
        description: "08:30 AM – Recojo desde su hotel en el Valle Sagrado y traslado al pueblo de Pacchar (aprox. 45 minutos). 09:30 AM – Llegada al punto de inicio y caminata corta de 25–30 minutos en ascenso hacia las terrazas incas y el templo. 10:00 AM – Visita al templo sagrado de Ñaupa Waka. Ofrenda andina tradicional con hojas de coca, acompañada de música intuitiva para conectar con el lugar. Tiempo libre para recorrer y disfrutar del sitio (aprox. 2 horas). 12:00 PM – Descenso hacia Pacchar y visita a la Cervecería del Valle Sagrado, donde se puede disfrutar de cerveza artesanal y comida local (opcional). 01:00 PM – Traslado privado de retorno a su hotel.",
        descriptionEn: "08:30 AM – Pick-up from your hotel in the Sacred Valley and transfer to the town of Pacchar (approx. 45 minutes). 09:30 AM – Arrival at the starting point. Short uphill walk of approximately 25–30 minutes towards the Inca terraces and temple. 10:00 AM – Visit to the sacred temple of Ñaupa Waka. Traditional Andean offering using coca leaves, accompanied by intuitive music to connect with the place. Free time to explore and enjoy the site (approx. 2 hours). 12:00 PM – Descent back to Pacchar and visit to the Sacred Valley Brewery, where you can enjoy handmade beer and local food (optional). 01:00 PM – Private transport back to your hotel.",
        highlights: ["Ñaupa Waka", "Ofrenda Andina"],
        highlightsEn: ["Ñaupa Waka", "Andean Offering"],
        meals: "Snack",
        mealsEn: "Snack",
        accommodation: "N/A",
        accommodationEn: "N/A"
      }
    ],
    gallery: [
      { id: "ownnf9bq", type: "image", url: "/images/naupa-waka/escalinata.jpg" },
      { id: "beg4klvk", type: "image", url: "/images/naupa-waka/IMG_4853-copia.jpg" },
      { id: "qhc121vl", type: "image", url: "/images/naupa-waka/IMG_4854-copia.jpg" },
      { id: "3v3v3tlp", type: "image", url: "/images/naupa-waka/IMG_4874.jpg" },
      { id: "3o3k4l07", type: "image", url: "/images/naupa-waka/IMG_4921.jpg" },
      { id: "c50lsw5i", type: "image", url: "/images/naupa-waka/IMG_4985.jpg" },
      { id: "whiih4i2", type: "image", url: "/images/naupa-waka/momias.jpg" }
    ]
  },

  // RUTAS - Pumamarca Full Day
  {
    id: "pumamarca",
    categories: ["rutas"],
    name: "Pumamarca",
    nameEn: "Pumamarca",
    heroImage: "/images/pumamarca/IMG_5005.jpg",
    tagline: "Caminata por valles y sistemas de terrazas pre-incas",
    taglineEn: "Hike through valleys and pre-Inca terrace systems",
    duration: "Día completo",
    durationEn: "Full day",
    difficulty: "Moderado",
    difficultyEn: "Moderate",
    elevation: "Munaypata – Pumamarca",
    bestSeason: "",
    bestSeasonEn: "",
    price: 85,
    description: "Esta hermosa caminata de día completo se realiza en los alrededores del histórico pueblo de Ollantaytambo. El recorrido atraviesa un valle con gran diversidad de plantas nativas, riachuelos y antiguos sistemas de terrazas agrícolas. La caminata inicia en Munaypata, una pequeña comunidad andina ubicada a unos 10 minutos de Ollantaytambo. Tras un ascenso gradual de aproximadamente tres horas, se llega al sitio arqueológico preinca de Pumamarca, donde es posible apreciar la magnitud de su construcción, su ubicación estratégica y su notable ingeniería, todo ello acompañado de vistas impresionantes de los valles y montañas circundantes.",
    descriptionEn: "This beautiful full-day hike takes place on the outskirts of the historic town of Ollantaytambo. The route crosses a scenic valley rich in native plants, streams, and ancient agricultural terrace systems. The hike begins in Munaypata, a small Andean community located approximately 10 minutes from Ollantaytambo. After a gradual ascent of about three hours, we reach the pre-Inca archaeological site of Pumamarca, where visitors can appreciate its impressive architecture, strategic location, and advanced engineering, all surrounded by spectacular views of the surrounding valleys and mountains.",
    highlights: ["Comunidad de Munaypata", "Sitio arqueológico de Pumamarca", "Terrazas Incas y Pre-Incas", "Vistas del Valle Sagrado"],
    highlightsEn: ["Munaypata community", "Pumamarca archaeological site", "Inca and Pre-Inca terraces", "Sacred Valley views"],
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
      "Ropa para Lluvia"
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
        title: "Valle Sagrado – Munaypata – Pumamarca",
        titleEn: "Sacred Valley – Munaypata – Pumamarca",
        description: "07:00 AM – Recojo desde su hotel en el Valle Sagrado y traslado al punto de inicio en Munaypata, Ollantaytambo. 08:30 AM – Inicio de la caminata. Durante el ascenso se observan antiguas terrazas incas y paisajes impresionantes. 11:30 AM – Llegada al sitio arqueológico de Pumamarca. Tiempo para descansar, recorrer el complejo preinca, disfrutar de las vistas panorámicas y almorzar (box lunch). 01:30 PM – Inicio de la caminata de retorno hacia Ollantaytambo (aprox. 3 horas). 04:00 PM – Llegada a Ollantaytambo and traslado de retorno a su hotel.",
        descriptionEn: "07:00 AM – Pick-up from your hotel in the Sacred Valley and transfer to the starting point in Munaypata, Ollantaytambo. 08:30 AM – Start of the hike. During the ascent, we observe ancient Inca terraces and enjoy stunning landscapes. 11:30 AM – Arrival at the archaeological site of Pumamarca. Time to rest, explore the pre-Inca ruins, enjoy panoramic views, and have a box lunch. 01:30 PM – Start of the return hike to Ollantaytambo (approx. 3 hours). 04:00 PM – Arrival in Ollantaytambo and transfer back to your hotel.",
        highlights: ["Sitio Pumamarca", "Vistas panorámicas"],
        highlightsEn: ["Pumamarca site", "Panoramic views"],
        meals: "Almuerzo",
        mealsEn: "Lunch",
        accommodation: "N/A",
        accommodationEn: "N/A"
      }
    ],
    gallery: [
      { id: "x8amaj78", type: "image", url: "/images/pumamarca/IMG_4987.jpg" },
      { id: "sdu9j8w1", type: "image", url: "/images/pumamarca/IMG_5005.jpg" },
      { id: "8p7a7jkj", type: "image", url: "/images/pumamarca/IMG_5010.jpg" },
      { id: "fh6sy0e7", type: "image", url: "/images/pumamarca/IMG_5011.jpg" },
      { id: "lllujbzd", type: "image", url: "/images/pumamarca/IMG_5013.jpg" },
      { id: "foulh0eq", type: "image", url: "/images/pumamarca/IMG_5024.jpg" },
      { id: "pftuzj9k", type: "image", url: "/images/pumamarca/IMG_5028.jpg" },
      { id: "e5tp9bpk", type: "image", url: "/images/pumamarca/IMG_5074.jpg" },
      { id: "7rlt42ga", type: "image", url: "/images/pumamarca/IMG_5084.jpg" },
      { id: "wcsfn4ge", type: "image", url: "/images/pumamarca/IMG_5096.jpg" },
      { id: "2276nqtt", type: "image", url: "/images/pumamarca/IMG_5149.jpg" },
      { id: "i3os763e", type: "image", url: "/images/pumamarca/IMG_5179.jpg" },
      { id: "f3mjb590", type: "image", url: "/images/pumamarca/IMG_5202.jpg" }
    ]
  },

  // RUTAS - Pumawanka Full Day
  {
    id: "pumawanka",
    categories: ["rutas"],
    name: "Pumawanka",
    nameEn: "Pumawanka",
    heroImage: "/images/pumawanka/IMG_5694.jpg",
    tagline: "Caminata por el valle sagrado de Pumawanka y sus cascadas",
    taglineEn: "Hike through the sacred Pumawanka valley and its waterfalls",
    duration: "Día completo",
    durationEn: "Full day",
    difficulty: "Fácil a Moderado",
    difficultyEn: "Easy to Moderate",
    elevation: "3700m max.",
    bestSeason: "",
    bestSeasonEn: "",
    price: 100,
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
      "Transportation from your location to Chupani (starting point)",
      "Personal snacks",
      "Personal mountain equipment"
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
        title: "Valle Sagrado – Chupani – Pumawanka",
        titleEn: "Sacred Valley – Chupani – Pumawanka",
        description: "08:00 AM – Recojo desde su alojamiento en el Valle Sagrado y traslado a Chupani, punto de inicio de la caminata. 09:00 AM – Inicio de la caminata, ascendiendo por el valle en contacto pleno con la naturaleza (aprox. 2 horas). 11:00 AM – Llegada al sitio arqueológico Inca Raqay y posterior caminata hacia la comunidad altoandina de Sutoc Paccha. Aquí se realiza una ofrenda andina tradicional con hojas de coca. 01:00 PM – Continuamos una hora más de caminata hasta las cascadas, donde se disfruta del almuerzo y tiempo de descanso con vistas espectaculares. 02:30 PM – Inicio del descenso de retorno por el valle. 04:00 PM – Llegada a Chupani y traslado de retorno a su hotel.",
        descriptionEn: "08:00 AM – Pick-up from your accommodation in the Sacred Valley and transfer to Chupani, the starting point of the trek. 09:00 AM – Start of the hike, ascending through the valley surrounded by pristine nature (approximately 2 hours). 11:00 AM – Arrival at the Inca Raqay archaeological site, followed by a short walk to the high-Andean community of Sutoc Paccha. Here, we perform a traditional Andean offering using coca leaves. 01:00 PM – Continue hiking for one more hour to reach the waterfalls, where we enjoy lunch and time to rest with spectacular valley views. 02:30 PM – Begin the descent back through the valley. 04:00 PM – Arrival in Chupani. Private transfer back to your hotel.",
        highlights: ["Inca Raqay", "Cascadas"],
        highlightsEn: ["Inca Raqay", "Waterfalls"],
        meals: "Almuerzo",
        mealsEn: "Lunch",
        accommodation: "",
        accommodationEn: ""
      }
    ],
    gallery: [
      { id: "5768l9u8", type: "image", url: "/images/pumawanka/IMG_5496.jpg" },
      { id: "75v3phq3", type: "image", url: "/images/pumawanka/IMG_5498.jpg" },
      { id: "nq56cwkq", type: "image", url: "/images/pumawanka/IMG_5504.jpg" },
      { id: "svjxprra", type: "image", url: "/images/pumawanka/IMG_5514.jpg" },
      { id: "i43wtum3", type: "image", url: "/images/pumawanka/IMG_5519.jpg" },
      { id: "jgbxxdzk", type: "image", url: "/images/pumawanka/IMG_5694.jpg" },
      { id: "3x11vtbk", type: "image", url: "/images/pumawanka/IMG_5713.jpg" },
      { id: "ljfad0zr", type: "image", url: "/images/pumawanka/IMG_5719.jpg" },
      { id: "1pn3w95k", type: "image", url: "/images/pumawanka/IMG_5722.jpg" },
      { id: "90u8ni5w", type: "image", url: "/images/pumawanka/IMG_5733.jpg" },
      { id: "gcqcwg8u", type: "image", url: "/images/pumawanka/IMG_5739.jpg" }
    ]
  },

  // RUTAS - Ausangate Trek 3D2N
  {
    id: "ausangate-trek-3d2n",
    categories: ["comunidad", "rutas"],
    name: "Ausangate",
    nameEn: "Ausangate",
    heroImage: "/images/ausangate-trek/IMG_8942.jpg",
    tagline: "Descubre al Apu más importante de la cultura andina, sus hermosas lagunas y paisajes alto andinos.",
    taglineEn: "Discover the most important Apu of Andean culture, its beautiful lagoons and high Andean landscapes.",
    duration: "3 días / 2 noches",
    durationEn: "3 days / 2 nights",
    difficulty: "Moderada",
    difficultyEn: "Moderate",
    elevation: "4,800m máx.",
    bestSeason: "",
    bestSeasonEn: "",
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
        title: "Cusco – Pacchanta",
        titleEn: "Cusco – Pacchanta",
        description: "12:00 PM – Recojo desde el Valle Sagrado y traslado al pueblo de Pacchanta (4,200 m s. n. m.). Tiempo aproximado de viaje: 4 horas en vehículo privado. 4:00 PM – Llegada a Pacchanta. Alojamiento en casa de una familia local, con alimentación incluida. La tarde está dedicada a la aclimatación, con una caminata suave por la zona y tiempo para relajarse en las aguas termales naturales. Cena y pernocte.",
        descriptionEn: "12:00 PM – Pick-up from the Sacred Valley and transfer to the village of Pacchanta (4,200 m a.s.l.). Approximate travel time: 4 hours by private vehicle. 4:00 PM – Arrival in Pacchanta. Overnight stay with a local family, including meals and basic accommodation. The afternoon is dedicated to acclimatization, including a gentle walk and time to relax in the natural hot springs. Dinner and overnight stay.",
        highlights: ["Aguas termales", "Aclimatación"],
        highlightsEn: ["Hot springs", "Acclimatization"],
        meals: "Cena",
        mealsEn: "Dinner",
        accommodation: "Casa de familia local",
        accommodationEn: "Local family home"
      },
      {
        day: 2,
        title: "Siete Lagunas del Ausangate",
        titleEn: "Seven Lakes of Ausangate",
        description: "7:00 AM – Caminata de día completo para visitar las Siete Lagunas del Ausangate (ida y vuelta: 4 a 6 horas). Altitud máxima: 4,800 m s. n. m. Si las condiciones climáticas son favorables, existe la posibilidad de pasar la noche en la montaña en campamento. Si el clima no es favorable, retorno a Pacchanta para el almuerzo y tiempo adicional en las aguas termales. Cena y última noche en Pacchanta.",
        descriptionEn: "7:00 AM – Full-day hike to visit the Seven Lakes of Ausangate (round trip: 4–6 hours). Highest altitude: 4,800 m a.s.l. If weather conditions are favorable, there is the possibility of camping overnight in the mountains. If weather conditions are unfavorable, return to Pacchanta for lunch and additional time at the hot springs. Dinner and overnight stay in Pacchanta.",
        highlights: ["Siete Lagunas", "Vista del Apu Ausangate"],
        highlightsEn: ["Seven Lakes", "Apu Ausangate View"],
        meals: "Desayuno, Almuerzo, Cena",
        mealsEn: "Breakfast, Lunch, Dinner",
        accommodation: "Casa de familia o Campamento",
        accommodationEn: "Local family home or Camping"
      },
      {
        day: 3,
        title: "Pacchanta – Cusco",
        titleEn: "Pacchanta – Cusco",
        description: "7:00 AM – Retorno en vehículo privado al Valle Sagrado de los Incas. Tiempo aproximado de viaje: 4 horas.",
        descriptionEn: "7:00 AM – Departure by private vehicle back to the Sacred Valley of the Incas. Approximate travel time: 4 hours.",
        highlights: ["Retorno"],
        highlightsEn: ["Return"],
        meals: "Desayuno",
        mealsEn: "Breakfast",
        accommodation: "Fin del tour",
        accommodationEn: "End of tour"
      }
    ],
    gallery: [
      { id: "3ptjsyyr", type: "image", url: "/images/ausangate-trek/IMG_8942.jpg" },
      { id: "ssh7dzs8", type: "image", url: "/images/ausangate-trek/IMG_8938.jpg" },
      { id: "yfyqyacu", type: "image", url: "/images/ausangate-trek/IMG_8960.jpg" },
      { id: "cgg9kjw9", type: "image", url: "/images/ausangate-trek/IMG_8971.jpg" },
      { id: "vkjvxth7", type: "image", url: "/images/ausangate-trek/IMG_8952.jpg" },
      { id: "vjs5sapm", type: "image", url: "/images/ausangate-trek/IMG_8970.jpg" },
      { id: "1rkpws5x", type: "image", url: "/images/ausangate-trek/IMG_8937.jpg" },
      { id: "8zn1uphy", type: "image", url: "/images/ausangate-trek/IMG_3172.jpg" },
      { id: "jv34p7gl", type: "image", url: "/images/ausangate-trek/IMG_3130.jpg" },
      { id: "13afaas2", type: "image", url: "/images/ausangate-trek/IMG_3148.jpg" },
      { id: "cza8tz99", type: "image", url: "/images/ausangate-trek/IMG_3159.jpg" },
      { id: "45oljv5q", type: "image", url: "/images/ausangate-trek/IMG_3200.jpg" },
      { id: "dznmpjf9", type: "image", url: "/images/ausangate-trek/IMG_8550.jpg" },
      { id: "zwdegzvl", type: "image", url: "/images/ausangate-trek/IMG_8523.jpg" },
      { id: "d0v4ftz5", type: "image", url: "/images/ausangate-trek/IMG_8544.jpg" },
      { id: "3o31kzo1", type: "image", url: "/images/ausangate-trek/IMG_8788.jpg" },
      { id: "xu1fy9mo", type: "image", url: "/images/ausangate-trek/IMG_8798.jpg" },
      { id: "dk7wdyrq", type: "image", url: "/images/ausangate-trek/IMG_9123-2.jpg" }
    ]
  },

  // RUTAS - Lares Trek 3D2N
  {
    id: "lares-trek-3d2n",
    categories: ["rutas", "comunidad"],
    name: "Lares",
    nameEn: "Lares",
    heroImage: "/images/lares-trek/IMG_3449.jpg",
    tagline: "Explora la cordillera de Urubamba en contacto con comunidades nativas y la cultura viva de los andes del Perú.",
    taglineEn: "Explore the Urubamba mountain range in contact with native communities and the living culture of the Peruvian Andes.",
    duration: "3 días / 2 noches",
    durationEn: "3 days / 2 nights",
    difficulty: "Moderada a desafiante",
    difficultyEn: "Moderate to challenging",
    elevation: "4,800m máx.",
    bestSeason: "",
    bestSeasonEn: "",
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
        title: "Huaran – Saywapata – Yanaqocha",
        titleEn: "Huaran – Saywapata – Yanaqocha",
        description: "07:30 AM – Recojo en transporte privado hacia Huaran y luego a Saywapata (3,200 m s. n. m.). 08:30 AM – Inicio de la caminata. Ascenso de aproximadamente 3 horas. 11:30 AM – Llegada a la comunidad de Cancha Cancha. Descanso, mate de coca y snacks locales. 12:30 PM – Continuación del ascenso y campamento cerca de la laguna Yanaqocha. 06:00 PM – Cena y pernocte.",
        descriptionEn: "07:30 AM – Pick-up by private transport to Huaran, continuing to Saywapata (3,200 m a.s.l.). 08:30 AM – Start of the hike. Approx. 3-hour ascent through ravines, rivers, and high-Andean forests. 11:30 AM – Arrival at the community of Cancha Cancha. Rest, coca tea, and local snacks with a host family. 12:30 PM – Continued ascent to higher elevations and camp setup near Yanaqocha Lagoon. 06:00 PM – Dinner and overnight camping.",
        highlights: ["Cancha Cancha", "Laguna Yanaqocha"],
        highlightsEn: ["Cancha Cancha", "Yanaqocha Lagoon"],
        meals: "Almuerzo, Cena",
        mealsEn: "Lunch, Dinner",
        accommodation: "Campamento",
        accommodationEn: "Camping"
      },
      {
        day: 2,
        title: "Yanaqocha – Paso de Montaña – Quishuarani",
        titleEn: "Yanaqocha – Mountain Pass – Quishuarani",
        description: "07:00 AM – Desayuno y desmontaje del campamento. 08:00 AM – Caminata hacia el paso de montaña (4,800 m s. n. m.). Duración aproximada: 4 a 5 horas. 01:00 PM – Llegada a la comunidad de Quishuarani. 02:30 PM – Almuerzo en casa local y armado de campamento. 04:00 PM – Caminata opcional por la comunidad. 07:00 PM – Cena.",
        descriptionEn: "07:00 AM – Breakfast and camp packing. 08:00 AM – Trek to the mountain pass (4,800 m a.s.l.), enjoying panoramic views. Approx. 4–5 hours of hiking. 01:00 PM – Arrival at the community of Quishuarani. 02:30 PM – Lunch with a local family and camp setup. 04:00 PM – Optional community walk. 07:00 PM – Dinner.",
        highlights: ["Paso de montaña 4,800m", "Comunidad Quishuarani"],
        highlightsEn: ["Mountain pass 4,800m", "Quishuarani Community"],
        meals: "Desayuno, Almuerzo, Cena",
        mealsEn: "Breakfast, Lunch, Dinner",
        accommodation: "Campamento",
        accommodationEn: "Camping"
      },
      {
        day: 3,
        title: "Quishuarani – Cuncani – Lares",
        titleEn: "Quishuarani – Cuncani – Lares",
        description: "06:00 AM – Desayuno. 07:30 AM – Caminata de 4 horas hacia la comunidad de Cuncani. 11:00 AM – Parada para almuerzo ligero. 12:00 PM – Traslado a las aguas termales de Lares (45 minutos). Tiempo libre para relajarse (2–3 horas). 03:00 PM – Transporte hacia el Valle Sagrado (aprox. 2.5 horas). 05:30 PM – Llegada.",
        descriptionEn: "06:00 AM – Breakfast. 07:30 AM – 4-hour hike to the community of Cuncani. 11:00 AM – Packed lunch stop. 12:00 PM – Transfer to the Lares Hot Springs (45 minutes). Relaxation time: 2–3 hours. 03:00 PM – Transport to the Sacred Valley (approx. 2.5 hours). 05:30 PM – Arrival.",
        highlights: ["Aguas termales de Lares"],
        highlightsEn: ["Lares Hot Springs"],
        meals: "Desayuno, Almuerzo",
        mealsEn: "Breakfast, Lunch",
        accommodation: "Fin del tour",
        accommodationEn: "End of tour"
      }
    ],
    gallery: [
      { id: "oafg9v5k", type: "image", url: "/images/lares-trek/IMG_0008.jpg" },
      { id: "2xqrpj0k", type: "image", url: "/images/lares-trek/IMG_0177.jpg" },
      { id: "2jxvfm1p", type: "image", url: "/images/lares-trek/IMG_0211-2.jpg" },
      { id: "qxpvi1eh", type: "image", url: "/images/lares-trek/IMG_0276.jpg" },
      { id: "zxj4pjcn", type: "image", url: "/images/lares-trek/IMG_1768.jpg" },
      { id: "fxy8m9an", type: "image", url: "/images/lares-trek/IMG_1770.jpg" },
      { id: "n7wrdgat", type: "image", url: "/images/lares-trek/IMG_1772.jpg" },
      { id: "ypsfuakk", type: "image", url: "/images/lares-trek/IMG_1783.jpg" },
      { id: "6birole9", type: "image", url: "/images/lares-trek/IMG_3092.jpg" },
      { id: "dgukelv8", type: "image", url: "/images/lares-trek/IMG_3118.jpg" },
      { id: "68h2dru3", type: "image", url: "/images/lares-trek/IMG_3123-2.jpg" },
      { id: "0u4k0p2j", type: "image", url: "/images/lares-trek/IMG_3295-2.jpg" },
      { id: "c143i332", type: "image", url: "/images/lares-trek/IMG_3312.jpg" },
      { id: "ur6miib8", type: "image", url: "/images/lares-trek/IMG_3340-3.jpg" },
      { id: "ngcf9zsx", type: "image", url: "/images/lares-trek/IMG_3347.jpg" },
      { id: "c0swu5ay", type: "image", url: "/images/lares-trek/IMG_3349.jpg" },
      { id: "o97gcpkr", type: "image", url: "/images/lares-trek/IMG_3385.jpg" },
      { id: "1lcd9vle", type: "image", url: "/images/lares-trek/IMG_3392-2.jpg" },
      { id: "4mc1jn7d", type: "image", url: "/images/lares-trek/IMG_3409.jpg" },
      { id: "3sjhsuej", type: "image", url: "/images/lares-trek/IMG_3420.jpg" },
      { id: "k50eda8l", type: "image", url: "/images/lares-trek/IMG_3424.jpg" },
      { id: "8djg3hcz", type: "image", url: "/images/lares-trek/IMG_3441.jpg" },
      { id: "quiwrmwn", type: "image", url: "/images/lares-trek/IMG_3449.jpg" },
      { id: "8tu73prk", type: "image", url: "/images/lares-trek/IMG_3461.jpg" },
      { id: "nq18d6gm", type: "image", url: "/images/lares-trek/IMG_3465.jpg" },
      { id: "vdwarg2k", type: "image", url: "/images/lares-trek/IMG_3468.jpg" },
      { id: "vdp0tqvm", type: "image", url: "/images/lares-trek/IMG_3482.jpg" },
      { id: "i9pbyhla", type: "image", url: "/images/lares-trek/IMG_3492.jpg" },
      { id: "jphe1rc9", type: "image", url: "/images/lares-trek/IMG_3499.jpg" },
      { id: "27vnxswj", type: "image", url: "/images/lares-trek/IMG_4668.jpg" },
      { id: "xv84weu1", type: "image", url: "/images/lares-trek/IMG_5025.jpg" },
      { id: "rriue9po", type: "image", url: "/images/lares-trek/IMG_7271.jpg" },
      { id: "v5joimgg", type: "image", url: "/images/lares-trek/IMG_7274.jpg" },
      { id: "67hfrtr3", type: "image", url: "/images/lares-trek/IMG_7303.jpg" },
      { id: "i5rbe4nc", type: "image", url: "/images/lares-trek/IMG_7327.jpg" },
      { id: "ldps5m7j", type: "image", url: "/images/lares-trek/IMG_7334.jpg" },
      { id: "kbytktic", type: "image", url: "/images/lares-trek/IMG_7339.jpg" },
      { id: "jww91uie", type: "image", url: "/images/lares-trek/IMG_8864.jpg" },
      { id: "c5abhzfy", type: "image", url: "/images/lares-trek/IMG_8867.jpg" },
      { id: "f6dij8xo", type: "image", url: "/images/lares-trek/IMG_9413.jpg" },
      { id: "uknpuuvh", type: "image", url: "/images/lares-trek/IMG_9622.jpg" },
      { id: "dot1rqo2", type: "image", url: "/images/lares-trek/IMG_9708.jpg" },
      { id: "ooidy419", type: "image", url: "/images/lares-trek/IMG_9764.jpg" }
    ]
  },

  // RUTAS - Selva del Manu 5D4N
  {
    id: "manu-rainforest-5d4n",
    categories: ["comunidad", "rutas"],
    name: "Selva del Manu",
    nameEn: "Manu Rainforest",
    heroImage: "/images/manu-rainforest/IMG_6466.jpg",
    tagline: "Aventura en una de las zonas con mayor biodiversidad del planeta",
    taglineEn: "Adventure in one of the most biodiverse areas on Earth",
    duration: "5 días / 4 noches",
    durationEn: "5 days / 4 nights",
    difficulty: "Moderada",
    difficultyEn: "Moderate",
    elevation: "300m – 4,000m",
    bestSeason: "",
    bestSeasonEn: "",
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
        description: "Retorno desde Salvación hasta la ciudad del Cusco durante todo el día. Llegada por la tarde.",
        descriptionEn: "Full-day return journey from Salvación to Cusco. Arrival in Cusco in the afternoon.",
        highlights: ["Paisajes andinos", "Bosque nublado"],
        highlightsEn: ["Andean landscapes", "Cloud forest"],
        meals: "Desayuno",
        mealsEn: "Breakfast",
        accommodation: "Fin del tour",
        accommodationEn: "End of tour"
      }
    ],
    gallery: [
      { id: "53elr4b3", type: "image", url: "/images/manu-rainforest/IMG_6398.jpg" },
      { id: "o3h21mih", type: "image", url: "/images/manu-rainforest/IMG_6416.jpg" },
      { id: "yzbjfxm8", type: "image", url: "/images/manu-rainforest/IMG_6420.jpg" },
      { id: "21xbo9rm", type: "image", url: "/images/manu-rainforest/IMG_6430.jpg" },
      { id: "dbmmaxz7", type: "image", url: "/images/manu-rainforest/IMG_6466.jpg" },
      { id: "lcyzxyd8", type: "image", url: "/images/manu-rainforest/IMG_6475.jpg" },
      { id: "mcd6leb5", type: "image", url: "/images/manu-rainforest/IMG_6487.jpg" },
      { id: "sm9p7gg2", type: "image", url: "/images/manu-rainforest/IMG_6498.jpg" },
      { id: "0kb2l2z1", type: "image", url: "/images/manu-rainforest/IMG_6499.jpg" },
      { id: "z3ahy8xf", type: "image", url: "/images/manu-rainforest/IMG_6500.jpg" },
      { id: "aoralprx", type: "image", url: "/images/manu-rainforest/IMG_6505.jpg" },
      { id: "z9n6fza2", type: "image", url: "/images/manu-rainforest/IMG_7642.jpg" },
      { id: "6rkoxgnq", type: "image", url: "/images/manu-rainforest/IMG_7649.jpg" },
      { id: "6ed41kb6", type: "image", url: "/images/manu-rainforest/IMG_7656.jpg" },
      { id: "sxi0h9th", type: "image", url: "/images/manu-rainforest/IMG_7664.jpg" },
      { id: "303una3r", type: "image", url: "/images/manu-rainforest/IMG_7672.jpg" },
      { id: "3xyubcru", type: "image", url: "/images/manu-rainforest/IMG_7721.jpg" },
      { id: "hykhoehy", type: "image", url: "/images/manu-rainforest/IMG_7731.jpg" }
    ]
  },

  // NEW PACKAGES
  {
    id: "choquequirao-trek",
    categories: ["rutas"],
    name: "Choquequirao",
    nameEn: "Choquequirao",
    heroImage: "/images/choquequirao/IMG_6584.jpg",
    tagline: "Descubre la mitica ciudad perdida de los Incas y su misterio ancestral.",
    taglineEn: "Discover the mythical lost city of the Incas and its ancestral mystery.",
    duration: "4 días / 3 noches",
    durationEn: "4 days / 3 nights",
    difficulty: "Moderado a desafiante",
    difficultyEn: "Moderate to challenging",
    elevation: "3,900 m máx.",
    bestSeason: "",
    bestSeasonEn: "",
    price: 600,
    description: "Este trekking de 4 días conduce a uno de los complejos arqueológicos más impresionantes y menos visitados del Perú: Choquequirao. La ruta atraviesa profundos cañones, paisajes andinos y ecosistemas diversos, ofreciendo una experiencia auténtica de conexión con la naturaleza y la historia. Conocido como la hermana sagrada de Machu Picchu, Choquequirao destaca por su magnitud, misterio y ubicación estratégica. Es una experiencia ideal para viajeros que buscan aventura, reto físico y conexión cultural.",
    descriptionEn: "This 4-day trek leads to one of the most impressive and least visited archaeological sites in Peru: Choquequirao. The route crosses deep canyons, Andean landscapes, and diverse ecosystems. Known as the sacred sister of Machu Picchu, Choquequirao stands out for its scale, mystery, and strategic location. It is ideal for travelers seeking adventure, physical challenge, and cultural connection.",
    highlights: ["Complejo arqueológico de Choquequirao", "Cañón del Apurímac", "Paisajes andinos vírgenes"],
    highlightsEn: ["Choquequirao archaeological complex", "Apurimac Canyon", "Pristine Andean landscapes"],
    includes: [
      "Transporte privado ida y vuelta",
      "Alimentación y Hospedaje",
      "Guía profesional",
      "Ingreso a Choquequirao"
    ],
    includesEn: [
      "Private transportation",
      "Full meals",
      "Professional guide",
      "Entrance ticket"
    ],
    notIncludes: [
      "Snacks personales",
      "Equipo personal de trekking"
    ],
    notIncludesEn: [
      "Personal snacks",
      "Personal trekking equipment"
    ],
    requirements: [
      "Botas de trekking",
      "Bloqueador solar",
      "Botella de agua",
      "Casaca de lluvia",
      "Ropa de cambio",
      "Cámara fotográfica"
    ],
    requirementsEn: [
      "Trekking boots",
      "Sunscreen",
      "Water bottle",
      "Rain jacket",
      "Change of clothes",
      "Camera"
    ],
    itinerary: [
      {
        day: 1,
        title: "Cusco – Capuliyoc – Chiquisqa",
        titleEn: "Cusco – Capuliyoc – Chiquisqa",
        description: "Traslado desde Cusco hacia Capuliyoc y caminata en descenso durante aproximadamente 3 horas hasta Chiquisqa.",
        descriptionEn: "Transfer and descent hike to Chiquisqa.",
        highlights: ["Capuliyoc"],
        highlightsEn: ["Capuliyoc"],
        meals: "Almuerzo, Cena",
        mealsEn: "Lunch, Dinner",
        accommodation: "Campamento en Chiquisqa",
        accommodationEn: "Camping in Chiquisqa"
      },
      {
        day: 2,
        title: "Chiquisqa – Playa Rosalinas – Marampata",
        titleEn: "Chiquisqa – Playa Rosalinas – Marampata",
        description: "Descenso hacia el río Apurímac y posterior ascenso exigente hasta Marampata.",
        descriptionEn: "Descent to Apurimac River and ascent to Marampata.",
        highlights: ["Río Apurímac", "Marampata"],
        highlightsEn: ["Apurimac River", "Marampata"],
        meals: "Desayuno, Almuerzo, Cena",
        mealsEn: "Breakfast, Lunch, Dinner",
        accommodation: "Campamento en Marampata",
        accommodationEn: "Camping in Marampata"
      },
      {
        day: 3,
        title: "Marampata – Choquequirao – Marampata",
        titleEn: "Marampata – Choquequirao – Marampata",
        description: "Caminata hacia el complejo arqueológico de Choquequirao y exploración completa del sitio.",
        descriptionEn: "Visit and exploration of the archaeological site.",
        highlights: ["Choquequirao"],
        highlightsEn: ["Choquequirao"],
        meals: "Desayuno, Almuerzo, Cena",
        mealsEn: "Breakfast, Lunch, Dinner",
        accommodation: "Campamento en Marampata",
        accommodationEn: "Camping in Marampata"
      },
      {
        day: 4,
        title: "Marampata – Capuliyoc – Cusco",
        titleEn: "Marampata – Capuliyoc – Cusco",
        description: "Retorno por la misma ruta y traslado hacia Cusco o Valle Sagrado.",
        descriptionEn: "Return hike and transfer back.",
        highlights: ["Capuliyoc"],
        highlightsEn: ["Capuliyoc"],
        meals: "Desayuno, Almuerzo",
        mealsEn: "Breakfast, Lunch",
        accommodation: "Fin del tour",
        accommodationEn: "End of tour"
      }
    ],
    gallery: [
      { id: "c1", type: "image", url: "/images/choquequirao/IMG_6584.jpg" },
      { id: "c2", type: "image", url: "/images/choquequirao/IMG_6585.jpg" },
      { id: "c3", type: "image", url: "/images/choquequirao/IMG_6617.jpg" },
      { id: "c4", type: "image", url: "/images/choquequirao/IMG_6653-2.jpg" },
      { id: "c5", type: "image", url: "/images/choquequirao/IMG_6654.jpg" },
      { id: "c6", type: "image", url: "/images/choquequirao/IMG_6658.jpg" },
      { id: "c7", type: "image", url: "/images/choquequirao/IMG_6663.jpg" },
      { id: "c8", type: "image", url: "/images/choquequirao/IMG_6668.jpg" },
      { id: "c9", type: "image", url: "/images/choquequirao/IMG_6671.jpg" },
      { id: "c10", type: "image", url: "/images/choquequirao/IMG_6682.jpg" },
      { id: "c11", type: "image", url: "/images/choquequirao/IMG_6682-2.jpg" },
      { id: "c12", type: "image", url: "/images/choquequirao/IMG_6693.jpg" },
      { id: "c13", type: "image", url: "/images/choquequirao/IMG_6697.jpg" },
      { id: "c14", type: "image", url: "/images/choquequirao/IMG_6699.jpg" },
      { id: "c15", type: "image", url: "/images/choquequirao/IMG_6707.jpg" },
      { id: "c16", type: "image", url: "/images/choquequirao/IMG_6711.jpg" },
      { id: "c17", type: "image", url: "/images/choquequirao/IMG_6714.jpg" },
      { id: "c18", type: "image", url: "/images/choquequirao/IMG_6731.jpg" },
      { id: "c19", type: "image", url: "/images/choquequirao/IMG_6737.jpg" },
      { id: "c20", type: "image", url: "/images/choquequirao/IMG_6738.jpg" },
      { id: "c21", type: "image", url: "/images/choquequirao/IMG_6760.jpg" },
      { id: "c22", type: "image", url: "/images/choquequirao/IMG_6777.jpg" },
      { id: "c23", type: "image", url: "/images/choquequirao/IMG_6779.jpg" },
      { id: "c24", type: "image", url: "/images/choquequirao/IMG_6780.jpg" },
      { id: "c25", type: "image", url: "/images/choquequirao/IMG_6785.jpg" },
      { id: "c26", type: "image", url: "/images/choquequirao/IMG_6795.jpg" },
      { id: "c27", type: "image", url: "/images/choquequirao/IMG_6800.jpg" },
      { id: "c28", type: "image", url: "/images/choquequirao/IMG_6805.jpg" },
      { id: "c29", type: "image", url: "/images/choquequirao/IMG_6809.jpg" },
      { id: "c30", type: "image", url: "/images/choquequirao/IMG_6814.jpg" },
      { id: "c31", type: "image", url: "/images/choquequirao/IMG_6819.jpg" },
      { id: "c32", type: "image", url: "/images/choquequirao/IMG_6821.jpg" },
      { id: "c33", type: "image", url: "/images/choquequirao/IMG_6823.jpg" },
      { id: "c34", type: "image", url: "/images/choquequirao/IMG_6827.jpg" },
      { id: "c35", type: "image", url: "/images/choquequirao/IMG_6831.jpg" },
      { id: "c36", type: "image", url: "/images/choquequirao/IMG_6832.jpg" },
      { id: "c37", type: "image", url: "/images/choquequirao/IMG_6838.jpg" },
      { id: "c38", type: "image", url: "/images/choquequirao/IMG_6844.jpg" },
      { id: "c39", type: "image", url: "/images/choquequirao/IMG_6847.jpg" }
    ]
  },
  {
    id: "full-day-spiritual",
    categories: ["ceremonias"],
    name: "Full Day Espiritual",
    nameEn: "Full Day Spiritual",
    heroImage: "/images/coca-offering/ceremonies.jpg",
    tagline: "Conecta con rituales ancestrales de purificación y conexión con el mundo espiritual de los Andes.",
    taglineEn: "Connect with ancestral purification rituals and the spiritual world of the Andes.",
    duration: "Día completo",
    durationEn: "Full day",
    difficulty: "Fácil",
    difficultyEn: "Easy",
    elevation: "Valle Sagrado",
    bestSeason: "",
    bestSeasonEn: "",
    price: 100,
    description: "Esta experiencia espiritual de día completo integra dos poderosos rituales: la ofrenda andina o “Despacho” y la ceremonia de temazcal. La ofrenda andina es uno de los rituales más importantes de la cosmovisión andina, mediante el cual se pide permiso y bendiciones a la Pachamama, los Apus y las energías del universo. La ceremonia de temazcal, de origen mesoamericano, es un baño de vapor tradicional que busca la limpieza y renovación del cuerpo, la mente y el espíritu.",
    descriptionEn: "This full-day spiritual experience combines two powerful rituals: the Andean offering, known as “Despacho”, and the temazcal ceremony. The Andean offering is one of the most important rituals in Andean cosmology, performed to ask for permission and blessings from Pachamama, the Apus, and the universe. The temazcal ceremony, of Mesoamerican origin, is a traditional steam bath aimed at cleansing and renewing the body, mind, and spirit.",
    highlights: ["Ofrenda andina (Despacho)", "Ceremonia de temazcal", "Conexión profunda"],
    highlightsEn: ["Andean offering (Despacho)", "Temazcal ceremony", "Deep connection"],
    includes: [
      "Ofrenda andina (Despacho)",
      "Ceremonia de temazcal",
      "Alimentación"
    ],
    includesEn: [
      "Andean offering (Despacho)",
      "Temazcal ceremony",
      "Food"
    ],
    notIncludes: [
      "Transporte",
      "Artículos personales (toalla, traje de baño)"
    ],
    notIncludesEn: [
      "Transportation",
      "Personal items (towel, swimsuit)"
    ],
    requirements: [
      "Ropa de cambio",
      "Ropa cómoda",
      "Traje de baño",
      "Toalla",
      "Botella de agua",
      "Mochila pequeña"
    ],
    requirementsEn: [
      "Change of clothes",
      "Comfortable clothing",
      "Swimsuit",
      "Towel",
      "Water bottle",
      "Small backpack"
    ],
    itinerary: [
      {
        day: 1,
        title: "Valle Sagrado – Arin – Temazcal – Valle Sagrado",
        titleEn: "Sacred Valley – Arin – Temazcal – Sacred Valley",
        description: "08:00 AM – Recojo desde su alojamiento y traslado hacia el pueblo de Arin. 09:00 AM – Inicio de la ofrenda andina. 11:30 AM – Quema de la ofrenda. 12:00 PM – Ingreso al temazcal para iniciar la ceremonia. 03:00 PM – Finalización, almuerzo y tiempo de descanso. 05:00 PM – Retorno.",
        descriptionEn: "08:00 AM – Pick-up from your accommodation and transfer to Arin village. 09:00 AM – Start of the Andean offering (approx. 1.5 hours). 11:30 AM – Burning of the offering in the sacred fire. 12:00 PM – Entry into the temazcal (sweat lodge) to begin the ceremony (approx. 3 hours). 03:00 PM – End of the ceremony, lunch, and relaxation time. 05:00 PM – Return transfer to your accommodation.",
        highlights: ["Ofrenda Andina", "Temazcal"],
        highlightsEn: ["Andean Offering", "Temazcal"],
        meals: "Almuerzo",
        mealsEn: "Lunch",
        accommodation: "N/A",
        accommodationEn: "N/A"
      }
    ],
    gallery: [
      { id: "fd1", type: "image", url: "/images/coca-offering/ceremonies.jpg" },
      { id: "fd2", type: "image", url: "/images/coca-offering/ceremonies(1).jpg" },
      { id: "fd3", type: "image", url: "/images/coca-offering/ceremonies(2).jpg" },
      { id: "fd4", type: "image", url: "/images/coca-offering/IMG_9939.jpg" }
    ]
  },
  {
    id: "half-day-spiritual",
    categories: ["ceremonias"],
    name: "Half Day Espiritual",
    nameEn: "Half Day Spiritual",
    heroImage: "/images/coca-offering/ceremonies.jpg",
    tagline: "Se parte de una ceremonia ancestral de conexión con el mundo andino.",
    taglineEn: "Be part of an ancestral ceremony of connection with the Andean world.",
    duration: "Medio día",
    durationEn: "Half day",
    difficulty: "Fácil",
    difficultyEn: "Easy",
    elevation: "",
    bestSeason: "",
    bestSeasonEn: "",
    price: 100,
    description: "Esta experiencia espiritual de medio día se centra en uno de los rituales más importantes de la cosmovisión andina: la ofrenda andina o “Despacho”. La ceremonia es guiada por un líder espiritual perteneciente a las comunidades Q’eros, consideradas descendientes directos de la tradición inca. Durante la experiencia también se realiza la lectura de hojas de coca, un ritual ancestral que permite hacer consultas sobre la vida y el camino personal.",
    descriptionEn: "This half-day spiritual experience focuses on one of the most important rituals in Andean cosmology: the Andean offering, also known as “Despacho”. The ceremony is guided by a spiritual leader from the Q’eros communities, considered direct descendants of the Inca tradition. The experience also includes a coca leaf reading, an ancient ritual that allows participants to ask questions about life and their personal path.",
    highlights: ["Ofrenda andina y limpieza energética", "Lectura de hojas de coca", "Guía espiritual Q'ero"],
    highlightsEn: ["Andean offering and energy cleansing", "Coca leaf reading", "Q'ero spiritual guide"],
    includes: [
      "Ofrenda andina y limpieza energética",
      "Lectura de hojas de coca",
      "Visita a un entorno natural",
      "Box lunch"
    ],
    includesEn: [
      "Andean offering and energy cleansing",
      "Coca leaf reading",
      "Visit to a natural setting",
      "Box lunch"
    ],
    notIncludes: [
      "Transporte"
    ],
    notIncludesEn: [
      "Transportation"
    ],
    requirements: [
      "Ropa cómoda",
      "Botella de agua",
      "Cámara fotográfica"
    ],
    requirementsEn: [
      "Comfortable clothing",
      "Water bottle",
      "Camera"
    ],
    itinerary: [
      {
        day: 1,
        title: "Valle Sagrado – Templo Ancestral – Valle Sagrado",
        titleEn: "Sacred Valley – Ancient Temple – Sacred Valley",
        description: "08:00 AM – Recojo desde su alojamiento y traslado en transporte hacia un templo ancestral en el Valle Sagrado de los Incas. 09:00 AM – Inicio de la experiencia con la lectura de hojas de coca, seguida de la preparación de la ofrenda andina guiada por el líder espiritual. 12:30 PM – Finalización de la experiencia y retorno.",
        descriptionEn: "08:00 AM – Pick-up from your accommodation and transfer to an ancient temple in the Sacred Valley of the Incas. 09:00 AM – Start of the experience with coca leaf reading, followed by the preparation of the Andean offering guided by the spiritual leader. 12:30 PM – End of the experience and return.",
        highlights: ["Lectura de Coca", "Ofrenda Andina"],
        highlightsEn: ["Coca Reading", "Andean Offering"],
        meals: "Box lunch",
        mealsEn: "Box lunch",
        accommodation: "N/A",
        accommodationEn: "N/A"
      }
    ],
    gallery: [
      { id: "co1", type: "image", url: "/images/coca-offering/ceremonies.jpg" },
      { id: "co2", type: "image", url: "/images/coca-offering/ceremonies(1).jpg" },
      { id: "co3", type: "image", url: "/images/coca-offering/ceremonies(2).jpg" },
      { id: "co4", type: "image", url: "/images/coca-offering/IMG_9939.jpg" }
    ]
  },
  {
    id: "quishuarani-2d1n",
    categories: ["comunidad", "rutas"],
    name: "Quishuarani",
    nameEn: "Quishuarani",
    heroImage: "/images/comunidad-1.jpg",
    tagline: "Se parte de una experiencia autentica con familias de comunidades alto andinas.",
    taglineEn: "Be part of an authentic experience with families from high Andean communities.",
    duration: "2 días / 1 noche",
    durationEn: "2 days / 1 night",
    difficulty: "Moderado",
    difficultyEn: "Moderate",
    elevation: "4,400 m máx.",
    bestSeason: "",
    bestSeasonEn: "",
    price: 350,
    description: "Quishuarani es una comunidad altoandina ubicada en la cordillera del Urubamba, en la región de Lares. Esta experiencia permite un contacto directo con familias locales, sus costumbres, tradiciones y su forma de vida ancestral. Durante dos días y una noche, los viajeros conviven con una familia local, participando en actividades como la textilería tradicional, la ganadería y la vida comunitaria. Además, el recorrido incluye caminatas hacia lagunas y cataratas, así como la realización de una ofrenda andina con hojas de coca.",
    descriptionEn: "Quishuarani is a high Andean community located in the Urubamba mountain range, in the Lares region. This experience offers direct contact with local families, their traditions, and ancestral way of life. For two days and one night, travelers live with a local family, participating in activities such as traditional textile making, livestock care, and daily community life. The experience also includes hikes to lagoons and waterfalls, as well as a traditional Andean offering using coca leaves.",
    highlights: ["Convivencia familiar", "Textilería tradicional", "Laguna Qoyalay", "Cataratas de Quishuarani"],
    highlightsEn: ["Family coexistence", "Traditional textiles", "Qoyalay lagoon", "Quishuarani waterfalls"],
    includes: [
      "Transporte ida y vuelta",
      "Alimentación completa",
      "Alojamiento y campamento",
      "Equipo de montaña",
      "Guía profesional"
    ],
    includesEn: [
      "Round-trip transportation",
      "Full meals",
      "Accommodation and camping",
      "Mountain equipment",
      "Professional guide"
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
      "Ropa abrigadora e impermeable",
      "Botella de agua",
      "Documentos personales",
      "Dinero en efectivo",
      "Artículos de aseo",
      "Sombrero o gorra",
      "Bloqueador solar"
    ],
    requirementsEn: [
      "Warm and waterproof clothing",
      "Water bottle",
      "Personal documents",
      "Cash",
      "Toiletries",
      "Hat or cap",
      "Sunscreen"
    ],
    itinerary: [
      {
        day: 1,
        title: "Valle Sagrado – Quishuarani",
        titleEn: "Sacred Valley – Quishuarani",
        description: "08:00 AM – Recojo en transporte privado desde el Valle Sagrado hacia la comunidad de Quishuarani. 11:00 AM – Llegada. 11:30 AM – Recepción por una familia local. 12:00 PM – Demostración de textilería tradicional. 01:00 PM – Almuerzo. 02:30 PM – Caminata hacia las cataratas de Quishuarani y la laguna Qoyalay con ofrenda simbólica. 06:00 PM – Retorno, cena y convivencia.",
        descriptionEn: "08:00 AM – Pick-up from the Sacred Valley and transfer to Quishuarani. 11:00 AM – Arrival. 11:30 AM – Welcome by a local family. 12:00 PM – Traditional textile demonstration. 01:00 PM – Lunch. 02:30 PM – Hike to waterfalls and Qoyalay lagoon with coca leaf offering. 06:00 PM – Return, dinner and time with family.",
        highlights: ["Textilería", "Laguna Qoyalay"],
        highlightsEn: ["Textiles", "Qoyalay Lagoon"],
        meals: "Almuerzo, Cena",
        mealsEn: "Lunch, Dinner",
        accommodation: "Casa de familia local",
        accommodationEn: "Local family home"
      },
      {
        day: 2,
        title: "Quishuarani – Calca – Valle Sagrado",
        titleEn: "Quishuarani – Calca – Sacred Valley",
        description: "06:00 AM – Desayuno tradicional. 07:00 AM – Caminata de aproximadamente 3 horas atravesando quebradas, lagunas y miradores naturales. 01:00 PM – Retorno a la comunidad y almuerzo. 02:00 PM – Traslado en transporte hacia Calca. 04:30 PM – Llegada al Valle Sagrado.",
        descriptionEn: "06:00 AM – Traditional breakfast. 07:00 AM – Hike of approximately 3 hours through valleys, lagoons, and viewpoints. 01:00 PM – Return and lunch. 02:00 PM – Transfer to Calca. 04:30 PM – Arrival at the Sacred Valley.",
        highlights: ["Quebradas y lagunas"],
        highlightsEn: ["Valleys and lagoons"],
        meals: "Desayuno, Almuerzo",
        mealsEn: "Breakfast, Lunch",
        accommodation: "Fin del tour",
        accommodationEn: "End of tour"
      }
    ],
    gallery: [
      { id: "qu1", type: "image", url: "/images/comunidad-1.jpg" },
      { id: "qu2", type: "image", url: "/images/comunidad-2.jpg" },
      { id: "qu3", type: "image", url: "/images/comunidad-3.jpg" },
      { id: "qu4", type: "image", url: "/images/comunidad-6.jpg" },
      { id: "qu5", type: "image", url: "/images/comunidad.jpg" },
      { id: "qu6", type: "image", url: "/images/textiles.jpg" },
      { id: "qu7", type: "image", url: "/images/textiles-2.jpg" },
      { id: "qu8", type: "image", url: "/images/textiles-3.jpg" },
      { id: "qu9", type: "image", url: "/images/montanias.jpg" }
    ]
  },
  {
    id: "cancha-cancha-2d1n",
    categories: ["comunidad", "rutas"],
    name: "Cancha Cancha - 2 dias 1 Noche",
    nameEn: "Cancha Cancha 2D1N",
    heroImage: "/images/cancha-cancha/IMG_0238.jpg",
    tagline: "Se parte de una experiencia autentica con familias de comunidades alto andinas.",
    taglineEn: "Be part of an authentic experience with families from high Andean communities.",
    duration: "2 días / 1 noche",
    durationEn: "2 days / 1 night",
    difficulty: "Moderado",
    difficultyEn: "Moderate",
    elevation: "3,200m - 4,200m",
    bestSeason: "",
    bestSeasonEn: "",
    price: 290,
    description: "Hermosa caminata por el valle de Huarán, en la cordillera de Urubamba. Iniciamos en Saywapata, recorriendo un bello valle con plantas y árboles nativos por unas 4 horas de ascenso hasta llegar a la comunidad altoandina de Cancha Cancha. Aquí seremos recibidos por una familia local, con un delicioso almuerzo, conoceremos su casa, textiles tradicionales, agricultura, ganadería y compartiremos una auténtica experiencia con la naturaleza y la cultura andina. El segundo día visitamos la laguna sagrada de Wasan Qocha.",
    descriptionEn: "Beautiful trekking over the Huaran valley, located in the Urubamba mountain range. We start from Saywapata, going through a beautiful valley with native plants and trees for about 4 hours of ascent until we reach the high Andean community of Cancha Cancha. Here we will be received by one of the local families, with a delicious local lunch, we will get to know the family house, traditional textiles, agriculture, livestock, and we will share an authentic experience with nature and Andean culture. The next day we visit Wasan Qocha sacred lake.",
    highlights: ["Comunidad Cancha Cancha", "Laguna Wasan Qocha", "Convivencia cultural"],
    highlightsEn: ["Cancha Cancha community", "Wasan Qocha sacred lake", "Cultural coexistence"],
    includes: [
      "Transporte privado ida y vuelta",
      "Guía profesional",
      "Alimentación completa",
      "Recepción en casa de familia local",
      "Carga de equipaje"
    ],
    includesEn: [
      "Private transportation round trip",
      "Professional guide",
      "Full meals",
      "Reception in a local family house",
      "Luggage load"
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
      "Ropa para Lluvia"
    ],
    requirementsEn: [
      "Sun hat",
      "Sunscreen",
      "Water bottle",
      "Cash for souvenirs",
      "ID",
      "Camera",
      "Rain equipment"
    ],
    itinerary: [
      {
        day: 1,
        title: "Valle Sagrado – Saywapata – Cancha Cancha",
        titleEn: "Sacred Valley – Saywapata – Cancha Cancha",
        description: "08:00 AM – Recojo en transporte hacia Saywapata. 08:30 AM – Inicio de la caminata de ascenso (aprox. 4 horas). 12:30 PM – Llegada a Cancha Cancha y recepción en casa de familia local. Almuerzo y descanso. 03:00 PM – Compartir con la familia, aprender de su agricultura, textiles y animales. Posible visita a la laguna Yanaqocha para una ofrenda andina. 06:00 PM – Cena y descanso.",
        descriptionEn: "08:00 AM – Pick-up and transfer to Saywapata. 08:30 AM – Start of the hike (approx. 4 hours). 12:30 PM – Arrival at Cancha Cancha and reception in a local family house. Lunch and rest. 03:00 PM – Share with the local family, learn about agriculture, textiles and animals. Optional visit to Yanaqocha lagoon for an Andean offering. 06:00 PM – Dinner and rest.",
        highlights: ["Llegada a comunidad", "Experiencia cultural"],
        highlightsEn: ["Arrival at community", "Cultural experience"],
        meals: "Almuerzo, Cena",
        mealsEn: "Lunch, Dinner",
        accommodation: "Casa de familia local",
        accommodationEn: "Local family home"
      },
      {
        day: 2,
        title: "Cancha Cancha – Wasan Qocha – Valle Sagrado",
        titleEn: "Cancha Cancha – Wasan Qocha – Sacred Valley",
        description: "07:00 AM – Desayuno e inicio de caminata hacia la laguna sagrada Wasan Qocha (2 horas). 10:00 AM – Llegada a la laguna, descanso y ofrenda andina. 11:00 AM – Retorno a la casa de familia (1h 20m). 12:30 PM – Almuerzo y descanso. 02:00 PM – Descenso hacia el Valle Sagrado. 04:30 PM – Fin de la caminata.",
        descriptionEn: "07:00 AM – Breakfast and hike to Wasan Qocha sacred lake (2 hours). 10:00 AM – Arrival at the lake, rest and Andean offering. 11:00 AM – Return to family house (1h 20m). 12:30 PM – Lunch and rest. 02:00 PM – Descent to the Sacred Valley. 04:30 PM – End of hike.",
        highlights: ["Laguna Wasan Qocha", "Ofrenda Andina"],
        highlightsEn: ["Wasan Qocha Lake", "Andean Offering"],
        meals: "Desayuno, Almuerzo",
        mealsEn: "Breakfast, Lunch",
        accommodation: "Fin del tour",
        accommodationEn: "End of tour"
      }
    ],
    gallery: [
      { id: "cc2d1", type: "image", url: "/images/cancha-cancha/IMG_0238.jpg" },
      { id: "cc2d2", type: "image", url: "/images/cancha-cancha/IMG_0119.jpg" },
      { id: "cc2d3", type: "image", url: "/images/cancha-cancha/IMG_0177.jpg" },
      { id: "cc2d4", type: "image", url: "/images/cancha-cancha/IMG_0291.jpg" },
      { id: "cc2d5", type: "image", url: "/images/cancha-cancha/IMG_0299.jpg" },
      { id: "cc2d6", type: "image", url: "/images/cancha-cancha/IMG_0302.jpg" },
      { id: "cc2d7", type: "image", url: "/images/cancha-cancha/IMG_0307.jpg" },
      { id: "cc2d8", type: "image", url: "/images/cancha-cancha/IMG_0310.jpg" },
      { id: "cc2d9", type: "image", url: "/images/cancha-cancha/IMG_0338.jpg" },
      { id: "cc2d10", type: "image", url: "/images/cancha-cancha/IMG_0344.jpg" }
    ]
  }
];

export const getPackagesByCategory = (category: ActivityCategory) =>
  packages.filter((p) => p.categories.includes(category));

export const getPackageById = (id: string) =>
  packages.find((p) => p.id === id);
