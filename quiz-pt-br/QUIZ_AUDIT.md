# QUIZ_AUDIT — inventário do quiz original (M Academy / Muses Academy)

Origem: `https://therealintro.com/` (funil `MissYou_men`, versão 853, tema "For Men"), oferta em `https://quiz.musesacademy.io/offer-generated`.
O funil original é um app Vue; o JSON do funil (`funnel.json`, 116 telas) e o DOM renderizado em pt foram usados como fonte. Nenhum framework foi levado para esta versão.

## 1. Resumo

| Tipo | Telas |
|---|---|
| singleChoice | 53 |
| condition | 16 |
| interstitial | 10 |
| planScreen | 6 |
| emailScreen | 6 |
| preofferScreen | 6 |
| summaryStatementScreen | 4 |
| multiChoice | 3 |
| loader | 2 |
| custom | 2 |
| textInput | 2 |
| brainScreen | 2 |
| popularityScreen | 2 |
| landing | 1 |
| provenScreen | 1 |
| **Total no JSON** | **116** |

Telas fora do JSON (rotas separadas): página da oferta (`/offer-generated`, outro domínio), popup de raspadinha concluída, popup "Ainda está pensando?" da oferta, modal de pergunta do loader. Checkout/pagamento: **fora do escopo pedido**, não reproduzido.

## 2. Fluxo (Brasil = ramo `fallback` de geo, teste de marketing = `default`)

Landing (25) → condição geo (97) → popularidade (96) → status de relacionamento (41) → condição de teste (114) → objetivo (0) → … ramos por status/objetivo … → resumo/plano → loader (99) → e-mail (87/88/90 por objetivo) → assinatura de e-mails (17) → nome (18) → nome dela (21) → pré-oferta (106–108) → raspadinha (19) → **oferta**.
Alcançáveis no ramo Brasil: 93 de 116 telas (verificado por `_src/graph-check.cjs`, 231.621 estados explorados). As demais pertencem ao ramo EUA/PR/VI/GU/MP/AS (`?geo=US`) ou a variantes de teste de marketing (`?mt=quiz_money_question` / `?mt=new_goal_missu_men`); ver seção 4.

## 3. Inventário de telas

Colunas: `#` posição no JSON · tipo · nome interno · título (pt renderizado) · opções (pt) · próxima tela · ramificações.

