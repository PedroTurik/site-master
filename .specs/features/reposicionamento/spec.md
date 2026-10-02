# Reposicionamento Institucional — Specification

**Origem:** feedback do cliente (3 áudios WhatsApp, 2026-10-02) + decisões de estrutura tomadas em 2026-10-02.
**Escopo:** Large — copy, arquitetura de informação e elementos visuais de todas as páginas institucionais, PT e EN.

## Problem Statement

O site atual comunica a Mastertronics como uma **representante cujo canal principal é a distribuição** (hero com "compra através dos maiores distribuidores do mundo", estatística "4 distribuidores", faixa "Disponíveis através de", seção inteira de distribuidores na Home, página "Onde comprar" no menu). Esse não é mais o foco da empresa. O cliente quer comunicar uma **solução técnica e logística em várias frentes**, com o **China Hub** em destaque crescente.

Além disso, o site chama as fábricas desenvolvidas na China de "fornecedores alternativos". Esse vocabulário está errado: **o fornecedor é a Mastertronics**. Na China, a empresa desenvolve **fábricas**.

## Mensagens-chave (fonte: áudios do cliente)

Estas mensagens são o critério de aceite de toda a copy. Cada uma vem de uma fala do cliente.

| ID | Mensagem | Fala de origem (resumida) |
| -- | -------- | ------------------------- |
| M1 | A Mastertronics é uma **solução técnica e logística** para o cliente, em várias frentes. | "somos uma solução de técnica e logística para os clientes em várias frentes" |
| M2 | **Representação:** a Mastertronics representa fabricantes globais; o cliente compra pelo canal de distribuição **ou direto da fábrica**. | "o cliente compra através do canal de distribuição ou compra direto da fábrica" |
| M3 | **China Hub:** a Mastertronics desenvolve **fábricas** na China e oferece **consolidação de cargas** dessas fábricas. | "solução logística de consolidação de cargas na China" |
| M4 | **A Mastertronics é o fornecedor.** Ela é o exportador para o cliente, ou a fábrica exporta direto quando a compra é direto de fábrica. | "Fornecedor somos nós… A gente que é o exportador… ou a fábrica exporta direto" |
| M5 | A compra é **direto da fábrica**, sem distribuidores chineses nem brokers, com **garantia, rastreabilidade e suporte técnico** das peças. | "eu compro direto da fábrica, eu dou garantia… rastreabilidade… suporte técnico" |
| M6 | A distribuição é **um canal importante, não o principal**. | "A distribuição é um canal importante, mas ele não é mais o principal" |
| M7 | A Mastertronics está **mais próxima dos clientes**. | "a gente está aproximando mais dos clientes" |

## Goals

- [ ] Um visitante novo, após ler só o hero e a primeira seção da Home, consegue dizer que a Mastertronics é um fornecedor técnico-logístico com duas frentes (representação e China Hub). Verificação: teste de 5 segundos com 3 pessoas fora do projeto.
- [ ] Nenhum texto do site chama de "fornecedor" as fábricas desenvolvidas na China.
- [ ] Distribuição aparece só como um canal possível entre outros, nunca como proposta principal, estatística de destaque ou item de menu.
- [ ] As versões PT e EN carregam as mesmas mensagens M1–M7.

## Out of Scope

| Feature | Reason |
| ------- | ------ |
| Novo idioma (ES) ou novas verticais de negócio | O cliente não pediu |
| Mudança de identidade visual (cores, logo, tipografia, motivo "trace") | O cliente aprovou o design ("gostei bastante da estrutura… e do design") |
| Reescrita das páginas individuais de fabricante (`/fabricantes/[slug]`) | Fichas técnicas não tratam de posicionamento. Só os termos da seção VOC se aplicam a elas |
| Mudança na página de Energia (`/renovaveis`) além dos termos da seção VOC | O cliente não comentou sobre ela; o posicionamento dela na Home é tratado em ENG-01 |
| Guia/fluxo de "como comprar" em qualquer formato | Decisão do cliente: as vias de compra são personalizadas |
| Backend do formulário (Web3Forms) | Pendência separada, já documentada no README |
| Fotos novas do China Hub real (armazém, consolidação) | Dependem de material do cliente. Até lá, usar o acervo licenciado em `src/assets/photos` (ver A6) |

