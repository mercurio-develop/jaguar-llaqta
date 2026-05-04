import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Tailwind,
  Preview,
  Hr,
  Img,
} from "@react-email/components";

interface EmailReservationAlertProps {
  name: string;
  packageName: string;
  date: string;
  participants: number;
}

export default function EmailReservationAlert({
  name,
  packageName,
  date,
  participants,
}: EmailReservationAlertProps) {

const baseUrl = process.env.NODE_ENV === "production"
  ? "https://jaguarllaqta.com"
  : "";
const logoUrl = process.env.NODE_ENV === "production"
  ? `${baseUrl}/logo/logo-2.png`
  : `/static/logo/logo-2.png`;

  return (
    <Html>
      <Head />
      <Preview>Nueva Pre Reserva de {name} — revisar jaguarllaqta@gmail.com</Preview>
      <Tailwind>
        <Body className="bg-[#0E0E0E] font-sans">
          <Container className="mx-auto max-w-[480px] rounded-lg bg-[#121212] border border-[#2A2A2A] p-8">
            <Section>
              <Img src={logoUrl} alt="Jaguar Llaqta Logo" width="64" height="64" className="mx-auto my-0 object-contain" />
              <Text className="text-lg font-semibold text-white text-center">
                Nueva Pre Reserva Recibida
              </Text>

              <Hr style={{ borderColor: "#E5E7EB", margin: "16px 0" }} />

              <Section className="rounded-lg p-4" style={{ backgroundColor: "#FDF8EE" }}>
                <Text className="m-0 text-sm text-[#9CA3AF]">Cliente</Text>
                <Text className="mt-1 font-semibold text-white">{name}</Text>
                <Text className="m-0 text-sm text-[#9CA3AF] mt-2">Paquete</Text>
                <Text className="mt-1 font-semibold text-white">{packageName}</Text>
                <Text className="m-0 text-sm text-[#9CA3AF] mt-2">Fecha</Text>
                <Text className="mt-1 font-semibold text-white">{date}</Text>
                <Text className="m-0 text-sm text-[#9CA3AF] mt-2">Participantes</Text>
                <Text className="mt-1 font-semibold text-white">{participants}</Text>
              </Section>

              <Hr style={{ borderColor: "#E5E7EB", margin: "16px 0" }} />

              <Text className="text-sm text-gray-200 text-center">
                Por favor, revisa los detalles completos en:
              </Text>
              <Text className="text-base font-bold text-center" style={{ color: "#C9A24D" }}>
                jaguarllaqta@gmail.com
              </Text>
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