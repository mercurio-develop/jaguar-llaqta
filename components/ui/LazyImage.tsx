"use client";

import { useState, useRef, useEffect } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function LazyImage({ src, alt, className = "" }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Image already cached — onLoad won't fire
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      onLoad={() => setLoaded(true)}
      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
        loaded ? "blur-0 scale-100" : "blur-[2px] scale-[1.02]"
      } ${className}`}
    />
  );
}