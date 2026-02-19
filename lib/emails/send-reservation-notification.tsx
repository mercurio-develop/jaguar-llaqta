import { resend } from "@/lib/resend";
import EmailReservationNotification from "@/emails/reservas/email-reservation-notification";

export async function sendReservationNotification(data: {
  name: string;
  email: string;
  phone: string;
  packageName: string;
  date: string;
  participants: number;
  notes: string | null;
}) {
  const adminEmail = process.env.ADMIN_EMAIL || "orqodev@gmail.com";

  return resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
    to: adminEmail,
    subject: `Nueva reserva de ${data.name} - ${data.packageName}`,
    react: (
      <EmailReservationNotification
        name={data.name}
        email={data.email}
        phone={data.phone}
        packageName={data.packageName}
        date={data.date}
        participants={data.participants}
        notes={data.notes}
      />
    ),
  });
}
