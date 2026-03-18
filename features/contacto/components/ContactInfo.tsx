"use client";

import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
import Card from "@/components/ui/Card";
import { siteConfig } from "@/config/site";

export default function ContactInfo() {
  const t = useTranslations("contact");

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="font-medium text-white mb-1">{t("address")}</h3>
            <p className="text-muted">{t("addressValue")}</p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
            <Phone className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="font-medium text-white mb-1">{t("phone")}</h3>
            <p className="text-muted">{t("phoneValue")}</p>
            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent text-sm hover:underline"
            >
              {t("whatsappText")}
            </a>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="font-medium text-white mb-1">{t("emailLabel")}</h3>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-muted hover:text-accent transition-colors"
            >
              {t("emailValue")}
            </a>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
            <Clock className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="font-medium text-white mb-1">{t("hours")}</h3>
            <p className="text-muted">{t("hoursValue")}</p>
          </div>
        </div>
      </Card>

      {/* Social Links - left aligned with brand colors */}
      <div className="flex items-center gap-3 pt-4">
        <a
          href={siteConfig.links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90 transition-opacity"
          aria-label="Instagram"
        >
          <InstagramIcon className="w-5 h-5 text-white" />
        </a>
        <a
          href={siteConfig.links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] transition-colors"
          aria-label="WhatsApp"
        >
          <Phone className="w-5 h-5 text-white" />
        </a>
      </div>
    </div>
  );
}
