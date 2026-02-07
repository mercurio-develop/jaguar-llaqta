"use server";

import { prisma } from "@/lib/db";
import { sendContactConfirmation } from "@/lib/emails/send-contact-confirmation";
import { sendContactNotification } from "@/lib/emails/send-contact-notification";
import {
  ActionState,
  fromErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";
import { contactSchema } from "@/features/contacto/schemas";

export const submitContact = async (
  data: unknown,
): Promise<ActionState> => {
  try {
    const parsed = contactSchema.parse(data);

    await prisma.contact.create({
      data: {
        name: parsed.name,
        email: parsed.email,
        subject: parsed.subject || null,
        message: parsed.message,
      },
    });

    try {
      await Promise.all([
        sendContactNotification({
          name: parsed.name,
          email: parsed.email,
          subject: parsed.subject || null,
          message: parsed.message,
        }),
        sendContactConfirmation(parsed.email, parsed.name),
      ]);
    } catch (emailError) {
      console.error("Failed to send contact emails:", emailError);
    }

    return toActionState("SUCCESS", "Mensaje enviado correctamente");
  } catch (error) {
    return fromErrorToActionState(error);
  }
};
