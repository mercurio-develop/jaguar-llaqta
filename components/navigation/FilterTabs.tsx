"use client";

import { cn } from "@/lib/utils";

export interface FilterOption {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface FilterTabsProps {
  options: FilterOption[];
  selectedId: string;
  onSelect: (id: string) => void;
  showAll?: boolean;
  allLabel?: string;
  className?: string;
}

export default function FilterTabs({
  options,
  selectedId,
  onSelect,
  showAll = true,
  allLabel = "All",
  className,
}: FilterTabsProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {showAll && (
        <button
          onClick={() => onSelect("all")}
          className={cn(
            "px-3 py-1.5 text-sm transition-all border rounded",
            selectedId === "all"
              ? "bg-accent text-primary border-accent"
              : "border-white/20 text-muted hover:text-white hover:border-white/40"
          )}
        >
          {allLabel}
        </button>
      )}
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelect(option.id)}
          className={cn(
            "px-3 py-1.5 text-sm transition-all border rounded flex items-center gap-1.5",
            selectedId === option.id
              ? "bg-accent/10 text-accent border-accent/30"
              : "border-white/20 text-muted hover:text-white hover:border-white/40"
          )}
        >
          {option.icon}
          {option.label}
        </button>
      ))}
    </div>
  );
}
