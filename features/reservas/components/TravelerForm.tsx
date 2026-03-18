"use client";

import { useState } from "react";
import { Controller, useWatch, type Control, type UseFormRegister, type FieldErrors } from "react-hook-form";
import { ChevronDown, ChevronUp, User } from "lucide-react";
import type { ReservationFormData } from "@/features/reservas/schemas";

interface TravelerFormProps {
  index: number;
  control: Control<ReservationFormData>;
  register: UseFormRegister<ReservationFormData>;
  errors: FieldErrors<ReservationFormData>;
  locale: "es" | "en";
}

const L = {
  es: {
    traveler: "Viajero",
    tapToExpand: "Toca para completar",
    // Sections
    personalData: "Datos Personales",
    experience: "Experiencia Previa",
    medical: "Pre-existencias Médicas",
    equipment: "Equipo de Caminata",
    // Fields
    fullName: "Nombre y apellidos",
    birthDate: "Fecha de nacimiento",
    nationality: "Nacionalidad",
    idPassport: "DNI / Pasaporte",
    languages: "Idiomas",
    phone: "Teléfono",
    email: "Correo",
    // Experience
    hasHiking: "¿Experiencia previa en caminatas en la naturaleza?",
    hikingDetails: "¿Cómo se llamaba y dónde la realizó?",
    hasAltitude: "¿Experiencia previa en altura?",
    altitudeDetails: "¿En qué lugar y cuál era la altitud?",
    // Medical
    medicalCondition: "Condición médica",
    treatment: "Tratamiento",
    recentSurgeries: "Operaciones recientes",
    medications: "Medicinas",
    allergies: "Alergias",
    dietaryRestrictions: "Restricción alimenticia",
    // Equipment
    hasEquipment: "¿Cuenta con equipo propio?",
    equipmentDetails: "¿Con cuáles?",
    // Buttons
    yes: "Sí",
    no: "No",
    optional: "Opcional",
  },
  en: {
    traveler: "Traveler",
    tapToExpand: "Tap to complete",
    personalData: "Personal Information",
    experience: "Previous Experience",
    medical: "Pre-existing Medical Conditions",
    equipment: "Hiking Equipment",
    fullName: "First and Last Name",
    birthDate: "Date of Birth",
    nationality: "Nationality",
    idPassport: "ID / Passport",
    languages: "Languages",
    phone: "Phone",
    email: "Email",
    hasHiking: "Previous experience hiking in nature?",
    hikingDetails: "Name of the hike and where you did it?",
    hasAltitude: "Previous experience at high altitudes?",
    altitudeDetails: "Where was it and what was the altitude?",
    medicalCondition: "Medical Condition",
    treatment: "Treatment",
    recentSurgeries: "Recent Surgeries",
    medications: "Medications",
    allergies: "Allergies",
    dietaryRestrictions: "Dietary Restrictions",
    hasEquipment: "Do you have your own hiking equipment?",
    equipmentDetails: "If yes, what kind?",
    yes: "Yes",
    no: "No",
    optional: "Optional",
  },
};

const inputClass =
  "w-full bg-primary border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-muted text-sm focus:outline-none focus:border-accent";

const sectionHeaderClass =
  "w-full flex items-center justify-between px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white/70 text-sm font-semibold cursor-pointer hover:bg-white/8 transition-colors";

function SectionAccordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="mb-3">
      <button type="button" className={sectionHeaderClass} onClick={() => setOpen((v) => !v)}>
        <span>{title}</span>
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {open && <div className="mt-3 space-y-4 pl-1 pr-1">{children}</div>}
    </div>
  );
}

function YesNoToggle({
  value,
  onChange,
  yesLabel,
  noLabel,
}: {
  value: boolean;
  onChange: (v: boolean) => void;
  yesLabel: string;
  noLabel: string;
}) {
  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => onChange(true)}
        className={`px-4 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
          value
            ? "bg-accent text-primary border-accent"
            : "bg-transparent text-muted border-white/10 hover:border-accent/40"
        }`}
      >
        {yesLabel}
      </button>
      <button
        type="button"
        onClick={() => onChange(false)}
        className={`px-4 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
          !value
            ? "bg-white/10 text-white border-white/20"
            : "bg-transparent text-muted border-white/10 hover:border-white/20"
        }`}
      >
        {noLabel}
      </button>
    </div>
  );
}

