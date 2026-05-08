import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  layout?: "horizontal" | "vertical";
  width?: number;
  height?: number;
  mobileWidth?: number;
  mobileHeight?: number;
  className?: string;
  hideTextOnMobile?: boolean;
}

export default function Logo({
  layout = "horizontal",
  width = 200,
  height = 80,
  mobileWidth = 96,
  mobileHeight = 96,
  className,
  hideTextOnMobile = false,
}: LogoProps) {
  const isHorizontal = layout === "horizontal";

  return (
    <div className={cn("flex items-center justify-center relative", className)}>
      <Image
        src={isHorizontal ? "/logo/logo-text-horizontal.svg" : "/logo/logo-text-vertical.svg"}
        alt="Jaguar Llaqta Logo"
        width={width}
        height={height}
        priority
        className={cn(
          "object-contain",
          hideTextOnMobile && isHorizontal ? "hidden sm:block" : "block"
        )}
      />
      {hideTextOnMobile && isHorizontal && (
        <Image
          src="/logo/JaguarLlaqta-mobile.svg"
          alt="Jaguar Llaqta Logo"
          width={mobileWidth}
          height={mobileHeight}
          priority
          className="object-contain sm:hidden block ml-2"
        />
      )}
    </div>
  );
}