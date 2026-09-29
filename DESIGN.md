---
version: alpha
name: CVF Website
description: Design language for the CVF (Centro Veterinário de Febres) website, based on the brand manual.
colors:
  turquesa: "#00a1b4"
  turquesa-claro: "#99d9e1"
  teal: "#004649"
  teal-escuro: "#03211f"
  teal-card: "#0a2f30"
  teal-card-2: "#124142"
  texto: "#d9f2f4"
  cinza: "#a7cdd0"
  fundo: "#062a2b"
  complementar: "#edc8a3"
  branco: "#ffffff"
typography:
  sans:
    fontFamily: Satoshi
  serif:
    fontFamily: Merriweather
rounded:
  base: 18px
---

## Overview

Site institucional do Centro Veterinário de Febres (CVF). Identidade escura baseada na paleta teal/turquesa oficial da marca (Pantone Bluebird 16-4834 TPG), com o complementar Pantone 719 C como acento de energia e proximidade. Comunica confiança, cuidado e bem-estar animal.

## Colors

- Turquesa Bluebird (`#00a1b4`) é a cor primária de marca — usada em botões primários, ícones e acentos.
- Teal escuro (`#004649`, `#062a2b`, `#03211f`) define as superfícies de fundo e elevação.
- Complementar Pantone 719 C (`#edc8a3`) é o acento quente reservado para CTAs secundários e destaques.
- Texto claro (`#d9f2f4`) e cinza (`#a7cdd0`) sobre fundos escuros para legibilidade.
- Usar um único acento (turquesa ou complementar) por vista.

## Typography

- `Satoshi` é a fonte principal (títulos Black 900 e texto Regular 400).
- `Merriweather` é a alternativa serifada para títulos de destaque e momentos mais formais.
- Manter `letter-spacing` mínimo e equilibrado.

## Layout

- Contentor central de 1200px com padding lateral de 24px.
- Grids responsivos: serviços 3 colunas, equipa/why 4 colunas; colapsam para 2 e depois 1 coluna em ecrãs menores (<900px, <600px).
- Header fixo com `scroll-padding-top` de 88px para compensar âncoras.

## Elevation & Depth

- Raios de 18px (`--radius`) para cartões e superfícies.
- Sombras suaves (`--shadow`, `--shadow-soft`) para elevação.
- Embeds (calendário, formulário, mapa) com molduras próprias para integrar conteúdo branco no tema escuro.

## Components

- **Botões**: pill (raio 50px); primário turquesa, acento complementar, outline turquesa.
- **Cartões de serviço**: superfície `--teal-card-2`, borda superior turquesa de 4px.
- **Formulários**: usar Google Forms embed com moldura.
- **Links externos**: indicador `↗` e `rel="noopener"`.

## Do's and Don'ts

- Respeitar a paleta oficial da marca (não introduzir novas cores fora dela).
- Usar SVGs da marca em vez de emojis para ícones.
- Manter contraste WCAG dos pares texto/fundo.
- Respeitar `prefers-reduced-motion`.
- Não usar `will-change` fora de animação ativa.
- Não usar `blur()` grande contínuo em superfícies extensas.
