import Image from "next/image";
import { perfiles } from "@/lib/content";
import Reveal from "./Reveal";
import { Card, SectionHead, pad } from "./ui";

function Tarjeta({
  img,
  alt,
  titulo,
  texto,
  className = "",
}: {
  img: string;
  alt: string;
  titulo: string;
  texto: string;
  className?: string;
}) {
  return (
    <div className={`group relative min-h-[290px] overflow-hidden rounded-[22px] ${className}`}>
      <Image
        src={img}
        alt={alt}
        fill
        sizes="(max-width: 640px) 84vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.23,1,0.32,1)] motion-safe:group-hover:scale-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/72 to-ink/35" />

      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="display text-[1.35rem] text-bone">{titulo}</h3>
        <p className="prose-body mt-2 text-[13.5px] text-bone/65">{texto}</p>
      </div>
    </div>
  );
}

export function Perfiles() {
  return (
    <Card id="perfiles" tone="ink">
      <div className={pad}>
        <SectionHead
          tone="ink"
          titulo={
            <>
              {perfiles.titulo}
              <span className="text-lime">.</span>
            </>
          }
          bajada={perfiles.bajada}
        />

        {/* Mobile: carrusel horizontal con scroll-snap, una tarjeta a la vez. */}
        <Reveal
          as="div"
          className="no-scrollbar -mx-6 mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-2 sm:hidden"
        >
          {perfiles.items.map((p) => (
            <Tarjeta
              key={p.titulo}
              img={p.img}
              alt={p.alt}
              titulo={p.titulo}
              texto={p.texto}
              className="w-[84vw] shrink-0 snap-center"
            />
          ))}
        </Reveal>

        {/* Puntos indicadores del carrusel (solo decorativos, guían la vista). */}
        <div className="mt-4 flex justify-center gap-1.5 sm:hidden" aria-hidden="true">
          {perfiles.items.map((p) => (
            <span key={p.titulo} className="h-1.5 w-1.5 rounded-full bg-bone/25" />
          ))}
        </div>

        {/* Tablet / desktop: grilla como antes. */}
        <div className="mt-12 hidden gap-3 sm:grid sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {perfiles.items.map((p, i) => (
            <Reveal key={p.titulo} delay={(i % 4) * 60}>
              <Tarjeta img={p.img} alt={p.alt} titulo={p.titulo} texto={p.texto} />
            </Reveal>
          ))}
        </div>
      </div>
    </Card>
  );
}
