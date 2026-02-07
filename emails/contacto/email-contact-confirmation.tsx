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

interface EmailContactConfirmationProps {
  toName: string;
}

export default function EmailContactConfirmation({
  toName,
}: EmailContactConfirmationProps) {
  return (
    <Html>
      <Head />
      <Preview>Recibimos tu mensaje - Jaguar Llaqta</Preview>
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
                Gracias por contactarnos. Hemos recibido tu mensaje y te
                responderemos a la brevedad posible.
              </Text>
              <Text className="text-gray-600">
                Nuestro equipo revisará tu consulta y se pondrá en contacto
                contigo dentro de las próximas 24-48 horas.
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
