const fs = require("fs");
const f = __dirname + "/../quiz-pt-br/js/script.js";
let s = fs.readFileSync(f, "utf8");
const a = s.indexOf("  // raspadinha: canvas 343x343");
const b = s.indexOf("  // ---------------------------------------------------------------- resumo do perfil");
if (a < 0 || b < a) throw new Error("bloco da raspadinha não encontrado");
const novo = `  // ---- raspadinha ---------------------------------------------------------------------------------------
  // Animação de dica (mão + rastro): mesma animação do Lottie original (/lottie/scratch-pre-offer.json, 60 fps, laço de 119 quadros).
  // A mão segue 7 posições com a curva cubic-bezier(.5,.35,.15,1); o rastro é um "trim path" linear de 0 a 100% em 120,27 quadros.
  var HAND_KEYS = [[0.222, 4, 136.278], [21.222, 64, 56.28], [57.006, 62, 150.28], [78.396, 133, 89.28], [99.078, 86.0193, 179.2469], [99.936, 94, 156.28], [119.934, 166, 109.28]];
  var HAND_ROT = -53.8909 * Math.PI / 180;
  function bezierEase(x1, y1, x2, y2, t) {
    var lo = 0, hi = 1, u = t;
    for (var i = 0; i < 24; i++) {
      u = (lo + hi) / 2;
      var x = 3 * (1 - u) * (1 - u) * u * x1 + 3 * (1 - u) * u * u * x2 + u * u * u;
      if (x < t) lo = u; else hi = u;
    }
    return 3 * (1 - u) * (1 - u) * u * y1 + 3 * (1 - u) * u * u * y2 + u * u * u;
  }
  function handAt(frame) {
    var k = HAND_KEYS, i;
    if (frame <= k[0][0]) return [k[0][1], k[0][2]];
    for (i = 0; i < k.length - 1; i++) {
      if (frame < k[i + 1][0]) {
        var t = (frame - k[i][0]) / (k[i + 1][0] - k[i][0]), e = bezierEase(0.5, 0.35, 0.15, 1, t);
        return [k[i][1] + (k[i + 1][1] - k[i][1]) * e, k[i][2] + (k[i + 1][2] - k[i][2]) * e];
      }
    }
    return [k[k.length - 1][1], k[k.length - 1][2]];
  }
  function startScratchHint(wrap) {
    var svg = wrap && qs("svg", wrap);
    if (!svg) return function () {};
    var groups = svg.querySelectorAll(":scope > g > g > g");
    var trail = groups[0], hand = groups[1];
    var stroke = trail && trail.querySelector("path[stroke]");
    var len = stroke ? stroke.getTotalLength() : 0;
    if (stroke) stroke.setAttribute("stroke-dasharray", len + " " + len);
    var t0 = null, raf = 0, alive = true;
    var cos = Math.cos(HAND_ROT), sin = Math.sin(HAND_ROT);
    function tick(now) {
      if (!alive) return;
      if (t0 === null) t0 = now;
      var frame = ((now - t0) / 1000 * 60) % 119;
      var p = handAt(frame);
      if (hand) hand.setAttribute("transform", "matrix(" + cos + "," + sin + "," + (-sin) + "," + cos + "," + p[0] + "," + p[1] + ")");
      if (stroke) {
        var end = Math.min(100, frame / 120.27 * 100);
        stroke.style.visibility = end < 0.4 ? "hidden" : "visible";
        stroke.setAttribute("stroke-dashoffset", len * (1 - end / 100));
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return function () { alive = false; cancelAnimationFrame(raf); };
  }

  // raspadinha: canvas 343x343, pincel circular de raio 40 (contínuo, sem falhas entre toques), toque/mouse/caneta.
  // Ao primeiro toque somem a mão e o texto de dica (como no original). Revela sozinha com ≥ 50% raspado, ou ao soltar
  // depois de raspar (como o original); a camada some com transição suave e o popup entra 175 ms depois.
  function bindScratch() {
    var canvas = qs("canvas.sc__canvas");
    if (!canvas) return;
    var ctx = canvas.getContext("2d", { willReadFrequently: true });
    var wrap = qs(".lottie-wrapper"), tip = qs(".tutuorial-text");
    var stopHint = startScratchHint(wrap);
    var img = new Image();
    img.onload = function () { if (!finished) ctx.drawImage(img, 0, 0, canvas.width, canvas.height); };
    img.src = "assets/misc/scratch-start.webp";
    canvas.style.touchAction = "none"; // o dedo raspa; a página não rola junto
    var RADIUS = 40, AUTO_REVEAL = 50;
    var drawing = false, scratched = false, finished = false, last = null, lastCheck = 0;
    onCleanup(function () { stopHint(); document.removeEventListener("pointerup", end); document.removeEventListener("pointercancel", end); });

    function pos(e) {
      var r = canvas.getBoundingClientRect();
      return [(e.clientX - r.left) * (canvas.width / r.width), (e.clientY - r.top) * (canvas.height / r.height)];
    }
    function hideHint() { stopHint(); if (wrap) { wrap.remove(); wrap = null; } if (tip) { tip.remove(); tip = null; } }
    function scratch(p) {
      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineCap = "round"; ctx.lineJoin = "round"; ctx.lineWidth = RADIUS * 2;
      ctx.beginPath(); ctx.moveTo(last[0], last[1]); ctx.lineTo(p[0], p[1]); ctx.stroke();
      ctx.restore();
      last = p; scratched = true;
    }
    function clearedPercent() {
      var d = ctx.getImageData(0, 0, canvas.width, canvas.height).data, n = 0, total = 0;
      for (var y = 0; y < canvas.height; y += 4) for (var x = 0; x < canvas.width; x += 4) { total++; if (d[(y * canvas.width + x) * 4 + 3] < 20) n++; }
      return 100 * n / total;
    }
    function reveal() {
      if (finished) return;
      finished = true; drawing = false;
      canvas.style.pointerEvents = "none";
      canvas.classList.add("is-revealed");                      // some com transição suave (CSS)
      setTimeout(function () { ctx.clearRect(0, 0, canvas.width, canvas.height); }, 450);
      setTimeout(showScratchPopup, 175);                        // mesmo atraso do original
    }
    function start(e) {
      if (finished) return;
      e.preventDefault();
      try { canvas.setPointerCapture(e.pointerId); } catch (x) {}
      hideHint(); drawing = true;
      last = pos(e); scratch(last);
    }
    function move(e) {
      if (!drawing || finished) return;
      e.preventDefault();
      var evs = e.getCoalescedEvents ? e.getCoalescedEvents() : [e];
      (evs.length ? evs : [e]).forEach(function (ce) { scratch(pos(ce)); });
      var now = performance.now();
      if (now - lastCheck > 80) { lastCheck = now; if (clearedPercent() >= AUTO_REVEAL) reveal(); }
    }
    function end() {
      if (!drawing) return;
      drawing = false;
      if (scratched) reveal();
    }
    canvas.addEventListener("pointerdown", start);
    canvas.addEventListener("pointermove", move);
    document.addEventListener("pointerup", end);
    document.addEventListener("pointercancel", end);
    canvas.addEventListener("touchstart", function (e) { e.preventDefault(); }, { passive: false });
    canvas.addEventListener("touchmove", function (e) { e.preventDefault(); }, { passive: false });
  }
  function showScratchPopup() {
    var pop = html(OFFER.scratchPopup);
    // entrada com fade (mesma classe de transição do original: opacity .1s)
    pop.classList.add("fadePopup-enter-from", "fadePopup-enter-active");
    app.appendChild(pop);
    fillVars(pop);
    void pop.offsetWidth;
    pop.classList.remove("fadePopup-enter-from");
    setTimeout(function () { pop.classList.remove("fadePopup-enter-active"); }, 200);
    var btn = qs("#qz-button-continue", pop);
    if (btn) btn.addEventListener("click", function () { goTo("offer"); });
  }

`;
s = s.slice(0, a) + novo + s.slice(b);
fs.writeFileSync(f, s);

// CSS
const c = __dirname + "/../quiz-pt-br/css/app.css";
fs.appendFileSync(c, `
/* Raspadinha: o dedo raspa sem rolar a página; a camada some com transição suave ao revelar */
.scratch-target, .scratch-target canvas.sc__canvas { touch-action: none; -webkit-user-select: none; user-select: none; -webkit-tap-highlight-color: transparent; }
canvas.sc__canvas { transition: opacity .35s ease; }
canvas.sc__canvas.is-revealed { opacity: 0; }
`);
console.log("ok");
