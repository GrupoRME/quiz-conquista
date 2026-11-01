const fs = require("fs");
const f = __dirname + "/../quiz-pt-br/js/script.js";
let s = fs.readFileSync(f, "utf8");

// 1) registra o binder da tela de resumo
const reg = "emailScreen: bindEmail, loader: bindLoader, custom: bindCustom";
if (!s.includes(reg)) throw new Error("registro do binder não encontrado");
s = s.replace(reg, "emailScreen: bindEmail, loader: bindLoader, custom: bindCustom, summaryStatementScreen: bindSummary");

// 2) módulo de perfil + binder (antes da seção do loader)
const anchor = "  // ---------------------------------------------------------------- loader com progresso e perguntas";
if (!s.includes(anchor)) throw new Error("âncora do loader não encontrada");
const modulo = `  // ---------------------------------------------------------------- resumo do perfil (pontuação única)
  // FONTE ÚNICA: uma pontuação de confiança (0–100) calculada das respostas. Selo, posição do marcador, cor,
  // mensagem de alerta e os 4 cards derivam dela (ou das mesmas respostas) — nada é fixo na tela.
  // Cada resposta vale pontos (alta = 100, média = 55, baixa = 15); resposta ausente = 55 (neutro).
  var POINTS = {
    knowledge: { high: 100, medium: 55, low: 15 },                  // "O quanto você entende as mulheres?"
    readiness_for_changes: { perfect: 100, moderate: 55, low: 15 }, // "O quanto você está decidido a mudar…?"
    chasing_level_men: { low: 100, medium: 55, high: 15 },          // "Você sente que está correndo atrás dela?" (muito = menos confiança)
    incosistent_level_men: { low: 100, medium: 55, high: 15 },      // "O comportamento dela é difícil de entender?" (muito = mais incerteza)
    focus: { broad: 100, moderate: 55, limited: 15 }                // "Você acha fácil manter o foco?"
  };
  var WEIGHTS = {
    confidence: { knowledge: 0.25, readiness_for_changes: 0.25, chasing_level_men: 0.20, incosistent_level_men: 0.15, focus: 0.15 },
    motivation: { readiness_for_changes: 0.60, focus: 0.40 },
    potential: { knowledge: 0.50, chasing_level_men: 0.30, incosistent_level_men: 0.20 },
    patience: { focus: 0.60, readiness_for_changes: 0.40 },
    strategy: { knowledge: 0.60, incosistent_level_men: 0.40 }
  };
  function pointsFor(vars, name) {
    var v = POINTS[name][vars[name]];
    return v === undefined ? 55 : v;
  }
  function weighted(vars, weights) {
    var total = 0;
    Object.keys(weights).forEach(function (k) { total += pointsFor(vars, k) * weights[k]; });
    return Math.round(total);
  }
  function band(score) { return score >= 67 ? "high" : score >= 34 ? "mid" : "low"; } // 0–33 Baixo · 34–66 Médio · 67–100 Alto
  var CARD_WORDS = {
    motivation: { high: "Alto", mid: "Moderado", low: "Baixo" },
    potential: { high: "Alto", mid: "Moderado", low: "Baixo" },
    patience: { high: "Amplo", mid: "Moderado", low: "Limitado" },
    strategy: { high: "Alto", mid: "Médio", low: "Baixo" }
  };
  var LEVEL_UI = {
    low: { badge: "Baixo", color: "#CF504B", box: "bg-token-danger-600/10", icon: "text-token-danger-600", iconBg: "bg-token-danger-600/20",
      title: "Calma — todo mundo começa de algum lugar!",
      text: "Hoje você ainda se sente inseguro com ela, e tudo bem. Com o plano certo, você ganha confiança — passo a passo." },
    mid: { badge: "Médio", color: "#FD740B", box: "bg-token-warning-600-2/10", icon: "text-token-warning-600-2", iconBg: "bg-token-warning-600-2/20",
      title: "Você está no caminho — só falta clareza no próximo passo!",
      text: "Você já tem uma boa base, mas ainda hesita em alguns pontos. Vamos te mostrar exatamente como avançar — passo a passo." },
    high: { badge: "Alto", color: "#53B65C", box: "bg-token-success-600/10", icon: "text-token-success-600", iconBg: "bg-token-success-600/20",
      title: "Você está pronto — só precisa do plano certo!",
      text: "Você sabe o que quer, mas precisa de uma estratégia clara. Vamos te mostrar exatamente como avançar — passo a passo." }
  };
  function computeProfile(vars) {
    var score = weighted(vars, WEIGHTS.confidence);
    var level = band(score);
    var cards = {
      motivation: weighted(vars, WEIGHTS.motivation),
      potential: weighted(vars, WEIGHTS.potential),
      patience: weighted(vars, WEIGHTS.patience),
      strategy: weighted(vars, WEIGHTS.strategy)
    };
    return {
      score: score, level: level, badge: LEVEL_UI[level].badge, markerPercent: score, ui: LEVEL_UI[level],
      cards: {
        motivation: { score: cards.motivation, label: CARD_WORDS.motivation[band(cards.motivation)] },
        potential: { score: cards.potential, label: CARD_WORDS.potential[band(cards.potential)] },
        patience: { score: cards.patience, label: CARD_WORDS.patience[band(cards.patience)] },
        strategy: { score: cards.strategy, label: CARD_WORDS.strategy[band(cards.strategy)] }
      }
    };
  }
  window.QuizProfile = { compute: computeProfile, weights: WEIGHTS, points: POINTS };

  function setNestedText(el, text) {
    var inner = el.querySelector("p") || el;
    inner.textContent = text;
  }
  function bindSummary(s) {
    var profile = computeProfile(state.vars);
    setVar("confidence_score", profile.score);
    setVar("confidence_level", profile.level);
    var ui = profile.ui;
    // selo
    var badge = qs('div[class*="rounded-[4px]"][class*="px-2"]');
    if (badge) { badge.textContent = ui.badge; badge.style.backgroundColor = ui.color; }
    // termômetro: gradiente vermelho (Baixo, à esquerda) → verde (Alto, à direita) e marcador proporcional à pontuação
    var gauge = qs("svg.h-\\\\[55px\\\\]");
    if (gauge) {
      var grad = gauge.querySelector("linearGradient");
      if (grad) { grad.setAttribute("x1", "0"); grad.setAttribute("x2", "1"); }
      var circles = qsa("circle", gauge);
      var flt = gauge.querySelector("filter");
      var target = Math.min(333, Math.max(21, 10 + 334 * profile.markerPercent / 100));
      var place = function (x) {
        circles.forEach(function (c) { c.setAttribute("cx", x); });
        if (flt) flt.setAttribute("x", x - 20);
      };
      place(21);
      var t0 = null, dur = 700;
      var step = function (t) {
        if (t0 === null) t0 = t;
        var k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
        place(21 + (target - 21) * e);
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
    // mensagem de alerta (cor, ícone, título e texto) do nível
    var box = qs('div[class*="rounded-[16px] p-3"]');
    if (box) {
      box.className = box.className.replace(/bg-token-(?:danger|warning|success)-600(?:-2)?\\/10/g, "").replace(/\\s+/g, " ").trim() + " " + ui.box;
      var iconWrap = box.firstElementChild;
      if (iconWrap) {
        iconWrap.className = iconWrap.className.replace(/bg-token-(?:danger|warning|success)-600(?:-2)?\\/20/g, "").replace(/\\s+/g, " ").trim() + " " + ui.iconBg;
        var svg = iconWrap.querySelector("svg");
        if (svg) svg.setAttribute("class", ui.icon);
      }
      var title = qs('div[class*="font-bold"]', box), body = qs('div[class*="text-[10px]"]', box);
      if (title) setNestedText(title, ui.title);
      if (body) setNestedText(body, ui.text);
    }
    // 4 cards: Motivação, Potencial, Paciência, Estratégia (na ordem da tela)
    var order = ["motivation", "potential", "patience", "strategy"];
    qsa(".grid.grid-cols-2 > div").forEach(function (card, k) {
      var val = qs('div[class*="text-[12px]"][class*="font-semibold"]', card);
      if (val && order[k]) val.textContent = profile.cards[order[k]].label;
    });
    bindContinue(s);
  }

`;
s = s.replace(anchor, modulo + anchor);
fs.writeFileSync(f, s);
console.log("ok");
