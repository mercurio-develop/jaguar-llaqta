"use client";

interface ProtectedImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ProtectedImage({ src, alt, className = "" }: ProtectedImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      className={className}
    />
  );
}
