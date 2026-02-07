import { z } from "zod";

export const reservationSchema = z.object({
  name: z.string().min(2, "Nombre requerido"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(6, "Teléfono requerido"),
  packageId: z.string().min(1, "Selecciona un paquete"),
  date: z.string().min(1, "Selecciona una fecha"),
  participants: z.number().min(1).max(20),
  notes: z.string().optional(),
});

export type ReservationFormData = z.infer<typeof reservationSchema>;
