const fs = require("fs");
const f = __dirname + "/build.cjs";
const lines = fs.readFileSync(f, "utf8").split("\n");
const i = lines.findIndex((l) => l.startsWith("function brand(h)"));
lines[i + 1] = '  h = h.replace(/<svg[^>]*class="logo [^"]*"[^>]*>[\\s\\S]*?<\\/svg>/g, \'<img src="assets/offer/logo-alpha.png" alt="Alpha Academy" class="logo object-cover size-6"/>\');';
lines[i + 2] = '  return h.replace(/\\bM Academy\\b/g, "Alpha Academy").replace(/\\bMuses Academy\\b/g, "Alpha Academy");';
fs.writeFileSync(f, lines.join("\n"));
console.log(lines[i + 1]);
console.log(lines[i + 2]);
