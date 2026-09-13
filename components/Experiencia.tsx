import { experienciaSeccion, experiencia, espaciosDondeTrabaje } from "@/lib/content";
import Reveal from "./Reveal";
import { Card, SectionHead, pad, FotoTarjeta, GrillaCarrusel } from "./ui";

export function Experiencia() {
  return (
    <Card id="experiencia" tone="ink">
      <div className={pad}>
        <SectionHead
          tone="ink"
          titulo={
            <>
              {experienciaSeccion.titulo}
              <span className="text-lime">.</span>
            </>
          }
        />

        <GrillaCarrusel
          items={experiencia}
          keyFn={(e) => e.id}
          columnasDesktop="lg:grid-cols-3"
          render={(e) => (
            <FotoTarjeta
              img={e.img}
              alt={e.alt}
              titulo={e.titulo}
              lugar={e.lugar || undefined}
              texto={e.texto}
            />
          )}
        />

        {/* Lista simple: todavía no hay fotos propias de estos espacios. */}
        <Reveal delay={120} className="mx-auto mt-12 max-w-5xl border-t border-bone/12 pt-8 text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-bone/45">
            {espaciosDondeTrabaje.titulo}
          </p>
          <p className="prose-body mx-auto mt-3 max-w-[52ch] text-[14.5px] text-bone/70">
            {espaciosDondeTrabaje.lugares.join(" · ")}
          </p>
        </Reveal>
      </div>
    </Card>
  );
}
