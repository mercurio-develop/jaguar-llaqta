"use client";

import { useState, useRef, useEffect } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const prevent = (e: React.SyntheticEvent) => e.preventDefault();

export default function LazyImage({ src, alt, className = "" }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        draggable={false}
        onLoad={() => setLoaded(true)}
        onContextMenu={prevent}
        onDragStart={prevent}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
          loaded ? "blur-0 scale-100" : "blur-[2px] scale-[1.02]"
        } ${className}`}
      />
      {/* Transparent overlay — blocks right-click, drag, and iOS long-press save */}
      <div
        className="absolute inset-0 z-10"
        onContextMenu={prevent}
        onDragStart={prevent}
        style={{ WebkitTouchCallout: "none", userSelect: "none" } as React.CSSProperties}
      />
    </>
  );
}
