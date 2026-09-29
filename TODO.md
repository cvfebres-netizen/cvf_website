# TODO — Correções Website CVF (Auditoria Manual da Marca + UI Skills)

> **Nota (obrigatória):** Antes de qualquer melhoria no site, consultar sempre:
> - **Skills locais:** `c:/CVF_Ponto/skills/` (computer_use, baseline-ui, improve-ui, fixing-accessibility, fixing-metadata, fixing-motion-performance, create-design-md)
> - **Design Skills (awesome-design-skills):** `c:/CVF_Ponto/skills/awesome-design-skills/` — 67 estilos de design. Para a CVF aplicar sobretudo: `clean`, `friendly`, `professional`, `refined`, `modern`, `sleek` (ver secção "Design Skills" mais abaixo).
> - **Manual da Marca:** `C:/Users/cv_fe/Desktop/Manual da marca_CVF_RS.pdf`

---

## ✅ Progresso já concluído
- [x] 1. Cor complementar correta do manual: `#ff9d6e` → `#edc8a3` (Pantone 719 C) + hover
- [x] 2. Corrigir `og:image` / `twitter:image` roto (apontar para `assets/cvf-logo.svg` + dimensões + alt)
- [x] 3. Aplicar `--font-serif` (Merriweather) a elementos de destaque (ex.: `.about-card h3`)
- [x] 4. Substituir `h2` duplicado na secção Contactos por `h3`
- [x] 5. Melhorar `aria-label` dos dots laterais (rótulos legíveis em PT)
- [x] 6. Substituir emojis por SVGs consistentes (redes sociais com `aria-hidden` + labels "abre em nova janela")
- [x] 7. Acessibilidade menu mobile: bloquear scroll do fundo + tecla Escape
- [x] 8. Optimizar barra de progresso com `transform: scaleX()`
- [x] 9. Unificar raios dos iframes inline com `--radius` (removidos estilos inline redundantes)
- [x] 10. Visualização mobile ajustada (iframes com `clamp()` responsivo; grids colapsam para 1 coluna)
- [x] 11. Fundo do espaço de agendamento corrigido (`.booking-info` com superfície própria; `.booking-wrap` com `--teal`)
- [x] 12. Formulário de contacto organizado (`.contact-form-embed` com moldura; cabeçalho sem inline)
- [x] 13. Links externos adaptados (`↗`, `btn-external`, `rel="noopener"` consistente)

### Iconografia oficial da marca (Manual da Marca)
- [x] 14. Substituir emojis dos cartões de serviço por ícones SVG da marca (12 serviços com SVGs inline `aria-hidden="true"`)
- [x] 15. Substituir emojis das secções "why", valores e contactos por SVGs da marca (`.why-icon`, `.value-icon`, `.ci-icon`, `.icon`)
- [x] 16. Criar pasta `assets/icons/` com SVGs normalizados (viewBox consistente, `fill="currentColor"`)

---

## 🎯 Sugestões de implementação (baseadas nas Skills + Manual da Marca CVF)

> **Iconografia (itens 14–16) já concluída** — emojis substituídos por SVGs da marca em serviços, why, valores e contactos; pasta `assets/icons/` criada com SVGs normalizados.

### Tipografia da marca (Manual da Marca)
- [x] **17. Aplicar `--font-serif` (Merriweather) de forma consistente** — títulos de destaque em secções (`.section-head h2`, `.split-content h2`, `.about-card h3`, `.service-card h3`, `.why-card h3`, `.team-card h3`, `.value-item h4`, `.booking-info h3`, `.contact-form h3`, `.cta-band h2`) usam a serifada; equilibra Satoshi (título black) vs Merriweather (alternativa) conforme manual.
- [ ] **18. Rever `letter-spacing` e pesos** — o manual usa Satoshi Black nos títulos; garantir pesos 400/500/700/900 corretos e evitar `tracking-*` excessivo (skill baseline-ui: nunca modificar `letter-spacing` sem pedido explícito).

### Cores da marca (Manual da Marca)
- [ ] **19. Rever paleta de texto/cinza** — o manual define `#626666` (cinza) e `#1a1c1c` (quase preto) para texto; verificar se os `--cinza`/`--texto` atuais têm contraste WCAG suficiente (skill fixing-accessibility: contraste).
- [ ] **20. Usar `#99d9e1` / `#f8ffff` como tons claros** conforme manual, em vez de brancos puros, para suavizar superfícies.
- [ ] **21. Validar acessibilidade de cor** — verificar contraste de todos os pares texto/fundo (ex.: `--cinza` sobre `--teal-card`) ≥ 4.5:1.

### Estrutura / Design System (skill create-design-md + improve-ui)
- [x] **22. Criar `DESIGN.md` para o website CVF** — documentar tokens (cores, tipografia, raios, espaçamento) extraídos do CSS e do Manual da Marca, para dar contexto persistente a futuros agentes de código (skill create-design-md).
- [ ] **23. Limpar CSS morto** — remover `.form-group`, `.ortho-*`, `.blob`, `.page-hero`, `.values-grid` que não são usados no `index.html` (skill improve-ui: preferir nenhum achado a um sem suporte).

### Acessibilidade (skill fixing-accessibility)
- [ ] **24. Adicionar `aria-describedby`/`aria-invalid` aos campos do formulário** — associar erros/helper text aos inputs (o formulário atual é um iframe do Google Forms, validar o que é possível).
- [ ] **25. Garantir focos visíveis em todos os elementos interativos** (botões, links externos, social-links) — já existe `:focus-visible` global; rever links com indicador `↗`.
- [ ] **26. Adicionar `aria-expanded`/`aria-controls` ao hamburger** — já tem `aria-expanded`; confirmar `aria-controls` apontando para `#nav-links`.

