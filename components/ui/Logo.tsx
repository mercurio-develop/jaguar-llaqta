import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  layout?: "horizontal" | "vertical";
  jaguarSize?: number;
  textWidth?: number;
  textHeight?: number;
  className?: string;
  hideTextOnMobile?: boolean;
}

export default function Logo({
  layout = "horizontal",
  jaguarSize = 64,
  textWidth = 100,
  textHeight = 64,
  className,
  hideTextOnMobile = false,
}: LogoProps) {
  return (
    <div
      className={cn(
        "flex items-center",
        layout === "vertical" ? "flex-col justify-center gap-1" : "flex-row gap-3",
        className
      )}
    >
      <Image
        src="/logo/only-jaguar.png"
        alt="Jaguar Llaqta Logo"
        width={jaguarSize}
        height={jaguarSize}
        className="object-contain"
      />
      <Image
        src="/logo/only-text.png"
        alt="Jaguar Llaqta Text"
        width={textWidth}
        height={textHeight}
        className={cn(
          "object-contain",
          hideTextOnMobile && layout === "horizontal" ? "hidden sm:block" : ""
        )}
      />
    </div>
  );
}