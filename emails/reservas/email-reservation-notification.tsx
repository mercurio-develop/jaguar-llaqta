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

interface EmailReservationNotificationProps {
  name: string;
  email: string;
  phone: string;
  packageName: string;
  date: string;
  participants: number;
  notes: string | null;
}

export default function EmailReservationNotification({
  name,
  email,
  phone,
  packageName,
  date,
  participants,
  notes,
}: EmailReservationNotificationProps) {
  return (
    <Html>
      <Head />
      <Preview>Nueva reserva de {name} - {packageName}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto max-w-[480px] rounded-lg bg-white p-8">
            <Section>
              <Text
                className="text-center text-2xl font-bold"
                style={{ color: "#C9A24D" }}
              >
                Jaguar Llaqta - Nueva Reserva
              </Text>
              <Text className="text-lg font-semibold text-gray-800">
                Se ha recibido una nueva solicitud de reserva
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
              <Section className="mt-4 rounded-lg bg-gray-50 p-4">
                <Text className="m-0 text-sm font-semibold text-gray-700">
                  Datos del cliente
                </Text>
                <Text className="m-0 mt-2 text-sm text-gray-500">Nombre</Text>
                <Text className="mt-1 text-gray-800">{name}</Text>
                <Text className="m-0 text-sm text-gray-500">Email</Text>
                <Text className="mt-1 text-gray-800">{email}</Text>
                <Text className="m-0 text-sm text-gray-500">Teléfono</Text>
                <Text className="mt-1 text-gray-800">{phone}</Text>
                {notes && (
                  <>
                    <Text className="m-0 text-sm text-gray-500">
                      Notas / Requerimientos especiales
                    </Text>
                    <Text className="mt-1 text-gray-800">{notes}</Text>
                  </>
                )}
              </Section>
              <Text className="mt-4 text-sm text-gray-400">
                Por favor, revisa y confirma esta reserva dentro de las próximas
                24 horas.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}