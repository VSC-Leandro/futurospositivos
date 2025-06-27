
import React, { useState, useRef } from 'react';
import { ForumTopic, ForumReply } from '../types';
import { BackArrowIcon, BoldIcon, ItalicIcon, LinkIcon, EditIcon, TrashIcon } from './icons';

// Simple markdown-like parser to render bold, italic, and links
const parseContent = (text: string) => {
  const html = text
    .replace(/</g, '&lt;').replace(/>/g, '&gt;') // Basic HTML escape
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/__(.*?)__/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/_(.*?)_/g, '<em>$1</em>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">$1</a>');

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

// A component for rendering a single reply, now with editing capabilities
const ReplyCard: React.FC<{
  reply: ForumReply;
  isAuthor: boolean;
  onEdit: (replyId: string, newContent: string) => void;
  onDelete: (replyId: string) => void;
}> = ({ reply, isAuthor, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(reply.content);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSave = () => {
    if (editedContent.trim()) {
      onEdit(reply.id, editedContent);
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    if (window.confirm('Tem certeza que deseja excluir esta resposta? Esta ação não pode ser desfeita.')) {
      onDelete(reply.id);
    }
  };

  return (
    <div className="flex items-start space-x-4 py-4">
      <img src={reply.authorAvatar} alt={reply.author} className="w-10 h-10 rounded-full flex-shrink-0 mt-1" />
      <div className="flex-1">
        {isEditing ? (
          <div>
            <textarea
              ref={textareaRef}
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-positive-lime focus:border-positive-lime"
              rows={4}
            />
            <div className="flex items-center space-x-2 mt-2">
              <button
                onClick={handleSave}
                className="px-4 py-1.5 text-xs font-bold text-positive-dark-gray bg-positive-lime hover:bg-opacity-80 rounded-md transition-colors"
              >
                Salvar
              </button>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setEditedContent(reply.content);
                }}
                className="px-4 py-1.5 text-xs font-semibold text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-baseline space-x-2">
              <p className="font-bold text-sm text-positive-dark-gray">{reply.author}</p>
              <p className="text-xs text-gray-400">{reply.timestamp}</p>
              {isAuthor && (
                <div className="flex items-center space-x-2 ml-auto">
                  <button onClick={() => setIsEditing(true)} className="text-gray-400 hover:text-blue-600" title="Editar">
                    <EditIcon className="w-4 h-4" />
                  </button>
                  <button onClick={handleDelete} className="text-gray-400 hover:text-red-600" title="Excluir">
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
            <div className="text-sm text-gray-700 mt-1 prose prose-sm max-w-none">
              {parseContent(reply.content)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


interface ForumTopicDetailsPageProps {
  topic: ForumTopic;
  onBack: () => void;
  onAddReply: (topicId: string, content: string) => void;
  onEditReply: (topicId: string, replyId: string, newContent: string) => void;
  onDeleteReply: (topicId: string, replyId: string) => void;
}

export const ForumTopicDetailsPage: React.FC<ForumTopicDetailsPageProps> = ({ topic, onBack, onAddReply, onEditReply, onDeleteReply }) => {
  const [newReply, setNewReply] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleReplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReply.trim()) {
      onAddReply(topic.id, newReply);
      setNewReply('');
    }
  };

  const applyFormat = (format: 'bold' | 'italic' | 'link') => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = newReply.substring(start, end);
    let replacement = selectedText;

    if (format === 'bold') {
      replacement = `**${selectedText}**`;
    } else if (format === 'italic') {
      replacement = `*${selectedText}*`;
    } else if (format === 'link') {
      const url = prompt('Digite a URL do link:');
      if (url) {
        replacement = `[${selectedText || 'texto do link'}](${url})`;
      }
    }
    
    setNewReply(
      newReply.substring(0, start) + replacement + newReply.substring(end)
    );

    // After state update, focus textarea and set cursor position
    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + replacement.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  return (
    <div className="flex-grow p-4 sm:p-6 md:p-8 bg-white overflow-y-auto">
      <div className="container mx-auto max-w-3xl">
        <button
          onClick={onBack}
          className="flex items-center text-sm font-semibold text-gray-600 hover:text-positive-dark-gray mb-6 group"
        >
          <BackArrowIcon className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Voltar para o Fórum
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
        <div className="bg-positive-bg-base p-5 rounded-lg mb-8 border border-positive-light-gray prose prose-sm max-w-none">
          {parseContent(topic.message)}
        </div>

        {/* Replies Section */}
        <h2 className="text-xl font-bold text-positive-dark-gray mb-4 border-b border-gray-200 pb-2">
          Respostas ({topic.replies?.length || 0})
        </h2>
        <div className="space-y-2 divide-y divide-gray-200">
          {topic.replies && topic.replies.length > 0 ? (
            topic.replies.map(reply => (
              <ReplyCard
                key={reply.id}
                reply={reply}
                isAuthor={reply.author === 'Usuário Atual'}
                onEdit={(replyId, newContent) => onEditReply(topic.id, replyId, newContent)}
                onDelete={(replyId) => onDeleteReply(topic.id, replyId)}
              />
            ))
          ) : (
            <p className="text-sm text-gray-500 py-6 text-center">Ainda não há respostas. Seja o primeiro a comentar!</p>
          )}
        </div>

        {/* Reply Form */}
        <div className="mt-10 pt-6 border-t-2 border-positive-lime">
          <h3 className="text-lg font-bold text-positive-dark-gray mb-3">Deixar uma resposta</h3>
          <form onSubmit={handleReplySubmit}>
            <div className="border border-gray-300 rounded-md">
              <div className="flex items-center space-x-1 p-2 border-b bg-gray-50">
                <button type="button" onClick={() => applyFormat('bold')} className="p-2 rounded hover:bg-gray-200" title="Negrito (Ctrl+B)"> <BoldIcon className="h-4 w-4" /> </button>
                <button type="button" onClick={() => applyFormat('italic')} className="p-2 rounded hover:bg-gray-200" title="Itálico (Ctrl+I)"> <ItalicIcon className="h-4 w-4" /> </button>
                <button type="button" onClick={() => applyFormat('link')} className="p-2 rounded hover:bg-gray-200" title="Inserir Link"> <LinkIcon className="h-4 w-4" /> </button>
              </div>
              <textarea
                ref={textareaRef}
                value={newReply}
                onChange={e => setNewReply(e.target.value)}
                className="w-full p-3 border-0 focus:ring-0 text-sm"
                rows={5}
                placeholder="Escreva sua resposta aqui..."
                required
              ></textarea>
            </div>
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
