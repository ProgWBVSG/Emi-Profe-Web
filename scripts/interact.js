const puppeteer = require("puppeteer-core");
const path = require("path");
const OUT = process.env.SHOT_DIR || path.join(__dirname, "..", "..", "shots");
require("fs").mkdirSync(OUT, { recursive: true });
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const wait = (p, ms) => p.evaluate((m) => new Promise((r) => setTimeout(r, m)), ms);
(async () => {
  const b = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--hide-scrollbars", "--disable-gpu"] });
  const p = await b.newPage();
  const errs = [];
  p.on("pageerror", (e) => errs.push("pageerror: " + e.message));
  p.on("console", (m) => m.type() === "error" && errs.push("console: " + m.text()));
  await p.setViewport({ width: 1280, height: 860 });
  await p.goto("http://localhost:3000/", { waitUntil: "networkidle0" });
  await wait(p, 800);

  // menú
  await p.evaluate(() => [...document.querySelectorAll("button")].find(b => b.textContent.trim() === "Menú")?.click());
  await wait(p, 600);
  await p.screenshot({ path: path.join(OUT, "i-menu.png") });
  await p.keyboard.press("Escape");
  await wait(p, 500);

  // FAQ: abrir la segunda pregunta
  await p.evaluate(() => document.querySelector("#faq").scrollIntoView());
  await wait(p, 1200);
  const before = await p.evaluate(() => document.querySelector('#faq-panel-1').offsetHeight);
  await p.evaluate(() => document.querySelector('[aria-controls="faq-panel-1"]').click());
  await wait(p, 700);
  const after = await p.evaluate(() => document.querySelector('#faq-panel-1').offsetHeight);
  await p.screenshot({ path: path.join(OUT, "i-faq.png") });

  // nav flotante visible tras scrollear
  const navVisible = await p.evaluate(() => {
    const n = document.querySelector('nav.rounded-full')?.parentElement;
    return n ? getComputedStyle(n).opacity : "n/a";
  });
  console.log(JSON.stringify({ faqPanel: { before, after }, navOpacity: navVisible, errs }, null, 1));
  await b.close();
})();
