# Quiz Conquista (Alpha Academy, pt-BR)

Funil de quiz em HTML, CSS e JavaScript puro, até a página de oferta.

- `quiz-pt-br/`: o quiz. Roda sozinho, sem dependências e sem `_src/`. Instruções, estrutura e pendências em [quiz-pt-br/README.md](quiz-pt-br/README.md).
- `_src/`: capturas do quiz de referência, grafo do funil e scripts que geram `quiz-pt-br/js/*-data.js` (`node _src/build.cjs`).

## Rodar

```
git clone https://github.com/GrupoRME/quiz-conquista.git
cd quiz-conquista/quiz-pt-br
node serve.cjs 8080
```

Abra http://127.0.0.1:8080/ (precisa de Node.js).
