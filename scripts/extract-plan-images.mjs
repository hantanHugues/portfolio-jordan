import { execFileSync } from "node:child_process";
import { mkdirSync, rmSync, readdirSync, renameSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const PDF_DIR = "C:\\Users\\HP ELITEBOOK\\Documents\\projet cv\\pdf";
const OUT_DIR = path.resolve("public/projets");
const TMP_DIR = path.resolve("scripts/tmp-render/pipeline");

mkdirSync(TMP_DIR, { recursive: true });

// height = null means "no crop" (page has no client-identifying cartouche)
const jobs = [
  {
    slug: "maison-individuelle-fort-mahon-plage",
    name: "01-plan-fondation.png",
    pdf: "A3 Plan de structure (2).pdf",
    page: 1,
    cropHeight: 1610,
  },
  {
    slug: "maison-individuelle-fort-mahon-plage",
    name: "02-ferraillage-poteau.png",
    pdf: "A4 Plans d'armatures..pdf",
    page: 2,
    cropHeight: null,
  },
  {
    slug: "trois-ouvertures-guesnain",
    name: "01-plan-rdc-projet.png",
    pdf: "A4 Plans de structures (3).pdf",
    page: 2,
    cropHeight: 1130,
  },
  {
    slug: "trois-ouvertures-guesnain",
    name: "02-ferraillage-poutre.png",
    pdf: "A4 Plans de feraillages.pdf",
    page: 2,
    cropHeight: null,
  },
  {
    slug: "extension-ba-wannehain",
    name: "01-plan-fondation.png",
    pdf: "A4 Plans de structures (2).pdf",
    page: 1,
    cropHeight: 1110,
  },
  {
    slug: "charpente-bois-ronchin",
    name: "01-structure-primaire.png",
    pdf: "A3 Plans Structures.pdf",
    page: 3,
    cropHeight: 1610,
  },
  {
    slug: "extension-ba-saint-python",
    name: "01-plan-fondation.png",
    pdf: "A4 Plans de Structures (1).pdf",
    page: 1,
    cropHeight: 1110,
  },
  {
    slug: "extension-ba-saint-python",
    name: "02-ferraillage-dalle.png",
    pdf: "A4 Plans de Structures (1).pdf",
    page: 5,
    cropHeight: 1600,
  },
  {
    slug: "reprise-structure-bois-lille",
    name: "01-vue-de-face-projet.png",
    pdf: "A4 plans structures.pdf",
    page: 2,
    cropHeight: 1110,
  },
  {
    slug: "surelevation-maison-mitoyenne-lille",
    name: "01-coupe-a-a.png",
    pdf: "A4 Plans de Structures.pdf",
    page: 7,
    cropHeight: 1110,
  },
  {
    slug: "surelevation-maison-mitoyenne-lille",
    name: "02-ferraillage-chainage.png",
    pdf: "A4 Plans du chainage BA de 22 x 31.3 cm ht.pdf",
    page: 1,
    cropHeight: null,
    rotate: -90,
  },
];

for (const job of jobs) {
  const pdfPath = path.join(PDF_DIR, job.pdf);
  const tmpPrefix = path.join(TMP_DIR, "render");
  execFileSync(
    "pdftoppm",
    ["-png", "-r", "150", "-f", String(job.page), "-l", String(job.page), pdfPath, tmpPrefix],
    { stdio: "inherit" }
  );

  const rendered = readdirSync(TMP_DIR).find((f) => f.startsWith("render-"));
  if (!rendered) throw new Error(`No render produced for ${job.slug}/${job.name}`);
  const renderedPath = path.join(TMP_DIR, rendered);

  const outDir = path.join(OUT_DIR, job.slug);
  mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, job.name);

  let pipeline = sharp(renderedPath);
  if (job.rotate) {
    pipeline = pipeline.rotate(job.rotate);
  }
  if (job.cropHeight) {
    const meta = await pipeline.clone().metadata();
    pipeline = pipeline.extract({ left: 0, top: 0, width: meta.width, height: job.cropHeight });
  }
  await pipeline.png({ compressionLevel: 9 }).toFile(outPath);

  rmSync(renderedPath);
  console.log("wrote", outPath);
}

rmSync(TMP_DIR, { recursive: true, force: true });
console.log("done");
