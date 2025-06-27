

import { Initiative, InitiativeCategory, ForumItemData, ForumTag, ForumTopic, TimelineEvent, ForumReply } from './types';
import { MegaphoneIcon, StarIcon, ConstructionIcon, BooksIcon } from './components/icons';

export const INITIAL_INITIATIVES_DATA: Initiative[] = [
  { 
    id: 1, 
    name: "Visão Coop", 
    type: InitiativeCategory.INSTITUICAO, 
    lat: -22.7594, 
    lng: -43.4552, 
    avatar: "https://picsum.photos/seed/VC/160/160", 
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
  { 
    id: 3, 
    name: "Coletivo Arte Urbana", 
    type: InitiativeCategory.COLETIVO, 
    lat: -22.9068, 
    lng: -43.1729, 
    avatar: "https://picsum.photos/seed/AU/160/160", 
    banner: "https://picsum.photos/seed/AUBanner/1200/250", 
    tags: ["Arte e Cultura", "Inclusão Social", "Espaço Público"], 
    details: { 
      Responsavel: "Coletivo Arte Urbana", 
      Local: "Centro, Rio de Janeiro", 
      Descrição: "Um coletivo que utiliza a arte urbana, como o grafite e murais, como ferramenta de expressão, inclusão social e revitalização de espaços públicos no centro do Rio de Janeiro." 
    },
    campo: "Arte e Cultura",
    countryCode: "BR",
  },
  { 
    id: 4, 
    name: "Agrofloresta na Cidade", 
    type: InitiativeCategory.COLETIVO, 
    lat: -22.9844, 
    lng: -43.2305, 
    avatar: "https://picsum.photos/seed/AC/160/160", 
    banner: "https://picsum.photos/seed/ACBanner/1200/250", 
    tags: ["Agroecologia", "Segurança Alimentar"], 
    details: { 
      Responsavel: "Moradores da Rocinha", 
      Local: "Rocinha, RJ", 
      Descrição: "Iniciativa de agricultura urbana e agrofloresta para promover segurança alimentar, geração de renda e fortalecer os laços comunitários através do cultivo de alimentos saudáveis em espaços urbanos." 
    },
    campo: "Agroecologia",
    countryCode: "BR",
  }
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