"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { History, Eye, Target, Compass, Heart, Handshake, ChevronDown, Users, Building2, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Card from "@/components/ui/Card";

const teamMembers = [
  {
    name: "Carlos Quispe",
    role: "Fundador & Guía Principal",
    description: "Nacido en Cusco, con más de 15 años de experiencia en turismo ancestral.",
  },
  {
    name: "María Huamán",
    role: "Coordinadora de Experiencias",
    description: "Especialista en conexión con comunidades y experiencias culturales.",
  },
  {
    name: "Jorge Condori",
    role: "Guía de Montaña",
    description: "Certificado en alta montaña y conocedor de rutas sagradas.",
  },
];

const partnerOrganizations = [
  {
    name: "Comunidad de Chinchero",
    type: "Comunidad Local",
    description: "Artesanos textiles que preservan técnicas ancestrales de tejido andino.",
  },
  {
    name: "Asociación de Guías de Montaña",
    type: "Guías Especializados",
    description: "Guías certificados con profundo conocimiento de las rutas sagradas.",
  },
  {
    name: "Pampamesayoq de Ollantaytambo",
    type: "Maestros Espirituales",
    description: "Herederos de la tradición espiritual andina.",
  },
  {
    name: "Turismo Sostenible Perú",
    type: "ONG",
    description: "Organización comprometida con el turismo responsable y comunitario.",
  },
];

const values = [
  { icon: Compass, titleKey: "authenticity", descKey: "authenticityDesc" },
  { icon: Heart, titleKey: "respect", descKey: "respectDesc" },
  { icon: Target, titleKey: "commitment", descKey: "commitmentDesc" },
];

const objectives = [
  "objectiveOne",
  "objectiveTwo",
  "objectiveThree",
  "objectiveFour",
];

export default function AboutPage() {
  const t = useTranslations("about");
  const tFaq = useTranslations("faq");
  const tNav = useTranslations("nav");
  const [activeSection, setActiveSection] = useState("historia");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const sections = [
    { id: "historia", label: t("historyTitle") },
    { id: "vision-mision", label: t("visionMissionTitle") },
    { id: "asociados", label: t("teamTitle") },
    { id: "faq", label: tFaq("title") },
    { id: "organizaciones", label: t("organizationsTitle") },
  ];

  const faqs = [
    { q: tFaq("q1"), a: tFaq("a1") },
    { q: tFaq("q2"), a: tFaq("a2") },
    { q: tFaq("q3"), a: tFaq("a3") },
    { q: tFaq("q4"), a: tFaq("a4") },
    { q: tFaq("q5"), a: tFaq("a5") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="pt-20">
      {/* Hero section with background image */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/comunidad-3.jpg')" }}
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container-custom text-center">
          <h1 className="section-title mb-6">{t("title")}</h1>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>
      </section>

      {/* Section Navigation - Centered */}
      <nav className="sticky top-20 z-40 bg-primary border-b border-white/10">
        <div className="container-custom">
          <div className="flex justify-center overflow-x-auto scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors border-b-2",
                  activeSection === section.id
                    ? "text-accent border-accent"
                    : "text-white/60 border-transparent hover:text-white"
                )}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* 1. Historia Section */}
      <section id="historia" className="py-20 bg-primary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <History className="w-8 h-8 text-accent" />
                <h2 className="font-display text-3xl text-white">{t("historyTitle")}</h2>
              </div>
              <p className="text-muted leading-relaxed text-lg">
                {t("historyText")}
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-support rounded overflow-hidden relative">
                <img
                  src="/images/chincheros.jpg"
                  alt={t("historyTitle")}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vision, Mission, Objectives & Values Section */}
      <section id="vision-mision" className="py-20 relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/moray.jpg')" }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-primary/85" />

        <div className="container-custom relative z-10">
          <h2 className="font-display text-3xl text-white text-center mb-12">{t("visionMissionTitle")}</h2>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <Card className="p-8 text-center">
              <Eye className="w-12 h-12 text-accent mx-auto mb-6" />
              <h3 className="font-display text-2xl text-white mb-4">{t("visionTitle")}</h3>
              <p className="text-muted leading-relaxed">{t("visionText")}</p>
            </Card>

            <Card className="p-8 text-center">
              <Users className="w-12 h-12 text-accent mx-auto mb-6" />
              <h3 className="font-display text-2xl text-white mb-4">{t("missionTitle")}</h3>
              <p className="text-muted leading-relaxed">{t("missionText")}</p>
            </Card>
          </div>

          {/* Objectives */}
          <div className="max-w-3xl mx-auto mb-16">
            <h3 className="font-display text-2xl text-white text-center mb-8">{t("objectivesTitle")}</h3>
            <div className="space-y-4">
              {objectives.map((key, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-muted">{t(key)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="max-w-4xl mx-auto">
            <h3 className="font-display text-2xl text-white text-center mb-10">{t("valuesTitle")}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-display text-lg text-white mb-2">{t(value.titleKey)}</h4>
                    <p className="text-muted text-sm">{t(value.descKey)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Asociados (Team) Section */}
      <section id="asociados" className="py-20 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-8 h-8 text-accent" />
              <h2 className="font-display text-3xl text-white">{t("teamTitle")}</h2>
            </div>
            <p className="text-muted text-lg">{t("teamText")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-support mx-auto mb-4 flex items-center justify-center">
                  <span className="text-muted text-sm">Foto</span>
                </div>
                <h3 className="font-display text-xl text-white mb-1">{member.name}</h3>
                <p className="text-accent text-sm mb-3">{member.role}</p>
                <p className="text-muted text-sm">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section id="faq" className="py-20 bg-primary-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl text-white mb-4">{tFaq("title")}</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-white/10 rounded overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-medium text-white pr-4">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-accent flex-shrink-0 transition-transform",
                      openFaqIndex === index && "rotate-180"
                    )}
                  />
                </button>
                {openFaqIndex === index && (
                  <div className="px-5 pb-5 text-muted leading-relaxed animate-slide-down">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Partner Organizations Section */}
      <section id="organizaciones" className="py-20 relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/selva-manu.jpg')" }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-primary/80" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Building2 className="w-8 h-8 text-accent" />
              <h2 className="font-display text-3xl text-white">{t("organizationsTitle")}</h2>
            </div>
            <p className="text-muted text-lg">{t("organizationsText")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {partnerOrganizations.map((org, index) => (
              <Card key={index} variant="hover" className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Handshake className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-white mb-1">{org.name}</h3>
                    <p className="text-accent text-sm mb-2">{org.type}</p>
                    <p className="text-muted text-sm">{org.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
