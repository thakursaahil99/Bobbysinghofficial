import puppeteer from "puppeteer-core";
const OUT = "C:/Users/user/AppData/Local/Temp/claude/e--Sahil-Templates-Bobby-Singh-Official/b10281ec-8df9-4397-8435-4d870acb33fb/scratchpad";
const b = await puppeteer.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
for (const [w, h, tag] of [[1440, 900, "1440"], [1024, 780, "1024"], [390, 844, "mob"]]) {
  const p = await b.newPage();
  await p.setViewport({ width: w, height: h });
  await p.goto("http://localhost:3000/", { waitUntil: "networkidle0", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 1600));
  await p.screenshot({ path: `${OUT}/hdr-${tag}-top.png`, clip: { x: 0, y: 0, width: w, height: 90 } });
  // scrolled state
  await p.evaluate(() => window.scrollTo({ top: 400, behavior: "instant" }));
  await new Promise((r) => setTimeout(r, 500));
  await p.screenshot({ path: `${OUT}/hdr-${tag}-scrolled.png`, clip: { x: 0, y: 0, width: w, height: 90 } });
  console.log("shot", tag);
  await p.close();
}
await b.close();
