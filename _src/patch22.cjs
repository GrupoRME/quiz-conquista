const fs = require("fs");
const f = __dirname + "/build.cjs";
let s = fs.readFileSync(f, "utf8");
const marca = '  h = h.split("Asab Mahmood").join("Roberto").split("Michael").join("João").split("Petar").join("Pedro");';
if (!s.includes(marca)) throw new Error("âncora dos nomes não encontrada");
s = s.replace(
  marca,
  marca +
    `
  // localização dos depoimentos (lista de clientes): Roberto = SP, João = SC, Pedro = RN (antes: GB, EUA, EM)
  h = h.split(">GB<").join(">SP<").split(">EUA<").join(">SC<").split(">EM<").join(">RN<");`
);
fs.writeFileSync(f, s);
console.log("ok");
