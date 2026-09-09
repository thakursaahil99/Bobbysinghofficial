import puppeteer from "puppeteer-core";
const OUT = "C:/Users/user/AppData/Local/Temp/claude/e--Sahil-Templates-Bobby-Singh-Official/b10281ec-8df9-4397-8435-4d870acb33fb/scratchpad";
const b = await puppeteer.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
  defaultViewport: { width: 1440, height: 900 },
});
const p = await b.newPage();
await p.goto("http://localhost:3000/", { waitUntil: "networkidle0", timeout: 60000 });
await new Promise((r) => setTimeout(r, 1800));
for (const [name, y] of [["hero", 0], ["services", 980], ["services2", 1500]]) {
  await p.evaluate((yy) => window.scrollTo({ top: yy, behavior: "instant" }), y);
  await new Promise((r) => setTimeout(r, 700));
  await p.screenshot({ path: `${OUT}/h-${name}.png` });
  console.log("shot", name);
}
await b.close();
