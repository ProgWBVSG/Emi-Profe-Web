import Image from "next/image";
import { perfiles } from "@/lib/content";
import Reveal from "./Reveal";
import { Card, SectionHead, pad } from "./ui";

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

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {perfiles.items.map((p, i) => (
            <Reveal
              key={p.titulo}
              delay={(i % 4) * 60}
              className="group relative min-h-[290px] overflow-hidden rounded-[22px]"
            >
              <Image
                src={p.img}
                alt={p.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.23,1,0.32,1)] motion-safe:group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/72 to-ink/35" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="display text-[1.35rem] text-bone">{p.titulo}</h3>
                <p className="prose-body mt-2 text-[13.5px] text-bone/65">{p.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Card>
  );
}
