"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { mainNavigation } from "@/config/navigation";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const locale = pathname.split("/")[1];

  const isActive = (href: string, exact = false) => {
    if (href === "/") {
      return pathname === `/${locale}`;
    }
    const fullPath = `/${locale}${href}`;
    if (exact) {
      return pathname === fullPath;
    }
    return pathname === fullPath || pathname.startsWith(fullPath + "/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <span className="font-display text-primary text-xl font-bold">JL</span>
            </div>
            <span className="font-display text-xl text-white hidden sm:block">
              JAGUAR LLAQTA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {mainNavigation.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={`/${locale}${item.href === "/" ? "" : item.href}`}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1",
                    isActive(item.href)
                      ? "text-accent"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {t(item.titleKey)}
                  {item.children && (
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform",
                      openDropdown === item.href && "rotate-180"
                    )} />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.href && (
                  <div className="absolute top-full left-0 pt-2 w-56">
                    <div className="bg-support rounded shadow-xl border border-white/10 py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={`/${locale}${child.href}`}
                          className={cn(
                            "block px-4 py-2 text-sm transition-colors",
                            isActive(child.href, true)
                              ? "text-accent bg-white/5"
                              : "text-white/80 hover:text-white hover:bg-white/5"
                          )}
                        >
                          {t(child.titleKey)}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />

            <Link
              href={`/${locale}/reservas`}
              className="hidden md:block btn-primary text-sm !px-3 !py-1.5"
            >
              {t("common.bookNow")}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 py-4 animate-slide-down">
            {mainNavigation.map((item) => (
              <div key={item.href}>
                <Link
                  href={`/${locale}${item.href === "/" ? "" : item.href}`}
                  onClick={() => !item.children && setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-3 text-base font-medium transition-colors",
                    isActive(item.href)
                      ? "text-accent"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {t(item.titleKey)}
                </Link>
                {item.children && (
                  <div className="pl-6 border-l border-white/10 ml-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={`/${locale}${child.href}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "block px-4 py-2 text-sm transition-colors",
                          isActive(child.href, true)
                            ? "text-accent"
                            : "text-white/60 hover:text-white"
                        )}
                      >
                        {t(child.titleKey)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 px-4">
              <Link
                href={`/${locale}/reservas`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary w-full text-center block"
              >
                {t("common.bookNow")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
