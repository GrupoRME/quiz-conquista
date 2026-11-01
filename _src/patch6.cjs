const fs = require("fs");
const f = __dirname + "/gen-docs.cjs";
let s = fs.readFileSync(f, "utf8").split("\n");
const out = [];
for (const line of s) {
  if (line.startsWith('a.push("- [ ] Percorrer no navegador os demais objetivos')) {
    out.push('a.push("- [x] Navegador, ramo Brasil: 5 percursos automatizados cobrindo os 3 objetivos (`make_her_obsessed`, `make_her_choose_me`, `make_her_want_me`) e os 4 status (solteiro, complicado, em relacionamento, casado); todos chegam à oferta, 0 erros de console. Somados aos demais testes, 82+ telas distintas visitadas em percurso real.");');
  } else if (line.startsWith('a.push("- [ ] Percorrer no navegador o ramo `?geo=US`')) {
    out.push('a.push("- [x] Navegador: 2 percursos `?geo=US` e 2 com `?mt=quiz_money_question` / `?mt=new_goal_missu_men` chegam à oferta (no ramo EUA a pré-oferta segue direto para a oferta, sem raspadinha, como no original; bug de navegação encontrado e corrigido nesse teste).");');
  } else if (line.startsWith('a.push("- [ ] Raspadinha e popups testados em touch real')) {
    out.push('a.push("- [x] Raspadinha com eventos `touch` sintéticos em emulação mobile (390×844, touch): apaga a camada e abre o popup. [ ] Não testado em aparelho real.");');
  } else if (line.startsWith('a.push("- [ ] Botão voltar (seta)')) {
    out.push('a.push("- [x] Botão voltar do navegador e seta do cabeçalho testados em um ponto do fluxo (interstitial → pergunta). [ ] Não testado em todos os pontos.");');
    out.push('a.push("- [x] Oferta: seleção de plano (aria-checked, classes e texto legal R$/dias por plano), FAQ (mesmas classes do original), cronômetro, popup \\"Ainda está pensando?\\" ao zerar (+7 min), botão do topo rola até os planos, código promocional `Nome_oct26`.");');
    out.push('a.push("- [x] Varredura de inglês residual em todo o texto visível, `alt`, `aria-label` e `placeholder`: nenhum texto em inglês restante (exceto exceções documentadas).");');
    out.push('a.push("- [ ] Não verificado: se o popup \\"Ainda está pensando?\\" reaparece no original após os 7 minutos extras (aqui não reaparece).");');
  } else out.push(line);
}
fs.writeFileSync(f, out.join("\n"));
console.log("ok");
