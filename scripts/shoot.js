const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const OUT = process.env.SHOT_DIR || path.join(__dirname, "..", "..", "shots");
const URL = process.argv[2] || "http://localhost:3000/?static";
const W = Number(process.argv[3] || 1440);
const H = Number(process.argv[4] || 1000);
const TAG = process.argv[5] || "d";

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: "new",
    args: ["--hide-scrollbars", "--disable-gpu"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: W, height: H, deviceScaleFactor: 1 });
  await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });
  await page.evaluate(() => new Promise((r) => setTimeout(r, 1200)));

  const total = await page.evaluate(() => document.documentElement.scrollHeight);
  const slices = Math.ceil(total / H);
  for (let i = 0; i < slices; i++) {
    const y = i * H;
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await page.evaluate(() => new Promise((r) => setTimeout(r, 350)));
    await page.screenshot({ path: path.join(OUT, `${TAG}-${String(i).padStart(2, "0")}.png`) });
  }
  console.log(`total=${total} slices=${slices}`);
  await browser.close();
})();
