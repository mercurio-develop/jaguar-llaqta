"use server";

import { prisma } from "@/lib/db";
import { sendReservationConfirmation } from "@/lib/emails/send-reservation-confirmation";
import {
  ActionState,
  fromErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";
import { reservationSchema } from "@/features/reservas/schemas";

export const submitReservation = async (
  data: unknown,
): Promise<ActionState> => {
  try {
    const parsed = reservationSchema.parse(data);

    await prisma.reservation.create({
      data: {
        name: parsed.name,
        email: parsed.email,
        phone: parsed.phone,
        package: parsed.packageId,
        date: new Date(parsed.date),
        participants: parsed.participants,
        notes: parsed.notes || null,
        status: "pending",
      },
    });

    try {
      await sendReservationConfirmation(parsed.email, {
        toName: parsed.name,
        packageName: parsed.packageId,
        date: parsed.date,
        participants: parsed.participants,
      });
    } catch (emailError) {
      console.error("Failed to send reservation email:", emailError);
    }

    return toActionState("SUCCESS", "Reserva creada correctamente");
  } catch (error) {
    return fromErrorToActionState(error);
  }
};
