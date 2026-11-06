/**
 * CONTEÚDO DA PROPOSTA — VIDAM Hotel Aracaju.
 * Trechos entre *asteriscos* recebem destaque em ciano.
 */

export const meta = {
  client: 'VIDAM Hotel',
  agency: 'Studio Octus',
  place: 'Orla de Atalaia · Aracaju · SE',
  year: '2026',
  photoCaption: 'VIDAM Hotel · Orla de Atalaia',
}

/** Capítulos do menu em pílula. `from`/`to` = índices das telas. */
export const chapters = [
  { label: 'Octus', from: 1, to: 3 },
  { label: 'Mercado', from: 4, to: 6 },
  { label: 'Estratégia', from: 7, to: 11 },
  { label: 'Execução', from: 12, to: 13 },
]

export const sections = [
  'Capa',
  'O QG Octus',
  'Por que um QG estratégico',
  'Crescimento no resultado',
  'A oportunidade',
  'Plataformas e canais',
  'Calendário da cidade',
  'Onde o VIDAM pode ganhar mais',
  'Inteligência de dados',
  'Alavancas',
  'O que vamos fazer',
  'Para onde vamos',
  'Metodologia',
  'Implantação',
  'Próximo passo',
]

export const cover = {
  tag: 'Proposta de crescimento',
  disciplines: ['Estratégia', 'Growth', 'Dados', 'Tecnologia'],
  title: 'VIDAM Hotel',
  subtitle: 'Um QG estratégico para o VIDAM faturar mais: mais hóspedes, mais receita por hóspede e novas fontes de receita.',
}

export const hub = {
  label: 'Quem somos',
  title: 'Um *QG estratégico* de growth.',
  lead: 'Direção de marketing, mídia, tecnologia e dados trabalhando como um só time, com um único objetivo: fazer o hotel faturar mais.',
  stats: [
    { value: '6', label: 'frentes integradas' },
    { value: '360°', label: 'visão de negócio' },
    { value: '1', label: 'time do início ao fim' },
  ],
  center: 'Visão 360° de growth',
  areas: [
    { name: 'Diretor de marketing', text: 'Direção, posicionamento e marca' },
    { name: 'Gestores de tráfego', text: 'Mídia paga que gera reservas' },
    { name: 'Time de tech', text: 'Automações sob medida para o hotel' },
    { name: 'Dados e métricas', text: 'Sistemas que mapeiam cada indicador' },
    { name: 'Expansão', text: 'Novos públicos e mercados emissores' },
    { name: 'Growth 360°', text: 'Estratégia que olha o negócio inteiro' },
  ],
  highlight: 3,
  closing: '',
}

export const qg = {
  label: 'Por que um QG estratégico',
  title: 'Hotel de alto padrão não cresce com *ações soltas*.',
  lead: 'O hóspede do VIDAM é exigente. Cada campanha, preço e oferta precisa nascer de dados e estar no lugar certo, na hora certa.',
  without: {
    title: 'Ações isoladas',
    items: ['Post sem objetivo de receita', 'Promoção decidida pela intuição', 'A mesma campanha para todos os públicos', 'Investimento sem medir retorno'],
  },
  with: {
    title: 'QG estratégico Octus',
    items: ['Calendário guiado por demanda e eventos', 'Campanha por público, origem e momento', 'Cada real investido medido em reservas', 'Decisões acompanhadas no DRE'],
  },
}

export const dre = {
  label: 'Como medimos',
  title: 'Crescimento que aparece no *resultado*.',
  lead: 'Não medimos curtidas. Medimos o que muda no DRE: quanto entra, quanto sai e quanto fica.',
  cards: [
    { key: 'Faturamento', arrow: '↑', text: 'Mais ocupação, diária certa e consumo extra' },
    { key: 'Custos', arrow: '↓', text: 'Menos comissão e menos trabalho manual' },
    { key: 'Lucro', arrow: '↑', text: 'Mais dinheiro no caixa no fim do mês' },
  ],
}

