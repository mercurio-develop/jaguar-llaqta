import { Compass, Heart, Target } from "lucide-react";

export const teamMembers = [
  {
    name: "Carlos Quispe",
    role: "Fundador & Guía Principal",
    description: "Nacido en Cusco, con más de 15 años de experiencia en turismo ancestral.",
  },
  {
    name: "María Huamán",
    role: "Coordinadora de Experiencias",
    description: "Especialista en conexión con comunidades y experiencias culturales.",
  },
  {
    name: "Jorge Condori",
    role: "Guía de Montaña",
    description: "Certificado en alta montaña y conocedor de rutas sagradas.",
  },
];

export const partnerOrganizations = [
  {
    name: "Comunidad de Chinchero",
    type: "Comunidad Local",
    description: "Artesanos textiles que preservan técnicas ancestrales de tejido andino.",
  },
  {
    name: "Asociación de Guías de Montaña",
    type: "Guías Especializados",
    description: "Guías certificados con profundo conocimiento de las rutas sagradas.",
  },
  {
    name: "Pampamesayoq de Ollantaytambo",
    type: "Maestros Espirituales",
    description: "Herederos de la tradición espiritual andina.",
  },
  {
    name: "Turismo Sostenible Perú",
    type: "ONG",
    description: "Organización comprometida con el turismo responsable y comunitario.",
  },
];

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
