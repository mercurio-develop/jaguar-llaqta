"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { locales } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher() {
  const t = useTranslations("common");
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split("/")[1];

  const switchLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "");
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <div className="flex items-center gap-1 border border-white/20 rounded-lg p-1">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          className={cn(
            "px-3 py-1 text-xs font-medium rounded transition-all uppercase",
            currentLocale === locale
              ? "bg-accent text-primary"
              : "text-white/60 hover:text-white"
          )}
        >
          {locale}
        </button>
      ))}
    </div>
  );
}
