const d=require("./pt-dict.json");const j=require("./funnel.json");
const pref=new Set();const byBase={};
for(const k in d){const m=k.match(/^\[([^\]]+)\]\s*(.*)$/s);if(m){pref.add(m[1]);(byBase[m[2]]=byBase[m[2]]||{})[m[1]]=d[k];}}
console.log([...pref]);
const cands=t=>[t,t.replace(/\u2019/g,"'"),t.replace(/'/g,"`"),t.replace(/\u2019/g,"`")];
let tot=0,hit=0;const miss=[];
const look=(t)=>{for(const c of cands(t)){if(c in d)return d[c];if(c in byBase){const b=byBase[c];return b.male_funnel_v2||Object.values(b)[0]}}return null};
const check=t=>{if(!t)return;tot++;const r=look(t);if(r!==null)hit++;else miss.push(t)};
j.screens.forEach(s=>{check(s.title&&s.title.text);check(s.subtitle&&s.subtitle.text);(s.answers&&s.answers.options||[]).forEach(o=>{check(o.value);check(o.description)});});
console.log(tot,hit,miss.length);console.log(miss.slice(0,40));
const nrm=x=>x.replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").replace(/[’`‘]/g,"'").replace(/\s+/g," ").trim().toLowerCase();
const idx={};for(const k in d){const m=k.match(/^\[([^\]]+)\]\s*(.*)$/s);const base=m?m[2]:k;(idx[nrm(base)]=idx[nrm(base)]||[]).push(d[k]);}
const still=miss.filter(t=>!(nrm(t) in idx));
console.log("after fuzzy",still.length);console.log([...new Set(still.map(nrm))]);
