import {
  filosofia,
  metodo,
  serviciosSeccion,
  servicios,
  planes,
  planesSeccion,
  cta,
  waLink,
} from "@/lib/content";
import Reveal from "./Reveal";
import { Card, SectionHead, pad } from "./ui";
import { Check, Whatsapp, Chat, Medir, Plan, Entrenar, Ajuste, Arrow } from "./icons";
import MetodoCarousel from "./MetodoCarousel";

const ICONOS = {
  chat: Chat,
  medir: Medir,
  plan: Plan,
  entrenar: Entrenar,
  ajuste: Ajuste,
} as const;

export function Metodo() {
  return (
    <Card id="metodo">
      <div className={pad}>
        {/* Filosofía: por qué no hay una rutina universal. */}
        <SectionHead
          titulo={
            <>
              {filosofia.titulo}
              <span className="text-lime-2">.</span>
            </>
          }
          bajada={filosofia.texto}
        />

        {/* Embudo Contexto → Evaluación → ... → Seguimiento */}
        <Reveal delay={100}>
          <div className="mx-auto mt-9 flex max-w-3xl flex-wrap items-center justify-center gap-x-2 gap-y-3">
            {filosofia.pasos.map((p, i) => (
              <span key={p} className="flex items-center gap-2">
                <span className="rounded-full border hairline px-3.5 py-1.5 text-[12.5px] font-semibold text-ink/75">
                  {p}
                </span>
                {i < filosofia.pasos.length - 1 ? (
                  <Arrow className="h-3.5 w-3.5 text-ink/30" />
                ) : null}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Cómo trabajamos: los 5 pasos concretos. */}
        <div className="mt-16 border-t hairline pt-14 lg:mt-20 lg:pt-16">
          <Reveal>
            <p className="text-center text-[13px] font-semibold uppercase tracking-[0.1em] text-ink/45">
              {metodo.titulo}
            </p>
          </Reveal>

          {/* Mobile: carrusel con avance automático cada 10s. */}
          <div className="mt-10">
            <MetodoCarousel pasos={metodo.pasos} />
          </div>

          {/* Tablet / desktop: grilla con guía, como antes. */}
          <div className="relative mt-10 hidden sm:block">
            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
              {metodo.pasos.map((p, i) => {
                const Icono = ICONOS[p.icono];
                const ultimo = i === metodo.pasos.length - 1;

                return (
                  <Reveal
                    key={p.n}
                    delay={i * 80}
                    as="li"
                    className="group relative flex flex-col items-center"
                  >
                    {/* Tramo de guía hacia el paso siguiente */}
                    {!ultimo ? (
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute left-[calc(50%+2.25rem)] right-[calc(-50%+0.5rem)] top-[27px] hidden h-0.5 lg:block"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(to right, color-mix(in srgb, var(--color-ink) 32%, transparent) 0 6px, transparent 6px 12px)",
                        }}
                      />
                    ) : null}

                    {/* Nodo */}
                    <span
                      className={[
                        "relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full transition-[background-color,color,transform] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] motion-safe:group-hover:-translate-y-0.5",
                        ultimo ? "bg-lime text-ink" : "bg-ink text-lime",
                      ].join(" ")}
                    >
                      <Icono className="h-[22px] w-[22px]" />
                    </span>

                    {/* Tarjeta */}
                    <div className="relative mt-5 w-full flex-1 overflow-hidden rounded-[22px] border hairline bg-paper/60 p-6 pt-7 text-center transition-[border-color,transform] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:border-lime-2 motion-safe:group-hover:-translate-y-1">
                      <h3 className="display text-[1.3rem]">{p.titulo}</h3>
                      <p className="prose-body mt-3 text-[14px] text-ink/60">{p.texto}</p>
                    </div>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function Servicios() {
  return (
    <Card id="servicios">
      <div className={pad}>
        <SectionHead
          titulo={
            <>
              {serviciosSeccion.titulo}
              <span className="text-lime-2">.</span>
            </>
          }
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {servicios.map((s, i) => (
            <Reveal
              key={s.titulo}
              delay={i * 60}
              className="rounded-[18px] border hairline bg-paper/60 p-6"
            >
              <h3 className="text-[15.5px] font-semibold leading-snug">{s.titulo}</h3>
              <p className="prose-body mt-2 text-[14px] text-ink/60">{s.texto}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Card>
  );
}

export function Planes() {
  return (
    <Card id="planes">
      <div className={pad}>
        <SectionHead
          titulo={
            <>
              {planesSeccion.titulo}
              <span className="text-lime-2">.</span>
            </>
          }
          bajada={planesSeccion.bajada}
        />

        <div className="mt-12 grid items-start gap-4 lg:mt-16 lg:grid-cols-3">
          {planes.map((p, i) => (
            <Reveal
              key={p.nombre}
              delay={i * 70}
              className={[
                "relative flex h-full flex-col rounded-[22px] p-7 sm:p-8",
                p.destacado
                  ? "bg-ink text-bone lg:-mt-5 lg:pb-11 lg:pt-11"
                  : "border hairline bg-paper/60",
              ].join(" ")}
            >
              {p.destacado ? (
                <span className="absolute right-6 top-6 rounded-full bg-lime px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-ink">
                  Más elegido
                </span>
              ) : null}

              <p
                className={`text-[15px] font-semibold ${
                  p.destacado ? "text-bone/70" : "text-ink/60"
                }`}
              >
                {p.nombre}
              </p>

              <p className="display mt-4 text-[clamp(2.2rem,4.4vw,3rem)]">
                {p.precio !== "Consultar" ? (
                  <span className="mr-0.5 align-super text-[0.42em] font-semibold">$</span>
                ) : null}
                {p.precio}
              </p>
              <p
                className={`mt-1 text-[13px] ${p.destacado ? "text-bone/45" : "text-ink/45"}`}
              >
                {p.periodo}
              </p>

              <p
                className={`prose-body mt-5 text-[14px] ${
                  p.destacado ? "text-bone/65" : "text-ink/60"
                }`}
              >
                {p.para}
              </p>

              <ul
                className={`mt-6 flex flex-1 flex-col gap-2.5 border-t pt-6 ${
                  p.destacado ? "border-bone/15" : "hairline"
                }`}
              >
                {p.incluye.map((it) => (
                  <li
                    key={it}
                    className={`flex items-start gap-2.5 text-[14px] ${
                      p.destacado ? "text-bone/80" : "text-ink/75"
                    }`}
                  >
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        p.destacado ? "text-lime" : "text-lime-2"
                      }`}
                    />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>

              <a
                href={waLink(
                  "Hola Emi! Me interesa el plan " + p.nombre + ". ¿Cómo seguimos?"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn mt-7 w-full ${p.destacado ? "btn-lime" : "btn-ink"}`}
              >
                <Whatsapp className="h-4 w-4" />
                {p.cta}
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100} className="mt-10 text-center">
          <p className="text-[14px] text-ink/55">
            {planesSeccion.nota}{" "}
            <a
              href={cta.centros}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ink underline decoration-lime-2 decoration-2 underline-offset-4"
            >
              Escribime
            </a>
            .
          </p>
          <p className="mt-3 text-[13px] text-ink/40">
            Precios en pesos argentinos · Transferencia o efectivo
          </p>
        </Reveal>
      </div>
    </Card>
  );
}
