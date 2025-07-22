

import React from 'react';
import { Initiative } from '../types';
import { PlusIcon } from './icons';
import { getTagStyle } from './utils';

interface InitiativeCardProps {
  initiative: Initiative;
  onAccessInitiative: (initiative: Initiative) => void;
}

export const InitiativeCard: React.FC<InitiativeCardProps> = ({ initiative, onAccessInitiative }) => {
  return (
    <div className="bg-white rounded-xl p-5 border-2 border-positive-green-accent shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:transform hover:-translate-y-1 flex items-center gap-6">
      <img 
        src={initiative.avatar} 
        alt={`Avatar de ${initiative.name}`} 
        className="w-24 h-24 rounded-full object-cover flex-shrink-0 border-2 border-positive-green-accent"
      />
      <div className="flex-grow">
        <div className="flex items-baseline gap-x-3 mb-1">
          <h3 className="font-black text-xl md:text-2xl text-positive-dark-gray tracking-tighter uppercase">{initiative.name}</h3>
          <p className="font-semibold text-xs md:text-sm whitespace-nowrap">
            <span className="text-gray-400">Tipo:</span> <span className="text-cadastrar-button-bg font-bold">{initiative.type}</span>
          </p>
        </div>
        <p className="text-gray-600 my-3 text-sm leading-relaxed line-clamp-2">
          {initiative.details.Descrição}
        </p>
        <div className="flex flex-wrap gap-2 justify-start mt-4">
          {initiative.tags.map(tag => {
            const style = getTagStyle(tag);
            return (
              <span 
                key={tag}
                style={{ backgroundColor: style.backgroundColor, color: style.color }}
                className="text-xs font-semibold px-3 py-1 rounded-full"
              >
                {tag.toUpperCase()}
              </span>
            );
          })}
        </div>
      </div>
      
      <div className="pl-4">
        <button 
          onClick={() => onAccessInitiative(initiative)}
          className="flex-shrink-0 bg-forum-positive-bg text-white w-14 h-14 rounded-full flex items-center justify-center shadow-md hover:bg-opacity-90 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-forum-positive-bg"
          aria-label={`Acessar ${initiative.name}`}
        >
          <PlusIcon className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};