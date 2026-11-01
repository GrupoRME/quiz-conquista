// Verifica o grafo do funil: percorre todas as combinações de respostas (geo = fallback, marketingTest = default)
// e lista telas alcançadas / não alcançadas, além de ciclos e becos sem saída.
const j = require("./funnel.json");
const S = Object.fromEntries(j.screens.map((s, i) => [s.id, { ...s, i }]));
const start = j.screens.find((s) => s.type === "landing").id;
const reached = new Set();
const deadEnds = new Set();
const seenStates = new Set();
const GEO = process.argv[2] || null; // ex.: US

function resolve(s, vars) {
  const fb = s.variants.find((v) => v.conditionValue === "fallback");
  if (s.conditionSource === "geo") {
    const hit = GEO && s.variants.find((v) => v.conditionValue === GEO);
    return (hit || fb).nextScreenId;
  }
  if (s.conditionSource === "marketingTest") return (s.variants.find((v) => v.conditionValue === "default") || fb).nextScreenId;
  const v = s.variants.find((x) => x.conditionValue === vars[s.variableId]);
  return (v || fb || {}).nextScreenId || null;
}
function visit(id, vars, depth) {
  if (!id || depth > 200) return;
  const key = id + "|" + JSON.stringify(vars);
  if (seenStates.has(key)) return;
  seenStates.add(key);
  const s = S[id];
  if (!s) return;
  reached.add(id);
  if (s.type === "condition") return visit(resolve(s, vars), vars, depth + 1);
  if (s.type === "singleChoice" || s.type === "landing") {
    const opts = (s.answers && s.answers.options) || [];
    if (!opts.length) return visit(s.nextScreenId, vars, depth + 1);
    for (const o of opts) {
      const v2 = { ...vars };
      if (s.answers.variableId) v2[s.answers.variableId] = o.variableValue;
      const nx = o.nextScreenId || s.nextScreenId;
      if (!nx) deadEnds.add(s.i + ":" + s.type);
      visit(nx, v2, depth + 1);
    }
    return;
  }
  if (!s.nextScreenId) { deadEnds.add(s.i + ":" + s.type); return; }
  visit(s.nextScreenId, vars, depth + 1);
}
visit(start, {}, 0);
const all = j.screens.map((s, i) => i);
const idx = (id) => S[id].i;
const reachedIdx = [...reached].map(idx).sort((a, b) => a - b);
console.log("geo:", GEO || "fallback (fora de US/PR/VI/GU/MP/AS)");
console.log("estados explorados:", seenStates.size);
console.log("telas alcançadas (" + reachedIdx.length + "):", reachedIdx.join(","));
console.log("não alcançadas:", all.filter((i) => !reachedIdx.includes(i)).map((i) => i + ":" + j.screens[i].type).join(", "));
console.log("fim de fluxo (sem próxima tela):", [...deadEnds].join(", "));
