const fs = require("fs");

// ---------- JS: novo carrossel com rolagem nativa + scroll-snap + bolinhas
const f = __dirname + "/../quiz-pt-br/js/script.js";
let s = fs.readFileSync(f, "utf8");
const a = s.indexOf("  // carrossel de avaliações");
if (a < 0) throw new Error("carrossel antigo não encontrado");
const b = s.indexOf("  // ---------------------------------------------------------------- oferta", a);
if (b < 0) throw new Error("fim do carrossel não encontrado");
const novo = `  // carrossel de depoimentos: rolagem horizontal nativa (swipe no celular, arraste/scroll lateral no desktop),
  // encaixe por scroll-snap, bolinhas indicadoras e avanço automático a cada etapa de carregamento concluída
  function initCarousel(root) {
    if (!root) return null;
    var track = qs(".splide__track", root);
    var list = qs(".splide__list", root);
    if (!track || !list) return null;
    var cards = qsa(".splide__slide:not(.splide__slide--clone)", list);
    if (!cards.length) return null;
    // remove clones/estilos inline do Splide e a paginação antiga (oculta); o carrossel agora rola de verdade
    list.textContent = "";
    cards.forEach(function (c) { c.removeAttribute("style"); c.classList.remove("is-active", "is-visible", "is-next", "is-prev"); list.appendChild(c); });
    var old = qs(".splide__pagination", root); if (old) old.remove();
    root.classList.add("reviews-carousel");
    track.setAttribute("tabindex", "0");
    track.setAttribute("aria-label", "Depoimentos");

    var dots = document.createElement("div");
    dots.className = "reviews-dots";
    dots.setAttribute("role", "tablist");
    var dotEls = cards.map(function (c, i) {
      var d = document.createElement("button");
      d.type = "button"; d.className = "reviews-dot"; d.setAttribute("role", "tab");
      d.setAttribute("aria-label", "Ir para o depoimento " + (i + 1) + " de " + cards.length);
      d.addEventListener("click", function () { goTo(i, true); });
      dots.appendChild(d);
      return d;
    });
    root.appendChild(dots);

    function centerOf(i) { return cards[i].offsetLeft + cards[i].offsetWidth / 2; }
    function nearest() {
      var mid = track.scrollLeft + track.clientWidth / 2, best = 0, dist = 1e9;
      cards.forEach(function (c, i) { var d = Math.abs(centerOf(i) - mid); if (d < dist) { dist = d; best = i; } });
      return best;
    }
    function paint(i) {
      dotEls.forEach(function (d, k) { d.classList.toggle("is-active", k === i); d.setAttribute("aria-selected", k === i ? "true" : "false"); });
    }
    function goTo(i, smooth) {
      track.scrollTo({ left: centerOf(i) - track.clientWidth / 2, behavior: smooth ? "smooth" : "auto" });
      paint(i);
    }
    var raf = 0;
    function onScroll() { if (raf) return; raf = requestAnimationFrame(function () { raf = 0; paint(nearest()); }); }
    track.addEventListener("scroll", onScroll, { passive: true });

    // desktop: arrastar com o mouse (o toque e o trackpad já rolam nativamente)
    var drag = null;
    function onDown(e) {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      drag = { x: e.clientX, left: track.scrollLeft };
      track.style.scrollSnapType = "none"; track.classList.add("is-dragging");
    }
    function onMove(e) { if (drag) track.scrollLeft = drag.left - (e.clientX - drag.x); }
    function onUp() {
      if (!drag) return;
      drag = null; track.classList.remove("is-dragging");
      var i = nearest(); track.style.scrollSnapType = ""; goTo(i, true);
    }
    track.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    track.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); goTo(Math.min(cards.length - 1, nearest() + 1), true); }
      if (e.key === "ArrowLeft") { e.preventDefault(); goTo(Math.max(0, nearest() - 1), true); }
    });
    function onResize() { goTo(nearest(), false); }
    window.addEventListener("resize", onResize);

    goTo(0, false); paint(0);
    return {
      next: function () { goTo((nearest() + 1) % cards.length, true); },
      destroy: function () {
        window.removeEventListener("pointermove", onMove); window.removeEventListener("pointerup", onUp);
        window.removeEventListener("pointercancel", onUp); window.removeEventListener("resize", onResize);
      }
    };
  }

`;
s = s.slice(0, a) + novo + s.slice(b);
fs.writeFileSync(f, s);

// ---------- CSS
const c = __dirname + "/../quiz-pt-br/css/app.css";
let css = fs.readFileSync(c, "utf8");
css = css.replace(".splide__track{overflow:hidden}\n.splide__list{display:flex;transition:transform 2s ease}\n.splide__list.is-jump{transition:none}\n", "");
css += `
/* Carrossel de depoimentos (tela de carregamento): rolagem horizontal nativa com encaixe */
.splide.reviews-carousel { width: 100%; max-width: 100%; min-width: 0; overflow: hidden; visibility: visible; }
.reviews-carousel .splide__track {
  overflow-x: auto; overflow-y: hidden;
  scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;
  overscroll-behavior-x: contain; touch-action: pan-x pan-y;
  scrollbar-width: none; -ms-overflow-style: none; cursor: grab;
}
.reviews-carousel .splide__track::-webkit-scrollbar { display: none; }
.reviews-carousel .splide__track.is-dragging { cursor: grabbing; user-select: none; }
.reviews-carousel .splide__list { display: flex; gap: 12px; transform: none !important; transition: none; width: 100%; }
/* espaçadores: centralizam o 1º e o último cartão; cada cartão ocupa 80% e o vizinho aparece na lateral */
.reviews-carousel .splide__list::before, .reviews-carousel .splide__list::after { content: ""; flex: 0 0 calc(10% - 12px); }
.reviews-carousel .splide__slide { flex: 0 0 80%; width: 80%; max-width: 320px; margin: 0; scroll-snap-align: center; scroll-snap-stop: always; text-align: left; }
.reviews-dots { display: flex; justify-content: center; gap: 8px; padding: 14px 0 4px; }
.reviews-dot { width: 8px; height: 8px; padding: 0; border: 0; border-radius: 9999px; background: #d9d9d9; cursor: pointer; transition: background-color .2s, transform .2s; }
.reviews-dot.is-active { background: rgb(155, 124, 80); transform: scale(1.25); }
`;
fs.writeFileSync(c, css);
console.log("ok");
