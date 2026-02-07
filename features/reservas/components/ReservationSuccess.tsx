"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Check } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function ReservationSuccess() {
  const t = useTranslations("reservations");
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  return (
    <div className="pt-20 min-h-screen flex items-center">
      <div className="container-custom">
        <Card className="max-w-lg mx-auto text-center p-8">
          <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="font-display text-2xl text-white mb-4">{t("successTitle")}</h2>
          <p className="text-muted mb-6">{t("successDesc")}</p>
          <p className="text-sm text-muted mb-8">
            Te contactaremos pronto para confirmar los detalles y proceder con el pago.
          </p>
          <Link href={`/${locale}`}>
            <Button>Volver al inicio</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
