# CVF — Centro Veterinário de Febres (Website)

Website moderno, responsivo e de **página única** para o
**Centro Veterinário de Febres (CVF)**, desenvolvido segundo o
**Manual da Marca CVF**.

## 🎨 Identidade da marca aplicada

| Elemento | Valor |
|----------|-------|
| Cor primária (turquesa) | `#00a1b4` |
| Cor escura (teal) | `#004649` |
| Texto | `#1a1c1c` |
| Cinza | `#626666` |
| Fundo claro | `#f8ffff` |
| Turquesa claro | `#99d9e1` |
| Complementar (bege quente, Pantone 719 C) | `#edc8a3` |
| Fonte principal | Satoshi (fallback: system sans-serif) |
| Fonte alternativa | Merriweather (serif) |

## ⚡ Design: página única com efeito de mudança de página

O site está organizado como **uma única página** com **scroll-snap**,
simulando a sensação de navegar entre páginas:

- **Scroll-snap (CSS)** — cada secção "encaixa" no ecrã como uma página.
- **Menu de âncoras** — navegação suave entre secções (Início, Sobre, Serviços, Equipa, Contactos).
- **Dots laterais** — indicadores de página no lado direito.
- **Barra de progresso** — mostra o progresso do scroll no topo.
- **Menu ativo dinâmico** — a secção atual é destacada na navegação.
- **Animações reveal** — conteúdo surge ao entrar em cada secção.

## 🗂️ Estrutura

```
CVF_Website/
├── index.html        # Página única (todas as secções)
├── css/style.css     # Estilos globais (marca + scroll-snap)
├── js/main.js        # Menu, scroll, animações, formulário
├── assets/
│   ├── cvf-logo.svg  # Logótipo CVF (vectorizado)
│   └── favicon.svg   # Ícone do site
└── README.md
```

## 📅 Agendamento

O botão de agendamento direto aponta para o calendário de marcações:
`https://calendar.app.google/Uaw77m7sHrMKP4NZ9`

## 📞 Contactos

- **Morada:** Rua Conselheiro Costa Soares 11-H, Febres
- **Telefone:** 932 290 927
- **Email:** cvfebres@gmail.com
- **Horário:** Seg–Sex: 10:00–13:00 · 14:30–19:00 | Sáb: 10:00–13:00

## 👥 Equipa

- Dr. Pedro Silva — Diretor Clínico · Ortopedia
- Hugo Silva — Gerente / Assistente
- Dra. Celina Relva — Médica Veterinária
- Rita Reis — Enfermeira Veterinária

> As fotos da equipa são placeholders (iniciais). Para adicionar fotos,
> coloque as imagens em `assets/team/` e descomente a linha `<img>` no
> respetivo cartão em `index.html`.

## 🚨 Urgências

Secção de urgências junto ao telefone nos contactos, com destaque para
atendimento prioritário dentro do horário de funcionamento.

## 🌐 Redes sociais

- **Instagram:** https://www.instagram.com/cvfebres
- **Facebook:** https://www.facebook.com/cvfebres

Presentes na topbar e no rodapé.

## 🚀 Como usar

Abra `index.html` no browser ou aloje a pasta num servidor web
(nginx, Apache, cPanel, Netlify, GitHub Pages, etc.).

## 🌍 Deploy

### GitHub Pages
O repositório https://github.com/cvfebres-netizen/cvfebres contém o site na raiz.
Ative o GitHub Pages na branch `main` (pasta raiz). O ficheiro `.nojekyll`
garante que o Jekyll não processa o site.

### cPanel / FTP
Pode enviar o conteúdo da pasta `CVF_Website/` para a raiz do domínio
(`public_html`). O ficheiro `.htaccess` fornece compressão, cache e página 404
personalizada. Opcionalmente, gere um ZIP com `CVF_Website_deploy.zip` e use o
Gestor de Ficheiros do cPanel para extrair.

> Nota: o formulário de contacto é demonstrativo — a ligação ao
> backend/envio de email está por configurar.
