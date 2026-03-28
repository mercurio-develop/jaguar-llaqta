"use client";

import { useEffect } from "react";

export default function ImageProtection() {
  useEffect(() => {
    const prevent = (e: Event) => {
      if ((e.target as HTMLElement).tagName === "IMG") e.preventDefault();
    };

    document.addEventListener("contextmenu", prevent);
    document.addEventListener("dragstart", prevent);

    return () => {
      document.removeEventListener("contextmenu", prevent);
      document.removeEventListener("dragstart", prevent);
    };
  }, []);

  return null;
}
