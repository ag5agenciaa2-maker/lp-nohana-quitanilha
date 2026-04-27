# SITE DNA — Nohana Quintanilha Advocacia

**Nicho:** Direito Imobiliário, Usucapião e Regularização de Imóveis  
**Posicionamento:** Escritório premium com autoridade institucional (Presidente OAB Campo Grande/RJ)  
**Data de criação:** 2026-03-20  

---

## IDENTIDADE VISUAL

### Paleta de Cores

| Hex | Função | Variável CSS | Descrição |
|---|---|---|---|
| `#800000` | **Primária** | `--primary-bordo` | Bordô institucional — cor âncora de toda a identidade |
| `#660000` | Primária escura | `--primary-bordo-dark` | Hover e estados ativos de botões primários |
| `#A52A2A` | Primária clara | `--primary-bordo-light` | Variação clara para destaques suaves |
| `#8F680A` | **Acento principal** | `--accent-gold` | Dourado acessibilidade — tags, barras, scrollbar, ícones |
| `#B8860B` | Acento claro | `--accent-gold-light` | Dourado em backgrounds claros e titles no footer |
| `#715208` | Acento escuro | `--accent-gold-dark` | Scrollbar hover |
| `#E6D5C3` | Acento CTA Hero | (inline) | Bege areia — botão principal da Hero Premium |
| `#EBE5D9` | Fundo de card | (inline `.sp-desc`) | Bege card de serviço — fundo descritivo das tabs |
| `#F8F7F5` | **Fundo principal alternado** | `--off-white` | Seções alternadas (Testimonials, Galeria, Localização) |
| `#F5F3F0` | Fundo creme | `--cream` | Variação sutil para superfícies |
| `#FFFFFF` | Fundo limpo | `--white` | Seções neutras (Pain, FAQ, Serviços) |
| `#E8E6E3` | Neutro claro | `--light-gray` | Bordas, divisórias (FAQ, team-info) |
| `#6B6967` | Neutro médio | `--medium-gray` | Textos secundários, labels |
| `#4A4846` | Neutro escuro | `--dark-gray` | Textos descritivos principais |
| `#2D2B29` | **Fundo escuro** | `--charcoal` | Seção CTA/Contato — background denso |
| `#1A1918` | **Fundo footer** | `--black` | Footer e textos headings |
| `rgb(187, 175, 55)` | Separador Marquee | (inline) | Losango dourado-amarelado no marquee |

### Tipografia

| Elemento | Família | Peso | Tamanho | Observações |
|---|---|---|---|---|
| **h1 (Hero Premium)** | `Inter` (sans) | 500 | `clamp(40px, 5vw, 64px)` | Sem serif no hero; letter-spacing: -0.02em |
| **h2 (Section Titles)** | `Playfair Display` (serif) | 600 | `clamp(2.5rem, 2rem + 2.5vw, 4rem)` | Títulos de seção com destaque serif |
| **h2 (Pain Transition)** | `Inter` (sans) | 500 | `clamp(32px, 3.5vw, 44px)` | Quebra do padrão serif — usado na seção Dor |
| **h3** | `Playfair Display` | 600 | `clamp(2rem, 1.6rem + 2vw, 3rem)` | Subtítulos |
| **h4** | `Playfair Display` | 600 | `clamp(1.5rem, 1.3rem + 1vw, 2rem)` | Cards e info |
| **body** | `Inter` | 400 | `clamp(1rem, 0.9rem + 0.5vw, 1.125rem)` | Corpo de texto padrão |
| **nav links** | `Inter` | 500 | `clamp(0.875rem, 0.8rem + 0.35vw, 1rem)` | Links da navbar |
| **section-tag** | `Inter` | 600 | `clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)` | Tags de seção — UPPERCASE, letter-spacing: 0.15em |
| **testimonial-text** | `Playfair Display` | 400 | `1.1rem` | Itálico, serif, line-height: 1.7 |
| **marquee-item** | `Playfair Display` | 600 | `clamp(0.875rem, ...)` | Marquee — letter-spacing: 0.15em |
| **sp-tab-link** | (herda sans) | 400/500 | `28px` (desktop) / `22px` (mobile) | Tabs de serviço — cor muted $a0a0a0 |
| **premium-tag** | `Inter` | 500 | `13px` | Hero tag "// Nossa Missão" — UPPERCASE |

