export enum InitiativeCategory {
  INSTITUICAO = "Instituição",
  PROJETO = "Projeto",
  COLETIVO = "Coletivo",
}

export interface InitiativeDetails {
  Responsavel: string;
  Local: string;
  Descrição: string;
  departamento?: string; 
}

export interface ProjectSummary {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  objective: string;
}

export interface Initiative {
  id: number;
  name: string;
  type: InitiativeCategory;
  lat: number;
  lng: number;
  avatar: string;
  banner: string;
  tags: string[];
  details: InitiativeDetails;
  countryCode?: string; 
  projects?: ProjectSummary[]; 
  campo?: string; 
}

export enum Page {
  MAP = "map-page",
  FORUM = "forum-page",
  INITIATIVES = "initiatives-page",
  INITIATIVE_DETAILS = "initiative-details-page",
}

export interface ForumItemData {
  id: string; // Unique identifier, e.g., 'comunicados'
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
  count: number;
  iconBgClass: string; 
  textColorClass: string; 
}

export interface ForumTag {
  id: string;
  label: string;
  type: 'category' | 'tag'; // For main forum page filters
}

// New type for individual forum topics
export interface ForumTopic {
  id: string;
  categoryId: string; // Links to ForumItemData.id (e.g., 'comunicados')
  title: string;
  author: string;
  lastReplyTime: string; // e.g., "2h atrás"
  tags: string[]; // Topic-specific tags, e.g., ["#bugfix"]
  replyCount: number;
}

// New type for tags shown in the sidebar of ForumCategoryViewPage
export interface ForumSidebarTag {
  id: string; // e.g., 'bugfix'
  label: string; // e.g., '#bugfix'
  colorClass?: string; // Optional: e.g., 'text-blue-500 bg-blue-100'
}
