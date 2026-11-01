# QUIZ_TRANSLATIONS — textos do quiz (inglês → português brasileiro)

Fonte do português: dicionário de tradução do próprio site (`pt-*.js`, lido como texto) e texto renderizado capturado do site com `quizlang=pt`. O site mistura português do Brasil e de Portugal; trechos de Portugal foram convertidos para pt-BR e marcados na coluna Observações.
A coluna "Original (EN)" vem do dicionário do site (chave em inglês); quando o texto não existe lá, aparece "—". Não afirmo cobertura de 100% do inglês original: o funil também carrega textos de componentes que só existem na versão renderizada.

## Ajustes pt-PT → pt-BR aplicados

| Site (pt) | Esta versão (pt-BR) |
|---|---|
| A criar o seu plano pessoal... | Criando seu plano pessoal... |
| Pretende receber mensagens de correio eletrónico com amor vida dicas de crescimento e actualizações de produtos? | Deseja receber e-mails com dicas de crescimento para a vida amorosa e atualizações de produtos? |
| 1 críticas / 16 críticas | 1 avaliação / 16 avaliações |
| Equipa | Equipe |
| O seu nível de preparação | Seu nível de preparação |
| Introduza o seu nome | Digite seu nome |
| Os utilizadores adoram os nossos planos | Os usuários adoram nossos planos |
| …será reembolsado a si. | …será reembolsado a você. |
| O seu código promocional foi aplicado! | Seu código promocional foi aplicado! |
| Escolha o seu plano | Escolha seu plano |
| Ao continuar, concorda com | Ao continuar, você concorda com |
| fortalecer ainda mais a ligação | fortalecer ainda mais o vínculo |
| no seu subscrição | na sua assinatura |
| Para avançar, especificar | Para continuar, responda |
| Ainda está a pensar? / Aqui está 7 minutos extras / Use o meu tempo extra | Ainda está pensando? / Aqui estão 7 minutos extras / Usar meu tempo extra |
| Resultados/p> (tag quebrada) | Resultados |
| O correio eletrónico deve ser válido (erro de e-mail) | O e-mail deve ser válido |

## Rótulos de acessibilidade traduzidos

`alt` e `aria-label` em inglês (`select img`, `banner`, `Go to slide N`, `N of M`, `payment providers` …) foram traduzidos em `_src/build.cjs` (tabela `ATTR_PT`).

## Exceções (mantidas no idioma original)

- Marca e nomes próprios: M Academy, Muses Academy, nomes de avaliadores (Michael, Petar, Asab Mahmood), Santiago Delgado.
- Rodapé legal: `© 2026 AppStar Inc, Office 402, 1435 Vine Street, Cincinnati, Ohio, 45202, USA. All rights reserved.` (texto legal fixo do original, vindo de `event.fx2.io/api/landing/terms?filter=legal_copyright`).
- E-mail de suporte: support@musesacademy.io.
- Páginas `/terms`, `/privacy`, `/subterms`: existem apenas em inglês no site original; links apontam para elas.
- Valores monetários em R$ e percentuais: iguais ao site em pt (moeda definida pelo site).

## Tabela completa

