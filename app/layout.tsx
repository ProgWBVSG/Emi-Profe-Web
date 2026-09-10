import type { Metadata, Viewport } from "next";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site, faq } from "@/lib/content";

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

const titulo = "Emiliano Peralta · Entrenamiento para la salud y el deporte";
const descripcion =
  "Emiliano Peralta, profe de Educación Física en Córdoba. Planes de entrenamiento online y presenciales para todas las edades: readaptación de lesiones, adultos mayores, salud y rendimiento deportivo.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: titulo,
    template: "%s · Emiliano Peralta",
  },
  description: descripcion,
  keywords: [
    "entrenador personal Córdoba",
    "preparador físico Córdoba",
    "plan de entrenamiento online",
    "readaptación de lesiones",
    "entrenamiento adultos mayores",
    "profe de educación física",
    "preparador físico de rugby",
    "personal trainer Córdoba Argentina",
  ],
  authors: [{ name: site.nombre, url: site.url }],
  creator: site.nombre,
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: site.nombre,
    url: site.url,
    title: titulo,
    description: descripcion,
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: descripcion,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#e8574a",
};

/** Ficha del negocio, para que Google, Bing y asistentes de IA entiendan
 *  quién es Emi, dónde trabaja y qué ofrece. */
const jsonLdNegocio = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": site.url + "/#negocio",
  name: site.nombre,
  image: site.url + "/opengraph-image",
  description: descripcion,
  url: site.url,
  telephone: "+54 9 " + site.telefono,
  email: site.email,
  areaServed: "Córdoba, Argentina",
  priceRange: "$$",
  sameAs: [site.instagram],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Córdoba",
    addressCountry: "AR",
  },
  founder: {
    "@type": "Person",
    name: site.nombre,
    jobTitle: "Profesor de Educación Física",
  },
  knowsAbout: [
    "Preparación física",
    "Readaptación de lesiones",
    "Entrenamiento de fuerza",
    "Actividad física adaptada",
    "Entrenamiento de adultos mayores",
    "Preparación física de rugby",
  ],
};

/** Las mismas preguntas que aparecen en el botón de FAQ del sitio, para
 *  que puedan salir como resultado enriquecido en Google. */
const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdNegocio) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      </body>
    </html>
  );
}
