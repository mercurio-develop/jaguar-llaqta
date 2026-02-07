"use client";

import { Check } from "lucide-react";
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
  const totalPrice = selectedPackage.price * participants;

  return (
    <div>
      <Card className="p-6 sticky top-24">
        <h3 className="font-display text-lg text-white mb-4">Resumen</h3>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-muted">Paquete:</span>
            <span className="text-white text-right">{selectedPackage.name}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted">Duración:</span>
            <span className="text-white">{selectedPackage.duration}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted">Precio unitario:</span>
            <span className="text-white">${selectedPackage.price} USD</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted">Participantes:</span>
            <span className="text-white">{participants}</span>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 mb-6">
          <div className="flex justify-between">
            <span className="text-white font-medium">Total estimado:</span>
            <span className="text-2xl font-bold text-accent tracking-tight">${totalPrice} <span className="text-sm font-normal text-muted">USD</span></span>
          </div>
        </div>

        {/* What's included */}
        <div className="border-t border-white/10 pt-4">
          <h4 className="text-sm font-medium text-white mb-3">Incluye:</h4>
          <ul className="space-y-2">
            {selectedPackage.includes.slice(0, 5).map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-muted text-xs">
                <Check className="w-3 h-3 text-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-muted text-xs mt-4">
          * Te contactaremos para confirmar disponibilidad y proceder con el pago.
        </p>
      </Card>
    </div>
  );
}
