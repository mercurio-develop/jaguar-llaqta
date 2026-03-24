import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import type { TravelerData } from "@/features/reservas/schemas";

const GOLD = "#C9A24D";
const WHITE = "#FFFFFF";
const DARK = "#2D2D2D";
const MUTED = "#6B6B6B";
const LINE = "#CCCCCC";
const BG_GOLD = "#FDF8EE";

const styles = StyleSheet.create({
  page: {
    backgroundColor: WHITE,
    paddingTop: 40,
    paddingBottom: 60,
    paddingHorizontal: 44,
    fontFamily: "Helvetica",
    fontSize: 9,
  },
  // Header
  headerWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },
  headerLeft: { flex: 1 },
  headerCenter: { flex: 1, alignItems: "center" },
  headerRight: { flex: 1, alignItems: "flex-end" },
  tourLabel: { fontSize: 7.5, color: MUTED, marginBottom: 2 },
  tourValue: { fontSize: 9, fontFamily: "Helvetica-Bold", color: DARK },
  title: { fontSize: 22, fontFamily: "Helvetica-Bold", letterSpacing: 3, color: DARK },
  badge: {
    backgroundColor: GOLD,
    borderRadius: 3,
    paddingVertical: 3,
    paddingHorizontal: 14,
    marginTop: 4,
  },
  badgeText: { fontSize: 9, fontFamily: "Helvetica-Bold", color: WHITE, letterSpacing: 2 },
  formLabel: { fontSize: 9, fontFamily: "Helvetica-Bold", color: MUTED, letterSpacing: 1 },
  divider: { borderBottomWidth: 1.5, borderBottomColor: GOLD, marginBottom: 14 },
  // Traveler page separator
  travelerLabel: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: MUTED,
    marginBottom: 10,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  // Section header
  sectionHeader: {
    backgroundColor: GOLD,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 14,
  },
  sectionTitle: { fontSize: 9, fontFamily: "Helvetica-Bold", color: WHITE, letterSpacing: 0.5 },
  // Rows
  row: { flexDirection: "row", gap: 12, marginBottom: 8 },
  field: { flex: 1 },
  fieldFull: { marginBottom: 8 },
  label: { fontSize: 7.5, color: MUTED, marginBottom: 2 },
  value: {
    fontSize: 9,
    color: DARK,
    borderBottomWidth: 1,
    borderBottomColor: LINE,
    paddingBottom: 2,
    minHeight: 13,
  },
  // Yes/No row
  yesNoWrap: { flexDirection: "row", alignItems: "center", marginBottom: 6 },
  yesNoQuestion: { fontSize: 9, color: DARK, flex: 1 },
  yesNoBox: {
    width: 11,
    height: 11,
    borderWidth: 1,
    borderColor: MUTED,
    marginLeft: 6,
    marginRight: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  yesNoBoxFilled: { backgroundColor: GOLD, borderColor: GOLD },
  yesNoBoxLabel: { fontSize: 7.5, color: MUTED },
  yesNoTick: { fontSize: 8, color: WHITE, fontFamily: "Helvetica-Bold" },
  detailLabel: { fontSize: 7.5, color: MUTED, marginTop: 3, marginBottom: 2 },
  detailValue: {
    fontSize: 9,
    color: DARK,
    borderBottomWidth: 1,
    borderBottomColor: LINE,
    paddingBottom: 2,
    minHeight: 13,
    marginBottom: 8,
  },
  // Footer
  footer: {
    position: "absolute",
    bottom: 24,
    left: 44,
    right: 44,
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
    paddingTop: 7,
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
  },
  footerText: { fontSize: 7.5, color: MUTED },
});

// ─── Labels ────────────────────────────────────────────────────────────────────
const L = {
  es: {
    traveler: "Viajero",
    personalData: "Datos Personales",
    fullName: "Nombre y apellidos",
    birthDate: "Fecha de nacimiento",
    nationality: "Nacionalidad",
    idPassport: "DNI / Pasaporte",
    languages: "Idiomas",
    phone: "Teléfono",
    email: "Correo",
    experience: "Experiencia Previa",
    hasHiking: "¿Tiene experiencia previa en caminatas en la naturaleza?",
    hikingDetails: "¿Cómo se llamaba la caminata y dónde la realizó?",
    hasAltitude: "¿Tiene experiencia previa en altura?",
    altitudeDetails: "¿En qué lugar fue y cuál era su altitud?",
    medical: "Pre-existencias Médicas",
    medicalCondition: "Condición médica",
    treatment: "Tratamiento",
    recentSurgeries: "Operaciones recientes",
    medications: "Medicinas",
    allergies: "Alergias",
    dietaryRestrictions: "Restricción alimenticia",
    equipment: "Equipo de Caminata",
    hasEquipment: "¿Cuenta con equipo propio?",
    equipmentDetails: "¿Con cuáles?",
    yes: "SÍ",
    no: "NO",
  },
  en: {
    traveler: "Traveler",
    personalData: "Personal Information",
    fullName: "First and Last Name",
    birthDate: "Date of Birth",
    nationality: "Nationality",
    idPassport: "ID / Passport",
    languages: "Languages",
    phone: "Phone",
    email: "Email",
    experience: "Previous Experience",
    hasHiking: "Do you have previous experience hiking in nature?",
    hikingDetails: "What was the name of the hike and where did you do it?",
    hasAltitude: "Do you have previous experience at high altitudes?",
    altitudeDetails: "Where was it and what was the altitude?",
    medical: "Pre-existing Medical Conditions",
    medicalCondition: "Medical Condition",
    treatment: "Treatment",
    recentSurgeries: "Recent Surgeries",
    medications: "Medications",
    allergies: "Allergies",
    dietaryRestrictions: "Dietary Restrictions",
    equipment: "Hiking Equipment",
    hasEquipment: "Do you have your own equipment?",
    equipmentDetails: "If yes, what kind?",
    yes: "YES",
    no: "NO",
  },
};

