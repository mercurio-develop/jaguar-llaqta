"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Calendar, Users, Mail, Phone, User, FileText, Mountain, Clock, Check, ArrowRight, CreditCard } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { packages, getPackageById, type Package } from "@/config/packages";

const categoryIcons = {
  rutas: Mountain,
  comunidad: Users,
  ceremonias: Users,
};

const reservationSchema = z.object({
  name: z.string().min(2, "Nombre requerido"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(6, "Teléfono requerido"),
  packageId: z.string().min(1, "Selecciona un paquete"),
  date: z.string().min(1, "Selecciona una fecha"),
  participants: z.number().min(1).max(20),
  notes: z.string().optional(),
});

type ReservationForm = z.infer<typeof reservationSchema>;

export default function ReservationsPage() {
  const t = useTranslations("reservations");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  const preselectedPackageId = searchParams.get("paquete");
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(
    preselectedPackageId ? getPackageById(preselectedPackageId) || null : null
  );
  const [step, setStep] = useState<"select" | "form" | "success">(preselectedPackageId ? "form" : "select");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<ReservationForm>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      packageId: preselectedPackageId || "",
      participants: 1,
    },
  });

  const participants = watch("participants") || 1;
  const totalPrice = selectedPackage ? selectedPackage.price * participants : 0;

  useEffect(() => {
    if (selectedPackage) {
      setValue("packageId", selectedPackage.id);
    }
  }, [selectedPackage, setValue]);

  const onSubmit = async (data: ReservationForm) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/reservas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          package: data.packageId,
        }),
      });

      if (response.ok) {
        setStep("success");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success state
  if (step === "success") {
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

  // Package selection step
  if (step === "select") {
    return (
      <div className="pt-20">
        <section className="py-16 bg-primary-alt">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="section-title mb-4">{t("title")}</h1>
              <p className="section-subtitle">Selecciona el paquete que deseas reservar</p>
              <div className="w-24 h-1 bg-accent mx-auto" />
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pkg) => {
                const Icon = categoryIcons[pkg.category];
                return (
                  <Card
                    key={pkg.id}
                    variant="hover"
                    className={cn(
                      "p-6 cursor-pointer transition-all",
                      selectedPackage?.id === pkg.id && "ring-2 ring-accent"
                    )}
                    onClick={() => setSelectedPackage(pkg)}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{pkg.name}</h3>
                        <p className="text-xs text-muted">{pkg.duration}</p>
                      </div>
                    </div>
                    <p className="text-muted text-sm mb-4">{pkg.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-accent font-bold">${pkg.price} USD</span>
                      {selectedPackage?.id === pkg.id && (
                        <Check className="w-5 h-5 text-accent" />
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>

            {selectedPackage && (
              <div className="mt-8 text-center">
                <Button onClick={() => setStep("form")}>
                  Continuar con {selectedPackage.name}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }

  // Form step
  return (
    <div className="pt-20">
      <section className="py-16 bg-primary-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="section-title mb-4">{t("title")}</h1>
            <p className="section-subtitle">{t("subtitle")}</p>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="font-display text-xl text-white mb-6">{t("formTitle")}</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Package (hidden if preselected) */}
                  <input type="hidden" {...register("packageId")} />

                  {/* Change package link */}
                  <div className="flex items-center justify-between p-4 bg-accent/10 rounded-lg mb-6">
                    <div className="flex items-center gap-3">
                      <Mountain className="w-5 h-5 text-accent" />
                      <span className="text-white">{selectedPackage?.name}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep("select")}
                      className="text-accent text-sm hover:underline"
                    >
                      Cambiar
                    </button>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-white text-sm mb-2">{t("name")}</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                      <input
                        {...register("name")}
                        className="w-full bg-primary border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-accent"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm mb-2">{t("email")}</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                        <input
                          {...register("email")}
                          type="email"
                          className="w-full bg-primary border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-accent"
                          placeholder="email@example.com"
                        />
                      </div>
                      {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="block text-white text-sm mb-2">{t("phone")}</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                        <input
                          {...register("phone")}
                          className="w-full bg-primary border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-accent"
                          placeholder="+51 XXX XXX XXX"
                        />
                      </div>
                      {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  {/* Date & Participants */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm mb-2">{t("date")}</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                        <input
                          {...register("date")}
                          type="date"
                          className="w-full bg-primary border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-accent"
                        />
                      </div>
                      {errors.date && <p className="text-red-400 text-sm mt-1">{errors.date.message}</p>}
                    </div>
                    <div>
                      <label className="block text-white text-sm mb-2">{t("participants")}</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                        <input
                          {...register("participants", { valueAsNumber: true })}
                          type="number"
                          min="1"
                          max="20"
                          className="w-full bg-primary border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-accent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-white text-sm mb-2">{t("notes")}</label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 w-5 h-5 text-muted" />
                      <textarea
                        {...register("notes")}
                        rows={4}
                        className="w-full bg-primary border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-accent resize-none"
                        placeholder="Alergias, requerimientos especiales, preguntas..."
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full" isLoading={isSubmitting}>
                    {t("submitReservation")}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Summary */}
            <div>
              <Card className="p-6 sticky top-24">
                <h3 className="font-display text-lg text-white mb-4">Resumen</h3>

                {selectedPackage && (
                  <>
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
                        <span className="text-2xl font-bold text-accent">${totalPrice} USD</span>
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
                  </>
                )}

                <p className="text-muted text-xs mt-4">
                  * Te contactaremos para confirmar disponibilidad y proceder con el pago.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
