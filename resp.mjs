import puppeteer from "puppeteer-core";

const OUT =
  "C:/Users/user/AppData/Local/Temp/claude/e--Sahil-Templates-Bobby-Singh-Official/b10281ec-8df9-4397-8435-4d870acb33fb/scratchpad/resp";
import { mkdirSync } from "fs";
mkdirSync(OUT, { recursive: true });

const routes = [
  "/",
  "/vision",
  "/consultancies",
  "/consultancies/healthcare",
  "/consultancies/cafes",
  "/consultancies/corporate",
  "/consultancies/institutions",
  "/ifo",
  "/events-media",
  "/achievements",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
];
const widths = [320, 375, 414, 768];
const shotWidth = 390;

const b = await puppeteer.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});

const problems = [];

for (const route of routes) {
  const name = route === "/" ? "home" : route.slice(1).replace(/\//g, "-");
  for (const w of widths) {
    const p = await b.newPage();
    await p.setViewport({ width: w, height: 800, deviceScaleFactor: 1, isMobile: w < 768, hasTouch: w < 768 });
    await p.goto("http://localhost:3007" + route, { waitUntil: "networkidle0", timeout: 60000 });
    await new Promise((r) => setTimeout(r, 900));
    // dismiss popup if present
    await p.evaluate(() => {
      const d = document.querySelector('[role="dialog"]');
      if (d) {
        const btn = d.parentElement?.querySelector('button[aria-label="Close"]');
        btn?.click();
      }
      try { sessionStorage.setItem("bs-lead-popup-seen", "1"); } catch {}
    });
    await new Promise((r) => setTimeout(r, 200));
    const info = await p.evaluate((vw) => {
      const de = document.documentElement;
      const overflow = de.scrollWidth - de.clientWidth;
      const wide = [];
      const all = document.body.querySelectorAll("*");
      const clipsHoriz = (node) => {
        for (let n = node.parentElement; n; n = n.parentElement) {
          const o = getComputedStyle(n).overflowX;
          if (o === "hidden" || o === "clip" || o === "auto" || o === "scroll")
            return true;
        }
        return false;
      };
      for (const el of all) {
        const r = el.getBoundingClientRect();
        if (r.right > vw + 1 && el.offsetParent !== null) {
          const cs = getComputedStyle(el);
          if (cs.position === "fixed") continue;
          if (clipsHoriz(el)) continue;
          wide.push(
            `${el.tagName.toLowerCase()}.${(el.className || "").toString().split(" ").slice(0, 3).join(".")} w=${Math.round(r.width)} right=${Math.round(r.right)}`,
          );
          if (wide.length > 6) break;
        }
      }
      return { overflow, wide };
    }, w);
    if (info.overflow > 1 || info.wide.length) {
      problems.push(`${route} @${w}: overflow=${info.overflow}px | ${info.wide.join(" ; ")}`);
    }
    await p.close();
  }
  // one mobile screenshot
  const p = await b.newPage();
  await p.setViewport({ width: shotWidth, height: 800, isMobile: true, hasTouch: true });
  await p.goto("http://localhost:3007" + route, { waitUntil: "networkidle0", timeout: 60000 });
  await p.evaluate(() => { try { sessionStorage.setItem("bs-lead-popup-seen", "1"); } catch {} });
  await new Promise((r) => setTimeout(r, 700));
  await p.evaluate(async () => {
    await new Promise((res) => {
      let y = 0;
      const t = setInterval(() => {
        window.scrollTo({ top: y, behavior: "instant" });
        y += 600;
        if (y > document.body.scrollHeight) { clearInterval(t); res(); }
      }, 40);
    });
  });
  await p.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await new Promise((r) => setTimeout(r, 400));
  await p.screenshot({ path: `${OUT}/${name}.png`, fullPage: true });
  await p.close();
  console.log("done", route);
}

await b.close();
console.log("\n===== PROBLEMS =====");
console.log(problems.length ? problems.join("\n") : "none");
