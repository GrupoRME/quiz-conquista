const fs=require("fs");
const n=f=>fs.readFileSync("dom/"+f,"utf8").replace(/ data-v-[0-9a-f]+=""/g,"").replace(/<svg[\s\S]*?<\/svg>/g,"<svg/>").replace(/<!---->/g,"");
const cls=h=>[...h.matchAll(/class="([^"]*)"/g)].map(m=>m[1]);
for(const p of ["prod1","prod2"]){
 const a=n(p+"-before.html"),b=n(p+"-after.html");
 const ca=cls(a),cb=cls(b);
 console.log("==",p,a.length,b.length, a===b?"IGUAL":"");
 for(let i=0;i<Math.max(ca.length,cb.length);i++) if(ca[i]!==cb[i]) console.log(i,"\n  -",ca[i],"\n  +",cb[i]);
 const ra=a.match(/aria-checked="\w+"/)[0],rb=b.match(/aria-checked="\w+"/)[0];console.log(ra,"->",rb);
 const ta=a.replace(/<[^>]+>/g,"|").replace(/\|+/g,"|"),tb=b.replace(/<[^>]+>/g,"|").replace(/\|+/g,"|");console.log(ta===tb?"texto igual":"texto diff\n"+ta+"\n"+tb);
}
