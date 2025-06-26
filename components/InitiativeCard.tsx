
import React from 'react';
import { Initiative } from '../types';
import { PlusIcon } from './icons'; // Import PlusIcon

interface InitiativeCardProps {
  initiative: Initiative;
  onAccessInitiative: (initiative: Initiative) => void;
}

export const InitiativeCard: React.FC<InitiativeCardProps> = ({ initiative, onAccessInitiative }) => {
  return (
    <div className="bg-white rounded-xl p-6 border-l-4 border-positive-lime shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:transform hover:-translate-y-1 flex flex-col sm:flex-row items-center gap-6 relative"> {/* Added relative positioning */}
      <img 
        src={initiative.avatar} 
        alt={`Avatar de ${initiative.name}`} 
        className="w-24 h-24 rounded-full object-cover flex-shrink-0 border-2 border-positive-lime"
      />
      <div className="flex-grow text-center sm:text-left">
        <h3 className="font-black text-xl md:text-2xl text-positive-dark-gray tracking-tight">{initiative.name}</h3>
        <p className="font-semibold text-xs md:text-sm text-gray-500 mt-0.5">
          <span className="text-positive-dark-gray font-bold">{initiative.type}</span>
        </p>
        <p className="text-gray-600 my-2 text-sm leading-relaxed line-clamp-3 sm:line-clamp-2 md:line-clamp-3"> {/* Added line-clamp for better text control */}
          {initiative.details.Descrição}
        </p>
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start mt-3">
          {initiative.tags.slice(0, 2).map(tag => ( // Show max 2 tags for cleaner look
            <span key={tag} className="bg-positive-green-accent text-positive-dark-gray text-xs font-semibold px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* New Plus button replacing the old "Acessar" button */}
      <button 
        onClick={() => onAccessInitiative(initiative)}
        className="absolute bottom-5 right-5 bg-positive-lime text-positive-dark-gray p-3 rounded-full shadow-md hover:bg-opacity-80 transition-colors focus:outline-none focus:ring-2 focus:ring-positive-lime focus:ring-opacity-50"
        aria-label={`Acessar ${initiative.name}`}
      >
        <PlusIcon className="w-6 h-6" />
      </button>
    </div>
  );
};
