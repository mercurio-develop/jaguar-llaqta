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

const baseUrl = process.env.NODE_ENV === "production"
  ? "https://jaguarllaqta.com"
  : "";
const logoUrl = process.env.NODE_ENV === "production"
  ? `${baseUrl}/logo/logo-2.png`
  : `/static/logo/logo-2.png`;

  return (
    <Html>
      <Head />
      <Preview>Nueva Pre reserva de {name} - {packageName}</Preview>
      <Tailwind>
        <Body className="bg-[#0E0E0E] font-sans">
          <Container className="mx-auto max-w-[560px] rounded-lg bg-[#121212] border border-[#2A2A2A] p-8">
            <Section>
              <Img src={logoUrl} alt="Jaguar Llaqta Logo" width="64" height="64" className="mx-auto my-0 object-contain" />
              <Text className="text-center text-xl font-bold mt-4" style={{ color: "#C9A24D" }}>Nueva Pre Reserva</Text>
              <Text className="text-lg font-semibold text-white">
                Se ha recibido una nueva solicitud de reserva
              </Text>

              {/* Booking summary */}
              <Section className="rounded-lg p-4 mb-4" style={{ backgroundColor: "#FDF8EE" }}>
                <Text className="m-0 text-sm text-[#9CA3AF]">Paquete</Text>
                <Text className="mt-1 font-semibold text-white">{packageName}</Text>
                <Text className="m-0 text-sm text-[#9CA3AF]">Fecha</Text>
                <Text className="mt-1 font-semibold text-white">{date}</Text>
                <Text className="m-0 text-sm text-[#9CA3AF]">Participantes</Text>
                <Text className="mt-1 font-semibold text-white">{participants}</Text>
              </Section>

              {/* Contact data */}
              <Section className="mt-4 rounded-lg bg-[#2A2A2A] p-4 mb-4">
                <Text className="m-0 text-sm font-semibold text-gray-200">Datos del organizador</Text>
                <Text className="m-0 mt-2 text-sm text-[#9CA3AF]">Nombre</Text>
                <Text className="mt-1 text-white">{name}</Text>
                <Text className="m-0 text-sm text-[#9CA3AF]">Email</Text>
                <Text className="mt-1 text-white">{email}</Text>
                <Text className="m-0 text-sm text-[#9CA3AF]">Teléfono</Text>
                <Text className="mt-1 text-white">{phone}</Text>
                {notes && (
                  <>
                    <Text className="m-0 text-sm text-[#9CA3AF]">Notas / Requerimientos especiales</Text>
                    <Text className="mt-1 text-white">{notes}</Text>
                  </>
                )}
              </Section>

              {/* Traveler profiles */}
              {travelers && travelers.length > 0 && (
                <>
                  <Text className="text-base font-semibold text-white mt-6 mb-3">
                    Perfiles de Viajeros ({travelers.length})
                  </Text>
                  {travelers.map((traveler, i) => (
                    <TravelerSection key={i} traveler={traveler} index={i} />
                  ))}
                </>
              )}

              <Text className="mt-4 text-sm text-[#9CA3AF] opacity-80">
                Por favor, revisa y responde a esta solicitud lo antes posible.
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
