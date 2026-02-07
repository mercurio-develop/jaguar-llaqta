"use client";

import { Filter, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { type ActivityCategory } from "@/config/packages";
import { categoryLabelsConfig, durationFilters } from "@/features/activities/activities-config";

interface ActivityFiltersProps {
  locale: "es" | "en";
  selectedCategory: ActivityCategory | "all";
  selectedDuration: string | "all";
  onCategoryChange: (cat: ActivityCategory | "all") => void;
  onDurationChange: (dur: string | "all") => void;
  onClear: () => void;
  hasActiveFilters: boolean;
}

export default function ActivityFilters({
  locale,
  selectedCategory,
  selectedDuration,
  onCategoryChange,
  onDurationChange,
  onClear,
  hasActiveFilters,
}: ActivityFiltersProps) {
  return (
    <div className="mb-8 p-6 bg-support/30 border border-white/10 rounded">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-white">
          <Filter className="w-5 h-5 text-accent" />
          <span className="font-medium uppercase tracking-wider text-sm">
            {locale === "es" ? "Filtros" : "Filters"}
          </span>
        </div>
        {hasActiveFilters && (
          <button
            onClick={onClear}
            className="flex items-center gap-1 text-sm text-muted hover:text-accent transition-colors"
          >
            <X className="w-4 h-4" />
            {locale === "es" ? "Limpiar filtros" : "Clear filters"}
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-6">
        {/* Category filter */}
        <div>
          <p className="text-muted text-xs uppercase tracking-wider mb-2">
            {locale === "es" ? "Categoría" : "Category"}
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onCategoryChange("all")}
              className={cn(
                "px-3 py-1.5 text-sm transition-all border rounded",
                selectedCategory === "all"
                  ? "bg-accent text-primary border-accent"
                  : "border-white/20 text-muted hover:text-white hover:border-white/40"
              )}
            >
              {locale === "es" ? "Todos" : "All"}
            </button>
            {(Object.keys(categoryLabelsConfig) as ActivityCategory[]).map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={cn(
                  "px-3 py-1.5 text-sm transition-all border rounded flex items-center gap-1.5",
                  selectedCategory === cat
                    ? "bg-accent/10 text-accent border-accent/30"
                    : "border-white/20 text-muted hover:text-white hover:border-white/40"
                )}
              >
                {categoryLabelsConfig[cat].label[locale]}
              </button>
            ))}
          </div>
        </div>

        {/* Duration filter */}
        <div>
          <p className="text-muted text-xs uppercase tracking-wider mb-2">
            {locale === "es" ? "Duración" : "Duration"}
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onDurationChange("all")}
              className={cn(
                "px-3 py-1.5 text-sm transition-all border rounded",
                selectedDuration === "all"
                  ? "bg-accent text-primary border-accent"
                  : "border-white/20 text-muted hover:text-white hover:border-white/40"
              )}
            >
              {locale === "es" ? "Todos" : "All"}
            </button>
            {durationFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => onDurationChange(filter.id)}
                className={cn(
                  "px-3 py-1.5 text-sm transition-all border rounded",
                  selectedDuration === filter.id
                    ? "bg-accent/10 text-accent border-accent/30"
                    : "border-white/20 text-muted hover:text-white hover:border-white/40"
                )}
              >
                {filter.label[locale]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
