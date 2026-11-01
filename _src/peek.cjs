const h=require("fs").readFileSync("offer-desktop.html","utf8");
const b=h.indexOf("<body");console.log(h.slice(b,b+500));
console.log("....");console.log(h.slice(-1500));
console.log((h.match(/<script/g)||[]).length,"scripts;",(h.match(/<style/g)||[]).length,"styles");
