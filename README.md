# Studio Octus — proposta comercial (VIDAM Hotel)

Apresentação web interativa em 9 telas, na identidade Studio Octus. Serve como **modelo**: a parte institucional
é fixa e a parte do cliente troca a cada proposta.

## Executar

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # site estático em /dist (Vercel, Netlify, qualquer hospedagem)
npm run build:single # um único index.html autossuficiente em /dist-single
```

## Estrutura

| # | Tela | Tipo | Fundo |
|---|---|---|---|
| 01 | Capa — pasta da proposta em vidro fosco | Cliente | Preto + grade |
| 02 | O hub Octus | Fixo | Petróleo + linhas |
| 03 | Crescimento no resultado (DRE) | Fixo | Névoa + grade |
| 04 | A oportunidade — números reais + gráfico | Cliente | Preto |
| 05 | Onde a Villa pode ganhar mais — 4 oportunidades | Cliente | Petróleo + grade |
| 06 | Alavancas (abas) — o que faremos, insight e gráfico | Cliente | Preto |
| 07 | O que vamos fazer — plano por frente e entregáveis | Cliente | Névoa + grade |
| 08 | Para onde vamos — projeção ilustrativa | Cliente | Preto |
| 09 | Metodologia | Fixo | Névoa + grade |
| 10 | Implantação em ciclos | Cliente | Petróleo |
| 11 | Próximo passo | Fixo | Preto |

Responsivo: celular (360 px+), tablet, notebook (inclui telas baixas como 1280×720, com modo compacto) e monitores grandes. Se faltar altura, a tela rola em vez de cortar conteúdo.

## Nova proposta para outro cliente

1. Substitua as fotos em `src/assets/photos/` e ajuste `src/content/assets.ts`.
2. Edite os textos em `src/content/content.ts` (capa, oportunidade, o que vimos, alavancas, implantação).
3. `npm run build`.

## Design system

- **Primárias:** preto `#000000`, branco, ciano Octus `#5CE3E5`
- **Secundárias:** petróleo `#0A2326`, névoa `#EEF2F2`, ciano profundo `#0B7F84`, grafite `#0B0F10`, cinzas `#9AA3A6` / `#5E6A6E`
- **Tipografia:** Manrope (títulos em peso leve, grandes)
- **Componentes:** vidro (neutro, ciano, ciano profundo), vidro fosco, cards de vídeo flutuantes com reflexo, rótulo "01 / Nome", menu de capítulos em pílula
- **Animações:** símbolo Octus que se desenha, números que contam, ícones que se desenham, setas do DRE, anéis de progresso, curva de sazonalidade. Respeitam "reduzir movimento" do sistema.

Marca: `src/assets/brand/` (logo oficial clara e escura, símbolo e símbolo vetorizado).

## Navegação

← → / espaço / Page Up-Down · Home / End · **M** seções · **F** tela cheia · swipe no celular · `#5` abre a tela 5.

## Pendências

- Autorização de uso das fotos da Villa (galeria pública do Booking.com) e, se possível, originais em alta.
- Os pontos da tela "O que vimos" são hipóteses a confirmar no diagnóstico.
- Os gráficos das alavancas e a projeção de crescimento são ilustrativos (sem números); metas saem do diagnóstico.
- Foto de polvo em P&B (imagem de marca) a licenciar para capa/vídeo.

## Fontes (tela 04)

- Aena via Prefeitura de Aracaju (14/01/2026): https://www.aracaju.se.gov.br/noticias/115040/com-alta-de-71-aeroporto-de-aracaju-supera-13-milhao-de-passageiros-em-2025
- Governo de Sergipe (08/05/2026), inclusive 2.157 eventos no calendário de 2025: https://www.se.gov.br/agencia/noticias/governo/turismo_em_sergipe_se_tornou_politica_publica_de_estado_e_vive_crescimento_sem_precedentes
