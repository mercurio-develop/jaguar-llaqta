"use server";

import { prisma } from "@/lib/db";
import { sendReservationConfirmation } from "@/lib/emails/send-reservation-confirmation";
import { sendReservationNotification } from "@/lib/emails/send-reservation-notification";
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
      await Promise.all([
        sendReservationConfirmation(parsed.email, {
          toName: parsed.name,
          packageName: parsed.packageId,
          date: parsed.date,
          participants: parsed.participants,
        }),
        sendReservationNotification({
          name: parsed.name,
          email: parsed.email,
          phone: parsed.phone,
          packageName: parsed.packageId,
          date: parsed.date,
          participants: parsed.participants,
          notes: parsed.notes || null,
        }),
      ]);
    } catch (emailError) {
      console.error("Failed to send reservation emails:", emailError);
    }

    return toActionState("SUCCESS", "Reserva creada correctamente");
  } catch (error) {
    return fromErrorToActionState(error);
  }
};
