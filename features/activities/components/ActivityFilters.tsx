"use client";

import { useState } from "react";
import { Filter, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { type ActivityCategory } from "@/config/packages";
import { categoryLabelsConfig, durationFilters } from "@/features/activities/activities-config";

interface ActivityFiltersProps {
  locale: "es" | "en";
  selectedCategories: ActivityCategory[];
  onCategoriesChange: (cat: ActivityCategory) => void;
  onClearCategories: () => void;
  selectedDuration: string | "all";
  onDurationChange: (dur: string | "all") => void;
  onClear: () => void;
  hasActiveFilters: boolean;
}

function FilterContent({
  locale,
  selectedCategories,
  onCategoriesChange,
  onClearCategories,
  selectedDuration,
  onDurationChange,
}: Omit<ActivityFiltersProps, "onClear" | "hasActiveFilters">) {
  return (
    <div className="flex flex-wrap gap-6">
      {/* Category filter */}
      <div>
        <p className="text-muted text-xs uppercase tracking-wider mb-2">
          {locale === "es" ? "Categoría" : "Category"}
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={onClearCategories}
            className={cn(
              "px-2.5 py-1 text-xs md:text-sm transition-all border rounded",
              selectedCategories.length === 0
                ? "bg-accent text-primary border-accent"
                : "border-white/20 text-muted hover:text-white hover:border-white/40"
            )}
          >
            {locale === "es" ? "Todos" : "All"}
          </button>
          {(Object.keys(categoryLabelsConfig) as ActivityCategory[]).map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoriesChange(cat)}
              className={cn(
                "px-2.5 py-1 text-xs md:text-sm transition-all border rounded flex items-center gap-1",
                selectedCategories.includes(cat)
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
              "px-2.5 py-1 text-xs md:text-sm transition-all border rounded",
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
                "px-2.5 py-1 text-xs md:text-sm transition-all border rounded",
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
  );
}

export default function ActivityFilters(props: ActivityFiltersProps) {
  const { locale, onClear, hasActiveFilters } = props;
  const [sheetOpen, setSheetOpen] = useState(false);

  const activeCount =
    props.selectedCategories.length + (props.selectedDuration !== "all" ? 1 : 0);

  return (
    <>
      {/* Desktop panel */}
      <div className="hidden md:block mb-8 p-6 bg-support/30 border border-white/10 rounded">
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
        <FilterContent {...props} />
      </div>

      {/* Mobile: floating button */}
      <div className="md:hidden">
        <button
          onClick={() => setSheetOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 bg-accent text-primary rounded-full shadow-lg shadow-black/40 font-medium text-sm"
        >
          <Filter className="w-4 h-4" />
          {locale === "es" ? "Filtros" : "Filters"}
          {activeCount > 0 && (
            <span className="w-5 h-5 flex items-center justify-center bg-primary text-accent rounded-full text-xs font-bold">
              {activeCount}
            </span>
          )}
        </button>

        {/* Backdrop */}
        {sheetOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setSheetOpen(false)}
          />
        )}

        {/* Bottom sheet */}
        <div
          className={cn(
            "fixed bottom-0 left-0 right-0 z-50 bg-primary border-t border-white/10 rounded-t-2xl transition-transform duration-300 ease-out",
            sheetOpen ? "translate-y-0" : "translate-y-full"
          )}
        >
          {/* Handle */}
          <div className="flex justify-center pt-3 pb-1">
            <div className="w-10 h-1 bg-white/20 rounded-full" />
          </div>

          <div className="px-6 pb-8 pt-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-white">
                <Filter className="w-5 h-5 text-accent" />
                <span className="font-medium uppercase tracking-wider text-sm">
                  {locale === "es" ? "Filtros" : "Filters"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                {hasActiveFilters && (
                  <button
                    onClick={() => { onClear(); }}
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {locale === "es" ? "Limpiar" : "Clear"}
                  </button>
                )}
                <button onClick={() => setSheetOpen(false)} className="text-white/60 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <FilterContent {...props} />

            <button
              onClick={() => setSheetOpen(false)}
              className="mt-6 w-full py-3 bg-accent text-primary font-medium rounded transition-colors hover:bg-accent-hover"
            >
              {locale === "es" ? "Ver resultados" : "See results"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
