# Diagnóstico de Maturidade em IA — Genesis Consulting

App estático de diagnóstico com resultado por faixa de maturidade, recomendações e gargalos.
Copy e estrutura conforme o documento aprovado (`[01] [DE] [GENE] [GENESIS] CONTEÚDO RICO DIAGNOSTICO`).

## Stack

HTML + CSS + JavaScript puro. Sem build, sem dependências. Fonte **Plus Jakarta Sans** (Google Fonts).

## Estrutura

```
index.html        Marcação das 3 telas (intro / questionário / resultado)
styles.css        Identidade visual Genesis (tema escuro)
app.js            Perguntas, faixas, gargalos e lógica de pontuação
assets/
  logo-genesis.svg  Logo oficial
```

## Rodar localmente

```bash
npx serve .
```

Ou qualquer servidor estático apontando para a raiz.

## Deploy na Vercel

O projeto é 100% estático. Na Vercel:

- **Framework Preset:** Other
- **Build Command:** _(vazio)_
- **Output Directory:** `.`

Ou via CLI:

```bash
vercel deploy --prod
```

## Lógica de pontuação

- 11 perguntas, 4 alternativas cada (1 / 4 / 7 / 10 pts).
- Total máximo: 110 pontos. Score = total ÷ 110 × 100.
- Faixas: Experimentação (0–34), Consolidação (35–59), Escala (60–79), Vantagem competitiva (80–100).
- Gargalos: respostas com 7 pts ou menos; exibidos os 3 de menor pontuação.
