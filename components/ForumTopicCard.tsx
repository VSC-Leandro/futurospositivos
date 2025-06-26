
import React from 'react';
import { ForumTopic } from '../types';

interface ForumTopicCardProps {
  topic: ForumTopic;
  onSelectTopic: (topic: ForumTopic) => void;
}

export const ForumTopicCard: React.FC<ForumTopicCardProps> = ({ topic, onSelectTopic }) => {
  return (
    <button
      onClick={() => onSelectTopic(topic)}
      className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200/80 w-full text-left focus:outline-none focus:ring-2 focus:ring-positive-lime focus:ring-opacity-50"
    >
      <h3 className="text-lg font-bold text-positive-dark-gray mb-1.5">
        {topic.title}
      </h3>
      <p className="text-xs text-gray-500 mb-2">
        por {topic.author} • Última resposta {topic.lastReplyTime}
      </p>
      <div className="flex flex-wrap gap-2 mb-3">
        {topic.tags.map(tag => (
          <span key={tag} className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-xs text-gray-400 font-medium text-right">
        {topic.replyCount} Respostas
      </p>
    </button>
  );
};
