"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { footerNavigation } from "@/config/navigation";

export default function Footer() {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-alt border-t border-white/10">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <span className="font-display text-primary text-xl font-bold">JL</span>
              </div>
              <span className="font-display text-xl text-white">JAGUAR LLAQTA</span>
            </div>
            <p className="text-muted text-sm">{t("footer.tagline")}</p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-white/60 hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-white mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              {footerNavigation.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="text-muted hover:text-accent transition-colors text-sm"
                  >
                    {t(item.titleKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-white mb-4">{t("contact.title")}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted text-sm">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3 text-muted text-sm">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-muted text-sm">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-lg text-white mb-4">{t("footer.newsletter")}</h4>
            <p className="text-muted text-sm mb-4">{t("footer.newsletterDesc")}</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className="flex-1 bg-support border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder:text-muted focus:outline-none focus:border-accent"
              />
              <button type="submit" className="btn-primary text-sm px-4">
                {t("footer.subscribe")}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm">
            © {currentYear} Jaguar Llaqta. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-4 text-sm">
            {footerNavigation.legal.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className="text-muted hover:text-accent transition-colors"
              >
                {item.titleKey}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
