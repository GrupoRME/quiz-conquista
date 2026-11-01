// Caminhos esperados (calculados só a partir do funnel.json ORIGINAL) para cada combinação que muda o funil.
// Regra de escolha: nas perguntas que definem relationship_status / goal / readiness_for_changes usa o valor da combinação;
// nas demais, a 1ª alternativa. Para ao chegar na tela loader (ou na oferta/fim).
const j = require("./funnel.json");
const S = Object.fromEntries(j.screens.map((s, i) => [s.id, { ...s, i }]));
const start = j.screens.find((s) => s.type === "landing").id;
const STATUS = ["single", "complicated", "in_relationship", "married"];
const GOALS = ["make_her_obsessed", "make_her_choose_me", "make_her_want_me"];
const READY = ["perfect", "moderate", "low"];

function resolve(s, vars, geo, mt) {
  const fb = s.variants.find((v) => v.conditionValue === "fallback");
  if (s.conditionSource === "geo") return ((geo && s.variants.find((v) => v.conditionValue === geo)) || fb).nextScreenId;
  if (s.conditionSource === "marketingTest") return ((s.variants.find((v) => v.conditionValue === mt)) || s.variants.find((v) => v.conditionValue === "default") || fb).nextScreenId;
  const v = s.variants.find((x) => x.conditionValue === vars[s.variableId]);
  return ((v || fb) || {}).nextScreenId || null;
}
function walk(choice, geo, mt) {
  const vars = {}; const path = []; let id = start; let guard = 0;
  while (id && guard++ < 300) {
    const s = S[id];
    if (s.type === "condition") { id = resolve(s, vars, geo, mt); continue; }
    path.push(s.i);
    if (s.type === "loader") break;
    if ((s.type === "singleChoice" || s.type === "landing") && s.answers && s.answers.options.length) {
      const varId = s.answers.variableId;
      let o = s.answers.options[0];
      if (varId && choice[varId] !== undefined) o = s.answers.options.find((x) => x.variableValue === choice[varId]) || o;
      if (varId) vars[varId] = o.variableValue;
      id = o.nextScreenId || s.nextScreenId; continue;
    }
    id = s.nextScreenId;
  }
  return path;
}
const out = [];
for (const geo of [null, "US"]) {
  for (const st of STATUS) for (const g of GOALS) for (const r of geo ? READY : ["perfect"]) {
    out.push({ geo, status: st, goal: g, readiness: r, path: walk({ relationship_status: st, goal: g, readiness_for_changes: r }, geo, "default") });
  }
}
for (const mt of ["quiz_money_question", "new_goal_missu_men"]) out.push({ geo: null, mt, status: "single", goal: "make_her_obsessed", readiness: "perfect", path: walk({ relationship_status: "single", goal: "make_her_obsessed" }, null, mt) });
require("fs").writeFileSync(__dirname + "/expected-paths.json", JSON.stringify(out));
console.log("combinações:", out.length, "| exemplo:", out[0].path.join(","));
const uniq = new Set(); out.forEach((o) => o.path.forEach((i) => uniq.add(i)));
console.log("telas distintas cobertas até o loader:", uniq.size);
