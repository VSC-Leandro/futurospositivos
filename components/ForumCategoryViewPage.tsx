
import React, { useState, useMemo } from 'react';
import { ForumItemData, ForumTopic, ForumSidebarTag } from '../types';
import { ForumTopicCard } from './ForumTopicCard';
import { BackArrowIcon, PlusIcon } from './icons';

interface ForumCategoryViewPageProps {
  categoryData: ForumItemData;
  topics: ForumTopic[];
  availableTags: ForumSidebarTag[];
  onBack: () => void;
  onOpenCreateTopicModal: () => void; // New prop
}

export const ForumCategoryViewPage: React.FC<ForumCategoryViewPageProps> = ({
  categoryData,
  topics,
  availableTags,
  onBack,
  onOpenCreateTopicModal, // Destructure new prop
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSidebarTags, setSelectedSidebarTags] = useState<Set<string>>(new Set());

  const handleTagClick = (tagId: string) => {
    setSelectedSidebarTags(prev => {
      const newSelectedTags = new Set(prev);
      if (newSelectedTags.has(tagId)) {
        newSelectedTags.delete(tagId);
      } else {
        newSelectedTags.add(tagId);
      }
      return newSelectedTags;
    });
  };

  const filteredTopics = useMemo(() => {
    const searchFilteredTopics = topics.filter(topic => 
      topic.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedSidebarTags.size === 0) {
      return searchFilteredTopics;
    }
    
    return searchFilteredTopics.filter(topic => {
      return topic.tags.some(topicTagString => {
        return selectedSidebarTags.has(topicTagString.replace('#', ''));
      });
    });
  }, [topics, searchTerm, selectedSidebarTags]);

  return (
    <div className="flex-grow p-4 sm:p-6 md:p-8 bg-positive-bg-base overflow-y-auto">
      <div className="container mx-auto max-w-5xl">
        <button
          onClick={onBack}
          className="flex items-center text-sm font-semibold text-gray-600 hover:text-positive-dark-gray mb-6 group"
        >
          <BackArrowIcon className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Voltar
        </button>

        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-positive-dark-gray">
            {categoryData.title.toUpperCase()}
          </h1>
          <p className="text-sm text-gray-500 mt-1">{categoryData.description}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-1/4 lg:w-1/5 flex-shrink-0">
            <div className="bg-white p-4 rounded-lg shadow sticky top-28"> {/* Adjusted sticky top */}
              <input
                type="text"
                placeholder="Busque nos tópicos..." // Changed placeholder
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white w-full p-2 border border-gray-300 rounded-md text-sm mb-4 focus:ring-1 focus:ring-positive-lime focus:border-positive-lime"
              />
              <div className="text-sm font-semibold text-gray-700 mb-2">Filtrar por Tags:</div>
              <div className="space-y-1.5 mb-4 max-h-60 overflow-y-auto">
                {availableTags.map(tag => (
                  <button
                    key={tag.id}
                    onClick={() => handleTagClick(tag.id)}
                    className={`w-full text-left text-sm p-1.5 rounded transition-colors duration-150
                                ${selectedSidebarTags.has(tag.id)
                                    ? `${tag.colorClass ? tag.colorClass.replace('hover:','').replace(/bg-(\w+)-100/, 'bg-$1-200 font-semibold') : 'bg-positive-green-accent text-positive-dark-gray font-semibold'}`
                                    : `${tag.colorClass || 'hover:bg-gray-100 text-gray-700'}`}`}
                  >
                    {tag.label}
                  </button>
                ))}
              </div>
              <button 
                onClick={onOpenCreateTopicModal} // Call new handler
                className="w-full flex items-center justify-center bg-positive-lime text-positive-dark-gray font-semibold py-2.5 px-4 rounded-md hover:bg-opacity-80 transition-colors text-sm"
              >
                <PlusIcon className="w-4 h-4 mr-2" />
                CRIAR NOVO TÓPICO
              </button>
            </div>
          </aside>

          <main className="flex-grow w-full md:w-3/4 lg:w-4/5">
            {filteredTopics.length > 0 ? (
              <div className="space-y-4">
                {filteredTopics.map(topic => (
                  <ForumTopicCard key={topic.id} topic={topic} />
                ))}
              </div>
            ) : (
              <div className="text-center py-10 bg-white rounded-lg shadow">
                <p className="text-gray-500">Nenhum tópico encontrado para os filtros selecionados.</p>
                {searchTerm && <p className="text-xs text-gray-400 mt-1">Termo buscado: "{searchTerm}"</p>}
                {selectedSidebarTags.size > 0 && <p className="text-xs text-gray-400 mt-1">Tags selecionadas: {Array.from(selectedSidebarTags).join(', ')}</p>}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};