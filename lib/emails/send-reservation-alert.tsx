import { render } from "@react-email/components";
import { resend } from "@/lib/resend";
import EmailReservationAlert from "@/emails/reservas/email-reservation-alert";

export async function sendReservationAlert(data: {
  name: string;
  packageName: string;
  date: string;
  participants: number;
}) {
  const recipients = [
    process.env.ALERT_EMAIL_1,
    process.env.ALERT_EMAIL_2,
  ].filter(Boolean) as string[];

  if (recipients.length === 0) return;

  const html = await render(
    <EmailReservationAlert
      name={data.name}
      packageName={data.packageName}
      date={data.date}
      participants={data.participants}
    />
  );

  return Promise.all(
    recipients.map((to) =>
      resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
        to,
        subject: `Nueva Pre Reserva de ${data.name} — revisar jaguarllaqta@gmail.com`,
        html,
      })
    )
  );
}