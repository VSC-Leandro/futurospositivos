import React from 'react';
import { FORUM_POPUP_DATA } from '../constants';
import { ForumItemData, Page } from '../types';
import { CloseIcon, UpArrowIcon } from './icons';

interface ForumPreviewItemProps {
  item: ForumItemData;
}

const ForumPreviewItem: React.FC<ForumPreviewItemProps> = ({ item }) => (
  <div className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-150 cursor-pointer">
    <div className={`p-2.5 rounded-lg ${item.iconBgClass}`}>
      <item.icon className={`h-5 w-5 ${item.textColorClass}`} />
    </div>
    <div>
      <h4 className="font-bold text-sm text-positive-dark-gray mb-0.5">{item.title}</h4>
      <p className="text-xs text-gray-500 leading-snug">{item.description}</p>
    </div>
    <div className="ml-auto pl-2 flex-shrink-0">
      <span className="text-xs font-bold bg-forum-positive-bg text-white w-5 h-5 flex items-center justify-center rounded-full">{item.count}</span>
    </div>
  </div>
);

interface ForumPreviewPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: Page) => void;
}

export const ForumPreviewPopup: React.FC<ForumPreviewPopupProps> = ({ isOpen, onClose, onNavigate }) => {
  if (!isOpen) {
    return null;
  }

  const handleNavigateToForum = () => {
    onNavigate(Page.FORUM);
    onClose(); // Close popup after navigating
  };

  return (
    <div 
      id="forum-preview-popup"
      className="fixed bottom-[calc(3.5rem+1.5rem+0.5rem)] left-6 z-20 w-[360px] bg-white rounded-xl shadow-custom-popup border-2 border-forum-positive-bg overflow-hidden transform transition-all duration-300 ease-out"
      style={{
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
        maxHeight: 'calc(100vh - 120px)' // ensure it doesn't go off-screen
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="forum-preview-title"
    >
      <div className="flex justify-between items-center p-3 border-b border-gray-200">
        <h3 id="forum-preview-title" className="text-xs font-bold text-positive-dark-gray tracking-wider uppercase">Fórum em Destaque</h3>
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Fechar prévia do fórum"
        >
          <UpArrowIcon className="h-4 w-4" />
        </button>
      </div>
      
      <div className="p-2 space-y-1 max-h-[400px] overflow-y-auto">
        {FORUM_POPUP_DATA.map(item => (
          <ForumPreviewItem key={item.id} item={item} />
        ))}
      </div>

      <div className="p-3 border-t border-gray-200">
        <button 
          onClick={handleNavigateToForum}
          className="w-full bg-forum-positive-bg text-white font-semibold text-sm py-2.5 rounded-lg hover:bg-opacity-90 transition-colors"
        >
          VEJA MAIS
        </button>
      </div>
    </div>
  );
};