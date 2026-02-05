"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Mountain, Users, Sparkles, Image as ImageIcon, Play, X, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { packages, type ActivityCategory } from "@/config/packages";
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
  url: string;
}> = [
  // Rutas - Ausangate
  { id: 1, category: "rutas", type: "image", title: "Nevado Ausangate", location: "Ausangate", url: "/images/ausangate-trek/IMG_8942.jpg" },
  { id: 2, category: "rutas", type: "image", title: "Laguna Glaciar", location: "Ausangate", url: "/images/ausangate-trek/IMG_8938.jpg" },
  { id: 3, category: "rutas", type: "image", title: "Siete Lagunas", location: "Ausangate", url: "/images/ausangate-trek/IMG_8960.jpg" },
  // Rutas - Lares
  { id: 4, category: "rutas", type: "image", title: "Lares Trek", location: "Lares", url: "/images/lares-trek/IMG_3461.jpg" },
  { id: 5, category: "rutas", type: "image", title: "Paso de Montaña", location: "Lares", url: "/images/lares-trek/IMG_3450.jpg" },
  { id: 6, category: "rutas", type: "image", title: "Valle del Lares", location: "Lares", url: "/images/lares-trek/IMG_3482.jpg" },
  // Rutas - Manu
  { id: 7, category: "rutas", type: "image", title: "Selva del Manu", location: "Manu", url: "/images/manu.jpg" },
  { id: 8, category: "rutas", type: "image", title: "Montañas", location: "Cusco", url: "/images/montanias.jpg" },
  // Comunidad
  { id: 9, category: "comunidad", type: "image", title: "Tejedoras de Chinchero", location: "Chinchero", url: "/images/chincheros.jpg" },
  { id: 10, category: "comunidad", type: "image", title: "Textiles Andinos", location: "Valle Sagrado", url: "/images/textiles.jpg" },
  { id: 11, category: "comunidad", type: "image", title: "Comunidad Andina", location: "Valle Sagrado", url: "/images/comunidad.jpg" },
  { id: 12, category: "comunidad", type: "image", title: "Cocina Rústica", location: "Cusco", url: "/images/cocina-rustica.jpg" },
  { id: 13, category: "comunidad", type: "image", title: "Tejedoras Lares", location: "Lares", url: "/images/lares-trek/IMG_3312.jpg" },
  { id: 14, category: "comunidad", type: "image", title: "Familia Local", location: "Lares", url: "/images/lares-trek/IMG_7274.jpg" },
  // Ceremonias
  { id: 15, category: "ceremonias", type: "image", title: "Hojas de Coca", location: "Cusco", url: "/images/coca-leaf.jpg" },
  { id: 16, category: "ceremonias", type: "image", title: "Moray", location: "Valle Sagrado", url: "/images/moray.jpg" },
  { id: 17, category: "ceremonias", type: "image", title: "Sacsayhuamán", location: "Cusco", url: "/images/sacsayhuaman.jpg" },
  { id: 18, category: "ceremonias", type: "image", title: "Machu Picchu", location: "Machu Picchu", url: "/images/machu-picchu.jpg" },
];

// Lazy image component with intersection observer
function LazyImage({
  src,
  alt,
  className,
  onLoad
}: {
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className="w-full h-full">
      {isInView ? (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 bg-support flex items-center justify-center">
              <Loader2 className="w-6 h-6 text-accent animate-spin" />
            </div>
          )}
          <img
            src={src}
            alt={alt}
            className={cn(
              className,
              "transition-opacity duration-300",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => {
              setIsLoaded(true);
              onLoad?.();
            }}
          />
        </>
      ) : (
        <div className="w-full h-full bg-support flex items-center justify-center">
          <ImageIcon className="w-8 h-8 text-white/20" />
        </div>
      )}
    </div>
  );
}

interface GalleryProps {
  locale: "es" | "en";
  items?: GalleryItem[];
  showFilters?: boolean;
  columns?: 2 | 3 | 4;
  className?: string;
  initialLoadCount?: number;
  loadMoreCount?: number;
}

