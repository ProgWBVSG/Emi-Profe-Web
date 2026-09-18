"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { metodo as Metodo } from "@/lib/content";
import { Chat, Medir, Plan, Entrenar, Ajuste } from "./icons";

const ICONOS = {
  chat: Chat,
  medir: Medir,
  plan: Plan,
  entrenar: Entrenar,
  ajuste: Ajuste,
} as const;

const INTERVALO = 10000;

/**
 * Carrusel de "Cómo trabajamos" para mobile: avanza solo cada 10s y se
 * detiene mientras el usuario lo está tocando o arrastrando (se reanuda
 * solo al soltar). Mismo mecanismo que el carrusel de testimonios.
 */
export default function MetodoCarousel({ pasos }: { pasos: typeof Metodo.pasos }) {
  const pistaRef = useRef<HTMLDivElement>(null);
  const [activo, setActivo] = useState(0);
  const [pausado, setPausado] = useState(false);

  /* Scroll acotado al propio carrusel: nunca toca el scroll vertical de
     la página (a diferencia de scrollIntoView, que puede arrastrarlo). */
  const irA = useCallback((i: number) => {
    const el = pistaRef.current;
    const tarjeta = el?.children[i] as HTMLElement | undefined;
    if (!el || !tarjeta) return;
    el.scrollTo({ left: tarjeta.offsetLeft - el.offsetLeft, behavior: "smooth" });
  }, []);

  /* Avance automático cada 10s, en loop. */
  useEffect(() => {
    if (pausado || pasos.length < 2) return;
    const id = window.setInterval(() => {
      setActivo((i) => {
        const siguiente = (i + 1) % pasos.length;
        irA(siguiente);
        return siguiente;
      });
    }, INTERVALO);
    return () => window.clearInterval(id);
  }, [pausado, pasos.length, irA]);

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
    const anchoTarjeta = (el.children[0] as HTMLElement).offsetWidth + 12; // + gap
    const i = Math.round(el.scrollLeft / anchoTarjeta);
    setActivo(Math.max(0, Math.min(pasos.length - 1, i)));
  }, [pasos.length]);

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
        className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-2"
      >
        {pasos.map((p) => {
          const Icono = ICONOS[p.icono];
          return (
            <div
              key={p.n}
              className="flex w-[84vw] shrink-0 snap-center flex-col items-center"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-ink text-lime">
                <Icono className="h-[22px] w-[22px]" />
              </span>

              <div className="mt-5 w-full flex-1 overflow-hidden rounded-[22px] border hairline bg-paper/60 p-6 pt-7 text-center">
                <h3 className="display text-[1.3rem]">{p.titulo}</h3>
                <p className="prose-body mt-3 text-[14px] text-ink/60">{p.texto}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex justify-center gap-1.5" aria-hidden="true">
        {pasos.map((p, i) => (
          <span
            key={p.n}
            className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${
              i === activo ? "w-4 bg-lime-2" : "w-1.5 bg-ink/15"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
