const fs=require("fs");let s=fs.readFileSync("_src/build.cjs","utf8");
const a=s.indexOf("// popups capturados");const b=s.indexOf("const out = (name");
const block=`// popups capturados do original (raspadinha concluída e "ainda está pensando?" da oferta)
const extra = {};
{
  const a = baseClean(fs.readFileSync(path.join(__dirname, "dom", "scratch-after.html"), "utf8"));
  const i = a.search(/<div[^>]*class="fixed inset-0/);
  extra.scratchPopup = a.slice(i).replace(/<\/div>\s*$/, "").replace(/User_oct26/g, '<span data-var="promo_code">Nome_oct26</span>');
  const o = baseClean(fs.readFileSync(path.join(__dirname, "dom", "offer-desktop.html"), "utf8"));
  const k = o.lastIndexOf('class="relative m-auto');
  const st = o.lastIndexOf("<div", o.lastIndexOf('class="fixed inset-0', k));
  const endTag = "</div></div></div></div>";
  const en = o.indexOf(endTag, k) + endTag.length;
  extra.extraTimePopup = o
    .slice(st, en)
    .replace("Ainda está a pensar?", "Ainda está pensando?")
    .replace("Aqui está <b>7 minutos extras</b>", "Aqui estão <b>7 minutos extras</b>")
    .replace("Use o meu tempo extra", "Usar meu tempo extra");
}

`;
s=s.slice(0,a)+block+s.slice(b);
s=s.replace(`    if (p === "img/offer/payment.webp") return "assets/offer/payment.webp";`,`    if (p === "img/offer/payment.webp") return "assets/offer/payment.webp";
    if (p === "img/offer/popup/gift.webp") return "assets/offer/gift.webp";`);
fs.writeFileSync("_src/build.cjs",s);
