export const teamMembers = [
  {
    name: "Alvaro Mauricio Ugarte Forno",
    role: "Jefe de Operaciones y Guía Principal",
    roleEn: "Head of Operations & Lead Guide",
    description:
      "Con años de experiencia trabajando en turismo responsable. Conocedor de diversas rutas y destinos de naturaleza y herencia ancestral. En contacto permanente con la Cultura Viva del Perú.",
    descriptionEn:
      "With years of experience working in responsible tourism. Knowledgeable in diverse routes and destinations of nature and ancestral heritage. In permanent contact with the Living Culture of Peru.",
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
] as const;