export const opportunity = {
  label: 'A oportunidade',
  title: 'Aracaju recebe cada vez mais visitantes. O VIDAM está na Orla, no centro dessa *demanda*.',
  stats: [
    { value: '1,38', unit: 'mi', label: 'Passageiros no aeroporto em 2025' },
    { value: '+43', unit: '%', label: 'Crescimento desde 2022' },
    { value: '219', unit: 'mil', label: 'Turistas na Orla no São João' },
  ],
  chart: {
    title: 'Passageiros · Aeroporto de Aracaju',
    bars: [
      { label: '2022', value: 961575 },
      { label: '2025', value: 1377686 },
    ],
  },
  source: 'Fontes: Aena via Prefeitura de Aracaju (jan/2026) · Governo de Sergipe (mai/2026)',
}

export const platforms = {
  label: 'Plataformas e canais',
  title: 'Hotéis de lazer de alto padrão já vendem a maior parte *direto*.',
  split: {
    title: 'Origem das reservas em resorts brasileiros (2024)',
    parts: [
      { label: 'Canais diretos', value: 75.5 },
      { label: 'Operadoras', value: 14 },
      { label: 'OTAs', value: 10 },
    ],
    source: 'Resorts Brasil e Noctua Advisory, 33 resorts (Panrotas, mar/2026)',
  },
  ticket: {
    title: 'Valor médio por reserva',
    rows: [
      { label: 'Site próprio do hotel', value: 516 },
      { label: 'OTAs', value: 312 },
    ],
    unit: 'US$',
    source: 'SiteMinder, Hotel Booking Trends 2025 (20 mercados)',
  },
  monitor: {
    title: 'O que vamos monitorar continuamente',
    items: ['Preços e disponibilidade da concorrência nas OTAs', 'Posição e nota do VIDAM nas plataformas', 'Antecedência e origem das reservas', 'Peso de cada canal na receita'],
  },
}

export const calendar = {
  label: 'Calendário da cidade',
  title: 'Cada pico de demanda vira uma *campanha planejada*.',
  months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  /** 0 = baixa, 1 = média, 2 = alta (sazonalidade geral do destino) */
  season: [2, 2, 2, 0, 0, 1, 1, 0, 1, 1, 2, 2],
  events: [
    { month: 0, name: 'Férias e verão', play: 'Pacotes família e estadias longas' },
    { month: 1, name: 'Carnaval', play: 'Venda antecipada e tarifa por demanda' },
    { month: 5, name: 'São João e Forró Caju', play: 'Campanhas em mercados emissores' },
    { month: 6, name: 'Férias de julho', play: 'Ofertas para o Nordeste e Sudeste' },
    { month: 10, name: 'Pré-Caju', play: 'Ocupação com tarifa premium' },
    { month: 11, name: 'Réveillon', play: 'Experiências e pacotes de alto valor' },
  ],
  highlights: [
    { value: '77%', label: 'ocupação hoteleira média no São João 2025' },
    { value: '2.157', label: 'eventos no calendário de Sergipe em 2025' },
    { value: '60', label: 'dias de festejos juninos no estado' },
  ],
  lowSeason: 'Abril a agosto concentram as chuvas: é onde eventos corporativos, público local e experiências sustentam a ocupação.',
  source: 'Governo de Sergipe (mai/2026) · Prefeitura de Aracaju · Melhores Destinos. Datas de eventos variam a cada ano.',
}

export const gains = {
  label: 'Onde o VIDAM pode ganhar mais',
  title: 'Quatro oportunidades de *faturamento* já na mesa.',
  items: [
    {
      icon: 'key',
      title: 'Reservas diretas',
      today: 'Motor de reserva sem preços à vista no site e páginas com links quebrados.',
      action: 'Site de alta conversão, preços visíveis, CRM e remarketing.',
      impact: ['↓ Comissões', '↑ Margem'],
    },
    {
      icon: 'wine',
      title: 'Experiências premium',
      today: 'Spa, rooftop com borda infinita, Raízes e Club Lounge com potencial de venda em pacotes.',
      action: 'Pacotes e upgrades oferecidos em cada etapa da reserva.',
      impact: ['↑ Receita por hóspede'],
    },
    {
      icon: 'zap',
      title: 'Público de fora do hotel',
      today: 'Café com 130 itens, chá da tarde, day use e spa já abertos ao público.',
      action: 'Campanhas locais recorrentes e agenda de experiências.',
      impact: ['↑ Novas receitas'],
    },
    {
      icon: 'calendar',
      title: 'Eventos e corporativo',
      today: 'Auditório e estrutura de eventos capazes de sustentar a baixa temporada.',
      action: 'Prospecção ativa de eventos, congressos e empresas.',
      impact: ['↑ Ocupação', '↑ Faturamento'],
    },
  ],
  todayLabel: 'Ponto de partida',
  actionLabel: 'O que faremos',
  note: 'Levantamento a partir da análise externa do hotel. Validamos cada ponto no diagnóstico.',
}