function Field({ label, value }: { label: string; value?: string }) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value || " "}</Text>
    </View>
  );
}

function FullField({ label, value }: { label: string; value?: string }) {
  return (
    <View style={styles.fieldFull}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value || " "}</Text>
    </View>
  );
}

function YesNo({
  question,
  value,
  yesLabel,
  noLabel,
}: {
  question: string;
  value: boolean;
  yesLabel: string;
  noLabel: string;
}) {
  return (
    <View style={styles.yesNoWrap}>
      <Text style={styles.yesNoQuestion}>{question}</Text>
      <Text style={styles.yesNoBoxLabel}>{yesLabel}:</Text>
      <View style={[styles.yesNoBox, value ? styles.yesNoBoxFilled : {}]}>
        {value && <Text style={styles.yesNoTick}>✓</Text>}
      </View>
      <Text style={styles.yesNoBoxLabel}>{noLabel}:</Text>
      <View style={[styles.yesNoBox, !value ? styles.yesNoBoxFilled : {}]}>
        {!value && <Text style={styles.yesNoTick}>✓</Text>}
      </View>
    </View>
  );
}

function TravelerPage({
  traveler,
  index,
  lang,
  packageName,
  date,
}: {
  traveler: TravelerData;
  index: number;
  lang: "es" | "en";
  packageName: string;
  date: string;
}) {
  const t = L[lang];
  return (
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.headerWrap}>
        {/* Left: tour details */}
        <View style={styles.headerLeft}>
          <Text style={styles.tourLabel}>{lang === "es" ? "Tour" : "Tour"}</Text>
          <Text style={styles.tourValue}>{packageName}</Text>
          <Text style={[styles.tourLabel, { marginTop: 5 }]}>{lang === "es" ? "Fecha" : "Date"}</Text>
          <Text style={styles.tourValue}>{date}</Text>
        </View>

        {/* Center: brand */}
        <View style={styles.headerCenter}>
          <Text style={styles.title}>JAGUAR</Text>
          <Text style={styles.title}>LLAQTA</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>INNER TRAVEL</Text>
          </View>
        </View>

        {/* Right: form title */}
        <View style={styles.headerRight}>
          <Text style={styles.formLabel}>{lang === "es" ? "FORMULARIO" : "FORM"}</Text>
        </View>
      </View>
      <View style={styles.divider} />

      <Text style={styles.travelerLabel}>
        {t.traveler} {index + 1}{traveler.fullName ? ` — ${traveler.fullName}` : ""}
      </Text>

      {/* Section 1: Personal data */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{t.personalData}</Text>
      </View>
      <FullField label={t.fullName} value={traveler.fullName} />
      <View style={styles.row}>
        <Field label={t.birthDate} value={traveler.birthDate} />
        <Field label={t.nationality} value={traveler.nationality} />
      </View>
      <View style={styles.row}>
        <Field label={t.idPassport} value={traveler.idPassport} />
        <Field label={t.languages} value={traveler.languages} />
      </View>
      <View style={styles.row}>
        <Field label={t.phone} value={traveler.phone} />
        <Field label={t.email} value={traveler.email} />
      </View>

      {/* Section 2: Previous experience */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{t.experience}</Text>
      </View>
      <YesNo
        question={t.hasHiking}
        value={traveler.hasHikingExperience}
        yesLabel={t.yes}
        noLabel={t.no}
      />
      <Text style={styles.detailLabel}>{t.hikingDetails}</Text>
      <Text style={styles.detailValue}>{traveler.hikingDetails || " "}</Text>
      <YesNo
        question={t.hasAltitude}
        value={traveler.hasAltitudeExperience}
        yesLabel={t.yes}
        noLabel={t.no}
      />
      <Text style={styles.detailLabel}>{t.altitudeDetails}</Text>
      <Text style={styles.detailValue}>{traveler.altitudeDetails || " "}</Text>

      {/* Section 3: Medical */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{t.medical}</Text>
      </View>
      <View style={styles.row}>
        <Field label={t.medicalCondition} value={traveler.medicalCondition} />
        <Field label={t.treatment} value={traveler.treatment} />
      </View>
      <View style={styles.row}>
        <Field label={t.recentSurgeries} value={traveler.recentSurgeries} />
        <Field label={t.medications} value={traveler.medications} />
      </View>
      <View style={styles.row}>
        <Field label={t.allergies} value={traveler.allergies} />
        <Field label={t.dietaryRestrictions} value={traveler.dietaryRestrictions} />
      </View>

      {/* Section 4: Equipment */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{t.equipment}</Text>
      </View>
      <YesNo
        question={t.hasEquipment}
        value={traveler.hasOwnEquipment}
        yesLabel={t.yes}
        noLabel={t.no}
      />
      <Text style={styles.detailLabel}>{t.equipmentDetails}</Text>
      <Text style={styles.detailValue}>{traveler.equipmentDetails || " "}</Text>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>+51 926 935 820</Text>
        <Text style={styles.footerText}>www.jaguarllaqta.pe</Text>
      </View>
    </Page>
  );
}

interface TravelerPDFProps {
  travelers: TravelerData[];
  lang: "es" | "en";
  packageName: string;
  date: string;
}

export default function TravelerPDF({ travelers, lang, packageName, date }: TravelerPDFProps) {
  return (
    <Document>
      {travelers.map((traveler, index) => (
        <TravelerPage
          key={index}
          traveler={traveler}
          index={index}
          lang={lang}
          packageName={packageName}
          date={date}
        />
      ))}
    </Document>
  );
}
