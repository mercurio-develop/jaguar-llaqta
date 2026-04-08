"use client";

import { useState } from "react";
import Image from "next/image";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  quality?: number;
  sizes?: string;
}

export default function LazyImage({
  src,
  alt,
  className = "",
  quality = 70,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      src={src}
      alt={alt}
      fill
      quality={quality}
      sizes={sizes}
      onLoad={() => setLoaded(true)}
      className={`object-cover transition-all duration-700 ease-out ${
        loaded ? "blur-0 scale-100" : "blur-[2px] scale-[1.02]"
      } ${className}`}
    />
  );
}
