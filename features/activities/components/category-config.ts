import { Mountain, Users, Sparkles } from "lucide-react";
import type { ActivityCategory } from "@/config/packages";

export const categoryConfig: Record<ActivityCategory, {
  icon: typeof Mountain;
  heroImage: string;
}> = {
  rutas: {
    icon: Mountain,
    heroImage: "/images/ausangate-trek/IMG_8942.jpg",
  },
  comunidad: {
    icon: Users,
    heroImage: "/images/comunidad.jpg",
  },
  ceremonias: {
    icon: Sparkles,
    heroImage: "/images/machu-picchu.jpg",
  },
};
