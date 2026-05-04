import { Mountain, Users, Sparkles } from "lucide-react";
import type { ActivityCategory } from "@/config/packages";

export const categoryConfig: Record<ActivityCategory, {
  icon: typeof Mountain;
  heroImage: string;
  backgroundPosition?: string;
}> = {
  rutas: {
    icon: Mountain,
    heroImage: "/images/activities/activities-category-rutas.jpg",
    backgroundPosition: "center 30%",
  },
  comunidad: {
    icon: Users,
    heroImage: "/images/activities/activities-category-comunidad.jpg",
    backgroundPosition: "center 15%",
  },
  ceremonias: {
    icon: Sparkles,
    heroImage: "/images/activities/activities-category-ceremonias.jpg",
    backgroundPosition: "center",
  },
};
