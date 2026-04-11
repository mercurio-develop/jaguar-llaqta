"use client";

import { useEffect } from "react";

export default function ImageProtection() {
  useEffect(() => {
    const prevent = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Allow context menu on interactive elements that might need it
      const isInteractive = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.tagName === "INPUT" || 
        target.tagName === "TEXTAREA" ||
        target.closest("a") ||
        target.closest("button");

      if (!isInteractive) {
        e.preventDefault();
      }
      
      // Always prevent on images regardless of parent
      if (target.tagName === "IMG") {
        e.preventDefault();
      }
    };

    const preventDrag = (e: DragEvent) => {
      if ((e.target as HTMLElement).tagName === "IMG") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", prevent);
    document.addEventListener("dragstart", preventDrag);

    return () => {
      document.removeEventListener("contextmenu", prevent);
      document.removeEventListener("dragstart", preventDrag);
    };
  }, []);

  return null;
}
