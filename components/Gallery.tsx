"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Mountain, Users, Sparkles, Image as ImageIcon, Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { packages, type ActivityCategory } from "@/config/packages";
import { type GalleryItem } from "@/config/packages";

const categoryIcons: Record<ActivityCategory, typeof Mountain> = {
  rutas: Mountain,
  comunidad: Users,
  ceremonias: Sparkles,
};

// Default gallery items for the main gallery view (fallback only)
const defaultGalleryItems: Array<{
  id: string;
  categories: ActivityCategory[];
  type: "image" | "video";
  title: string;
  location: string;
  url: string;
}> = [
  // Rutas - Ausangate
  { id: "fallback-1", categories: ["rutas"], type: "image", title: "Nevado Ausangate", location: "Ausangate", url: "/images/ausangate-trek-3d2n/ausangate-trek-3d2n-hero.jpg" },
  { id: "fallback-2", categories: ["rutas"], type: "image", title: "Laguna Glaciar", location: "Ausangate", url: "/images/ausangate-trek-3d2n/ausangate-trek-3d2n-gallery-12.jpg" },
  { id: "fallback-3", categories: ["rutas"], type: "image", title: "Siete Lagunas", location: "Ausangate", url: "/images/ausangate-trek-3d2n/ausangate-trek-3d2n-gallery-14.jpg" },
  // Rutas - Lares
  { id: "fallback-4", categories: ["rutas"], type: "image", title: "Lares", location: "Lares", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-24.jpg" },
  { id: "fallback-5", categories: ["rutas"], type: "image", title: "Paso de Montaña", location: "Lares", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-23.jpg" },
  { id: "fallback-6", categories: ["rutas"], type: "image", title: "Valle del Lares", location: "Lares", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-27.jpg" },
  // Rutas - Manu
  { id: "fallback-7", categories: ["rutas"], type: "image", title: "Selva del Manu", location: "Manu", url: "/images/gallery/gallery-manu.jpg" },
  { id: "fallback-8", categories: ["rutas"], type: "image", title: "Montañas", location: "Cusco", url: "/images/gallery/gallery-montanias.jpg" },
  // Comunidad
  { id: "fallback-9", categories: ["comunidad"], type: "image", title: "Tejedoras de Chinchero", location: "Chinchero", url: "/images/gallery/gallery-chincheros.jpg" },
  { id: "fallback-10", categories: ["comunidad"], type: "image", title: "Textiles Andinos", location: "Valle Sagrado", url: "/images/gallery/gallery-textiles.jpg" },
  { id: "fallback-11", categories: ["comunidad"], type: "image", title: "Comunidad Andina", location: "Valle Sagrado", url: "/images/gallery/gallery-comunidad.jpg" },
  { id: "fallback-12", categories: ["comunidad"], type: "image", title: "Cocina Rústica", location: "Cusco", url: "/images/gallery/gallery-cocina-rustica.jpg" },
  { id: "fallback-13", categories: ["comunidad"], type: "image", title: "Tejedoras Lares", location: "Lares", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-13.jpg" },
  { id: "fallback-14", categories: ["comunidad"], type: "image", title: "Familia Local", location: "Lares", url: "/images/lares-trek-3d2n/lares-trek-3d2n-gallery-34.jpg" },
  // Ceremonias
  { id: "fallback-15", categories: ["ceremonias"], type: "image", title: "Hojas de Coca", location: "Cusco", url: "/images/gallery/gallery-coca-leaf.jpg" },
  { id: "fallback-16", categories: ["ceremonias"], type: "image", title: "Moray", location: "Valle Sagrado", url: "/images/gallery/gallery-moray.jpg" },
  { id: "fallback-17", categories: ["ceremonias"], type: "image", title: "Sacsayhuamán", location: "Cusco", url: "/images/gallery/gallery-sacsayhuaman.jpg" },
  { id: "fallback-18", categories: ["ceremonias"], type: "image", title: "Machu Picchu", location: "Machu Picchu", url: "/images/gallery/gallery-machu-picchu.jpg" },
];


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
  const [selectedCategories, setSelectedCategories] = useState<ActivityCategory[]>([]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(initialLoadCount);
  const [isMounted, setIsMounted] = useState(false);
  const [shuffledItems, setShuffledItems] = useState<typeof galleryItems | null>(null);

  // Track mount state to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Use provided items or aggregate all package gallery images for the main gallery
  const galleryItems = items
    ? items.map((item, idx) => ({
        id: item.id ?? String(idx + 1),
        categories: [] as ActivityCategory[],
        type: item.type,
        title: "",
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
              id: String(autoId++),
              categories: pkg.categories,
              type: g.type,
              title: pkg.name,
              location: "",
              url: g.url,
            });
          }
        }

        // Fallback to the static defaults if, for any reason, no images were found
        return aggregated.length > 0 ? aggregated : defaultGalleryItems;
      })();

  // Shuffle main gallery client-side only (no items prop = main gallery)
  useEffect(() => {
    if (!items && isMounted) {
      setShuffledItems([...galleryItems].sort(() => Math.random() - 0.5));
    }
  }, [isMounted]); // eslint-disable-line react-hooks/exhaustive-deps

  const displayItems = (!items && isMounted && shuffledItems) ? shuffledItems : galleryItems;

  const filteredItems = !showFilters || selectedCategories.length === 0
    ? displayItems
    : displayItems.filter((item) => item.categories.some((c) => selectedCategories.includes(c)));

  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(initialLoadCount);
  }, [selectedCategories, initialLoadCount]);

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + loadMoreCount, filteredItems.length));
  }, [filteredItems.length, loadMoreCount]);

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
    comunidad: { es: "Comunidades", en: "Communities" },
    ceremonias: { es: "Ceremonias", en: "Ceremonies" },
  };

  return (
    <div className={className}>
      {/* Category filter */}
      {showFilters && !items && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setSelectedCategories([])}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              selectedCategories.length === 0
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
                onClick={() => setSelectedCategories((prev) =>
                  prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
                )}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2",
                  selectedCategories.includes(cat)
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
          const Icon = items ? ImageIcon : categoryIcons[item.categories[0] as ActivityCategory];
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
              {(item.title || item.location) && (
                <div className="absolute bottom-0 left-0 right-0 p-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.title && <p className="text-white text-sm font-medium truncate">{item.title}</p>}
                  {item.location && <p className="text-white/60 text-xs">{item.location}</p>}
                </div>
              )}

              {/* Grid thumbnail */}
              {item.url ? (
                <div className="w-full h-full" onContextMenu={(e) => e.preventDefault()}>
                  <Image
                    src={item.url}
                    alt={item.title}
                    fill
                    quality={75}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                    draggable={false}
                  />
                </div>
              ) : (
                <div className="w-full h-full bg-support flex items-center justify-center">
                  <ImageIcon className="w-8 h-8 text-white/20" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Show more button */}
      {hasMore && (
        <div className="flex justify-center pt-10">
          <button
            onClick={loadMore}
            className="px-8 py-3 border border-accent/30 text-accent text-sm font-medium uppercase tracking-wider rounded hover:bg-accent/10 transition-colors"
          >
            {isSpanish ? "Ver más" : "Show more"}
          </button>
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
            {/* Lightbox main — max quality, full viewport */}
            <div className="h-[70vh] bg-support rounded-lg relative overflow-hidden" onContextMenu={(e) => e.preventDefault()}>
              {filteredItems[currentIndex]?.url ? (
                <Image
                  src={filteredItems[currentIndex].url}
                  alt={filteredItems[currentIndex].title}
                  fill
                  quality={90}
                  sizes="100vw"
                  className="object-contain"
                  priority
                  draggable={false}
                />
              ) : (
                <p className="text-muted flex items-center justify-center h-full">{filteredItems[currentIndex]?.title}</p>
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
                      onContextMenu={(e) => e.preventDefault()}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "relative flex-shrink-0 rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent",
                        isActive ? "ring-2 ring-accent" : "ring-1 ring-white/10 hover:ring-white/30"
                      )}
                      style={{ width: 180, height: 120 }}
                      title={item.title}
                    >
                      {/* Thumbnail strip — lowest quality, tiny fixed size */}
                      {item.url ? (
                        <Image
                          src={item.url}
                          alt={item.title}
                          fill
                          quality={40}
                          sizes="180px"
                          className={cn(
                            "object-cover",
                            isActive ? "opacity-100" : "opacity-90"
                          )}
                          draggable={false}
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
