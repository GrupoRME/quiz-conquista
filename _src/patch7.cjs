const fs=require("fs");
let s=fs.readFileSync("_src/build.cjs","utf8");
const a="  return toXhtml(rewriteUrls(fixText(h)));";
if(!s.includes(a)) throw new Error("ancora");
s=s.replace(a,`  return toXhtml(brand(rewriteUrls(fixText(h))));`);
s=s.replace("function baseClean(h) {",`// marca: "M Academy" + logo -> "Alpha Academy" + logo enviado pelo cliente
function brand(h) {
  h = h.replace(/<svg[^>]*class="logo [^"]*"[^>]*>[\s\S]*?<\/svg>/g, '<img src="assets/offer/logo-alpha.png" alt="Alpha Academy" class="logo object-cover size-6"/>');
  return h.replace(/\bM Academy\b/g, "Alpha Academy").replace(/\bMuses Academy\b/g, "Alpha Academy");
}
function baseClean(h) {`);
fs.writeFileSync("_src/build.cjs",s);
let ix=fs.readFileSync("quiz-pt-br/index.html","utf8");
ix=ix.split("Muses Academy").join("Alpha Academy").split("M Academy").join("Alpha Academy").split("assets/offer/Logo.svg").join("assets/offer/logo-alpha.png").replace('type="image/svg+xml"','type="image/png"');
fs.writeFileSync("quiz-pt-br/index.html",ix);
let sc=fs.readFileSync("quiz-pt-br/js/script.js","utf8").split("Quiz M Academy").join("Quiz Alpha Academy");
fs.writeFileSync("quiz-pt-br/js/script.js",sc);
