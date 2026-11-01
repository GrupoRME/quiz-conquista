const fs = require("fs");
const f = __dirname + "/build.cjs";
let s = fs.readFileSync(f, "utf8");
const marca = "function brand(h) {";
if (!s.includes(marca)) throw new Error("brand() não encontrada");
s = s.replace(
  marca,
  marca +
    `
  // nomes dos depoimentos (lista de clientes): Asab Mahmood -> Roberto, Michael -> João, Petar -> Pedro; iniciais do avatar acompanham
  h = h.split("Asab Mahmood").join("Roberto").split("Michael").join("João").split("Petar").join("Pedro");
  h = h.split('class="initials">AM<').join('class="initials">R<').split('class="initials">M<').join('class="initials">J<');`
);
fs.writeFileSync(f, s);
console.log("ok");