| # | Tipo | Nome interno | Título (pt) | Opções (pt) | Próxima | Ramificações / variável |
|---|---|---|---|---|---|---|
| 0 | singleChoice | quizWhatYourGoals | Qual é o seu principal objetivo? | Fazer ela ficar obcecada · Fazer ela me escolher · Fazer ela me desejar · Encontrar uma namorada · Fazer ela parar de se afastar | (por opção) | var `goal`: 1=make_her_obsessed→22, 2=make_her_choose_me→1, 3=make_her_want_me→23, 4=make_her_choose_me→1, 5=make_her_obsessed→22 |
| 1 | interstitial | quizWeCanHelpMakeThatHappen | Nós podemos ajudar a tornar isso realidade! |  | 43 |  |
| 2 | multiChoice | quizWhatFeelsHardestWithHerRightNow | O que está sendo mais difícil com ela agora? | Escolha todas as que se aplicam · Medo de compromisso · Pouco interesse · Sinais confusos · Só eu corro atrás · Ela se afasta · Difícil dizer | 3 | var `-`: 1=-→3, 2=-→3, 3=-→3, 4=-→3, 5=-→3, 6=-→3 |
| 3 | interstitial | quizYouAreNotAlone | Você não está sozinho! |  | 6 |  |
| 4 | singleChoice | quizHasYourIntimacyChangedLately | A intimidade entre vocês mudou ultimamente? | Sim · Não · Não sei | 55 | var `-`: 1=-→55, 2=-→55, 3=-→55 |
| 5 | interstitial | quizWeGotYou | Nós cuidamos de você! |  | 2 |  |
| 6 | singleChoice | quizDoYouWishYouUnderstoodWomenBetter | Você gostaria de entender melhor as mulheres? | Sim · Na verdade não | 7 | var `-`: 1=-→7, 2=-→7 |
| 7 | singleChoice | quizWouldYouLikeHeToAdmitThatHeReallyMissesYou | Você gostaria que ela pensasse mais em você? | Sim · Na verdade não | 8 | var `-`: 1=-→8, 2=-→8 |
| 8 | singleChoice | quizDoYouWantHerToReachOutFirst | Você quer que ela tome a iniciativa primeiro? | Sim · Na verdade não | 66 | var `-`: 1=-→66, 2=-→66 |
| 9 | singleChoice | quizDoYouWantToFeelMoreConfidentWithHer | Você quer se sentir mais confiante com ela? | Sim · Na verdade não | 10 | var `-`: 1=-→10, 2=-→10 |
| 10 | interstitial | quizYouReCloserThanYouThink | Você está mais perto do que imagina |  | 93 |  |
| 11 | singleChoice | quizNbspAreYouOpenToLearningNewApproaches | Você está aberto a aprender novas abordagens? | Sim · Na verdade não | 12 | var `-`: 1=-→12, 2=-→12 |
| 12 | singleChoice | quizDidYouKnowSmallChangesCanMakeHerThinkAboutYouMore | Você sabia que pequenas mudanças podem fazer ela pensar mais em você? | Estou curioso · Sim, eu uso | 13 | var `-`: 1=-→13, 2=-→13 |
| 13 | singleChoice | quizDidYouKnowTheWayYouCommunicateCanChangeHerLevelOfInterest | Você sabia que a forma como você se comunica pode mudar o nível de interesse dela? | Estou curioso · Sim, eu uso | 40 | var `-`: 1=-→40, 2=-→40 |
| 14 | multiChoice | quizWhatDoYouMostWantToLearn | O que você mais quer aprender? | Selecione todos os que se aplicam · Como fazer ela sentir minha falta · Como deixar ela mais interessada · Como parar de correr atrás · Como ser mais confiante ·  | 94 | var `-`: 1=-→94, 2=-→94, 3=-→94, 4=-→94, 5=-→94 |
| 15 | singleChoice | quizHowMuchTimeAreYouReadyToSpendToImproveYourLoveLife | Quanto tempo você está disposto a investir para melhorar sua vida amorosa? | 5 min/dia · 10 min/dia · 15 min/dia · 20 min/dia | 111 | var `-`: 1=-→111, 2=-→111, 3=-→111, 4=-→111 |
| 16 | loader | analyzingPage | 500.000+ usuários |  | 68 |  |
| 17 | custom | subscribePage | Pretende receber mensagens de correio eletrónico com |  | 18 |  |
| 18 | textInput | namePage | Qual é o seu nome? |  | 21 | var `name` |
| 19 | custom | scratchPage | Raspe e desbloqueie um desconto surpresa no seu plano! |  | (por opção) |  |
| 20 | singleChoice | quizHaveYouTriedAnythingToGetHerAttention | Você já tentou algo para chamar a atenção dela? | Sim, já tentei algumas coisas · Um pouco, mas não funcionou · Na verdade não | 11 | var `-`: 1=-→11, 2=-→11, 3=-→11 |
| 21 | textInput | crushNamePage | Qual é o nome dela? |  | 91 | var `crush_name` |
| 22 | interstitial | quizWeCanHelpMakeThatHappen | Nós podemos ajudar a tornar isso realidade! |  | 43 |  |
| 23 | interstitial | quizWeCanHelpMakeThatHappen | Nós podemos ajudar a tornar isso realidade! |  | 43 |  |
| 24 | condition |  |  |  | - | variable:goal → make_her_obsessed→27, make_her_choose_me→26, make_her_want_me→28 |
| 25 | landing | quizChooseAge | A maneira | mais inteligente · de deixá-la obcecada · * de acordo com a sua idade · 18-29 | 97 | var `age`: 1=18-29→97, 2=30-39→97, 3=40-49→97, 4=50+→97 |
| 26 | planScreen | quizYourPerfectPlan | Seu Plano Perfeito para |  | 16 |  |
| 27 | planScreen | quizYourPerfectPlan | Seu Plano Perfeito para |  | 16 |  |
| 28 | planScreen | quizYourPerfectPlan | Seu Plano Perfeito para |  | 16 |  |
| 29 | singleChoice | quizIncosistentLevelMen | O comportamento dela é difícil de entender? | Sim · Às vezes · Não | 48 | var `incosistent_level_men`: 1=high→48, 2=medium→48, 3=low→48 |
| 30 | singleChoice | quizWhenDidYouLastFeelLikeThingsBetweenYouTwoWereReallyGood | Quando foi a última vez que sentiu que as coisas entre vocês estavam realmente bem? | Nos primeiros dias · Alguns meses atrás · Cerca de um ano atrás · Já faz muito tempo | 53 | var `-`: 1=-→53, 2=-→53, 3=-→53, 4=-→53 |
| 31 | singleChoice | quizAreYouTheTypeToTakeActionOrWaitAndHope | Você é do tipo que toma atitude ou prefere esperar e torcer? | Eu tomo iniciativa · Tendo a esperar · Um pouco de cada | 32 | var `-`: 1=-→32, 2=-→32, 3=-→32 |
| 32 | interstitial | quizYouReAlreadyOneStepAhead | Você já está um passo à frente |  | 92 |  |
| 33 | summaryStatementScreen | summaryStatementScreen | Resumo do seu perfil |  | 15 |  |
| 34 | emailScreen | emailStorePage | Insira seu e-mail para ver |  | 17 |  |
| 35 | preofferScreen | preofferPage | Após 4 semanas |  | (por opção) |  |
| 36 | preofferScreen | preofferPage | Após 4 semanas |  | (por opção) |  |
| 37 | preofferScreen | preofferPage | Após 4 semanas |  | (por opção) |  |
| 38 | condition |  |  |  | - | variable:goal → make_her_obsessed→36, make_her_choose_me→35, make_her_want_me→37 |
| 39 | provenScreen | provenScreen | A M Academy é baseada em ciência psicológica comprovada |  | 20 |  |
| 40 | singleChoice | quizDidYouHearAboutMAcademyFromARelationshipExpert | Você ficou sabendo da M Academy por um especialista em relacionamentos? | Sim · Não | 80 | var `-`: 1=-→80, 2=-→80 |
| 41 | singleChoice | quizRelationshipStatus | Qual é o seu status de relacionamento atual? | Solteiro · É complicado · Em um relacionamento · Casado | 114 | var `relationship_status`: 1=single→114, 2=complicated→114, 3=in_relationship→114, 4=married→114 |
| 42 | singleChoice | quizHowLongHaveYouBeenSingle | Há quanto tempo você está solteiro? | Menos de 6 meses · 6 meses a 1 ano · 1 a 3 anos · Mais de 3 anos | 78 | var `-`: 1=-→78, 2=-→78, 3=-→78, 4=-→78 |
| 43 | condition |  |  |  | - | variable:relationship_status → single→42, complicated→70, in_relationship→44, married→44 |
| 44 | singleChoice | quizHowLongHaveYouBeenTogether | Há quanto tempo vocês estão juntos? | Menos de 6 meses · 6 meses a 1 ano · 1 a 3 anos · Mais de 3 anos | 51 | var `-`: 1=-→51, 2=-→51, 3=-→51, 4=-→51 |
| 45 | singleChoice | quizWhoUsuallyStartsConversations | Quem geralmente inicia as conversas? | Principalmente eu · Mais ou menos 50/50 · Principalmente ela | 46 | var `-`: 1=-→46, 2=-→46, 3=-→46 |
| 46 | singleChoice | quizDoYourConversationsFadeOut | Suas conversas acabam desaparecendo? | Frequentemente · Às vezes · Raramente | 49 | var `-`: 1=-→49, 2=-→49, 3=-→49 |
| 47 | singleChoice | quizChasingLevelMen | Você sente que está correndo atrás dela? | Sim · Não · Não tenho certeza | 5 | var `chasing_level_men`: 1=high→5, 2=low→5, 3=medium→5 |
| 48 | singleChoice | quizDoYouFeelLikeSheSLosingInterest | Você sente que ela está perdendo o interesse? | Sim · Não · Não tenho certeza | 47 | var `-`: 1=-→47, 2=-→47, 3=-→47 |
| 49 | singleChoice | quizDoesSheTakeInitiativeToSeeYou | Ela toma a iniciativa de te ver? | Frequentemente · Às vezes · Raramente | 50 | var `-`: 1=-→50, 2=-→50, 3=-→50 |
| 50 | singleChoice | quizDoesSheRespondToYouTheWayYouExpect | Ela responde do jeito que você espera? | Sim, na maioria das vezes · Às vezes · Não muito | 29 | var `-`: 1=-→29, 2=-→29, 3=-→29 |
| 51 | singleChoice | quizIncosistentLevelMen | Seu relacionamento mudou com o tempo? | Sim · Não · Não tenho certeza | 52 | var `incosistent_level_men`: 1=high→52, 2=low→52, 3=medium→52 |
| 52 | singleChoice | quizChasingLevelMen | Ela parece mais distante do que antes? | Sim · Não · Não tenho certeza | (por opção) | var `chasing_level_men`: 1=high→30, 2=low→53, 3=medium→30 |
| 53 | singleChoice | quizDoYouFeelLikeSheSLessExcitedAboutYouThanBefore | Você sente que ela está menos empolgada com você do que antes? | Sim · Não · Não tenho certeza | 4 | var `-`: 1=-→4, 2=-→4, 3=-→4 |
| 54 | singleChoice | quizDoYouFeelTrulyAppreciatedByHer | Você se sente realmente valorizado por ela? | Sim · Não · Não tenho certeza | 56 | var `-`: 1=-→56, 2=-→56, 3=-→56 |
| 55 | singleChoice | quizDoYourConversationsFeelCold | Suas conversas parecem frias? | Sim · Às vezes · Não | 54 | var `-`: 1=-→54, 2=-→54, 3=-→54 |
| 56 | singleChoice | quizDoYouFeelLikeSheSGottenTooUsedToYou | Você sente que ela se acostumou demais com você? | Sim · Não · Não tenho certeza | 57 | var `-`: 1=-→57, 2=-→57, 3=-→57 |
| 57 | interstitial | quizWeGotYou | Nós cuidamos de você! |  | 65 |  |
| 58 | interstitial | quizYouAreNotAlone | Você não está sozinho! |  | 59 |  |
| 59 | singleChoice | quizDoYouWishYouUnderstoodWomenBetter | Você gostaria de entender melhor as mulheres? | Sim · Na verdade não | 60 | var `-`: 1=-→60, 2=-→60 |
| 60 | singleChoice | quizWouldYouLikeHeToAdmitThatHeReallyMissesYou | Você gostaria que ela demonstrasse mais interesse por você? | Sim · Na verdade não | 61 | var `-`: 1=-→61, 2=-→61 |
| 61 | singleChoice | quizDoYouWantToFeelCloserToHerAgain | Você quer se sentir mais próximo dela novamente? | Sim · Na verdade não | 63 | var `-`: 1=-→63, 2=-→63 |
| 62 | singleChoice | quizDoYouWantToFeelMoreWantedAgain | Você quer se sentir mais desejado de novo? | Sim · Na verdade não | 10 | var `-`: 1=-→10, 2=-→10 |
| 63 | singleChoice | quizDoYouWantHerToShowMoreEffort | Você quer que ela demonstre mais esforço? | Sim · Na verdade não | 62 | var `-`: 1=-→62, 2=-→62 |
| 64 | brainScreen | brainScreen | Seu plano personalizado é baseado em neurociência e psicologia baseada em evidências |  | 14 |  |
| 65 | multiChoice | quizWhatFeelsHardestWithHerRightNow | O que está mais difícil no seu relacionamento agora? | Escolha todas as que se aplicam · Ela está distante · Menos atenção · Problemas de intimidade · Mais discussões · Menos esforço · Difícil dizer | 58 | var `-`: 1=-→58, 2=-→58, 3=-→58, 4=-→58, 5=-→58, 6=-→58 |
| 66 | singleChoice | quizDoYouWantConversationsWithHerToFeelEasier | Você quer que as conversas com ela sejam mais fáceis? | Sim · Na verdade não | 9 | var `-`: 1=-→9, 2=-→9 |
| 67 | emailScreen | emailStorePage | Digite seu e-mail para ver quando |  | 17 |  |
| 68 | condition |  |  |  | - | variable:goal → make_her_obsessed→67, make_her_choose_me→34, make_her_want_me→69 |
| 69 | emailScreen | emailStorePage | Digite seu e-mail para ver quando |  | 17 |  |
| 70 | singleChoice | quizWhatBestDescribesYourComplicatedStatus | Qual a melhor forma de descrever esse status enrolado? | Ficando · Terminei recentemente · Amizade colorida · Vai e volta · Na friendzone · Triângulo amoroso · Outro | 71 | var `-`: 1=-→71, 2=-→71, 3=-→71, 4=-→71, 5=-→71, 6=-→71, 7=-→71 |
| 71 | singleChoice | quizHowLongHasThisBeenGoingOn | Há quanto tempo isso está acontecendo? | Algumas semanas · Alguns meses · Mais de um ano · Perdi a conta | 72 | var `-`: 1=-→72, 2=-→72, 3=-→72, 4=-→72 |
| 72 | singleChoice | quizAreYouInContactWithHerRightNow | Você está em contato com ela agora? | Sim · Um pouco · Não | 73 | var `-`: 1=-→73, 2=-→73, 3=-→73 |
| 73 | singleChoice | quizDoYourConversationsFadeOut | Suas conversas acabam desaparecendo? | Frequentemente · Às vezes · Raramente | 77 | var `-`: 1=-→77, 2=-→77, 3=-→77 |
| 74 | singleChoice | quizIncosistentLevelMen | O comportamento dela é difícil de entender? | Sim · Às vezes · Não | 75 | var `incosistent_level_men`: 1=high→75, 2=medium→75, 3=low→75 |
| 75 | singleChoice | quizDoYouFeelLikeSheSLosingInterest | Você sente que ela está perdendo o interesse? | Sim · Não · Não tenho certeza | 76 | var `-`: 1=-→76, 2=-→76, 3=-→76 |
| 76 | singleChoice | quizChasingLevelMen | Você sente que está correndo atrás dela? | Sim · Não · Não tenho certeza | 5 | var `chasing_level_men`: 1=high→5, 2=low→5, 3=medium→5 |
| 77 | singleChoice | quizDoesSheTakeInitiativeToSeeYou | Ela toma a iniciativa de te ver? | Frequentemente · Às vezes · Raramente | 79 | var `-`: 1=-→79, 2=-→79, 3=-→79 |
| 78 | singleChoice | quizAreYouInContactWithHerRightNow | Você está em contato com ela agora? | Sim · Um pouco · Não | 45 | var `-`: 1=-→45, 2=-→45, 3=-→45 |
| 79 | singleChoice | quizDoesSheRespondToYouTheWayYouExpect | Ela responde do jeito que você espera? | Sim, na maioria das vezes · Às vezes · Não muito | 74 | var `-`: 1=-→74, 2=-→74, 3=-→74 |
| 80 | singleChoice | quizHaveYouEverInvestedInSelfImprovementProgramsOrCoaching | Você já investiu em programas de autodesenvolvimento ou coaching? | Sim, várias vezes · Sim, uma ou duas vezes · Não, mas estou aberto a isso · Não, e sou cético | 101 | var `-`: 1=-→101, 2=-→101, 3=-→101, 4=-→101 |
| 81 | condition |  |  |  | - | geo → US→110, PR→110, VI→110, GU→110, MP→110, AS→110, fallback→39 |
| 82 | summaryStatementScreen | summaryStatementScreen | Resumo do seu perfil |  | 15 |  |
| 83 | condition |  |  |  | - | variable:readiness_for_changes → perfect→82, moderate→84, low→85 |
| 84 | summaryStatementScreen | summaryStatementScreen | Resumo do seu perfil |  | 15 |  |
| 85 | summaryStatementScreen | summaryStatementScreen | Resumo do seu perfil |  | 15 |  |
| 86 | condition |  |  |  | - | geo → US→83, PR→83, VI→83, GU→83, AS→83, MP→83, fallback→33 |
| 87 | emailScreen | emailStorePage | Insira seu e-mail para ver |  | 17 |  |
| 88 | emailScreen | emailStorePage | Digite seu e-mail para ver quando |  | 17 |  |
| 89 | condition |  |  |  | - | variable:goal → make_her_obsessed→88, make_her_choose_me→87, make_her_want_me→90 |
| 90 | emailScreen | emailStorePage | Digite seu e-mail para ver quando |  | 17 |  |
| 91 | condition |  |  |  | - | geo → US→38, VI→38, PR→38, GU→38, MP→38, AS→38, fallback→109 |
| 92 | singleChoice | quizFocus | Você acha fácil manter o foco? | Sim, consigo me manter focado com facilidade · Na maioria das vezes sim, mas às vezes me distraio · Costumo ter dificuldades · Não, costumo procrastinar | 86 | var `focus`: 1=broad→86, 2=moderate→86, 3=limited→86, 4=limited→86 |
| 93 | singleChoice | quizKnowledge | O quanto você entende as mulheres? | Muito bem · Às vezes é difícil · Não muito | 81 | var `knowledge`: 1=high→81, 2=medium→81, 3=low→81 |
| 94 | singleChoice | quizReadinessForChanges | Quão sério você está em mudar a dinâmica entre vocês dois? | Muito sério · Só explorando · Ainda não tenho certeza | 31 | var `readiness_for_changes`: 1=perfect→31, 2=moderate→31, 3=low→31 |
| 95 | popularityScreen | quizPopularity | 500.000+ usuários |  | 41 |  |
| 96 | popularityScreen | quizPopularity | 500.000+ homens |  | 41 |  |
| 97 | condition |  |  |  | - | geo → US→95, PR→95, VI→95, GU→95, MP→95, AS→95, fallback→96 |
| 98 | condition |  |  |  | - | geo → US→24, PR→24, VI→24, GU→24, AS→24, MP→24, fallback→102 |
| 99 | loader | analyzingPage | 500.000+ homens |  | 89 |  |
| 100 | brainScreen | brainScreen | Seu plano personalizado é baseado em neurociência e psicologia baseada em evidências |  | 14 |  |
| 101 | condition |  |  |  | - | geo → US→64, PR→64, VI→64, GU→64, MP→64, AS→64, fallback→100 |
| 102 | condition |  |  |  | - | variable:goal → make_her_obsessed→104, make_her_choose_me→103, make_her_want_me→105 |
| 103 | planScreen | quizYourPerfectPlan | Seu Plano Perfeito para |  | 99 |  |
| 104 | planScreen | quizYourPerfectPlan | Seu Plano Perfeito para |  | 99 |  |
| 105 | planScreen | quizYourPerfectPlan | Seu Plano Perfeito para |  | 99 |  |
| 106 | preofferScreen | preofferPage | Após 4 semanas |  | 19 |  |
| 107 | preofferScreen | preofferPage | Após 4 semanas |  | 19 |  |
| 108 | preofferScreen | preofferPage | Após 4 semanas |  | 19 |  |
| 109 | condition |  |  |  | - | variable:goal → make_her_obsessed→107, make_her_choose_me→106, make_her_want_me→108 |
| 110 | interstitial | quizBuiltOnPsychologicalResearch | Baseado em pesquisas psicológicas |  | 20 |  |
| 111 | condition |  |  |  | - | marketingTest → quiz_money_question→112, default→98, null→98, fallback→98 |
| 112 | singleChoice | quizWhenItComesToMoneyWhichSoundsMostLikeYou | Quando se trata de dinheiro, o que mais se parece com você? | Eu ganho menos do que gostaria · Eu ganho o suficiente para me virar · Eu ganho bem e vivo confortavelmente · Sou bem-sucedido financeiramente — dinheiro não é  | 98 | var `-`: 1=-→98, 2=-→98, 3=-→98, 4=-→98 |
| 113 | singleChoice | quizWhatShouldYourPlanFocusOnFirst | Em que seu plano deve focar primeiro? | Salve o que temos · Saiba o que dizer para ela · Traga de volta a chama · Saia da zona da amizade · Transforme isso em um relacionamento de verdade · Mostrar pa | (por opção) | var `-`: 1=-→22, 2=-→22, 3=-→23, 4=-→1, 5=-→23, 6=-→22, 7=-→23, 8=-→23 |
| 114 | condition |  |  |  | - | marketingTest → new_goal_missu_men→115, default→0, null→0, fallback→0 |
| 115 | singleChoice | quizWhatYourGoals | Qual é o seu principal objetivo? | Fazer ela ficar obcecada · Fazer ela me escolher · Fazer ela me desejar · Encontrar uma namorada · Fazer ela parar de se afastar · Outro | (por opção) | var `goal`: 1=make_her_obsessed→22, 2=make_her_choose_me→1, 3=make_her_want_me→23, 4=make_her_choose_me→1, 5=make_her_obsessed→22, 6=make_her_obsessed→113 |

