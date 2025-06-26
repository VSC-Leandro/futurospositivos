
import { Initiative, InitiativeCategory, ForumItemData, ForumTag, ForumTopic, ForumSidebarTag, TimelineEvent } from './types';
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

export const FORUM_POPUP_DATA: ForumItemData[] = [
  { id: 'comunicados', icon: MegaphoneIcon, title: 'COMUNICADOS', description: 'Atualizações sobre a plataforma, reuniões do comitê e eventos globais', count: 2, iconBgClass: 'bg-forum-comunicados-icon-bg', textColorClass: 'text-red-600' },
  { id: 'projetos_narrativas', icon: StarIcon, title: 'PROJETOS E NARRATIVAS DE FUTUROS', description: 'Compartilhe e conheça iniciativas inspiradoras', count: 1, iconBgClass: 'bg-forum-projetos-icon-bg', textColorClass: 'text-amber-600' },
  { id: 'construcao_cenarios', icon: ConstructionIcon, title: 'CONSTRUÇÃO DE CENÁRIOS', description: 'Discussões colaborativas sobre os cenários futuros que queremos', count: 0, iconBgClass: 'bg-forum-cenarios-icon-bg', textColorClass: 'text-blue-600' },
  { id: 'metodologias_estudos', icon: BooksIcon, title: 'METODOLOGIAS E ESTUDOS', description: 'Espaço para apresentar metodologias, compartilhar inspirações e difundir estudos', count: 1, iconBgClass: 'bg-forum-estudos-icon-bg', textColorClass: 'text-indigo-600' },
];

export const FORUM_PAGE_CATEGORIES: ForumTag[] = [
  { id: 'agro', label: 'AGROECOLOGIA', type: 'category' },
  { id: 'espiritualidade', label: 'ESPIRITUALIDADE', type: 'category' },
  { id: 'tecnologia', label: 'TECNOLOGIA', type: 'category' },
  { id: 'cidades', label: 'CIDADES', type: 'category' },
  { id: 'artes', label: 'ARTES', type: 'category' },
  { id: 'juventude', label: 'JUVENTUDE', type: 'category' },
];

export const FORUM_PAGE_TAGS: ForumTag[] = [
  { id: 'bugfix', label: '#bugfix', type: 'tag' },
  { id: 'q&a', label: '#Q&A', type: 'tag' },
  { id: 'suggestions', label: '#suggestions', type: 'tag' },
  { id: 'cop30', label: '#COP30', type: 'tag' },
  { id: 'ia', label: '#IA', type: 'tag' },
  { id: 'knowhow', label: '#know-how', type: 'tag' },
];

export const FORUM_PAGE_MAIN_SECTIONS: ForumItemData[] = FORUM_POPUP_DATA;


export const ALL_FORUM_TOPICS: ForumTopic[] = [
  { 
    id: 'topic1', 
    categoryId: 'comunicados', 
    title: 'Manutenção programada para o próximo domingo', 
    author: 'Admin', 
    lastReplyTime: '2h atrás', 
    tags: ['#bugfix'], 
    replyCount: 5 
  },
  { 
    id: 'topic2', 
    categoryId: 'comunicados', 
    title: 'Bem-vindos à nova versão da plataforma!', 
    author: 'Admin', 
    lastReplyTime: '1d atrás', 
    tags: ['#Q&A'], 
    replyCount: 12 
  },
  { 
    id: 'topic3', 
    categoryId: 'comunicados', 
    title: 'Atualização dos Termos de Serviço', 
    author: 'Equipe Legal', 
    lastReplyTime: '3d atrás', 
    tags: ['#anúncio'], 
    replyCount: 2 
  },
  { 
    id: 'topic4', 
    categoryId: 'projetos_narrativas', 
    title: 'Ideia para projeto de reflorestamento na Amazônia', 
    author: 'Maria Silva', 
    lastReplyTime: '5h atrás', 
    tags: ['#ideia', '#reflorestamento'], 
    replyCount: 8 
  },
  { 
    id: 'topic5', 
    categoryId: 'projetos_narrativas', 
    title: 'Narrativa inspiradora: Horta Comunitária Transforma Vidas', 
    author: 'João Pereira', 
    lastReplyTime: '1sem atrás', 
    tags: ['#história', '#comunidade'], 
    replyCount: 15 
  },
  { 
    id: 'topic6', 
    categoryId: 'construcao_cenarios', 
    title: 'Brainstorm: Cidades Sustentáveis em 2050', 
    author: 'Carlos Andrade', 
    lastReplyTime: '10h atrás', 
    tags: ['#futuro', '#cidades'], 
    replyCount: 22 
  },
   { 
    id: 'topic7', 
    categoryId: 'metodologias_estudos', 
    title: 'Estudo de caso: Agrofloresta e Segurança Alimentar', 
    author: 'Dr. Ana Beatriz', 
    lastReplyTime: '2sem atrás', 
    tags: ['#pesquisa', '#agroecologia'], 
    replyCount: 9 
  },
];

export const FORUM_CATEGORY_VIEW_SIDEBAR_TAGS: ForumSidebarTag[] = [
  { id: 'bugfix', label: '#bugfix', colorClass: 'bg-blue-100 text-blue-700 hover:bg-blue-200'},
  { id: 'q&a', label: '#Q&A', colorClass: 'bg-purple-100 text-purple-700 hover:bg-purple-200'},
  { id: 'suggestions', label: '#suggestions', colorClass: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'},
  { id: 'anúncio', label: '#anúncio', colorClass: 'bg-green-100 text-green-700 hover:bg-green-200'},
  { id: 'ideia', label: '#ideia', colorClass: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'},
  { id: 'reflorestamento', label: '#reflorestamento', colorClass: 'bg-teal-100 text-teal-700 hover:bg-teal-200'},
  { id: 'história', label: '#história', colorClass: 'bg-pink-100 text-pink-700 hover:bg-pink-200'},
  { id: 'comunidade', label: '#comunidade', colorClass: 'bg-orange-100 text-orange-700 hover:bg-orange-200'},
  { id: 'futuro', label: '#futuro', colorClass: 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200'},
  { id: 'cidades', label: '#cidades', colorClass: 'bg-lime-100 text-lime-700 hover:bg-lime-200'},
  { id: 'pesquisa', label: '#pesquisa', colorClass: 'bg-gray-200 text-gray-700 hover:bg-gray-300'},
  { id: 'agroecologia', label: '#agroecologia', colorClass: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'},
];