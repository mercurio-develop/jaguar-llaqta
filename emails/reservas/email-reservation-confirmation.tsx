import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Tailwind,
  Preview,
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
  return (
    <Html>
      <Head />
      <Preview>Confirmación de reserva - Jaguar Llaqta</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto max-w-[480px] rounded-lg bg-white p-8">
            <Section>
              <Text
                className="text-center text-2xl font-bold"
                style={{ color: "#C9A24D" }}
              >
                Jaguar Llaqta
              </Text>
              <Text className="text-lg text-gray-800">
                Hola {toName},
              </Text>
              <Text className="text-gray-600">
                Hemos recibido tu solicitud de reserva. A continuación los
                detalles:
              </Text>
              <Section
                className="rounded-lg p-4"
                style={{ backgroundColor: "#FDF8EE" }}
              >
                <Text className="m-0 text-sm text-gray-500">Paquete</Text>
                <Text className="mt-1 font-semibold text-gray-800">
                  {packageName}
                </Text>
                <Text className="m-0 text-sm text-gray-500">Fecha</Text>
                <Text className="mt-1 font-semibold text-gray-800">
                  {date}
                </Text>
                <Text className="m-0 text-sm text-gray-500">
                  Participantes
                </Text>
                <Text className="mt-1 font-semibold text-gray-800">
                  {participants}
                </Text>
              </Section>
              <Text className="text-gray-600">
                Nuestro equipo confirmará tu reserva dentro de las próximas
                24 horas. Te contactaremos para coordinar los detalles
                finales.
              </Text>
              <Text className="text-sm text-gray-400">
                — El equipo de Jaguar Llaqta
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
