export default function PrivacidadPage() {
  return (
    <div className="pt-[var(--header-height)]">
      <section className="py-24 bg-primary-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="section-title mb-4">Política de Privacidad</h1>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-muted text-sm mb-10">
              Última actualización: enero 2026
            </p>

            <Section title="1. Responsable del tratamiento">
              <p>
                JAGUAR LLAQTA, con sede en Valle Sagrado, Cusco, Perú, es responsable del
                tratamiento de los datos personales recabados a través de este
                sitio web y sus formularios de contacto y reserva. Correo de
                contacto:{" "}
                <a href="mailto:augarteforno@gmail.com" className="text-accent hover:underline">
                  augarteforno@gmail.com
                </a>
                .
              </p>
            </Section>

            <Section title="2. Datos que recopilamos">
              <p>Recopilamos los siguientes datos personales:</p>
              <ul>
                <li>Nombre completo</li>
                <li>Correo electrónico</li>
                <li>Número de teléfono / WhatsApp</li>
                <li>País de origen</li>
                <li>Información de salud o condición física relevante para la actividad (indicada voluntariamente en el formulario de pre-reserva)</li>
              </ul>
            </Section>

            <Section title="3. Finalidad del tratamiento">
              <p>Los datos recopilados se utilizan exclusivamente para:</p>
              <ul>
                <li>Gestionar y confirmar reservas de tours y actividades</li>
                <li>Comunicarnos con el cliente antes, durante y después del servicio</li>
                <li>Evaluar la idoneidad del participante para cada actividad</li>
                <li>Mejorar nuestros servicios y atención al cliente</li>
              </ul>
              <p>
                No utilizamos los datos para envío de publicidad no solicitada
                ni los compartimos con terceros sin consentimiento expreso,
                salvo obligación legal.
              </p>
            </Section>

            <Section title="4. Base legal">
              <p>
                El tratamiento de datos se basa en el consentimiento del
                usuario al completar y enviar los formularios del sitio, y en
                la ejecución del contrato de servicios turísticos. Todo ello en
                conformidad con la Ley N.° 29733 — Ley de Protección de Datos
                Personales del Perú.
              </p>
            </Section>

            <Section title="5. Conservación de los datos">
              <p>
                Los datos personales se conservan durante el tiempo necesario
                para la prestación del servicio y por un período adicional de
                hasta 3 años para fines de gestión administrativa, salvo que el
                usuario solicite su eliminación antes.
              </p>
            </Section>

            <Section title="6. Derechos del usuario">
              <p>
                El usuario tiene derecho a acceder, rectificar, cancelar u
                oponerse al tratamiento de sus datos personales (derechos
                ARCO). Para ejercerlos, puede enviar una solicitud a{" "}
                <a href="mailto:augarteforno@gmail.com" className="text-accent hover:underline">
                  augarteforno@gmail.com
                </a>
                . Responderemos en un plazo máximo de 20 días hábiles.
              </p>
            </Section>

            <Section title="7. Seguridad de los datos">
              <p>
                Aplicamos medidas técnicas y organizativas razonables para
                proteger los datos personales frente a accesos no autorizados,
                pérdida o alteración. Sin embargo, ningún sistema de
                transmisión de datos por internet es completamente seguro.
              </p>
            </Section>

            <Section title="8. Cookies y tecnologías de rastreo">
              <p>
                Este sitio puede utilizar cookies técnicas necesarias para su
                correcto funcionamiento. No utilizamos cookies de seguimiento
                publicitario de terceros. El usuario puede configurar su
                navegador para rechazar cookies, aunque esto puede afectar
                algunas funcionalidades del sitio.
              </p>
            </Section>

            <Section title="9. Transferencias internacionales">
              <p>
                No realizamos transferencias internacionales de datos
                personales. Toda la información se gestiona desde Perú y con
                herramientas que cumplen los estándares de privacidad
                aplicables.
              </p>
            </Section>

            <Section title="10. Cambios en esta política">
              <p>
                Podemos actualizar esta política en cualquier momento. Los
                cambios serán publicados en esta página con la fecha de
                actualización correspondiente. Recomendamos revisarla
                periódicamente.
              </p>
            </Section>
          </div>
        </div>
      </section>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-xl text-white mb-3">{title}</h2>
      <div className="text-muted leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
        {children}
      </div>
    </div>
  );
}
