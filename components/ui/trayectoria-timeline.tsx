"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------
   Línea de tiempo de trayectoria.
   Basada en el patrón "revision timeline" de Great UI (great-ui.com),
   reescrita para hitos laborales y para la paleta de este sitio.
------------------------------------------------------------------------- */

export type Hito = {
  id: string;
  periodo: string;
  anio: string;
  rol: string;
  lugar: string;
  texto: string;
  img: string;
  alt: string;
};

type Marca =
  | { tipo: "hito"; id: string; indiceHito: number }
  | { tipo: "vacio"; id: string };

const ALTURA_MAX = 56;
const ANCHO_MARCA = 8;
const GAP = 4;
const VACIOS_ENTRE = 7;
const RELLENO_BORDE = 14;

/** Flecha reutilizable. */
function Flecha({ dir }: { dir: "izq" | "der" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d={dir === "izq" ? "M19 12H5m0 0 7-7m-7 7 7 7" : "M5 12h14m0 0-7-7m7 7-7 7"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TrayectoriaTimeline({
  hitos,
  intervalo = 5000,
  className,
}: {
  hitos: Hito[];
  /** ms entre avances automáticos. 0 lo desactiva. */
  intervalo?: number;
  className?: string;
}) {
  const [activo, setActivo] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [anchoPista, setAnchoPista] = useState(0);
  const pistaRef = useRef<HTMLDivElement>(null);

  /* ---- Marcas: cada hito + rellenos decorativos entre y a los costados ---- */
  const marcas = useMemo(() => {
    const lista: Marca[] = [];
    for (let i = 0; i < RELLENO_BORDE; i++) {
      lista.push({ tipo: "vacio", id: `pre-${i}` });
    }
    hitos.forEach((h, i) => {
      lista.push({ tipo: "hito", id: h.id, indiceHito: i });
      if (i < hitos.length - 1) {
        for (let k = 0; k < VACIOS_ENTRE; k++) {
          lista.push({ tipo: "vacio", id: `gap-${i}-${k}` });
        }
      }
    });
    for (let i = 0; i < RELLENO_BORDE; i++) {
      lista.push({ tipo: "vacio", id: `post-${i}` });
    }
    return lista;
  }, [hitos]);

  const indiceActivoEnPista = useMemo(
    () =>
      marcas.findIndex((m) => m.tipo === "hito" && m.indiceHito === activo),
    [marcas, activo]
  );

  /* ---- Medimos la pista para centrar la marca activa ---- */
  useEffect(() => {
    const el = pistaRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(([e]) => setAnchoPista(e.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const desplazamiento = useMemo(() => {
    if (indiceActivoEnPista === -1 || anchoPista === 0) return 0;
    const pos =
      indiceActivoEnPista * (ANCHO_MARCA + GAP) + ANCHO_MARCA / 2;
    return anchoPista / 2 - pos;
  }, [indiceActivoEnPista, anchoPista]);

  /* ---- Avance automático ---- */
  const siguiente = useCallback(() => {
    setActivo((i) => (i + 1) % hitos.length);
  }, [hitos.length]);

  const anterior = useCallback(() => {
    setActivo((i) => (i - 1 + hitos.length) % hitos.length);
  }, [hitos.length]);

  useEffect(() => {
    if (!intervalo || pausado || hitos.length < 2) return;
    const id = window.setInterval(siguiente, intervalo);
    return () => window.clearInterval(id);
  }, [intervalo, pausado, siguiente, hitos.length]);

  /* ---- Respeta prefers-reduced-motion para el autoplay ---- */
  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const aplicar = () => setPausado(mq.matches);
    aplicar();
    mq.addEventListener?.("change", aplicar);
    return () => mq.removeEventListener?.("change", aplicar);
  }, []);

  const hito = hitos[activo];
  if (!hito) return null;

  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-[26px] border hairline bg-paper/70",
        className
      )}
      onPointerEnter={() => setPausado(true)}
      onPointerLeave={() => setPausado(false)}
    >
      {/* ---------------- Contenido del hito ---------------- */}
      <div className="grid gap-0 sm:grid-cols-[1fr_1.1fr]">
        <div className="relative min-h-[220px] overflow-hidden bg-ink sm:min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={hito.id}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={hito.img}
                alt={hito.alt}
                fill
                sizes="(max-width: 640px) 100vw, 40vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <span className="absolute left-5 top-5 rounded-full bg-lime px-3 py-1.5 text-[12px] font-semibold text-ink">
            {hito.anio}
          </span>
        </div>

        <div className="flex flex-col justify-center p-7 sm:p-9">
          <AnimatePresence mode="wait">
            <motion.div
              key={hito.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            >
              <p className="text-[13px] text-ink/45">{hito.periodo}</p>
              <h3 className="display mt-2 text-[clamp(1.5rem,2.6vw,2.1rem)]">
                {hito.rol}
              </h3>
              <p className="mt-1.5 text-[15px] font-semibold text-ink/70">
                {hito.lugar}
              </p>
              <p className="prose-body mt-4 max-w-[46ch] text-[14.5px] text-ink/60">
                {hito.texto}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ---------------- Controles + pista ---------------- */}
      <div className="border-t hairline bg-ink/[0.03] pt-5">
        <div className="flex items-center justify-between px-6 sm:px-8">
          <button
            type="button"
            onClick={anterior}
            aria-label="Hito anterior"
            className="btn btn-ghost h-9 w-9 rounded-xl p-0"
          >
            <Flecha dir="izq" />
          </button>

          <div className="flex h-5 items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={hito.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/50"
              >
                {hito.lugar}
              </motion.span>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={siguiente}
            aria-label="Hito siguiente"
            className="btn btn-ghost h-9 w-9 rounded-xl p-0"
          >
            <Flecha dir="der" />
          </button>
        </div>

        {/* Pista de marcas */}
        <div
          ref={pistaRef}
          className="relative flex h-16 w-full items-end overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 16%, black 84%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 16%, black 84%, transparent)",
          }}
        >
          <motion.div
            animate={{ x: desplazamiento }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="absolute left-0 flex items-end"
            style={{
              gap: GAP,
              width: marcas.length * (ANCHO_MARCA + GAP) - GAP,
            }}
          >
            {marcas.map((m, idx) => {
              const esHito = m.tipo === "hito";
              const activa = esHito && m.indiceHito === activo;

              // Campana: las marcas cercanas a la activa crecen.
              const d = Math.abs(idx - indiceActivoEnPista);
              const sigma = 4.5;
              const factor = Math.exp(-(d * d) / (2 * sigma * sigma));
              const alto = ALTURA_MAX * (0.32 + 0.68 * factor);

              return (
                <button
                  key={m.id}
                  type="button"
                  disabled={!esHito}
                  aria-label={esHito ? `Ir a ${hitos[m.indiceHito].lugar}` : undefined}
                  aria-current={activa ? "true" : undefined}
                  onClick={() => esHito && setActivo(m.indiceHito)}
                  className={cn(
                    "group flex h-16 shrink-0 items-end justify-center bg-transparent p-0",
                    esHito ? "cursor-pointer" : "pointer-events-none"
                  )}
                  style={{ width: ANCHO_MARCA }}
                >
                  <motion.span
                    className={cn(
                      "block rounded-t-full transition-colors duration-200",
                      activa
                        ? "bg-lime-2"
                        : esHito
                          ? "bg-ink/35 group-hover:bg-ink/60"
                          : "bg-ink/12"
                    )}
                    animate={{ height: alto }}
                    transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                    style={{ width: esHito ? 4 : 3 }}
                  />
                </button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