## 4. Ramificações e regras

- **Geo** (condições 81, 86, 91, 97, 98, 101): EUA, Porto Rico, Ilhas Virgens Americanas, Guam, Marianas do Norte e Samoa Americana seguem o ramo A (telas 16, 24, 26–28, 34–38, 64, 67–69, 82–85, 95, 110…); qualquer outro país segue `fallback`. No original o país vem do IP (`event.fx2.io/show/geo`). Aqui: padrão = fallback (Brasil); `?geo=US` força o ramo EUA para teste.
- **Teste de marketing** (condições 111, 114): `default`/nulo → fluxo normal; `quiz_money_question` → tela 112; `new_goal_missu_men` → tela 115. Padrão aqui: `default`; `?mt=` força variantes.
- **Variáveis**: `age`, `goal` (`make_her_obsessed` | `make_her_choose_me` | `make_her_want_me`), `relationship_status` (`single` | `complicated` | `in_relationship` | `married`), `readiness_for_changes` (`perfect` | `moderate` | `low`), `name`, `crush_name`, `email`, além das respostas das perguntas intermediárias.
- **Single choice**: ao tocar, marca `selected` e avança em 150 ms para `option.next || screen.next`. **Multi choice**: alterna `selected`; "Continuar" fica desabilitado sem seleção. **Texto**: "Continuar" desabilitado com campo vazio; Enter envia. **E-mail**: botão sempre ativo; e-mail inválido mostra erro (`O e-mail deve ser válido`) e marca o campo `--invalid`.
- **Loader** (telas 16/99): 3 itens em sequência, 1% a cada (duração×1000+300)/100 ms; em 48→49% abre o modal de pergunta (Sim/Não) e pausa; ao concluir cada item aparece o texto final + ícone de check e o carrossel avança; no fim vai para a próxima tela.
- **Raspadinha** (tela 19): canvas 343×343, pincel circular de raio 40; ao soltar após raspar, limpa a camada e abre o popup "Uhu! … 63% DE DESCONTO" → CONTINUAR → oferta.
- **Oferta**: cronômetro de 10:00 (expira → popup "Ainda está pensando?" com +7 min), seleção de plano (12 / 4 / 24 semanas; texto legal atualiza valor e periodicidade), FAQ expansível, botões "Obter meu plano" rolam até a seleção de planos (checkout não reproduzido).

