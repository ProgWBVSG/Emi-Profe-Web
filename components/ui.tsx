import Image from "next/image";
import type { ReactNode } from "react";
import Reveal from "./Reveal";

/** Bloque redondeado sobre el fondo de marca. Es la unidad de layout del sitio. */
export function Card({
  children,
  id,
  tone = "bone",
  className = "",
}: {
  children: ReactNode;
  id?: string;
  tone?: "bone" | "ink";
  className?: string;
}) {
  return (
    <section
      id={id}
      className={[
        "relative overflow-hidden rounded-[26px] lg:rounded-[36px]",
        tone === "ink" ? "bg-ink text-bone" : "bg-bone text-ink",
        className,
      ].join(" ")}
    >
      {children}
    </section>
  );
}

/** Encabezado de sección: título centrado y una bajada corta. */
export function SectionHead({
  titulo,
  bajada,
  tone = "bone",
  className = "",
}: {
  titulo: ReactNode;
  bajada?: string;
  tone?: "bone" | "ink";
  className?: string;
}) {
  const body = tone === "ink" ? "text-bone/60" : "text-ink/60";

  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      <Reveal>
        <h2 className="display text-[clamp(2.1rem,5vw,3.9rem)]">{titulo}</h2>
      </Reveal>
      {bajada ? (
        <Reveal delay={70}>
          <p className={`prose-body mx-auto mt-5 max-w-[48ch] text-[15px] sm:text-base ${body}`}>
            {bajada}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

/** Padding interno estándar de las tarjetas. */
export const pad = "px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24";

/** Tarjeta con foto de fondo, degradado y título + texto abajo. */
export function FotoTarjeta({
  img,
  alt,
  titulo,
  lugar,
  texto,
  className = "",
}: {
  img: string;
  alt: string;
  titulo: string;
  lugar?: string;
  texto: string;
  className?: string;
}) {
  return (
    <div className={`group relative min-h-[290px] overflow-hidden rounded-[22px] ${className}`}>
      <Image
        src={img}
        alt={alt}
        fill
        sizes="(max-width: 640px) 84vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.23,1,0.32,1)] motion-safe:group-hover:scale-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/72 to-ink/35" />

      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="display text-[1.35rem] text-bone">{titulo}</h3>
        {lugar ? <p className="mt-1 text-[13px] font-semibold text-bone/80">{lugar}</p> : null}
        <p className="prose-body mt-2 text-[13.5px] text-bone/65">{texto}</p>
      </div>
    </div>
  );
}

/**
 * Grilla responsive de tarjetas: carrusel horizontal con scroll-snap en
 * mobile (una tarjeta a la vez, con puntos indicadores), grilla normal
 * desde `sm` hacia arriba.
 */
export function GrillaCarrusel<T>({
  items,
  keyFn,
  render,
  columnasDesktop = "lg:grid-cols-4",
}: {
  items: T[];
  keyFn: (item: T) => string;
  render: (item: T) => ReactNode;
  columnasDesktop?: string;
}) {
  return (
    <>
      {/* Mobile: carrusel horizontal con scroll-snap, una tarjeta a la vez. */}
      <Reveal
        as="div"
        className="no-scrollbar -mx-6 mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-2 sm:hidden"
      >
        {items.map((item) => (
          <div key={keyFn(item)} className="w-[84vw] shrink-0 snap-center">
            {render(item)}
          </div>
        ))}
      </Reveal>

      {/* Puntos indicadores del carrusel (solo decorativos, guían la vista). */}
      <div className="mt-4 flex justify-center gap-1.5 sm:hidden" aria-hidden="true">
        {items.map((item) => (
          <span key={keyFn(item)} className="h-1.5 w-1.5 rounded-full bg-bone/25" />
        ))}
      </div>

      {/* Tablet / desktop: grilla. */}
      <div className={`mt-12 hidden gap-3 sm:grid sm:grid-cols-2 lg:mt-16 ${columnasDesktop}`}>
        {items.map((item, i) => (
          <Reveal key={keyFn(item)} delay={(i % 4) * 60}>
            {render(item)}
          </Reveal>
        ))}
      </div>
    </>
  );
}