---

## Assumptions & Open Questions

| Assumption / decision | Chosen default | Rationale | Confirmed? |
| --------------------- | -------------- | --------- | ---------- |
| A1. Estrutura da Home | Hero com a proposta técnico-logística (M1), seguido das frentes **Representação** e **China Hub** lado a lado, com peso visual igual | Escolha do usuário em 2026-10-02 | y |
| A2. Energia (CRRC) na Home | A seção continua, posicionada **depois** das frentes técnico-logísticas, como vertical de aplicação | Escolha do usuário em 2026-10-02 | y |
| A3. Conceito "como comprar" | Removido do site inteiro (passos "Como comprar", "Onde comprar", "indicamos o canal ideal") | Escolha do usuário: vias de compra são personalizadas | y |
| A4. Página `/distribuidores/` (+ `/en/distributors/`) | Sai do menu e deixa de existir como página. Os distribuidores viram uma seção curta "Parceiros de distribuição" dentro de `/fabricantes/`, com a frase de que a via de compra é definida com cada cliente. Redirect 301 das URLs antigas para `/fabricantes/#distribuicao` | Sem o "como comprar", a página não tem mais função própria. O conteúdo restante (logos + descrição) cabe na frente de Representação | n — validar com o cliente |
| A5. Termo para as fábricas do China Hub | PT: "fábricas" / "fabricantes"; EN: "factories" / "manufacturers". "Fornecedor/supplier" é reservado à Mastertronics e a frases sobre fornecimento ao cliente. Exceção: o fato de um fabricante representado ser fornecedor de terceiros (ex.: CRRC Sensor "fornecedor dos principais fabricantes de inversores") | Fala direta do cliente (M4) | y |
| A6. Fotos | Reaproveitar o acervo atual (`port`, `logistics`, `factory`, `inspection`, `qualification`). Nenhuma foto nova é obrigatória para entregar | Evita bloquear a entrega por falta de material | n — pedir fotos reais do Hub ao cliente (opcional) |
| A7. Detalhes operacionais da consolidação (cidade, armazém, modais, incoterms) | Não publicar detalhes não informados pelo cliente. A copy descreve só o que foi dito: consolidação de cargas das fábricas desenvolvidas, exportação pela Mastertronics ou direto da fábrica | Regra de não inventar fatos | n — perguntar ao cliente se há dados publicáveis |
| A8. Nome da marca do Hub | Manter a grafia atual "China HUB" em todo o site | Consistência com o material existente. O cliente fala "China Hub" sem indicar grafia | n |
| A9. Garantia | Publicar "garantia das peças" sem prazo nem condições | O cliente afirmou a garantia mas não deu termos. Prometer prazo seria inventar | n |
| A10. Contagens de 2026 ("35 anos", "25 anos de China HUB") | Continuam calculadas por `new Date()`, como hoje | Comportamento existente | y |

**Open questions:** none - all resolved or logged above. (A4, A6, A7, A8 e A9 têm default definido e serão validadas com o cliente junto com o preview.)

---

## User Stories

### P1: Proposta técnico-logística na Home ⭐ MVP

**User Story**: Como comprador ou engenheiro de uma indústria eletrônica, quero entender no primeiro scroll o que a Mastertronics entrega, para saber se ela resolve meu problema de suprimento técnico e logístico.

**Why P1**: É a reclamação central do cliente (M1, M6).

**Acceptance Criteria**:

1. POS-01: The Home hero SHALL state that Mastertronics is a technical and logistics solution/supplier (M1) in both its H1 and its subheadline, in PT and EN.
2. POS-02: The Home hero subheadline SHALL NOT mention distributors or distribution.
3. POS-03: The first content section after the hero SHALL present the two fronts, "Representação de fabricantes" and "China HUB", as sibling cards of equal size, each with a summary of its model (M2 for Representação; M3 + M4 for China HUB) and a link to its page.
4. POS-04: The Home hero statistics row SHALL NOT include a distributor count; that slot SHALL hold a fact about the China HUB or about direct-from-factory supply.
5. POS-05: The Home logo band SHALL NOT include the "Disponíveis através de / Available through" distributor strip.
6. POS-06: The Home SHALL NOT render the `Distributors` component section.
7. POS-07: The Home SHALL include a section that states M5 (direto da fábrica, sem brokers, garantia, rastreabilidade, suporte técnico) as a list of three named guarantees: Garantia, Rastreabilidade, Suporte técnico.
8. POS-08: The Home `<title>` and meta description SHALL convey M1 and SHALL NOT contain "distribuidor"/"distributor".

