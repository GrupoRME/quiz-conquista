const fs = require("fs");
const f = __dirname + "/gen-docs.cjs";
let s = fs.readFileSync(f, "utf8").split("\n");
const out = [];
for (const line of s) {
  out.push(line);
  if (line.startsWith('a.push("- [x] Navegador: 2 percursos `?geo=US`')) {
    out.push('a.push("- [x] **Todas as combinações que mudam o funil, no navegador**: 12 (status × objetivo) no Brasil + 36 no ramo EUA (status × objetivo × readiness `perfect`/`moderate`/`low`) + 2 variantes de teste de marketing = 50 percursos até o loader; o caminho de telas percorrido foi comparado tela a tela com o caminho esperado, calculado só a partir do `funnel.json` original: 50/50 idênticos (83 telas distintas cobertas).");');
    out.push('a.push("- [x] Depois do loader, por objetivo: Brasil (loader → e-mail → assinatura → nome → nome dela → pré-oferta → raspadinha → oferta) e EUA (… → pré-oferta → oferta) para os 3 objetivos: 6/6 idênticos ao esperado.");');
    out.push('a.push("- [x] **Oferta personalizada**: o original troca textos e foto conforme objetivo, status e idade (descoberto na verificação). Reproduzido com 12 variantes (3 objetivos × 4 status) capturadas do original + foto por faixa etária (18-29, 30-39, 40-49, 50+). Sem respostas, usa a versão padrão do original. Texto \\"Complicado\\" do status aparece como \\"Enrolado\\", alinhado à opção renomeada.");');
  }
}
let doc = out.join("\n");
// diferenças conhecidas
doc = doc.replace(
  'a.push("- Botão da oferta',
  'a.push("- **Ramo EUA (`?geo=US`)**: nas telas de resumo 82/84/85, os blocos \\"Paciência\\" e \\"Estratégia\\" mudam no original conforme as respostas de foco e conhecimento; aqui mostram sempre o valor padrão (Limitado/Baixo). Não consegui reproduzir a regra no original para capturar os valores. No ramo Brasil esses blocos são fixos. A landing em `?geo=US` também usa o texto legal padrão (no original há texto próprio por país).");\na.push("- Botão da oferta'
);
fs.writeFileSync(f, doc);
console.log("ok");
