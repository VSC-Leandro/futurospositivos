

import { Initiative, InitiativeCategory, ForumItemData, ForumTag, ForumTopic, TimelineEvent, ForumReply } from './types';
import { MegaphoneIcon, StarIcon, ConstructionIcon, BooksIcon } from './components/icons';

const coords: { [key: string]: [number, number] } = {
  BR: [-15.8267, -47.9218], // Brasília
  CL: [-33.4489, -70.6693], // Santiago
  CO: [4.7110, -74.0721],   // Bogotá
  BO: [-16.4897, -68.1193], // La Paz
  MX: [19.4326, -99.1332],  // Mexico City
};

const getCoords = (countryCode: string) => {
    const base = coords[countryCode] || [-14.2350, -51.9253]; // Default to Brazil center
    return {
        lat: base[0] + (Math.random() - 0.5) * 10,
        lng: base[1] + (Math.random() - 0.5) * 10,
    };
}

const newProjects: Initiative[] = [
  {
    id: 3,
    name: "Acesso aos Serviços de Saúde Sexual Reprodutiva, Proteção, Justiça, Segurança e Assistência Social às Mulheres e Meninas da Região Amazônica",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Economia do Cuidado",
      "Empreendimento Social",
      "Estilos de Vida Sustentáveis",
      "Juventudes"
    ],
    details: {
      Responsavel: "Instituto de Estudos Socioeconômicos (INESC)",
      Local: "América Latina, Brasil",
      Descrição: "O projeto visa fortalecer as capacidades institucionais de ONGs e OSCs na Região Amazônica, com foco na promoção de serviços de saúde sexual e reprodutiva, proteção e justiça para mulheres e meninas."
    },
    ...getCoords("BR"),
    avatar: "https://picsum.photos/seed/proj3/160/160",
    banner: "https://picsum.photos/seed/proj3banner/1200/250",
    countryCode: "BR",
    campo: "Economia do Cuidado"
  },
  {
    id: 4,
    name: "Adaptação Climática no Brasil e o Enfrentamento às Desigualdades",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Governança",
      "Estilos de Vida Sustentáveis",
      "Uso da Terra"
    ],
    details: {
      Responsavel: "Instituto de Estudos Socioeconômicos (INESC)",
      Local: "América Latina, Brasil",
      Descrição: "O projeto busca fortalecer a agenda de adaptação climática, construindo mecanismos de financiamento e de governança robustos, com participação social em todas as etapas do processo, desde o planejamento até a implementação."
    },
    ...getCoords("BR"),
    avatar: "https://picsum.photos/seed/proj4/160/160",
    banner: "https://picsum.photos/seed/proj4banner/1200/250",
    countryCode: "BR",
    campo: "Governança"
  },
  {
    id: 5,
    name: "Advocacia por Financiamento Adequado para a Educação de Meninas",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Governança",
      "Juventudes"
    ],
    details: {
      Responsavel: "Instituto de Estudos Socioeconômicos (INESC)",
      Local: "América Latina, Brasil",
      Descrição: "O projeto advoga por um financiamento adequado para a educação de meninas, promovendo a inclusão da história africana, afro-brasileira e indígena nos currículos escolares e buscando a redução do número de escolas cívico-militares, especialmente no DF."
    },
    ...getCoords("BR"),
    avatar: "https://picsum.photos/seed/proj5/160/160",
    banner: "https://picsum.photos/seed/proj5banner/1200/250",
    countryCode: "BR",
    campo: "Governança"
  },
  {
    id: 6,
    name: "Água, Clima e Democracia no Chile",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Governança"
    ],
    details: {
      Responsavel: "Newenko",
      Local: "América Latina, Chile",
      Descrição: "Contribuir para o fortalecimento da governança da água no Chile, através da análise crítica sobre esta matéria, que integre os desafios climáticos, as recentes mudanças regulatórias e o dinâmico cenário político nacional de 2025."
    },
    ...getCoords("CL"),
    avatar: "https://picsum.photos/seed/proj6/160/160",
    banner: "https://picsum.photos/seed/proj6banner/1200/250",
    countryCode: "CL",
    campo: "Governança"
  },
  {
    id: 7,
    name: "Apoio Geral para o Monitoramento do Orçamento Público em Favor da Justiça Social e no Enfrentamento das Desigualdades",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Cidades",
      "Governança",
      "Juventudes"
    ],
    details: {
      Responsavel: "Instituto de Estudos Socioeconômicos (Realizado pelo Inesc)",
      Local: "América Latina, Brasil",
      Descrição: "O projeto busca promover a justiça social, a equidade e a justiça ambiental, fortalecendo os processos democráticos e fomentando a participação ativa da sociedade no enfrentamento das desigualdades no Brasil e internacionalmente."
    },
    ...getCoords("BR"),
    avatar: "https://picsum.photos/seed/proj7/160/160",
    banner: "https://picsum.photos/seed/proj7banner/1200/250",
    countryCode: "BR",
    campo: "Cidades"
  },
  {
    id: 8,
    name: "Bens Naturais: Mudança Climática e Extrativismo Mineiro",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Governança"
    ],
    details: {
      Responsavel: "Fundación Terram",
      Local: "América Latina, Chile",
      Descrição: "Reflexão sobre o modelo de desenvolvimento do país e da região andina, com discussão de propostas de políticas em matéria de gestão de bens naturais e distribuição equitativa. Foca em dois eixos principais: crise climática e o modelo mineiro extrativo."
    },
    ...getCoords("CL"),
    avatar: "https://picsum.photos/seed/proj8/160/160",
    banner: "https://picsum.photos/seed/proj8banner/1200/250",
    countryCode: "CL",
    campo: "Governança"
  },
  {
    id: 9,
    name: "Biodiversidade e Negociações: Posicionando Alternativas de Sustentabilidade na COP16",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Ativismo e Direitos",
      "Democracia",
      "Governança"
    ],
    details: {
      Responsavel: "The Hbs em colaboração com 30 organizações parceiras.",
      Local: "América Latina, Colômbia",
      Descrição: "Mais de 30 organizações nacionais participaram da COP16 para submeter propostas ao Plano de Biodiversidade da Colômbia e monitorar as negociações globais, defendendo os direitos comunitários na participação, financiamento e proteção ambiental."
    },
    ...getCoords("CO"),
    avatar: "https://picsum.photos/seed/proj9/160/160",
    banner: "https://picsum.photos/seed/proj9banner/1200/250",
    countryCode: "CO",
    campo: "Ativismo e Direitos"
  },
  {
    id: 10,
    name: "Capacidades Cidadãs para a Ação Climática e a Incidência Política",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Governança"
    ],
    details: {
      Responsavel: "Ecosur, Universidades (Chile e de Concepción), organizações de mulheres, organizações ambientais e territoriais.",
      Local: "América Latina, Chile",
      Descrição: "Se articulam as capacidades de organizações civis de distintos âmbitos que impulsionem uma ação transformadora frente à mudança climática, com a profundidade e urgência que este desafio requer."
    },
    ...getCoords("CL"),
    avatar: "https://picsum.photos/seed/proj10/160/160",
    banner: "https://picsum.photos/seed/proj10banner/1200/250",
    countryCode: "CL",
    campo: "Governança"
  },
  {
    id: 11,
    name: "Capacitação em Cinema Ambiental com Guardiãs das Matas - Cine Educação",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Agroecologia",
      "Alimentação Saudável",
      "Arte",
      "Cidades",
      "Cultura",
      "Economia do Cuidado",
      "Estilos de Vida Sustentáveis",
      "Outros Imaginários",
      "Tecnologia",
      "Uso da Terra"
    ],
    details: {
      Responsavel: "Bernard Batista Brito (?)",
      Local: "América Latina, Brasil",
      Descrição: "A capacitação em Cinema Ambiental, realizada em parceria com a Secretaria do Meio Ambiente, realizou mais de 40 oficinas de produção audiovisual com mulheres agentes ambientais de comunidades cariocas."
    },
    ...getCoords("BR"),
    avatar: "https://picsum.photos/seed/proj11/160/160",
    banner: "https://picsum.photos/seed/proj11banner/1200/250",
    countryCode: "BR",
    campo: "Agroecologia"
  },
  {
    id: 12,
    name: "Centro de Proteção Integral",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Economia do Cuidado"
    ],
    details: {
      Responsavel: "Justiça Global",
      Local: "América Latina, Brasil",
      Descrição: "O Centro de Proteção Integral é um projeto de realocação temporária e acolhimento para defensoras/es de direitos humanos, que estão em situação de risco de vida, emergência ou estresse extremo devido à sua atuação política."
    },
    ...getCoords("BR"),
    avatar: "https://picsum.photos/seed/proj12/160/160",
    banner: "https://picsum.photos/seed/proj12banner/1200/250",
    countryCode: "BR",
    campo: "Economia do Cuidado"
  },
  {
    id: 13,
    name: "Clima, Uso da Terra e Fluxo de Dados: Conciliando Direitos Individuais e Coletivos",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Tecnologia",
      "Uso da Terra"
    ],
    details: {
      Responsavel: "Data Privacy Brasil",
      Local: "América Latina, Brasil",
      Descrição: "O projeto fomenta o debate sobre governança de dados e políticas ambientais a partir da chave da transparência. Buscamos um entendimento jurídico e político sobre a abertura de dados pessoais para combate a mudanças climáticas."
    },
    ...getCoords("BR"),
    avatar: "https://picsum.photos/seed/proj13/160/160",
    banner: "https://picsum.photos/seed/proj13banner/1200/250",
    countryCode: "BR",
    campo: "Tecnologia"
  },
  {
    id: 14,
    name: "Cocôzap - Mapeamento, Mobilização e Incidência em Saneamento",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Cidades",
      "Tecnologia"
    ],
    details: {
      Responsavel: "data_labe",
      Local: "América Latina, Brasil",
      Descrição: "A tecnologia tem como escopo central de fomentar um canal de denúncia, debate e proposição em saneamento, a partir de mapeamentos participativos sobre problemas de saneamento na Maré."
    },
    ...getCoords("BR"),
    avatar: "https://picsum.photos/seed/proj14/160/160",
    banner: "https://picsum.photos/seed/proj14banner/1200/250",
    countryCode: "BR",
    campo: "Cidades"
  },
  {
    id: 15,
    name: "Coletivo Varadouro",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Juventudes"
    ],
    details: {
      Responsavel: "Juventudes extrativistas.",
      Local: "América Latina, Brasil",
      Descrição: "Empoderamento, mobilização e formação."
    },
    ...getCoords("BR"),
    avatar: "https://picsum.photos/seed/proj15/160/160",
    banner: "https://picsum.photos/seed/proj15banner/1200/250",
    countryCode: "BR",
    campo: "Juventudes"
  },
  {
    id: 16,
    name: "Construindo um Novo Modelo Florestal",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Uso da Terra"
    ],
    details: {
      Responsavel: "Centro Internacional Cabo de Hornos (CHIC); CIEM Aconcagua; AIFBN",
      Local: "América Latina, Chile",
      Descrição: "Elaborar um policy brief e estratégia comunicacional que dê a conhecer a proposta de um novo modelo florestal (AIFBN), abordando a seca, as inundações, os incêndios florestais, a desertificação e as iniquidades socioeconômicas do modelo atual."
    },
    ...getCoords("CL"),
    avatar: "https://picsum.photos/seed/proj16/160/160",
    banner: "https://picsum.photos/seed/proj16banner/1200/250",
    countryCode: "CL",
    campo: "Uso da Terra"
  },
  {
    id: 17,
    name: "Defesa da Democracia e dos Direitos Sociais e Ambientais",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Governança"
    ],
    details: {
      Responsavel: "Instituto de Estudos Socioeconômicos (Realizado por organizações e movimentos sociais)",
      Local: "América Latina, Brasil",
      Descrição: "O projeto busca minimizar os retrocessos nos direitos sociais, ambientais e políticos no Brasil, com ênfase no monitoramento do desmonte das políticas públicas e no fortalecimento da disputa por um sistema político participativo, justo e inclusivo."
    },
    ...getCoords("BR"),
    avatar: "https://picsum.photos/seed/proj17/160/160",
    banner: "https://picsum.photos/seed/proj17banner/1200/250",
    countryCode: "BR",
    campo: "Governança"
  },
  {
    id: 18,
    name: "Direitos Sociais e Ambientais como Parte do Federalismo Climático",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Governança"
    ],
    details: {
      Responsavel: "Instituto de Estudos Socioeconômicos (INESC)",
      Local: "América Latina, Brasil",
      Descrição: "O projeto busca reconhecer os direitos socioambientais como parte fundamental do federalismo climático, promovendo uma governança ambiental robusta e medidas de proteção para grupos vulneráveis aos impactos das mudanças climáticas."
    },
    ...getCoords("BR"),
    avatar: "https://picsum.photos/seed/proj18/160/160",
    banner: "https://picsum.photos/seed/proj18banner/1200/250",
    countryCode: "BR",
    campo: "Governança"
  },
  {
    id: 19,
    name: "Diálogos para a Incidência por Justiça Reprodutiva",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Economia do Cuidado"
    ],
    details: {
      Responsavel: "Glaucia Marinho (?) (Realizado pelo SOS Corpo)",
      Local: "América Latina, Brasil",
      Descrição: "Para enfrentar o fundamentalismo, construímos um espaço de diálogo sobre justiça reprodutiva entre mulheres do movimento feminista e candidatas às eleições de 2024 e produzimos um mapa de argumentos feministas por justiça reprodutiva para incidir nas eleições."
    },
    ...getCoords("BR"),
    avatar: "https://picsum.photos/seed/proj19/160/160",
    banner: "https://picsum.photos/seed/proj19banner/1200/250",
    countryCode: "BR",
    campo: "Economia do Cuidado"
  },
  {
    id: 20,
    name: "Encontro de Estudantes do CR2",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Juventudes"
    ],
    details: {
      Responsavel: "CR2 em conjunto com a Faculdade de Ciências Físicas e Matemáticas da Universidade do Chile.",
      Local: "América Latina, Chile",
      Descrição: "Gerar um espaço interdisciplinar e colaborativo que facilite o intercâmbio de conhecimentos e experiências através da apresentação de teses e investigações."
    },
    ...getCoords("CL"),
    avatar: "https://picsum.photos/seed/proj20/160/160",
    banner: "https://picsum.photos/seed/proj20banner/1200/250",
    countryCode: "CL",
    campo: "Juventudes"
  },
  {
    id: 21,
    name: "Escola de Ecologia Política",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Juventudes"
    ],
    details: {
      Responsavel: "CEUS Chile e HBS Chile",
      Local: "América Latina, Chile",
      Descrição: "Desenvolver uma Escola de Formação consistente em uma série de oficinas sobre ecologia política para jovens com o fim de desenvolver o pensamento crítico das novas gerações em torno das temáticas ambientais e climáticas."
    },
    ...getCoords("CL"),
    avatar: "https://picsum.photos/seed/proj21/160/160",
    banner: "https://picsum.photos/seed/proj21banner/1200/250",
    countryCode: "CL",
    campo: "Juventudes"
  },
  {
    id: 22,
    name: "Feira Agroecológica de Mulheres Negras Contra a Violência, no Baixo Sul da Bahia",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Agroecologia",
      "Alimentação Saudável",
      "Economia do Cuidado",
      "Espiritualidade",
      "Estilos de Vida Sustentáveis",
      "Uso da Terra"
    ],
    details: {
      Responsavel: "Articulação de Mulheres do Baixo Sul da Bahia (AMNBS), Koinonia.",
      Local: "América do Sul / América Latina, Brasil",
      Descrição: "Inicialmente impulsionada por organizações, a feira (agora na 14ª edição) é hoje auto-organizada pelas mulheres da região. O projeto defende a conexão entre agroecologia, autonomia econômica e o combate à violência de gênero e ao racismo religioso."
    },
    ...getCoords("BR"),
    avatar: "https://picsum.photos/seed/proj22/160/160",
    banner: "https://picsum.photos/seed/proj22banner/1200/250",
    countryCode: "BR",
    campo: "Agroecologia"
  },
  {
    id: 23,
    name: "Forjando a Transição Socioecológica Justa no Chile a partir da Ação Política Climática",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Governança"
    ],
    details: {
      Responsavel: "Ecosur",
      Local: "América Latina, Chile",
      Descrição: "Influenciar os tomadores de decisão a nível local e parlamentar para abordar la transição socioecológica justa desde as economias baixas em carbono e a construção de sociedades mais resilientes desde a adaptação e restauração como eixo central."
    },
    ...getCoords("CL"),
    avatar: "https://picsum.photos/seed/proj23/160/160",
    banner: "https://picsum.photos/seed/proj23banner/1200/250",
    countryCode: "CL",
    campo: "Governança"
  },
  {
    id: 24,
    name: "Fortalecimento da Governança e Justiça Ambiental em Recursos Evaporíticos",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Tecnologia"
    ],
    details: {
      Responsavel: "FOBOMADE",
      Local: "América Latina, Bolívia",
      Descrição: "Recuperar os enfoques sistêmico-tecnológicos, de sustentabilidade ambiental e desenvolvimento local da Estratégia Nacional de Recursos Evaporíticos para aportar na governança e participação impulsionando e aprofundando a justiça social e ambiental."
    },
    ...getCoords("BO"),
    avatar: "https://picsum.photos/seed/proj24/160/160",
    banner: "https://picsum.photos/seed/proj24banner/1200/250",
    countryCode: "BO",
    campo: "Tecnologia"
  },
  {
    id: 25,
    name: "Governança e Incidência Política Florestal",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Uso da Terra"
    ],
    details: {
      Responsavel: "AIFBN (Agrupación De Ingenieros Forestales Por El Bosque Nativo); Unión Europea; Centro Internacional Cabo de Hornos (CHIC); CIEM Aconcagua.",
      Local: "América Latina, Chile",
      Descrição: "Promover um novo modelo florestal sustentável e equitativo que enfrente os desafios climáticos e socioambientais no Chile."
    },
    ...getCoords("CL"),
    avatar: "https://picsum.photos/seed/proj25/160/160",
    banner: "https://picsum.photos/seed/proj25banner/1200/250",
    countryCode: "CL",
    campo: "Uso da Terra"
  },
  {
    id: 26,
    name: "Grito das Periferias: Pelo Direito à Cidade e à Cultura",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Cidades",
      "Governança",
      "Juventudes"
    ],
    details: {
      Responsavel: "Instituto de Estudos Socioeconômicos (Realizado pela SEJUS)",
      Local: "América Latina, Brasil",
      Descrição: "O projeto busca capacitar 75 adolescentes e jovens periféricos nas temáticas de orçamento público, direitos humanos e direito à cidade, com foco nas questões de raça e gênero, para que possam influenciar o orçamento público do Distrito Federal."
    },
    ...getCoords("BR"),
    avatar: "https://picsum.photos/seed/proj26/160/160",
    banner: "https://picsum.photos/seed/proj26banner/1200/250",
    countryCode: "BR",
    campo: "Cidades"
  },
  {
    id: 27,
    name: "GT Clima da Frente Parlamentar Mista Ambientalista",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Governança"
    ],
    details: {
      Responsavel: "Realizado pelo Instituto Clima de Política.",
      Local: "América Latina, Brasil",
      Descrição: "Promover o fortalecimento da agenda climática no Congresso Nacional, por meio da incidência política e da participação social das organizações da sociedade civil que compõem o grupo de trabalho."
    },
    ...getCoords("BR"),
    avatar: "https://picsum.photos/seed/proj27/160/160",
    banner: "https://picsum.photos/seed/proj27banner/1200/250",
    countryCode: "BR",
    campo: "Governança"
  },
  {
    id: 28,
    name: "Rumo a Associações Comerciais e Investidores Sustentáveis entre Chile e Alemanha",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Tecnologia"
    ],
    details: {
      Responsavel: "Rumbo Colectivo",
      Local: "América Latina, Chile",
      Descrição: "A investigação se centra nos interesses industriais chave e estratégias entre Chile e Alemanha relacionadas com o comércio, o investimento e as cadeias de valor em setores vinculados às energias renováveis, o hidrogênio e os minerais."
    },
    ...getCoords("CL"),
    avatar: "https://picsum.photos/seed/proj28/160/160",
    banner: "https://picsum.photos/seed/proj28banner/1200/250",
    countryCode: "CL",
    campo: "Tecnologia"
  },
  {
    id: 29,
    name: "Impacto na Permanência da Gestão Comunitária da Água e Território Rural Camponês",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Agroecologia",
      "Economia do Cuidado",
      "Economia Solidária",
      "Governança",
      "Uso da Terra"
    ],
    details: {
      Responsavel: "Penca de Sabila.",
      Local: "América Latina, Colômbia",
      Descrição: "Uma lei sobre gestão da água baseada na comunidade, apoiada por um movimento nacional, busca garantir que o Estado colombiano reconheça e fortaleça a gestão de bens comuns, o acesso a serviços públicos, a proteção ambiental e a redução da desigualdade."
    },
    ...getCoords("CO"),
    avatar: "https://picsum.photos/seed/proj29/160/160",
    banner: "https://picsum.photos/seed/proj29banner/1200/250",
    countryCode: "CO",
    campo: "Agroecologia"
  },
  {
    id: 30,
    name: "Incidência em Políticas Públicas para a Transição Socioecológica e a Justiça Climática",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Governança"
    ],
    details: {
      Responsavel: "Chile Sustentable",
      Local: "América Latina, Chile",
      Descrição: "Organizar a sociedade civil, movimentos sociais, atores políticos e científicos para consolidar alianças que implementem ou elaborem projetos de lei e propostas de política para a transição energética e socioecológica justa."
    },
    ...getCoords("CL"),
    avatar: "https://picsum.photos/seed/proj30/160/160",
    banner: "https://picsum.photos/seed/proj30banner/1200/250",
    countryCode: "CL",
    campo: "Governança"
  },
  {
    id: 31,
    name: "Investimentos das AFP em Empresas Extrativistas",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Uso da Terra"
    ],
    details: {
      Responsavel: "Fundación Sol",
      Local: "América Latina, Chile",
      Descrição: "Analisar a relação que existe entre o modelo de pensões chileno e as empresas e indústrias extrativas e de alto impacto ambiental entre 2010 e 2024."
    },
    ...getCoords("CL"),
    avatar: "https://picsum.photos/seed/proj31/160/160",
    banner: "https://picsum.photos/seed/proj31banner/1200/250",
    countryCode: "CL",
    campo: "Uso da Terra"
  },
  {
    id: 32,
    name: "A Cochonilha (La Cochinilla)",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Arte",
      "Cultura",
      "Outros Imaginários"
    ],
    details: {
      Responsavel: "Hagamos lumbre (coletivo de artistas zapotecos, mixtecos e \"chilangos\").",
      Local: "América Latina, México",
      Descrição: "Um acampamento de produção de animação e criação de literatura em línguas originárias, funcionando como um projeto de formação não escolarizada."
    },
    ...getCoords("MX"),
    avatar: "https://picsum.photos/seed/proj32/160/160",
    banner: "https://picsum.photos/seed/proj32banner/1200/250",
    countryCode: "MX",
    campo: "Arte"
  },
  {
    id: 33,
    name: "As Mulheres Rurais Incidem no Debate Político e nas Políticas Públicas para o País",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Agroecologia"
    ],
    details: {
      Responsavel: "ANAMURI",
      Local: "América Latina, Chile",
      Descrição: "Elaborar e implementar um plan de incidência política para impulsionar políticas de enfrentamento da crise climática que apoiem e protejam a agricultura camponesa e indígena, com ênfase no papel e proteção das mulheres."
    },
    ...getCoords("CL"),
    avatar: "https://picsum.photos/seed/proj33/160/160",
    banner: "https://picsum.photos/seed/proj33banner/1200/250",
    countryCode: "CL",
    campo: "Agroecologia"
  },
  {
    id: 34,
    name: "Lideranças para Fortalecer a Participação Política e a Democracia",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Juventudes"
    ],
    details: {
      Responsavel: "Fundación La Casa Común (LCC); com apoio de intelectuais e dirigentes políticos e sociais.",
      Local: "América Latina, Chile",
      Descrição: "Elaboração de conteúdos temáticos e formação de jovens e adultos jovens sobre a complexidade da situação da democracia e dos direitos humanos a nível nacional e internacional e alternativas para seu fortalecimento."
    },
    ...getCoords("CL"),
    avatar: "https://picsum.photos/seed/proj34/160/160",
    banner: "https://picsum.photos/seed/proj34banner/1200/250",
    countryCode: "CL",
    campo: "Juventudes"
  },
  {
    id: 35,
    name: "Mãos Abertas: Iniciativa para a Integração da Comunidade Migrante no Chile",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Mobilidade"
    ],
    details: {
      Responsavel: "Fundación Sitadel; e o Sindicato de Trabalhadores N° 2 da Universidade Diego Portales.",
      Local: "América Latina, Chile",
      Descrição: "Promover o intercâmbio e a integração da população migrante no Chile mediante o fortalecimento da consciência cultural, o desenvolvimento de competências interculturais e a implementação de programas informados e sustentáveis."
    },
    ...getCoords("CL"),
    avatar: "https://picsum.photos/seed/proj35/160/160",
    banner: "https://picsum.photos/seed/proj35banner/1200/250",
    countryCode: "CL",
    campo: "Mobilidade"
  },
  {
    id: 36,
    name: "Mapa das Desigualdades: Formação e Incidência por Transparência",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Governança",
      "Juventudes"
    ],
    details: {
      Responsavel: "Instituto de Estudos Socioeconômicos (Realizado com jovens da periferia do DF)",
      Local: "América Latina, Brasil",
      Descrição: "Formar jovens, prioritariamente negros e periféricos, para monitorar o orçamento público do DF nas áreas de educação, mobilidade urbana, raça e gênero, e atuar pela transparência fiscal e redução das desigualdades no Distrito Federal."
    },
    ...getCoords("BR"),
    avatar: "https://picsum.photos/seed/proj36/160/160",
    banner: "https://picsum.photos/seed/proj36banner/1200/250",
    countryCode: "BR",
    campo: "Governança"
  },
  {
    id: 37,
    name: "MariaLab",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Governança",
      "Juventudes",
      "Tecnologia"
    ],
    details: {
      Responsavel: "MariaLab.",
      Local: "América do Sul, América Latina, Brasil",
      Descrição: "As ações do projeto se dividem em três eixos: 1) AUTONOMIA, com a construção de infraestruturas de comunicação autônomas; 2) PREVENÇÃO, através de assessoria técnica a grupos e comunidades defensoras de direitos humanos, formações e produção de conteúdo."
    },
    ...getCoords("BR"),
    avatar: "https://picsum.photos/seed/proj37/160/160",
    banner: "https://picsum.photos/seed/proj37banner/1200/250",
    countryCode: "BR",
    campo: "Governança"
  },
  {
    id: 38,
    name: "Mística e Espiritualidade para o Cotidiano",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Espiritualidade"
    ],
    details: {
      Responsavel: "Gisele Cristina Pereira (?)",
      Local: "América Latina, Brasil",
      Descrição: "Trazer elementos da realidade concreta para a reflexão a partir da mística e espiritualidade feminista, como por exemplo a questão da maternidade, luta de povos indígenas entre outros."
    },
    ...getCoords("BR"),
    avatar: "https://picsum.photos/seed/proj38/160/160",
    banner: "https://picsum.photos/seed/proj38banner/1200/250",
    countryCode: "BR",
    campo: "Espiritualidade"
  },
  {
    id: 39,
    name: "Movimento \"Atreva-se\": Agenda Política da Juventude na Bolívia",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Juventudes"
    ],
    details: {
      Responsavel: "Centro Juana Azurduy",
      Local: "América Latina, Bolívia",
      Descrição: "Jovens, homens e mulheres, de coletivos juvenis do Município de Sucre incidem nas propostas de governo dos partidos políticos que participam nas eleições para a Presidência, Vice-presidência e Assembleístas do Estado Plurinacional da Bolívia."
    },
    ...getCoords("BO"),
    avatar: "https://picsum.photos/seed/proj39/160/160",
    banner: "https://picsum.photos/seed/proj39banner/1200/250",
    countryCode: "BO",
    campo: "Juventudes"
  },
  {
    id: 40,
    name: "Mulheres Guardiãs das Sementes Nativas e Crioulas",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Agroecologia"
    ],
    details: {
      Responsavel: "Instituto de Agroecología del Campo, IALA Sembradoras de Esperanzas-ANAMURI",
      Local: "América Latina, Chile",
      Descrição: "Fazer com que mulheres produtoras do campo e da cidade reforcem e fortaleçam as organizações de base a partir de uma perspectiva política e do feminismo camponês e popular."
    },
    ...getCoords("CL"),
    avatar: "https://picsum.photos/seed/proj40/160/160",
    banner: "https://picsum.photos/seed/proj40banner/1200/250",
    countryCode: "CL",
    campo: "Agroecologia"
  },
  {
    id: 41,
    name: "Mulheres Impactadas pela Mineração na Amazônia Incidem por Direitos Socioambientais",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Economia do Cuidado",
      "Estilos de Vida Sustentáveis",
      "Governança",
      "Uso da Terra"
    ],
    details: {
      Responsavel: "Movimentos de mulheres da Amazônia brasileira (Oeste Paraense) e Instituto de Estudos Socioeconômicos (assessoria política do Inesc).",
      Local: "América Latina, Brasil",
      Descrição: "Fortalecimento de movimentos de mulheres de base local da Amazônia para o enfrentamento aos impactos da mineração, atividades de formação e incidência política para realização de direitos das mulheres, e posição na COP 30."
    },
    ...getCoords("BR"),
    avatar: "https://picsum.photos/seed/proj41/160/160",
    banner: "https://picsum.photos/seed/proj41banner/1200/250",
    countryCode: "BR",
    campo: "Economia do Cuidado"
  },
  {
    id: 42,
    name: "Normativa Ambiental no Peru na Transição Energética",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Energia"
    ],
    details: {
      Responsavel: "Derecho, Ambiente y Recursos Naturales (DAR)",
      Local: "América Latina, Peru",
      Descrição: "Analisar as modificações da normativa ambiental e social para a promoção dos investimentos no Peru, no marco do processo de transição energética e crise climática, a fim de gerar recomendações para a melhoria da governança."
    },
    ...getCoords("PE"),
    avatar: "https://picsum.photos/seed/proj42/160/160",
    banner: "https://picsum.photos/seed/proj42banner/1200/250",
    countryCode: "PE",
    campo: "Energia"
  },
  {
    id: 43,
    name: "Novo Modelo de Desenvolvimento",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Tecnologia"
    ],
    details: {
      Responsavel: "HBS Santiago de Chile em colaboração com acadêmicos, ativistas e políticos.",
      Local: "América Latina, Chile",
      Descrição: "Criar uma plataforma de intercâmbio entre diferentes segmentos da sociedade chilena para discutir e analisar um modelo de desenvolvimento sustentável baseado nos recursos naturais do país, distinto da exploração primária/extrativa."
    },
    ...getCoords("CL"),
    avatar: "https://picsum.photos/seed/proj43/160/160",
    banner: "https://picsum.photos/seed/proj43banner/1200/250",
    countryCode: "CL",
    campo: "Tecnologia"
  },
  {
    id: 44,
    name: "Observatório de Ecossistemas Florestais",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Uso da Terra"
    ],
    details: {
      Responsavel: "AIFBN; The Weeden Foundation; e o Fondo de Fortalecimiento de Organizaciones de la Sociedad Civil – FFOIP do Ministerio Secretaría General de Gobierno.",
      Local: "América Latina, Chile",
      Descrição: "Contar com cidadania organizada e ativa no monitoramento de recursos públicos destinados à proteção ambiental. Estabeleceremos alianças com outras organizações da sociedade civil para criar um Observatório Cidadão de Ecossistemas Florestais."
    },
    ...getCoords("CL"),
    avatar: "https://picsum.photos/seed/proj44/160/160",
    banner: "https://picsum.photos/seed/proj44banner/1200/250",
    countryCode: "CL",
    campo: "Uso da Terra"
  },
  {
    id: 45,
    name: "Onda: Diversidade e Direitos",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Arte",
      "Cidades",
      "Cultura",
      "Estilos de Vida Sustentáveis",
      "Juventudes",
      "Outros Imaginários"
    ],
    details: {
      Responsavel: "Instituto de Estudos Socioeconômicos (Realizado em comunidades como Paranoá, Itapoã e Unidade de Internação de Santa Maria).",
      Local: "América Latina, Brasil",
      Descrição: "Fortalecer adolescentes de periferia, promovendo sua segurança e fortalecimento em seus territórios, e criando escolas como ambientes seguros e protetivos para os direitos das crianças e adolescentes."
    },
    ...getCoords("BR"),
    avatar: "https://picsum.photos/seed/proj45/160/160",
    banner: "https://picsum.photos/seed/proj45banner/1200/250",
    countryCode: "BR",
    campo: "Arte"
  },
  {
    id: 46,
    name: "Orçamento Público e Direitos na Amazônia Brasileira",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Governança",
      "Uso da Terra"
    ],
    details: {
      Responsavel: "Instituto de Estudos Socioeconômicos (realizado por organizações e movimentos sociais).",
      Local: "América Latina, Brasil",
      Descrição: "O projeto busca fortalecer a disputa por um desenvolvimento amazônico que seja ancorado na proteção da floresta e nos direitos socioambientais, com ênfase na resistência contra o desmonte das políticas públicas."
    },
    ...getCoords("BR"),
    avatar: "https://picsum.photos/seed/proj46/160/160",
    banner: "https://picsum.photos/seed/proj46banner/1200/250",
    countryCode: "BR",
    campo: "Governança"
  },
  {
    id: 47,
    name: "Política Fiscal e Direitos Humanos na América Latina II",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Estilos de Vida Sustentáveis",
      "Governança"
    ],
    details: {
      Responsavel: "Instituto de Estudos Socioeconômicos (realizado por Organizações da sociedade civil).",
      Local: "América Latina, Brasil",
      Descrição: "Fortalecer a integração dos direitos humanos nas políticas fiscais e tributárias, promovendo uma justiça fiscal mais inclusiva e sustentável na América Latina por meio de estratégias colaborativas e iniciativas da sociedade civil."
    },
    ...getCoords("BR"),
    avatar: "https://picsum.photos/seed/proj47/160/160",
    banner: "https://picsum.photos/seed/proj47banner/1200/250",
    countryCode: "BR",
    campo: "Estilos de Vida Sustentáveis"
  },
  {
    id: 48,
    name: "Por uma Política Fiscal Mais Democrática e Voltada para os Direitos Humanos",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Governança"
    ],
    details: {
      Responsavel: "Instituto de Estudos Socioeconômicos (Realizado por organizações da sociedade civil).",
      Local: "América Latina, Brasil",
      Descrição: "O projeto visa fortalecer a narrativa de uma política tributária brasileira orientada para os direitos humanos, promovendo um debate mais democrático sobre sistemas fiscais progressivos."
    },
    ...getCoords("BR"),
    avatar: "https://picsum.photos/seed/proj48/160/160",
    banner: "https://picsum.photos/seed/proj48banner/1200/250",
    countryCode: "BR",
    campo: "Governança"
  },
  {
    id: 49,
    name: "Aprofundamento do Direito a um Meio Ambiente Saudável",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Governança"
    ],
    details: {
      Responsavel: "ONG FIMA",
      Local: "América Latina, Chile",
      Descrição: "Contribuir e aprofundar o debate público sobre temas e instituições ambientais, capacitando a sociedade civil e funcionários públicos para uma melhor discussão, cumprimento e implementação do direito fundamental a um meio ambiente saudável."
    },
    ...getCoords("CL"),
    avatar: "https://picsum.photos/seed/proj49/160/160",
    banner: "https://picsum.photos/seed/proj49banner/1200/250",
    countryCode: "CL",
    campo: "Governança"
  },
  {
    id: 50,
    name: "Promovendo e Fortalecendo Energias Comunitárias para Transições Justas",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Economia do Cuidado",
      "Energia",
      "Estilos de Vida Sustentáveis",
      "Futuro do Trabalho",
      "Juventudes",
      "Tecnologia"
    ],
    details: {
      Responsavel: "Hbs Colômbia + parceira, a Fundação Sembradores de Energías Territorios, Aguas y Autonomías.",
      Local: "América Latina, Colômbia",
      Descrição: "Jovens agricultores e grupos locais foram treinados em energia comunitária e garantiram o reconhecimento do Estado de um marco especial para autogeração a partir de fontes renováveis. Isso permitiu projetos financiados publicamente focados na produção local e autossuficiência."
    },
    ...getCoords("CO"),
    avatar: "https://picsum.photos/seed/proj50/160/160",
    banner: "https://picsum.photos/seed/proj50banner/1200/250",
    countryCode: "CO",
    campo: "Economia do Cuidado"
  },
  {
    id: 51,
    name: "Rede Mandatos-C",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Governança"
    ],
    details: {
      Responsavel: "Realizado pelo Instituto Clima de Política",
      Local: "América Latina, Brasil",
      Descrição: "A Rede Mandatos-C é uma aliança multinível formada por lideranças do legislativo comprometidas com a ação climática, com o objetivo de catalisar políticas públicas e a vontade política para a transição climática justa no Brasil."
    },
    ...getCoords("BR"),
    avatar: "https://picsum.photos/seed/proj51/160/160",
    banner: "https://picsum.photos/seed/proj51banner/1200/250",
    countryCode: "BR",
    campo: "Governança"
  },
  {
    id: 52,
    name: "Reparabilidade e Retornabilidade no Chile: Uma Perspectiva de Incidência Política",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Estilos de Vida Sustentáveis"
    ],
    details: {
      Responsavel: "Fundación Basura; Alianza Basura Cero; GAIA; Viable consultores.",
      Local: "América Latina, Chile",
      Descrição: "Desenvolver e dar visibilidade a uma proposta que destaque os benefícios de promover, em nível de política pública, a reparação e a retornabilidade como direitos fundamentais para a cidadania no Chile."
    },
    ...getCoords("CL"),
    avatar: "https://picsum.photos/seed/proj52/160/160",
    banner: "https://picsum.photos/seed/proj52banner/1200/250",
    countryCode: "CL",
    campo: "Estilos de Vida Sustentáveis"
  },
  {
    id: 53,
    name: "Escola de Administração e Gestão do Estado para Transições Justas (School of State Administration and Management for Just Transitions)",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Ativismo e Direitos",
      "Democracia",
      "Economia Solidária",
      "Energia",
      "Futuro do Trabalho",
      "Governança",
      "Tecnologia"
    ],
    details: {
      Responsavel: "Hbs Colombia.",
      Local: "América Latina, Colômbia",
      Descrição: "Foi criada uma escola política para transições justas para treinar 70 funcionários públicos, com o objetivo de fortalecer as políticas de transição energética, garantir a continuidade dos compromissos climáticos e ambientais após mudanças de governo e desenvolver estratégias para defender a comunidade."
    },
    ...getCoords("CO"),
    avatar: "https://picsum.photos/seed/proj53/160/160",
    banner: "https://picsum.photos/seed/proj53banner/1200/250",
    countryCode: "CO",
    campo: "Ativismo e Direitos"
  },
  {
    id: 54,
    name: "Semeando a Transição (Sembrando Transición)",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Agroecologia",
      "Arte",
      "Cultura",
      "Energia",
      "Juventudes",
      "Outros Imaginários",
      "Uso da Terra"
    ],
    details: {
      Responsavel: "Familia Pasta de Conchos e Conexiones Climáticas",
      Local: "América Latina, México",
      Descrição: "Este projeto promove hortas escolares e hortas de memória para ensinar uma nova relação com a terra e como uma rede de espaços de memória para famílias que perderam um familiar na mineração de carvão."
    },
    ...getCoords("MX"),
    avatar: "https://picsum.photos/seed/proj54/160/160",
    banner: "https://picsum.photos/seed/proj54banner/1200/250",
    countryCode: "MX",
    campo: "Agroecologia"
  },
  {
    id: 55,
    name: "Transformação Socioecológica e Alternativas Agroecológicas Sustentáveis",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Agroecologia",
      "Economia do Cuidado",
      "Estilos de Vida Sustentáveis",
      "Governança",
      "Uso da Terra"
    ],
    details: {
      Responsavel: "Tierra Libre",
      Local: "América Latina, Colômbia",
      Descrição: "Consolidar um movimento nacional de agroecologia composto por diversos camponeses (mulheres, jovens, organizações) e alcançar a construção coletiva e a promulgação da primeira lei e política pública para a promoção e prática da agroecologia."
    },
    ...getCoords("CO"),
    avatar: "https://picsum.photos/seed/proj55/160/160",
    banner: "https://picsum.photos/seed/proj55banner/1200/250",
    countryCode: "CO",
    campo: "Agroecologia"
  },
  {
    id: 56,
    name: "Fortalecimento da Transição Energética Justa através da Mobilidade Elétrica Comunitária",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Economia Solidária",
      "Energia",
      "Futuro do Trabalho",
      "Governança",
      "Mobilidade",
      "Tecnologia"
    ],
    details: {
      Responsavel: "Pelo nosso parceiro Polen Just Transitions em colaboração com comunidades em La Guajira que pertencem ou são afiliadas a sindicatos de mineração de carvão.",
      Local: "América Latina, Colômbia",
      Descrição: "O primeiro projeto de mobilidade elétrica comunitária foi lançado em La Guajira, treinando mulheres e jovens para converter motocicletas a gás em elétricas. Em uma região fortemente impactada pela mineração de carvão, o projeto ofereceu uma alternativa produtiva e de requalificação profissional."
    },
    ...getCoords("CO"),
    avatar: "https://picsum.photos/seed/proj56/160/160",
    banner: "https://picsum.photos/seed/proj56banner/1200/250",
    countryCode: "CO",
    campo: "Economia Solidária"
  },
  {
    id: 57,
    name: "Todos e Todas Comem (Todos y todas comen)",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Agroecologia",
      "Alimentação Saudável"
    ],
    details: {
      Responsavel: "Conexiones Climáticas (+ grupos camponeses e grupos de consumidores).",
      Local: "América Latina, México",
      Descrição: "As linhas de ação se enfocaram em fortalecer os sistemas agroalimentares locais com a promoção agroecológica, as redes camponesas, circuitos curtos de comercialização e a institucionalização em prefeituras."
    },
    ...getCoords("MX"),
    avatar: "https://picsum.photos/seed/proj57/160/160",
    banner: "https://picsum.photos/seed/proj57banner/1200/250",
    countryCode: "MX",
    campo: "Agroecologia"
  },
  {
    id: 58,
    name: "Transição Energética com Justiça Socioambiental - Para Construir, Regulamentar e Avançar",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Agroecologia",
      "Energia",
      "Estilos de Vida Sustentáveis",
      "Tecnologia",
      "Uso da Terra"
    ],
    details: {
      Responsavel: "Instituto de Estudos Socioeconômicos (realizado por Inesc em colaboração com organizações, movimentos sociais e coalizões).",
      Local: "América Latina, Brasil",
      Descrição: "O projeto busca contribuir para a transição energética com justiça socioambiental, promovendo a redução dos subsídios federais aos combustíveis fósseis e a expansão de fontes de energia limpa."
    },
    ...getCoords("BR"),
    avatar: "https://picsum.photos/seed/proj58/160/160",
    banner: "https://picsum.photos/seed/proj58banner/1200/250",
    countryCode: "BR",
    campo: "Agroecologia"
  },
  {
    id: 59,
    name: "Transição Energética com Justiça Socioambiental: por Direitos, Orçamento e Participação Social",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Energia",
      "Estilos de Vida Sustentáveis",
      "Uso da Terra"
    ],
    details: {
      Responsavel: "Instituto de Estudos Socioeconômicos (Realizado pelo INESC em parceria com organizações e movimentos sociais).",
      Local: "América Latina, Brasil",
      Descrição: "O projeto busca defender um sistema energético sustentável e inclusivo, promovendo fontes renováveis de energia e mercados de carbono com abordagem de direitos humanos."
    },
    ...getCoords("BR"),
    avatar: "https://picsum.photos/seed/proj59/160/160",
    banner: "https://picsum.photos/seed/proj59banner/1200/250",
    countryCode: "BR",
    campo: "Energia"
  },
  {
    id: 60,
    name: "Uma Nova Governança para a Mineração no Peru",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Governança"
    ],
    details: {
      Responsavel: "CooperAcción; Espaços de coordenação de povos indígenas da Coordenadora Nacional de Direitos Humanos e a Rede Muqui.",
      Local: "América Latina, Peru",
      Descrição: "Promover uma nova governança mineira no Peru que garanta direitos humanos, ambientais e de gênero, contribuindo para uma transição socioecológica justa e ao debate público sobre políticas extrativas sustentáveis."
    },
    ...getCoords("PE"),
    avatar: "https://picsum.photos/seed/proj60/160/160",
    banner: "https://picsum.photos/seed/proj60banner/1200/250",
    countryCode: "PE",
    campo: "Governança"
  },
  {
    id: 61,
    name: "Uma Nova Narrativa para a Transição Energética no Chile",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Energia"
    ],
    details: {
      Responsavel: "Uno.Cinco em colaboração com ONGs parceiras da HBS.",
      Local: "América Latina, Chile",
      Descrição: "Promover narrativas progressistas e baseadas em evidências para influenciar os tomadores de decisão e empoderar a sociedade civil para acelerar a transição energética e a ação climática no Chile."
    },
    ...getCoords("CL"),
    avatar: "https://picsum.photos/seed/proj61/160/160",
    banner: "https://picsum.photos/seed/proj61banner/1200/250",
    countryCode: "CL",
    campo: "Energia"
  },
  {
    id: 62,
    name: "Visibilização de Oportunidades na Materialização do Direito Humano à Água no Chile",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Governança"
    ],
    details: {
      Responsavel: "Newenko, DACC U. de Concepción, Fenapru, CIRN, CHRIAM, entre outros.",
      Local: "América Latina, Chile",
      Descrição: "Continuar fortalecendo o rol da Fundación Newenko como referente em matérias hídricas e sua capacidade de incidência pública para contribuir ao reconhecimento e garantia do direito humano à água, saneamento e a gestão comunitária da água."
    },
    ...getCoords("CL"),
    avatar: "https://picsum.photos/seed/proj62/160/160",
    banner: "https://picsum.photos/seed/proj62banner/1200/250",
    countryCode: "CL",
    campo: "Governança"
  },
  {
    id: 63,
    name: "Vote pelo Clima",
    type: InitiativeCategory.PROJETO,
    tags: [
      "Juventudes"
    ],
    details: {
      Responsavel: "Realizado pelo Instituto Clima de Política.",
      Local: "América Latina, Brasil",
      Descrição: "A plataforma Vote pelo Clima é parte de uma campanha recorrente de advocacy no período eleitoral organizada desde 2020 pelo Clima de Eleição, com o fim de engajar o eleitorado para votar em candidaturas certificadas como aliadas à pauta climática."
    },
    ...getCoords("BR"),
    avatar: "https://picsum.photos/seed/proj63/160/160",
    banner: "https://picsum.photos/seed/proj63banner/1200/250",
    countryCode: "BR",
    campo: "Juventudes"
  }
];



