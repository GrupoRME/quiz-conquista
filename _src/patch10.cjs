const fs = require("fs");
const f = __dirname + "/../quiz-pt-br/js/script.js";
let s = fs.readFileSync(f, "utf8");
const a = s.indexOf("  function bindMulti(s) {");
const b = s.indexOf("  // ---------------------------------------------------------------- campo de texto");
if (a < 0 || b < 0) throw new Error("âncoras não encontradas");
const novo = `  function bindMulti(s) {
    var list = tiles();
    var btn = qs("#qz-button-continue");
    function isOther(t) { return t.id === "qz-button-other"; }
    function otherInput(t) { return qs("input", t); }
    function sync() {
      var sel = list.filter(function (t) { return t.classList.contains("selected"); });
      if (btn) btn.disabled = sel.length === 0;
      var vals = [];
      sel.forEach(function (t) {
        if (isOther(t)) { var v = otherInput(t).value.trim(); if (v) vals.push(v); }
        else if (s.options[list.indexOf(t)]) vals.push(s.options[list.indexOf(t)].value);
      });
      setVar(s.variable, vals);
    }
    list.forEach(function (tile) {
      if (isOther(tile)) {
        // alternativa livre ("Outra coisa"): digitar seleciona; clicar fora do campo alterna (se houver texto)
        var input = otherInput(tile);
        input.addEventListener("input", function () { tile.classList.toggle("selected", input.value.trim().length > 0); sync(); });
        tile.addEventListener("click", function (e) {
          if (e.target === input) return;
          if (input.value.trim().length) { tile.classList.toggle("selected"); sync(); if (tile.classList.contains("selected")) input.focus(); }
          else input.focus();
        });
        return;
      }
      tile.addEventListener("click", function () { tile.classList.toggle("selected"); sync(); });
    });
    if (btn) {
      btn.addEventListener("click", function () { if (!btn.disabled) navigate(s.next); });
    }
    sync();
  }

`;
s = s.slice(0, a) + novo + s.slice(b);
fs.writeFileSync(f, s);
console.log("ok");
