"use client";

import { cn } from "@/lib/utils";
import { type ActivityCategory } from "@/config/packages";
import { categoryLabelsConfig, durationFilters, difficultyFilters } from "@/features/activities/activities-config";
import FilterShell from "./FilterShell";

interface ActivityFiltersProps {
  locale: "es" | "en";
  selectedCategories: ActivityCategory[];
  onCategoriesChange: (cat: ActivityCategory) => void;
  onClearCategories: () => void;
  selectedDuration: string | "all";
  onDurationChange: (dur: string | "all") => void;
  selectedDifficulty: string;
  onDifficultyChange: (d: string) => void;
  onClear: () => void;
  hasActiveFilters: boolean;
}

const chipBase = "px-2.5 py-1 text-xs md:text-sm transition-all border rounded whitespace-nowrap";
const chipActive = "bg-accent/10 text-accent border-accent/30";
const chipInactive = "border-white/20 text-muted hover:text-white hover:border-white/40";

export default function ActivityFilters({
  locale,
  selectedCategories,
  onCategoriesChange,
  onClearCategories,
  selectedDuration,
  onDurationChange,
  selectedDifficulty,
  onDifficultyChange,
  onClear,
  hasActiveFilters,
}: ActivityFiltersProps) {
  const activeCount =
    selectedCategories.length +
    (selectedDuration !== "all" ? 1 : 0) +
    (selectedDifficulty !== "all" ? 1 : 0);

  return (
    <FilterShell locale={locale} activeCount={activeCount} onClear={onClear}>
      <div className="flex flex-wrap gap-6">
        {/* Category */}
        <div>
          <p className="text-muted text-xs uppercase tracking-wider mb-2">
            {locale === "es" ? "Categoría" : "Category"}
          </p>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={onClearCategories}
              className={cn(chipBase, selectedCategories.length === 0 ? "bg-accent text-primary border-accent" : chipInactive)}
            >
              {locale === "es" ? "Todos" : "All"}
            </button>
            {(Object.keys(categoryLabelsConfig) as ActivityCategory[]).map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoriesChange(cat)}
                className={cn(chipBase, selectedCategories.includes(cat) ? chipActive : chipInactive)}
              >
                {categoryLabelsConfig[cat].label[locale]}
              </button>
            ))}
          </div>
        </div>

        {/* Duration */}
        <div>
          <p className="text-muted text-xs uppercase tracking-wider mb-2">
            {locale === "es" ? "Duración" : "Duration"}
          </p>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => onDurationChange("all")}
              className={cn(chipBase, selectedDuration === "all" ? "bg-accent text-primary border-accent" : chipInactive)}
            >
              {locale === "es" ? "Todos" : "All"}
            </button>
            {durationFilters.map((f) => (
              <button
                key={f.id}
                onClick={() => onDurationChange(f.id)}
                className={cn(chipBase, selectedDuration === f.id ? chipActive : chipInactive)}
              >
                {f.label[locale]}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty */}
        <div>
          <p className="text-muted text-xs uppercase tracking-wider mb-2">
            {locale === "es" ? "Dificultad" : "Difficulty"}
          </p>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => onDifficultyChange("all")}
              className={cn(chipBase, selectedDifficulty === "all" ? "bg-accent text-primary border-accent" : chipInactive)}
            >
              {locale === "es" ? "Todos" : "All"}
            </button>
            {difficultyFilters.map((f) => (
              <button
                key={f.id}
                onClick={() => onDifficultyChange(f.id)}
                className={cn(chipBase, selectedDifficulty === f.id ? chipActive : chipInactive)}
              >
                {f.label[locale]}
              </button>
            ))}
          </div>
        </div>

      </div>
    </FilterShell>
  );
}