export const data = {
  label: 'Inteligência de dados',
  title: 'Um sistema que lê o mercado e decide a *próxima campanha*.',
  inputs: ['Ocupação e ritmo de reservas', 'Diária média e RevPAR', 'Calendário de eventos', 'Concorrência nas OTAs', 'Origem e perfil dos hóspedes', 'Desempenho de mídia'],
  center: 'Painel Octus',
  outputs: ['Campanha por evento', 'Oferta por público e origem', 'Tarifa por demanda', 'Remarketing de ex-hóspedes'],
  example: {
    label: 'Exemplo de gatilho',
    text: 'Ocupação abaixo da meta para o São João e mais buscas vindas de São Paulo: campanha para SP com pacote rooftop + spa, ativada automaticamente.',
  },
}

export type LeverChart = 'occupancy' | 'revpar' | 'ticket' | 'time'

export const levers = {
  label: 'Estratégia',
  title: 'Quatro alavancas de faturamento e uma base de inteligência.',
  ticketParts: ['Diária', 'Experiências', 'Eventos'],
  items: [
    {
      tab: 'Ocupação',
      title: 'Mais hóspedes o ano inteiro',
      points: ['Campanhas pontuais por evento e sazonalidade', 'Mercados emissores: SP, MG, PE, BA e DF', 'Eventos e corporativo na baixa temporada'],
      insight: 'O São João teve 77% de ocupação hoteleira média em 2025. O desafio é levar essa demanda para os outros meses.',
      tags: ['↑ Ocupação', '↑ Faturamento'],
      chart: 'occupancy' as LeverChart,
      chartLabel: 'Ocupação ao longo do ano',
      photo: 'moment',
    },
    {
      tab: 'Receita por quarto',
      title: 'Cada diária no preço certo',
      points: ['Preço dinâmico guiado por demanda e eventos', 'Reserva direta com preços visíveis', 'Upgrade de suítes e Club Lounge'],
      insight: 'No site próprio, a reserva média vale cerca de 65% mais do que nas OTAs (SiteMinder 2025).',
      tags: ['↑ Faturamento', '↑ Margem'],
      chart: 'revpar' as LeverChart,
      chartLabel: 'Receita por quarto disponível',
      photo: 'room',
    },
    {
      tab: 'Receita por hóspede',
      title: 'Mais valor em cada estadia',
      points: ['Pacotes com spa, rooftop e gastronomia', 'Ofertas personalizadas antes e durante a estadia', 'Experiências exclusivas no Club Lounge'],
      insight: 'O VIDAM já tem spa, rooftop e restaurante. Vender essas experiências junto com a diária aumenta o ticket.',
      tags: ['↑ Receita por hóspede'],
      chart: 'ticket' as LeverChart,
      chartLabel: 'Composição da receita por hóspede',
      photo: 'spa',
    },
    {
      tab: 'Novas monetizações',
      title: 'Diversificar as fontes de receita',
      points: ['Day use, café e chá da tarde para o público local', 'Eventos, congressos e encontros corporativos', 'Integração com o VIDAM Náutico Clube & Praias'],
      insight: 'O ecossistema VIDAM vai além do hotel: o Náutico amplia o que pode ser vendido em pacotes.',
      tags: ['↑ Novas receitas'],
      chart: 'ticket' as LeverChart,
      chartLabel: 'Fontes de receita',
      parts: ['Hospedagem', 'Público local', 'Eventos e Náutico'],
      photo: 'nautico',
    },
    {
      tab: 'Inteligência e operação',
      title: 'Decisões com dados, operação sem atrito',
      points: ['Painel de indicadores e DRE', 'CRM e automação de WhatsApp', 'Check-in online e jornada digital'],
      insight: 'Menos tarefa manual na recepção, mais tempo para um atendimento à altura de um 5 estrelas.',
      tags: ['↓ Custos', '↑ Lucro'],
      chart: 'time' as LeverChart,
      chartLabel: 'Tempo da equipe em tarefas manuais',
      photo: 'restaurant',
    },
  ],
}

