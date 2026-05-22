// Capture each section of the presentation as a full-viewport PNG.
//
// Usage:
//   cd web-cd
//   npm install puppeteer  (one-time, ~150MB Chromium)
//   node tools/capture-slides.mjs
//
// Output: slides/page-00.png ~ page-25.png (1920x1080 by default)

import puppeteer from "puppeteer";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUTPUT = path.join(ROOT, "slides");

// 16:9 PPT-friendly dimensions
const WIDTH = 1920;
const HEIGHT = 1080;
const DPR = 2; // retina for high-quality slides

// Section ids in order — mirrors app.jsx SECTIONS array
const SECTION_IDS = [
  "cover", "numbers", "directions",
  "p1-overview", "p1-flow",
  "p1-decision-01", "p1-decision-02", "p1-decision-03", "p1-outcome",
  "p1-canvas-intro", "p1-canvas", "p1-canvas-b", "p1-canvas-output", "p1-synth",
  "p2-overview",
  "p2-vibe-01", "p2-vibe-02", "p2-vibe-03", "p2-vibe-insight",
  "p2-agent", "p2-agent-b",
  "p2-wrap", "p2-bonus",
  "radar", "commit", "finale",
];

const URL = process.env.SLIDES_URL || "http://localhost:8080/述职报告.html";

async function main() {
  console.log(`📸 Capturing 26 slides at ${WIDTH}x${HEIGHT} @${DPR}x → ${OUTPUT}`);
  console.log(`   Source: ${URL}\n`);

  const browser = await puppeteer.launch({
    headless: "new",
    defaultViewport: { width: WIDTH, height: HEIGHT, deviceScaleFactor: DPR },
  });

  const page = await browser.newPage();
  // Disable scroll-snap during capture (cleaner section anchors)
  await page.evaluateOnNewDocument(() => {
    const style = document.createElement("style");
    style.textContent = `html { scroll-snap-type: none !important; } .section { scroll-snap-align: none !important; }`;
    document.documentElement.appendChild(style);
  });

  await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });

  // Let Babel finish transpiling + React initial render
  await page.waitForSelector("#cover", { timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1500));

  // Force all Reveal animations into the visible state so screenshots don't catch
  // mid-fade frames.
  await page.evaluate(() => {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in"));
  });

  for (let i = 0; i < SECTION_IDS.length; i++) {
    const id = SECTION_IDS[i];
    const filename = `page-${String(i).padStart(2, "0")}-${id}.png`;
    const outPath = path.join(OUTPUT, filename);

    // Scroll the section to viewport top
    await page.evaluate((sectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) throw new Error(`Section #${sectionId} not found`);
      window.scrollTo({ top: el.offsetTop, behavior: "instant" });
    }, id);

    // Wait for layout settle + sticky elements to reposition
    await new Promise((r) => setTimeout(r, 600));

    // Re-force reveal state for any newly intersected elements
    await page.evaluate(() => {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in"));
    });

    await new Promise((r) => setTimeout(r, 200));

    // No clip → captures the current viewport. (clip uses document coords, which
    // would always grab the page-top region and produce 26 identical screenshots.)
    await page.screenshot({
      path: outPath,
      type: "png",
      captureBeyondViewport: false,
    });
    console.log(`  ${String(i + 1).padStart(2, " ")}/${SECTION_IDS.length}  ${filename}`);
  }

  await browser.close();
  console.log(`\n✅ Done. ${SECTION_IDS.length} slides in: ${OUTPUT}`);
  console.log(`\nNext step: Keynote / PowerPoint → Insert → Images → select all 26 PNGs in order.`);
  console.log(`Each image will be 3840×2160 (2x retina) — set slide background to fill.`);
}

main().catch((e) => {
  console.error("❌", e);
  process.exit(1);
});