## 5. Checklist de validação (somente itens efetivamente executados estão marcados)

- [x] Todas as 100 telas renderizáveis carregam sem erro de parse nem de rede (teste automatizado via Playwright, desktop).
- [x] Comparação de pixels original × reprodução, 1440×900 e 390×844, para todas as telas estáticas (sem loader/raspadinha): diferenças residuais atribuídas a animações/temporização (imagens com fade, gráficos animados); telas de e-mail e tela 15 corrigidas após a comparação.
- [x] Fluxo completo no navegador, ramo Brasil, 1º objetivo e 1ª opção em cada pergunta: landing → … → loader (3 perguntas) → e-mail → assinatura → nome → nome dela → pré-oferta → raspadinha → oferta; 48 passos, 0 erros de console.
- [x] Grafo: todas as combinações de respostas (231.621 estados) — 93 telas alcançadas no ramo Brasil; 95 no ramo EUA; único fim de fluxo no ramo Brasil é a raspadinha (→ oferta).
- [x] Oferta: altura total de rolagem idêntica ao original (5777 px desktop / 5758 px mobile); diferença de pixels < 0,7% (desktop) e < 3,5% (mobile) por faixa, devida ao cronômetro e à animação do botão.
- [x] Mobile 390×844: loader com modal verificado visualmente.
- [x] Navegador, ramo Brasil: 5 percursos automatizados cobrindo os 3 objetivos (`make_her_obsessed`, `make_her_choose_me`, `make_her_want_me`) e os 4 status (solteiro, complicado, em relacionamento, casado); todos chegam à oferta, 0 erros de console. Somados aos demais testes, 82+ telas distintas visitadas em percurso real.
- [x] Navegador: 2 percursos `?geo=US` e 2 com `?mt=quiz_money_question` / `?mt=new_goal_missu_men` chegam à oferta (no ramo EUA a pré-oferta segue direto para a oferta, sem raspadinha, como no original; bug de navegação encontrado e corrigido nesse teste).
- [x] **Todas as combinações que mudam o funil, no navegador**: 12 (status × objetivo) no Brasil + 36 no ramo EUA (status × objetivo × readiness `perfect`/`moderate`/`low`) + 2 variantes de teste de marketing = 50 percursos até o loader; o caminho de telas percorrido foi comparado tela a tela com o caminho esperado, calculado só a partir do `funnel.json` original: 50/50 idênticos (83 telas distintas cobertas).
- [x] Depois do loader, por objetivo: Brasil (loader → e-mail → assinatura → nome → nome dela → pré-oferta → raspadinha → oferta) e EUA (… → pré-oferta → oferta) para os 3 objetivos: 6/6 idênticos ao esperado.
- [x] **Oferta personalizada**: o original troca textos e foto conforme objetivo, status e idade (descoberto na verificação). Reproduzido com 12 variantes (3 objetivos × 4 status) capturadas do original + foto por faixa etária (18-29, 30-39, 40-49, 50+). Sem respostas, usa a versão padrão do original. Texto "Complicado" do status aparece como "Enrolado", alinhado à opção renomeada.
- [x] Estados normal/hover/ativo do cartão de resposta: estilos computados idênticos ao original. [ ] Hover/foco de botões, campos e demais componentes não comparados um a um (CSS é o original).
- [x] Raspadinha com eventos `touch` sintéticos em emulação mobile (390×844, touch): apaga a camada e abre o popup. [ ] Não testado em aparelho real.
- [x] Botão voltar do navegador e seta do cabeçalho testados em um ponto do fluxo (interstitial → pergunta). [ ] Não testado em todos os pontos.
- [x] Oferta: seleção de plano (aria-checked, classes e texto legal R$/dias por plano), FAQ (mesmas classes do original), cronômetro, popup "Ainda está pensando?" ao zerar (+7 min), botão do topo rola até os planos, código promocional `Nome_oct26`.
- [x] Varredura de inglês residual em todo o texto visível, `alt`, `aria-label` e `placeholder`: nenhum texto em inglês restante (exceto exceções documentadas).
- [ ] Não verificado: se o popup "Ainda está pensando?" reaparece no original após os 7 minutos extras (aqui não reaparece).
- [ ] Integrações (eventos `event.fx2.io`, pixel, verificação de e-mail existente, checkout/Solidgate/PayPal/Google Pay): **não reproduzidas** nem testadas.

