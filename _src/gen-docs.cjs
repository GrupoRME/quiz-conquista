// Gera QUIZ_AUDIT.md (inventário) e QUIZ_TRANSLATIONS.md (tabela EN -> pt-BR) em quiz-pt-br/
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..", "quiz-pt-br");
const j = require("./funnel.json");
const dict = require("./pt-dict.json");
const S = j.screens;
const idx = (id) => (id ? S.findIndex((s) => s.id === id) : null);
const strip = (t) => String(t == null ? "" : t).replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
const norm = (x) => strip(x).replace(/[’`‘]/g, "'").toLowerCase();

// ---- texto pt renderizado (DOM capturado) por tela
const domDir = path.join(__dirname, "dom");
const domText = {};
for (const f of fs.readdirSync(domDir).filter((f) => /^s\d{3}-/.test(f))) {
  const i = +f.slice(1, 4);
  let h = fs.readFileSync(path.join(domDir, f), "utf8").replace(/<svg[\s\S]*?<\/svg>/g, "").replace(/<(script|style)[\s\S]*?<\/\1>/g, "");
  const t = [];
  for (const m of h.matchAll(/>([^<>]{2,})</g)) {
    const x = strip(m[1]);
    if (x && !t.includes(x)) t.push(x);
  }
  domText[i] = t;
}

// ---- dicionário reverso pt -> en (do bundle de tradução do site)
const rev = {};
for (const [k, v] of Object.entries(dict)) {
  const key = k.replace(/^\[[^\]]+\]\s*/, "");
  const nv = norm(v);
  if (nv && !(nv in rev)) rev[nv] = strip(key);
}

// ---- QUIZ_AUDIT.md
let a = [];
a.push("# QUIZ_AUDIT — inventário do quiz original (M Academy / Muses Academy)\n");
a.push("Origem: `https://therealintro.com/` (funil `MissYou_men`, versão 853, tema \"For Men\"), oferta em `https://quiz.musesacademy.io/offer-generated`.");
a.push("O funil original é um app Vue; o JSON do funil (`funnel.json`, 116 telas) e o DOM renderizado em pt foram usados como fonte. Nenhum framework foi levado para esta versão.\n");
a.push("## 1. Resumo\n");
const types = {};
S.forEach((s) => (types[s.type] = (types[s.type] || 0) + 1));
a.push("| Tipo | Telas |\n|---|---|");
Object.entries(types).sort((x, y) => y[1] - x[1]).forEach(([t, n]) => a.push(`| ${t} | ${n} |`));
a.push(`| **Total no JSON** | **${S.length}** |`);
a.push("\nTelas fora do JSON (rotas separadas): página da oferta (`/offer-generated`, outro domínio), popup de raspadinha concluída, popup \"Ainda está pensando?\" da oferta, modal de pergunta do loader. Checkout/pagamento: **fora do escopo pedido**, não reproduzido.\n");
a.push("## 2. Fluxo (Brasil = ramo `fallback` de geo, teste de marketing = `default`)\n");
a.push("Landing (25) → condição geo (97) → popularidade (96) → status de relacionamento (41) → condição de teste (114) → objetivo (0) → … ramos por status/objetivo … → resumo/plano → loader (99) → e-mail (87/88/90 por objetivo) → assinatura de e-mails (17) → nome (18) → nome dela (21) → pré-oferta (106–108) → raspadinha (19) → **oferta**.");
a.push("Alcançáveis no ramo Brasil: 93 de 116 telas (verificado por `_src/graph-check.cjs`, 231.621 estados explorados). As demais pertencem ao ramo EUA/PR/VI/GU/MP/AS (`?geo=US`) ou a variantes de teste de marketing (`?mt=quiz_money_question` / `?mt=new_goal_missu_men`); ver seção 4.\n");
a.push("## 3. Inventário de telas\n");
a.push("Colunas: `#` posição no JSON · tipo · nome interno · título (pt renderizado) · opções (pt) · próxima tela · ramificações.\n");
a.push("| # | Tipo | Nome interno | Título (pt) | Opções (pt) | Próxima | Ramificações / variável |\n|---|---|---|---|---|---|---|");
S.forEach((s, i) => {
  const t = domText[i] || [];
  const opts = (s.answers && s.answers.options) ? s.answers.options.length : 0;
  let title = "";
  if (s.type !== "condition") {
    // título = primeiro texto do DOM após rótulos de topo
    title = t.find((x) => x.length > 8 && !/^(M Academy|Seu perfil|Mentalidade e Desejos|Conhecimento e Habilidades|Quase lá)$/.test(x)) || "";
  }
  let optsPt = "";
  if (opts) {
    const k = t.findIndex((x) => x === title);
    optsPt = t.slice(k + 1, k + 1 + opts + (s.type === "multiChoice" ? 1 : 0)).join(" · ");
  }
  let br = "";
  if (s.type === "condition") br = `${s.conditionSource || "variable"}${s.variableId ? ":" + s.variableId : ""} → ` + s.variants.map((v) => `${v.conditionValue}→${idx(v.nextScreenId)}`).join(", ");
  else if (s.answers && s.answers.options) br = `var \`${s.answers.variableId || "-"}\`: ` + s.answers.options.map((o, n) => `${n + 1}=${o.variableValue ?? "-"}→${idx(o.nextScreenId || s.nextScreenId)}`).join(", ");
  else if (s.variableId) br = `var \`${s.variableId}\``;
  a.push(`| ${i} | ${s.type} | ${(s.screenName && s.screenName.name) || ""} | ${title.slice(0, 90).replace(/\|/g, "/")} | ${optsPt.slice(0, 160).replace(/\|/g, "/")} | ${s.type === "condition" ? "-" : idx(s.nextScreenId) ?? "(por opção)"} | ${br.replace(/\|/g, "/")} |`);
});

a.push("\n## 4. Ramificações e regras\n");
a.push("- **Geo** (condições 81, 86, 91, 97, 98, 101): EUA, Porto Rico, Ilhas Virgens Americanas, Guam, Marianas do Norte e Samoa Americana seguem o ramo A (telas 16, 24, 26–28, 34–38, 64, 67–69, 82–85, 95, 110…); qualquer outro país segue `fallback`. No original o país vem do IP (`event.fx2.io/show/geo`). Aqui: padrão = fallback (Brasil); `?geo=US` força o ramo EUA para teste.");
a.push("- **Teste de marketing** (condições 111, 114): `default`/nulo → fluxo normal; `quiz_money_question` → tela 112; `new_goal_missu_men` → tela 115. Padrão aqui: `default`; `?mt=` força variantes.");
a.push("- **Variáveis**: `age`, `goal` (`make_her_obsessed` | `make_her_choose_me` | `make_her_want_me`), `relationship_status` (`single` | `complicated` | `in_relationship` | `married`), `readiness_for_changes` (`perfect` | `moderate` | `low`), `name`, `crush_name`, `email`, além das respostas das perguntas intermediárias.");
a.push("- **Single choice**: ao tocar, marca `selected` e avança em 150 ms para `option.next || screen.next`. **Multi choice**: alterna `selected`; \"Continuar\" fica desabilitado sem seleção. **Texto**: \"Continuar\" desabilitado com campo vazio; Enter envia. **E-mail**: botão sempre ativo; e-mail inválido mostra erro (`O e-mail deve ser válido`) e marca o campo `--invalid`.");
a.push("- **Loader** (telas 16/99): 3 itens em sequência, 1% a cada (duração×1000+300)/100 ms; em 48→49% abre o modal de pergunta (Sim/Não) e pausa; ao concluir cada item aparece o texto final + ícone de check e o carrossel avança; no fim vai para a próxima tela.");
a.push("- **Raspadinha** (tela 19): canvas 343×343, pincel circular de raio 40; ao soltar após raspar, limpa a camada e abre o popup \"Uhu! … 63% DE DESCONTO\" → CONTINUAR → oferta.");
a.push("- **Oferta**: cronômetro de 10:00 (expira → popup \"Ainda está pensando?\" com +7 min), seleção de plano (12 / 4 / 24 semanas; texto legal atualiza valor e periodicidade), FAQ expansível, botões \"Obter meu plano\" rolam até a seleção de planos (checkout não reproduzido).\n");

a.push("## 5. Checklist de validação (somente itens efetivamente executados estão marcados)\n");
a.push("- [x] Todas as 100 telas renderizáveis carregam sem erro de parse nem de rede (teste automatizado via Playwright, desktop).");
a.push("- [x] Comparação de pixels original × reprodução, 1440×900 e 390×844, para todas as telas estáticas (sem loader/raspadinha): diferenças residuais atribuídas a animações/temporização (imagens com fade, gráficos animados); telas de e-mail e tela 15 corrigidas após a comparação.");
a.push("- [x] Fluxo completo no navegador, ramo Brasil, 1º objetivo e 1ª opção em cada pergunta: landing → … → loader (3 perguntas) → e-mail → assinatura → nome → nome dela → pré-oferta → raspadinha → oferta; 48 passos, 0 erros de console.");
a.push("- [x] Grafo: todas as combinações de respostas (231.621 estados) — 93 telas alcançadas no ramo Brasil; 95 no ramo EUA; único fim de fluxo no ramo Brasil é a raspadinha (→ oferta).");
a.push("- [x] Oferta: altura total de rolagem idêntica ao original (5777 px desktop / 5758 px mobile); diferença de pixels < 0,7% (desktop) e < 3,5% (mobile) por faixa, devida ao cronômetro e à animação do botão.");
a.push("- [x] Mobile 390×844: loader com modal verificado visualmente.");
a.push("- [x] Navegador, ramo Brasil: 5 percursos automatizados cobrindo os 3 objetivos (`make_her_obsessed`, `make_her_choose_me`, `make_her_want_me`) e os 4 status (solteiro, complicado, em relacionamento, casado); todos chegam à oferta, 0 erros de console. Somados aos demais testes, 82+ telas distintas visitadas em percurso real.");
a.push("- [x] Navegador: 2 percursos `?geo=US` e 2 com `?mt=quiz_money_question` / `?mt=new_goal_missu_men` chegam à oferta (no ramo EUA a pré-oferta segue direto para a oferta, sem raspadinha, como no original; bug de navegação encontrado e corrigido nesse teste).");
a.push("- [x] **Todas as combinações que mudam o funil, no navegador**: 12 (status × objetivo) no Brasil + 36 no ramo EUA (status × objetivo × readiness `perfect`/`moderate`/`low`) + 2 variantes de teste de marketing = 50 percursos até o loader; o caminho de telas percorrido foi comparado tela a tela com o caminho esperado, calculado só a partir do `funnel.json` original: 50/50 idênticos (83 telas distintas cobertas).");
a.push("- [x] Depois do loader, por objetivo: Brasil (loader → e-mail → assinatura → nome → nome dela → pré-oferta → raspadinha → oferta) e EUA (… → pré-oferta → oferta) para os 3 objetivos: 6/6 idênticos ao esperado.");
a.push("- [x] **Oferta personalizada**: o original troca textos e foto conforme objetivo, status e idade (descoberto na verificação). Reproduzido com 12 variantes (3 objetivos × 4 status) capturadas do original + foto por faixa etária (18-29, 30-39, 40-49, 50+). Sem respostas, usa a versão padrão do original. Texto \"Complicado\" do status aparece como \"Enrolado\", alinhado à opção renomeada.");
a.push("- [x] Estados normal/hover/ativo do cartão de resposta: estilos computados idênticos ao original. [ ] Hover/foco de botões, campos e demais componentes não comparados um a um (CSS é o original).");
a.push("- [x] Raspadinha com eventos `touch` sintéticos em emulação mobile (390×844, touch): apaga a camada e abre o popup. [ ] Não testado em aparelho real.");
a.push("- [x] Botão voltar do navegador e seta do cabeçalho testados em um ponto do fluxo (interstitial → pergunta). [ ] Não testado em todos os pontos.");
a.push("- [x] Oferta: seleção de plano (aria-checked, classes e texto legal R$/dias por plano), FAQ (mesmas classes do original), cronômetro, popup \"Ainda está pensando?\" ao zerar (+7 min), botão do topo rola até os planos, código promocional `Nome_oct26`.");
a.push("- [x] Varredura de inglês residual em todo o texto visível, `alt`, `aria-label` e `placeholder`: nenhum texto em inglês restante (exceto exceções documentadas).");
a.push("- [ ] Não verificado: se o popup \"Ainda está pensando?\" reaparece no original após os 7 minutos extras (aqui não reaparece).");
a.push("- [ ] Integrações (eventos `event.fx2.io`, pixel, verificação de e-mail existente, checkout/Solidgate/PayPal/Google Pay): **não reproduzidas** nem testadas.\n");

a.push("## 6. Diferenças conhecidas em relação ao original\n");
a.push("- Reescrito em HTML/CSS/JS puro, sem Vue/Pinia/Tailwind em runtime. O CSS é o CSS compilado do original (inclui classes utilitárias de origem Tailwind; é CSS puro, sem build nem dependência).");
a.push("- Raspadinha: a animação de dica (mão + rastro) foi reimplementada em JavaScript puro a partir dos dados do Lottie original (`/lottie/scratch-pre-offer.json`: 7 posições, curva cubic-bezier(.5,.35,.15,1), laço de ~2 s), sem biblioteca Lottie. As animações do gráfico de plano continuam em CSS do original.");
a.push("- Carrossel de depoimentos do loader: rolagem horizontal nativa com scroll-snap (swipe no celular, arraste do mouse e scroll lateral no desktop), cartão central com o vizinho aparecendo na lateral, bolinhas indicadoras e avanço automático a cada etapa de carregamento concluída. É melhor que o original, que não permitia rolar para o lado.");
a.push("- Geolocalização, teste de marketing, verificação de e-mail já cadastrado e telemetria: ausentes (ver seção 4).");
a.push("- Páginas legais (`/terms`, `/privacy`, `/subterms`) abrem no site original, que as publica **somente em inglês**; tradução jurídica não foi feita.");
a.push("- Textos do site original em português de Portugal foram convertidos para pt-BR (ver `QUIZ_TRANSLATIONS.md`, coluna Observações). Defeitos do original corrigidos: nome dela não substituído (\"any man\"), `Resultados/p>`, objetivo divergente na oferta (mantido o do bloco superior no restante), preço por dia.");
a.push("- **Resumo do perfil (telas 33, 82, 84, 85)**: no original o nível de confiança é fixo no funil (`level`) e o marcador do termômetro anima até uma posição derivada dele; esta versão substitui isso por uma pontuação calculada das respostas (ver seção 7). A landing em `?geo=US` ainda usa o texto legal padrão (no original há texto próprio por país).");
a.push("- Botão da oferta \"OBTER MEU PLANO\": rola até os planos em vez de abrir o checkout.\n");
a.push("\n## 7. Resumo do perfil — regra de cálculo (personalização pedida)\n");
a.push("**Fonte única:** pontuação de confiança de 0 a 100, calculada em `js/script.js` (`QuizProfile.compute`). Selo, cor, posição do marcador, mensagem de alerta e cartões derivam dela ou das mesmas respostas; resposta ausente vale 55 (neutro).");
a.push("| Resposta | Alta = 100 | Média = 55 | Baixa = 15 |\n|---|---|---|---|");
a.push("| `knowledge` (\"O quanto você entende as mulheres?\") | Muito bem | Às vezes é difícil | Não muito |");
a.push("| `readiness_for_changes` (\"O quanto você está decidido…?\") | Totalmente decidido | Só estou explorando | Ainda não tenho certeza |");
a.push("| `chasing_level_men` (correndo atrás dela) | pouco | médio | muito |");
a.push("| `incosistent_level_men` (comportamento dela difícil de entender) | pouco | médio | muito |");
a.push("| `focus` (facilidade de manter o foco) | amplo | moderado | limitado |");
a.push("\n| Métrica | Pesos |\n|---|---|");
a.push("| **Nível de confiança** | knowledge 25% · readiness 25% · chasing 20% · incosistent 15% · focus 15% |");
a.push("| Motivação | readiness 60% · focus 40% |");
a.push("| Potencial | knowledge 50% · chasing 30% · incosistent 20% |");
a.push("| Paciência | focus 60% · readiness 40% |");
a.push("| Estratégia | knowledge 60% · incosistent 40% |");
a.push("\n**Faixas** (selo, marcador e mensagem): 0–33 = Baixo · 34–66 = Médio · 67–100 = Alto. Marcador em `10 + 334 × pontuação/100` (limitado às bordas). Cartões: Alto/Moderado/Baixo (Paciência: Amplo/Moderado/Limitado; Estratégia: Alto/Médio/Baixo) pelas mesmas faixas. A pontuação é guardada em `confidence_score` e `confidence_level`.");
a.push("**Atenção:** esta regra foi definida a pedido (o funil original não tem pontuação). Os textos de alerta dos níveis Baixo e Médio são novos; o de Alto é o texto original.\n");
fs.writeFileSync(path.join(root, "QUIZ_AUDIT.md"), a.join("\n") + "\n");

// ---- QUIZ_TRANSLATIONS.md
const rows = [];
const seen = new Set();
function addRow(stage, en, pt, loc, obs) {
  const k = stage + "|" + pt;
  if (seen.has(k)) return;
  seen.add(k);
  rows.push(`| ${stage} | ${String(en || "—").replace(/\|/g, "/")} | ${String(pt).replace(/\|/g, "/")} | ${loc} | ${obs || ""} |`);
}
const PTPT = [/\bA criar\b/, /eletr[oó]nico/, /utilizadores/, /críticas?/, /reembolsado a si/, /Equipa\b/, /Introduza/, /O seu /, /Pretende/, /actualiza/];
S.forEach((s, i) => {
  if (s.type === "condition") return;
  const t = domText[i] || [];
  const loc = `funnel.json[${i}] → js/screens-data.js`;
  const stage = `#${i} ${s.type}`;
  // pares diretos título/opções
  if (s.title && s.title.text) {
    const en = strip(s.title.text);
    const pt = t.find((x) => rev[norm(x)] && norm(rev[norm(x)]) === norm(en)) || null;
    if (pt) addRow(stage, en, pt, loc + " (título)");
  }
  if (s.answers && s.answers.options) {
    s.answers.options.forEach((o) => {
      const en = strip(o.value);
      const pt = t.find((x) => rev[norm(x)] && norm(rev[norm(x)]) === norm(en));
      if (pt) addRow(stage, en, pt, loc + " (alternativa)");
    });
  }
});
// todos os textos pt renderizados, com EN quando houver no dicionário do site
S.forEach((s, i) => {
  (domText[i] || []).forEach((pt) => {
    const en = rev[norm(pt)];
    const adj = PTPT.some((r) => r.test(pt)) ? "ajustado de pt-PT para pt-BR" : "";
    addRow(`#${i} ${s.type}`, en, pt, `js/screens-data.js (tela ${i})`, en ? adj : (adj || "EN não localizado no dicionário do site; texto pt capturado do site ao vivo"));
  });
});
for (const [name, label] of [["offer-app.html", "oferta"], ["scratch-after.html", "popup raspadinha"], ["loader-modal.html", "modal do loader"]]) {
  let h = fs.readFileSync(path.join(domDir, name), "utf8").replace(/<svg[\s\S]*?<\/svg>/g, "").replace(/<(script|style)[\s\S]*?<\/\1>/g, "");
  const seenT = new Set();
  for (const m of h.matchAll(/>([^<>]{2,})</g)) {
    const pt = strip(m[1]);
    if (!pt || seenT.has(pt)) continue;
    seenT.add(pt);
    const en = rev[norm(pt)];
    const adj = PTPT.some((r) => r.test(pt)) ? "ajustado de pt-PT para pt-BR" : "";
    addRow(label, en, pt, name === "offer-app.html" ? "js/offer-data.js" : "js/script.js / offer-data.js", en ? adj : (adj || "EN não localizado no dicionário do site; texto pt capturado do site ao vivo"));
  }
}
let tr = [];
tr.push("# QUIZ_TRANSLATIONS — textos do quiz (inglês → português brasileiro)\n");
tr.push("Fonte do português: dicionário de tradução do próprio site (`pt-*.js`, lido como texto) e texto renderizado capturado do site com `quizlang=pt`. O site mistura português do Brasil e de Portugal; trechos de Portugal foram convertidos para pt-BR e marcados na coluna Observações.");
tr.push("A coluna \"Original (EN)\" vem do dicionário do site (chave em inglês); quando o texto não existe lá, aparece \"—\". Não afirmo cobertura de 100% do inglês original: o funil também carrega textos de componentes que só existem na versão renderizada.\n");
tr.push("## Ajustes pt-PT → pt-BR aplicados\n");
tr.push("| Site (pt) | Esta versão (pt-BR) |\n|---|---|");
[
  ["A criar o seu plano pessoal...", "Criando seu plano pessoal..."],
  ["Pretende receber mensagens de correio eletrónico com amor vida dicas de crescimento e actualizações de produtos?", "Deseja receber e-mails com dicas de crescimento para a vida amorosa e atualizações de produtos?"],
  ["1 críticas / 16 críticas", "1 avaliação / 16 avaliações"],
  ["Equipa", "Equipe"],
  ["O seu nível de preparação", "Seu nível de preparação"],
  ["Introduza o seu nome", "Digite seu nome"],
  ["Os utilizadores adoram os nossos planos", "Os usuários adoram nossos planos"],
  ["…será reembolsado a si.", "…será reembolsado a você."],
  ["O seu código promocional foi aplicado!", "Seu código promocional foi aplicado!"],
  ["Escolha o seu plano", "Escolha seu plano"],
  ["Ao continuar, concorda com", "Ao continuar, você concorda com"],
  ["fortalecer ainda mais a ligação", "fortalecer ainda mais o vínculo"],
  ["no seu subscrição", "na sua assinatura"],
  ["Para avançar, especificar", "Para continuar, responda"],
  ["Ainda está a pensar? / Aqui está 7 minutos extras / Use o meu tempo extra", "Ainda está pensando? / Aqui estão 7 minutos extras / Usar meu tempo extra"],
  ["Resultados/p> (tag quebrada)", "Resultados"],
  ["O correio eletrónico deve ser válido (erro de e-mail)", "O e-mail deve ser válido"]
].forEach((r) => tr.push(`| ${r[0]} | ${r[1]} |`));
tr.push("\n## Rótulos de acessibilidade traduzidos\n");
tr.push("`alt` e `aria-label` em inglês (`select img`, `banner`, `Go to slide N`, `N of M`, `payment providers` …) foram traduzidos em `_src/build.cjs` (tabela `ATTR_PT`).\n");
tr.push("## Exceções (mantidas no idioma original)\n");
tr.push("- Marca e nomes próprios: M Academy, Muses Academy, nomes de avaliadores (Michael, Petar, Asab Mahmood), Santiago Delgado.");
tr.push("- Rodapé legal: `© 2026 AppStar Inc, Office 402, 1435 Vine Street, Cincinnati, Ohio, 45202, USA. All rights reserved.` (texto legal fixo do original, vindo de `event.fx2.io/api/landing/terms?filter=legal_copyright`).");
tr.push("- E-mail de suporte: support@musesacademy.io.");
tr.push("- Páginas `/terms`, `/privacy`, `/subterms`: existem apenas em inglês no site original; links apontam para elas.");
tr.push("- Valores monetários em R$ e percentuais: iguais ao site em pt (moeda definida pelo site).\n");
tr.push("## Tabela completa\n");
tr.push("| Etapa | Original (EN) | Português (pt-BR) | Localização | Observações |\n|---|---|---|---|---|");
tr.push(...rows);
fs.writeFileSync(path.join(root, "QUIZ_TRANSLATIONS.md"), tr.join("\n") + "\n");
console.log("audit ok; traduções:", rows.length);
