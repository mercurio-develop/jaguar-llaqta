"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Mountain, Users, Sparkles, Image as ImageIcon, Map, Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import Card from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { activityCategories, type ActivityCategory } from "@/config/navigation";

const categoryIcons = {
  cuerpo: Mountain,
  mente: Users,
  espiritu: Sparkles,
};

// Gallery items with category
const galleryItems = [
  { id: 1, category: "cuerpo", type: "image", title: "Salkantay al amanecer", location: "Salkantay" },
  { id: 2, category: "cuerpo", type: "image", title: "Laguna Humantay", location: "Cusco" },
  { id: 3, category: "cuerpo", type: "image", title: "Montaña de Colores", location: "Ausangate" },
  { id: 4, category: "cuerpo", type: "video", title: "Trekking Ausangate", location: "Ausangate" },
  { id: 5, category: "mente", type: "image", title: "Tejedoras de Chinchero", location: "Chinchero" },
  { id: 6, category: "mente", type: "image", title: "Mercado de Pisac", location: "Pisac" },
  { id: 7, category: "mente", type: "image", title: "Familia andina", location: "Valle Sagrado" },
  { id: 8, category: "mente", type: "image", title: "Preparando pachamanca", location: "Cusco" },
  { id: 9, category: "espiritu", type: "image", title: "Ofrenda a la Pachamama", location: "Cusco" },
  { id: 10, category: "espiritu", type: "image", title: "Ceremonia de coca", location: "Ollantaytambo" },
  { id: 11, category: "espiritu", type: "video", title: "Ritual del amanecer", location: "Sacsayhuamán" },
  { id: 12, category: "espiritu", type: "image", title: "Templo del Sol", location: "Machu Picchu" },
];

export default function GalleryPage() {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  const [selectedCategory, setSelectedCategory] = useState<ActivityCategory | "all">("all");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const filteredItems = selectedCategory === "all"
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

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-primary-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="section-title mb-4">{t("gallery.title")}</h1>
            <p className="section-subtitle">Imágenes y videos de nuestras experiencias</p>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                selectedCategory === "all"
                  ? "bg-accent text-primary"
                  : "bg-support text-white/70 hover:text-white"
              )}
            >
              {t("categories.all")}
            </button>
            {activityCategories.map((cat) => {
              const Icon = categoryIcons[cat.id];
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2",
                    selectedCategory === cat.id
                      ? "bg-accent text-primary"
                      : "bg-support text-white/70 hover:text-white"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {t(cat.labelKey)}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => {
              const Icon = categoryIcons[item.category as ActivityCategory];
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
                  <div className="absolute top-3 left-3 z-20">
                    <div className="w-8 h-8 rounded-full bg-primary/60 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                  </div>

                  {/* Info on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm font-medium truncate">{item.title}</p>
                    <p className="text-white/60 text-xs">{item.location}</p>
                  </div>

                  {/* Placeholder */}
                  <div className="w-full h-full bg-support flex items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-white/20" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Map link */}
          <div className="mt-16 text-center">
            <Link href={`/${locale}/galeria/mapas`}>
              <Card variant="hover" className="inline-flex items-center gap-4 px-8 py-6">
                <Map className="w-8 h-8 text-accent" />
                <div className="text-left">
                  <h3 className="font-display text-lg text-white">{t("gallery.mapsTitle")}</h3>
                  <p className="text-muted text-sm">{t("gallery.mapsDesc")}</p>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

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
              <p className="text-muted text-sm">{filteredItems[currentIndex]?.location}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
