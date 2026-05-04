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

interface EmailContactNotificationProps {
  name: string;
  email: string;
  subject: string | null;
  message: string;
}

export default function EmailContactNotification({
  name,
  email,
  subject,
  message,
}: EmailContactNotificationProps) {

const baseUrl = process.env.NODE_ENV === "production"
  ? "https://jaguarllaqta.com"
  : "";
const logoUrl = process.env.NODE_ENV === "production"
  ? `${baseUrl}/logo/logo-2.png`
  : `/static/logo/logo-2.png`;

  return (
    <Html>
      <Head />
      <Preview>Nuevo mensaje de contacto de {name}</Preview>
      <Tailwind>
        <Body className="bg-[#0E0E0E] font-sans">
          <Container className="mx-auto max-w-[480px] rounded-lg bg-[#121212] border border-[#2A2A2A] p-8">
            <Section>
              <Img src={logoUrl} alt="Jaguar Llaqta Logo" width="64" height="64" className="mx-auto my-0 object-contain" />
              <Text className="text-center text-xl font-bold mt-4" style={{ color: "#C9A24D" }}>Nuevo Contacto</Text>
              <Text className="text-lg font-semibold text-white">
                Nuevo mensaje de contacto
              </Text>
              <Section className="rounded-lg bg-[#2A2A2A] p-4">
                <Text className="m-0 text-sm text-[#9CA3AF]">Nombre</Text>
                <Text className="mt-1 text-white">{name}</Text>
                <Text className="m-0 text-sm text-[#9CA3AF]">Email</Text>
                <Text className="mt-1 text-white">{email}</Text>
                {subject && (
                  <>
                    <Text className="m-0 text-sm text-[#9CA3AF]">Asunto</Text>
                    <Text className="mt-1 text-white">{subject}</Text>
                  </>
                )}
                <Text className="m-0 text-sm text-[#9CA3AF]">Mensaje</Text>
                <Text className="mt-1 text-white">{message}</Text>
              </Section>
              <Text className="mt-4 text-sm text-[#9CA3AF] opacity-80">
                — El equipo de Jaguar Llaqta
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
