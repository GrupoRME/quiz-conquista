# Texto pt capturado do site ao vivo (telas especiais) — fonte para QUIZ_TRANSLATIONS.md

Capturado em 2026-10-28 com Playwright, viewport 1440x900, `quizlang=pt`. Índice = posição da tela em `funnel.json`.
Marcado [PT-PT] = trecho em português de Portugal no site; [BUG] = defeito do site (variável não substituída). Versão pt-BR a definir na tradução final.

Header de todas as telas: logo "M" + "M Academy". Perfil: rótulo "Seu perfil" acima da pergunta nas telas de pergunta.

- 16 loader (500.000+ usuários): "500.000+ usuários | escolheu M Academy | A criar o seu plano pessoal... [PT-PT] | Definindo metas | 0% | cards de avaliação"
  - Cards: Michael (EUA, "1 críticas" [PT-PT], Verificado, 8 de Junho de 2026), "Sempre fiquei ao telefone até..."; Petar (EM), "A experiência realmente me abriu os olhos para..."; Asab Mahmood (GB, 16 críticas), "Ótima maneira de consertar o que está quebrado". "Data da experiência:".
- 17 custom subscribePage: "Pretende receber mensagens de correio eletrónico com amor vida dicas de crescimento e actualizações de produtos? [PT-PT] | Sim, estou dentro | Não, obrigado"
- 18 textInput: "Qual é o seu nome? | CONTINUAR"
- 19 custom scratchPage: "Raspe e desbloqueie um desconto surpresa no seu plano! | Nossa maneira de dizer que apreciamos você! | Raspe seu desconto"
- 21 textInput: "Qual é o nome dela? | CONTINUAR"
- 25 landing: "A MANEIRA MAIS INTELIGENTE | DE DEIXÁ-LA OBCECADA | * de acordo com a sua idade | 18-29 | 30-39 | 40-49 | 50+ | Ao continuar, concorda com Termos e Condições, Política de Privacidade, Termos da Assinatura."
- 26/103 plan (choose): "Seu Plano Perfeito para | Fazer Ela Escolher Você | Com base nas suas respostas, esperamos que você se torne prioridade dela e se sinta escolhido por ela até | Dezembro de 2026 | out. nov. dez. jan. | 0% 50% 100% | Agora | Objetivo | Este gráfico é apenas para fins ilustrativos, o resultado pode variar. | CONTINUAR"
- 27/104 plan (obsessed): "... Fazê-la Ficar Obcecada por Você | Com base nas suas respostas, esperamos que ela sinta forte atração e fique obcecada por você até | Dezembro de 2026 ... | Agora | Amor Vida Mestre | ..."
- 28/105 plan (want): "... Fazê-la Querer Você | Com base nas suas respostas, esperamos que você sinta mais atração e que ela queira você ainda mais até | Dezembro de 2026 ... | Agora | Amor Vida Mestre | ..."
- 33/82/84/85 summary: "Resumo do seu perfil | Nível de confiança | {Médio|Alto|Baixo} | Baixo Médio Alto | Você está pronto — só precisa do plano certo! | Você sabe o que quer, mas precisa de uma estratégia clara. Vamos te mostrar exatamente como avançar — passo a passo. | (82/84/85: Apenas para fins ilustrativos) | Motivação {Alto|Moderado} | Potencial {Alto|Moderado} | Paciência Limitado | Estratégia Baixo | CONTINUAR"
  - 33 (sem readiness): confiança Médio, motivação Alto, potencial Alto. 82=perfect: confiança Alto, Alto/Alto. 84=moderate: Médio, Moderado/Moderado. 85=low: Baixo, Moderado/Moderado.
- 34/67/69 email (usuários): "Insira seu e-mail para ver quando você se tornará a prioridade dela! (34) | Digite seu e-mail para ver quando ela não consegue parar de pensar em você! (67) | Digite seu e-mail para ver quando ela vai pensar em você! (69) | 500 mil+ usuários se juntaram a nós! | Respeitamos sua privacidade e estamos comprometidos em proteger seus dados pessoais. Você receberá uma cópia dos seus resultados por e-mail para acessar quando quiser. Você pode se descadastrar a qualquer momento. | CONTINUAR"
- 87/88/90 email (homens): mesmos títulos | "500 mil+ homens já se juntaram a nós!" | mesma política | "Certifique-se de que seu e-mail é válido — | não perca seu | BÔNUS!" | CONTINUAR | rodapé "© 2026 AppStar Inc, Office 402, 1435 Vine Street, Cincinnati, Ohio, 45202, USA. All rights reserved."
- 35/36/37 + 106/107/108 preoffer: "Agora | Após 4 semanas | Semana 1 | Semana 2 | Semana 3 | Semana 4 | O seu nível de preparação [PT-PT] | Este gráfico é apenas para fins ilustrativos, o resultado pode variar. | Seu plano de 4 semanas para {atrair|fazer ... sentir saudade de você|fazer com que ... queira você} {nome} está pronto! | CONTINUAR"
  - [BUG] sem nome da crush o site mostra "any man" em vez do nome. Reproduzir: usar o nome digitado em `crushNamePage`.
- 39 proven: "A M Academy é baseada em ciência psicológica comprovada | Sua jornada é baseada em décadas de pesquisa | Apoiado por pesquisas científicas de universidades de renome [1], [2], [3]. | CONTINUAR"
- 64 brain (coach): "Desejos | Emoções | Ações | Seu plano personalizado é baseado em neurociência e psicologia baseada em evidências | “A M Academy oferece técnicas respaldadas pela psicologia para desencadear as emoções mais profundas dela e fazê-la se sentir atraída por você.” | Conteúdo revisado por um especialista | Santiago Delgado | Coach de Relacionamento | Perfil do especialista apresentado apenas para fins ilustrativos | CONTINUAR"
- 100 brain (variante): igual, cargo "Coach Certificado RH, Ph.D em Psicologia Social".
- 95/96 popularity: "500.000+ {usuários|homens} | já conquistaram resultados com o nosso | plano comprovado | Você não precisa correr atrás — basta despertar as emoções certas e ela não vai conseguir parar de pensar em você. | M Academy Equipa [PT-PT] | Apoiado por pesquisas científicas de universidades de renome [1], [2], [3]. | As descobertas psicológicas mais recentes sobre atração feminina, vínculo e reconexão foram apresentadas em Oxford, Harvard e Cambridge — agora chegou a sua vez de usá-las | CONTINUAR"
- 99 loader (homens): "500.000+ homens | escolheu M Academy | ... 3%"

## Rotas
Landing: `/`. Telas: `/funnel-generated/<screen.id>?landing_uuid=...&quizlang=pt&sid=...`. Navegação direta por id funciona (sem exigir sessão).
Fontes (Google Fonts): Outfit 400; Poppins 400–700 + itálicos; Inter + Nunito.
Eventos: event.fx2.io (session/create, show/geo, store, api/landing/terms).
