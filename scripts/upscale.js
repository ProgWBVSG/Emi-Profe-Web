/* Reescala el recorte del hero con lanczos3 + enfoque suave.
   No inventa detalle (para eso hace falta un upscaler con IA), pero evita
   el escalado pobre del navegador y recupera definición en los bordes. */
const sharp = require("sharp");
const [src, dst, factorArg] = process.argv.slice(2);
const factor = Number(factorArg || 2.5);

(async () => {
  const img = sharp(src);
  const { width, height } = await img.metadata();
  const w = Math.round(width * factor);
  const h = Math.round(height * factor);

  await sharp(src)
    .resize(w, h, { kernel: "lanczos3", fit: "fill" })
    .sharpen({ sigma: 1.1, m1: 0.5, m2: 1.6, x1: 2, y2: 8 })
    .png({ compressionLevel: 9, palette: false })
    .toFile(dst);

  const out = await sharp(dst).metadata();
  console.log(`${width}x${height} -> ${out.width}x${out.height}`);
})();
