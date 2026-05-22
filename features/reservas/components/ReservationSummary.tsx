"use client";

import { Check } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import Card from "@/components/ui/Card";
import type { Package } from "@/config/packages";

interface ReservationSummaryProps {
  selectedPackage: Package;
  participants: number;
}

export default function ReservationSummary({
  selectedPackage,
  participants,
}: ReservationSummaryProps) {
  const t = useTranslations("reservations");
  const locale = useLocale();
  const totalPrice = selectedPackage.price * participants;

  const packageName = locale === "en" && selectedPackage.nameEn ? selectedPackage.nameEn : selectedPackage.name;
  const packageIncludes = locale === "en" && selectedPackage.includesEn ? selectedPackage.includesEn : selectedPackage.includes;

  return (
    <div>
      <Card className="p-6 sticky top-24">
        <h3 className="font-display text-lg text-white mb-4">{t("summaryTitle")}</h3>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-muted">{t("summaryPackage")}</span>
            <span className="text-white text-right">{packageName}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted">{t("summaryUnitPrice")}</span>
            <span className="text-white">S/ {selectedPackage.price} {t("summarySoles")}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted">{t("summaryParticipants")}</span>
            <span className="text-white">{participants}</span>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 mb-6">
          <div className="flex justify-between">
            <span className="text-white font-medium">{t("summaryTotal")}</span>
            <span className="text-2xl font-bold text-accent tracking-tight">S/ {totalPrice} <span className="text-sm font-normal text-muted">{t("summarySoles")}</span></span>
          </div>
        </div>

        {/* What's included */}
        <div className="border-t border-white/10 pt-4">
          <h4 className="text-sm font-medium text-white mb-3">{t("summaryIncludes")}</h4>
          <ul className="space-y-2">
            {packageIncludes.slice(0, 5).map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-muted text-xs">
                <Check className="w-3 h-3 text-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-muted text-xs mt-4">
          {t("summaryNote")}
        </p>
      </Card>
    </div>
  );
}
