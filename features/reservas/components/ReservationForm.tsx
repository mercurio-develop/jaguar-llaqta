"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, Users, Mail, Phone, User, FileText, Mountain } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ReservationSummary from "./ReservationSummary";
import { reservationSchema, type ReservationFormData } from "@/features/reservas/schemas";
import { submitReservation } from "@/features/reservas/actions/submit-reservation";
import type { Package } from "@/config/packages";

interface ReservationFormProps {
  selectedPackage: Package;
  onChangePackage: () => void;
  onSuccess: () => void;
}

export default function ReservationForm({
  selectedPackage,
  onChangePackage,
  onSuccess,
}: ReservationFormProps) {
  const t = useTranslations("reservations");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      packageId: selectedPackage.id,
      participants: 1,
    },
  });

  const participants = watch("participants") || 1;

  useEffect(() => {
    setValue("packageId", selectedPackage.id);
  }, [selectedPackage, setValue]);

  const onSubmit = async (data: ReservationFormData) => {
    setIsSubmitting(true);
    try {
      const result = await submitReservation(data);

      if (result.status === "SUCCESS") {
        onSuccess();
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <input type="hidden" {...register("packageId")} />

                  {/* Change package link */}
                  <div className="flex items-center justify-between p-4 bg-accent/10 rounded-lg mb-6">
                    <div className="flex items-center gap-3">
                      <Mountain className="w-5 h-5 text-accent" />
                      <span className="text-white">{selectedPackage.name}</span>
                    </div>
                    <button
                      type="button"
                      onClick={onChangePackage}
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
            <ReservationSummary
              selectedPackage={selectedPackage}
              participants={participants}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
