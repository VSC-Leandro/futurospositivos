
import React from 'react';


export enum InitiativeCategory {
  INSTITUICAO = "Instituição",
  PROJETO = "Projeto",
  COLETIVO = "Coletivo",
}

export interface TimelineEvent {
  title: string;
  date: string;
  description?: string;
}

export interface InitiativeDetails {
  Responsavel: string;
  Local: string;
  Descrição: string;
  departamento?: string; 
  transporteIncluso?: boolean;
  alimentacaoInclusa?: boolean;
  internetDisponivel?: boolean;
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
  timelineEvents?: TimelineEvent[];
}

export enum Page {
  MAP = "map-page",
  FORUM = "forum-page",
  INITIATIVES = "initiatives-page",
  INITIATIVE_DETAILS = "initiative-details-page",
  FORUM_TOPIC_DETAILS = "forum-topic-details-page",
}

export interface ForumItemData {
  id: string; // Unique identifier, e.g., 'comunicados'
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
  count: number;
  color: string; // e.g., '#EF4444' for red
  iconBgClass?: string;
  textColorClass?: string;
}

export interface ForumTag {
  id: string;
  label: string;
  type: 'category' | 'tag'; // For main forum page filters
}

export interface ForumSidebarTag {
  id: string;
  label: string;
  colorClass?: string;
}

export interface ForumReply {
  id: string;
  author: string;
  authorAvatar: string;
  timestamp: string;
  content: string;
}

// New type for individual forum topics
export interface ForumTopic {
  id:string;
  categoryId: string; // Links to ForumItemData.id (e.g., 'comunicados')
  title: string;
  author: string;
  authorAvatar: string;
  lastReplyTime: string; // e.g., "2h atrás"
  tags: string[]; // Topic-specific tags, e.g., ["bugfix"]
  replyCount: number;
  message: string;
  replies?: ForumReply[];
  views: number;
  pinned?: boolean;
}