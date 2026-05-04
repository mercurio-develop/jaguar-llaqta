import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Tailwind,
  Preview,
  Img,
} from "@react-email/components";

interface EmailContactConfirmationProps {
  toName: string;
}

export default function EmailContactConfirmation({
  toName,
}: EmailContactConfirmationProps) {

const baseUrl = process.env.NODE_ENV === "production"
  ? "https://jaguarllaqta.com"
  : "";
const logoUrl = process.env.NODE_ENV === "production"
  ? `${baseUrl}/logo/logo-2.png`
  : `/static/logo/logo-2.png`;

  return (
    <Html>
      <Head />
      <Preview>Recibimos tu mensaje - Jaguar Llaqta</Preview>
      <Tailwind>
        <Body className="bg-[#0E0E0E] font-sans">
          <Container className="mx-auto max-w-[480px] rounded-lg bg-[#121212] border border-[#2A2A2A] p-8">
            <Section>
              <Img src={logoUrl} alt="Jaguar Llaqta Logo" width="64" height="64" className="mx-auto my-0 object-contain" />
              <Text className="text-lg text-white">
                Hola {toName},
              </Text>
              <Text className="text-[#9CA3AF]">
                Gracias por contactarnos, hemos recibido tu mensaje.
              </Text>
              <Text className="text-[#9CA3AF]">
                Nuestro equipo revisará tu consulta y se pondrá en contacto contigo lo antes posible.
              </Text>
              <Text className="text-sm text-[#9CA3AF] opacity-80">
                — El equipo de Jaguar Llaqta
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
