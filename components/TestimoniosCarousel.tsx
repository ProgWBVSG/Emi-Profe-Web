"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { testimonios as Testimonios } from "@/lib/content";

const INTERVALO = 10000;

/**
 * Carrusel de testimonios para mobile: avanza solo cada 10s y se detiene
 * mientras el usuario lo está tocando o arrastrando (se reanuda solo).
 */
export default function TestimoniosCarousel({
  items,
}: {
  items: typeof Testimonios;
}) {
  const pistaRef = useRef<HTMLDivElement>(null);
  const [activo, setActivo] = useState(0);
  const [pausado, setPausado] = useState(false);

  const irA = useCallback((i: number) => {
    const el = pistaRef.current;
    if (!el) return;
    const tarjeta = el.children[i] as HTMLElement | undefined;
    tarjeta?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, []);

  /* Avance automático cada 10s, en loop. */
  useEffect(() => {
    if (pausado || items.length < 2) return;
    const id = window.setInterval(() => {
      setActivo((i) => {
        const siguiente = (i + 1) % items.length;
        irA(siguiente);
        return siguiente;
      });
    }, INTERVALO);
    return () => window.clearInterval(id);
  }, [pausado, items.length, irA]);

  /* Respeta prefers-reduced-motion. */
  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const aplicar = () => setPausado(mq.matches);
    aplicar();
    mq.addEventListener?.("change", aplicar);
    return () => mq.removeEventListener?.("change", aplicar);
  }, []);

  /* Mientras el usuario toca o arrastra, no avanzamos solos. */
  const empezarPausa = () => setPausado(true);
  const terminarPausa = () => setPausado(false);

  /* Actualiza el punto activo si el usuario desliza a mano. */
  const onScroll = useCallback(() => {
    const el = pistaRef.current;
    if (!el || el.children.length === 0) return;
    const anchoTarjeta = (el.children[0] as HTMLElement).offsetWidth + 16; // + gap
    const i = Math.round(el.scrollLeft / anchoTarjeta);
    setActivo(Math.max(0, Math.min(items.length - 1, i)));
  }, [items.length]);

  return (
    <div className="sm:hidden">
      <div
        ref={pistaRef}
        onScroll={onScroll}
        onPointerDown={empezarPausa}
        onPointerUp={terminarPausa}
        onPointerCancel={terminarPausa}
        onTouchStart={empezarPausa}
        onTouchEnd={terminarPausa}
        className="no-scrollbar -mx-6 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2"
      >
        {items.map((t) => (
          <div
            key={t.nombre}
            className="flex h-full w-[84vw] shrink-0 snap-center flex-col rounded-[22px] border border-bone/12 bg-bone/[0.04] p-7"
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
              {t.texto}
            </blockquote>

            <div className="mt-7 border-t border-bone/12 pt-5">
              <p className="text-[14px] font-semibold text-bone">{t.nombre}</p>
              <p className="mt-0.5 text-[13px] text-bone/45">{t.detalle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-1.5" aria-hidden="true">
        {items.map((t, i) => (
          <span
            key={t.nombre}
            className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${
              i === activo ? "w-4 bg-lime" : "w-1.5 bg-bone/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
