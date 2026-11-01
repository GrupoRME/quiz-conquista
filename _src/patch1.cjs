const fs=require("fs");let s=fs.readFileSync("_src/build.cjs","utf8");
s=s.replace(`const i = a.indexOf('<div class="fixed inset-0');`,`const i = a.search(/<div[^>]*class="fixed inset-0/);`);
s=s.replace(`extra.scratchPopup = a.slice(i).replace(/<\/div>\s*$/, "")`,`extra.scratchPopup = a.slice(i).replace(/<\/div>\s*$/, "").replace(/ data-v-[0-9a-f]+=""/g, "")`);
s=s.replace(`const k = o.lastIndexOf('<div data-v-2dbd2df2="" class="relative m-auto');
  const st = o.lastIndexOf('<div class="fixed inset-0', k);`,`const k = o.lastIndexOf('class="relative m-auto');
  const st = o.lastIndexOf('<div', o.lastIndexOf('class="fixed inset-0', k));`);
fs.writeFileSync("_src/build.cjs",s);
