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

interface EmailReservationConfirmationProps {
  toName: string;
  packageName: string;
  date: string;
  participants: number;
}

export default function EmailReservationConfirmation({
  toName,
  packageName,
  date,
  participants,
}: EmailReservationConfirmationProps) {

const baseUrl = process.env.NODE_ENV === "production"
  ? "https://jaguarllaqta.com"
  : "";
const logoUrl = process.env.NODE_ENV === "production"
  ? `${baseUrl}/logo/logo-2.png`
  : `/static/logo/logo-2.png`;

  return (
    <Html>
      <Head />
      <Preview>Confirmación de reserva - Jaguar Llaqta</Preview>
      <Tailwind>
        <Body className="bg-[#0E0E0E] font-sans">
          <Container className="mx-auto max-w-[480px] rounded-lg bg-[#121212] border border-[#2A2A2A] p-8">
            <Section>
              <Img src={logoUrl} alt="Jaguar Llaqta Logo" width="64" height="64" className="mx-auto my-0 object-contain" />
              <Text className="text-lg text-white">
                Hola {toName},
              </Text>
              <Text className="text-[#9CA3AF]">
                Hemos recibido tu solicitud de reserva. A continuación los
                detalles:
              </Text>
              <Section
                className="rounded-lg p-4"
                style={{ backgroundColor: "#FDF8EE" }}
              >
                <Text className="m-0 text-sm text-[#9CA3AF]">Paquete</Text>
                <Text className="mt-1 font-semibold text-white">
                  {packageName}
                </Text>
                <Text className="m-0 text-sm text-[#9CA3AF]">Fecha</Text>
                <Text className="mt-1 font-semibold text-white">
                  {date}
                </Text>
                <Text className="m-0 text-sm text-[#9CA3AF]">
                  Participantes
                </Text>
                <Text className="mt-1 font-semibold text-white">
                  {participants}
                </Text>
              </Section>
              <Text className="text-[#9CA3AF]">
                Nuestro equipo confirmará tu reserva y se pondrá en contacto contigo lo antes posible. Te contactaremos para coordinar los detalles
                finales.
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