## 6. Diferenças conhecidas em relação ao original

- Reescrito em HTML/CSS/JS puro, sem Vue/Pinia/Tailwind em runtime. O CSS é o CSS compilado do original (inclui classes utilitárias de origem Tailwind; é CSS puro, sem build nem dependência).
- Raspadinha: a animação de dica (mão + rastro) foi reimplementada em JavaScript puro a partir dos dados do Lottie original (`/lottie/scratch-pre-offer.json`: 7 posições, curva cubic-bezier(.5,.35,.15,1), laço de ~2 s), sem biblioteca Lottie. As animações do gráfico de plano continuam em CSS do original.
- Carrossel de depoimentos do loader: rolagem horizontal nativa com scroll-snap (swipe no celular, arraste do mouse e scroll lateral no desktop), cartão central com o vizinho aparecendo na lateral, bolinhas indicadoras e avanço automático a cada etapa de carregamento concluída. É melhor que o original, que não permitia rolar para o lado.
- Geolocalização, teste de marketing, verificação de e-mail já cadastrado e telemetria: ausentes (ver seção 4).
- Páginas legais (`/terms`, `/privacy`, `/subterms`) abrem no site original, que as publica **somente em inglês**; tradução jurídica não foi feita.
- Textos do site original em português de Portugal foram convertidos para pt-BR (ver `QUIZ_TRANSLATIONS.md`, coluna Observações). Defeitos do original corrigidos: nome dela não substituído ("any man"), `Resultados/p>`, objetivo divergente na oferta (mantido o do bloco superior no restante), preço por dia.
- **Resumo do perfil (telas 33, 82, 84, 85)**: no original o nível de confiança é fixo no funil (`level`) e o marcador do termômetro anima até uma posição derivada dele; esta versão substitui isso por uma pontuação calculada das respostas (ver seção 7). A landing em `?geo=US` ainda usa o texto legal padrão (no original há texto próprio por país).
- Botão da oferta "OBTER MEU PLANO": rola até os planos em vez de abrir o checkout.


