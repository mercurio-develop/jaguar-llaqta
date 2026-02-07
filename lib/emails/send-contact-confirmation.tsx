import { resend } from "@/lib/resend";
import EmailContactConfirmation from "@/emails/contacto/email-contact-confirmation";

export async function sendContactConfirmation(to: string, toName: string) {
  return resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
    to,
    subject: "Recibimos tu mensaje - Jaguar Llaqta",
    react: <EmailContactConfirmation toName={toName} />,
  });
}
