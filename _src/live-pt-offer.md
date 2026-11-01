# Página da oferta (pré-checkout) — texto pt capturado do site ao vivo

URL: `https://quiz.musesacademy.io/offer-generated?...` (outro domínio; exige e-mail registrado na sessão, senão volta para a tela de e-mail).
Fluxo para chegar: email → subscribePage (Sim/Não) → nome → nome dela → preoffer (4 semanas) → scratchPage (raspadinha, canvas; desconto 63%, código `<Nome>_oct26`) → CONTINUAR → offer.
Capturado em 2026-10-28, 1440x900. Checkout NÃO acessado (fora do escopo pedido). Marcações: [PT-PT] português de Portugal no site; [BUG] defeito do site.
Variáveis: nome do usuário (João), imagem `latam-30-39-offer` (variante por faixa etária/locale), objetivo = "Fazer com que ela me queira".

Topo fixo: "63% de desconto reservado para: | 09 : 59 (contagem regressiva) | OBTER MEU PLANO"
Faixa: "🎁 Seu desconto: -63%"
Título: "João, desbloqueie a estratégia para mudar o que ela sente!"
Antes/Após: "Antes | Após | Status: Solteiro | Objetivo: Fazer com que ela me queira | Atração Fraco / Dinâmico Você correndo atrás / Conexão Inconsistente | Atração Forte / Dinâmico Ela investe / Conexão Natural"
"Junte-se aos 500 mil+ homens que permanecem nos pensamentos dela com nosso plano comprovado!"
"Seu plano pessoal Fazer Ela Sentir Sua Falta está pronto!"
Cartão promo: "63% DE DESCONTO | O seu código promocional foi aplicado! [PT-PT] | João_oct26 | 09 min : 45 sec"
Planos (BRL):
- PLANO DE 12 SEMANAS: R$490 → R$230, POUPE 53%, R$5.44 → "R$ 2,56 por dia" [BUG formatação: "R$5.44" e preço/dia quebrado em spans]
- MAIS POPULARES: PLANO DE 4 SEMANAS: R$315 → R$118, POUPE 63%, "R$ 3,93 por dia" (selecionado)
- PLANO DE 24 SEMANAS: R$660 → R$430, POUPE 35%, "R$ 2,39 por dia"
- Botão "OBTER MEU PLANO" | "Pagamento seguro e protegido" (logos payment.webp, visa, master, maestro, discover)
- Legal: "Ao clicar em Obter meu plano, você concorda com a renovação automática da assinatura. R$118.00 cobrado hoje, depois R$315 a cada 30 dias. Além disso, poderá ser cobrado um valor de R$ 1 como pré-autorização, que será reembolsado a si [PT-PT]. Cancele a qualquer momento enviando um e-mail para support@musesacademy.io"
"Destaques do seu plano": SEMANA 1 Redefina Sua Abordagem | SEMANA 2 Construa a atração | SEMANA 3 Psicologia das Mulheres | SEMANA 4 Fazer Ela Sentir Saudade de Você
Benefícios: Plano de atração — passos claros para fazer ela sentir sua falta | Psicologia comprovada — o que faz ela pensar em você | Sessões individuais ao vivo — com especialistas em relacionamentos | Roteiros de mensagens de texto — exatamente o que enviar e quando | Estratégias simples — para continuar na mente dela
Resultados: [BUG "Resultados/p>"] Ela manda mensagem primeiro — O esforço passa a ser mútuo | Interesse claro da parte dela — Chega de mensagens confusas | Atração ainda mais forte — Ela quer te ver de novo | Conexão melhor — As coisas avançam naturalmente
"Antes e depois de começar a usar M Academy": Antes: Pensando demais, Mensagens erradas, Sinais mistos, Correndo atrás dela, Sem progresso | Após: Estratégia clara, Mensagens certas, Confiança calma, Ela entra em contato, Atração forte
FAQ "As pessoas perguntam com frequência": (1) Tenho uma situação de vida única. O plano vai se adequar a mim? — Com certeza! Nosso plano é altamente personalizado e, além disso, você pode pedir conselhos aos nossos melhores especialistas no chat, que responderão em menos de um minuto. (2) Como posso me beneficiar deste plano? — Este plano é para melhorar seus relacionamentos, esteja solteiro ou em um relacionamento sério. Atendemos às suas necessidades e objetivos específicos, oferecendo soluções eficazes e apoio dedicado. (3) E se for difícil para mim manter a motivação? — Não precisa se preocupar! Nosso plano foi desenvolvido para ajudá-lo a construir motivação aos poucos, então você não vai precisar depender dela demais desde o início. Além disso, estamos aqui para oferecer suporte constante e orientação especializada para mantê-lo motivado durante toda a sua jornada. (4) Já experimentei muitos recursos. Por que M Academy é melhor? — Mais de 500.000+ homens nos escolheram, o feedback deles abaixo será a resposta para a pergunta.
Avaliações: "Os utilizadores adoram os nossos planos [PT-PT] | 4.4 Excelente | 4 mil avaliações | Com base nas avaliações de clientes M Academy" + 3 cards (Asab Mahmood GB 16 críticas; Michael EUA; Petar EM) — mesmos textos do loader.
"Escolha o seu plano | Status: Solteiro | Objetivo: Atraia a mulher certa" [BUG objetivo diferente do topo] + planos repetidos + "OBTER MEU PLANO" + legal + pagamento.
"Garantia de reembolso em 30 dias | Acreditamos que nosso plano vai funcionar para você e que você verá resultados notáveis em apenas 4 semanas! Estamos até prontos para devolver o seu dinheiro se este plano não for para você! Saiba mais sobre todas as condições em nosso Termos e Condições."
Rodapé: "© 2026 AppStar Inc, Office 402, 1435 Vine Street, Cincinnati, Ohio, 45202, USA. All rights reserved."

Assets: quiz.musesacademy.io/Logo.svg, /img/offer/payment.webp, /img/icons/pay-brands/{visa,master,maestro,discover}.webp; imagens flow/image|icon/20260506/* (baixadas em quiz-pt-br/assets/images e assets/offer).
CSS da oferta: offer-generated-CyOIRL2X.css + ~100 CSS de blocos (Kegel*, Relatio*, PriceCard, SelectProduct, Timer…) — a baixar.
Console: 18 erros no site original (provável provedor de pagamento) — não replicar.
