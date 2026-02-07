"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { getPackageById, type Package } from "@/config/packages";
import ReservationPackageSelect from "@/features/reservas/components/ReservationPackageSelect";
import ReservationForm from "@/features/reservas/components/ReservationForm";
import ReservationSuccess from "@/features/reservas/components/ReservationSuccess";

export default function ReservationsPage() {
  const searchParams = useSearchParams();
  const preselectedPackageId = searchParams.get("paquete");

  const [selectedPackage, setSelectedPackage] = useState<Package | null>(
    preselectedPackageId ? getPackageById(preselectedPackageId) || null : null
  );
  const [step, setStep] = useState<"select" | "form" | "success">(
    preselectedPackageId ? "form" : "select"
  );

  if (step === "success") {
    return <ReservationSuccess />;
  }

  if (step === "select") {
    return (
      <ReservationPackageSelect
        selectedPackage={selectedPackage}
        onSelect={setSelectedPackage}
        onContinue={() => setStep("form")}
      />
    );
  }

  return (
    <ReservationForm
      selectedPackage={selectedPackage!}
      onChangePackage={() => setStep("select")}
      onSuccess={() => setStep("success")}
    />
  );
}
