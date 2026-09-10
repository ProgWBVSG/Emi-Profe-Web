/**
 * Genera todo el set de favicons/íconos a partir del mismo diseño que el
 * logo del sitio (components/icons.tsx: Logo) para que la marca sea
 * consistente en la pestaña del navegador, resultados de búsqueda,
 * accesos directos de celular, etc.
 *
 * Correr con: node scripts/gen-icons.js
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const INK = "#0b0b0c";
const RED = "#e8574a";

/** Cuadrado redondeado con las tres barras. Igual proporción que el logo. */
function svgIcon({ radius = 88, padding = 0 } = {}) {
  const size = 400;
  const p = padding;
  return `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect x="${p}" y="${p}" width="${size - p * 2}" height="${size - p * 2}" rx="${radius}" fill="${INK}"/>
  <rect x="90" y="230" width="50" height="80" rx="25" fill="${RED}"/>
  <rect x="175" y="170" width="50" height="140" rx="25" fill="${RED}"/>
  <rect x="260" y="90" width="50" height="220" rx="25" fill="${RED}"/>
</svg>`;
}

const OUT_APP = path.join(__dirname, "..", "app");
const OUT_PUBLIC = path.join(__dirname, "..", "public");

/** Arma un .ico multi-tamaño a partir de buffers PNG (formato PNG-embebido, soportado desde Windows Vista). */
function buildIco(pngBuffers) {
  const n = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reservado
  header.writeUInt16LE(1, 2); // tipo: ícono
  header.writeUInt16LE(n, 4); // cantidad de imágenes

  const dirEntries = [];
  const imageData = [];
  let offset = 6 + n * 16;

  for (const { size, buf } of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // ancho (0 = 256)
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // alto
    entry.writeUInt8(0, 2); // paleta
    entry.writeUInt8(0, 3); // reservado
    entry.writeUInt16LE(1, 4); // planos de color
    entry.writeUInt16LE(32, 6); // bits por píxel
    entry.writeUInt32LE(buf.length, 8); // tamaño de los datos
    entry.writeUInt32LE(offset, 12); // offset
    dirEntries.push(entry);
    imageData.push(buf);
    offset += buf.length;
  }

  return Buffer.concat([header, ...dirEntries, ...imageData]);
}

(async () => {
  const svgDefault = Buffer.from(svgIcon());
  const svgFullBleed = Buffer.from(svgIcon({ radius: 0 })); // para apple-icon, sin doble redondeo

  // Favicon .ico multi-tamaño (16, 32, 48) — el que usan buscadores y pestañas.
  const sizes = [16, 32, 48];
  const pngBuffers = [];
  for (const size of sizes) {
    const buf = await sharp(svgDefault).resize(size, size).png().toBuffer();
    pngBuffers.push({ size, buf });
  }
  fs.writeFileSync(path.join(OUT_APP, "favicon.ico"), buildIco(pngBuffers));

  // Ícono estándar (Next.js lo sirve como /icon.png automáticamente).
  await sharp(svgDefault)
    .resize(512, 512)
    .png()
    .toFile(path.join(OUT_APP, "icon.png"));

  // Apple touch icon: cuadrado sin redondear (iOS aplica su propia máscara).
  await sharp(svgFullBleed)
    .resize(180, 180)
    .png()
    .toFile(path.join(OUT_APP, "apple-icon.png"));

  // Para el manifest (Android / PWA).
  await sharp(svgDefault)
    .resize(192, 192)
    .png()
    .toFile(path.join(OUT_PUBLIC, "icon-192.png"));
  await sharp(svgDefault)
    .resize(512, 512)
    .png()
    .toFile(path.join(OUT_PUBLIC, "icon-512.png"));

  console.log("Íconos generados: favicon.ico, icon.png, apple-icon.png, icon-192.png, icon-512.png");
})();
