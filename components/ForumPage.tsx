import React from 'react';
import { ForumItemData, ForumTag } from '../types';
import { FORUM_PAGE_CATEGORIES, FORUM_PAGE_TAGS, FORUM_PAGE_MAIN_SECTIONS } from '../constants';

interface ForumSectionCardProps {
  item: ForumItemData;
  onSelectCategory: (category: ForumItemData) => void; // New prop
}

const ForumSectionCard: React.FC<ForumSectionCardProps> = ({ item, onSelectCategory }) => (
  <button
    onClick={() => onSelectCategory(item)}
    className="bg-white p-5 rounded-xl shadow-forum-card border border-gray-200/80 flex items-start space-x-4 hover:shadow-lg transition-shadow duration-300 text-left w-full focus:outline-none focus:ring-2 focus:ring-positive-lime focus:ring-opacity-50"
  >
    <div className={`p-3 rounded-lg ${item.iconBgClass} flex-shrink-0`}>
      <item.icon className={`h-6 w-6 ${item.textColorClass}`} />
    </div>
    <div>
      <h3 className="font-bold text-lg text-positive-dark-gray mb-1">{item.title}</h3>
      <p className="text-xs text-gray-500 mb-2 leading-relaxed">{item.description}</p>
      <p className="text-xs font-medium text-gray-400">{item.count} Tópicos</p>
    </div>
  </button>
);

interface ForumFilterButtonProps {
  tagItem: ForumTag;
  isActive?: boolean;
  onClick?: (id: string) => void;
}

const ForumFilterButton: React.FC<ForumFilterButtonProps> = ({ tagItem, isActive, onClick }) => {
  const baseStyle = "px-4 py-1.5 rounded-full font-semibold text-xs sm:text-sm transition-colors duration-200";
  const activeStyle = tagItem.type === 'category' 
    ? "bg-positive-lime text-positive-dark-gray" 
    : "bg-positive-green-accent text-positive-dark-gray ring-1 ring-positive-lime";
  const inactiveStyle = tagItem.type === 'category' 
    ? "bg-positive-green-accent text-positive-dark-gray hover:bg-opacity-70" 
    : "bg-gray-100 text-gray-600 hover:bg-gray-200";

  return (
    <button 
      onClick={() => onClick && onClick(tagItem.id)}
      className={`${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}
    >
      {tagItem.label}
    </button>
  );
};

interface ForumPageProps {
  onSelectCategory: (category: ForumItemData) => void; // New prop
}

export const ForumPage: React.FC<ForumPageProps> = ({ onSelectCategory }) => {
  const [activeFilters, setActiveFilters] = React.useState<Set<string>>(new Set());

  const toggleFilter = (id: string) => {
    setActiveFilters(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="flex-grow p-4 sm:p-6 md:p-8 bg-positive-bg-base overflow-y-auto">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-positive-dark-gray mb-2">
            FÓRUM DE INTELIGÊNCIA COLETIVA
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Um espaço para debates estruturados, partilha de conhecimento e construção colaborativa.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-lg font-bold text-positive-dark-gray mb-3 text-center sm:text-left">Explore por Categorias e Tags</h2>
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-3">
            {FORUM_PAGE_CATEGORIES.map(cat => (
              <ForumFilterButton key={cat.id} tagItem={cat} onClick={toggleFilter} isActive={activeFilters.has(cat.id)} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            {FORUM_PAGE_TAGS.map(tag => (
              <ForumFilterButton key={tag.id} tagItem={tag} onClick={toggleFilter} isActive={activeFilters.has(tag.id)} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {FORUM_PAGE_MAIN_SECTIONS.map(item => (
            <ForumSectionCard key={item.id} item={item} onSelectCategory={onSelectCategory} />
          ))}
        </div>
      </div>
    </div>
  );
};