export const INITIAL_INITIATIVES_DATA: Initiative[] = [
  { 
    id: 1, 
    name: "Visão Coop", 
    type: InitiativeCategory.INSTITUICAO, 
    lat: -22.7594, 
    lng: -43.4552, 
    avatar: "https://i.imgur.com/2Y0fH4k.png",
    banner: "https://picsum.photos/seed/VCBannerLarge/1200/300", 
    tags: ["Mudanças Climáticas", "Desenvolvimento Local"], 
    details: { 
      Responsavel: "Equipe Visão Coop", 
      Local: "Queimados, RJ, Brasil", 
      Descrição: "A Visão Coop é uma iniciativa brasileira que conecta comunidades e cientistas com tecnologias para construir inteligência coletiva. Finalistas no BNDES Garagem, desenvolvemos IA para monitorar territórios em tempo real. Líder Ambiental no Startup20, mapeamos ferramentas para regeneração de biomas e adaptação climática em periferias.",
      departamento: "Negócios" 
    },
    countryCode: "BR",
    campo: "Mudanças Climáticas",
    projects: [
      { id: 'proj1', name: "Mutirão", imageUrl: "https://picsum.photos/seed/MutiraoImg/400/250", description: "Organizamos encontros imersivos onde especialistas, cientistas e moradores testam soluções regenerativas na prática...", objective: "Reflorestamento" },
      { id: 'proj2', name: "Território", imageUrl: "https://picsum.photos/seed/TerritorioImg/400/250", description: "Utilizamos tecnologia, inteligência coletiva e participação comunitária para mapear territórios vulneráveis...", objective: "Inteligência Coletiva" },
      { id: 'proj3', name: "Como Sobreviver", imageUrl: "https://picsum.photos/seed/SobreviverImg/400/250", description: "Transformamos experiências comunitárias em narrativas impactantes, conectando conhecimento popular e científico...", objective: "SBN" },
    ]
  },
  { 
    id: 2, 
    name: "Mutirão Serra da Misericórdia", 
    type: InitiativeCategory.PROJETO, 
    lat: -22.8220, 
    lng: -43.2631, 
    avatar: "https://picsum.photos/seed/SM/160/160", 
    banner: "https://picsum.photos/seed/SMBanner/1200/250", 
    tags: ["Reflorestamento", "Mata Atlântica", "Comunidade"], 
    details: { 
      Responsavel: "Visão Coop", 
      Local: "Complexo da Penha, RJ", 
      Descrição: "Este mutirão tem como foco principal o plantio de 500 mudas de espécies nativas da Mata Atlântica na área da Serra da Misericórdia. Envolve a comunidade local em ações de conscientização e preservação.",
      transporteIncluso: true,
      alimentacaoInclusa: true,
      internetDisponivel: false,
    },
    timelineEvents: [
      { title: "Período de Inscrição", date: "01/11/2024 - 15/11/2024", description: "Inscrições abertas através do nosso website oficial." },
      { title: "Preparação e Logística", date: "16/11/2024 - 20/11/2024", description: "Organização dos materiais, ferramentas e equipes de voluntários." },
      { title: "Dia da Atividade Principal", date: "25/11/2024 - 09:00 às 17:00", description: "Plantio das mudas, oficinas de educação ambiental e confraternização." },
      { title: "Monitoramento Inicial", date: "26/11/2024 - 10/12/2024", description: "Primeiras vistorias da área reflorestada e cuidados iniciais com as mudas." },
    ],
    campo: "Reflorestamento",
    countryCode: "BR",
  },
  ...newProjects
];

