const fs = require("fs");
const f = __dirname + "/build.cjs";
let s = fs.readFileSync(f, "utf8");
const a = '  // padrão único: todas as telas de mensagem (interstitial) com título e texto centralizados';
if (!s.includes(a)) throw new Error("âncora");
s = s.replace(a, `  // telas de mensagem: classe de padronização (texto equilibrado em css/app.css); 5 e 57 com título em uma linha
  if (S[i].type === "interstitial") h = h.replace(/<main /, '<main data-msg="1"' + (i === 5 || i === 57 ? ' data-oneline="1"' : "") + " ");
` + a);
fs.writeFileSync(f, s);
const c = __dirname + "/../quiz-pt-br/css/app.css";
fs.appendFileSync(c, `
/* Telas de mensagem (interstitial): texto padronizado e equilibrado entre as linhas */
main[data-msg] h1, main[data-msg] h1 p { text-wrap: balance; }
main[data-msg] p { text-wrap: balance; }
/* "Pode contar com a gente!" em uma única linha, em qualquer largura */
main[data-msg][data-oneline] h1 { white-space: nowrap; font-size: clamp(20px, 6.4vw, 29px) !important; }
`);
console.log("ok");
