"use client";

import { useState } from "react";
import { Filter, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterShellProps {
  locale: "es" | "en";
  activeCount: number;
  onClear: () => void;
  onClose?: () => void;
  children: React.ReactNode;
}

export default function FilterShell({ locale, activeCount, onClear, onClose, children }: FilterShellProps) {
  const [sheetOpen, setSheetOpen] = useState(false);

  const close = () => {
    setSheetOpen(false);
    onClose?.();
  };

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
          {activeCount > 0 && (
            <button
              onClick={onClear}
              className="flex items-center gap-1 text-sm text-muted hover:text-accent transition-colors"
            >
              <X className="w-4 h-4" />
              {locale === "es" ? "Limpiar filtros" : "Clear filters"}
            </button>
          )}
        </div>
        {children}
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
          <div className="fixed inset-0 z-40 bg-black/50" onClick={close} />
        )}

        {/* Bottom sheet */}
        <div className={cn(
          "fixed bottom-0 left-0 right-0 z-50 bg-primary border-t border-white/10 rounded-t-2xl transition-transform duration-300 ease-out",
          sheetOpen ? "translate-y-0" : "translate-y-full"
        )}>
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
                {activeCount > 0 && (
                  <button
                    onClick={onClear}
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {locale === "es" ? "Limpiar" : "Clear"}
                  </button>
                )}
                <button onClick={close} className="text-white/60 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {children}

            <button
              onClick={close}
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
