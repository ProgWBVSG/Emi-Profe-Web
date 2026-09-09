import type { Metadata, Viewport } from "next";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono-ui",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const descripcion =
  "Emiliano Peralta, profe de Educación Física en Córdoba. Planes de entrenamiento online y presenciales para todas las edades: readaptación de lesiones, adultos mayores, salud y rendimiento deportivo.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Emiliano Peralta · Entrenamiento para la salud y el deporte",
    template: "%s · Emiliano Peralta",
  },
  description: descripcion,
  keywords: [
    "entrenador personal Córdoba",
    "preparador físico",
    "plan de entrenamiento online",
    "readaptación de lesiones",
    "entrenamiento adultos mayores",
    "profe de educación física",
  ],
  authors: [{ name: site.nombre }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: site.nombre,
    title: "Emiliano Peralta · Entrenamiento para la salud y el deporte",
    description: descripcion,
  },
  twitter: {
    card: "summary_large_image",
    title: "Emiliano Peralta · Entrenamiento para la salud y el deporte",
    description: descripcion,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#e8574a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.nombre,
  description: descripcion,
  url: site.url,
  telephone: "+54 9 " + site.telefono,
  email: site.email,
  areaServed: "Córdoba, Argentina",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Córdoba",
    addressCountry: "AR",
  },
  knowsAbout: [
    "Preparación física",
    "Readaptación de lesiones",
    "Entrenamiento de fuerza",
    "Actividad física adaptada",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-AR"
      // El script de <head> agrega la clase "js" antes de hidratar.
      suppressHydrationWarning
      className={`${montserrat.variable} ${mono.variable} h-full antialiased`}
    >
      <head>
        {/* Marca que el JS está vivo: habilita las animaciones de entrada.
            Va antes del primer pintado para que no haya parpadeo. */}
        <script
          dangerouslySetInnerHTML={{
            // ?static desactiva las animaciones de entrada (útil para
            // capturas, impresión y auditorías).
            __html:
              "if(!location.search.includes('static')){document.documentElement.classList.add('js')}",
          }}
        />
      </head>
      <body className="min-h-full">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
