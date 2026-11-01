const j = require("./funnel.json");
const S = Object.fromEntries(j.screens.map((s, i) => [s.id, { ...s, i }]));
const ix = (i) => j.screens[i].id;
function resolve(s, vars, geo) {
  const fb = s.variants.find((v) => v.conditionValue === "fallback");
  if (s.conditionSource === "geo") return ((geo && s.variants.find((v) => v.conditionValue === geo)) || fb).nextScreenId;
  if (s.conditionSource === "marketingTest") return (s.variants.find((v) => v.conditionValue === "default") || fb).nextScreenId;
  const v = s.variants.find((x) => x.conditionValue === vars[s.variableId]);
  return ((v || fb) || {}).nextScreenId || null;
}
const out = [];
for (const [geo, loaderIdx] of [[null, 99], ["US", 16]]) for (const goal of ["make_her_obsessed", "make_her_choose_me", "make_her_want_me"]) {
  const vars = { goal, readiness_for_changes: "perfect" }; const path = []; let id = ix(loaderIdx); let g = 0;
  while (id && g++ < 100) { const s = S[id]; if (s.type === "condition") { id = resolve(s, vars, geo); continue; } path.push(s.i); id = s.nextScreenId; }
  out.push({ g: geo, goal, loader: loaderIdx, p: path });
  console.log((geo || "BR"), goal.slice(9), path.join(","));
}
require("fs").writeFileSync("../quiz-pt-br/_tmp-post.json", JSON.stringify(out));