### SEO / Metadata (skill fixing-metadata)
- [ ] **27. Adicionar `manifest.webmanifest`** — ícones de app + `theme-color` `#062a2b` para instalação PWA em mobile (skill fixing-metadata: manifest + theme-color).
- [ ] **28. Adicionar `apple-touch-icon`** com PNG (não apenas SVG) para compatibilidade iOS.
- [ ] **29. Verificar JSON-LD** — o `VeterinaryCare` já existe; confirmar que `og:url` == `canonical` == `https://cvfebres.pt/` (já coincidem).

### Performance / Motion (skill fixing-motion-performance)
- [x] **30. Remover `will-change` permanente da barra de progresso** — `will-change` deve ser temporário e cirúrgico (skill: nunca aplicar `will-change` fora de animação ativa); o `.scroll-progress` já não usa `will-change: transform` fixo.
- [ ] **31. Rever `blur()` grande** — `.blob` e `ortho-hero` usam `filter: blur(60px-80px)` (skill: nunca animar blur em superfícies grandes); como `.blob` não é usado no index, remover ao limpar CSS morto.
- [ ] **32. Respeitar `prefers-reduced-motion`** — já existe bloco; confirmar que transições de `.reveal`, `.scroll-progress` e hover não animam propriedades de layout/paint desnecessariamente.

---

## 🎨 Design Skills — awesome-design-skills (github.com/bergside/awesome-design-skills)

> Repositório clonado em `c:/CVF_Ponto/skills/awesome-design-skills/`. Reúne 67 estilos de design (SKILL.md para agentes + DESIGN.md para humanos). Para a identidade da CVF (clínica veterinária, paleta turquesa/teal, Satoshi + Merriweather, tom acolhedor e profissional), as skills mais relevantes são:
> - **clean** — simplicidade, espaçamento generoso, tipografia legível, paleta limitada
> - **friendly** — elementos arredondados, acessível e acolhedor (adequado a uma clínica veterinária)
> - **professional** — layout estruturado e identidade de confiança
> - **refined** — serifas elegantes (reforça o uso de Merriweather) e paleta sofisticada
> - **modern** — estilo editorial minimalista
> - **sleek** — regra 60-30-10, interações subtis, token semântico

### Melhorias extraídas das Design Skills (a reter)
- [ ] **33. Tokens semânticos em vez de valores crus** — garantir que todo o CSS usa variáveis (`--turquesa`, `--cinza`, etc.), nunca valores hex dispersos (skills clean/friendly/professional/refined/modern/sleek: "prefer semantic tokens").
- [ ] **34. Hierarquia visual clara** — manter um único estilo de destaque (accent) por secção; não misturar múltiplos destaques que competem (skills sleek: regra 60-30-10; baseline-ui: limitar accent a um por vista).
- [ ] **35. Ritmo de espaçamento consistente** — adotar uma grelha base (ex.: 8pt) para `padding`/`margin`; padronizar espaçamentos dos cartões (skills clean/sleek: "consistent spacing rhythm").
- [ ] **36. Estados de interação explícitos** — garantir estados `hover`, `focus-visible`, `active`, `disabled` e `loading` em todos os botões/links (skills clean/friendly/professional: "keep interaction states explicit").
- [ ] **37. Touch targets ≥ 44px** — garantir que botões e links em mobile têm área de toque mínima de 44×44px (skills clean/friendly: WCAG 2.2 AA, touch targets).
- [ ] **38. Sem rótulos ambíguos** — rever botões/links para texto claro e acionável (ex.: evitar "Clique aqui", "Saiba mais" sem contexto) (skills clean/friendly/professional: "avoid ambiguous labels").
- [ ] **39. Estados de vazio/carregamento/erro** — definir um estado de carregamento para os iframes (calendário/formulário) e um tratamento se o iframe falhar (skills clean: "design for empty/loading/error states").
- [ ] **40. Motion sem propósito decorativo** — remover animações puramente decorativas; manter apenas as que comunicam (skills clean: "avoid decorative motion without purpose"; fixing-motion-performance).
- [ ] **41. Reforçar tipografia serifada (refined/modern)** — usar Merriweather de forma consistente nos títulos de destaque para reforçar o tom "refined" (cruza com item 17).

---

## 🔜 Próximos passos imediatos sugeridos
1. ✅ `DESIGN.md` criado (item 22) — documenta a linguagem visual do site.
2. ✅ `assets/icons/` criado e emojis substituídos por SVGs da marca (itens 14-16).
3. ✅ `awesome-design-skills` clonado em `c:/CVF_Ponto/skills/awesome-design-skills/` e integrado no fluxo (consultar sempre antes de melhorias de UI).
4. Limpar CSS morto (item 23) e remover `will-change` fixo (item 30).
5. Rever tipografia/cores para contraste WCAG (itens 17-21).
6. Aplicar melhorias das Design Skills (itens 33-41): tokens semânticos, hierarquia, espaçamento, estados, touch targets, rótulos, estados de erro, motion, tipografia serifada.
7. Adicionar `manifest.webmanifest` e `apple-touch-icon` PNG (itens 27-28).

## ✅ Validação final
- [ ] Testar e validar (desktop/mobile, light/dark n/a, contraste, acessibilidade).
