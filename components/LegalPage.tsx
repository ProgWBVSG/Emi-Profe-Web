import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/content";
import { Logo } from "./icons";

/** Envoltorio simple para páginas legales / de error. Header mínimo + footer. */
export default function LegalPage({
  titulo,
  actualizado,
  children,
}: {
  titulo: string;
  actualizado?: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto flex min-h-svh max-w-[1500px] flex-col gap-2 p-2 sm:gap-3 sm:p-3 lg:gap-4 lg:p-4">
      <header className="rounded-[26px] bg-bone lg:rounded-[36px]">
        <div className="flex items-center justify-between px-6 py-5 sm:px-10">
          <Link href="/" className="flex items-center gap-3">
            <Logo className="h-8 w-8 text-ink" />
            <span className="display text-[15px] leading-none tracking-tight sm:text-base">
              EMI
              <br />
              PERALTA
            </span>
          </Link>
          <Link href="/" className="btn btn-ghost">
            Volver al inicio
          </Link>
        </div>
      </header>

      <section className="flex-1 rounded-[26px] bg-bone px-6 py-16 sm:px-10 sm:py-20 lg:rounded-[36px] lg:px-16">
        <div className="mx-auto max-w-2xl">
          <h1 className="display text-[clamp(2rem,4.5vw,3rem)]">
            {titulo}
            <span className="text-lime-2">.</span>
          </h1>
          {actualizado ? (
            <p className="mt-3 text-[13px] text-ink/45">
              Última actualización: {actualizado}
            </p>
          ) : null}

          <div className="prose-body mt-9 flex flex-col gap-6 text-[15px] text-ink/70 [&_h2]:display [&_h2]:mt-4 [&_h2]:text-[1.3rem] [&_h2]:text-ink [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1.5">
            {children}
          </div>
        </div>
      </section>

      <footer className="rounded-[26px] bg-ink px-6 py-8 text-center text-[13px] text-bone/45 sm:px-10 lg:rounded-[36px]">
        © {new Date().getFullYear()} {site.nombre} · {site.ciudad}
      </footer>
    </main>
  );
}
