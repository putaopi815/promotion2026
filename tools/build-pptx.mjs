// Assemble the captured PNGs into a single 16:9 .pptx file.
//
// Usage:
//   cd web-cd
//   node tools/capture-slides.mjs   # (1) generate PNGs
//   node tools/build-pptx.mjs       # (2) assemble PPTX

import pptxgen from "pptxgenjs";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SLIDES_DIR = path.join(ROOT, "slides");
const OUT_FILE = path.join(SLIDES_DIR, "述职报告.pptx");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.333 x 7.5 inches = 16:9
pres.title = "晋升 P7 述职报告 — Fancy Liu";
pres.author = "Fancy Liu";
pres.company = "Mira";

// Slide dimensions in inches (matches LAYOUT_WIDE)
const SLIDE_W = 13.333;
const SLIDE_H = 7.5;

const pngs = fs.readdirSync(SLIDES_DIR)
  .filter((f) => f.startsWith("page-") && f.endsWith(".png"))
  .sort();

if (pngs.length === 0) {
  console.error("❌ No page-*.png files found in slides/. Run capture-slides.mjs first.");
  process.exit(1);
}

console.log(`🧱 Building PPTX with ${pngs.length} slides…`);

for (const filename of pngs) {
  const slide = pres.addSlide();
  slide.background = { color: "F4EFE6" }; // matches site bg-1 for letterbox safety
  slide.addImage({
    path: path.join(SLIDES_DIR, filename),
    x: 0,
    y: 0,
    w: SLIDE_W,
    h: SLIDE_H,
    sizing: { type: "cover", w: SLIDE_W, h: SLIDE_H }
  });
  console.log(`  + ${filename}`);
}

await pres.writeFile({ fileName: OUT_FILE });
console.log(`\n✅ ${OUT_FILE}`);
