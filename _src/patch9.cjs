const fs = require("fs");
const f = __dirname + "/build.cjs";
let s = fs.readFileSync(f, "utf8");
const marker = "function brand(h) {";
if (!s.includes(marker)) throw new Error("brand não encontrado");
s = s.replace(
  marker,
  marker +
    '\n  // assinatura da tela de popularidade: "<b>M Academy</b> Equipa" -> "<b>Equipe Alpha Academy</b>"\n' +
    '  h = h.replace(/(<b[^>]*>)(?:M|Alpha) Academy<\\/b>\\s*Equip[ae]/g, "$1Equipe Alpha Academy</b>");'
);
fs.writeFileSync(f, s);
console.log("ok");
