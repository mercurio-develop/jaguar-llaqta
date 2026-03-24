import { render } from "@react-email/components";
import { resend } from "@/lib/resend";
import EmailReservationNotification from "@/emails/reservas/email-reservation-notification";
import type { TravelerData } from "@/features/reservas/schemas";

interface Attachment {
  filename: string;
  content: Buffer;
}

export async function sendReservationNotification(data: {
  name: string;
  email: string;
  phone: string;
  packageName: string;
  date: string;
  participants: number;
  notes: string | null;
  travelers: TravelerData[];
  attachments?: Attachment[];
}) {
  const adminEmail = process.env.ADMIN_EMAIL || "orqodev@gmail.com";

  const html = await render(
    <EmailReservationNotification
      name={data.name}
      email={data.email}
      phone={data.phone}
      packageName={data.packageName}
      date={data.date}
      participants={data.participants}
      notes={data.notes}
      travelers={data.travelers}
    />
  );

  return resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
    to: adminEmail,
    subject: `Nueva Pre reserva de ${data.name} - ${data.packageName}`,
    html,
    attachments: data.attachments?.map((a) => ({
      filename: a.filename,
      content: a.content,
    })),
  });
}