**Independent Test**: `pnpm build`. Then on `dist/index.html` and `dist/en/index.html`, check the hero copy, the order of the first section after the hero, and that no "distribuidor"/"distributor" string appears before the Energia section.

---

### P1: Vocabulário correto (fábricas × fornecedor) ⭐ MVP

**User Story**: Como cliente, quero entender que a Mastertronics é quem me fornece e responde pela peça, para confiar que não estou sendo encaminhado a um terceiro.

**Why P1**: O cliente pediu de forma explícita ("é importante deixar isso bem claro").

**Acceptance Criteria**:

1. VOC-01: The built site (PT) SHALL contain zero matches of the regex `fornecedor(es)? alternativ` and of `desenvolvimento de fornecedores`, case-insensitive.
2. VOC-02: The built site (EN) SHALL contain zero matches of the regex `alternative suppliers?` and of `supplier development`, case-insensitive.
3. VOC-03: Every remaining occurrence of `fornecedor`/`supplier` in `src/` SHALL either refer to Mastertronics or appear in the A5 exception (CRRC Sensor highlight); the full list is recorded in validation.
4. VOC-04: The China HUB page SHALL state, in PT and EN, that Mastertronics is the supplier/exporter to the customer, or that the factory exports directly in direct-from-factory supply (M4).
5. VOC-05: The contact form topic for the hub SHALL read "China HUB · fábricas e consolidação" (PT) / "China HUB · factories & consolidation" (EN).

**Independent Test**: grep the regexes from VOC-01/02 over `dist/` (expect 0), then inspect the list from VOC-03.

---

### P1: China HUB como solução técnico-logística ⭐ MVP

**User Story**: Como comprador, quero entender que o China HUB desenvolve fábricas, consolida cargas e fornece com garantia e rastreabilidade, para usá-lo como solução de suprimento e não só como "busca de fornecedor".

**Why P1**: É a frente que o cliente está reforçando (M3, M5, M7).

**Acceptance Criteria**:

1. HUB-01: The China HUB page H1 SHALL convey factory development plus logistics (M3), and SHALL NOT use "fornecedor"/"supplier".
2. HUB-02: The China HUB page SHALL include a section on cargo consolidation in China, covering the goods from the developed factories and the two export modes from M4, with no operational details outside A7.
3. HUB-03: The China HUB page SHALL include a section contrasting direct-from-factory purchase with buying from Chinese distributors/brokers, listing the three guarantees: garantia, rastreabilidade, suporte técnico (M5).
4. HUB-04: The China HUB process SHALL extend beyond qualification to delivery, with steps in this order: Demanda → Desenvolvimento da fábrica (prospecção + auditoria) → Qualificação → Produção & consolidação → Exportação. PT and EN SHALL have the same number of steps.
5. HUB-05: The China HUB `<title>` and meta description SHALL NOT contain "fornecedores alternativos"/"alternative suppliers".
6. HUB-06: The Home "China HUB" section and the hub teaser on `/fabricantes/` SHALL use factory vocabulary and mention consolidation.

**Independent Test**: build, open `/china-hub/` and `/en/china-hub/`, and confirm the consolidation section, the guarantees section and the 5-step process.

---

### P1: Distribuição como canal, não como foco ⭐ MVP

**User Story**: Como visitante, quero ver os distribuidores como uma opção de canal, para não concluir que a Mastertronics é só uma ponte para distribuidores.

**Why P1**: M6. Também tira do site o conceito "como comprar" (A3).

**Acceptance Criteria**:

