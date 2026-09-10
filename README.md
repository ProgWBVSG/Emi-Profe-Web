# Web de Emiliano Peralta

Landing page de una sola pantalla para captar consultas por WhatsApp.
Next.js 16 (App Router) + Tailwind v4. Sin base de datos ni backend.

## Correr el proyecto

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## Dónde se edita el contenido

**Todo el texto, los precios y el contacto están en un solo archivo:**
[`lib/content.ts`](lib/content.ts). No hace falta tocar los componentes para
cambiar un precio, sumar una pregunta frecuente o corregir un testimonio.

Los puntos marcados con `TODO` en ese archivo son los que hay que confirmar
antes de publicar:

| Qué | Dónde |
| --- | --- |
| Usuario real de Instagram | `site.instagram` |
| Dominio final | `site.url` |
| Precios de los planes | `planes[].precio` |
| Testimonios reales | `testimonios` |

## Imágenes

Están en `public/images/`. **Todas son fotos de stock (Unsplash) puestas como
placeholder.** Para reemplazarlas alcanza con pisar el archivo manteniendo el
mismo nombre.

Prioridad de reemplazo por fotos reales de Emi:

1. `hero-profe.jpg` — la foto grande del inicio (idealmente recorte sin fondo).
2. `trayectoria.jpg` — Emi trabajando.
3. `srv-*.jpg` — una foto por servicio.

Formato sugerido: JPG o WebP, lado largo ~1600px, menos de 400 KB.

### Foto de portada sin fondo

Cuando esté el recorte de Emi (PNG con transparencia), en `lib/content.ts`:

```ts
foto: {
  src: "/images/emi-recorte.png",
  alt: "Emiliano Peralta",
  modo: "recorte",   // en vez de "foto"
}
```

En modo `recorte` la imagen se apoya abajo sin recortarse y se dibuja un halo
lima detrás de la silueta. En modo `foto` la imagen llena el bloque.

## Estructura

```
app/
  layout.tsx      metadatos, fuentes, JSON-LD para Google
  page.tsx        orden de las secciones
  globals.css     tokens de diseño (colores, tipografía, easings)
components/
  Hero.tsx        portada + navegación
  Nav.tsx         cabecera, barra flotante y menú
  Prueba.tsx      cinta de instituciones + números
  Servicios.tsx   servicios + para quién
  Oferta.tsx      método + planes
  Confianza.tsx   testimonios + trayectoria
  Cierre.tsx      FAQ, CTA final, footer, botón flotante
  Reveal.tsx      animación de entrada al hacer scroll
  ui.tsx          tarjeta y encabezado de sección
lib/content.ts    TODO el contenido editable
scripts/shoot.js  capturas automáticas para revisar el diseño
```

## Sistema de diseño

Definido con tokens en `app/globals.css`:

- **Colores**: `ink` (negro), `bone` (hueso), `lime` (verde ácido de marca).
- **Tipografías**: Archivo para títulos y texto, JetBrains Mono para
  etiquetas y números.
- **Layout**: cada sección es una tarjeta redondeada sobre el fondo lima.
- **Movimiento**: curvas propias (`--ease-out-strong`), animaciones por debajo
  de 300 ms, `scale(0.97)` al presionar botones, y respeto por
  `prefers-reduced-motion`.

Las animaciones de entrada están detrás de la clase `js` en `<html>`: si el
JavaScript falla, el contenido se ve igual. Agregando `?static` a la URL se
desactivan (útil para capturas e impresión).

## Capturas para revisar el diseño

```bash
node scripts/shoot.js "http://localhost:3000/?static" 1440 1000 escritorio
node scripts/shoot.js "http://localhost:3000/?static" 390 844 mobile
```

Requiere Chrome instalado. Guarda las capturas en `../shots`.

## SEO, favicon y llms.txt

- **Favicon**: `app/favicon.ico`, `app/icon.png` y `app/apple-icon.png` se
  generan con `node scripts/gen-icons.js` a partir del mismo diseño del logo
  (`components/icons.tsx`). Si cambia el logo o el color de marca, correr ese
  script de nuevo en vez de editar los PNG a mano.
- **Imagen para compartir** (WhatsApp, redes, buscadores): `app/opengraph-image.tsx`
  la genera en código, sin depender de un archivo de imagen. Editar ese
  archivo para cambiar el texto o el diseño de la imagen.
- **`public/llms.txt`**: resumen del sitio pensado para asistentes de IA
  (ChatGPT, Claude, Perplexity, etc.), siguiendo la convención
  [llms.txt](https://llmstxt.org/). Se sirve automáticamente en
  `/llms.txt`. Actualizarlo a mano cuando cambien datos reales (servicios,
  formación, contacto) en `lib/content.ts`.
- **Datos estructurados**: `app/layout.tsx` incluye JSON-LD de tipo
  `ProfessionalService` y `FAQPage`, para que Google pueda mostrar resultados
  enriquecidos (ficha del negocio, preguntas frecuentes).
- **`app/sitemap.ts`** y **`app/robots.ts`** ya están armados; solo hace falta
  que `site.url` en `lib/content.ts` tenga el dominio real antes de publicar.

## Publicar

La página es estática. Sirve cualquier hosting que soporte Next.js:

- **Vercel**: conectar el repo y listo (incluye optimización de imágenes).
- **Cloudflare / Netlify**: agregar `output: "export"` e
  `images: { unoptimized: true }` en `next.config.ts`, correr `npm run build` y
  subir la carpeta `out/`.

Antes de publicar: completar los `TODO` de `lib/content.ts` y poner el dominio
real en `site.url` (de ahí salen el sitemap, el robots.txt y los metadatos para
compartir en redes).
