const fs=require("fs");let s=fs.readFileSync("_src/build.cjs","utf8");
s=s.replace("function baseClean(h) {", `function toXhtml(h) {
  h = h.split("&nbsp;").join("&#160;");
  return h.replace(/<(img|input|br|hr)((?:[^>"']|"[^"]*"|'[^']*')*?)(\/?)>/g, (m, t, a) => "<" + t + a.replace(/\s*\/$/, "") + "/>");
}
function baseClean(h) {`);
s=s.replace("return rewriteUrls(fixText(h));","return toXhtml(rewriteUrls(fixText(h)));");
fs.writeFileSync("_src/build.cjs",s);
