const fs = require("fs");
const b = __dirname + "/build.cjs";
let s = fs.readFileSync(b, "utf8");
const marca = '    if (i === 27 || i === 104) h = h.split("Amor Vida Mestre").join("Mestre da Conquista");';
if (!s.includes(marca)) throw new Error("âncora não encontrada");
s = s.replace(
  marca,
  marca +
    `
    // centraliza cada mês sob a sua barra (barras em x = 40, 117.333, 194.667, 272, largura 32; mesma linha de base)
    if (i === 27 || i === 104) {
      [["52", "170", "56"], ["131", "171", "133.333"], ["211", "171", "210.667"], ["292", "171", "288"]].forEach(([x, y, novo]) => {
        h = h.split('x="' + x + '" y="' + y + '" class="axis-text"').join('x="' + novo + '" y="171" class="axis-text"');
      });
    }`
);
fs.writeFileSync(b, s);
console.log("ok");
