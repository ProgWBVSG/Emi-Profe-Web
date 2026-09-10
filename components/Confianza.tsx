import {
  testimonios,
  testimoniosSeccion,
  trayectoria,
  formacion,
  sobreMi,
  stats,
} from "@/lib/content";
import Reveal from "./Reveal";
import { Card, SectionHead, pad } from "./ui";
import TrayectoriaTimeline from "./ui/trayectoria-timeline";
import TestimoniosCarousel from "./TestimoniosCarousel";

function TarjetaTestimonio({
  texto,
  nombre,
  detalle,
  className = "",
}: {
  texto: string;
  nombre: string;
  detalle: string;
  className?: string;
}) {
  return (
    <div
      className={`flex h-full flex-col rounded-[22px] border border-bone/12 bg-bone/[0.04] p-7 sm:p-8 ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 text-lime"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M9.6 5.5C6.3 7 4.5 9.8 4.5 13.3c0 3.1 1.9 5.2 4.5 5.2 2.2 0 3.9-1.6 3.9-3.7 0-2-1.5-3.5-3.4-3.5-.4 0-.7 0-1 .1.4-1.6 1.7-3 3.5-3.9l-2.4-2Zm9.3 0C15.6 7 13.8 9.8 13.8 13.3c0 3.1 1.9 5.2 4.5 5.2 2.2 0 3.9-1.6 3.9-3.7 0-2-1.5-3.5-3.4-3.5-.4 0-.7 0-1 .1.4-1.6 1.7-3 3.5-3.9l-2.4-2Z" />
      </svg>

      <blockquote className="prose-body mt-5 flex-1 text-[15px] text-bone/85">
        {texto}
      </blockquote>

      <div className="mt-7 border-t border-bone/12 pt-5">
        <p className="text-[14px] font-semibold text-bone">{nombre}</p>
        <p className="mt-0.5 text-[13px] text-bone/45">{detalle}</p>
      </div>
    </div>
  );
}

export function Testimonios() {
  return (
    <Card tone="ink">
      <div className={pad}>
        <SectionHead
          tone="ink"
          titulo={
            <>
              {testimoniosSeccion.titulo}
              <span className="text-lime">.</span>
            </>
          }
        />

        {/* Mobile: carrusel horizontal con scroll-snap y avance automático. */}
        <TestimoniosCarousel items={testimonios} />

        {/* Tablet / desktop: grilla como antes. */}
        <div className="mt-12 hidden gap-4 sm:grid lg:mt-16 lg:grid-cols-3">
          {testimonios.map((t, i) => (
            <Reveal key={t.nombre} delay={i * 70}>
              <TarjetaTestimonio texto={t.texto} nombre={t.nombre} detalle={t.detalle} />
            </Reveal>
          ))}
        </div>
      </div>
    </Card>
  );
}

export function SobreMi() {
  return (
    <Card id="trayectoria">
      <div className={pad}>
        <SectionHead
          titulo={
            <>
              {sobreMi.titulo}
              <span className="text-lime-2">.</span>
            </>
          }
          bajada={sobreMi.bajada}
        />

        <Reveal delay={80} className="mx-auto mt-12 max-w-5xl lg:mt-16">
          <TrayectoriaTimeline hitos={trayectoria} intervalo={5000} />
        </Reveal>

        <Reveal delay={140} className="mx-auto mt-4 grid max-w-5xl gap-3 sm:grid-cols-3">
          {formacion.map((f) => (
            <div key={f.titulo} className="rounded-[22px] bg-ink p-6 text-bone">
              <p className="text-[14.5px] font-semibold leading-snug">{f.titulo}</p>
              <p className="mt-2 text-[13px] text-bone/55">{f.lugar}</p>
              <p className="mt-0.5 text-[13px] text-lime">{f.detalle}</p>
            </div>
          ))}
        </Reveal>

        {/* Números en chico: acompañan, no compiten con la trayectoria. */}
        <Reveal delay={180}>
          <div className="mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-2 border-t hairline pt-6">
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