### Estilo Geral

> **Editorial Neo-Grotesco Minimalista** com toques humanistas — tipografia Inter/Playfair alternada, paleta bordô-dourado dessaturada, espaçamento generoso e assimétrico, zero border-radius em botões primários (angular puro), uso de linhas verticais douradas como conectores visuais entre seções.

---

## LAYOUT — SEÇÃO POR SEÇÃO

### 1. Navbar

- **Estrutura:** `flexbox`, 1 linha: Logo | Links | CTA
- **Fundo:** Transparente (sobre a Hero), muda para `rgba(255,255,255,0.95)` + `backdrop-filter: blur(20px)` ao rolar > 100px
- **Elementos:**
  - Logo `<picture>` com versão mobile/desktop (`.webp`) + texto "NOHANA QUINTANILHA" + subtítulo "Sociedade Individual de Advocacia"
  - Links: Início, Sobre, Serviços, Avaliações, FAQ, Contato
  - CTA bordô "Fale Conosco" com ícone WhatsApp SVG
  - Hamburger menu (3 linhas → X) no mobile com menu lateral deslizante (right: -100% → 0)
- **Animação:** 
  - Navbar: `transform 0.4s ease + background 0.4s ease` no scroll
  - Hide navbar: `translateY(-100%)` ao rolar para baixo (>200px), reaparece ao rolar para cima
  - Links: pseudo-elemento `::after` — barra dourada `width: 0 → 100%` no hover, `300ms ease`, centrada com `translateX(-50%)`
- **Micro-interações:**
  - Links: cor `var(--white)` → `var(--accent-gold-light)` no hover (sobre Hero); `var(--charcoal)` → `var(--primary-bordo)` (scrolled)
  - CTA: `translateY(-2px)` + `box-shadow: 0 10px 40px rgba(128,0,0,0.2)` no hover
  - Hamburger: `span:nth-child(1)` rotate(45deg), `nth-child(2)` opacity:0, `nth-child(3)` rotate(-45deg)
- **Elemento diferenciador:** Navbar oculta/reaparece com scroll direcional inteligente (hide on down, show on up) — não permanece estática

---

### 2. Hero Section (Premium Layout)

- **Estrutura:** `flexbox`, `justify-content: space-between`, `align-items: flex-end`, duas colunas: Left (título) | Right (descrição + CTA)
- **Fundo:** Imagem fullscreen da equipe (`.jpeg`, 1920×1080 desktop / 1080×1920 mobile via `<picture>`) + overlay gradiente `linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.2) 100%)`
- **Elementos:**
  - Tag: `// Nossa Missão` — 13px, caixa alta, branco 70% opacidade
  - Título h1: "Representação / jurídica especializada / em que você pode / confiar." — tipografia `Inter`, 500 weight, branco puro, com `<br>` para quebras manuais
  - Descrição: texto branco 90% opacidade, 16px, line-height 1.6
  - Botão CTA: `#E6D5C3` (bege areia) com texto preto + ícone WhatsApp SVG + "Agende uma orientação"
- **Animação:**
  - **Typewriter:** Título é digitado caractere por caractere a 45ms, com cursor piscante (`|`, `blinkCursor 0.8s infinite`); cada linha adiciona `<br>` com pausa de 145ms entre linhas
  - Cursor para após animação finalizar (removido do DOM)
- **Micro-interações:**
  - CTA hover: `background → #ffffff`, `translateY(-2px)`, `transition: all 0.3s ease`
- **Elemento diferenciador:** Layout split-hero assimétrico (não centralizado), título com efeito typewriter em tempo real, CTA bege areia em vez de bordo/dourado, coluna direita deslocada -100px para baixo (`margin-bottom: -100px`)

---

### 3. Marquee Section

