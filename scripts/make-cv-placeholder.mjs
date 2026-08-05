import { writeFileSync } from "node:fs";

const lines = [
  "Nadeen Hany",
  "Front-End Developer | React.js Developer | UI/UX Specialist",
  "",
  "Computer Engineering Student @ E-JUST  |  AI Trainee @ Samsung Innovation Campus",
  "Email: nadeenhany99@gmail.com",
  "GitHub: github.com/Nadeeen232",
  "Location: Egypt",
  "",
  "This is a placeholder CV. Replace public/cv/nadeen-hany-cv.pdf",
  "with your real, up-to-date resume PDF.",
];

const fontSize = 14;
const leading = 20;
let y = 760;
let content = "BT /F1 " + fontSize + " Tf\n";
content += `1 0 0 1 60 ${y} Tm\n`;
lines.forEach((line, i) => {
  if (i === 0) {
    content += `(${line}) Tj\n`;
  } else {
    content += `0 -${leading} Td\n(${line.replace(/[()]/g, "")}) Tj\n`;
  }
});
content += "ET";

const objects = [];
objects.push("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj");
objects.push("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj");
objects.push(
  "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>\nendobj"
);
objects.push(`4 0 obj\n<< /Length ${content.length} >>\nstream\n${content}\nendstream\nendobj`);
objects.push("5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj");

let pdf = "%PDF-1.4\n";
const offsets = [];
for (const obj of objects) {
  offsets.push(pdf.length);
  pdf += obj + "\n";
}
const xrefStart = pdf.length;
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += "0000000000 65535 f \n";
for (const off of offsets) {
  pdf += String(off).padStart(10, "0") + " 00000 n \n";
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

writeFileSync(new URL("../public/cv/nadeen-hany-cv.pdf", import.meta.url), pdf, "latin1");
console.log("Wrote placeholder CV PDF");
