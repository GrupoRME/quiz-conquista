# Quiz M Academy — versão pt-BR (HTML + CSS + JavaScript puro)

Reprodução do quiz `https://therealintro.com/` (funil "MissYou_men") em português brasileiro, até a página da oferta (antes do checkout).
Sem React/Vue/Tailwind/jQuery/Bootstrap e sem dependências: HTML5, CSS3 e JavaScript puro.

## Como executar

**Opção 1 — abrir direto:** dê dois cliques em `index.html` (funciona via `file://`; testado).

**Opção 2 — servidor local (recomendado):**

```
node serve.cjs 8080
```

e abra `http://127.0.0.1:8080/`. (Alternativa: `python -m http.server 8080` dentro desta pasta.)

Parâmetros de teste opcionais (o original usa IP/servidor para isso):

| URL | Efeito |
|---|---|
| `?geo=US` | força o ramo EUA/PR/VI/GU/MP/AS (telas que o Brasil não vê) |
| `?mt=quiz_money_question` / `?mt=new_goal_missu_men` | força as variantes de teste de marketing |
| `#/offer` | abre direto a página da oferta (depois de passar pelo quiz, para ter o nome) |
| `#/<id-da-tela>` | abre uma tela específica (ids em `js/funnel-data.js`) |

### Independência do `_src/`

A pasta `quiz-pt-br/` **roda sozinha**: não precisa de nada de `_src/` nem de `npm install`. Só precisa de Node.js (para o `serve.cjs`) ou de qualquer servidor estático.
Verificado numa cópia isolada, sem `_src/`: todas as páginas e os 531 caminhos de `assets/` resolvem, sem erro no console e sem requisição fora do próprio servidor.
A pasta `_src/` só é necessária para **regenerar** `js/funnel-data.js`, `js/screens-data.js` e `js/offer-data.js` (`node _src/build.cjs`, a partir da raiz do repositório).

## Estrutura

```
index.html            página única (#app) — lang="pt-BR"
css/style.css         CSS do original (compilado), na ordem de carga original
css/fonts.css         @font-face das fontes locais (Poppins, Outfit, Inter, Nunito)
css/app.css           loader global + ajustes mínimos
js/funnel-data.js     grafo do funil: telas, próximas telas, condições, variáveis   (gerado)
js/screens-data.js    markup de cada tela, em pt-BR                                (gerado)
js/offer-data.js      página da oferta + popups, em pt-BR                          (gerado)
js/script.js          motor: rotas por hash, condições, validação, loader, raspadinha, oferta
assets/images/        imagens originais (telas e oferta)
assets/offer/ misc/   logo, selos de pagamento, imagens da raspadinha
assets/fonts/         fontes .woff2 (subsets latin e latin-ext)
QUIZ_AUDIT.md         inventário das 116 telas, ramificações, checklist de testes, diferenças
QUIZ_TRANSLATIONS.md  tabela de traduções (EN → pt-BR) e exceções
serve.cjs             servidor estático mínimo (opcional)
```

Os arquivos `js/*-data.js` são gerados por `../_src/build.cjs` a partir de `../_src/funnel.json` e do DOM capturado em `../_src/dom/`
(`node ../_src/build.cjs`; documentação em `QUIZ_AUDIT.md`). Edite textos no build/capturas e regenere; não edite os `*-data.js` à mão.

## Limites conhecidos

Resumo; detalhes em `QUIZ_AUDIT.md`:

- Checkout/pagamento **não** reproduzido (fora do escopo pedido); "Obter meu plano" rola até os planos.
- Telemetria (`event.fx2.io`), pixel, geolocalização por IP, verificação de e-mail já cadastrado: não reproduzidos.
- Páginas legais (`/terms`, `/privacy`, `/subterms`) abrem no site original, que só as publica em inglês.
- Animação Lottie da raspadinha e animações do gráfico de plano: quadro estático / CSS.
