const fs = require("fs");
// 1) build: remove a centralização das telas de mensagem (volta ao alinhamento à esquerda do original)
const f = __dirname + "/build.cjs";
let lines = fs.readFileSync(f, "utf8").split("\n");
const before = lines.length;
lines = lines.filter((l) => {
  if (l.includes('.join("text-align: center;")') && /interstitial|i === 5 \|\| i === 57|i === 1 \|\| i === 22/.test(l)) return false;
  if (/^\s*\/\/ padrão único: todas as telas de mensagem/.test(l)) return false;
  if (/^\s*\/\/ personalização: "Pode contar com a gente!" \(telas 5 e 57\) com título e texto centralizados/.test(l)) return false;
  if (/^\s*\/\/ personalização: etapa 5 \(telas 1, 22 e 23\) com título e texto centralizados/.test(l)) return false;
  return true;
});
fs.writeFileSync(f, lines.join("\n"));
console.log("linhas removidas do build:", before - lines.length);

// 2) CSS: padrão das telas de mensagem (título + texto + imagem), alinhado à esquerda
const c = __dirname + "/../quiz-pt-br/css/app.css";
let css = fs.readFileSync(c, "utf8");
const marker = "/* Telas de mensagem (interstitial)";
css = css.slice(0, css.indexOf(marker));
css += `/* Telas de mensagem (título + texto curto + imagem): padrão único, alinhado à esquerda, mesma margem da imagem */
main[data-msg] > div { align-items: stretch; text-align: left; }
main[data-msg] h1 { text-align: left; margin-bottom: 8px; }
main[data-msg] h1 p { text-align: left; margin: 0; }
main[data-msg] > div > p { text-align: left; font-size: 14px; line-height: 1.55; color: #2b2b2b; margin-bottom: 24px; text-wrap: pretty; }
main[data-msg] > div > p p { text-align: left; margin: 0; }
/* "Pode contar com a gente!" em uma única linha, em qualquer largura */
main[data-msg][data-oneline] h1, main[data-msg][data-oneline] h1 p { white-space: nowrap; }
main[data-msg][data-oneline] h1 { font-size: clamp(20px, 6.4vw, 24px) !important; }
`;
fs.writeFileSync(c, css);
console.log("css ok");
