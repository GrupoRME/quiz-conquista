const fs = require("fs");
const f = __dirname + "/gen-docs.cjs";
const lines = fs.readFileSync(f, "utf8").split("\n");
const out = [];
for (const l of lines) {
  if (l.startsWith('a.push("- **Ramo EUA (`?geo=US`)**')) {
    out.push('a.push("- **Resumo do perfil (telas 33, 82, 84, 85)**: no original o nível de confiança é fixo no funil (`level`) e o marcador do termômetro anima até uma posição derivada dele; esta versão substitui isso por uma pontuação calculada das respostas (ver seção 7). A landing em `?geo=US` ainda usa o texto legal padrão (no original há texto próprio por país).");');
  } else out.push(l);
}
let doc = out.join("\n");
const marker = 'fs.writeFileSync(path.join(root, "QUIZ_AUDIT.md")';
const regra = `a.push("\\n## 7. Resumo do perfil — regra de cálculo (personalização pedida)\\n");
a.push("**Fonte única:** pontuação de confiança de 0 a 100, calculada em \`js/script.js\` (\`QuizProfile.compute\`). Selo, cor, posição do marcador, mensagem de alerta e cartões derivam dela ou das mesmas respostas; resposta ausente vale 55 (neutro).");
a.push("| Resposta | Alta = 100 | Média = 55 | Baixa = 15 |\\n|---|---|---|---|");
a.push("| \`knowledge\` (\\"O quanto você entende as mulheres?\\") | Muito bem | Às vezes é difícil | Não muito |");
a.push("| \`readiness_for_changes\` (\\"O quanto você está decidido…?\\") | Totalmente decidido | Só estou explorando | Ainda não tenho certeza |");
a.push("| \`chasing_level_men\` (correndo atrás dela) | pouco | médio | muito |");
a.push("| \`incosistent_level_men\` (comportamento dela difícil de entender) | pouco | médio | muito |");
a.push("| \`focus\` (facilidade de manter o foco) | amplo | moderado | limitado |");
a.push("\\n| Métrica | Pesos |\\n|---|---|");
a.push("| **Nível de confiança** | knowledge 25% · readiness 25% · chasing 20% · incosistent 15% · focus 15% |");
a.push("| Motivação | readiness 60% · focus 40% |");
a.push("| Potencial | knowledge 50% · chasing 30% · incosistent 20% |");
a.push("| Paciência | focus 60% · readiness 40% |");
a.push("| Estratégia | knowledge 60% · incosistent 40% |");
a.push("\\n**Faixas** (selo, marcador e mensagem): 0–33 = Baixo · 34–66 = Médio · 67–100 = Alto. Marcador em \`10 + 334 × pontuação/100\` (limitado às bordas). Cartões: Alto/Moderado/Baixo (Paciência: Amplo/Moderado/Limitado; Estratégia: Alto/Médio/Baixo) pelas mesmas faixas. A pontuação é guardada em \`confidence_score\` e \`confidence_level\`.");
a.push("**Atenção:** esta regra foi definida a pedido (o funil original não tem pontuação). Os textos de alerta dos níveis Baixo e Médio são novos; o de Alto é o texto original.\\n");
`;
if (!doc.includes(marker)) throw new Error("âncora do gen-docs");
doc = doc.replace(marker, regra + marker);
fs.writeFileSync(f, doc);
console.log("ok");
