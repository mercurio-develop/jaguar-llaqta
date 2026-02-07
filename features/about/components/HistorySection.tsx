"use client";

import { useTranslations } from "next-intl";
import { History } from "lucide-react";

export default function HistorySection() {
  const t = useTranslations("about");

  return (
    <section id="historia" className="py-20 bg-primary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <History className="w-8 h-8 text-accent" />
              <h2 className="font-display text-3xl text-white">{t("historyTitle")}</h2>
            </div>
            <p className="text-muted leading-relaxed text-lg">
              {t("historyText")}
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-support rounded overflow-hidden relative">
              <img
                src="/images/chincheros.jpg"
                alt={t("historyTitle")}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
