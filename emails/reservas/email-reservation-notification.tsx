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
import type { TravelerData } from "@/features/reservas/schemas";

interface EmailReservationNotificationProps {
  name: string;
  email: string;
  phone: string;
  packageName: string;
  date: string;
  participants: number;
  notes: string | null;
  travelers: TravelerData[];
}

function TravelerSection({ traveler, index }: { traveler: TravelerData; index: number }) {
  return (
    <Section style={{ marginBottom: 16, border: "1px solid #E5E7EB", borderRadius: 8, padding: 16 }}>
      <Text style={{ margin: "0 0 10px 0", fontSize: 13, fontWeight: "bold", color: "#C9A24D" }}>
        Viajero {index + 1}{traveler.fullName ? ` — ${traveler.fullName}` : ""}
      </Text>

      {/* Personal data */}
      <Text style={{ margin: "0 0 4px 0", fontSize: 11, fontWeight: "bold", color: "#374151", textTransform: "uppercase", letterSpacing: 0.5 }}>
        Datos personales
      </Text>
      <Row label="Nombre" value={traveler.fullName} />
      <Row label="Fecha de nacimiento" value={traveler.birthDate} />
      <Row label="Nacionalidad" value={traveler.nationality} />
      <Row label="DNI / Pasaporte" value={traveler.idPassport} />
      {traveler.languages && <Row label="Idiomas" value={traveler.languages} />}
      {traveler.phone && <Row label="Teléfono" value={traveler.phone} />}
      {traveler.email && <Row label="Correo" value={traveler.email} />}

      <Hr style={{ borderColor: "#F3F4F6", margin: "10px 0" }} />

      {/* Experience */}
      <Text style={{ margin: "0 0 4px 0", fontSize: 11, fontWeight: "bold", color: "#374151", textTransform: "uppercase", letterSpacing: 0.5 }}>
        Experiencia Previa
      </Text>
      <Row
        label="Experiencia en caminatas"
        value={traveler.hasHikingExperience ? `Sí${traveler.hikingDetails ? ` — ${traveler.hikingDetails}` : ""}` : "No"}
      />
      <Row
        label="Experiencia en altura"
        value={traveler.hasAltitudeExperience ? `Sí${traveler.altitudeDetails ? ` — ${traveler.altitudeDetails}` : ""}` : "No"}
      />

      <Hr style={{ borderColor: "#F3F4F6", margin: "10px 0" }} />

      {/* Medical */}
      <Text style={{ margin: "0 0 4px 0", fontSize: 11, fontWeight: "bold", color: "#374151", textTransform: "uppercase", letterSpacing: 0.5 }}>
        Pre-existencias Médicas
      </Text>
      <Row label="Condición médica" value={traveler.medicalCondition || "—"} />
      <Row label="Tratamiento" value={traveler.treatment || "—"} />
      <Row label="Operaciones recientes" value={traveler.recentSurgeries || "—"} />
      <Row label="Medicinas" value={traveler.medications || "—"} />
      <Row label="Alergias" value={traveler.allergies || "—"} />
      <Row label="Restricción alimenticia" value={traveler.dietaryRestrictions || "—"} />

      <Hr style={{ borderColor: "#F3F4F6", margin: "10px 0" }} />

      {/* Equipment */}
      <Text style={{ margin: "0 0 4px 0", fontSize: 11, fontWeight: "bold", color: "#374151", textTransform: "uppercase", letterSpacing: 0.5 }}>
        Equipo de Caminata
      </Text>
      <Row
        label="Equipo propio"
        value={traveler.hasOwnEquipment ? `Sí${traveler.equipmentDetails ? ` — ${traveler.equipmentDetails}` : ""}` : "No"}
      />
    </Section>
  );
}

function Row({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <Section style={{ margin: "0 0 3px 0" }}>
      <Text style={{ margin: 0, fontSize: 11, color: "#6B7280", display: "inline" }}>{label}: </Text>
      <Text style={{ margin: 0, fontSize: 11, color: "#111827", display: "inline", fontWeight: "500" }}>{value}</Text>
    </Section>
  );
}

export default function EmailReservationNotification({
  name,
  email,
  phone,
  packageName,
  date,
  participants,
  notes,
  travelers,
}: EmailReservationNotificationProps) {
  return (
    <Html>
      <Head />
      <Preview>Nueva reserva de {name} - {packageName}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto max-w-[560px] rounded-lg bg-white p-8">
            <Section>
              <Text className="text-center text-2xl font-bold" style={{ color: "#C9A24D" }}>
                Jaguar Llaqta — Nueva Reserva
              </Text>
              <Text className="text-lg font-semibold text-gray-800">
                Se ha recibido una nueva solicitud de reserva
              </Text>

              {/* Booking summary */}
              <Section className="rounded-lg p-4 mb-4" style={{ backgroundColor: "#FDF8EE" }}>
                <Text className="m-0 text-sm text-gray-500">Paquete</Text>
                <Text className="mt-1 font-semibold text-gray-800">{packageName}</Text>
                <Text className="m-0 text-sm text-gray-500">Fecha</Text>
                <Text className="mt-1 font-semibold text-gray-800">{date}</Text>
                <Text className="m-0 text-sm text-gray-500">Participantes</Text>
                <Text className="mt-1 font-semibold text-gray-800">{participants}</Text>
              </Section>

              {/* Contact data */}
              <Section className="mt-4 rounded-lg bg-gray-50 p-4 mb-4">
                <Text className="m-0 text-sm font-semibold text-gray-700">Datos del organizador</Text>
                <Text className="m-0 mt-2 text-sm text-gray-500">Nombre</Text>
                <Text className="mt-1 text-gray-800">{name}</Text>
                <Text className="m-0 text-sm text-gray-500">Email</Text>
                <Text className="mt-1 text-gray-800">{email}</Text>
                <Text className="m-0 text-sm text-gray-500">Teléfono</Text>
                <Text className="mt-1 text-gray-800">{phone}</Text>
                {notes && (
                  <>
                    <Text className="m-0 text-sm text-gray-500">Notas / Requerimientos especiales</Text>
                    <Text className="mt-1 text-gray-800">{notes}</Text>
                  </>
                )}
              </Section>

              {/* Traveler profiles */}
              {travelers && travelers.length > 0 && (
                <>
                  <Text className="text-base font-semibold text-gray-800 mt-6 mb-3">
                    Perfiles de Viajeros ({travelers.length})
                  </Text>
                  {travelers.map((traveler, i) => (
                    <TravelerSection key={i} traveler={traveler} index={i} />
                  ))}
                </>
              )}

              <Text className="mt-4 text-sm text-gray-400">
                Por favor, revisa y confirma esta reserva dentro de las próximas 24 horas.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