| Etapa | Original (EN) | Português (pt-BR) | Localização | Observações |
|---|---|---|---|---|
| #0 singleChoice | What is your main goal? | Qual é o seu principal objetivo? | funnel.json[0] → js/screens-data.js (título) |  |
| #0 singleChoice | Make her obsessed | Fazer ela ficar obcecada | funnel.json[0] → js/screens-data.js (alternativa) |  |
| #0 singleChoice | Make her choose me | Fazer ela me escolher | funnel.json[0] → js/screens-data.js (alternativa) |  |
| #0 singleChoice | Make her want me | Fazer ela me desejar | funnel.json[0] → js/screens-data.js (alternativa) |  |
| #0 singleChoice | Find a girlfriend | Encontrar uma namorada | funnel.json[0] → js/screens-data.js (alternativa) |  |
| #0 singleChoice | Make her stop pulling away | Fazer ela parar de se afastar | funnel.json[0] → js/screens-data.js (alternativa) |  |
| #1 interstitial | We can help make that happen! | Nós podemos ajudar a tornar isso realidade! | funnel.json[1] → js/screens-data.js (título) |  |
| #2 multiChoice | What feels hardest with her right now? | O que está sendo mais difícil com ela agora? | funnel.json[2] → js/screens-data.js (título) |  |
| #2 multiChoice | Fear of commitment | Medo de compromisso | funnel.json[2] → js/screens-data.js (alternativa) |  |
| #2 multiChoice | Low interest | Pouco interesse | funnel.json[2] → js/screens-data.js (alternativa) |  |
| #2 multiChoice | Mixed signals | Sinais confusos | funnel.json[2] → js/screens-data.js (alternativa) |  |
| #2 multiChoice | I’m chasing | Só eu corro atrás | funnel.json[2] → js/screens-data.js (alternativa) |  |
| #2 multiChoice | She pulls away | Ela se afasta | funnel.json[2] → js/screens-data.js (alternativa) |  |
| #2 multiChoice | Hard to say | Difícil dizer | funnel.json[2] → js/screens-data.js (alternativa) |  |
| #4 singleChoice | Has your intimacy changed lately? | A intimidade entre vocês mudou ultimamente? | funnel.json[4] → js/screens-data.js (título) |  |
| #4 singleChoice | Yes | Sim | funnel.json[4] → js/screens-data.js (alternativa) |  |
| #4 singleChoice | No | Não | funnel.json[4] → js/screens-data.js (alternativa) |  |
| #6 singleChoice | Do you wish you understood women better? | Você gostaria de entender melhor as mulheres? | funnel.json[6] → js/screens-data.js (título) |  |
| #6 singleChoice | Yes | Sim | funnel.json[6] → js/screens-data.js (alternativa) |  |
| #6 singleChoice | Not really | Na verdade não | funnel.json[6] → js/screens-data.js (alternativa) |  |
| #7 singleChoice | Would you like her to think about you more? | Você gostaria que ela pensasse mais em você? | funnel.json[7] → js/screens-data.js (título) |  |
| #7 singleChoice | Yes | Sim | funnel.json[7] → js/screens-data.js (alternativa) |  |
| #7 singleChoice | Not really | Na verdade não | funnel.json[7] → js/screens-data.js (alternativa) |  |
| #8 singleChoice | Do you want her to reach out first? | Você quer que ela tome a iniciativa primeiro? | funnel.json[8] → js/screens-data.js (título) |  |
| #8 singleChoice | Yes | Sim | funnel.json[8] → js/screens-data.js (alternativa) |  |
| #8 singleChoice | Not really | Na verdade não | funnel.json[8] → js/screens-data.js (alternativa) |  |
| #9 singleChoice | Do you want to feel more confident with her? | Você quer se sentir mais confiante com ela? | funnel.json[9] → js/screens-data.js (título) |  |
| #9 singleChoice | Yes | Sim | funnel.json[9] → js/screens-data.js (alternativa) |  |
| #9 singleChoice | Not really | Na verdade não | funnel.json[9] → js/screens-data.js (alternativa) |  |
| #11 singleChoice | Are you open to learning new approaches? | Você está aberto a aprender novas abordagens? | funnel.json[11] → js/screens-data.js (título) |  |
| #11 singleChoice | Yes | Sim | funnel.json[11] → js/screens-data.js (alternativa) |  |
| #11 singleChoice | Not really | Na verdade não | funnel.json[11] → js/screens-data.js (alternativa) |  |
| #12 singleChoice | Did you know small changes can make her think about you more? | Você sabia que pequenas mudanças podem fazer ela pensar mais em você? | funnel.json[12] → js/screens-data.js (título) |  |
| #12 singleChoice | I'm curious | Estou curioso | funnel.json[12] → js/screens-data.js (alternativa) |  |
| #12 singleChoice | Yes, I use it | Sim, eu uso | funnel.json[12] → js/screens-data.js (alternativa) |  |
| #13 singleChoice | Did you know the way you communicate can change her level of interest? | Você sabia que a forma como você se comunica pode mudar o nível de interesse dela? | funnel.json[13] → js/screens-data.js (título) |  |
| #13 singleChoice | I'm curious | Estou curioso | funnel.json[13] → js/screens-data.js (alternativa) |  |
| #13 singleChoice | Yes, I use it | Sim, eu uso | funnel.json[13] → js/screens-data.js (alternativa) |  |
| #14 multiChoice | How to make her miss you | Como fazer ela sentir minha falta | funnel.json[14] → js/screens-data.js (alternativa) |  |
| #14 multiChoice | How to get her more interested | Como deixar ela mais interessada | funnel.json[14] → js/screens-data.js (alternativa) |  |
| #14 multiChoice | How to stop chasing | Como parar de correr atrás | funnel.json[14] → js/screens-data.js (alternativa) |  |
| #14 multiChoice | How to be more confident | Como ser mais confiante | funnel.json[14] → js/screens-data.js (alternativa) |  |
| #14 multiChoice | What to text her | O que mandar de mensagem pra ela | funnel.json[14] → js/screens-data.js (alternativa) |  |
| #15 singleChoice | How much time are you ready to spend to improve your love life? | Quanto tempo você está disposto a investir para melhorar sua vida amorosa? | funnel.json[15] → js/screens-data.js (título) |  |
| #15 singleChoice | 5 min/day | 5 min/dia | funnel.json[15] → js/screens-data.js (alternativa) |  |
| #15 singleChoice | 10 min/day | 10 min/dia | funnel.json[15] → js/screens-data.js (alternativa) |  |
| #15 singleChoice | 15 min/day | 15 min/dia | funnel.json[15] → js/screens-data.js (alternativa) |  |
| #15 singleChoice | 20 min/day | 20 min/dia | funnel.json[15] → js/screens-data.js (alternativa) |  |
| #18 textInput | What is your name? | Qual é o seu nome? | funnel.json[18] → js/screens-data.js (título) |  |
| #20 singleChoice | Yes, I've tried a few things | Sim, já tentei algumas coisas | funnel.json[20] → js/screens-data.js (alternativa) |  |
| #20 singleChoice | A little, but it didn't work | Um pouco, mas não funcionou | funnel.json[20] → js/screens-data.js (alternativa) |  |
| #20 singleChoice | Not really | Na verdade não | funnel.json[20] → js/screens-data.js (alternativa) |  |
| #21 textInput | What is her name? | Qual é o nome dela? | funnel.json[21] → js/screens-data.js (título) |  |
| #22 interstitial | We can help make that happen! | Nós podemos ajudar a tornar isso realidade! | funnel.json[22] → js/screens-data.js (título) |  |
| #23 interstitial | We can help make that happen! | Nós podemos ajudar a tornar isso realidade! | funnel.json[23] → js/screens-data.js (título) |  |
| #25 landing | 18-29 | 18-29 | funnel.json[25] → js/screens-data.js (alternativa) |  |
| #25 landing | 30-39 | 30-39 | funnel.json[25] → js/screens-data.js (alternativa) |  |
| #25 landing | 40-49 | 40-49 | funnel.json[25] → js/screens-data.js (alternativa) |  |
| #25 landing | 50+ | 50+ | funnel.json[25] → js/screens-data.js (alternativa) |  |
| #29 singleChoice | Is her behavior hard to read? | O comportamento dela é difícil de entender? | funnel.json[29] → js/screens-data.js (título) |  |
| #29 singleChoice | Yes | Sim | funnel.json[29] → js/screens-data.js (alternativa) |  |
| #29 singleChoice | Sometimes | Às vezes | funnel.json[29] → js/screens-data.js (alternativa) |  |
| #29 singleChoice | No | Não | funnel.json[29] → js/screens-data.js (alternativa) |  |
| #30 singleChoice | When did you last feel like things between you two were really good? | Quando foi a última vez que sentiu que as coisas entre vocês estavam realmente bem? | funnel.json[30] → js/screens-data.js (título) |  |
| #30 singleChoice | In the early days | Nos primeiros dias | funnel.json[30] → js/screens-data.js (alternativa) |  |
| #30 singleChoice | A few months ago | Alguns meses atrás | funnel.json[30] → js/screens-data.js (alternativa) |  |
| #30 singleChoice | About a year ago | Cerca de um ano atrás | funnel.json[30] → js/screens-data.js (alternativa) |  |
| #30 singleChoice | It's been a long time | Já faz muito tempo | funnel.json[30] → js/screens-data.js (alternativa) |  |
| #31 singleChoice | Are you the type to take action or wait and hope? | Você é do tipo que toma atitude ou prefere esperar e torcer? | funnel.json[31] → js/screens-data.js (título) |  |
| #31 singleChoice | I take action | Eu tomo iniciativa | funnel.json[31] → js/screens-data.js (alternativa) |  |
| #31 singleChoice | I tend to wait | Tendo a esperar | funnel.json[31] → js/screens-data.js (alternativa) |  |
| #31 singleChoice | A bit of both | Um pouco de cada | funnel.json[31] → js/screens-data.js (alternativa) |  |
| #33 summaryStatementScreen | Summary of your profile | Resumo do seu perfil | funnel.json[33] → js/screens-data.js (título) |  |
| #40 singleChoice | Did you hear about M Academy from a relationship expert? | Você ficou sabendo da M Academy por um especialista em relacionamentos? | funnel.json[40] → js/screens-data.js (título) |  |
| #40 singleChoice | Yes | Sim | funnel.json[40] → js/screens-data.js (alternativa) |  |
| #40 singleChoice | No | Não | funnel.json[40] → js/screens-data.js (alternativa) |  |
| #41 singleChoice | What is your current relationship status? | Qual é o seu status de relacionamento atual? | funnel.json[41] → js/screens-data.js (título) |  |
| #41 singleChoice | Single | Solteiro | funnel.json[41] → js/screens-data.js (alternativa) |  |
| #41 singleChoice | In relationship | Em um relacionamento | funnel.json[41] → js/screens-data.js (alternativa) |  |
| #41 singleChoice | Married | Casado | funnel.json[41] → js/screens-data.js (alternativa) |  |
| #42 singleChoice | How long have you been single? | Há quanto tempo você está solteiro? | funnel.json[42] → js/screens-data.js (título) |  |
| #42 singleChoice | Less than 6 months | Menos de 6 meses | funnel.json[42] → js/screens-data.js (alternativa) |  |
| #42 singleChoice | 6 months to 1 year | 6 meses a 1 ano | funnel.json[42] → js/screens-data.js (alternativa) |  |
| #42 singleChoice | 1 to 3 years | 1 a 3 anos | funnel.json[42] → js/screens-data.js (alternativa) |  |
| #42 singleChoice | More than 3 years | Mais de 3 anos | funnel.json[42] → js/screens-data.js (alternativa) |  |
| #44 singleChoice | How long have you been together? | Há quanto tempo vocês estão juntos? | funnel.json[44] → js/screens-data.js (título) |  |
| #44 singleChoice | Less than 6 months | Menos de 6 meses | funnel.json[44] → js/screens-data.js (alternativa) |  |
| #44 singleChoice | 6 months to 1 year | 6 meses a 1 ano | funnel.json[44] → js/screens-data.js (alternativa) |  |
| #44 singleChoice | 1 to 3 years | 1 a 3 anos | funnel.json[44] → js/screens-data.js (alternativa) |  |
| #44 singleChoice | More than 3 years | Mais de 3 anos | funnel.json[44] → js/screens-data.js (alternativa) |  |
| #45 singleChoice | Who usually starts conversations? | Quem geralmente inicia as conversas? | funnel.json[45] → js/screens-data.js (título) |  |
| #45 singleChoice | Mostly me | Principalmente eu | funnel.json[45] → js/screens-data.js (alternativa) |  |
| #45 singleChoice | About 50/50 | Mais ou menos 50/50 | funnel.json[45] → js/screens-data.js (alternativa) |  |
| #45 singleChoice | Mostly her | Principalmente ela | funnel.json[45] → js/screens-data.js (alternativa) |  |
| #46 singleChoice | Do your conversations fade out? | Suas conversas acabam desaparecendo? | funnel.json[46] → js/screens-data.js (título) |  |
| #46 singleChoice | Often | Frequentemente | funnel.json[46] → js/screens-data.js (alternativa) |  |
| #46 singleChoice | Sometimes | Às vezes | funnel.json[46] → js/screens-data.js (alternativa) |  |
| #46 singleChoice | Rarely | Raramente | funnel.json[46] → js/screens-data.js (alternativa) |  |
| #47 singleChoice | Do you feel like you’re chasing her? | Você sente que está correndo atrás dela? | funnel.json[47] → js/screens-data.js (título) |  |
| #47 singleChoice | Yes | Sim | funnel.json[47] → js/screens-data.js (alternativa) |  |
| #47 singleChoice | No | Não | funnel.json[47] → js/screens-data.js (alternativa) |  |
| #48 singleChoice | Do you feel like she’s losing interest? | Você sente que ela está perdendo o interesse? | funnel.json[48] → js/screens-data.js (título) |  |
| #48 singleChoice | Yes | Sim | funnel.json[48] → js/screens-data.js (alternativa) |  |
| #48 singleChoice | No | Não | funnel.json[48] → js/screens-data.js (alternativa) |  |
| #49 singleChoice | Does she take initiative to see you? | Ela toma a iniciativa de te ver? | funnel.json[49] → js/screens-data.js (título) |  |
| #49 singleChoice | Often | Frequentemente | funnel.json[49] → js/screens-data.js (alternativa) |  |
| #49 singleChoice | Sometimes | Às vezes | funnel.json[49] → js/screens-data.js (alternativa) |  |
| #49 singleChoice | Rarely | Raramente | funnel.json[49] → js/screens-data.js (alternativa) |  |
| #50 singleChoice | Does she respond to you the way you expect? | Ela responde do jeito que você espera? | funnel.json[50] → js/screens-data.js (título) |  |
| #50 singleChoice | Yes, most of the time | Sim, na maioria das vezes | funnel.json[50] → js/screens-data.js (alternativa) |  |
| #50 singleChoice | Sometimes | Às vezes | funnel.json[50] → js/screens-data.js (alternativa) |  |
| #50 singleChoice | Not really | Não muito | funnel.json[50] → js/screens-data.js (alternativa) |  |
| #51 singleChoice | Has your relationship changed over time? | Seu relacionamento mudou com o tempo? | funnel.json[51] → js/screens-data.js (título) |  |
| #51 singleChoice | Yes | Sim | funnel.json[51] → js/screens-data.js (alternativa) |  |
| #51 singleChoice | No | Não | funnel.json[51] → js/screens-data.js (alternativa) |  |
| #52 singleChoice | Does she seem more distant than before? | Ela parece mais distante do que antes? | funnel.json[52] → js/screens-data.js (título) |  |
| #52 singleChoice | Yes | Sim | funnel.json[52] → js/screens-data.js (alternativa) |  |
| #52 singleChoice | No | Não | funnel.json[52] → js/screens-data.js (alternativa) |  |
| #53 singleChoice | Do you feel like she’s less excited about you than before? | Você sente que ela está menos empolgada com você do que antes? | funnel.json[53] → js/screens-data.js (título) |  |
| #53 singleChoice | Yes | Sim | funnel.json[53] → js/screens-data.js (alternativa) |  |
| #53 singleChoice | No | Não | funnel.json[53] → js/screens-data.js (alternativa) |  |
| #54 singleChoice | Do you feel truly appreciated by her? | Você se sente realmente valorizado por ela? | funnel.json[54] → js/screens-data.js (título) |  |
| #54 singleChoice | Yes | Sim | funnel.json[54] → js/screens-data.js (alternativa) |  |
| #54 singleChoice | No | Não | funnel.json[54] → js/screens-data.js (alternativa) |  |
| #55 singleChoice | Do your conversations feel cold? | Suas conversas parecem frias? | funnel.json[55] → js/screens-data.js (título) |  |
| #55 singleChoice | Yes | Sim | funnel.json[55] → js/screens-data.js (alternativa) |  |
| #55 singleChoice | Sometimes | Às vezes | funnel.json[55] → js/screens-data.js (alternativa) |  |
| #55 singleChoice | No | Não | funnel.json[55] → js/screens-data.js (alternativa) |  |
| #56 singleChoice | Do you feel like she’s gotten too used to you? | Você sente que ela se acostumou demais com você? | funnel.json[56] → js/screens-data.js (título) |  |
| #56 singleChoice | Yes | Sim | funnel.json[56] → js/screens-data.js (alternativa) |  |
| #56 singleChoice | No | Não | funnel.json[56] → js/screens-data.js (alternativa) |  |
| #59 singleChoice | Do you wish you understood women better? | Você gostaria de entender melhor as mulheres? | funnel.json[59] → js/screens-data.js (título) |  |
| #59 singleChoice | Yes | Sim | funnel.json[59] → js/screens-data.js (alternativa) |  |
| #59 singleChoice | Not really | Na verdade não | funnel.json[59] → js/screens-data.js (alternativa) |  |
| #60 singleChoice | Would you like her to show more interest in you? | Você gostaria que ela demonstrasse mais interesse por você? | funnel.json[60] → js/screens-data.js (título) |  |
| #60 singleChoice | Yes | Sim | funnel.json[60] → js/screens-data.js (alternativa) |  |
| #60 singleChoice | Not really | Na verdade não | funnel.json[60] → js/screens-data.js (alternativa) |  |
| #61 singleChoice | Do you want to feel closer to her again? | Você quer se sentir mais próximo dela novamente? | funnel.json[61] → js/screens-data.js (título) |  |
| #61 singleChoice | Yes | Sim | funnel.json[61] → js/screens-data.js (alternativa) |  |
| #61 singleChoice | Not really | Na verdade não | funnel.json[61] → js/screens-data.js (alternativa) |  |
| #62 singleChoice | Do you want to feel more wanted again? | Você quer se sentir mais desejado de novo? | funnel.json[62] → js/screens-data.js (título) |  |
| #62 singleChoice | Yes | Sim | funnel.json[62] → js/screens-data.js (alternativa) |  |
| #62 singleChoice | Not really | Na verdade não | funnel.json[62] → js/screens-data.js (alternativa) |  |
| #63 singleChoice | Do you want her to show more effort? | Você quer que ela demonstre mais esforço? | funnel.json[63] → js/screens-data.js (título) |  |
| #63 singleChoice | Yes | Sim | funnel.json[63] → js/screens-data.js (alternativa) |  |
| #63 singleChoice | Not really | Na verdade não | funnel.json[63] → js/screens-data.js (alternativa) |  |
| #65 multiChoice | What feels hardest in your relationship right now? | O que está mais difícil no seu relacionamento agora? | funnel.json[65] → js/screens-data.js (título) |  |
| #65 multiChoice | She’s distant | Ela está distante | funnel.json[65] → js/screens-data.js (alternativa) |  |
| #65 multiChoice | Less attention | Menos atenção | funnel.json[65] → js/screens-data.js (alternativa) |  |
| #65 multiChoice | Intimacy issues | Problemas de intimidade | funnel.json[65] → js/screens-data.js (alternativa) |  |
| #65 multiChoice | More arguments | Mais discussões | funnel.json[65] → js/screens-data.js (alternativa) |  |
| #65 multiChoice | Less effort | Menos esforço | funnel.json[65] → js/screens-data.js (alternativa) |  |
| #65 multiChoice | Hard to say | Difícil dizer | funnel.json[65] → js/screens-data.js (alternativa) |  |
| #66 singleChoice | Do you want conversations with her to feel easier? | Você quer que as conversas com ela sejam mais fáceis? | funnel.json[66] → js/screens-data.js (título) |  |
| #66 singleChoice | Yes | Sim | funnel.json[66] → js/screens-data.js (alternativa) |  |
| #66 singleChoice | Not really | Na verdade não | funnel.json[66] → js/screens-data.js (alternativa) |  |
| #70 singleChoice | What best describes your complicated status? | Qual a melhor forma de descrever esse status enrolado? | funnel.json[70] → js/screens-data.js (título) |  |
| #70 singleChoice | In a situationship | Ficando | funnel.json[70] → js/screens-data.js (alternativa) |  |
| #70 singleChoice | Recently broke up | Terminei recentemente | funnel.json[70] → js/screens-data.js (alternativa) |  |
| #70 singleChoice | Friends with benefits | Amizade colorida | funnel.json[70] → js/screens-data.js (alternativa) |  |
| #70 singleChoice | On-again, off-again | Vai e volta | funnel.json[70] → js/screens-data.js (alternativa) |  |
| #70 singleChoice | In the friend zone | Na friendzone | funnel.json[70] → js/screens-data.js (alternativa) |  |
| #70 singleChoice | Love triangle | Triângulo amoroso | funnel.json[70] → js/screens-data.js (alternativa) |  |
| #70 singleChoice | Other | Outro | funnel.json[70] → js/screens-data.js (alternativa) |  |
| #71 singleChoice | How long has this been going on? | Há quanto tempo isso está acontecendo? | funnel.json[71] → js/screens-data.js (título) |  |
| #71 singleChoice | A few weeks | Algumas semanas | funnel.json[71] → js/screens-data.js (alternativa) |  |
| #71 singleChoice | A few months | Alguns meses | funnel.json[71] → js/screens-data.js (alternativa) |  |
| #71 singleChoice | Over a year | Mais de um ano | funnel.json[71] → js/screens-data.js (alternativa) |  |
| #71 singleChoice | I lost count | Perdi a conta | funnel.json[71] → js/screens-data.js (alternativa) |  |
| #72 singleChoice | Are you in contact with her right now? | Você está em contato com ela agora? | funnel.json[72] → js/screens-data.js (título) |  |
| #72 singleChoice | Yes | Sim | funnel.json[72] → js/screens-data.js (alternativa) |  |
| #72 singleChoice | A little | Um pouco | funnel.json[72] → js/screens-data.js (alternativa) |  |
| #72 singleChoice | No | Não | funnel.json[72] → js/screens-data.js (alternativa) |  |
| #73 singleChoice | Do your conversations fade out? | Suas conversas acabam desaparecendo? | funnel.json[73] → js/screens-data.js (título) |  |
| #73 singleChoice | Often | Frequentemente | funnel.json[73] → js/screens-data.js (alternativa) |  |
| #73 singleChoice | Sometimes | Às vezes | funnel.json[73] → js/screens-data.js (alternativa) |  |
| #73 singleChoice | Rarely | Raramente | funnel.json[73] → js/screens-data.js (alternativa) |  |
| #74 singleChoice | Is her behavior hard to read? | O comportamento dela é difícil de entender? | funnel.json[74] → js/screens-data.js (título) |  |
| #74 singleChoice | Yes | Sim | funnel.json[74] → js/screens-data.js (alternativa) |  |
| #74 singleChoice | Sometimes | Às vezes | funnel.json[74] → js/screens-data.js (alternativa) |  |
| #74 singleChoice | No | Não | funnel.json[74] → js/screens-data.js (alternativa) |  |
| #75 singleChoice | Do you feel like she’s losing interest? | Você sente que ela está perdendo o interesse? | funnel.json[75] → js/screens-data.js (título) |  |
| #75 singleChoice | Yes | Sim | funnel.json[75] → js/screens-data.js (alternativa) |  |
| #75 singleChoice | No | Não | funnel.json[75] → js/screens-data.js (alternativa) |  |
| #76 singleChoice | Do you feel like you’re chasing her? | Você sente que está correndo atrás dela? | funnel.json[76] → js/screens-data.js (título) |  |
| #76 singleChoice | Yes | Sim | funnel.json[76] → js/screens-data.js (alternativa) |  |
| #76 singleChoice | No | Não | funnel.json[76] → js/screens-data.js (alternativa) |  |
| #77 singleChoice | Does she take initiative to see you? | Ela toma a iniciativa de te ver? | funnel.json[77] → js/screens-data.js (título) |  |
| #77 singleChoice | Often | Frequentemente | funnel.json[77] → js/screens-data.js (alternativa) |  |
| #77 singleChoice | Sometimes | Às vezes | funnel.json[77] → js/screens-data.js (alternativa) |  |
| #77 singleChoice | Rarely | Raramente | funnel.json[77] → js/screens-data.js (alternativa) |  |
| #78 singleChoice | Are you in contact with her right now? | Você está em contato com ela agora? | funnel.json[78] → js/screens-data.js (título) |  |
| #78 singleChoice | Yes | Sim | funnel.json[78] → js/screens-data.js (alternativa) |  |
| #78 singleChoice | A little | Um pouco | funnel.json[78] → js/screens-data.js (alternativa) |  |
| #78 singleChoice | No | Não | funnel.json[78] → js/screens-data.js (alternativa) |  |
| #79 singleChoice | Does she respond to you the way you expect? | Ela responde do jeito que você espera? | funnel.json[79] → js/screens-data.js (título) |  |
| #79 singleChoice | Yes, most of the time | Sim, na maioria das vezes | funnel.json[79] → js/screens-data.js (alternativa) |  |
| #79 singleChoice | Sometimes | Às vezes | funnel.json[79] → js/screens-data.js (alternativa) |  |
| #79 singleChoice | Not really | Não muito | funnel.json[79] → js/screens-data.js (alternativa) |  |
| #80 singleChoice | Have you ever invested in self-improvement programs or coaching? | Você já investiu em programas de autodesenvolvimento ou coaching? | funnel.json[80] → js/screens-data.js (título) |  |
| #80 singleChoice | Yes, multiple times | Sim, várias vezes | funnel.json[80] → js/screens-data.js (alternativa) |  |
| #80 singleChoice | Yes, once or twice | Sim, uma ou duas vezes | funnel.json[80] → js/screens-data.js (alternativa) |  |
| #80 singleChoice | No, but I'm open to it | Não, mas estou aberto a isso | funnel.json[80] → js/screens-data.js (alternativa) |  |
| #80 singleChoice | No, and I'm skeptical | Não, e sou cético | funnel.json[80] → js/screens-data.js (alternativa) |  |
| #82 summaryStatementScreen | Summary of your profile | Resumo do seu perfil | funnel.json[82] → js/screens-data.js (título) |  |
| #84 summaryStatementScreen | Summary of your profile | Resumo do seu perfil | funnel.json[84] → js/screens-data.js (título) |  |
| #85 summaryStatementScreen | Summary of your profile | Resumo do seu perfil | funnel.json[85] → js/screens-data.js (título) |  |
| #92 singleChoice | Do you find it easy to maintain your focus? | Você acha fácil manter o foco? | funnel.json[92] → js/screens-data.js (título) |  |
| #92 singleChoice | Yes, I can easily stay focused | Sim, consigo me manter focado com facilidade | funnel.json[92] → js/screens-data.js (alternativa) |  |
| #92 singleChoice | Mostly, but I sometimes get distracted | Na maioria das vezes sim, mas às vezes me distraio | funnel.json[92] → js/screens-data.js (alternativa) |  |
| #92 singleChoice | I often struggle | Costumo ter dificuldades | funnel.json[92] → js/screens-data.js (alternativa) |  |
| #92 singleChoice | No, I frequently procrastinate | Não, costumo procrastinar | funnel.json[92] → js/screens-data.js (alternativa) |  |
| #93 singleChoice | How well do you understand women? | O quanto você entende as mulheres? | funnel.json[93] → js/screens-data.js (título) |  |
| #93 singleChoice | Very well | Muito bem | funnel.json[93] → js/screens-data.js (alternativa) |  |
| #93 singleChoice | Sometimes it's hard | Às vezes é difícil | funnel.json[93] → js/screens-data.js (alternativa) |  |
| #93 singleChoice | Not much | Não muito | funnel.json[93] → js/screens-data.js (alternativa) |  |
| #94 singleChoice | How serious are you about changing the dynamic between you two? | Quão sério você está em mudar a dinâmica entre vocês dois? | funnel.json[94] → js/screens-data.js (título) |  |
| #94 singleChoice | Very serious | Muito sério | funnel.json[94] → js/screens-data.js (alternativa) |  |
| #94 singleChoice | Just exploring | Só explorando | funnel.json[94] → js/screens-data.js (alternativa) |  |
| #94 singleChoice | Not sure yet | Ainda não tenho certeza | funnel.json[94] → js/screens-data.js (alternativa) |  |
| #112 singleChoice | When it comes to money, which sounds most like you? | Quando se trata de dinheiro, o que mais se parece com você? | funnel.json[112] → js/screens-data.js (título) |  |
| #112 singleChoice | I earn less than I'd like | Eu ganho menos do que gostaria | funnel.json[112] → js/screens-data.js (alternativa) |  |
| #112 singleChoice | I make enough to get by | Eu ganho o suficiente para me virar | funnel.json[112] → js/screens-data.js (alternativa) |  |
| #112 singleChoice | I earn well and live comfortably | Eu ganho bem e vivo confortavelmente | funnel.json[112] → js/screens-data.js (alternativa) |  |
| #112 singleChoice | I'm a high earner — money's not a worry | Sou bem-sucedido financeiramente — dinheiro não é um problema | funnel.json[112] → js/screens-data.js (alternativa) |  |
| #113 singleChoice | What should your plan focus on first? | Em que seu plano deve focar primeiro? | funnel.json[113] → js/screens-data.js (título) |  |
| #113 singleChoice | Save what we have | Salve o que temos | funnel.json[113] → js/screens-data.js (alternativa) |  |
| #113 singleChoice | Know what to say to her | Saiba o que dizer para ela | funnel.json[113] → js/screens-data.js (alternativa) |  |
| #113 singleChoice | Bring the spark back | Traga de volta a chama | funnel.json[113] → js/screens-data.js (alternativa) |  |
| #113 singleChoice | Escape friend zone | Saia da zona da amizade | funnel.json[113] → js/screens-data.js (alternativa) |  |
| #113 singleChoice | Turn this into a real relationship | Transforme isso em um relacionamento de verdade | funnel.json[113] → js/screens-data.js (alternativa) |  |
| #113 singleChoice | Show her I've changed | Mostrar para ela que mudei | funnel.json[113] → js/screens-data.js (alternativa) |  |
| #113 singleChoice | Something Else | Outra coisa | funnel.json[113] → js/screens-data.js (alternativa) |  |
| #115 singleChoice | What is your main goal? | Qual é o seu principal objetivo? | funnel.json[115] → js/screens-data.js (título) |  |
| #115 singleChoice | Make her obsessed | Fazer ela ficar obcecada | funnel.json[115] → js/screens-data.js (alternativa) |  |
| #115 singleChoice | Make her choose me | Fazer ela me escolher | funnel.json[115] → js/screens-data.js (alternativa) |  |
| #115 singleChoice | Make her want me | Fazer ela me desejar | funnel.json[115] → js/screens-data.js (alternativa) |  |
| #115 singleChoice | Find a girlfriend | Encontrar uma namorada | funnel.json[115] → js/screens-data.js (alternativa) |  |
| #115 singleChoice | Make her stop pulling away | Fazer ela parar de se afastar | funnel.json[115] → js/screens-data.js (alternativa) |  |
| #115 singleChoice | Other | Outro | funnel.json[115] → js/screens-data.js (alternativa) |  |
| #0 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 0) |  |
| #1 interstitial | — | M Academy | js/screens-data.js (tela 1) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #1 interstitial | — | Muitos homens se sentem apenas uma opção, mas a abordagem certa faz de você o homem que ela escolhe e realmente valoriza. | js/screens-data.js (tela 1) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #1 interstitial | Continue | Continuar | js/screens-data.js (tela 1) |  |
| #2 multiChoice | Your Profile | Seu perfil | js/screens-data.js (tela 2) |  |
| #2 multiChoice | Choose all that apply | Escolha todas as que se aplicam | js/screens-data.js (tela 2) |  |
| #2 multiChoice | Continue | Continuar | js/screens-data.js (tela 2) |  |
| #3 interstitial | — | M Academy | js/screens-data.js (tela 3) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #3 interstitial | — | Você não está sozinho! | js/screens-data.js (tela 3) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #3 interstitial | — | Você receberá um plano claro sobre o que fazer e quando — assim você para de adivinhar e começa a ver o interesse real dela. | js/screens-data.js (tela 3) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #3 interstitial | Continue | Continuar | js/screens-data.js (tela 3) |  |
| #4 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 4) |  |
| #4 singleChoice | I`m not sure | Não tenho certeza | js/screens-data.js (tela 4) |  |
| #5 interstitial | — | M Academy | js/screens-data.js (tela 5) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #5 interstitial | — | Nós cuidamos de você! | js/screens-data.js (tela 5) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #5 interstitial | — | A maioria dos homens passa por isso quando gosta de alguém. Nosso plano mostra como mudar a dinâmica — para que ela comece a pensar mais em você. | js/screens-data.js (tela 5) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #5 interstitial | Continue | Continuar | js/screens-data.js (tela 5) |  |
| #6 singleChoice | Mindset & Desires | Mentalidade e Desejos | js/screens-data.js (tela 6) |  |
| #7 singleChoice | Mindset & Desires | Mentalidade e Desejos | js/screens-data.js (tela 7) |  |
| #8 singleChoice | Mindset & Desires | Mentalidade e Desejos | js/screens-data.js (tela 8) |  |
| #9 singleChoice | Mindset & Desires | Mentalidade e Desejos | js/screens-data.js (tela 9) |  |
| #10 interstitial | — | M Academy | js/screens-data.js (tela 10) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #10 interstitial | — | Você está mais perto do que imagina | js/screens-data.js (tela 10) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #10 interstitial | — | A maioria dos homens comete pequenos erros que afastam as mulheres sem perceber. Você está prestes a descobrir o que realmente funciona — e o que faz ela ficar obcecada por você. | js/screens-data.js (tela 10) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #10 interstitial | Continue | Continuar | js/screens-data.js (tela 10) |  |
| #11 singleChoice | Knowledge & Skills | Conhecimento e Habilidades | js/screens-data.js (tela 11) |  |
| #12 singleChoice | Knowledge & Skills | Conhecimento e Habilidades | js/screens-data.js (tela 12) |  |
| #13 singleChoice | Knowledge & Skills | Conhecimento e Habilidades | js/screens-data.js (tela 13) |  |
| #14 multiChoice | Almost There | Quase lá | js/screens-data.js (tela 14) |  |
| #14 multiChoice | What do you want to learn most? | O que você mais quer aprender? | js/screens-data.js (tela 14) |  |
| #14 multiChoice | Select all that apply | Selecione todos os que se aplicam | js/screens-data.js (tela 14) |  |
| #14 multiChoice | Continue | Continuar | js/screens-data.js (tela 14) |  |
| #15 singleChoice | Almost There | Quase lá | js/screens-data.js (tela 15) |  |
| #16 loader | — | M Academy | js/screens-data.js (tela 16) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #16 loader | — | 500.000+ usuários | js/screens-data.js (tela 16) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #16 loader | have chosen M Academy | escolheu M Academy | js/screens-data.js (tela 16) |  |
| #16 loader | Creating your Personal plan... | A criar o seu plano pessoal... | js/screens-data.js (tela 16) | ajustado de pt-PT para pt-BR |
| #16 loader | Setting goals | Definindo metas | js/screens-data.js (tela 16) |  |
| #16 loader | — | 25% | js/screens-data.js (tela 16) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #16 loader | Analyzing growth area | Analisando área de crescimento | js/screens-data.js (tela 16) |  |
| #16 loader | 0% | 0% | js/screens-data.js (tela 16) |  |
| #16 loader | Adjusting content | Ajustando conteúdo | js/screens-data.js (tela 16) |  |
| #16 loader | Michael | Michael | js/screens-data.js (tela 16) |  |
| #16 loader | — | 1 críticas | js/screens-data.js (tela 16) | ajustado de pt-PT para pt-BR |
| #16 loader | USA | EUA | js/screens-data.js (tela 16) |  |
| #16 loader | Verified | Verificado | js/screens-data.js (tela 16) |  |
| #16 loader | — | 8 de Junho de 2026 | js/screens-data.js (tela 16) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #16 loader | I’ve always stayed on the phone until... | Sempre fiquei ao telefone até... | js/screens-data.js (tela 16) |  |
| #16 loader | I’ve always stayed on the phone until we both were tired I learned now to leave her missing me until we talk again | Sempre fiquei ao telefone até nós dois estarmos cansados, mas agora aprendi a deixar ela com saudades até a próxima vez que conversarmos | js/screens-data.js (tela 16) |  |
| #16 loader | — | Data da experiência: | js/screens-data.js (tela 16) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #16 loader | — | 7 de Junho de 2026 | js/screens-data.js (tela 16) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #16 loader | Petar | Petar | js/screens-data.js (tela 16) |  |
| #16 loader | in | EM | js/screens-data.js (tela 16) |  |
| #16 loader | — | 24 de Abril de 2026 | js/screens-data.js (tela 16) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #16 loader | The experience opened my eyes well to... | A experiência realmente me abriu os olhos para... | js/screens-data.js (tela 16) |  |
| #16 loader | The experience opened my eyes well to where I am wrong and gave me a lot of self-confidence in every sense. I also feel much better mentally and safer. | A experiência realmente me abriu os olhos para onde estou errado e me deu muita autoconfiança em todos os sentidos. Também me sinto muito melhor mentalmente e mais seguro. | js/screens-data.js (tela 16) |  |
| #16 loader | — | AM | js/screens-data.js (tela 16) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #16 loader | Asab Mahmood | Asab Mahmood | js/screens-data.js (tela 16) |  |
| #16 loader | — | 16 críticas | js/screens-data.js (tela 16) | ajustado de pt-PT para pt-BR |
| #16 loader | GB | GB | js/screens-data.js (tela 16) |  |
| #16 loader | — | 20 de Junho de 2026 | js/screens-data.js (tela 16) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #16 loader | Great way to fix what's broken | Ótima maneira de consertar o que está quebrado | js/screens-data.js (tela 16) |  |
| #16 loader | Made me aware of my mistakes. Im new to this program and to be honest sounds good and today is first day of final text to her and as stated. Easy to follow and the videos are so good with easy instructions to follow | Fez com que eu percebesse meus erros. Sou novo neste programa e, para ser sincero, parece ótimo. Hoje é o primeiro dia da mensagem final para ela, como foi dito. É fácil de acompanhar e os vídeos são excelentes, com instruções simples de seguir. | js/screens-data.js (tela 16) |  |
| #16 loader | Continue | Continuar | js/screens-data.js (tela 16) |  |
| #17 custom | — | M Academy | js/screens-data.js (tela 17) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #17 custom | Do you want to receive emails with | Pretende receber mensagens de correio eletrónico com | js/screens-data.js (tela 17) | ajustado de pt-PT para pt-BR |
| #17 custom | love life growth tips | amor vida dicas de crescimento | js/screens-data.js (tela 17) |  |
| #17 custom | and product updates? | e actualizações de produtos? | js/screens-data.js (tela 17) | ajustado de pt-PT para pt-BR |
| #17 custom | Yes, I`m in | Sim, estou dentro | js/screens-data.js (tela 17) |  |
| #17 custom | No, thanks | Não, obrigado | js/screens-data.js (tela 17) |  |
| #18 textInput | — | M Academy | js/screens-data.js (tela 18) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #18 textInput | Continue | Continuar | js/screens-data.js (tela 18) |  |
| #19 custom | — | M Academy | js/screens-data.js (tela 19) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #19 custom | Scratch & unlock a surprise discount on your Рlan! | Raspe e desbloqueie um desconto surpresa no seu plano! | js/screens-data.js (tela 19) |  |
| #19 custom | Just our way of saying we appreciate you! | É o nosso jeito de dizer que valorizamos você! | js/screens-data.js (tela 19) |  |
| #19 custom | — | 63% | js/screens-data.js (tela 19) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #19 custom | off your subscription | no seu subscrição | js/screens-data.js (tela 19) |  |
| #19 custom | Scratch your discount | Raspe seu desconto | js/screens-data.js (tela 19) |  |
| #20 singleChoice | Knowledge & Skills | Conhecimento e Habilidades | js/screens-data.js (tela 20) |  |
| #20 singleChoice | Have you tried anything to get your attention? | Você já tentou algo para chamar a atenção dela? | js/screens-data.js (tela 20) |  |
| #21 textInput | — | M Academy | js/screens-data.js (tela 21) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #21 textInput | Continue | Continuar | js/screens-data.js (tela 21) |  |
| #22 interstitial | — | M Academy | js/screens-data.js (tela 22) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #22 interstitial | — | Muitos homens têm dificuldade em manter o interesse dela, mas a abordagem correta faz com que ela pense em você o tempo todo e sinta forte atração. | js/screens-data.js (tela 22) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #22 interstitial | Continue | Continuar | js/screens-data.js (tela 22) |  |
| #23 interstitial | — | M Academy | js/screens-data.js (tela 23) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #23 interstitial | — | Muitos homens têm dificuldade em gerar atração, mas a abordagem certa faz ela se sentir atraída por você. | js/screens-data.js (tela 23) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #23 interstitial | Continue | Continuar | js/screens-data.js (tela 23) |  |
| #25 landing | — | M Academy | js/screens-data.js (tela 25) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #25 landing | — | A maneira | js/screens-data.js (tela 25) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #25 landing | — | mais inteligente | js/screens-data.js (tela 25) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #25 landing | — | de deixá-la obcecada | js/screens-data.js (tela 25) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #25 landing | * according to your age | * de acordo com a sua idade | js/screens-data.js (tela 25) |  |
| #25 landing | By continuing, you agree with | Ao continuar, concorda com | js/screens-data.js (tela 25) |  |
| #25 landing | Terms & Conditions | Termos e Condições | js/screens-data.js (tela 25) |  |
| #25 landing | — | , | js/screens-data.js (tela 25) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #25 landing | Privacy Policy | Política de Privacidade | js/screens-data.js (tela 25) |  |
| #25 landing | Subscription Terms | Termos da Assinatura | js/screens-data.js (tela 25) |  |
| #26 planScreen | — | M Academy | js/screens-data.js (tela 26) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #26 planScreen | Your Perfect Plan to | Seu Plano Perfeito para | js/screens-data.js (tela 26) |  |
| #26 planScreen | — | Fazer Ela Escolher Você | js/screens-data.js (tela 26) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #26 planScreen | — | Com base nas suas respostas, esperamos que você se torne prioridade dela e se sinta escolhido por ela até | js/screens-data.js (tela 26) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #26 planScreen | — | Dezembro de 2026 | js/screens-data.js (tela 26) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #26 planScreen | Now | Agora | js/screens-data.js (tela 26) |  |
| #26 planScreen | Goal | Objetivo | js/screens-data.js (tela 26) |  |
| #26 planScreen | This chart is for illustrative purpose only, result may vary. | Este gráfico é apenas para fins ilustrativos, o resultado pode variar. | js/screens-data.js (tela 26) |  |
| #26 planScreen | Continue | Continuar | js/screens-data.js (tela 26) |  |
| #27 planScreen | — | M Academy | js/screens-data.js (tela 27) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #27 planScreen | Your Perfect Plan to | Seu Plano Perfeito para | js/screens-data.js (tela 27) |  |
| #27 planScreen | — | Fazê-la Ficar Obcecada por Você | js/screens-data.js (tela 27) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #27 planScreen | — | Com base nas suas respostas, esperamos que ela sinta forte atração e fique obcecada por você até | js/screens-data.js (tela 27) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #27 planScreen | — | Dezembro de 2026 | js/screens-data.js (tela 27) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #27 planScreen | Now | Agora | js/screens-data.js (tela 27) |  |
| #27 planScreen | Love Life Master | Amor Vida Mestre | js/screens-data.js (tela 27) |  |
| #27 planScreen | This chart is for illustrative purpose only, result may vary. | Este gráfico é apenas para fins ilustrativos, o resultado pode variar. | js/screens-data.js (tela 27) |  |
| #27 planScreen | Continue | Continuar | js/screens-data.js (tela 27) |  |
| #28 planScreen | — | M Academy | js/screens-data.js (tela 28) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #28 planScreen | Your Perfect Plan to | Seu Plano Perfeito para | js/screens-data.js (tela 28) |  |
| #28 planScreen | — | Deixar Ela Obcecada por Você | js/screens-data.js (tela 28) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #28 planScreen | — | Com base nas suas respostas, esperamos que ela sinta uma atração forte e fique obcecada por você até | js/screens-data.js (tela 28) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #28 planScreen | — | Dezembro de 2026 | js/screens-data.js (tela 28) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #28 planScreen | Now | Agora | js/screens-data.js (tela 28) |  |
| #28 planScreen | Love Life Master | Mestre da Conquista | js/screens-data.js (tela 28) |  |
| #28 planScreen | This chart is for illustrative purpose only, result may vary. | Este gráfico é apenas ilustrativo. Os resultados podem variar. | js/screens-data.js (tela 28) |  |
| #28 planScreen | Continue | Continuar | js/screens-data.js (tela 28) |  |
| #29 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 29) |  |
| #30 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 30) |  |
| #31 singleChoice | Almost There | Quase lá | js/screens-data.js (tela 31) |  |
| #32 interstitial | Almost There | Quase lá | js/screens-data.js (tela 32) |  |
| #32 interstitial | — | Você já está um passo à frente | js/screens-data.js (tela 32) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #32 interstitial | — | Assuma sua confiança e aprenda como fazer ela se sentir atraída por você. | js/screens-data.js (tela 32) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #32 interstitial | Continue | Continuar | js/screens-data.js (tela 32) |  |
| #33 summaryStatementScreen | — | M Academy | js/screens-data.js (tela 33) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #33 summaryStatementScreen | Confidence level | Nível de confiança | js/screens-data.js (tela 33) |  |
| #33 summaryStatementScreen | Medium | Médio | js/screens-data.js (tela 33) |  |
| #33 summaryStatementScreen | Low | Baixo | js/screens-data.js (tela 33) |  |
| #33 summaryStatementScreen | High | Alto | js/screens-data.js (tela 33) |  |
| #33 summaryStatementScreen | — | Você está pronto — só precisa do plano certo! | js/screens-data.js (tela 33) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #33 summaryStatementScreen | — | Você sabe o que quer, mas precisa de uma estratégia clara. Vamos te mostrar exatamente como avançar — passo a passo. | js/screens-data.js (tela 33) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #33 summaryStatementScreen | Motivation | Motivação | js/screens-data.js (tela 33) |  |
| #33 summaryStatementScreen | Potential | Potencial | js/screens-data.js (tela 33) |  |
| #33 summaryStatementScreen | Patience | Paciência | js/screens-data.js (tela 33) |  |
| #33 summaryStatementScreen | Limited | Limitado | js/screens-data.js (tela 33) |  |
| #33 summaryStatementScreen | Strategy | Estratégia | js/screens-data.js (tela 33) |  |
| #33 summaryStatementScreen | Continue | Continuar | js/screens-data.js (tela 33) |  |
| #34 emailScreen | — | M Academy | js/screens-data.js (tela 34) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #34 emailScreen | — | Insira seu e-mail para ver | js/screens-data.js (tela 34) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #34 emailScreen | — | quando você se tornará a prioridade dela! | js/screens-data.js (tela 34) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #34 emailScreen | — | 500 mil+ | js/screens-data.js (tela 34) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #34 emailScreen | — | usuários se | js/screens-data.js (tela 34) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #34 emailScreen | — | juntaram a nós! | js/screens-data.js (tela 34) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #34 emailScreen | — | Respeitamos sua privacidade e estamos comprometidos em proteger seus dados pessoais. Você receberá uma cópia dos seus resultados por e-mail para acessar quando quiser. Você pode se descadastrar a qualquer momento. | js/screens-data.js (tela 34) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #34 emailScreen | Continue | Continuar | js/screens-data.js (tela 34) |  |
| #35 preofferScreen | — | M Academy | js/screens-data.js (tela 35) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #35 preofferScreen | Now | Agora | js/screens-data.js (tela 35) |  |
| #35 preofferScreen | After 4 Weeks | Após 4 semanas | js/screens-data.js (tela 35) |  |
| #35 preofferScreen | Week 1 | Semana 1 | js/screens-data.js (tela 35) |  |
| #35 preofferScreen | Week 2 | Semana 2 | js/screens-data.js (tela 35) |  |
| #35 preofferScreen | Week 3 | Semana 3 | js/screens-data.js (tela 35) |  |
| #35 preofferScreen | Week 4 | Semana 4 | js/screens-data.js (tela 35) |  |
| #35 preofferScreen | Your readiness level | O seu nível de preparação | js/screens-data.js (tela 35) | ajustado de pt-PT para pt-BR |
| #35 preofferScreen | This chart is for illustrative purpose only, result may vary. | Este gráfico é apenas para fins ilustrativos, o resultado pode variar. | js/screens-data.js (tela 35) |  |
| #35 preofferScreen | — | Seu plano de 4 semanas | js/screens-data.js (tela 35) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #35 preofferScreen | — | para atrair Ana | js/screens-data.js (tela 35) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #35 preofferScreen | is ready! | está pronto! | js/screens-data.js (tela 35) |  |
| #35 preofferScreen | Continue | Continuar | js/screens-data.js (tela 35) |  |
| #36 preofferScreen | — | M Academy | js/screens-data.js (tela 36) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #36 preofferScreen | Now | Agora | js/screens-data.js (tela 36) |  |
| #36 preofferScreen | After 4 Weeks | Após 4 semanas | js/screens-data.js (tela 36) |  |
| #36 preofferScreen | Week 1 | Semana 1 | js/screens-data.js (tela 36) |  |
| #36 preofferScreen | Week 2 | Semana 2 | js/screens-data.js (tela 36) |  |
| #36 preofferScreen | Week 3 | Semana 3 | js/screens-data.js (tela 36) |  |
| #36 preofferScreen | Week 4 | Semana 4 | js/screens-data.js (tela 36) |  |
| #36 preofferScreen | Your readiness level | Seu nível de preparo | js/screens-data.js (tela 36) | ajustado de pt-PT para pt-BR |
| #36 preofferScreen | This chart is for illustrative purpose only, result may vary. | Este gráfico é apenas ilustrativo. Os resultados podem variar. | js/screens-data.js (tela 36) |  |
| #36 preofferScreen | — | Seu plano de | js/screens-data.js (tela 36) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #36 preofferScreen | — | 4 semanas para fazer a {nome} sentir sua falta | js/screens-data.js (tela 36) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #36 preofferScreen | is ready! | está pronto! | js/screens-data.js (tela 36) |  |
| #36 preofferScreen | Continue | Continuar | js/screens-data.js (tela 36) |  |
| #37 preofferScreen | — | M Academy | js/screens-data.js (tela 37) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #37 preofferScreen | Now | Agora | js/screens-data.js (tela 37) |  |
| #37 preofferScreen | After 4 Weeks | Após 4 semanas | js/screens-data.js (tela 37) |  |
| #37 preofferScreen | Week 1 | Semana 1 | js/screens-data.js (tela 37) |  |
| #37 preofferScreen | Week 2 | Semana 2 | js/screens-data.js (tela 37) |  |
| #37 preofferScreen | Week 3 | Semana 3 | js/screens-data.js (tela 37) |  |
| #37 preofferScreen | Week 4 | Semana 4 | js/screens-data.js (tela 37) |  |
| #37 preofferScreen | Your readiness level | O seu nível de preparação | js/screens-data.js (tela 37) | ajustado de pt-PT para pt-BR |
| #37 preofferScreen | This chart is for illustrative purpose only, result may vary. | Este gráfico é apenas para fins ilustrativos, o resultado pode variar. | js/screens-data.js (tela 37) |  |
| #37 preofferScreen | — | Seu plano de | js/screens-data.js (tela 37) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #37 preofferScreen | — | 4 semanas para fazer com que Ana queira você | js/screens-data.js (tela 37) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #37 preofferScreen | is ready! | está pronto! | js/screens-data.js (tela 37) |  |
| #37 preofferScreen | Continue | Continuar | js/screens-data.js (tela 37) |  |
| #39 provenScreen | — | M Academy | js/screens-data.js (tela 39) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #39 provenScreen | — | A M Academy é baseada em ciência psicológica comprovada | js/screens-data.js (tela 39) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #39 provenScreen | — | Sua jornada é baseada em décadas de pesquisa | js/screens-data.js (tela 39) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #39 provenScreen | — | Apoiado por pesquisas científicas de universidades de renome [ | js/screens-data.js (tela 39) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #39 provenScreen | — | ], [ | js/screens-data.js (tela 39) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #39 provenScreen | — | ]. | js/screens-data.js (tela 39) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #39 provenScreen | Continue | Continuar | js/screens-data.js (tela 39) |  |
| #40 singleChoice | Knowledge & Skills | Conhecimento e Habilidades | js/screens-data.js (tela 40) |  |
| #41 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 41) |  |
| #41 singleChoice | It`s complicated | É complicado | js/screens-data.js (tela 41) |  |
| #42 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 42) |  |
| #44 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 44) |  |
| #45 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 45) |  |
| #46 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 46) |  |
| #47 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 47) |  |
| #47 singleChoice | I`m not sure | Não tenho certeza | js/screens-data.js (tela 47) |  |
| #48 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 48) |  |
| #48 singleChoice | I`m not sure | Não tenho certeza | js/screens-data.js (tela 48) |  |
| #49 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 49) |  |
| #50 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 50) |  |
| #51 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 51) |  |
| #51 singleChoice | I`m not sure | Não tenho certeza | js/screens-data.js (tela 51) |  |
| #52 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 52) |  |
| #52 singleChoice | I`m not sure | Não tenho certeza | js/screens-data.js (tela 52) |  |
| #53 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 53) |  |
| #53 singleChoice | I`m not sure | Não tenho certeza | js/screens-data.js (tela 53) |  |
| #54 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 54) |  |
| #54 singleChoice | I`m not sure | Não tenho certeza | js/screens-data.js (tela 54) |  |
| #55 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 55) |  |
| #56 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 56) |  |
| #56 singleChoice | I`m not sure | Não tenho certeza | js/screens-data.js (tela 56) |  |
| #57 interstitial | — | M Academy | js/screens-data.js (tela 57) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #57 interstitial | — | Nós cuidamos de você! | js/screens-data.js (tela 57) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #57 interstitial | — | É comum que a conexão vá diminuindo com o tempo. Nosso plano vai te ajudar a reconstruir a atração e fortalecer ainda mais a ligação. | js/screens-data.js (tela 57) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #57 interstitial | Continue | Continuar | js/screens-data.js (tela 57) |  |
| #58 interstitial | — | M Academy | js/screens-data.js (tela 58) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #58 interstitial | — | Você não está sozinho! | js/screens-data.js (tela 58) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #58 interstitial | — | Você receberá um plano claro para mudar a dinâmica — assim a conexão volta a ser natural e ela passa a se esforçar mais. | js/screens-data.js (tela 58) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #58 interstitial | Continue | Continuar | js/screens-data.js (tela 58) |  |
| #59 singleChoice | Mindset & Desires | Mentalidade e Desejos | js/screens-data.js (tela 59) |  |
| #60 singleChoice | Mindset & Desires | Mentalidade e Desejos | js/screens-data.js (tela 60) |  |
| #61 singleChoice | Mindset & Desires | Mentalidade e Desejos | js/screens-data.js (tela 61) |  |
| #62 singleChoice | Mindset & Desires | Mentalidade e Desejos | js/screens-data.js (tela 62) |  |
| #63 singleChoice | Mindset & Desires | Mentalidade e Desejos | js/screens-data.js (tela 63) |  |
| #64 brainScreen | — | M Academy | js/screens-data.js (tela 64) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #64 brainScreen | Desires | Desejos | js/screens-data.js (tela 64) |  |
| #64 brainScreen | Emotions | Emoções | js/screens-data.js (tela 64) |  |
| #64 brainScreen | Actions | Ações | js/screens-data.js (tela 64) |  |
| #64 brainScreen | — | Seu plano personalizado é baseado em neurociência e psicologia baseada em evidências | js/screens-data.js (tela 64) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #64 brainScreen | — | A M Academy oferece técnicas respaldadas pela psicologia para desencadear as emoções mais profundas dela e fazê-la se sentir atraída por você. | js/screens-data.js (tela 64) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #64 brainScreen | Content reviewed by an expert | Conteúdo revisado por um especialista | js/screens-data.js (tela 64) |  |
| #64 brainScreen | Santiago Delgado | Santiago Delgado | js/screens-data.js (tela 64) |  |
| #64 brainScreen | Relationship Coach | Coach de Relacionamento | js/screens-data.js (tela 64) |  |
| #64 brainScreen | Expert profile shown for illustrative purposes only | Perfil do especialista apresentado apenas para fins ilustrativos | js/screens-data.js (tela 64) |  |
| #64 brainScreen | Continue | Continuar | js/screens-data.js (tela 64) |  |
| #65 multiChoice | Your Profile | Seu perfil | js/screens-data.js (tela 65) |  |
| #65 multiChoice | Choose all that apply | Escolha todas as que se aplicam | js/screens-data.js (tela 65) |  |
| #65 multiChoice | Continue | Continuar | js/screens-data.js (tela 65) |  |
| #66 singleChoice | Mindset & Desires | Mentalidade e Desejos | js/screens-data.js (tela 66) |  |
| #67 emailScreen | — | M Academy | js/screens-data.js (tela 67) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #67 emailScreen | — | Digite seu e-mail para ver quando | js/screens-data.js (tela 67) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #67 emailScreen | — | ela não consegue parar de pensar em você! | js/screens-data.js (tela 67) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #67 emailScreen | — | 500 mil+ | js/screens-data.js (tela 67) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #67 emailScreen | — | usuários se | js/screens-data.js (tela 67) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #67 emailScreen | — | juntaram a nós! | js/screens-data.js (tela 67) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #67 emailScreen | — | Respeitamos sua privacidade e estamos comprometidos em proteger seus dados pessoais. Você receberá uma cópia dos seus resultados por e-mail para acessar quando quiser. Você pode se descadastrar a qualquer momento. | js/screens-data.js (tela 67) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #67 emailScreen | Continue | Continuar | js/screens-data.js (tela 67) |  |
| #69 emailScreen | — | M Academy | js/screens-data.js (tela 69) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #69 emailScreen | — | Digite seu e-mail para ver quando | js/screens-data.js (tela 69) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #69 emailScreen | — | ela vai pensar em você! | js/screens-data.js (tela 69) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #69 emailScreen | — | 500 mil+ | js/screens-data.js (tela 69) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #69 emailScreen | — | usuários se | js/screens-data.js (tela 69) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #69 emailScreen | — | juntaram a nós! | js/screens-data.js (tela 69) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #69 emailScreen | — | Respeitamos sua privacidade e estamos comprometidos em proteger seus dados pessoais. Você receberá uma cópia dos seus resultados por e-mail para acessar quando quiser. Você pode se descadastrar a qualquer momento. | js/screens-data.js (tela 69) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #69 emailScreen | Continue | Continuar | js/screens-data.js (tela 69) |  |
| #70 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 70) |  |
| #71 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 71) |  |
| #72 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 72) |  |
| #73 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 73) |  |
| #74 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 74) |  |
| #75 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 75) |  |
| #75 singleChoice | I`m not sure | Não tenho certeza | js/screens-data.js (tela 75) |  |
| #76 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 76) |  |
| #76 singleChoice | I`m not sure | Não tenho certeza | js/screens-data.js (tela 76) |  |
| #77 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 77) |  |
| #78 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 78) |  |
| #79 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 79) |  |
| #80 singleChoice | Knowledge & Skills | Conhecimento e Habilidades | js/screens-data.js (tela 80) |  |
| #82 summaryStatementScreen | — | M Academy | js/screens-data.js (tela 82) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #82 summaryStatementScreen | Confidence level | Nível de confiança | js/screens-data.js (tela 82) |  |
| #82 summaryStatementScreen | High | Alto | js/screens-data.js (tela 82) |  |
| #82 summaryStatementScreen | Low | Baixo | js/screens-data.js (tela 82) |  |
| #82 summaryStatementScreen | Medium | Médio | js/screens-data.js (tela 82) |  |
| #82 summaryStatementScreen | — | Você está pronto — só precisa do plano certo! | js/screens-data.js (tela 82) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #82 summaryStatementScreen | — | Você sabe o que quer, mas precisa de uma estratégia clara. Vamos te mostrar exatamente como avançar — passo a passo. | js/screens-data.js (tela 82) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #82 summaryStatementScreen | For illustrative purposes only | Apenas para fins ilustrativos | js/screens-data.js (tela 82) |  |
| #82 summaryStatementScreen | Motivation | Motivação | js/screens-data.js (tela 82) |  |
| #82 summaryStatementScreen | Potential | Potencial | js/screens-data.js (tela 82) |  |
| #82 summaryStatementScreen | Patience | Paciência | js/screens-data.js (tela 82) |  |
| #82 summaryStatementScreen | Limited | Limitado | js/screens-data.js (tela 82) |  |
| #82 summaryStatementScreen | Strategy | Estratégia | js/screens-data.js (tela 82) |  |
| #82 summaryStatementScreen | Continue | Continuar | js/screens-data.js (tela 82) |  |
| #84 summaryStatementScreen | — | M Academy | js/screens-data.js (tela 84) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #84 summaryStatementScreen | Confidence level | Nível de confiança | js/screens-data.js (tela 84) |  |
| #84 summaryStatementScreen | Medium | Médio | js/screens-data.js (tela 84) |  |
| #84 summaryStatementScreen | Low | Baixo | js/screens-data.js (tela 84) |  |
| #84 summaryStatementScreen | High | Alto | js/screens-data.js (tela 84) |  |
| #84 summaryStatementScreen | — | Você está pronto — só precisa do plano certo! | js/screens-data.js (tela 84) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #84 summaryStatementScreen | — | Você sabe o que quer, mas precisa de uma estratégia clara. Vamos te mostrar exatamente como avançar — passo a passo. | js/screens-data.js (tela 84) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #84 summaryStatementScreen | For illustrative purposes only | Apenas para fins ilustrativos | js/screens-data.js (tela 84) |  |
| #84 summaryStatementScreen | Motivation | Motivação | js/screens-data.js (tela 84) |  |
| #84 summaryStatementScreen | Moderate | Moderado | js/screens-data.js (tela 84) |  |
| #84 summaryStatementScreen | Potential | Potencial | js/screens-data.js (tela 84) |  |
| #84 summaryStatementScreen | Patience | Paciência | js/screens-data.js (tela 84) |  |
| #84 summaryStatementScreen | Limited | Limitado | js/screens-data.js (tela 84) |  |
| #84 summaryStatementScreen | Strategy | Estratégia | js/screens-data.js (tela 84) |  |
| #84 summaryStatementScreen | Continue | Continuar | js/screens-data.js (tela 84) |  |
| #85 summaryStatementScreen | — | M Academy | js/screens-data.js (tela 85) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #85 summaryStatementScreen | Confidence level | Nível de confiança | js/screens-data.js (tela 85) |  |
| #85 summaryStatementScreen | Low | Baixo | js/screens-data.js (tela 85) |  |
| #85 summaryStatementScreen | Medium | Médio | js/screens-data.js (tela 85) |  |
| #85 summaryStatementScreen | High | Alto | js/screens-data.js (tela 85) |  |
| #85 summaryStatementScreen | — | Você está pronto — só precisa do plano certo! | js/screens-data.js (tela 85) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #85 summaryStatementScreen | — | Você sabe o que quer, mas precisa de uma estratégia clara. Vamos te mostrar exatamente como avançar — passo a passo. | js/screens-data.js (tela 85) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #85 summaryStatementScreen | For illustrative purposes only | Apenas para fins ilustrativos | js/screens-data.js (tela 85) |  |
| #85 summaryStatementScreen | Motivation | Motivação | js/screens-data.js (tela 85) |  |
| #85 summaryStatementScreen | Moderate | Moderado | js/screens-data.js (tela 85) |  |
| #85 summaryStatementScreen | Potential | Potencial | js/screens-data.js (tela 85) |  |
| #85 summaryStatementScreen | Patience | Paciência | js/screens-data.js (tela 85) |  |
| #85 summaryStatementScreen | Limited | Limitado | js/screens-data.js (tela 85) |  |
| #85 summaryStatementScreen | Strategy | Estratégia | js/screens-data.js (tela 85) |  |
| #85 summaryStatementScreen | Continue | Continuar | js/screens-data.js (tela 85) |  |
| #87 emailScreen | — | M Academy | js/screens-data.js (tela 87) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #87 emailScreen | — | Insira seu e-mail para ver | js/screens-data.js (tela 87) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #87 emailScreen | — | quando você se tornará a prioridade dela! | js/screens-data.js (tela 87) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #87 emailScreen | — | 500 mil+ | js/screens-data.js (tela 87) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #87 emailScreen | — | homens já | js/screens-data.js (tela 87) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #87 emailScreen | — | se juntaram a nós! | js/screens-data.js (tela 87) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #87 emailScreen | — | Respeitamos sua privacidade e estamos comprometidos em proteger seus dados pessoais. Você receberá uma cópia dos seus resultados por e-mail para acessar quando quiser. Você pode se descadastrar a qualquer momento. | js/screens-data.js (tela 87) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #87 emailScreen | Make sure your email is valid — | Certifique-se de que seu e-mail é válido — | js/screens-data.js (tela 87) |  |
| #87 emailScreen | don't miss your | não perca seu | js/screens-data.js (tela 87) |  |
| #87 emailScreen | Bonus! | Bônus! | js/screens-data.js (tela 87) |  |
| #87 emailScreen | Continue | Continuar | js/screens-data.js (tela 87) |  |
| #88 emailScreen | — | M Academy | js/screens-data.js (tela 88) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #88 emailScreen | — | Digite seu e-mail para ver quando | js/screens-data.js (tela 88) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #88 emailScreen | — | ela não consegue parar de pensar em você! | js/screens-data.js (tela 88) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #88 emailScreen | — | 500 mil+ | js/screens-data.js (tela 88) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #88 emailScreen | — | homens já | js/screens-data.js (tela 88) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #88 emailScreen | — | se juntaram a nós! | js/screens-data.js (tela 88) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #88 emailScreen | — | Respeitamos sua privacidade e estamos comprometidos em proteger seus dados pessoais. Você receberá uma cópia dos seus resultados por e-mail para acessar quando quiser. Você pode se descadastrar a qualquer momento. | js/screens-data.js (tela 88) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #88 emailScreen | Make sure your email is valid — | Certifique-se de que seu e-mail é válido — | js/screens-data.js (tela 88) |  |
| #88 emailScreen | don't miss your | não perca seu | js/screens-data.js (tela 88) |  |
| #88 emailScreen | Bonus! | Bônus! | js/screens-data.js (tela 88) |  |
| #88 emailScreen | Continue | Continuar | js/screens-data.js (tela 88) |  |
| #90 emailScreen | — | M Academy | js/screens-data.js (tela 90) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #90 emailScreen | — | Digite seu e-mail para ver quando | js/screens-data.js (tela 90) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #90 emailScreen | — | ela vai pensar em você! | js/screens-data.js (tela 90) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #90 emailScreen | — | 500 mil+ | js/screens-data.js (tela 90) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #90 emailScreen | — | homens já | js/screens-data.js (tela 90) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #90 emailScreen | — | se juntaram a nós! | js/screens-data.js (tela 90) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #90 emailScreen | — | Respeitamos sua privacidade e estamos comprometidos em proteger seus dados pessoais. Você receberá uma cópia dos seus resultados por e-mail para acessar quando quiser. Você pode se descadastrar a qualquer momento. | js/screens-data.js (tela 90) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #90 emailScreen | Make sure your email is valid — | Certifique-se de que seu e-mail é válido — | js/screens-data.js (tela 90) |  |
| #90 emailScreen | don't miss your | não perca seu | js/screens-data.js (tela 90) |  |
| #90 emailScreen | Bonus! | Bônus! | js/screens-data.js (tela 90) |  |
| #90 emailScreen | Continue | Continuar | js/screens-data.js (tela 90) |  |
| #92 singleChoice | Almost There | Quase lá | js/screens-data.js (tela 92) |  |
| #93 singleChoice | Knowledge & Skills | Conhecimento e Habilidades | js/screens-data.js (tela 93) |  |
| #94 singleChoice | Almost There | Quase lá | js/screens-data.js (tela 94) |  |
| #95 popularityScreen | — | M Academy | js/screens-data.js (tela 95) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #95 popularityScreen | — | 500.000+ usuários | js/screens-data.js (tela 95) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #95 popularityScreen | — | já conquistaram resultados com o nosso | js/screens-data.js (tela 95) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #95 popularityScreen | — | plano comprovado | js/screens-data.js (tela 95) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #95 popularityScreen | — | Você não precisa correr atrás — basta despertar as emoções certas e ela não vai conseguir parar de pensar em você. | js/screens-data.js (tela 95) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #95 popularityScreen | Team | Equipa | js/screens-data.js (tela 95) | ajustado de pt-PT para pt-BR |
| #95 popularityScreen | — | Apoiado por pesquisas científicas de universidades de renome [ | js/screens-data.js (tela 95) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #95 popularityScreen | — | ], [ | js/screens-data.js (tela 95) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #95 popularityScreen | — | ]. | js/screens-data.js (tela 95) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #95 popularityScreen | — | As descobertas psicológicas mais recentes sobre atração feminina, vínculo e reconexão foram apresentadas em | js/screens-data.js (tela 95) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #95 popularityScreen | — | Oxford | js/screens-data.js (tela 95) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #95 popularityScreen | — | , | js/screens-data.js (tela 95) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #95 popularityScreen | — | Harvard | js/screens-data.js (tela 95) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #95 popularityScreen | and | e | js/screens-data.js (tela 95) |  |
| #95 popularityScreen | — | Cambridge | js/screens-data.js (tela 95) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #95 popularityScreen | — | — agora chegou a sua vez de usá-las | js/screens-data.js (tela 95) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #95 popularityScreen | Continue | Continuar | js/screens-data.js (tela 95) |  |
| #96 popularityScreen | — | M Academy | js/screens-data.js (tela 96) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #96 popularityScreen | — | 500.000+ homens | js/screens-data.js (tela 96) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #96 popularityScreen | — | já conquistaram resultados com o nosso | js/screens-data.js (tela 96) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #96 popularityScreen | — | plano comprovado | js/screens-data.js (tela 96) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #96 popularityScreen | — | Você não precisa correr atrás — basta despertar as emoções certas e ela não vai conseguir parar de pensar em você. | js/screens-data.js (tela 96) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #96 popularityScreen | Team | Equipa | js/screens-data.js (tela 96) | ajustado de pt-PT para pt-BR |
| #96 popularityScreen | — | Apoiado por pesquisas científicas de universidades de renome [ | js/screens-data.js (tela 96) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #96 popularityScreen | — | ], [ | js/screens-data.js (tela 96) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #96 popularityScreen | — | ]. | js/screens-data.js (tela 96) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #96 popularityScreen | — | As descobertas psicológicas mais recentes sobre atração feminina, vínculo e reconexão foram apresentadas em | js/screens-data.js (tela 96) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #96 popularityScreen | — | Oxford | js/screens-data.js (tela 96) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #96 popularityScreen | — | , | js/screens-data.js (tela 96) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #96 popularityScreen | — | Harvard | js/screens-data.js (tela 96) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #96 popularityScreen | and | e | js/screens-data.js (tela 96) |  |
| #96 popularityScreen | — | Cambridge | js/screens-data.js (tela 96) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #96 popularityScreen | — | — agora chegou a sua vez de usá-las | js/screens-data.js (tela 96) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #96 popularityScreen | Continue | Continuar | js/screens-data.js (tela 96) |  |
| #99 loader | — | M Academy | js/screens-data.js (tela 99) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #99 loader | — | 500.000+ homens | js/screens-data.js (tela 99) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #99 loader | have chosen M Academy | escolheu M Academy | js/screens-data.js (tela 99) |  |
| #99 loader | Creating your Personal plan... | A criar o seu plano pessoal... | js/screens-data.js (tela 99) | ajustado de pt-PT para pt-BR |
| #99 loader | Setting goals | Definindo metas | js/screens-data.js (tela 99) |  |
| #99 loader | — | 30% | js/screens-data.js (tela 99) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #99 loader | Analyzing growth area | Analisando área de crescimento | js/screens-data.js (tela 99) |  |
| #99 loader | 0% | 0% | js/screens-data.js (tela 99) |  |
| #99 loader | Adjusting content | Ajustando conteúdo | js/screens-data.js (tela 99) |  |
| #99 loader | Michael | Michael | js/screens-data.js (tela 99) |  |
| #99 loader | — | 1 críticas | js/screens-data.js (tela 99) | ajustado de pt-PT para pt-BR |
| #99 loader | USA | EUA | js/screens-data.js (tela 99) |  |
| #99 loader | Verified | Verificado | js/screens-data.js (tela 99) |  |
| #99 loader | — | 8 de Junho de 2026 | js/screens-data.js (tela 99) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #99 loader | I’ve always stayed on the phone until... | Sempre fiquei ao telefone até... | js/screens-data.js (tela 99) |  |
| #99 loader | I’ve always stayed on the phone until we both were tired I learned now to leave her missing me until we talk again | Sempre fiquei ao telefone até nós dois estarmos cansados, mas agora aprendi a deixar ela com saudades até a próxima vez que conversarmos | js/screens-data.js (tela 99) |  |
| #99 loader | — | Data da experiência: | js/screens-data.js (tela 99) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #99 loader | — | 7 de Junho de 2026 | js/screens-data.js (tela 99) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #99 loader | Petar | Petar | js/screens-data.js (tela 99) |  |
| #99 loader | in | EM | js/screens-data.js (tela 99) |  |
| #99 loader | — | 24 de Abril de 2026 | js/screens-data.js (tela 99) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #99 loader | The experience opened my eyes well to... | A experiência realmente me abriu os olhos para... | js/screens-data.js (tela 99) |  |
| #99 loader | The experience opened my eyes well to where I am wrong and gave me a lot of self-confidence in every sense. I also feel much better mentally and safer. | A experiência realmente me abriu os olhos para onde estou errado e me deu muita autoconfiança em todos os sentidos. Também me sinto muito melhor mentalmente e mais seguro. | js/screens-data.js (tela 99) |  |
| #99 loader | — | AM | js/screens-data.js (tela 99) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #99 loader | Asab Mahmood | Asab Mahmood | js/screens-data.js (tela 99) |  |
| #99 loader | — | 16 críticas | js/screens-data.js (tela 99) | ajustado de pt-PT para pt-BR |
| #99 loader | GB | GB | js/screens-data.js (tela 99) |  |
| #99 loader | — | 20 de Junho de 2026 | js/screens-data.js (tela 99) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #99 loader | Great way to fix what's broken | Ótima maneira de consertar o que está quebrado | js/screens-data.js (tela 99) |  |
| #99 loader | Made me aware of my mistakes. Im new to this program and to be honest sounds good and today is first day of final text to her and as stated. Easy to follow and the videos are so good with easy instructions to follow | Fez com que eu percebesse meus erros. Sou novo neste programa e, para ser sincero, parece ótimo. Hoje é o primeiro dia da mensagem final para ela, como foi dito. É fácil de acompanhar e os vídeos são excelentes, com instruções simples de seguir. | js/screens-data.js (tela 99) |  |
| #99 loader | Continue | Continuar | js/screens-data.js (tela 99) |  |
| #100 brainScreen | — | M Academy | js/screens-data.js (tela 100) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #100 brainScreen | Desires | Desejos | js/screens-data.js (tela 100) |  |
| #100 brainScreen | Emotions | Emoções | js/screens-data.js (tela 100) |  |
| #100 brainScreen | Actions | Ações | js/screens-data.js (tela 100) |  |
| #100 brainScreen | — | Seu plano personalizado é baseado em neurociência e psicologia baseada em evidências | js/screens-data.js (tela 100) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #100 brainScreen | — | A M Academy oferece técnicas respaldadas pela psicologia para desencadear as emoções mais profundas dela e fazê-la se sentir atraída por você. | js/screens-data.js (tela 100) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #100 brainScreen | Content reviewed by an expert | Conteúdo revisado por um especialista | js/screens-data.js (tela 100) |  |
| #100 brainScreen | Santiago Delgado | Santiago Delgado | js/screens-data.js (tela 100) |  |
| #100 brainScreen | RH Certified Coach, Ph.D in Social Psychology | Coach Certificado RH, Ph.D em Psicologia Social | js/screens-data.js (tela 100) |  |
| #100 brainScreen | Expert profile shown for illustrative purposes only | Perfil do especialista apresentado apenas para fins ilustrativos | js/screens-data.js (tela 100) |  |
| #100 brainScreen | Continue | Continuar | js/screens-data.js (tela 100) |  |
| #103 planScreen | — | M Academy | js/screens-data.js (tela 103) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #103 planScreen | Your Perfect Plan to | Seu Plano Perfeito para | js/screens-data.js (tela 103) |  |
| #103 planScreen | — | Fazer Ela Escolher Você | js/screens-data.js (tela 103) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #103 planScreen | — | Com base nas suas respostas, esperamos que você se torne prioridade dela e se sinta escolhido por ela até | js/screens-data.js (tela 103) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #103 planScreen | — | Dezembro de 2026 | js/screens-data.js (tela 103) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #103 planScreen | Now | Agora | js/screens-data.js (tela 103) |  |
| #103 planScreen | Goal | Objetivo | js/screens-data.js (tela 103) |  |
| #103 planScreen | This chart is for illustrative purpose only, result may vary. | Este gráfico é apenas para fins ilustrativos, o resultado pode variar. | js/screens-data.js (tela 103) |  |
| #103 planScreen | Continue | Continuar | js/screens-data.js (tela 103) |  |
| #104 planScreen | — | M Academy | js/screens-data.js (tela 104) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #104 planScreen | Your Perfect Plan to | Seu Plano Perfeito para | js/screens-data.js (tela 104) |  |
| #104 planScreen | — | Fazê-la Ficar Obcecada por Você | js/screens-data.js (tela 104) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #104 planScreen | — | Com base nas suas respostas, esperamos que ela sinta forte atração e fique obcecada por você até | js/screens-data.js (tela 104) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #104 planScreen | — | Dezembro de 2026 | js/screens-data.js (tela 104) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #104 planScreen | Now | Agora | js/screens-data.js (tela 104) |  |
| #104 planScreen | Love Life Master | Amor Vida Mestre | js/screens-data.js (tela 104) |  |
| #104 planScreen | This chart is for illustrative purpose only, result may vary. | Este gráfico é apenas para fins ilustrativos, o resultado pode variar. | js/screens-data.js (tela 104) |  |
| #104 planScreen | Continue | Continuar | js/screens-data.js (tela 104) |  |
| #105 planScreen | — | M Academy | js/screens-data.js (tela 105) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #105 planScreen | Your Perfect Plan to | Seu Plano Perfeito para | js/screens-data.js (tela 105) |  |
| #105 planScreen | — | Deixar Ela Obcecada por Você | js/screens-data.js (tela 105) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #105 planScreen | — | Com base nas suas respostas, esperamos que ela sinta uma atração forte e fique obcecada por você até | js/screens-data.js (tela 105) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #105 planScreen | — | Dezembro de 2026 | js/screens-data.js (tela 105) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #105 planScreen | Now | Agora | js/screens-data.js (tela 105) |  |
| #105 planScreen | Love Life Master | Mestre da Conquista | js/screens-data.js (tela 105) |  |
| #105 planScreen | This chart is for illustrative purpose only, result may vary. | Este gráfico é apenas ilustrativo. Os resultados podem variar. | js/screens-data.js (tela 105) |  |
| #105 planScreen | Continue | Continuar | js/screens-data.js (tela 105) |  |
| #106 preofferScreen | — | M Academy | js/screens-data.js (tela 106) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #106 preofferScreen | Now | Agora | js/screens-data.js (tela 106) |  |
| #106 preofferScreen | After 4 Weeks | Após 4 semanas | js/screens-data.js (tela 106) |  |
| #106 preofferScreen | Week 1 | Semana 1 | js/screens-data.js (tela 106) |  |
| #106 preofferScreen | Week 2 | Semana 2 | js/screens-data.js (tela 106) |  |
| #106 preofferScreen | Week 3 | Semana 3 | js/screens-data.js (tela 106) |  |
| #106 preofferScreen | Week 4 | Semana 4 | js/screens-data.js (tela 106) |  |
| #106 preofferScreen | Your readiness level | O seu nível de preparação | js/screens-data.js (tela 106) | ajustado de pt-PT para pt-BR |
| #106 preofferScreen | This chart is for illustrative purpose only, result may vary. | Este gráfico é apenas para fins ilustrativos, o resultado pode variar. | js/screens-data.js (tela 106) |  |
| #106 preofferScreen | — | Seu plano de 4 semanas | js/screens-data.js (tela 106) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #106 preofferScreen | — | para atrair Ana | js/screens-data.js (tela 106) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #106 preofferScreen | is ready! | está pronto! | js/screens-data.js (tela 106) |  |
| #106 preofferScreen | Continue | Continuar | js/screens-data.js (tela 106) |  |
| #107 preofferScreen | — | M Academy | js/screens-data.js (tela 107) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #107 preofferScreen | Now | Agora | js/screens-data.js (tela 107) |  |
| #107 preofferScreen | After 4 Weeks | Após 4 semanas | js/screens-data.js (tela 107) |  |
| #107 preofferScreen | Week 1 | Semana 1 | js/screens-data.js (tela 107) |  |
| #107 preofferScreen | Week 2 | Semana 2 | js/screens-data.js (tela 107) |  |
| #107 preofferScreen | Week 3 | Semana 3 | js/screens-data.js (tela 107) |  |
| #107 preofferScreen | Week 4 | Semana 4 | js/screens-data.js (tela 107) |  |
| #107 preofferScreen | Your readiness level | Seu nível de preparo | js/screens-data.js (tela 107) | ajustado de pt-PT para pt-BR |
| #107 preofferScreen | This chart is for illustrative purpose only, result may vary. | Este gráfico é apenas ilustrativo. Os resultados podem variar. | js/screens-data.js (tela 107) |  |
| #107 preofferScreen | — | Seu plano de | js/screens-data.js (tela 107) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #107 preofferScreen | — | 4 semanas para fazer a {nome} sentir sua falta | js/screens-data.js (tela 107) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #107 preofferScreen | is ready! | está pronto! | js/screens-data.js (tela 107) |  |
| #107 preofferScreen | Continue | Continuar | js/screens-data.js (tela 107) |  |
| #108 preofferScreen | — | M Academy | js/screens-data.js (tela 108) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #108 preofferScreen | Now | Agora | js/screens-data.js (tela 108) |  |
| #108 preofferScreen | After 4 Weeks | Após 4 semanas | js/screens-data.js (tela 108) |  |
| #108 preofferScreen | Week 1 | Semana 1 | js/screens-data.js (tela 108) |  |
| #108 preofferScreen | Week 2 | Semana 2 | js/screens-data.js (tela 108) |  |
| #108 preofferScreen | Week 3 | Semana 3 | js/screens-data.js (tela 108) |  |
| #108 preofferScreen | Week 4 | Semana 4 | js/screens-data.js (tela 108) |  |
| #108 preofferScreen | Your readiness level | O seu nível de preparação | js/screens-data.js (tela 108) | ajustado de pt-PT para pt-BR |
| #108 preofferScreen | This chart is for illustrative purpose only, result may vary. | Este gráfico é apenas para fins ilustrativos, o resultado pode variar. | js/screens-data.js (tela 108) |  |
| #108 preofferScreen | — | Seu plano de | js/screens-data.js (tela 108) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #108 preofferScreen | — | 4 semanas para fazer com que Ana queira você | js/screens-data.js (tela 108) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #108 preofferScreen | is ready! | está pronto! | js/screens-data.js (tela 108) |  |
| #108 preofferScreen | Continue | Continuar | js/screens-data.js (tela 108) |  |
| #110 interstitial | — | M Academy | js/screens-data.js (tela 110) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #110 interstitial | — | Baseado em pesquisas psicológicas | js/screens-data.js (tela 110) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #110 interstitial | — | Nosso plano é fundamentado em ciência de relacionamento e comportamento das principais universidades, incluindo Oxford, Harvard e Stanford. | js/screens-data.js (tela 110) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #110 interstitial | — | Apoiado por pesquisas científicas de universidades de renome [ | js/screens-data.js (tela 110) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #110 interstitial | — | ], [ | js/screens-data.js (tela 110) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #110 interstitial | — | ]. | js/screens-data.js (tela 110) | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| #110 interstitial | Continue | Continuar | js/screens-data.js (tela 110) |  |
| #112 singleChoice | Almost There | Quase lá | js/screens-data.js (tela 112) |  |
| #113 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 113) |  |
| #113 singleChoice | Flirt with confidence | Flerte com confiança | js/screens-data.js (tela 113) |  |
| #115 singleChoice | Your Profile | Seu perfil | js/screens-data.js (tela 115) |  |
| oferta | — | 63% de desconto | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | reservado para: | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | 09 | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | 39 | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | Get My Plan | Obter meu plano | js/offer-data.js |  |
| oferta | — | 🎁 | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | Your discount: | Seu desconto: | js/offer-data.js |  |
| oferta | — | -63% | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | João, desbloqueie a estratégia para mudar o que ela sente! | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | Before | Antes | js/offer-data.js |  |
| oferta | After | Após | js/offer-data.js |  |
| oferta | Status: | Status: | js/offer-data.js |  |
| oferta | Single | Solteiro | js/offer-data.js |  |
| oferta | Goal: | Objetivo: | js/offer-data.js |  |
| oferta | Make her want me | Fazer com que ela me queira | js/offer-data.js |  |
| oferta | Attraction | Atração | js/offer-data.js |  |
| oferta | Weak | Fraco | js/offer-data.js |  |
| oferta | Dynamic | Dinâmico | js/offer-data.js |  |
| oferta | You chasing | Você correndo atrás | js/offer-data.js |  |
| oferta | connection | Conexão | js/offer-data.js |  |
| oferta | Inconsistent | Inconsistente | js/offer-data.js |  |
| oferta | Strong | Forte | js/offer-data.js |  |
| oferta | She invests | Ela investe | js/offer-data.js |  |
| oferta | Natural | Natural | js/offer-data.js |  |
| oferta | — | Junte-se aos 500 mil+ | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | homens que permanecem nos pensamentos dela com nosso plano comprovado! | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | Seu plano pessoal | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | Make Her Miss You | Fazer Ela Sentir Sua Falta | js/offer-data.js |  |
| oferta | is ready! | está pronto! | js/offer-data.js |  |
| oferta | — | 63% DE DESCONTO | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | Your promo code applied! | O seu código promocional foi aplicado! | js/offer-data.js | ajustado de pt-PT para pt-BR |
| oferta | — | João_oct26 | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | min | min | js/offer-data.js |  |
| oferta | — | sec | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | PLANO DE 12 SEMANAS | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | R$490 | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | R$230 | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | Poupe 53% | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | R$5.44 | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | R$ | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | 56 | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | per day | por dia | js/offer-data.js |  |
| oferta | MOST POPULAR | MAIS POPULARES | js/offer-data.js |  |
| oferta | — | PLANO DE 4 SEMANAS | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | R$315 | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | R$118 | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | Poupe 63% | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | R$10.5 | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | 93 | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | PLANO DE 24 SEMANAS | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | R$660 | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | R$430 | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | Poupe 35% | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | R$3.67 | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | Get My Plan | OBTER MEU PLANO | js/offer-data.js |  |
| oferta | Safe & secure payment | Pagamento seguro e protegido | js/offer-data.js |  |
| oferta | — | Ao clicar em | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | , você concorda com a renovação automática da assinatura. | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | R$118.00 | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | cobrado hoje, depois | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | a cada | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | 30 | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | days | dias | js/offer-data.js |  |
| oferta | — | . | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | Além disso, poderá ser cobrado um valor de R$ 1 como pré-autorização, que será reembolsado a si. | js/offer-data.js | ajustado de pt-PT para pt-BR |
| oferta | — | Cancele a qualquer momento enviando um e-mail para | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | support@musesacademy.io | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | Highlights of your plan | Destaques do seu plano | js/offer-data.js |  |
| oferta | Week 1 | SEMANA 1 | js/offer-data.js |  |
| oferta | Reset Your Approach | Redefina Sua Abordagem | js/offer-data.js |  |
| oferta | Week 2 | SEMANA 2 | js/offer-data.js |  |
| oferta | Build Attraction | Construa a atração | js/offer-data.js |  |
| oferta | Week 3 | SEMANA 3 | js/offer-data.js |  |
| oferta | Psychology \n of Women | Psicologia das Mulheres | js/offer-data.js |  |
| oferta | Week 4 | SEMANA 4 | js/offer-data.js |  |
| oferta | Make Her Miss You | Fazer Ela Sentir Sua Falta | js/offer-data.js |  |
| oferta | Attraction plan | Plano de atração | js/offer-data.js |  |
| oferta | clear steps to make her miss you | passos claros para fazer ela sentir sua falta | js/offer-data.js |  |
| oferta | Proven psychology | Psicologia comprovada | js/offer-data.js |  |
| oferta | what makes her think about you | o que faz ela pensar em você | js/offer-data.js |  |
| oferta | One-to-one live sessions | Sessões individuais ao vivo | js/offer-data.js |  |
| oferta | with relationships experts | com especialistas em relacionamentos | js/offer-data.js |  |
| oferta | Text message scripts | Roteiros de mensagens de texto | js/offer-data.js |  |
| oferta | exactly what to send and when | exatamente o que enviar e quando | js/offer-data.js |  |
| oferta | Simple strategies | Estratégias simples | js/offer-data.js |  |
| oferta | to stay on her mind | para continuar na mente dela | js/offer-data.js |  |
| oferta | — | Resultados/p&gt; | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | She texts you first | Ela manda mensagem primeiro | js/offer-data.js |  |
| oferta | Effort becomes mutual | O esforço passa a ser mútuo | js/offer-data.js |  |
| oferta | Clear interest from her | Interesse claro da parte dela | js/offer-data.js |  |
| oferta | No more mixed messages | Chega de mensagens confusas | js/offer-data.js |  |
| oferta | Stronger attraction | Atração ainda mais forte | js/offer-data.js |  |
| oferta | She wants to see you again | Ela quer te ver de novo | js/offer-data.js |  |
| oferta | Better connection | Conexão melhor | js/offer-data.js |  |
| oferta | Things move forward naturally | As coisas avançam naturalmente | js/offer-data.js |  |
| oferta | — | Antes e depois de começar a usar M Academy | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | Overthinking | Pensando demais | js/offer-data.js |  |
| oferta | Wrong texts | Mensagens erradas | js/offer-data.js |  |
| oferta | Mixed signals | Sinais mistos | js/offer-data.js |  |
| oferta | Chasing her | Correndo atrás dela | js/offer-data.js |  |
| oferta | No progress | Sem progresso | js/offer-data.js |  |
| oferta | Clear strategy | Estratégia clara | js/offer-data.js |  |
| oferta | Right messages | Mensagens certas | js/offer-data.js |  |
| oferta | Calm confidence | Confiança tranquila | js/offer-data.js |  |
| oferta | She reaches out | Ela te procura | js/offer-data.js |  |
| oferta | Strong attraction | Atração forte | js/offer-data.js |  |
| oferta | — | As pessoas perguntam com frequência | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | I have a unique life situation. Will the plan suit me? | Tenho uma situação de vida única. O plano vai se adequar a mim? | js/offer-data.js |  |
| oferta | Definitely! Our plan is hyper-personalized, and moreover, you can ask for advice from our top experts in the chat and they will provide a response in less than a minute. | Com certeza! Nosso plano é altamente personalizado e, além disso, você pode pedir conselhos aos nossos melhores especialistas no chat, que responderão em menos de um minuto. | js/offer-data.js |  |
| oferta | How can I benefit from this plan? | Como posso me beneficiar deste plano? | js/offer-data.js |  |
| oferta | This plan is to improve your relationships, regardless of whether you are single or in a committed partnership. We cater to your specific needs and goals, offering effective solutions and support. | Este plano é para melhorar seus relacionamentos, esteja solteiro ou em um relacionamento sério. Atendemos às suas necessidades e objetivos específicos, oferecendo soluções eficazes e apoio dedicado. | js/offer-data.js |  |
| oferta | What if it's hard for me to stay motivated? | E se for difícil para mim manter a motivação? | js/offer-data.js |  |
| oferta | No need to worry! Our plan is designed to help you build motivation gradually, so you won't have to rely on it too heavily from the start. Plus, we're here to provide constant support and expert guidance to keep you motivated throughout your journey. | Não precisa se preocupar! Nosso plano foi desenvolvido para ajudá-lo a construir motivação aos poucos, então você não vai precisar depender dela demais desde o início. Além disso, estamos aqui para oferecer suporte constante e orientação especializada para mantê-lo motivado durante toda a sua jornada. | js/offer-data.js |  |
| oferta | — | Já experimentei muitos recursos. Por que M Academy é melhor? | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | Mais de 500.000+ homens nos escolheram, o feedback deles abaixo será a resposta para a pergunta. | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | Users love our plans | Os utilizadores adoram os nossos planos | js/offer-data.js | ajustado de pt-PT para pt-BR |
| oferta | — | 4.4 | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | Excellent | Excelente | js/offer-data.js |  |
| oferta | — | 4 mil avaliações | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | Com base nas avaliações de clientes M Academy | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | — | AM | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | Asab Mahmood | Asab Mahmood | js/offer-data.js |  |
| oferta | — | 16 críticas | js/offer-data.js | ajustado de pt-PT para pt-BR |
| oferta | GB | GB | js/offer-data.js |  |
| oferta | Verified | Verificado | js/offer-data.js |  |
| oferta | — | 20 de Junho de 2026 | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | Great way to fix what's broken | Ótima maneira de consertar o que está quebrado | js/offer-data.js |  |
| oferta | Made me aware of my mistakes. Im new to this program and to be honest sounds good and today is first day of final text to her and as stated. Easy to follow and the videos are so good with easy instructions to follow | Fez com que eu percebesse meus erros. Sou novo neste programa e, para ser sincero, parece ótimo. Hoje é o primeiro dia da mensagem final para ela, como foi dito. É fácil de acompanhar e os vídeos são excelentes, com instruções simples de seguir. | js/offer-data.js |  |
| oferta | — | Data da experiência: | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | Michael | Michael | js/offer-data.js |  |
| oferta | — | 1 críticas | js/offer-data.js | ajustado de pt-PT para pt-BR |
| oferta | USA | EUA | js/offer-data.js |  |
| oferta | — | 8 de Junho de 2026 | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | I’ve always stayed on the phone until... | Sempre fiquei ao telefone até... | js/offer-data.js |  |
| oferta | I’ve always stayed on the phone until we both were tired I learned now to leave her missing me until we talk again | Sempre fiquei ao telefone até nós dois estarmos cansados, mas agora aprendi a deixar ela com saudades até a próxima vez que conversarmos | js/offer-data.js |  |
| oferta | — | 7 de Junho de 2026 | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | Petar | Petar | js/offer-data.js |  |
| oferta | in | EM | js/offer-data.js |  |
| oferta | — | 24 de Abril de 2026 | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | The experience opened my eyes well to... | A experiência realmente me abriu os olhos para... | js/offer-data.js |  |
| oferta | The experience opened my eyes well to where I am wrong and gave me a lot of self-confidence in every sense. I also feel much better mentally and safer. | A experiência realmente me abriu os olhos para onde estou errado e me deu muita autoconfiança em todos os sentidos. Também me sinto muito melhor mentalmente e mais seguro. | js/offer-data.js |  |
| oferta | Choose your plan | Escolha o seu plano | js/offer-data.js |  |
| oferta | — | Atraia a mulher certa | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | 30-days money-back guarantee | Garantia de reembolso em 30 dias | js/offer-data.js |  |
| oferta | — | Acreditamos que nosso plano vai funcionar para você e que você verá resultados notáveis em apenas 4 semanas! Estamos até prontos para devolver o seu dinheiro se este plano não for para você! Saiba mais sobre todas as condições em nosso | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| oferta | Terms & Conditions | Termos e Condições | js/offer-data.js |  |
| oferta | — | © 2026 AppStar Inc, Office 402, 1435 Vine Street, Cincinnati, Ohio, 45202, USA. All rights reserved. | js/offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| popup raspadinha | — | M Academy | js/script.js / offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| popup raspadinha | Scratch & unlock a surprise discount on your Рlan! | Raspe e desbloqueie um desconto surpresa no seu plano! | js/script.js / offer-data.js |  |
| popup raspadinha | Just our way of saying we appreciate you! | Nossa maneira de dizer que apreciamos você! | js/script.js / offer-data.js |  |
| popup raspadinha | — | 63% | js/script.js / offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| popup raspadinha | off your subscription | no seu subscrição | js/script.js / offer-data.js |  |
| popup raspadinha | — | 🥳 | js/script.js / offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| popup raspadinha | Woo hoo! | Uhu! | js/script.js / offer-data.js |  |
| popup raspadinha | You won a discount | Você ganhou um desconto | js/script.js / offer-data.js |  |
| popup raspadinha | — | 63% DE DESCONTO | js/script.js / offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| popup raspadinha | — | User_oct26 | js/script.js / offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| popup raspadinha | This discount will be applied automatically | Este desconto será aplicado automaticamente | js/script.js / offer-data.js |  |
| popup raspadinha | Continue | Continuar | js/script.js / offer-data.js |  |
| modal do loader | — | M Academy | js/script.js / offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| modal do loader | — | 500.000+ homens | js/script.js / offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| modal do loader | have chosen M Academy | escolheu M Academy | js/script.js / offer-data.js |  |
| modal do loader | Creating your Personal plan... | A criar o seu plano pessoal... | js/script.js / offer-data.js | ajustado de pt-PT para pt-BR |
| modal do loader | Setting goals | Definindo metas | js/script.js / offer-data.js |  |
| modal do loader | — | 49% | js/script.js / offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| modal do loader | Analyzing growth area | Analisando área de crescimento | js/script.js / offer-data.js |  |
| modal do loader | 0% | 0% | js/script.js / offer-data.js |  |
| modal do loader | Adjusting content | Ajustando conteúdo | js/script.js / offer-data.js |  |
| modal do loader | Michael | Michael | js/script.js / offer-data.js |  |
| modal do loader | — | 1 críticas | js/script.js / offer-data.js | ajustado de pt-PT para pt-BR |
| modal do loader | USA | EUA | js/script.js / offer-data.js |  |
| modal do loader | Verified | Verificado | js/script.js / offer-data.js |  |
| modal do loader | — | 8 de Junho de 2026 | js/script.js / offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| modal do loader | I’ve always stayed on the phone until... | Sempre fiquei ao telefone até... | js/script.js / offer-data.js |  |
| modal do loader | I’ve always stayed on the phone until we both were tired I learned now to leave her missing me until we talk again | Sempre fiquei ao telefone até nós dois estarmos cansados, mas agora aprendi a deixar ela com saudades até a próxima vez que conversarmos | js/script.js / offer-data.js |  |
| modal do loader | — | Data da experiência: | js/script.js / offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| modal do loader | — | 7 de Junho de 2026 | js/script.js / offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| modal do loader | Petar | Petar | js/script.js / offer-data.js |  |
| modal do loader | in | EM | js/script.js / offer-data.js |  |
| modal do loader | — | 24 de Abril de 2026 | js/script.js / offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| modal do loader | The experience opened my eyes well to... | A experiência realmente me abriu os olhos para... | js/script.js / offer-data.js |  |
| modal do loader | The experience opened my eyes well to where I am wrong and gave me a lot of self-confidence in every sense. I also feel much better mentally and safer. | A experiência realmente me abriu os olhos para onde estou errado e me deu muita autoconfiança em todos os sentidos. Também me sinto muito melhor mentalmente e mais seguro. | js/script.js / offer-data.js |  |
| modal do loader | — | AM | js/script.js / offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| modal do loader | Asab Mahmood | Asab Mahmood | js/script.js / offer-data.js |  |
| modal do loader | — | 16 críticas | js/script.js / offer-data.js | ajustado de pt-PT para pt-BR |
| modal do loader | GB | GB | js/script.js / offer-data.js |  |
| modal do loader | — | 20 de Junho de 2026 | js/script.js / offer-data.js | EN não localizado no dicionário do site; texto pt capturado do site ao vivo |
| modal do loader | Great way to fix what's broken | Ótima maneira de consertar o que está quebrado | js/script.js / offer-data.js |  |
| modal do loader | Made me aware of my mistakes. Im new to this program and to be honest sounds good and today is first day of final text to her and as stated. Easy to follow and the videos are so good with easy instructions to follow | Fez com que eu percebesse meus erros. Sou novo neste programa e, para ser sincero, parece ótimo. Hoje é o primeiro dia da mensagem final para ela, como foi dito. É fácil de acompanhar e os vídeos são excelentes, com instruções simples de seguir. | js/script.js / offer-data.js |  |
| modal do loader | Continue | Continuar | js/script.js / offer-data.js |  |
| modal do loader | To move forward, please specify | Para avançar, especificar | js/script.js / offer-data.js |  |
| modal do loader | Are you inclined to finish what you start? | Você costuma concluir o que começa? | js/script.js / offer-data.js |  |
| modal do loader | NO | Não | js/script.js / offer-data.js |  |
| modal do loader | YES | Sim | js/script.js / offer-data.js |  |
