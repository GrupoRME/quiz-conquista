const fs=require("fs");
const n=f=>fs.readFileSync("dom/"+f,"utf8").replace(/ data-v-[0-9a-f]+=""/g,"").replace(/<!---->/g,"").replace(/<svg[\s\S]*?<\/svg>/g,"<svg/>").replace(/\s+/g," ").replace(/></g,">\n<").split("\n");
const a=n("email-valid-state.html"),b=n("email-invalid.html");
const A=new Set(a),B=new Set(b);
console.log("== só no VALID/default:");a.filter(x=>!B.has(x)).forEach(x=>console.log("  ",x.slice(0,300)));
console.log("== só no INVALID:");b.filter(x=>!A.has(x)).forEach(x=>console.log("  ",x.slice(0,300)));
const i=a.findIndex(x=>x.includes("min-h-[32px]"));console.log("== rodapé em valid:",a.slice(i-1,i+8).join("\n").slice(0,900));
