import { perfiles } from "@/lib/content";
import { Card, SectionHead, pad, FotoTarjeta, GrillaCarrusel } from "./ui";

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

        <GrillaCarrusel
          items={perfiles.items}
          keyFn={(p) => p.titulo}
          columnasDesktop="lg:grid-cols-4"
          render={(p) => (
            <FotoTarjeta img={p.img} alt={p.alt} titulo={p.titulo} texto={p.texto} />
          )}
        />
      </div>
    </Card>
  );
}
