"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FlaskConical } from "lucide-react";
import { Calendar, Users, Mail, Phone, User, Mountain } from "lucide-react";

const DEV = process.env.NODE_ENV === "development";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ReservationSummary from "./ReservationSummary";
import TravelerForm from "./TravelerForm";
import { reservationSchema, type ReservationFormData, type TravelerData } from "@/features/reservas/schemas";
import { submitReservation } from "@/features/reservas/actions/submit-reservation";
import type { Package } from "@/config/packages";

interface ReservationFormProps {
  selectedPackage: Package;
  onChangePackage: () => void;
  onSuccess: () => void;
}

const emptyTraveler = (): TravelerData => ({
  fullName: "",
  birthDate: "",
  nationality: "",
  idPassport: "",
  languages: "",
  phone: "",
  email: "",
  hasHikingExperience: false,
  hikingDetails: "",
  hasAltitudeExperience: false,
  altitudeDetails: "",
  medicalCondition: "",
  treatment: "",
  recentSurgeries: "",
  medications: "",
  allergies: "",
  dietaryRestrictions: "",
  hasOwnEquipment: false,
  equipmentDetails: "",
});

export default function ReservationForm({
  selectedPackage,
  onChangePackage,
  onSuccess,
}: ReservationFormProps) {
  const t = useTranslations("reservations");
  const locale = useLocale() as "es" | "en";
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      packageId: selectedPackage.id,
      participants: 1,
      travelers: [emptyTraveler()],
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "travelers" });

  const participants = watch("participants") || 1;

  // Sync traveler slots with participant count
  useEffect(() => {
    const count = Number(participants);
    if (!count || count < 1) return;
    const current = fields.length;
    if (count > current) {
      for (let i = 0; i < count - current; i++) append(emptyTraveler());
    } else if (count < current) {
      for (let i = current - 1; i >= count; i--) remove(i);
    }
  }, [participants]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setValue("packageId", selectedPackage.id);
  }, [selectedPackage, setValue]);

  const fillTestData = () => {
    reset({
      packageId: selectedPackage.id,
      name: "Carlos Mendoza",
      email: "carlos.mendoza@example.com",
      phone: "+34 612 345 678",
      date: "2026-05-15",
      participants: 2,
      travelers: [
        {
          fullName: "Carlos Mendoza García",
          birthDate: "1988-03-12",
          nationality: "Española",
          idPassport: "12345678A",
          languages: "Español, Inglés",
          phone: "+34 612 345 678",
          email: "carlos.mendoza@example.com",
          hasHikingExperience: true,
          hikingDetails: "Camino de Santiago (2022), 800km, 30 días",
          hasAltitudeExperience: true,
          altitudeDetails: "Mont Blanc, 4.808m (2023)",
          medicalCondition: "Ninguna",
          treatment: "—",
          recentSurgeries: "—",
          medications: "Ibuprofeno ocasional",
          allergies: "Polen",
          dietaryRestrictions: "—",
          hasOwnEquipment: true,
          equipmentDetails: "Bastones, mochila 40L, botas Gore-Tex",
        },
        {
          fullName: "Laura Sánchez Ruiz",
          birthDate: "1992-07-24",
          nationality: "Española",
          idPassport: "87654321B",
          languages: "Español, Francés",
          phone: "+34 698 765 432",
          email: "laura.sanchez@example.com",
          hasHikingExperience: false,
          hikingDetails: "",
          hasAltitudeExperience: false,
          altitudeDetails: "",
          medicalCondition: "Asma leve",
          treatment: "Inhalador de rescate",
          recentSurgeries: "—",
          medications: "Ventolín (inhalador)",
          allergies: "Frutos secos",
          dietaryRestrictions: "Vegetariana",
          hasOwnEquipment: false,
          equipmentDetails: "",
        },
      ],
    });
  };

  const onSubmit = async (data: ReservationFormData) => {
    setIsSubmitting(true);
    try {
      const result = await submitReservation(data);
      if (result.status === "SUCCESS") onSuccess();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-[var(--header-height)]">
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
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-xl text-white">{t("formTitle")}</h2>
                  {DEV && (
                    <button
                      type="button"
                      onClick={fillTestData}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-medium hover:bg-violet-500/20 transition-colors"
                    >
                      <FlaskConical className="w-3.5 h-3.5" />
                      Fill test data
                    </button>
                  )}
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <input type="hidden" {...register("packageId")} />

                  {/* Package indicator */}
                  <div className="flex items-center justify-between p-4 bg-accent/10 rounded-lg mb-6">
                    <div className="flex items-center gap-3">
                      <Mountain className="w-5 h-5 text-accent" />
                      <span className="text-white">
                        {locale === "en" && selectedPackage.nameEn ? selectedPackage.nameEn : selectedPackage.name}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={onChangePackage}
                      className="text-accent text-sm hover:underline"
                    >
                      {locale === "es" ? "Cambiar" : "Change"}
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
                        placeholder={locale === "es" ? "Tu nombre completo" : "Your full name"}
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

                  {/* ── Traveler profiles ── */}
                  <div className="border-t border-white/10 pt-6">
                    <h3 className="font-display text-lg text-white mb-2">
                      {locale === "es" ? "Perfil de los Viajeros" : "Traveler Profiles"}
                    </h3>
                    <p className="text-muted text-sm mb-5">
                      {locale === "es"
                        ? "Completa la información de cada participante. Esto nos ayuda a preparar la mejor experiencia para tu grupo."
                        : "Complete each participant's information. This helps us prepare the best experience for your group."}
                    </p>
                    <div className="space-y-3">
                      {fields.map((field, index) => (
                        <TravelerForm
                          key={field.id}
                          index={index}
                          control={control}
                          register={register}
                          errors={errors}
                          locale={locale}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Submit */}
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
