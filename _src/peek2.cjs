const fs=require("fs");
let h=fs.readFileSync("offer-desktop.html","utf8");
h=h.slice(h.indexOf('<div id="app"'));
h=h.replace(/ data-v-[0-9a-f]+=""/g,"").replace(/<!---->/g,"").replace(/<svg[\s\S]*?<\/svg>/g,m=>"<svg…"+m.length+"/>");
fs.writeFileSync("../offer-clean.txt",h.replace(/\s+/g," ").replace(/> </g,">\n<"));
console.log(h.length);
