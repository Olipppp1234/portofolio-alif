import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const LEBAR_MAKS = 1600;       // lebar terbesar (px)
const BATAS_KB = 300;          // file di bawah ini dilewati

function* semua(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* semua(p);
    else yield p;
  }
}

for (const f of semua("public")) {
  const ext = path.extname(f).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

  const sebelum = fs.statSync(f).size;
  if (sebelum < BATAS_KB * 1024) continue;

  let img = sharp(fs.readFileSync(f)).rotate().resize({ width: LEBAR_MAKS, withoutEnlargement: true });
  img = ext === ".png"
    ? img.png({ compressionLevel: 9, palette: true, quality: 85 })
    : img.jpeg({ quality: 78, mozjpeg: true });

  const hasil = await img.toBuffer();
  if (hasil.length < sebelum) {
    fs.writeFileSync(f, hasil);
    console.log(`${f}: ${(sebelum / 1048576).toFixed(1)} MB -> ${(hasil.length / 1048576).toFixed(2)} MB`);
  }
}
console.log("Selesai.");