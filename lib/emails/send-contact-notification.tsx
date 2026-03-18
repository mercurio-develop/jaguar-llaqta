import { render } from "@react-email/components";
import { resend } from "@/lib/resend";
import EmailContactNotification from "@/emails/contacto/email-contact-notification";

export async function sendContactNotification(data: {
  name: string;
  email: string;
  subject: string | null;
  message: string;
}) {
  const adminEmail = process.env.ADMIN_EMAIL || "orqodev@gmail.com";

  const html = await render(
    <EmailContactNotification
      name={data.name}
      email={data.email}
      subject={data.subject}
      message={data.message}
    />
  );

  return resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
    to: adminEmail,
    subject: `Nuevo contacto de ${data.name}`,
    html,
  });
}
