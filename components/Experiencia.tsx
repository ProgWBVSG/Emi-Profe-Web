import { experienciaSeccion, experiencia, espaciosDondeTrabaje } from "@/lib/content";
import Reveal from "./Reveal";
import { Card, SectionHead, pad } from "./ui";
import TrayectoriaTimeline from "./ui/trayectoria-timeline";

export function Experiencia() {
  const hitos = experiencia.map((e) => ({
    id: e.id,
    rol: e.titulo,
    lugar: e.lugar,
    texto: e.texto,
    img: e.img,
    alt: e.alt,
  }));

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

        <Reveal delay={80} className="mx-auto mt-12 max-w-5xl lg:mt-16">
          <TrayectoriaTimeline hitos={hitos} intervalo={5000} />
        </Reveal>

        {/* Lista simple: todavía no hay fotos propias de estos espacios. */}
        <Reveal
          delay={140}
          className="mx-auto mt-10 max-w-5xl border-t border-bone/12 pt-8 text-center"
        >
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
