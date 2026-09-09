import puppeteer from "puppeteer-core";

const OUT = "C:/Users/user/AppData/Local/Temp/claude/e--Sahil-Templates-Bobby-Singh-Official/b10281ec-8df9-4397-8435-4d870acb33fb/scratchpad";
const pages = process.argv.slice(2);

const b = await puppeteer.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
  defaultViewport: { width: 1440, height: 900 },
});
const p = await b.newPage();
for (const route of pages) {
  const name = route === "/" ? "home" : route.replace(/\//g, "_").replace(/^_/, "");
  await p.goto("http://localhost:3000" + route, { waitUntil: "networkidle0", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 1500));
  await p.evaluate(async () => {
    await new Promise((res) => {
      let y = 0;
      const t = setInterval(() => {
        window.scrollTo({ top: y, behavior: "instant" });
        y += 700;
        if (y > document.body.scrollHeight) { clearInterval(t); res(); }
      }, 60);
    });
  });
  await new Promise((r) => setTimeout(r, 800));
  await p.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await new Promise((r) => setTimeout(r, 500));
  await p.screenshot({ path: `${OUT}/v-${name}.png`, fullPage: true });
  console.log("shot", name);
}
await b.close();
