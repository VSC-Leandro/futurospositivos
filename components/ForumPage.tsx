import React, { useState, useMemo } from 'react';
import { ForumTopic, ForumItemData } from '../types';
import { PinIcon, PlusIcon } from './icons';

interface ForumPageProps {
  allTopics: ForumTopic[];
  categories: ForumItemData[];
  onSelectTopic: (topic: ForumTopic) => void;
  onOpenCreateTopicModal: () => void;
}

const TopicRow: React.FC<{ topic: ForumTopic; category?: ForumItemData; onSelectTopic: (topic: ForumTopic) => void; }> = ({ topic, category, onSelectTopic }) => {
  const participantAvatars = useMemo(() => {
    const authors = [
      topic.authorAvatar,
      ...(topic.replies || []).map(r => r.authorAvatar)
    ];
    return [...new Set(authors)].slice(0, 4);
  }, [topic]);

  return (
    <tr
      onClick={() => onSelectTopic(topic)}
      className="border-b border-positive-light-gray last:border-b-0 hover:bg-positive-green-accent/30 cursor-pointer transition-colors duration-150"
    >
      <td className="p-4 align-top">
        <div className="flex flex-col">
          <h3 className="font-bold text-positive-dark-gray mb-1.5 flex items-center">
            {topic.pinned && <PinIcon className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" />}
            {topic.title}
          </h3>
          <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-xs">
            {category && (
              <div className="flex items-center">
                <span className="w-2.5 h-2.5 rounded-sm mr-2" style={{ backgroundColor: category.color }}></span>
                <span className="text-gray-500">{category.title}</span>
              </div>
            )}
            <div className="flex gap-1.5">
              {topic.tags.map(tag => (
                <span key={tag} className="bg-positive-green-accent text-positive-dark-gray px-2 py-0.5 rounded-full text-[10px] font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </td>
      <td className="p-4 text-center align-middle">
        <div className="flex justify-center items-center -space-x-2">
          {participantAvatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt={`Participant ${index + 1}`}
              className="w-7 h-7 rounded-full ring-2 ring-white bg-gray-200"
            />
          ))}
        </div>
      </td>
      <td className="p-4 text-center align-middle text-positive-dark-gray font-medium">{topic.replyCount}</td>
      <td className="p-4 text-center align-middle text-positive-dark-gray font-medium">{topic.views}</td>
      <td className="p-4 text-center align-middle text-gray-500 text-sm">{topic.lastReplyTime}</td>
    </tr>
  );
};


export const ForumPage: React.FC<ForumPageProps> = ({ allTopics, categories, onSelectTopic, onOpenCreateTopicModal }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | 'all'>('all');
  const [activeSort, setActiveSort] = useState('Latest');

  const filteredAndSortedTopics = useMemo(() => {
    let topics = allTopics;

    if (selectedCategoryId !== 'all') {
      topics = topics.filter(t => t.categoryId === selectedCategoryId);
    }

    // Pinned topics always on top, unless sorting changes this logic
    const pinned = topics.filter(t => t.pinned);
    const notPinned = topics.filter(t => !t.pinned);

    // Simple sort logic (can be expanded)
    switch (activeSort) {
      case 'Top':
        notPinned.sort((a, b) => b.views - a.views);
        break;
      case 'New': // Assuming newest are first in the array
        break;
      case 'Latest':
      default:
        // Assuming array is already sorted by latest activity
        break;
    }

    return [...pinned, ...notPinned];
  }, [allTopics, selectedCategoryId, activeSort]);

  const TABS = ['Latest', 'New', 'Unread', 'Top', 'Hot', 'Categories'];

  return (
    <div className="flex-grow bg-positive-bg-base font-inter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="md:col-span-3 lg:col-span-2">
            <div className="sticky top-28 space-y-6">
              <div>
                <button
                  onClick={onOpenCreateTopicModal}
                  className="w-full flex items-center justify-center bg-positive-lime text-positive-dark-gray font-bold py-2.5 px-4 rounded-lg hover:bg-opacity-80 transition-colors text-sm"
                >
                  <PlusIcon className="w-4 h-4 mr-2" />
                  CRIAR TÓPICO
                </button>
              </div>
              <nav className="bg-white p-4 rounded-lg shadow-md space-y-1">
                <h3 className="px-3 pb-2 text-xs font-bold text-gray-500 uppercase tracking-wider">Categorias</h3>
                 <button
                    onClick={() => setSelectedCategoryId('all')}
                    className={`w-full text-left font-semibold text-sm px-3 py-2 rounded-md transition-colors ${selectedCategoryId === 'all' ? 'bg-positive-green-accent text-positive-dark-gray' : 'text-gray-600 hover:bg-gray-100 hover:text-positive-dark-gray'}`}
                  >
                   Todos os Tópicos
                  </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategoryId(cat.id)}
                    className={`w-full text-left flex items-center font-semibold text-sm px-3 py-2 rounded-md transition-colors ${selectedCategoryId === cat.id ? 'bg-positive-green-accent text-positive-dark-gray' : 'text-gray-600 hover:bg-gray-100 hover:text-positive-dark-gray'}`}
                  >
                    <span className="w-2.5 h-2.5 rounded-sm mr-2.5 flex-shrink-0" style={{backgroundColor: cat.color}}></span>
                    {cat.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="md:col-span-9 lg:col-span-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5">
              <div className="flex items-center border-b border-positive-light-gray">
                {TABS.map(tab => (
                   <button
                      key={tab}
                      onClick={() => setActiveSort(tab)}
                      className={`px-4 py-2 text-sm font-semibold transition-colors border-b-2 -mb-px ${activeSort === tab ? 'text-positive-dark-gray border-positive-lime' : 'text-gray-500 border-transparent hover:text-positive-dark-gray hover:border-gray-300'}`}
                    >
                      {tab}
                   </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-forum-card overflow-hidden">
               <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-positive-light-gray bg-gray-50/50">
                    <th className="p-4 text-left font-semibold text-gray-500 uppercase tracking-wider text-xs">Tópico</th>
                    <th className="p-4 text-center font-semibold text-gray-500 uppercase tracking-wider text-xs w-32">Participantes</th>
                    <th className="p-4 text-center font-semibold text-gray-500 uppercase tracking-wider text-xs w-24">Respostas</th>
                    <th className="p-4 text-center font-semibold text-gray-500 uppercase tracking-wider text-xs w-24">Views</th>
                    <th className="p-4 text-center font-semibold text-gray-500 uppercase tracking-wider text-xs w-28">Atividade</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAndSortedTopics.map(topic => (
                    <TopicRow
                      key={topic.id}
                      topic={topic}
                      category={categories.find(c => c.id === topic.categoryId)}
                      onSelectTopic={onSelectTopic}
                    />
                  ))}
                  {filteredAndSortedTopics.length === 0 && (
                     <tr>
                        <td colSpan={5} className="text-center p-10 text-gray-500">
                           Nenhum tópico encontrado.
                        </td>
                     </tr>
                  )}
                </tbody>
               </table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};