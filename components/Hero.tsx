"use client";

import Image from "next/image";
import { useState } from "react";
import { hero, cta } from "@/lib/content";
import { HeroHeader, StickyNav, MenuOverlay } from "./Nav";
import { Play, Whatsapp } from "./icons";

export default function Hero() {
  const [menu, setMenu] = useState(false);
  const recorte = hero.foto.modo === "recorte";
  const open = () => setMenu(true);
  const close = () => setMenu(false);

  return (
    <>
      <StickyNav onOpenMenu={open} />
      <MenuOverlay open={menu} onClose={close} />

      <section id="top">
        <div className="relative overflow-hidden rounded-[26px] bg-bone lg:rounded-[36px]">
          <HeroHeader onOpenMenu={open} />

          <div className="grid lg:min-h-[min(860px,92svh)] lg:grid-cols-[1.24fr_0.76fr]">
            {/* ---------------- Columna izquierda ---------------- */}
            <div className="relative flex flex-col justify-center px-6 pb-14 pt-32 sm:px-10 sm:pt-36 lg:px-16 lg:pb-20 lg:pt-32">
              {/* Marca de agua vertical */}
              <span
                aria-hidden="true"
                className="display pointer-events-none absolute -left-3 bottom-0 top-0 sm:-left-5 flex select-none items-center text-ink/[0.045]"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                <span className="text-[clamp(6rem,19vh,15rem)] leading-none">
                  {hero.watermark}
                </span>
              </span>

              <div className="relative z-10 flex flex-col items-center text-center">
                <h1 className="display text-[clamp(1.6rem,7vw,2.6rem)] lg:text-[42px] xl:text-[55px] 2xl:text-[66px]">
                  {hero.titulo.map((linea, i) => (
                    <span key={linea} className="block">
                      {linea}
                      {i === hero.titulo.length - 1 ? (
                        <span className="text-lime-2">.</span>
                      ) : null}
                    </span>
                  ))}
                </h1>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={cta.principal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lime"
                  >
                    <Whatsapp className="h-4 w-4" />
                    {hero.ctaPrimario}
                  </a>
                  <a href="#planes" className="btn btn-ghost">
                    <Play className="h-4 w-4" />
                    {hero.ctaSecundario}
                  </a>
                </div>

                {/* Prueba social breve */}
                <div className="mt-11 flex w-full max-w-sm items-center justify-center gap-4 border-t hairline pt-6">
                  <div className="flex -space-x-2.5">
                    {["A", "M", "L", "R"].map((l, i) => (
                      <span
                        key={l}
                        className="grid h-8 w-8 place-items-center rounded-full border-2 border-bone font-mono text-[10px] font-semibold text-bone"
                        style={{
                          background: [
                            "#2c2e33",
                            "#3d4048",
                            "#4f535c",
                            "#616670",
                          ][i],
                        }}
                        aria-hidden="true"
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                  <p className="max-w-[26ch] text-left text-[13px] leading-snug text-ink/55">
                    Personas de <strong className="font-semibold text-ink">6 a 80 años</strong>{" "}
                    entrenando con plan propio.
                  </p>
                </div>
              </div>
            </div>

            {/* ---------------- Columna derecha ---------------- */}
            <div className="relative min-h-[58svh] overflow-hidden bg-ink lg:min-h-full">
              {recorte ? (
                <>
                  {/* Fondo de gimnasio: desenfocado y oscuro, solo ambienta */}
                  <Image
                    src={hero.foto.fondo}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="scale-105 object-cover opacity-40 blur-[3px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />

                  {/* Halo lima: separa la silueta del fondo */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(58% 46% at 62% 44%, rgba(232,87,74,0.30) 0%, rgba(232,87,74,0.08) 48%, transparent 74%)",
                    }}
                  />
                </>
              ) : null}

              <Image
                src={hero.foto.src}
                alt={hero.foto.alt}
                fill
                priority
                quality={92}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className={
                  recorte
                    ? "object-contain object-bottom pt-8 sm:pt-12"
                    : "object-cover object-center"
                }
              />
              {/* Degradado inferior para asentar el contenido */}
              {recorte ? (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />
              ) : (
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/80 to-transparent" />
              )}

              {/* Dato de autoridad sobre la foto.
                  En mobile es una línea; desde sm, una tarjeta. */}
              <div className="absolute bottom-12 left-4 right-4 rounded-full bg-bone/95 px-4 py-2.5 backdrop-blur-md sm:hidden">
                <p className="truncate text-[12.5px] font-semibold">
                  Preparador físico
                  <span className="font-normal text-ink/55"> · Club Universitario Córdoba</span>
                </p>
              </div>

              <div className="absolute bottom-20 left-6 hidden max-w-[250px] rounded-2xl bg-bone/95 p-5 backdrop-blur-md sm:block">
                <p className="text-[15px] font-semibold leading-snug">
                  Preparador físico del plantel superior de rugby
                </p>
                <p className="mt-1.5 text-[13px] text-ink/55">Club Universitario Córdoba</p>
              </div>

              {/* Barra lima inferior (guiño al layout de referencia) */}
              <div className="absolute bottom-0 right-0 flex h-9 w-[62%] items-center justify-end gap-1 bg-lime pr-4 sm:w-[52%]">
                <span className="text-[12px] font-medium text-ink/70">Córdoba · Argentina</span>
              </div>
              <div
                className="absolute bottom-0 left-0 h-9 w-[38%] sm:w-[48%]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(115deg, #16171a 0 8px, #2b2d32 8px 16px)",
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
