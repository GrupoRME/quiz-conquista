const fs=require("fs");
const f=process.argv[2];
let h=fs.readFileSync(f,"utf8");
h=h.replace(/ data-v-[0-9a-f]+=""/g,"").replace(/<!---->/g,"").replace(/ data-test="[^"]*"/g,"");
h=h.replace(/<svg[\s\S]*?<\/svg>/g,m=>"<svg…"+m.length+"/>");
h=h.replace(/\s+/g," ").replace(/> </g,">\n<");
console.log(h);
