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
    label: { es: "Comunidad", en: "Community" },
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
    es: "Trekkings por montañas nevadas y valles ancestrales de los Andes",
    en: "Treks through snow-capped mountains and ancestral valleys of the Andes",
  },
  comunidad: {
    es: "Conexión auténtica con familias y tradiciones andinas",
    en: "Authentic connection with Andean families and traditions",
  },
  ceremonias: {
    es: "Templos antiguos y ceremonias con maestros espirituales",
    en: "Ancient temples and ceremonies with spiritual masters",
  },
};

export const durationFilters = [
  { id: "half-day", label: { es: "Medio día", en: "Half day" }, check: (d: string) => d.toLowerCase().includes("medio") || d.toLowerCase().includes("half") },
  { id: "full-day", label: { es: "Día completo", en: "Full day" }, check: (d: string) => d.toLowerCase().includes("día completo") || d.toLowerCase().includes("full day") || d.includes("8 horas") },
  { id: "multi-day", label: { es: "Varios días", en: "Multi-day" }, check: (d: string) => d.includes("días") || d.includes("days") || d.includes("noches") || d.includes("nights") },
];
