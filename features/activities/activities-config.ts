import { Mountain, Users, Sparkles } from "lucide-react";
import type { ActivityCategory } from "@/config/packages";

export const categoryLabelsConfig: Record<
  ActivityCategory,
  { icon: typeof Mountain; label: { es: string; en: string } }
> = {
  rutas: {
    icon: Mountain,
    label: { es: "Rutas", en: "Routes" },
  },
  comunidad: {
    icon: Users,
    label: { es: "Comunidades", en: "Communities" },
  },
  ceremonias: {
    icon: Sparkles,
    label: { es: "Ceremonias", en: "Ceremonies" },
  },
};

export const categoryImages: Record<ActivityCategory, string> = {
  rutas: "/images/IMG_7189-3.jpg",
  comunidad: "/images/IMG_9939.jpg",
  ceremonias: "/images/machu-picchu.jpg",
};

export const categoryDescriptions: Record<ActivityCategory, { es: string; en: string }> = {
  rutas: {
    es: "Recorre rutas alternativas de Cusco en conexión con la naturaleza y lugares sagrados del antiguo Perú, de la mano de Jaguar Llaqta.",
    en: "Explore alternative routes in Cusco, connected with nature and the sacred sites of ancient Peru, guided by Jaguar Llaqta.",
  },
  comunidad: {
    es: "Vive una experiencia genuina con las comunidades nativas del Perú. Aprende de sus costumbres, tradiciones y formas de vida.",
    en: "Live a genuine experience with the native communities of Peru. Learn about their customs, traditions and ways of life.",
  },
  ceremonias: {
    es: "Conoce de cerca la espiritualidad del mundo andino y su sabiduría ancestral. Ábrete a ser parte de ceremonias de conexión contigo mismo y la cosmovisión andina.",
    en: "Discover the spirituality of the Andean world and its ancestral wisdom. Open yourself to participating in ceremonies of connection with yourself and the Andean cosmovision.",
  },
};

export const durationFilters = [
  { id: "half-day", label: { es: "Medio día", en: "Half day" }, check: (d: string) => d.toLowerCase().includes("medio") || d.toLowerCase().includes("half") },
  { id: "full-day", label: { es: "Día completo", en: "Full day" }, check: (d: string) => d.toLowerCase().includes("día completo") || d.toLowerCase().includes("full day") || d.includes("8 horas") },
  { id: "multi-day", label: { es: "Varios días", en: "Multi-day" }, check: (d: string) => d.includes("días") || d.includes("days") || d.includes("noches") || d.includes("nights") },
];
