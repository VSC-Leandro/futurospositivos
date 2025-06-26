
import React, { useState } from 'react';
import { ForumTopic, ForumReply } from '../types';
import { BackArrowIcon } from './icons';

// A small component for rendering a single reply
const ReplyCard: React.FC<{ reply: ForumReply }> = ({ reply }) => (
  <div className="flex items-start space-x-4 py-4">
    <img src={reply.authorAvatar} alt={reply.author} className="w-10 h-10 rounded-full" />
    <div className="flex-1">
      <div className="flex items-baseline space-x-2">
        <p className="font-bold text-sm text-positive-dark-gray">{reply.author}</p>
        <p className="text-xs text-gray-400">{reply.timestamp}</p>
      </div>
      <p className="text-sm text-gray-700 mt-1 whitespace-pre-wrap">{reply.content}</p>
    </div>
  </div>
);

interface ForumTopicDetailsPageProps {
  topic: ForumTopic;
  onBack: () => void;
  onAddReply: (topicId: string, content: string) => void;
}

export const ForumTopicDetailsPage: React.FC<ForumTopicDetailsPageProps> = ({ topic, onBack, onAddReply }) => {
  const [newReply, setNewReply] = useState('');

  const handleReplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReply.trim()) {
      onAddReply(topic.id, newReply);
      setNewReply('');
    }
  };
  
  return (
    <div className="flex-grow p-4 sm:p-6 md:p-8 bg-white overflow-y-auto">
      <div className="container mx-auto max-w-3xl">
        <button
          onClick={onBack}
          className="flex items-center text-sm font-semibold text-gray-600 hover:text-positive-dark-gray mb-6 group"
        >
          <BackArrowIcon className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Voltar para os tópicos
        </button>

        {/* Topic Header */}
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-positive-dark-gray">
            {topic.title}
          </h1>
           <div className="flex flex-wrap gap-x-4 gap-y-1 items-center text-xs text-gray-500 mt-2">
            <span>Criado por <strong>{topic.author}</strong></span>
            <span>Última resposta: {topic.lastReplyTime}</span>
            <div className="flex flex-wrap gap-1.5">
              {topic.tags.map(tag => (
                <span key={tag} className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Original Post */}
        <div className="bg-positive-bg-base p-5 rounded-lg mb-8 border border-positive-light-gray">
          <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">
            {topic.message}
          </p>
        </div>

        {/* Replies Section */}
        <h2 className="text-xl font-bold text-positive-dark-gray mb-4 border-b border-gray-200 pb-2">
          Respostas ({topic.replies?.length || 0})
        </h2>
        <div className="space-y-2 divide-y divide-gray-200">
           {topic.replies && topic.replies.length > 0 ? (
            topic.replies.map(reply => <ReplyCard key={reply.id} reply={reply} />)
          ) : (
            <p className="text-sm text-gray-500 py-6 text-center">Ainda não há respostas. Seja o primeiro a comentar!</p>
          )}
        </div>

        {/* Reply Form */}
        <div className="mt-10 pt-6 border-t-2 border-positive-lime">
          <h3 className="text-lg font-bold text-positive-dark-gray mb-3">Deixar uma resposta</h3>
          <form onSubmit={handleReplySubmit}>
            <textarea
              value={newReply}
              onChange={e => setNewReply(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-positive-lime focus:border-positive-lime text-sm"
              rows={5}
              placeholder="Escreva sua resposta aqui..."
              required
            ></textarea>
            <div className="mt-3 text-right">
              <button
                type="submit"
                className="px-6 py-2.5 text-sm font-bold text-positive-dark-gray bg-positive-lime hover:bg-opacity-80 rounded-md transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                disabled={!newReply.trim()}
              >
                Publicar Resposta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
