import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Política de privacidad",
};

export default function Privacidad() {
  return (
    <LegalPage titulo="Política de privacidad" actualizado="septiembre 2026">
      <p>
        Esta página explica qué datos se recolectan cuando visitás{" "}
        {site.url.replace("https://", "")} y cómo se usan.
      </p>

      <h2>Qué datos recolectamos</h2>
      <p>
        Cuando escribís por WhatsApp o mandás un mail desde este sitio,
        compartís voluntariamente tu nombre, número de teléfono y el mensaje
        que elijas enviar. No usamos formularios que guarden datos en un
        servidor propio.
      </p>

      <h2>Cómo se usan</h2>
      <ul>
        <li>Para responder tu consulta y coordinar el entrenamiento.</li>
        <li>Nunca se venden ni se comparten con terceros.</li>
        <li>No se usan para enviar publicidad no solicitada.</li>
      </ul>

      <h2>Cookies</h2>
      <p>
        Este sitio no usa cookies de seguimiento propias. Si en el futuro se
        integra alguna herramienta de analítica, esta página se va a
        actualizar.
      </p>

      <h2>Contacto</h2>
      <p>
        Ante cualquier duda sobre tus datos, escribí a{" "}
        <a href={`mailto:${site.email}`} className="font-semibold text-ink underline">
          {site.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