export const plan = {
  label: 'O que vamos fazer',
  title: 'O plano de execução, frente por frente.',
  lead: 'Cada entrega tem um objetivo claro no resultado do VIDAM.',
  fronts: [
    {
      name: 'Dados e tecnologia',
      goal: '↑ Assertividade · ↓ Custos',
      team: 'Time de tech · Dados e métricas',
      items: ['Painel de indicadores e DRE', 'Monitoramento de concorrência e OTAs', 'Calendário de demanda e eventos', 'CRM e automação de WhatsApp', 'Check-in online'],
    },
    {
      name: 'Aquisição',
      goal: '↑ Ocupação',
      team: 'Gestores de tráfego · Diretor de marketing',
      items: ['Campanhas pontuais por evento', 'Tráfego pago por público e origem', 'Mercados emissores prioritários', 'Prospecção corporativa e de eventos', 'Conteúdo e influência'],
    },
    {
      name: 'Receita',
      goal: '↑ Faturamento por quarto',
      team: 'Growth 360° · Dados e métricas',
      items: ['Preço dinâmico por demanda', 'Reserva direta com preços visíveis', 'Upgrade de suítes e Club Lounge', 'Remarketing de ex-hóspedes', 'Acompanhamento de ADR e RevPAR'],
    },
    {
      name: 'Experiência e novas receitas',
      goal: '↑ Receita por hóspede',
      team: 'Diretor de marketing · Expansão',
      items: ['Pacotes com spa, rooftop e gastronomia', 'Day use, café e chá para o público local', 'Agenda de experiências', 'Integração com o VIDAM Náutico'],
    },
  ],
}

export const projection = {
  label: 'Para onde vamos',
  title: 'Novas fontes de receita somadas a uma operação mais *inteligente*.',
  layers: ['Diárias', 'Reservas diretas', 'Experiências', 'Novas receitas'],
  profit: 'Lucro',
  x: ['Hoje', 'Ciclo 1', 'Ciclo 2', 'Ciclo 3'],
  note: 'Cenário ilustrativo. Metas e números são definidos no diagnóstico, a partir do DRE do hotel.',
}

export const method = {
  label: 'Metodologia',
  title: 'Do diagnóstico à *escala*.',
  steps: [
    { name: 'Diagnosticar', text: 'Raio-X da operação, dos canais e do DRE' },
    { name: 'Estruturar', text: 'Painel de dados, plano, metas e calendário' },
    { name: 'Ativar', text: 'Campanhas, pacotes e automações no ar' },
    { name: 'Otimizar', text: 'Ajustes semanais guiados por dados' },
    { name: 'Escalar', text: 'Mais do que funciona, novos mercados' },
  ],
}

export const rollout = {
  label: 'Implantação',
  title: 'Roteiro de implantação em ciclos.',
  lead: 'Cada ciclo entrega resultado e prepara o próximo.',
  cycles: [
    { name: 'Ciclo 1', sub: 'Diagnóstico e inteligência', items: ['Auditoria da operação e dos canais', 'DRE e indicadores base', 'Painel de dados e calendário'], kpi: 'Linha de base definida' },
    { name: 'Ciclo 2', sub: 'Ativação', items: ['Site e reserva direta', 'Campanhas por evento e público', 'Pacotes e upgrades'], kpi: 'Ocupação e receita por hóspede em alta' },
    { name: 'Ciclo 3', sub: 'Escala', items: ['Preço dinâmico', 'Novas monetizações', 'Novos mercados emissores'], kpi: 'Margem e lucro em alta' },
  ],
}

export const closing = {
  title: 'O próximo estágio do VIDAM começa com um *QG estratégico*.',
  next: 'Próximo passo',
  nextText: 'Diagnóstico da operação, dos dados e do DRE.',
  receives: ['Raio-X da operação, dos canais e do DRE', 'Mapa de oportunidades priorizadas', 'Plano de ação com metas e calendário'],
  signature: 'Studio Octus × VIDAM Hotel',
}
