"use server";

import { createElement } from "react";
import { sendReservationConfirmation } from "@/lib/emails/send-reservation-confirmation";
import { sendReservationNotification } from "@/lib/emails/send-reservation-notification";
import { sendReservationAlert } from "@/lib/emails/send-reservation-alert";
import {
  ActionState,
  fromErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";
import { reservationSchema, type TravelerData } from "@/features/reservas/schemas";

async function generatePDF(
  travelers: TravelerData[],
  lang: "es" | "en",
  packageName: string,
  date: string,
): Promise<Buffer> {
  const [{ renderToBuffer }, { default: TravelerPDF }] = await Promise.all([
    import("@react-pdf/renderer"),
    import("@/features/reservas/pdf/TravelerPDF"),
  ]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return renderToBuffer(createElement(TravelerPDF, { travelers, lang, packageName, date }) as any);
}

export const submitReservation = async (
  data: unknown,
): Promise<ActionState> => {
  try {
    const parsed = reservationSchema.parse(data);

    try {
      const sanitize = (s: string) =>
        s.replace(/[^a-zA-Z0-9À-ÿ]/g, "_").replace(/_+/g, "_").toUpperCase();

      const pdfFilename = `PRESERVA_${sanitize(parsed.packageId)}_${sanitize(parsed.name)}_${sanitize(parsed.date)}.pdf`;

      let pdfAttachments: { filename: string; content: Buffer }[] = [];
      try {
        const pdf = await generatePDF(parsed.travelers, "es", parsed.packageId, parsed.date);
        pdfAttachments = [{ filename: pdfFilename, content: pdf }];
      } catch (pdfError) {
        console.error("Failed to generate PDF, sending emails without attachment:", pdfError);
      }

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
          travelers: parsed.travelers,
          attachments: pdfAttachments,
        }),
        sendReservationAlert({
          name: parsed.name,
          packageName: parsed.packageId,
          date: parsed.date,
          participants: parsed.participants,
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
