const fs=require("fs");
let h=fs.readFileSync("dom/offer-app.html","utf8").replace(/<svg[\s\S]*?<\/svg>/g,m=>"<svg…"+m.length+"/>").replace(/<!---->/g,"").replace(/ data-v-[0-9a-f]+=""/g,"");
for(const k of ["reservado para","ui-timer-item minutes","João_oct26","id=\"product-1\"","offer_faq_view","POUPE"]){const i=h.indexOf(k);console.log("##",k,i);console.log(h.slice(Math.max(0,i-350),i+900));}
