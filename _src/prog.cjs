const fs=require("fs");const j=require("./funnel.json");
const files=fs.readdirSync("dom").filter(f=>/^s\d{3}-/.test(f));
const rows=[];
for(const f of files){const i=+f.slice(1,4);const h=fs.readFileSync("dom/"+f,"utf8");
 const v=[...h.matchAll(/--section-progress: (\d+)%/g)].map(m=>m[1]);
 const seg=(h.match(/id="quizSegmentTitle"[^>]*>([^<]*)</)||[])[1];
 const pb=j.screens[i].progressBar;
 if(v.length) rows.push(`${i} sec=${pb&&pb.currentSection} [${v}] ${seg}`);}
console.log(rows.join("\n"));
