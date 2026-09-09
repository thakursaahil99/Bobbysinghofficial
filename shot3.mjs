import puppeteer from "puppeteer-core";
const OUT = "C:/Users/user/AppData/Local/Temp/claude/e--Sahil-Templates-Bobby-Singh-Official/b10281ec-8df9-4397-8435-4d870acb33fb/scratchpad";
const b = await puppeteer.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
  defaultViewport: { width: 390, height: 844, isMobile: true, hasTouch: true },
});
const p = await b.newPage();
await p.goto("http://localhost:3000/", { waitUntil: "networkidle0", timeout: 60000 });
await new Promise((r) => setTimeout(r, 1800));
await p.screenshot({ path: `${OUT}/m-hero.png` });
await p.evaluate(() => window.scrollTo({ top: 900, behavior: "instant" }));
await new Promise((r) => setTimeout(r, 600));
await p.screenshot({ path: `${OUT}/m-services.png` });
console.log("done");
await b.close();
