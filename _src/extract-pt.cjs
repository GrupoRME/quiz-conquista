// Leitura estática (só texto) do bundle pt: gera pt-dict.json (inglês -> português)
const fs = require("fs");
const s = fs.readFileSync("pt-Dl7f_y6-.js", "utf8");
const BT = "`";
const str = "(?:[^" + BT + "\\\\]|\\\\.)*";
const vars = {};
const reVar = new RegExp("(?:^|[,;\\s])([A-Za-z_$][\\w$]*)=" + BT + "(" + str + ")" + BT, "g");
for (const m of s.matchAll(reVar)) vars[m[1]] = m[2];
const dict = {};
const reEnt = new RegExp(
  "(?:\"((?:[^\"\\\\]|\\\\.)+)\"|([A-Za-z_$][\\w$]*)):(?:" + BT + "(" + str + ")" + BT + "|([A-Za-z_$][\\w$]*)(?=[,}]))",
  "g"
);
for (const m of s.matchAll(reEnt)) {
  const k = m[1] ?? m[2];
  const v = m[3] !== undefined ? m[3] : vars[m[4]];
  if (v !== undefined && !(k in dict)) dict[k] = v;
}
fs.writeFileSync("pt-dict.json", JSON.stringify(dict, null, 1));
console.log("vars", Object.keys(vars).length, "dict", Object.keys(dict).length);
