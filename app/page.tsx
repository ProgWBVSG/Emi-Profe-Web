import Hero from "@/components/Hero";
import { Perfiles } from "@/components/Perfiles";
import { Formacion } from "@/components/Formacion";
import { Experiencia } from "@/components/Experiencia";
import { Metodo, Servicios, Planes } from "@/components/Oferta";
import { Testimonios, SobreMi } from "@/components/Confianza";
import { FaqFab, CtaFinal, Footer, WhatsappFab } from "@/components/Cierre";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-[1500px] flex-col gap-2 p-2 sm:gap-3 sm:p-3 lg:gap-4 lg:p-4">
      <Hero />
      <Perfiles />
      <Formacion />
      <Experiencia />
      <Metodo />
      <Servicios />
      <Planes />
      <SobreMi />
      <Testimonios />
      <CtaFinal />
      <Footer />
      <WhatsappFab />
      <FaqFab />
    </main>
  );
}
