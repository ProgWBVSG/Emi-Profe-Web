import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Condiciones de los planes de entrenamiento de " + site.nombre + ".",
  alternates: { canonical: site.url + "/terminos" },
  robots: { index: true, follow: true },
};

export default function Terminos() {
  return (
    <LegalPage titulo="Términos y condiciones" actualizado="septiembre 2026">
      <p>
        Al contratar un plan o servicio con {site.nombre} aceptás las
        condiciones descritas a continuación.
      </p>

      <h2>Servicios</h2>
      <p>
        {site.nombre} ofrece planes de entrenamiento online y presenciales.
        El contenido de cada plan se define de manera personalizada tras una
        evaluación inicial y puede ajustarse durante el proceso.
      </p>

      <h2>Pagos y cancelación</h2>
      <ul>
        <li>Los planes no tienen permanencia mínima.</li>
        <li>Podés cancelar en cualquier momento avisando con anticipación.</li>
        <li>Los valores se coordinan directamente por WhatsApp.</li>
      </ul>

      <h2>Responsabilidad</h2>
      <p>
        El entrenamiento físico conlleva riesgos inherentes a la actividad.
        Es responsabilidad de cada persona informar condiciones de salud
        preexistentes y consultar a un profesional médico antes de comenzar
        cualquier programa si tiene dudas sobre su aptitud física.
      </p>

      <h2>Contacto</h2>
      <p>
        Consultas sobre estos términos a{" "}
        <a href={`mailto:${site.email}`} className="font-semibold text-ink underline">
          {site.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
