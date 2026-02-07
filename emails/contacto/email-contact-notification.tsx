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
  return (
    <Html>
      <Head />
      <Preview>Nuevo mensaje de contacto de {name}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto max-w-[480px] rounded-lg bg-white p-8">
            <Section>
              <Text
                className="text-center text-2xl font-bold"
                style={{ color: "#C9A24D" }}
              >
                Jaguar Llaqta - Nuevo Contacto
              </Text>
              <Text className="text-lg font-semibold text-gray-800">
                Nuevo mensaje de contacto
              </Text>
              <Section className="rounded-lg bg-gray-50 p-4">
                <Text className="m-0 text-sm text-gray-500">Nombre</Text>
                <Text className="mt-1 text-gray-800">{name}</Text>
                <Text className="m-0 text-sm text-gray-500">Email</Text>
                <Text className="mt-1 text-gray-800">{email}</Text>
                {subject && (
                  <>
                    <Text className="m-0 text-sm text-gray-500">Asunto</Text>
                    <Text className="mt-1 text-gray-800">{subject}</Text>
                  </>
                )}
                <Text className="m-0 text-sm text-gray-500">Mensaje</Text>
                <Text className="mt-1 text-gray-800">{message}</Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
