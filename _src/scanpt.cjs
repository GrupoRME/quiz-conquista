const fs=require("fs");
const files=fs.readdirSync("dom").filter(f=>/^(s\d{3}-.*|offer-app|loader-modal)\.html$/.test(f));
const texts=new Map();
for(const f of files){const h=fs.readFileSync("dom/"+f,"utf8").replace(/<svg[\s\S]*?<\/svg>/g,"").replace(/<(script|style)[\s\S]*?<\/\1>/g,"");
 for(const m of h.matchAll(/>([^<>]{2,})</g)){const t=m[1].replace(/&nbsp;/g," ").replace(/\s+/g," ").trim();if(t&&!texts.has(t))texts.set(t,f);}
 for(const m of h.matchAll(/(?:placeholder|alt|aria-label|title)="([^"]{2,})"/g)){const t=m[1].trim();if(!texts.has("@"+t))texts.set("@"+t,f);}}
const arr=[...texts.keys()];
fs.writeFileSync("all-texts.txt",arr.join("\n"));
const pat=/\b(a criar|eletr[óo]nic|utilizador|equipa|ficheiro|ecr[ãa]|telem[óo]vel|cr[íi]ticas?|introduza|\btua\b|\bteu\b|\btuas\b|\bteus\b|est[ãa]o a |a si\b|consigo|actualiza|facto|contacto|sítio|descarregar|partilh|ligação|palavra-passe|tens\b|vais\b|queres|podes|ficas|Pretende|Equipa|equipe|preparação|pensar em)/i;
console.log(arr.length,"textos únicos");
for(const t of arr) if(pat.test(t)) console.log("PT-PT?", t.slice(0,160));