1. CH-01: The main navigation (desktop and mobile) and footer navigation SHALL NOT contain a "Distribuidores"/"Distributors" item.
2. CH-02: The site SHALL contain zero occurrences of "Como comprar", "Onde comprar", "How to buy", "Where to buy" and "canal ideal"/"right channel".
3. CH-03: `/fabricantes/` and `/en/manufacturers/` SHALL include a section with anchor `#distribuicao` (PT) / `#distribution` (EN) that shows the distributor logos and states that the purchase route (distributor or direct from the factory) is defined with each customer.
4. CH-04: WHEN a visitor requests `/distribuidores` or `/distribuidores/` THEN the host SHALL answer 301 to `/fabricantes/#distribuicao`; WHEN a visitor requests `/en/distributors` or `/en/distributors/` THEN the host SHALL answer 301 to `/en/manufacturers/#distribution`.
5. CH-05: The pages `dist/distribuidores/index.html` and `dist/en/distributors/index.html` SHALL NOT be generated, and the sitemap SHALL NOT list them.
6. CH-06: The About page statistics and "diferenciais" SHALL NOT present a distributor count or "Distribuidores globais" as a differentiator; distribution MAY appear inside the Representação text as one of the channels.

**Independent Test**: build, list the `dist/` folders, grep the CH-02 strings (expect 0), check `_redirects`.

---

### P2: Página Empresa alinhada ao novo posicionamento

**User Story**: Como visitante que quer conhecer a empresa, quero ler uma narrativa coerente com a Home, para entender a evolução de representante para fornecedor técnico-logístico.

**Why P2**: Coerência. A Home e o China HUB resolvem o MVP.

**Acceptance Criteria**:

1. ABT-01: The About H1 and lead SHALL convey M1 and SHALL NOT read "Excelência em Soluções Eletrônicas" alone as the positioning.
2. ABT-02: The "Quem somos" text SHALL present the fronts in this order: proposta (M1) → Representação (M2, distribution as one channel) → China HUB (M3–M5) → Energia (CRRC).
3. ABT-03: The About statistics row SHALL contain no distributor count.

**Independent Test**: read `/empresa/` and `/en/about/` against M1–M7.

---

### P2: Energia como vertical, abaixo das frentes

**User Story**: Como visitante do setor de energia, quero ainda encontrar a parceria CRRC na Home, sem que ela dispute o posicionamento principal.

**Why P2**: Decisão A2. A seção já existe; muda só a posição e a ligação com o resto.

**Acceptance Criteria**:

1. ENG-01: The Home SHALL render the Energy section after the two-fronts section, the M5 guarantees section and the China HUB section.
2. ENG-02: The Home "Soluções" grid SHALL NOT place Energy as a third equal-weight card next to the two fronts.

**Independent Test**: check the section order in `dist/index.html`.

---

### P2: Paridade PT/EN e SEO

**User Story**: Como visitante internacional, quero a mesma mensagem em inglês, para que o posicionamento não dependa do idioma.

**Acceptance Criteria**:

1. I18N-01: Every PT copy object changed by this feature SHALL have an EN counterpart with the same keys and the same array lengths.
2. I18N-02: The Organization JSON-LD `description` in `Base.astro` SHALL convey M1 and SHALL NOT contain "distribuidor"/"distributor".
3. I18N-03: `pnpm build` and `astro check` SHALL exit 0.

**Independent Test**: build, `npx astro check`, then a script that compares key shapes of the PT/EN copy objects.

---

### P3: Elementos visuais de logística

**User Story**: Como visitante, quero ver que a Mastertronics tem estrutura logística e não só comercial.

**Acceptance Criteria**:

1. VIS-01: The Home hero world map SHALL draw a route from the China HUB node to Porto Alegre / Brasil, labelled as consolidation and export, while the existing manufacturer nodes stay.
2. VIS-02: The China HUB consolidation section SHALL include a diagram built with existing components (`Trace`, icons): several factories → China HUB (consolidação) → cliente, with the two export modes from M4 visually separated.
3. VIS-03: The new sections SHALL render with no horizontal overflow at 360 px, 768 px and 1440 px widths (`qa/overflow.mjs`).
4. VIS-04: The new animated elements SHALL respect `prefers-reduced-motion: reduce` (no animation).

**Independent Test**: run `qa/shot.mjs` and `qa/overflow.mjs` and compare the screenshots.

---

## Edge Cases