export default function Gallery({
  locale,
  items,
  showFilters = true,
  columns = 3,
  className,
  initialLoadCount = 12,
  loadMoreCount = 12
}: GalleryProps) {
  const isSpanish = locale === "es";
  const [selectedCategory, setSelectedCategory] = useState<ActivityCategory | "all">("all");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(initialLoadCount);
  const [isMounted, setIsMounted] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Track mount state to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Use provided items or aggregate all package gallery images for the main gallery
  const galleryItems = items
    ? items.map((item) => ({
        id: item.id,
        category: "rutas" as ActivityCategory, // Package gallery items don't have category
        type: item.type,
        title: item.title,
        location: "",
        url: item.url || "",
      }))
    : (() => {
        // Build a big gallery using all images from all packages
        // and de-duplicate by URL to avoid repeated pictures
        let autoId = 1;
        const seen = new Set<string>();
        const aggregated: typeof defaultGalleryItems = [];

        for (const pkg of packages) {
          for (const g of pkg.gallery || []) {
            if (g.type !== "image" || !g.url) continue;
            if (seen.has(g.url)) continue; // skip duplicates
            seen.add(g.url);
            aggregated.push({
              id: autoId++,
              category: pkg.category,
              type: g.type,
              title: g.title,
              location: "",
              url: g.url,
            });
          }
        }

        // Fallback to the static defaults if, for any reason, no images were found
        return aggregated.length > 0 ? aggregated : defaultGalleryItems;
      })();

  const filteredItems = !showFilters || selectedCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(initialLoadCount);
  }, [selectedCategory, initialLoadCount]);

  // Intersection observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && visibleCount < filteredItems.length) {
          setVisibleCount((prev) => Math.min(prev + loadMoreCount, filteredItems.length));
        }
      },
      { rootMargin: "200px" }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [visibleCount, filteredItems.length, loadMoreCount]);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

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

      {/* Image count - only show after mount to avoid hydration mismatch */}
      {isMounted && (
        <p className="text-muted text-sm text-center mb-4">
          {isSpanish
            ? `Mostrando ${visibleItems.length} de ${filteredItems.length} imágenes`
            : `Showing ${visibleItems.length} of ${filteredItems.length} images`}
        </p>
      )}

      {/* Gallery grid */}
      <div className={cn("grid gap-4", gridCols[columns])}>
        {visibleItems.map((item) => {
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

              {/* Image with lazy loading */}
              {item.url ? (
                <LazyImage
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-support flex items-center justify-center">
                  <ImageIcon className="w-8 h-8 text-white/20" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Load more trigger */}
      {hasMore && (
        <div ref={loadMoreRef} className="flex justify-center py-8">
          <Loader2 className="w-8 h-8 text-accent animate-spin" />
        </div>
      )}

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

          <div className="max-w-6xl w-full">
            <div className="h-[70vh] bg-support rounded-lg flex items-center justify-center overflow-hidden">
              {filteredItems[currentIndex]?.url ? (
                <img
                  src={filteredItems[currentIndex]?.url}
                  alt={filteredItems[currentIndex]?.title}
                  className="w-full h-full object-contain"
                />
              ) : (
                <p className="text-muted">{filteredItems[currentIndex]?.title}</p>
              )}
            </div>
            <div className="text-center mt-4">
              <p className="text-white font-medium">{filteredItems[currentIndex]?.title}</p>
              {filteredItems[currentIndex]?.location && (
                <p className="text-muted text-sm">{filteredItems[currentIndex]?.location}</p>
              )}
            </div>
            {/* Thumbnails strip */}
            <div className="mt-6">
              <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide py-2">
                {filteredItems.map((item, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedItem(item.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "relative flex-shrink-0 rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent",
                        isActive ? "ring-2 ring-accent" : "ring-1 ring-white/10 hover:ring-white/30"
                      )}
                      style={{ width: 180, height: 120 }}
                      title={item.title}
                    >
                      {item.url ? (
                        <img
                          src={item.url}
                          alt={item.title}
                          loading="lazy"
                          className={cn(
                            "w-full h-full object-cover",
                            isActive ? "opacity-100" : "opacity-90"
                          )}
                        />
                      ) : (
                        <div className="w-full h-full bg-support flex items-center justify-center">
                          <ImageIcon className="w-6 h-6 text-white/30" />
                        </div>
                      )}
                      {/* Darken mask for non-active */}
                      {!isActive && (
                        <div className="absolute inset-0 bg-black/10" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
