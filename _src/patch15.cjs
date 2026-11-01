const fs = require("fs");
const c = __dirname + "/../quiz-pt-br/css/app.css";
let css = fs.readFileSync(c, "utf8");
const marker = "/* Telas de mensagem (título + texto curto + imagem)";
const i = css.indexOf(marker);
if (i < 0) throw new Error("bloco não encontrado");
css = css.slice(0, i) + `/* Telas de mensagem (título + texto curto + imagem): padrão único, centralizado */
main[data-msg] > div { align-items: center; text-align: center; }
main[data-msg] h1 { margin-bottom: 8px; }
main[data-msg] h1 p, main[data-msg] > div > p, main[data-msg] > div > p p { text-align: center !important; margin: 0; }
main[data-msg] > div > p { width: 100%; max-width: 100%; font-size: 14px; line-height: 1.55; color: #2b2b2b; margin-bottom: 24px; text-wrap: balance; }
main[data-msg] > div > p p { text-wrap: balance; }
/* "Pode contar com a gente!" em uma única linha, em qualquer largura */
main[data-msg][data-oneline] h1, main[data-msg][data-oneline] h1 p { white-space: nowrap; }
main[data-msg][data-oneline] h1 { font-size: clamp(20px, 6.4vw, 24px) !important; }
`;
fs.writeFileSync(c, css);
console.log("ok");
