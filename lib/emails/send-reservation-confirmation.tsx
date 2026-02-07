import { resend } from "@/lib/resend";
import EmailReservationConfirmation from "@/emails/reservas/email-reservation-confirmation";

export async function sendReservationConfirmation(
  to: string,
  data: {
    toName: string;
    packageName: string;
    date: string;
    participants: number;
  }
) {
  return resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
    to,
    subject: "Confirmación de reserva - Jaguar Llaqta",
    react: (
      <EmailReservationConfirmation
        toName={data.toName}
        packageName={data.packageName}
        date={data.date}
        participants={data.participants}
      />
    ),
  });
}
