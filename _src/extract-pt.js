const fs=require("fs");
const s=fs.readFileSync("pt-Dl7f_y6-.js","utf8");
// 1) variable table: name=`...`
const vars={};
for(const m of s.matchAll(/(?:^|[,;\s])([A-Za-z_$][\w$]*)=`((?:[^`\]|\.)*)`/g)) vars[m[1]]=m[2];
// 2) dictionary entries: "key":`val` | "key":ident | key:`val` | key:ident
const dict={};
const re=/(?:"((?:[^"\]|\.)+)"|([A-Za-z_$][\w$]*)):(?:`((?:[^`\]|\.)*)`|([A-Za-z_$][\w$]*)(?=[,}]))/g;
for(const m of s.matchAll(re)){
  const k=m[1]??m[2];
  let v=m[3]!==undefined?m[3]:vars[m[4]];
  if(v!==undefined && !(k in dict)) dict[k]=v;
}
fs.writeFileSync("pt-dict.json",JSON.stringify(dict,null,1));
console.log("vars",Object.keys(vars).length,"dict",Object.keys(dict).length);
