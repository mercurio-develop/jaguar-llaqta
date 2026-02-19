export const teamMembers = [
  {
    name: "Alvaro Mauricio Ugarte Forno",
    role: "Jefe de Operaciones y Guía Principal",
    roleEn: "Head of Operations & Lead Guide",
    description:
      "Guía experimentado de Turismo Alternativo. Conocedor de diversas rutas naturales y de vestigios pre hispánicos. Profesional trilingüe (Español, Inglés y Quechua) con contacto y cercanía constante a Comunidades Nativas y a la Cultura Viva Ancestral del Perú.",
    descriptionEn:
      "Experienced Alternative Tourism guide. Knowledgeable in diverse natural routes and pre-Hispanic vestiges. Trilingual professional (Spanish, English and Quechua) with constant contact and closeness to Native Communities and the Living Ancestral Culture of Peru.",
  },
  {
    name: "Alonso Castro Cordano",
    role: "Jefe Administrativo y de Comunicaciones",
    roleEn: "Head of Administration & Communications",
    description:
      "Profesional en el rubro turístico y en Experiencia del Consumidor. Con años de experiencia en asesorar y capacitar en el trato e interacción de los servicios brindados con los clientes, dándole un valor agregado a la experiencia turística y flujo administrativo de la agencia.",
    descriptionEn:
      "Professional in the tourism industry and Customer Experience. With years of experience in advising and training in the treatment and interaction of services provided to clients, adding value to the tourism experience and administrative flow of the agency.",
  },
];

export const partnerOrganizations = [
  {
    name: "Comunidad de Chinchero",
    type: "Comunidad Local",
    description:
      "Artesanos textiles que preservan técnicas ancestrales de tejido andino.",
  },
  {
    name: "Asociación de Guías de Montaña",
    type: "Guías Especializados",
    description:
      "Guías certificados con profundo conocimiento de las rutas sagradas.",
  },
  {
    name: "Pampamesayoq de Ollantaytambo",
    type: "Maestros Espirituales",
    description: "Herederos de la tradición espiritual andina.",
  },
  {
    name: "Turismo Sostenible Perú",
    type: "ONG",
    description:
      "Organización comprometida con el turismo responsable y comunitario.",
  },
];

import { Compass, Heart, Target } from "lucide-react";

export const values = [
  { icon: Compass, titleKey: "authenticity", descKey: "authenticityDesc" },
  { icon: Heart, titleKey: "respect", descKey: "respectDesc" },
  { icon: Target, titleKey: "commitment", descKey: "commitmentDesc" },
] as const;

export const objectives = [
  "objectiveOne",
  "objectiveTwo",
  "objectiveThree",
  "objectiveFour",
] as const;