## 7. Resumo do perfil — regra de cálculo (personalização pedida)

**Fonte única:** pontuação de confiança de 0 a 100, calculada em `js/script.js` (`QuizProfile.compute`). Selo, cor, posição do marcador, mensagem de alerta e cartões derivam dela ou das mesmas respostas; resposta ausente vale 55 (neutro).
| Resposta | Alta = 100 | Média = 55 | Baixa = 15 |
|---|---|---|---|
| `knowledge` ("O quanto você entende as mulheres?") | Muito bem | Às vezes é difícil | Não muito |
| `readiness_for_changes` ("O quanto você está decidido…?") | Totalmente decidido | Só estou explorando | Ainda não tenho certeza |
| `chasing_level_men` (correndo atrás dela) | pouco | médio | muito |
| `incosistent_level_men` (comportamento dela difícil de entender) | pouco | médio | muito |
| `focus` (facilidade de manter o foco) | amplo | moderado | limitado |

| Métrica | Pesos |
|---|---|
| **Nível de confiança** | knowledge 25% · readiness 25% · chasing 20% · incosistent 15% · focus 15% |
| Motivação | readiness 60% · focus 40% |
| Potencial | knowledge 50% · chasing 30% · incosistent 20% |
| Paciência | focus 60% · readiness 40% |
| Estratégia | knowledge 60% · incosistent 40% |

**Faixas** (selo, marcador e mensagem): 0–33 = Baixo · 34–66 = Médio · 67–100 = Alto. Marcador em `10 + 334 × pontuação/100` (limitado às bordas). Cartões: Alto/Moderado/Baixo (Paciência: Amplo/Moderado/Limitado; Estratégia: Alto/Médio/Baixo) pelas mesmas faixas. A pontuação é guardada em `confidence_score` e `confidence_level`.
**Atenção:** esta regra foi definida a pedido (o funil original não tem pontuação). Os textos de alerta dos níveis Baixo e Médio são novos; o de Alto é o texto original.

