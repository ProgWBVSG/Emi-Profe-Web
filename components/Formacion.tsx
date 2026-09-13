import {
  formacionSeccion,
  formacionCredenciales,
  capacitacionesSeccion,
  capacitaciones,
  areasExperienciaSeccion,
  areasExperiencia,
  stats,
} from "@/lib/content";
import Reveal from "./Reveal";
import { Card, SectionHead, pad } from "./ui";

export function Formacion() {
  return (
    <Card id="formacion">
      <div className={pad}>
        <SectionHead
          titulo={
            <>
              {formacionSeccion.titulo}
              <span className="text-lime-2">.</span>
            </>
          }
        />

        {/* Títulos universitarios y certificaciones formales. */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-3 sm:grid-cols-3 lg:mt-16">
          {formacionCredenciales.map((f, i) => (
            <Reveal key={f.titulo} delay={i * 70} className="rounded-[22px] bg-ink p-6 text-bone">
              <p className="text-[14.5px] font-semibold leading-snug">{f.titulo}</p>
              <p className="mt-2 text-[13px] text-bone/55">{f.lugar}</p>
              {f.detalle ? <p className="mt-0.5 text-[13px] text-lime">{f.detalle}</p> : null}
            </Reveal>
          ))}
        </div>

        {/* Cursos y capacitaciones. */}
        <div className="mx-auto mt-14 max-w-5xl">
          <Reveal>
            <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-ink/45">
              {capacitacionesSeccion.titulo}
            </p>
          </Reveal>
          <ul className="mt-5 flex flex-col">
            {capacitaciones.map((c, i) => (
              <Reveal
                key={c.titulo}
                delay={i * 50}
                as="li"
                className="border-b hairline py-4 first:border-t sm:flex sm:items-baseline sm:justify-between sm:gap-6"
              >
                <div>
                  <p className="text-[14.5px] font-semibold leading-snug">{c.titulo}</p>
                  <p className="mt-1 text-[13px] text-ink/55">{c.lugar}</p>
                </div>
                <p className="mt-1.5 shrink-0 text-[13px] text-ink/45 sm:mt-0 sm:text-right">
                  {c.detalle}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Áreas de experiencia: resumen rápido de capacidades. */}
        <div className="mx-auto mt-14 max-w-5xl">
          <Reveal>
            <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-ink/45">
              {areasExperienciaSeccion.titulo}
            </p>
          </Reveal>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {areasExperiencia.map((a, i) => (
              <Reveal
                key={a.titulo}
                delay={i * 50}
                className="rounded-[18px] border hairline bg-paper/60 p-5"
              >
                <p className="text-[14.5px] font-semibold leading-snug">{a.titulo}</p>
                <p className="prose-body mt-1.5 text-[13.5px] text-ink/60">{a.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Números en chico: acompañan, no compiten con el resto. */}
        <Reveal delay={100}>
          <div className="mx-auto mt-12 flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-2 border-t hairline pt-6">
            {stats.map((s) => (
              <p key={s.label} className="text-[12.5px] text-ink/45">
                <span className="font-semibold text-ink/70">
                  {s.valor}
                  {s.sufijo}
                </span>{" "}
                {s.label}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </Card>
  );
}
