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
  rutas: "/images/ausangate-trek/IMG_8942.jpg",
  comunidad: "/images/comunidad.jpg",
  ceremonias: "/images/machu-picchu.jpg",
};

export const categoryDescriptions: Record<ActivityCategory, { es: string; en: string }> = {
  rutas: {
    es: "Recorre rutas alternativas de Cusco, interactuando con la naturaleza o llegando a vestigios de culturas pre hispánicas de la mano de nuestros guías experimentados.",
    en: "Explore alternative routes in Cusco, interacting with nature or reaching vestiges of pre-Hispanic cultures guided by our experienced guides.",
  },
  comunidad: {
    es: "Conoce de cerca el modo en que viven las comunidades nativas de Cusco. Ingresa a su dinámica diaria en vivienda, costumbres, actividades y armonía con la naturaleza.",
    en: "Get to know firsthand how the native communities of Cusco live. Enter their daily dynamics in housing, customs, activities and harmony with nature.",
  },
  ceremonias: {
    es: "Vive la experiencia de la tradición mágica ancestral, conoce y sumérgete en la interacción entre el Ser y el Todo, a través de ceremonias tradicionales de la cultura viva ancestral.",
    en: "Live the experience of ancestral magical tradition, discover and immerse yourself in the interaction between Being and the Whole, through traditional ceremonies of the living ancestral culture.",
  },
};

export const durationFilters = [
  { id: "half-day", label: { es: "Medio día", en: "Half day" }, check: (d: string) => d.toLowerCase().includes("medio") || d.toLowerCase().includes("half") },
  { id: "full-day", label: { es: "Día completo", en: "Full day" }, check: (d: string) => d.toLowerCase().includes("día completo") || d.toLowerCase().includes("full day") || d.includes("8 horas") },
  { id: "multi-day", label: { es: "Varios días", en: "Multi-day" }, check: (d: string) => d.includes("días") || d.includes("days") || d.includes("noches") || d.includes("nights") },
];