export const MAP_INITIAL_CENTER: [number, number] = [-14.2350, -51.9253];
export const MAP_INITIAL_ZOOM: number = 4;
export const MAP_TILE_URL: string = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png';
export const MAP_ATTRIBUTION: string = '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions" target="_blank" rel="noopener noreferrer">CARTO</a>';

export const FORUM_CATEGORIES_DATA: ForumItemData[] = [
    { id: 'comunicados', icon: MegaphoneIcon, title: 'Comunicados', description: 'Atualizações sobre a plataforma, reuniões e eventos.', count: 3, color: '#EF4444' },
    { id: 'projetos_narrativas', icon: StarIcon, title: 'Projetos e Narrativas', description: 'Compartilhe e conheça iniciativas inspiradoras.', count: 2, color: '#F59E0B' },
    { id: 'construcao_cenarios', icon: ConstructionIcon, title: 'Construção de Cenários', description: 'Discussões colaborativas sobre futuros.', count: 1, color: '#3B82F6' },
    { id: 'metodologias_estudos', icon: BooksIcon, title: 'Metodologias e Estudos', description: 'Compartilhe inspirações e estudos.', count: 1, color: '#6366F1' },
];

export const FORUM_POPUP_DATA: ForumItemData[] = [
    { ...FORUM_CATEGORIES_DATA[0], iconBgClass: 'bg-red-100', textColorClass: 'text-red-600' },
    { ...FORUM_CATEGORIES_DATA[1], iconBgClass: 'bg-amber-100', textColorClass: 'text-amber-600' },
    { ...FORUM_CATEGORIES_DATA[2], iconBgClass: 'bg-blue-100', textColorClass: 'text-blue-600' },
    { ...FORUM_CATEGORIES_DATA[3], iconBgClass: 'bg-indigo-100', textColorClass: 'text-indigo-600' },
];

