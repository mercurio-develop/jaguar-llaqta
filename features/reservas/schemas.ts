import { z } from "zod";

export const travelerSchema = z.object({
  // Personal data
  fullName: z.string().min(2, "Nombre requerido"),
  birthDate: z.string().min(1, "Fecha requerida"),
  nationality: z.string().min(1, "Nacionalidad requerida"),
  idPassport: z.string().min(1, "DNI/Pasaporte requerido"),
  languages: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().optional(),
  // Previous experience
  hasHikingExperience: z.boolean(),
  hikingDetails: z.string().optional(),
  hasAltitudeExperience: z.boolean(),
  altitudeDetails: z.string().optional(),
  // Medical
  medicalCondition: z.string().optional(),
  treatment: z.string().optional(),
  recentSurgeries: z.string().optional(),
  medications: z.string().optional(),
  allergies: z.string().optional(),
  dietaryRestrictions: z.string().optional(),
  // Equipment
  hasOwnEquipment: z.boolean(),
  equipmentDetails: z.string().optional(),
});

export type TravelerData = z.infer<typeof travelerSchema>;

export const reservationSchema = z.object({
  name: z.string().min(2, "Nombre requerido"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(6, "Teléfono requerido"),
  packageId: z.string().min(1, "Selecciona un paquete"),
  date: z.string().min(1, "Selecciona una fecha"),
  participants: z.number().min(1).max(20),
  notes: z.string().optional(),
  travelers: z.array(travelerSchema),
});

export type ReservationFormData = z.infer<typeof reservationSchema>;