- IF a visitor reaches an old link `/distribuidores/#…` THEN the host SHALL redirect to `/fabricantes/#distribuicao` (fragment loss accepted).
- IF a manufacturer detail page links to `url(lang, 'distributors')` THEN that link SHALL be replaced by `/fabricantes/#distribuicao` (the `distributors` key in `routes.ts` SHALL be removed so the type check fails on any leftover reference).
- WHEN the contact form opens from the China HUB page THEN the preselected topic SHALL be the hub topic (VOC-05) and the message label SHALL ask which part or product the customer needs, without "fornecedor".
- WHEN `prefers-reduced-motion` is set THEN the map route (VIS-01) SHALL render static.

Implicit-requirement dimensions: persistence, auth, concurrency, external calls, state transitions, rate limits and data lifecycle are N/A because this is a static content and IA change. The only external behavior, the host redirects, is covered by CH-04.

---

## Requirement Traceability

| Requirement ID | Story | Phase | Status |
| -------------- | ----- | ----- | ------ |
| POS-01 | P1: Proposta técnico-logística | Design | Pending |
| POS-02 | P1: Proposta técnico-logística | Design | Pending |
| POS-03 | P1: Proposta técnico-logística | Design | Pending |
| POS-04 | P1: Proposta técnico-logística | Design | Pending |
| POS-05 | P1: Proposta técnico-logística | Design | Pending |
| POS-06 | P1: Proposta técnico-logística | Design | Pending |
| POS-07 | P1: Proposta técnico-logística | Design | Pending |
| POS-08 | P1: Proposta técnico-logística | Design | Pending |
| VOC-01 | P1: Vocabulário | Design | Pending |
| VOC-02 | P1: Vocabulário | Design | Pending |
| VOC-03 | P1: Vocabulário | Design | Pending |
| VOC-04 | P1: Vocabulário | Design | Pending |
| VOC-05 | P1: Vocabulário | Design | Pending |
| HUB-01 | P1: China HUB | Design | Pending |
| HUB-02 | P1: China HUB | Design | Pending |
| HUB-03 | P1: China HUB | Design | Pending |
| HUB-04 | P1: China HUB | Design | Pending |
| HUB-05 | P1: China HUB | Design | Pending |
| HUB-06 | P1: China HUB | Design | Pending |
| CH-01 | P1: Distribuição como canal | Design | Pending |
| CH-02 | P1: Distribuição como canal | Design | Pending |
| CH-03 | P1: Distribuição como canal | Design | Pending |
| CH-04 | P1: Distribuição como canal | Design | Pending |
| CH-05 | P1: Distribuição como canal | Design | Pending |
| CH-06 | P1: Distribuição como canal | Design | Pending |
| ABT-01 | P2: Empresa | Design | Pending |
| ABT-02 | P2: Empresa | Design | Pending |
| ABT-03 | P2: Empresa | Design | Pending |
| ENG-01 | P2: Energia | Design | Pending |
| ENG-02 | P2: Energia | Design | Pending |
| I18N-01 | P2: Paridade PT/EN e SEO | Design | Pending |
| I18N-02 | P2: Paridade PT/EN e SEO | Design | Pending |
| I18N-03 | P2: Paridade PT/EN e SEO | Design | Pending |
| VIS-01 | P3: Elementos visuais | Design | Pending |
| VIS-02 | P3: Elementos visuais | Design | Pending |
| VIS-03 | P3: Elementos visuais | Design | Pending |
| VIS-04 | P3: Elementos visuais | Design | Pending |

**Coverage:** 37 total, 0 mapped to tasks, 37 unmapped ⚠️ (expected before Tasks)

---

## Success Criteria

- [ ] Teste de 5 segundos (3 pessoas): ao menos 2 descrevem a empresa como "fornecedor/solução técnica e logística" ou "China Hub + representação", e nenhuma como "distribuidor".
- [ ] `grep` dos regexes VOC-01/VOC-02/CH-02 sobre `dist/` retorna 0.
- [ ] O cliente aprova o preview sem pedir nova rodada de correção de posicionamento.
- [ ] `pnpm build` e `astro check` passam; `qa/overflow.mjs` não acusa overflow nas 3 larguras.
