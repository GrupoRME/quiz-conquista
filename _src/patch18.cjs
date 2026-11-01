const fs = require("fs");

// ---------- build: meses como atributo do próprio <text> do SVG (antes: <span> dentro do <text>, que o navegador não desenha)
const b = __dirname + "/build.cjs";
let s = fs.readFileSync(b, "utf8");
const ini = s.indexOf('    ["out.", "nov.", "dez.", "jan."].forEach((m, k) => {');
const fim = s.indexOf("    });", ini) + "    });".length;
if (ini < 0 || fim < ini) throw new Error("bloco dos meses não encontrado no build");
const novo = `    // meses sob as barras: o atributo vai no próprio <text> do SVG; nas telas 27 e 104 ("Fazê-la Ficar Obcecada por Você")
    // o formato é "Out" (maiúscula, sem ponto) e o selo da barra 3 vira "Mestre da Conquista"
    const capFmt = i === 27 || i === 104 ? ' data-date-fmt="cap"' : "";
    ["out.", "nov.", "dez.", "jan."].forEach((m, k) => {
      h = h.replace(new RegExp("(<text[^>]*class=\\"axis-text\\"[^>]*)>" + m.replace(".", "\\\\.") + "</text>"), \`$1 data-date="m\${k}"\${capFmt}>\${m}</text>\`);
    });
    if (i === 27 || i === 104) h = h.split("Amor Vida Mestre").join("Mestre da Conquista");`;
s = s.slice(0, ini) + novo + s.slice(fim);
fs.writeFileSync(b, s);

// ---------- script: UMA função de mês/data para as barras e para o texto
const f = __dirname + "/../quiz-pt-br/js/script.js";
let t = fs.readFileSync(f, "utf8");
const a = t.indexOf("    // datas do gráfico do plano");
const z = t.indexOf("  // ---------------------------------------------------------------- render");
if (a < 0 || z < a) throw new Error("bloco de datas não encontrado no script");
const dentro = t.slice(a, z);
const fechaFn = dentro.lastIndexOf("  }");
const nova = `    // datas do gráfico do plano: barras (mês atual + 0..3) e texto "até <mês + 2>" saem da MESMA função (monthAt)
    qsa("[data-date]", root).forEach(function (el) {
      var k = el.getAttribute("data-date");
      if (k === "target") {
        var t = monthAt(2);
        el.textContent = t.long + " de " + t.year;
      } else {
        var m = monthAt(+k.slice(1));
        el.textContent = el.getAttribute("data-date-fmt") === "cap" ? m.abbrCap : m.abbrDot;
      }
    });
` + dentro.slice(fechaFn);
t = t.slice(0, a) + nova + t.slice(z);

// função única + data atual substituível para teste (?now=AAAA-MM-DD ou window.QUIZ_NOW)
const gancho = "  var MONTHS_SHORT = ";
if (!t.includes(gancho)) throw new Error("MONTHS_SHORT não encontrado");
t = t.replace(
  gancho,
  `  // data atual (para teste, aceita ?now=AAAA-MM-DD na URL ou window.QUIZ_NOW)
  function currentDate() {
    var o = window.QUIZ_NOW;
    if (!o) { try { o = new URLSearchParams(location.search).get("now"); } catch (e) {} }
    if (o) { var p = String(o).split("-"); if (p.length >= 3) return new Date(+p[0], +p[1] - 1, +p[2]); }
    return new Date();
  }
  var MONTH_ABBR_CAP = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
  // mês relativo ao atual (virada de ano tratada pelo Date, sempre no dia 1 para não estourar meses curtos)
  function monthAt(offset) {
    var now = currentDate();
    var d = new Date(now.getFullYear(), now.getMonth() + offset, 1);
    return { abbrCap: MONTH_ABBR_CAP[d.getMonth()], abbrDot: MONTHS_SHORT[d.getMonth()], long: cap(MONTHS_LONG[d.getMonth()]), year: d.getFullYear() };
  }
` + gancho
);
fs.writeFileSync(f, t);
console.log("ok");
