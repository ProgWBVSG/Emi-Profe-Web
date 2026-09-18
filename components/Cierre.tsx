"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { faq, finalCta, cta, site, nav } from "@/lib/content";
import Reveal from "./Reveal";
import { Card, pad } from "./ui";
import { Plus, Whatsapp, Mail, Instagram, Logo } from "./icons";

/** FAQ en un botón flotante (abajo a la derecha), como el de WhatsApp. */
export function FaqFab() {
  const [panel, setPanel] = useState(false);
  const [abierta, setAbierta] = useState<number | null>(null);

  useEffect(() => {
    if (!panel) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPanel(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [panel]);

  return (
    <>
      {/* Fondo para cerrar tocando afuera */}
      <button
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        onClick={() => setPanel(false)}
        className="fixed inset-0 z-40 bg-ink/30 transition-opacity duration-300"
        style={{ opacity: panel ? 1 : 0, pointerEvents: panel ? "auto" : "none" }}
      />

      {/* Panel */}
      <div
        id="faq-panel-flotante"
        aria-hidden={!panel}
        inert={!panel}
        className="fixed bottom-[150px] right-4 z-50 flex max-h-[70vh] w-[min(380px,calc(100vw-2rem))] origin-bottom-right flex-col overflow-hidden rounded-[22px] bg-bone shadow-[0_20px_60px_-15px_rgba(0,0,0,0.45)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] lg:bottom-[92px] lg:right-5"
        style={{
          opacity: panel ? 1 : 0,
          transform: panel ? "scale(1) translateY(0)" : "scale(0.95) translateY(10px)",
          pointerEvents: panel ? "auto" : "none",
        }}
      >
        <div className="flex items-center justify-between border-b hairline px-5 py-4">
          <p className="text-[15px] font-semibold">Preguntas frecuentes</p>
          <button
            type="button"
            onClick={() => setPanel(false)}
            aria-label="Cerrar preguntas frecuentes"
            className="btn btn-ghost h-8 w-8 p-0"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col overflow-y-auto px-5">
          {faq.map((f, i) => {
            const open = abierta === i;
            return (
              <li key={f.q} className="border-b hairline last:border-0">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={"faqf-" + i}
                  onClick={() => setAbierta(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="text-[14.5px] font-semibold leading-snug">{f.q}</span>
                  <span
                    className={
                      "grid h-7 w-7 shrink-0 place-items-center rounded-full transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] " +
                      (open ? "bg-lime text-ink" : "bg-ink text-lime")
                    }
                    style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
                    aria-hidden="true"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </span>
                </button>
                <div id={"faqf-" + i} className="acc-panel" data-open={open}>
                  <div>
                    <p className="prose-body pb-4 text-[13.5px] text-ink/60">{f.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <a
          href={cta.consulta}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ink m-4 mt-3"
        >
          <Whatsapp className="h-4 w-4" />
          Tengo otra duda
        </a>
      </div>

      {/* Botón flotante */}
      <button
        type="button"
        onClick={() => setPanel((v) => !v)}
        aria-expanded={panel}
        aria-controls="faq-panel-flotante"
        aria-label="Preguntas frecuentes"
        className="btn btn-ink fixed bottom-[88px] right-4 z-50 h-12 w-12 p-0 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.5)] lg:bottom-5 lg:right-5"
      >
        <span className="display text-[19px] leading-none text-lime">?</span>
      </button>
    </>
  );
}

export function CtaFinal() {
  return (
    <Card tone="ink" id="contacto">
      <Image
        src="/images/cta-final.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/85 to-ink/60" />

      <div className={`relative ${pad} text-center`}>
        <Reveal>
          <h2 className="display mx-auto max-w-[16ch] text-[clamp(2.6rem,8vw,6rem)]">
            {finalCta.titulo}
          </h2>
        </Reveal>
        <Reveal delay={70}>
          <p className="prose-body mx-auto mt-6 max-w-[46ch] text-[15px] text-bone/65 sm:text-base">
            {finalCta.texto}
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={cta.principal}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lime px-8 py-5"
            >
              <Whatsapp className="h-4 w-4" />
              {finalCta.boton}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="btn border border-bone/25 px-8 py-5 text-bone transition-colors hover:bg-bone hover:text-ink"
            >
              <Mail className="h-4 w-4" />
              Mandar un mail
            </a>
          </div>
        </Reveal>
      </div>
    </Card>
  );
}

export function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="rounded-[26px] bg-ink px-6 py-12 text-bone sm:px-10 sm:py-14 lg:rounded-[36px] lg:px-16">
      <div className="grid justify-items-center gap-10 border-b border-bone/12 pb-10 text-center lg:grid-cols-3">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3">
            <Logo className="h-9 w-9 text-bone" />
            <span className="display text-[15px] leading-none">
              EMI
              <br />
              PERALTA
            </span>
          </div>
          <p className="prose-body mx-auto mt-5 max-w-[34ch] text-[14px] text-bone/55">
            {site.rol}. Planes online y presenciales en {site.ciudad}.
          </p>
        </div>

        <nav aria-label="Secciones del sitio" className="flex flex-col items-center">
          <p className="text-[14px] font-semibold text-bone">Secciones</p>
          <ul className="mt-4 flex flex-col items-center gap-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-[14px] text-bone/60 transition-colors duration-200 hover:text-lime"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col items-center">
          <p className="text-[14px] font-semibold text-bone">Contacto</p>
          <ul className="mt-4 flex flex-col items-center gap-3">
            <li>
              <a
                href={cta.consulta}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-[14px] text-bone/60 transition-colors duration-200 hover:text-lime"
              >
                <Whatsapp className="h-4 w-4" />
                {site.telefono}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2.5 text-[14px] text-bone/60 transition-colors duration-200 hover:text-lime"
              >
                <Mail className="h-4 w-4" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-[14px] text-bone/60 transition-colors duration-200 hover:text-lime"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 pt-7 text-center text-[13px] text-bone/35 sm:flex-row sm:justify-center">
        <p>
          © {anio} {site.nombre}
        </p>
        <span className="hidden sm:inline">·</span>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
          <a href="/privacidad" className="transition-colors duration-200 hover:text-lime">
            Privacidad
          </a>
          <a href="/terminos" className="transition-colors duration-200 hover:text-lime">
            Términos
          </a>
          <span>Técnico Universitario en Actividad Física · UPC</span>
        </div>
      </div>
    </footer>
  );
}

/** Botón flotante de WhatsApp para mobile. */
export function WhatsappFab() {
  return (
    <a
      href={cta.principal}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="btn btn-lime fixed bottom-4 right-4 z-30 h-14 w-14 p-0 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.5)] lg:hidden"
    >
      <Whatsapp className="h-6 w-6" />
    </a>
  );
}
