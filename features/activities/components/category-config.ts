import { Mountain, Users, Sparkles } from "lucide-react";
import type { ActivityCategory } from "@/config/packages";

export const categoryConfig: Record<ActivityCategory, {
  icon: typeof Mountain;
  heroImage: string;
  backgroundPosition?: string;
}> = {
  rutas: {
    icon: Mountain,
    heroImage: "/images/IMG_7189-3.jpg",
    backgroundPosition: "center 30%",
  },
  comunidad: {
    icon: Users,
    heroImage: "/images/IMG_9939.jpg",
    backgroundPosition: "center 15%",
  },
  ceremonias: {
    icon: Sparkles,
    heroImage: "/images/machu-picchu.jpg",
    backgroundPosition: "center",
  },
};
