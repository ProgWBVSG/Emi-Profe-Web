import type { ReactNode } from "react";
import Reveal from "./Reveal";

/** Bloque redondeado sobre el fondo lima. Es la unidad de layout del sitio. */
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