export const FORUM_PAGE_MAIN_SECTIONS: ForumItemData[] = FORUM_CATEGORIES_DATA;


export const ALL_FORUM_TOPICS: ForumTopic[] = [
  { 
    id: 'topic1', 
    categoryId: 'comunicados', 
    title: 'Manutenção programada para o próximo domingo', 
    author: 'Admin', 
    authorAvatar: 'https://i.pravatar.cc/150?u=admin',
    lastReplyTime: '5m atrás', 
    tags: ['manutenção', 'servidores'], 
    replyCount: 3,
    views: 125,
    pinned: true,
    message: 'Olá a todos! Gostaríamos de informar que realizaremos uma manutenção programada em nossos servidores no próximo domingo, entre as 02:00 e 04:00 da manhã (horário de Brasília). Durante este período, a plataforma poderá apresentar instabilidade. Agradecemos a compreensão.',
    replies: [
      { id: 'reply1-1', author: 'João Pereira', authorAvatar: 'https://i.pravatar.cc/150?u=jp', timestamp: '1h atrás', content: 'Obrigado pelo aviso! Bom trabalho para a equipe.' },
      { id: 'reply1-2', author: 'Carla Dias', authorAvatar: 'https://i.pravatar.cc/150?u=cd', timestamp: '30m atrás', content: 'Anotado. Essa manutenção vai corrigir o bug de login?' },
      { id: 'reply1-3', author: 'Admin', authorAvatar: 'https://i.pravatar.cc/150?u=admin', timestamp: '5m atrás', content: 'Olá @Carla Dias, sim, essa atualização inclui a correção para o problema de login reportado. Obrigado!' },
    ]
  },
  { 
    id: 'topic4', 
    categoryId: 'projetos_narrativas', 
    title: 'Ideia para projeto de reflorestamento na Amazônia', 
    author: 'Maria Silva', 
    authorAvatar: 'https://i.pravatar.cc/150?u=ms',
    lastReplyTime: '2h atrás', 
    tags: ['ideia', 'reflorestamento', 'amazonia'], 
    replyCount: 2,
    views: 88,
    pinned: false,
    message: 'Pessoal, tive uma ideia para um projeto de reflorestamento em áreas degradadas na Amazônia, utilizando drones para o plantio de sementes. O que acham? Alguém com experiência na área para discutir a viabilidade?',
    replies: [
        { id: 'reply4-1', author: 'Dr. Ana Beatriz', authorAvatar: 'https://i.pravatar.cc/150?u=ab', timestamp: '3h atrás', content: 'Excelente iniciativa, Maria! Já existem alguns estudos sobre a eficácia de drones. Posso compartilhar alguns links. O principal desafio é o monitoramento pós-plantio.' },
        { id: 'reply4-2', author: 'Carlos Andrade', authorAvatar: 'https://i.pravatar.cc/150?u=ca', timestamp: '2h atrás', content: 'Acho a ideia fantástica. Talvez possamos integrar com comunidades locais para o monitoramento, gerando renda e engajamento.' }
    ]
  },
  { 
    id: 'topic2', 
    categoryId: 'comunicados', 
    title: 'Bem-vindos à nova versão da plataforma!', 
    author: 'Admin', 
    authorAvatar: 'https://i.pravatar.cc/150?u=admin',
    lastReplyTime: '1d atrás', 
    tags: ['anúncio', 'v2'], 
    replyCount: 0,
    views: 230,
    pinned: false,
    message: 'É com grande prazer que anunciamos o lançamento da v2 da nossa plataforma! Explore as novas funcionalidades e nos diga o que achou. Estamos abertos a feedbacks e sugestões nos canais apropriados. Divirtam-se!',
    replies: []
  },
  { 
    id: 'topic6', 
    categoryId: 'construcao_cenarios', 
    title: 'Brainstorm: Cidades Sustentáveis em 2050', 
    author: 'Carlos Andrade', 
    authorAvatar: 'https://i.pravatar.cc/150?u=ca',
    lastReplyTime: '10h atrás', 
    tags: ['futuro', 'cidades', 'sustentabilidade'], 
    replyCount: 0,
    views: 55,
    pinned: false,
    message: 'Como vocês imaginam as cidades em 2050? Vamos construir juntos um cenário otimista e sustentável. Pensem em transporte, moradia, energia, etc.',
    replies: []
  },
   { 
    id: 'topic7', 
    categoryId: 'metodologias_estudos', 
    title: 'Estudo de caso: Agrofloresta e Segurança Alimentar', 
    author: 'Dr. Ana Beatriz', 
    authorAvatar: 'https://i.pravatar.cc/150?u=ab',
    lastReplyTime: '2sem atrás', 
    tags: ['pesquisa', 'agroecologia'], 
    replyCount: 0,
    views: 150,
    pinned: false,
    message: 'Segue o link para meu último estudo de caso sobre a implementação de sistemas agroflorestais em pequenas propriedades e seu impacto na segurança alimentar. Aberta para discussões e perguntas. [link para o estudo]',
    replies: []
  },
  { 
    id: 'topic5', 
    categoryId: 'projetos_narrativas', 
    title: 'Narrativa inspiradora: Horta Comunitária Transforma Vidas', 
    author: 'João Pereira', 
    authorAvatar: 'https://i.pravatar.cc/150?u=jp',
    lastReplyTime: '1sem atrás', 
    tags: ['história', 'comunidade'], 
    replyCount: 0,
    views: 99,
    pinned: false,
    message: 'Queria compartilhar a história da horta comunitária do nosso bairro. Começou pequena e hoje abastece mais de 50 famílias, além de ser um espaço incrível de convivência. Vou postar fotos em breve!',
    replies: []
  },
  { 
    id: 'topic3', 
    categoryId: 'comunicados', 
    title: 'Atualização dos Termos de Serviço', 
    author: 'Equipe Legal', 
    authorAvatar: 'https://i.pravatar.cc/150?u=legal',
    lastReplyTime: '3d atrás', 
    tags: ['legal', 'termos'], 
    replyCount: 0,
    views: 412,
    pinned: false,
    message: 'Prezados usuários, atualizamos nossos Termos de Serviço para refletir as novas diretrizes de privacidade. Por favor, leiam com atenção. O uso contínuo da plataforma implica na aceitação dos novos termos.',
    replies: []
  },
];