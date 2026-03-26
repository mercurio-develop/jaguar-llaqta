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
  return (
    <Html>
      <Head />
      <Preview>Nueva Pre Reserva de {name} — revisar jaguarllaqta@gmail.com</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto max-w-[480px] rounded-lg bg-white p-8">
            <Section>
              <Text className="text-center text-2xl font-bold" style={{ color: "#C9A24D" }}>
                Jaguar Llaqta
              </Text>
              <Text className="text-lg font-semibold text-gray-800 text-center">
                Nueva Pre Reserva Recibida
              </Text>

              <Hr style={{ borderColor: "#E5E7EB", margin: "16px 0" }} />

              <Section className="rounded-lg p-4" style={{ backgroundColor: "#FDF8EE" }}>
                <Text className="m-0 text-sm text-gray-500">Cliente</Text>
                <Text className="mt-1 font-semibold text-gray-800">{name}</Text>
                <Text className="m-0 text-sm text-gray-500 mt-2">Paquete</Text>
                <Text className="mt-1 font-semibold text-gray-800">{packageName}</Text>
                <Text className="m-0 text-sm text-gray-500 mt-2">Fecha</Text>
                <Text className="mt-1 font-semibold text-gray-800">{date}</Text>
                <Text className="m-0 text-sm text-gray-500 mt-2">Participantes</Text>
                <Text className="mt-1 font-semibold text-gray-800">{participants}</Text>
              </Section>

              <Hr style={{ borderColor: "#E5E7EB", margin: "16px 0" }} />

              <Text className="text-sm text-gray-700 text-center">
                Por favor, revisa los detalles completos en:
              </Text>
              <Text className="text-base font-bold text-center" style={{ color: "#C9A24D" }}>
                jaguarllaqta@gmail.com
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}