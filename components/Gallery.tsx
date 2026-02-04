"use client";

import { useState } from "react";
import { Mountain, Users, Sparkles, Image as ImageIcon, Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { type ActivityCategory } from "@/config/packages";
import { type GalleryItem } from "@/config/packages";

const categoryIcons: Record<ActivityCategory, typeof Mountain> = {
  rutas: Mountain,
  comunidad: Users,
  ceremonias: Sparkles,
};

// Default gallery items for the main gallery view
const defaultGalleryItems: Array<{
  id: number;
  category: ActivityCategory;
  type: "image" | "video";
  title: string;
  location: string;
}> = [
  { id: 1, category: "rutas", type: "image", title: "Salkantay al amanecer", location: "Salkantay" },
  { id: 2, category: "rutas", type: "image", title: "Laguna Humantay", location: "Cusco" },
  { id: 3, category: "rutas", type: "image", title: "Montaña de Colores", location: "Ausangate" },
  { id: 4, category: "rutas", type: "video", title: "Trekking Ausangate", location: "Ausangate" },
  { id: 5, category: "comunidad", type: "image", title: "Tejedoras de Chinchero", location: "Chinchero" },
  { id: 6, category: "comunidad", type: "image", title: "Mercado de Pisac", location: "Pisac" },
  { id: 7, category: "comunidad", type: "image", title: "Familia andina", location: "Valle Sagrado" },
  { id: 8, category: "comunidad", type: "image", title: "Preparando pachamanca", location: "Cusco" },
  { id: 9, category: "ceremonias", type: "image", title: "Ofrenda a la Pachamama", location: "Cusco" },
  { id: 10, category: "ceremonias", type: "image", title: "Ceremonia de coca", location: "Ollantaytambo" },
  { id: 11, category: "ceremonias", type: "video", title: "Ritual del amanecer", location: "Sacsayhuamán" },
  { id: 12, category: "ceremonias", type: "image", title: "Templo del Sol", location: "Machu Picchu" },
];

interface GalleryProps {
  locale: "es" | "en";
  items?: GalleryItem[];
  showFilters?: boolean;
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function Gallery({
  locale,
  items,
  showFilters = true,
  columns = 4,
  className
}: GalleryProps) {
  const isSpanish = locale === "es";
  const [selectedCategory, setSelectedCategory] = useState<ActivityCategory | "all">("all");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  // Use provided items or default gallery items
  const galleryItems = items
    ? items.map((item, index) => ({
        id: item.id,
        category: "rutas" as ActivityCategory, // Package gallery items don't have category
        type: item.type,
        title: item.title,
        location: "",
      }))
    : defaultGalleryItems;

  const filteredItems = !showFilters || selectedCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const currentIndex = selectedItem !== null
    ? filteredItems.findIndex((item) => item.id === selectedItem)
    : -1;

  const navigate = (direction: "prev" | "next") => {
    if (currentIndex === -1) return;
    const newIndex = direction === "prev"
      ? Math.max(0, currentIndex - 1)
      : Math.min(filteredItems.length - 1, currentIndex + 1);
    setSelectedItem(filteredItems[newIndex].id);
  };

  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  };

  const categoryLabels: Record<ActivityCategory, { es: string; en: string }> = {
    rutas: { es: "Rutas", en: "Routes" },
    comunidad: { es: "Comunidad", en: "Community" },
    ceremonias: { es: "Ceremonias", en: "Ceremonies" },
  };

  return (
    <div className={className}>
      {/* Category filter */}
      {showFilters && !items && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory("all")}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              selectedCategory === "all"
                ? "bg-accent text-primary"
                : "bg-support text-white/70 hover:text-white"
            )}
          >
            {isSpanish ? "Todos" : "All"}
          </button>
          {(Object.keys(categoryIcons) as ActivityCategory[]).map((cat) => {
            const Icon = categoryIcons[cat];
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2",
                  selectedCategory === cat
                    ? "bg-accent text-primary"
                    : "bg-support text-white/70 hover:text-white"
                )}
              >
                <Icon className="w-4 h-4" />
                {categoryLabels[cat][locale]}
              </button>
            );
          })}
        </div>
      )}

      {/* Gallery grid */}
      <div className={cn("grid gap-4", gridCols[columns])}>
        {filteredItems.map((item) => {
          const Icon = items ? ImageIcon : categoryIcons[item.category as ActivityCategory];
          return (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item.id)}
              className="aspect-square bg-support rounded-lg overflow-hidden relative group"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />

              {/* Play icon for videos */}
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-12 h-12 rounded-full bg-accent/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-primary ml-1" />
                  </div>
                </div>
              )}

              {/* Category icon */}
              {!items && (
                <div className="absolute top-3 left-3 z-20">
                  <div className="w-8 h-8 rounded-full bg-primary/60 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                </div>
              )}

              {/* Info on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm font-medium truncate">{item.title}</p>
                {item.location && <p className="text-white/60 text-xs">{item.location}</p>}
              </div>

              {/* Placeholder */}
              <div className="w-full h-full bg-support flex items-center justify-center">
                <ImageIcon className="w-8 h-8 text-white/20" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Lightbox */}
      {selectedItem !== null && (
        <div className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 p-2 text-white hover:text-accent transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          {currentIndex > 0 && (
            <button
              onClick={() => navigate("prev")}
              className="absolute left-4 p-2 text-white hover:text-accent transition-colors"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
          )}

          {currentIndex < filteredItems.length - 1 && (
            <button
              onClick={() => navigate("next")}
              className="absolute right-4 p-2 text-white hover:text-accent transition-colors"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          )}

          <div className="max-w-4xl w-full">
            <div className="aspect-video bg-support rounded-lg flex items-center justify-center">
              <p className="text-muted">{filteredItems[currentIndex]?.title}</p>
            </div>
            <div className="text-center mt-4">
              <p className="text-white font-medium">{filteredItems[currentIndex]?.title}</p>
              {filteredItems[currentIndex]?.location && (
                <p className="text-muted text-sm">{filteredItems[currentIndex]?.location}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
