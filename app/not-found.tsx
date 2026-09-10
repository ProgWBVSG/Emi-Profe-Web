import Link from "next/link";
import { Logo, Whatsapp } from "@/components/icons";
import { cta, site } from "@/lib/content";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-svh max-w-[1500px] flex-col gap-2 p-2 sm:gap-3 sm:p-3 lg:gap-4 lg:p-4">
      <section className="flex flex-1 flex-col items-center justify-center rounded-[26px] bg-bone px-6 py-24 text-center lg:rounded-[36px]">
        <Logo className="h-12 w-12 text-ink" />

        <p className="display mt-8 text-[clamp(4rem,14vw,8rem)] leading-none">
          404
          <span className="text-lime-2">.</span>
        </p>

        <h1 className="display mt-4 text-[clamp(1.5rem,3.5vw,2.2rem)]">
          Esta página no existe
        </h1>
        <p className="prose-body mt-3 max-w-[42ch] text-[15px] text-ink/60">
          Puede que el enlace esté roto o que la página se haya movido.
          Volvamos a algo que sí funciona.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn btn-ink">
            Volver al inicio
          </Link>
          <a
            href={cta.consulta}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <Whatsapp className="h-4 w-4" />
            Escribirme
          </a>
        </div>
      </section>

      <footer className="rounded-[26px] bg-ink px-6 py-8 text-center text-[13px] text-bone/45 sm:px-10 lg:rounded-[36px]">
        © {new Date().getFullYear()} {site.nombre} · {site.ciudad}
      </footer>
    </main>
  );
}
