"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, site, cta } from "@/lib/content";
import { Whatsapp } from "./icons";

/** Foto de Emi en el header, en vez del logo abstracto. */
function Avatar({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <Image
      src="/images/emi-avatar.png"
      alt={site.nombre}
      width={64}
      height={64}
      className={`rounded-full border border-ink/10 object-cover ${className}`}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Cabecera dentro de la tarjeta del hero                              */
/* ------------------------------------------------------------------ */
export function HeroHeader({ onOpenMenu }: { onOpenMenu: () => void }) {
  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b hairline">
      <div className="flex items-stretch">
        <a
          href="#top"
          className="flex items-center gap-3 border-r hairline px-5 py-5 sm:px-7"
        >
          <Avatar className="h-9 w-9" />
          <span className="display text-[15px] leading-none tracking-tight sm:text-base">
            EMI
            <br />
            PERALTA
          </span>
        </a>

        <button
          type="button"
          onClick={onOpenMenu}
          className="btn group flex items-center gap-3 px-5 sm:px-7"
          aria-label="Abrir menú"
        >
          <span className="flex flex-col gap-[5px]" aria-hidden="true">
            <span className="block h-[2px] w-5 bg-ink" />
            <span className="block h-[2px] w-5 bg-ink" />
          </span>
          <span className="hidden sm:inline">Menú</span>
        </button>

        <div className="ml-auto flex items-center pr-3 sm:pr-5">
          <a
            href={cta.principal}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lime px-5 py-3 text-[11px] sm:px-6"
          >
            <Whatsapp className="h-4 w-4" />
            <span className="hidden sm:inline">Escribime</span>
          </a>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Barra flotante que aparece al scrollear                             */
/* ------------------------------------------------------------------ */
export function StickyNav({ onOpenMenu }: { onOpenMenu: () => void }) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!shown}
      inert={!shown}
      className="fixed inset-x-0 top-3 z-40 flex justify-center px-3 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] sm:top-4"
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(-120%)",
        pointerEvents: shown ? "auto" : "none",
      }}
    >
      <nav className="flex max-w-full items-center gap-1 rounded-full border border-ink/10 bg-bone/85 p-1.5 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <a href="#top" className="ml-1 mr-1 flex shrink-0 items-center" aria-label="Inicio">
          <Avatar className="h-8 w-8" />
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block rounded-full px-4 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink/70 transition-colors duration-200 hover:bg-ink/5 hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={onOpenMenu}
          className="btn btn-ghost px-4 py-2.5 lg:hidden"
        >
          Menú
        </button>

        <a
          href={cta.principal}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ink px-5 py-2.5 text-[11px]"
        >
          <Whatsapp className="h-4 w-4" />
          <span className="hidden sm:inline">Escribime</span>
        </a>
      </nav>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Panel de menú                                                       */
/* ------------------------------------------------------------------ */
export function MenuOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      className="fixed inset-0 z-50"
      style={{ pointerEvents: open ? "auto" : "none" }}
      aria-hidden={!open}
      inert={!open}
    >
      {/* Fondo */}
      <button
        type="button"
        tabIndex={-1}
        aria-label="Cerrar menú"
        onClick={onClose}
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-300"
        style={{ opacity: open ? 1 : 0 }}
      />

      {/* Panel */}
      <div
        className="absolute inset-x-3 top-3 origin-top rounded-[26px] bg-bone p-6 shadow-2xl transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] sm:inset-x-auto sm:right-4 sm:top-4 sm:w-[380px] sm:p-8"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? "scale(1) translateY(0)" : "scale(0.96) translateY(-8px)",
        }}
      >
        <div className="mb-7 flex items-center justify-between">
          <span className="eyebrow text-ink/50">Navegación</span>
          <button
            type="button"
            onClick={onClose}
            className="btn btn-ghost h-9 w-9 p-0"
            aria-label="Cerrar menú"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
              <path
                d="m6 6 12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col">
          {nav.map((item, i) => (
            <li key={item.href} className="border-b hairline last:border-0">
              <a
                href={item.href}
                onClick={onClose}
                className="display block py-3.5 text-[28px] leading-none transition-[color,transform] duration-200 hover:translate-x-1 hover:text-lime-2 sm:text-[30px]"
                style={{ transitionDelay: open ? `${i * 30}ms` : "0ms" }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={cta.principal}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="btn btn-ink mt-7 w-full"
        >
          <Whatsapp className="h-4 w-4" />
          Escribime por WhatsApp
        </a>

        <p className="mt-4 text-center font-mono text-[11px] text-ink/45">
          {site.email}
        </p>
      </div>
    </div>
  );
}
