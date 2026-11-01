const fs=require("fs");let s=fs.readFileSync("script.js","utf8");
const rep=(a,b)=>{ if(!s.includes(a)) throw new Error("não achou: "+a); s=s.split(a).join(b); };
rep('function html(str) { var t = document.createElement("template"); t.innerHTML = str.trim(); return t.content.firstElementChild; }',
`// O DOM original aninha elementos de bloco dentro de <p>, o que o parser HTML "conserta"; por isso o markup é XHTML
  // (gerado em build) e é lido com o parser XML, que preserva a árvore exata.
  function nodesFrom(str) {
    var doc = new DOMParser().parseFromString('<root xmlns="http://www.w3.org/1999/xhtml">' + str + "</root>", "application/xhtml+xml");
    if (doc.getElementsByTagName("parsererror").length) { console.error("Markup inválido", doc.getElementsByTagName("parsererror")[0].textContent); return []; }
    return Array.prototype.slice.call(document.importNode(doc.documentElement, true).childNodes);
  }
  function html(str) { return nodesFrom(str.trim())[0]; }
  function mount(el, str) { el.textContent = ""; nodesFrom(str).forEach(function (n) { el.appendChild(n); }); }`);
rep('app.innerHTML = markup;','mount(app, markup);');
rep('app.innerHTML = OFFER.html;','mount(app, OFFER.html);');
rep('qs("p.text-token-ink-50", item).innerHTML = "<p>" + LOADER_DONE_TEXT[idx] + "</p>";',
`var label = qs("p.text-token-ink-50", item);
      label.textContent = "";
      var inner = document.createElement("p"); inner.textContent = LOADER_DONE_TEXT[idx]; label.appendChild(inner);`);
rep('right.innerHTML = LOADER_CHECK;','right.textContent = ""; right.appendChild(html(LOADER_CHECK));');
fs.writeFileSync("script.js",s);