- **Estrutura:** `flexbox`, overflow hidden, pista horizontal infinita
- **Fundo:** `#FFFFFF` com `box-shadow: 0 0 3px 3px rgba(187,7,7,0.15)`; opacidade 0.95
- **Elementos:** Texto repetido: `NOHANA QUINTANILHA ◆ ADVOCACIA ◆ DIREITO IMOBILIÁRIO ◆ USUCAPIÃO ◆ REGULARIZAÇÃO ◆ CAMPO GRANDE - RJ` (duplicado 2x)
- **Animação:** `marquee 30s linear infinite` — `translateX(0) → translateX(-50%)`
- **Micro-interações:** Nenhuma (puro autônomo)
- **Elemento diferenciador:** Losango separador `◆` em `rgb(187, 175, 55)` amarelo-dourado — tom distinct do dourado principal; sombra bordô sutil como halo

---

### 4. Dor e Solução (Pain Transition)

- **Estrutura:** `grid`, `1.1fr 0.9fr`, gap `3rem`
- **Fundo:** `var(--white)` (#FFFFFF)
- **Elementos:**
  - Título h2 (Inter, não serif): "Seu patrimônio é o resultado de uma vida. *A regularização não deve tirar sua paz.*" — highlight bordô no span
  - Imagem mobile (visible apenas ≤992px): foto da resolução, `border-radius: var(--radius-lg)`, `box-shadow: var(--shadow-md)`
  - Dois parágrafos descritivos (17px, line-height 1.7, cinza escuro)
  - Lead-in phrase: text italic serif bordô "E a construção dessa segurança começa..."
  - **Linha dourada vertical** (`1px × 150px`, dourado) — funciona como ponte visual para a seção seguinte, com `margin-bottom: -50px` avançando fisicamente
  - Imagem desktop: `550px height`, `border-radius: 4px`, sombra sutil `0 15px 40px rgba(0,0,0,0.06)`
- **Animação:** `animate-on-scroll` — `opacity: 0 + translateY(30px)` → `opacity: 1 + translateY(0)` em `0.6s ease`
- **Micro-interações:** Nenhuma específica
- **Elemento diferenciador:** A linha vertical dourada que "sangra" para a seção seguinte criando continuidade narrativa; uso de `Inter` no título (quebrando o padrão Playfair) para diferenciar o tom emocional

---

### 5. Nosso Espaço (Escritório + Vídeo)

- **Estrutura:** `grid 1fr 1fr`, gap `4rem`, `flex-direction: row-reverse` (vídeo à esquerda visual)
- **Fundo:** `var(--white)`, com `padding-top: var(--space-8)`
- **Elementos:**
  - Tag: "Nosso Espaço" (dourado)
  - Título: "Um ambiente planejado para o seu **conforto**" — highlight bordô
  - Vídeo do escritório: `<video>` autoplay loop muted, aspect-ratio 4/5, `border-radius: var(--radius-xl)`, `box-shadow: var(--shadow-lg)`, largura 85%
  - Parágrafo descritivo
  - Values checklist: 3 items com ícone ✓ em quadrado dourado 24×24 + texto (Estrutura Moderna, Discrição Absoluta, Orientação Estratégica)
  - Info bar: OAB RJ nº 015.828/2023 | Campo Grande, RJ — separada por `border-top: 1px solid var(--light-gray)`
  - Image-accent: retângulo dourado 60%×40% posicionado bottom-right com opacity 0.2 e z-index -1
- **Animação:** `animate-on-scroll` stagger
- **Micro-interações:** Nenhuma específica de hover nos cards
- **Elemento diferenciador:** Layout invertido (row-reverse), vídeo em aspect-ratio vertical (4/5) com bordas arredondadas — não é thumbnail horizontal padrão

---

### 6. Nossa Equipe

- **Estrutura:** `grid 1fr 1fr`, gap `4rem`, margem superior `var(--space-20)`
- **Fundo:** `var(--white)` (continuação da seção anterior)
- **Elementos:**
  - Tag: "Nossa Equipe" (dourado)
  - Título: "Profissionais unidos pelo **seu caso**"
  - Foto da equipe (desktop): imagem full-width, `border-radius: var(--radius-xl)`, `box-shadow: var(--shadow-lg)`
  - Dois parágrafos descritivos
  - Value com ícone SVG de grupo: "Apoio Estratégico Multidisciplinar"
- **Animação:** Scroll reveal stagger
- **Micro-interações:** Nenhuma
- **Elemento diferenciador:** Seção contínua visualmente com "Nosso Espaço" (mesmo container `<section>`) criando narrativa fluida sem cortes

---

### 7. Serviços (Premium Tabs)

- **Estrutura:** `grid 1fr 1.4fr`, gap `3rem` — coluna esquerda: tab links verticais / coluna direita: conteúdo (imagem + desc)
- **Fundo:** `var(--white)`
- **Elementos:**
  - Header: tag "Nossa experiência jurídica" + título misto bordô/cinza: "**Serviços jurídicos abrangentes,** personalizados para proteger..."
  - 5 tabs verticais: Usucapião, Direito Imobiliário, Regularização, Direito de Família, Direito Civil
  - Tab ativa: `border-bottom: 3px solid var(--primary-bordo)`, opacity 1, font-weight 500
  - Tab inativa: cor `#a0a0a0`, `border-bottom: 1px dotted var(--medium-gray)`, opacity 0.8
  - Conteúdo: imagem ilustrativa (420px height) + label "* Imagem Ilustrativa" + ícone SVG overlay bordô + caixa bege `#EBE5D9` com descrição + botão "Saiba mais" WhatsApp
- **Animação:**
  - Transição de tab: `spFadeEffect 0.5s` — `opacity: 0 + translateY(10px)` → `opacity: 1 + translateY(0)`
- **Micro-interações:**
  - Tab hover: `color → var(--primary-color)`
  - Botão WhatsApp hover: `background transparent + color bordô` (inversão elegante)
  - Ícone overlay: `backdrop-filter: blur(5px)`, `box-shadow: 0 5px 20px rgba(0,0,0,0.15)`
- **Elemento diferenciador:** Sistema de tabs vertical (não horizontal) com font-size de 28px estilo editorial; imagem com tag "Ilustrativa" + ícone SVG overlay no canto inferior direito

---

### 8. Avaliações / Depoimentos (Marquee Infinito)

- **Estrutura:** Marquee horizontal infinito (`flexbox`, `width: max-content`), cards de 400px cada
- **Fundo:** `var(--off-white)` (#F8F7F5)
- **Elementos:**
  - Header centralizado: tag "Depoimentos" + "O que dizem sobre nós" + logo Google SVG inline
  - 9 testimonial cards (duplicados 2× para loop suave = 18 no DOM)
  - Cada card: avatar circular (44×44, borda bordô, iniciais) + nome uppercase + texto italic serif
  - Aspa gigante decorativa: `""` em `font-size: 120px`, `rgba(123,30,43,0.08)`, posição absolute top
  - Gradientes laterais: pseudo-elementos `::before/::after` com fade `var(--off-white)` em 15vw de largura
- **Animação:** `marqueeScroll 45s linear infinite` (90s no mobile) — `translateX(0) → translateX(calc(-50% - gap/2))`
- **Micro-interações:**
  - Card hover: `translateY(-4px)`, `transition: 0.3s ease`
  - Track hover: `animation-play-state: paused`
- **Elemento diferenciador:** Abordagem marquee infinito (sem paginação/dots/setas) com fade nas bordas; aspa decorativa gigante semi-transparente; avatar com borda fina bordô (sem fill sólido)

---

### 9. Autoridade — Dra. Nohana (A Fundadora)

- **Estrutura:** `grid 1fr 1fr`, gap `4rem`
- **Fundo:** `var(--surface-100)` / off-white com padding grande
- **Elementos:**
  - Tag: "A Fundadora"
  - Título: "Dra. Nohana **Quintanilha**"
  - Bio: Presidente OAB CG/RJ, formada UFF
  - 3 values: ícone escudo "Presidente OAB/CG" + estrela "Liderança e Ética" + check "Formada pela UFF"
  - Foto da posse OAB (desktop): imagem com accent dourado
- **Animação:** Scroll reveal
- **Micro-interações:** Nenhuma específica
- **Elemento diferenciador:** Seção exclusiva de autoridade pessoal — separada da equipe; uso de credenciais institucionais como âncoras de confiança

---

### 10. Galeria Editorial ("Dra. Nohana em Ação")

- **Estrutura:** `flexbox nowrap`, scroll horizontal com `scroll-snap-type: x mandatory`, items de `calc(33.333% - 20px)` desktop / `80%` mobile
- **Fundo:** `var(--off-white)` com pseudo-elementos `::before/::after` criando fade branco lateral (15%)
- **Elementos:**
  - Header: "A Mente por Trás dos Resultados" + "Dra. Nohana em **Ação**"
  - 6 fotos profissionais, cada uma `500px height` (450px mobile), `border-radius: var(--radius-lg)`, scroll-snap
  - Lightbox modal: overlay preto 90%, borda dourada 4px na imagem, fechar com `×` ou ESC
- **Animação:**
  - **Pan automático:** `panImageHorizontally 1s infinite alternate linear` — `object-position: 0% 50% → 100% 50%`
  - **Auto-scroll:** `setInterval` a cada 3.5s rola para o próximo item com `scrollTo({ behavior: 'smooth' })`
  - IntersectionObserver: só anima quando visível (threshold 0.2)
- **Micro-interações:**
  - Image hover: `scale(1.05)` em `0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)` + `animation-play-state: paused` (para o pan)
  - Touch start/end: pausa/retorna auto-scroll
  - Mouse enter/leave: pausa/retorna auto-scroll
- **Elemento diferenciador:** Pan horizontal automático dentro de cada imagem (não é zoom, é deslocamento lateral) — efeito cinemático sutil; auto-scroll inteligente com pausa no hover/touch

---

### 11. Posse OAB

- **Estrutura:** `grid 1.1fr 0.9fr` (desktop), 1fr (mobile)
- **Fundo:** `var(--surface-50)` com `border-top/bottom: 1px solid var(--border-color)`
- **Elementos:**
  - Header centralizado: "Representatividade e Liderança" + "Posse na **OAB Campo Grande**"
  - Citação em itálico: "Queremos uma instituição próxima..."
  - Vídeo YouTube embed (iframe 16/9) com shadow XL
  - Texto descritivo + blockquote com `border-left: 3px solid var(--primary-color)` bordô, itálico
  - Galeria grid: `repeat(2, 1fr)` com `grid-auto-rows: 150px`, item `.span-2` ocupa 2 colunas + 2 rows
  - Fotos com lightbox (onclick)
- **Animação:** Nenhuma específica no CSS (usando genérica scroll-reveal)
- **Micro-interações:**
  - Foto hover: `scale(1.02)`, `z-index: 2`, `transition: 0.3s ease`
- **Elemento diferenciador:** Mix de vídeo YouTube + galeria de fotos em grid assimétrico dentro da mesma seção; blockquote com barra bordô vertical

---

### 12. FAQ (Accordion)

- **Estrutura:** `flexbox column`, `max-width: 800px` centralizado
- **Fundo:** `var(--white)`
- **Elementos:**
  - Header: "Dúvidas Frequentes" + "Perguntas **comuns**"
  - 4 itens accordion: botão com texto + ícone ✚ (duas linhas cruzadas douradas)
  - Respostas com `max-height: 0 → 300px`, `overflow: hidden`
- **Animação:**
  - Ícone ✚ → –: segundo `icon-line` faz `rotate(90deg) + opacity: 0` em `300ms ease`
  - Resposta: `max-height transition 500ms ease`
- **Micro-interações:**
  - Question hover: `color → var(--primary-bordo)`
  - Item hover (border): `border-color → var(--accent-gold)`
  - Item active: `border-color → var(--primary-bordo)`
- **Elemento diferenciador:** Ícone ✚/– construído com duas `<span>` absolutas (não SVG, não font-icon) — transições geométricas puras

---

### 13. Contato / CTA com Formulário

- **Estrutura:** Split layout — imagem de fundo à esquerda (60% width) + formulário à direita (`max-width: 650px`, `margin-left: auto`)
- **Fundo:** `var(--charcoal)` (#2D2B29) + imagem Dra. Nohana com gradiente `linear-gradient(to left, charcoal 0%, charcoal 15%, rgba(...,0.6) 45%, transparent 100%)` + overlay bordô 10% opacidade
- **Elementos:**
  - Tag light: "Entre em Contato" (dourado claro)
  - Título: "Pronto para **regularizar** seu imóvel?" — highlight-gold
  - Subtítulo: "Agende uma avaliação gratuita..."
  - Formulário glassmorphism: `background: rgba(26,25,24,0.45)`, `backdrop-filter: blur(12px)`, `border: 1px solid rgba(255,255,255,0.08)`, `border-radius: 16px`, `box-shadow: 0 15px 35px rgba(0,0,0,0.5)`
  - Inputs: `border: none + border-bottom: 1px solid rgba(255,255,255,0.2)`, fundo transparente, texto branco
  - Select com options em `background: var(--charcoal)`
  - Botão "Enviar Solicitação" bordô full-width com ícone avião SVG
  - Nota: "Ao enviar, você concorda em ser contactado..."
- **Animação:**
  - Input focus: `border-color → var(--accent-gold)`, `300ms ease`
  - Botão: efeito shine `::before` — gradiente translúcido sweeping `left: -100% → 100%` em `0.5s ease` no hover
- **Micro-interações:**
  - Botão hover: `translateY(-2px) + box-shadow bordô`
  - Formulário envia para WhatsApp via `window.open()` com mensagem formatada
  - Toast de sucesso: `translateY(100px) → 0`, background verde `#22C55E`
- **Elemento diferenciador:** Formulário glassmorphism sobre fundo cinematográfico com gradiente direcional left-to-right (não radial); inputs ultra-minimalistas (apenas borda inferior, sem caixa)

---

### 14. Localização

- **Estrutura:** Grid centralizado — info (endereço, horário, tel, Instagram) em 4 colunas wrap + grid `1fr 1fr` para vídeo e mapa
- **Fundo:** `var(--off-white)` com informações em `var(--white)`
- **Elementos:**
  - Header: "Onde Estamos" + "Visite nosso **escritório**"
  - 4 blocos info com ícones SVG: Endereço, Horário, Telefone, Instagram
  - Vídeo "como chegar" (`<video>` com poster, loop muted) em `custom-box` com `aspect-ratio: 10/14`, overlay gradiente inferior com ícone play + "Veja como chegar"
  - Mapa Google embed (iframe) com mesmo aspect-ratio 10/14
  - Ambos com `border-radius: var(--radius-xl)` e `box-shadow: var(--shadow-lg)`
- **Animação:** Nenhuma específica
- **Micro-interações:** Nenhuma específica
- **Elemento diferenciador:** Aspect-ratio 10/14 vertical (quase formato celular) para vídeo e mapa lado a lado — incomum e impactante; vídeo com overlay informativo na base

---

### 15. Footer

- **Estrutura:** `grid 4 colunas` (desktop) → `1fr 1fr` (tablet) → `1fr` (mobile)
- **Fundo:** `var(--black)` (#1A1918)
- **Elementos:**
  - Brand: logo picture + nome + subtítulo + descrição + social icons (Instagram, Facebook, LinkedIn, Google)
  - Links Rápidos: Início, Sobre, Serviços, Avaliações, FAQ, Contato
  - Serviços: Usucapião, Imobiliário, Regularização, Família, Civil
  - Contato: nome empresa, endereço (link Maps), WhatsApp (ícone SVG + número)
  - Footer bottom: © 2026 + OAB | Cookies toggle visual | Termos | Privacidade | "Desenvolvido por AG5 Agência"
- **Animação:** Nenhuma
- **Micro-interações:**
  - Links hover: `color rgba(255,255,255,0.7) → var(--accent-gold-light)`
  - Social icons hover: `translateY(-2px) + color dourado`
- **Elemento diferenciador:** Toggle de cookies visual inline no footer bottom (mini switch com ✓/✕ e bolinha dourada); títulos de coluna em dourado claro

---

### 16. WhatsApp Flutuante

- **Estrutura:** Botão fixo, `bottom: 24px`, `right: 24px`
- **Fundo:** `#25D366` (verde WhatsApp)
- **Elementos:** Ícone WhatsApp SVG 30×30 dentro de círculo 60×60
- **Animação:** Nenhuma por padrão (tem `pulse-shadow` e `gentle-bounce` definidos mas não ativamente aplicados ao botão principal)
- **Micro-interações:** Hover: `scale(1.05)`, `transition: 0.3s ease`

---

### 17. Cookie Banner + Modal

- **Estrutura:** Banner bottom com título + texto + 3 botões (Personalizar, Rejeitar, Aceitar) + Modal com 5 categorias de cookies com toggles
- **Fundo:** Glassmorphism escuro (detalhes no `cookie-banner.css`)
- **Elementos:** Toggles personalizáveis por categoria (Necessário sempre ativo, Funcional, Analítico, Desempenho, Publicidade)

---

### 18. Lightbox

- **Estrutura:** Overlay fixo fullscreen
- **Fundo:** `rgba(0,0,0,0.9)`
- **Elementos:** Imagem com `max-width: 90%`, `max-height: 85vh`, borda dourada 4px, `border-radius: 12px`, sombra intensa
- **Animação:** `opacity 0 → 1` em `0.3s ease`
- **Micro-interações:** Fecha com clique no overlay, botão × ou tecla ESC; × hover: `color → var(--accent-gold)`

---

## COMPONENTES REUTILIZÁVEIS

### Botões

| Tipo | Background | Cor texto | Border | Border-radius | Hover |
|---|---|---|---|---|---|
| `.btn-primary` | `var(--primary-bordo)` | `#FFF` | nenhuma | **0** (angular) | bg darken + `translateY(-2px)` + shadow bordô |
| `.btn-outline` | transparente | `var(--charcoal)` | `2px solid charcoal` | **0** | bg fill charcoal + texto branco + `translateY(-2px)` |
| `.premium-btn` | `#E6D5C3` | `#000` | nenhuma | `4px` | bg `#FFF` + `translateY(-2px)` |
| `.nav-cta` | `var(--primary-bordo)` | `#FFF` | nenhuma | **0** | bg darken + `translateY(-2px)` + shadow bordô |
| `.sp-btn-whatsapp` | `var(--primary-bordo)` | `#FFF` | `1px solid bordo` | `2px` | bg transparente + texto bordô (inversão) |

> **Efeito Shine** em `.btn`: pseudo-elemento `::before` com gradiente `transparent → rgba(255,255,255,0.2) → transparent`, sweep horizontal em `0.5s ease` no hover

### Cards (Testimonials)

- Background: `transparent` (sem caixa)
- Sombra: **nenhuma** (abordagem flat)
- Width: `400px` fixo
- Padding: `var(--space-8)` / `var(--space-6)` esquerda
- Hover: `translateY(-4px)`
- Decoração: aspa `""` em 120px, cor bordô 8% opacidade
- Avatar: `44×44`, circular, borda fina bordô, sem fill

### Cards (Serviços — via tabs)

- Container `.sp-image-box`: `border-radius: 4px`, `box-shadow: 0 10px 30px rgba(0,0,0,0.05)`
- Imagem: 420px height, object-fit cover
- Descrição: fundo bege `#EBE5D9`, padding generoso, flex horizontal com botão WhatsApp

### Navbar

- **Scroll behavior:**
  1. Topo: transparente, links brancos
  2. >100px: `background: rgba(255,255,255,0.95)` + `backdrop-filter: blur(20px)` + shadow, links escuros
  3. Scroll down >200px: `translateY(-100%)` — some
  4. Scroll up: reaparece
- **Mobile:** menu lateral slide-in com logo duplicada, botão fechar `×`, CTA WhatsApp full-width

### Section Tag (`.section-tag`)

- `display: inline-block`
- Font: Inter, bold 600, UPPERCASE
- Cor: `var(--accent-gold)` dourado
- `letter-spacing: 0.15em`
- `padding-left: var(--space-8)` (2rem)
- Pseudo `::before`: barra horizontal dourada `var(--space-6)` de largura × 2px, centralizada verticalmente à esquerda
- Variante `.light`: dourado claro para fundos escuros

---

## ANTI-PADRÕES REGISTRADOS

> O que foi evitado **intencionalmente** neste projeto:

1. ❌ **Gradiente roxo-azul** — escolha deliberada de paleta bordô-dourado dessaturado, zero presença de roxo ou azul em todo o projeto
2. ❌ **Cards brancos flutuantes com border-radius 12px e sombra genérica** — Testimonials são flat/transparentes sem caixa; cards de serviço usam tabs com radius de 4px
3. ❌ **Hero centralizado com CTA gradiente** — Hero usa layout assimétrico split (left/right), CTA em cor sólida bege (não gradiente)
4. ❌ **Inter ou Poppins como tipografia única** — Intercalação proposital entre Inter (sans-serif para modernidade) e Playfair Display (serif para autoridade), com alternância contextual por seção
5. ❌ **Espaçamento uniforme matemático** — Gaps e paddings variam entre seções intencionalmente (space-8, space-12, space-16, space-20) criando tensão visual; a linha dourada `pt-line` sangra entre seções com margin negativo
6. ❌ **Ícones minimalistas em círculos coloridos** — Value icons são quadrados dourados 24×24 sem border-radius; ícones SVG stroke-only (não fill)
7. ❌ **Slider de testimonials com dots/setas** — Substituído por marquee infinito horizontal suave com fade lateral
8. ❌ **Clichês de copy ("Transform your...", "Ultimate solution")** — Copy emocional localizada ("Seu patrimônio é o resultado de uma vida", "destrancar a vida financeira de dezenas de famílias")
9. ❌ **Animações fade-in genéricas uniformes** — Typewriter no hero, pan horizontal nas fotos da galeria, marquee nos depoimentos, transição de tabs com translateY 
10. ❌ **border-radius arredondado em botões primários** — Todos os `.btn` e `.nav-cta` têm `border-radius: 0` (angular puro, como carimbo/selo institucional)
11. ❌ **Glassmorphism como background principal** — Usado apenas no formulário de contato como exceção intencional sobre fundo cinematográfico
12. ❌ **Placeholder text / Lorem ipsum** — Todo conteúdo é real com dados da OAB, depoimentos verificados do Google, e informações institucionais reais

---

## COMBINAÇÕES BLOQUEADAS PARA PRÓXIMOS PROJETOS

> Estas combinações **nunca devem ser repetidas juntas** para garantir identidade única por projeto:

| # | Paleta | Layout | Animação | Tipografia |
|---|---|---|---|---|
| 1 | Bordô `#800000` + Dourado `#8F680A` + Bege `#E6D5C3` | Hero split assimétrico left/right com coluna deslocada -100px | Typewriter + pan horizontal em gallery | Inter 500 + Playfair Display 600 |
| 2 | Charcoal `#2D2B29` + bordô overlay 10% | CTA com imagem 60% left + formulário glass right | Shine sweep em botão | Glassmorphism `rgba(26,25,24,0.45)` |
| 3 | Off-white `#F8F7F5` com fade lateral | Marquee infinito horizontal de testimonials | `marqueeScroll 45s linear infinite` com pause-on-hover | Playfair italic 1.1rem para depoimentos |
| 4 | Dourado como barra vertical de conexão | Linha `1px × 150px` sangrando entre seções | N/A (estática visual) | N/A |
| 5 | Bege `#EBE5D9` como fundo de card | Tabs verticais 28px com imagem + desc horizontal | `spFadeEffect 0.5s` translateY | Tabs em cinza muted `#a0a0a0` → ativo escuro |
| 6 | Branco com sombra bordô `rgba(187,7,7,0.15)` | Marquee strip text-only com losangos | `marquee 30s linear infinite` | Playfair 600 UPPERCASE 0.15em |

---

> **Nota:** Este documento permite a recriação pixel-perfect do site sem acesso visual ao original. Cada valor, timing e decisão estética está registrado para servir como referência técnica e criativa.