export default function TravelerForm({
  index,
  control,
  register,
  errors,
  locale,
}: TravelerFormProps) {
  const [expanded, setExpanded] = useState(index === 0);
  const t = L[locale];
  const fullName = useWatch({ control, name: `travelers.${index}.fullName` });

  const p = `travelers.${index}` as const;
  const travelerErrors = errors.travelers?.[index];

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      {/* Accordion header */}
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex items-center justify-between p-4 bg-support/30 hover:bg-support/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
            <User className="w-4 h-4 text-accent" />
          </div>
          <div className="text-left">
            <p className="text-white font-medium text-sm">
              {fullName?.trim() || `${t.traveler} ${index + 1}`}
            </p>
            {!expanded && !fullName?.trim() && (
              <p className="text-muted text-xs">{t.tapToExpand}</p>
            )}
          </div>
        </div>
        {expanded ? (
          <ChevronUp className="w-5 h-5 text-muted" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted" />
        )}
      </button>

      {expanded && (
        <div className="p-4 space-y-3">

          {/* ── Section 1: Personal data ── */}
          <SectionAccordion title={t.personalData} defaultOpen={true}>
            <div>
              <label className="block text-white text-xs mb-1">{t.fullName} *</label>
              <input
                {...register(`${p}.fullName`)}
                className={inputClass}
                placeholder={t.fullName}
              />
              {travelerErrors?.fullName && (
                <p className="text-red-400 text-xs mt-1">{travelerErrors.fullName.message}</p>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-white text-xs mb-1">{t.birthDate} *</label>
                <input
                  {...register(`${p}.birthDate`)}
                  type="date"
                  className={inputClass}
                />
                {travelerErrors?.birthDate && (
                  <p className="text-red-400 text-xs mt-1">{travelerErrors.birthDate.message}</p>
                )}
              </div>
              <div>
                <label className="block text-white text-xs mb-1">{t.nationality} *</label>
                <input
                  {...register(`${p}.nationality`)}
                  className={inputClass}
                  placeholder={t.nationality}
                />
                {travelerErrors?.nationality && (
                  <p className="text-red-400 text-xs mt-1">{travelerErrors.nationality.message}</p>
                )}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-white text-xs mb-1">{t.idPassport} *</label>
                <input
                  {...register(`${p}.idPassport`)}
                  className={inputClass}
                  placeholder="XX-123456"
                />
                {travelerErrors?.idPassport && (
                  <p className="text-red-400 text-xs mt-1">{travelerErrors.idPassport.message}</p>
                )}
              </div>
              <div>
                <label className="block text-white text-xs mb-1">
                  {t.languages} <span className="text-muted">({t.optional})</span>
                </label>
                <input
                  {...register(`${p}.languages`)}
                  className={inputClass}
                  placeholder={locale === "es" ? "Español, Inglés..." : "Spanish, English..."}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-white text-xs mb-1">
                  {t.phone} <span className="text-muted">({t.optional})</span>
                </label>
                <input
                  {...register(`${p}.phone`)}
                  className={inputClass}
                  placeholder="+XX XXX XXX XXX"
                />
              </div>
              <div>
                <label className="block text-white text-xs mb-1">
                  {t.email} <span className="text-muted">({t.optional})</span>
                </label>
                <input
                  {...register(`${p}.email`)}
                  type="email"
                  className={inputClass}
                  placeholder="email@example.com"
                />
              </div>
            </div>
          </SectionAccordion>

          {/* ── Section 2: Previous experience ── */}
          <SectionAccordion title={t.experience}>
            <div>
              <p className="text-white text-xs mb-2">{t.hasHiking}</p>
              <Controller
                name={`${p}.hasHikingExperience`}
                control={control}
                render={({ field }) => (
                  <YesNoToggle
                    value={field.value}
                    onChange={field.onChange}
                    yesLabel={t.yes}
                    noLabel={t.no}
                  />
                )}
              />
              <Controller
                name={`${p}.hasHikingExperience`}
                control={control}
                render={({ field }) =>
                  field.value ? (
                    <div className="mt-3">
                      <label className="block text-white text-xs mb-1">{t.hikingDetails}</label>
                      <textarea
                        {...register(`${p}.hikingDetails`)}
                        rows={2}
                        className={`${inputClass} resize-none`}
                        placeholder={t.hikingDetails}
                      />
                    </div>
                  ) : <></>
                }
              />
            </div>

            <div className="border-t border-white/5 pt-3">
              <p className="text-white text-xs mb-2">{t.hasAltitude}</p>
              <Controller
                name={`${p}.hasAltitudeExperience`}
                control={control}
                render={({ field }) => (
                  <YesNoToggle
                    value={field.value}
                    onChange={field.onChange}
                    yesLabel={t.yes}
                    noLabel={t.no}
                  />
                )}
              />
              <Controller
                name={`${p}.hasAltitudeExperience`}
                control={control}
                render={({ field }) =>
                  field.value ? (
                    <div className="mt-3">
                      <label className="block text-white text-xs mb-1">{t.altitudeDetails}</label>
                      <textarea
                        {...register(`${p}.altitudeDetails`)}
                        rows={2}
                        className={`${inputClass} resize-none`}
                        placeholder={t.altitudeDetails}
                      />
                    </div>
                  ) : <></>
                }
              />
            </div>
          </SectionAccordion>

          {/* ── Section 3: Medical ── */}
          <SectionAccordion title={t.medical}>
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-white text-xs mb-1">{t.medicalCondition}</label>
                <input {...register(`${p}.medicalCondition`)} className={inputClass} placeholder="—" />
              </div>
              <div>
                <label className="block text-white text-xs mb-1">{t.treatment}</label>
                <input {...register(`${p}.treatment`)} className={inputClass} placeholder="—" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-white text-xs mb-1">{t.recentSurgeries}</label>
                <input {...register(`${p}.recentSurgeries`)} className={inputClass} placeholder="—" />
              </div>
              <div>
                <label className="block text-white text-xs mb-1">{t.medications}</label>
                <input {...register(`${p}.medications`)} className={inputClass} placeholder="—" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-white text-xs mb-1">{t.allergies}</label>
                <input {...register(`${p}.allergies`)} className={inputClass} placeholder="—" />
              </div>
              <div>
                <label className="block text-white text-xs mb-1">{t.dietaryRestrictions}</label>
                <input {...register(`${p}.dietaryRestrictions`)} className={inputClass} placeholder="—" />
              </div>
            </div>
          </SectionAccordion>

          {/* ── Section 4: Equipment ── */}
          <SectionAccordion title={t.equipment}>
            <div>
              <p className="text-white text-xs mb-2">{t.hasEquipment}</p>
              <Controller
                name={`${p}.hasOwnEquipment`}
                control={control}
                render={({ field }) => (
                  <YesNoToggle
                    value={field.value}
                    onChange={field.onChange}
                    yesLabel={t.yes}
                    noLabel={t.no}
                  />
                )}
              />
              <Controller
                name={`${p}.hasOwnEquipment`}
                control={control}
                render={({ field }) =>
                  field.value ? (
                    <div className="mt-3">
                      <label className="block text-white text-xs mb-1">{t.equipmentDetails}</label>
                      <textarea
                        {...register(`${p}.equipmentDetails`)}
                        rows={2}
                        className={`${inputClass} resize-none`}
                        placeholder={locale === "es" ? "Bastones, mochila, botas..." : "Poles, backpack, boots..."}
                      />
                    </div>
                  ) : <></>
                }
              />
            </div>
          </SectionAccordion>

        </div>
      )}
    </div>
  );
}
