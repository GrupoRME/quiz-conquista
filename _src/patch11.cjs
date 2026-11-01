const fs = require("fs");
const f = __dirname + "/build.cjs";
let s = fs.readFileSync(f, "utf8");

// 1) variantes da oferta (objetivo x status), logo depois do tratamento da oferta base
const anchor = "// popups capturados do original";
if (!s.includes(anchor)) throw new Error("âncora 1");
const bloco = `// variantes da oferta por objetivo (goal) x status (relationship_status), capturadas do original com variáveis forçadas
const offerVariants = {};
for (const goal of ["make_her_obsessed", "make_her_choose_me", "make_her_want_me"]) {
  offerVariants[goal] = {};
  for (const st of ["single", "complicated", "in_relationship", "married"]) {
    let v = baseClean(fs.readFileSync(path.join(__dirname, "dom", "offer-v-" + goal + "-" + st + ".html"), "utf8"));
    v = v.replace(/^<div id="app"[^>]*>/, "").replace(/<\\/div>\\s*$/, "");
    v = v.replace(/João_oct26/g, '<span data-var="promo_code">Nome_oct26</span>').replace(/João, desbloqueie/g, '<span data-var="name">Você</span>, desbloqueie');
    offerVariants[goal][st] = v;
  }
}
// foto principal da oferta por faixa etária (a variante capturada usa a de 18-29)
const offerAgeImg = {
  "18-29": "assets/images/image_20260506_latam-18-29-offer-0181a9c3.png",
  "30-39": "assets/images/image_20260506_latam-30-39-offer-5d4d4bbd.png",
  "40-49": "assets/images/image_20260506_latam-40-49-offer-18689afb.png",
  "50+": "assets/images/image_20260506_latam-50-offer-089d2113.png"
};

`;
s = s.replace(anchor, bloco + anchor);

// 2) exporta no offer-data.js
const old = 'out("offer-data.js", "QUIZ_OFFER", { html: offer, scratchPopup: extra.scratchPopup, extraTimePopup: extra.extraTimePopup });';
if (!s.includes(old)) throw new Error("âncora 2");
s = s.replace(old, 'out("offer-data.js", "QUIZ_OFFER", { html: offer, variants: offerVariants, ageImg: offerAgeImg, scratchPopup: extra.scratchPopup, extraTimePopup: extra.extraTimePopup });');
fs.writeFileSync(f, s);

// 3) motor: usa a variante conforme as respostas
const g = __dirname + "/../quiz-pt-br/js/script.js";
let t = fs.readFileSync(g, "utf8");
const a = "    mount(app, OFFER.html);";
if (!t.includes(a)) throw new Error("âncora 3");
t = t.replace(
  a,
  `    // a oferta muda conforme objetivo, status e idade respondidos (como no original); sem respostas usa a versão padrão
    var variant = OFFER.variants && OFFER.variants[state.vars.goal] && OFFER.variants[state.vars.goal][state.vars.relationship_status];
    mount(app, variant || OFFER.html);
    var ageSrc = OFFER.ageImg && OFFER.ageImg[state.vars.age || "30-39"];
    var heroImg = qs(".compare-before-after-generated img");
    if (heroImg && ageSrc) heroImg.setAttribute("src", ageSrc);`
);
fs.writeFileSync(g, t);
console.log("ok");
