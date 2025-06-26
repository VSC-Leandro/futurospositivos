
import React, { useState, useEffect } from 'react';
import { ForumItemData } from '../types';
import { CloseIcon } from './icons';

interface CreateTopicModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateTopic: (topicData: { title: string; categoryId: string; tags: string; message: string }) => void;
  forumCategories: ForumItemData[];
  defaultCategoryId?: string;
}

export const CreateTopicModal: React.FC<CreateTopicModalProps> = ({
  isOpen,
  onClose,
  onCreateTopic,
  forumCategories,
  defaultCategoryId,
}) => {
  const [title, setTitle] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(defaultCategoryId || (forumCategories.length > 0 ? forumCategories[0].id : ''));
  const [tags, setTags] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      // Reset form when modal opens, and set default category
      setTitle('');
      setTags('');
      setMessage('');
      setSelectedCategoryId(defaultCategoryId || (forumCategories.length > 0 ? forumCategories[0].id : ''));
    }
  }, [isOpen, defaultCategoryId, forumCategories]);
  
  useEffect(() => {
    // Pre-select category if defaultCategoryId changes while modal might be open
     if (defaultCategoryId) {
      setSelectedCategoryId(defaultCategoryId);
    } else if (forumCategories.length > 0 && !selectedCategoryId) {
      // Fallback if defaultCategoryId is not set initially but categories are available
      setSelectedCategoryId(forumCategories[0].id);
    }
  }, [defaultCategoryId, forumCategories, selectedCategoryId]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !selectedCategoryId || !message.trim()) {
      // Basic validation: title, category, and message are required
      alert('Por favor, preencha o título, selecione uma categoria e escreva sua mensagem.');
      return;
    }
    onCreateTopic({ title, categoryId: selectedCategoryId, tags, message });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="create-topic-title"
    >
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 id="create-topic-title" className="text-2xl font-bold text-positive-dark-gray">
            Criar Novo Tópico
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Fechar modal"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="topic-title" className="block text-sm font-semibold text-gray-700 mb-1">
              Título do Tópico
            </label>
            <input
              type="text"
              id="topic-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2.5 border border-gray-600 bg-positive-dark-gray text-white placeholder-gray-400 rounded-md focus:ring-1 focus:ring-positive-lime focus:border-positive-lime text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="topic-category" className="block text-sm font-semibold text-gray-700 mb-1">
              Categoria
            </label>
            <select
              id="topic-category"
              value={selectedCategoryId}
              onChange={(e) => setSelectedCategoryId(e.target.value)}
              className="w-full p-2.5 border border-gray-600 bg-positive-dark-gray text-white rounded-md focus:ring-1 focus:ring-positive-lime focus:border-positive-lime text-sm"
              required
            >
              {forumCategories.map(category => (
                <option key={category.id} value={category.id} className="bg-positive-dark-gray text-white">
                  {category.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="topic-tags" className="block text-sm font-semibold text-gray-700 mb-1">
              Tags (separadas por vírgula)
            </label>
            <input
              type="text"
              id="topic-tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="#IA, #COP30, #sugestão"
              className="w-full p-2.5 border border-gray-600 bg-positive-dark-gray text-white placeholder-gray-400 rounded-md focus:ring-1 focus:ring-positive-lime focus:border-positive-lime text-sm"
            />
          </div>

          <div>
            <label htmlFor="topic-message" className="block text-sm font-semibold text-gray-700 mb-1">
              Sua Mensagem
            </label>
            <textarea
              id="topic-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="w-full p-2.5 border border-gray-600 bg-positive-dark-gray text-white placeholder-gray-400 rounded-md focus:ring-1 focus:ring-positive-lime focus:border-positive-lime text-sm"
              required
            ></textarea>
          </div>

          <div className="flex justify-end space-x-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-sm font-semibold text-white bg-positive-lime hover:bg-opacity-80 rounded-md transition-colors"
            >
              Criar Tópico
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
