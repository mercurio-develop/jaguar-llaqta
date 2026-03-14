export default function TerminosPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-primary-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="section-title mb-4">Términos y Condiciones</h1>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          <div className="max-w-3xl mx-auto prose-legal">
            <p className="text-muted text-sm mb-10">
              Última actualización: enero 2026
            </p>

            <Section title="1. Identificación">
              <p>
                JAGUAR LLAQTA es un proyecto de turismo alternativo con sede en
                Cusco, Perú. Correo de contacto:{" "}
                <a href="mailto:augarteforno@gmail.com" className="text-accent hover:underline">
                  augarteforno@gmail.com
                </a>
                . Al contratar cualquiera de nuestros servicios o utilizar este
                sitio web, el usuario acepta íntegramente los presentes términos
                y condiciones.
              </p>
            </Section>

            <Section title="2. Servicios ofrecidos">
              <p>
                JAGUAR LLAQTA ofrece experiencias de turismo alternativo en
                Cusco y alrededores, incluyendo rutas de trekking, visitas a
                comunidades nativas y ceremonias ancestrales. La disponibilidad
                de cada servicio está sujeta a condiciones climáticas,
                capacidad del grupo y confirmación por parte del equipo.
              </p>
            </Section>

            <Section title="3. Proceso de reserva">
              <p>
                La reserva se realiza mediante el formulario de pre-reserva
                disponible en el sitio web. Una vez recibida la solicitud,
                nuestro equipo se contactará con el cliente para confirmar
                disponibilidad, revisar el perfil del participante y coordinar
                el pago. La reserva se considera confirmada únicamente tras
                recibir el abono o pago acordado.
              </p>
            </Section>

            <Section title="4. Precios y pagos">
              <p>
                Todos los precios están expresados en dólares estadounidenses
                (USD). Aceptamos pagos en efectivo, transferencia bancaria y
                billeteras digitales (Remitly, Global66, Yape, Plin). Cualquier
                cargo bancario o comisión adicional generada por la transacción
                será asumido por el cliente.
              </p>
            </Section>

            <Section title="5. Política de cancelación">
              <ul>
                <li>
                  Cancelaciones con más de 7 días de anticipación: reembolso
                  del 80% del monto pagado.
                </li>
                <li>
                  Cancelaciones entre 3 y 7 días: reembolso del 50%.
                </li>
                <li>
                  Cancelaciones con menos de 3 días o no presentación: sin
                  reembolso.
                </li>
                <li>
                  En casos de fuerza mayor debidamente acreditados, se
                  evaluará la situación de forma individual.
                </li>
              </ul>
              <p>
                JAGUAR LLAQTA se reserva el derecho de cancelar o reprogramar
                una actividad por condiciones climáticas adversas, razones de
                seguridad u otras causas fuera de su control, ofreciendo en
                tales casos la reprogramación o el reembolso completo al
                cliente.
              </p>
            </Section>

            <Section title="6. Responsabilidades del participante">
              <p>
                El participante declara estar en condiciones físicas adecuadas
                para la actividad contratada y haber respondido con honestidad
                el formulario de pre-reserva. Es responsabilidad del cliente
                contar con seguro de viaje y/o médico. JAGUAR LLAQTA no se
                responsabiliza por accidentes derivados de la omisión de
                información o del incumplimiento de las indicaciones del guía.
              </p>
            </Section>

            <Section title="7. Limitación de responsabilidad">
              <p>
                JAGUAR LLAQTA no se hace responsable por pérdida de objetos
                personales, retrasos causados por terceros (transporte, clima,
                etc.), ni por lesiones producidas por no seguir las
                instrucciones del guía. La participación en actividades de
                montaña, trekking y naturaleza implica riesgos inherentes que
                el participante asume voluntariamente.
              </p>
            </Section>

            <Section title="8. Propiedad intelectual">
              <p>
                Todo el contenido de este sitio web (textos, imágenes, diseño,
                logotipos) es propiedad de JAGUAR LLAQTA o cuenta con los
                debidos derechos de uso. Queda prohibida su reproducción total
                o parcial sin autorización expresa por escrito.
              </p>
            </Section>

            <Section title="9. Modificaciones">
              <p>
                JAGUAR LLAQTA se reserva el derecho de modificar estos términos
                en cualquier momento. Los cambios serán publicados en esta
                página con la fecha de actualización correspondiente. El uso
                continuado del sitio o los servicios implica la aceptación de
                los términos vigentes.
              </p>
            </Section>

            <Section title="10. Ley aplicable">
              <p>
                Estos términos se rigen por las leyes de la República del Perú.
                Cualquier controversia será sometida a los tribunales
                competentes de la ciudad de Cusco.
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
