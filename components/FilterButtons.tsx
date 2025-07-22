
import React from 'react';
import { InitiativeCategory } from '../types';
import { InstitutionIcon, ProjectIcon, CollectiveIcon } from './icons';

interface FilterButtonProps {
  category: InitiativeCategory;
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onFilterChange: (category: InitiativeCategory) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ category, label, icon, isActive, onFilterChange }) => {
  return (
    <button
      onClick={() => onFilterChange(category)}
      aria-pressed={isActive}
      className={`flex items-center space-x-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border-2 
                  text-xs sm:text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-forum-positive-bg/50
                  ${isActive 
                    ? 'bg-forum-positive-bg border-forum-positive-bg text-white' 
                    : 'bg-white border-forum-positive-bg text-forum-positive-bg hover:bg-positive-green-accent/60'}`}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
      <span className="sm:hidden">{label.substring(0,6)}</span> {/* Short label for mobile */}
    </button>
  );
};


interface FilterButtonsProps {
  activeFilters: Set<InitiativeCategory>;
  onFilterChange: (category: InitiativeCategory) => void;
}

export const FilterButtons: React.FC<FilterButtonsProps> = ({ activeFilters, onFilterChange }) => {
  const buttonData = [
    {
      category: InitiativeCategory.INSTITUICAO,
      label: "INSTITUIÇÃO",
      icon: <InstitutionIcon className="h-4 w-4 sm:h-5 sm:w-5" />
    },
    {
      category: InitiativeCategory.PROJETO,
      label: "PROJETOS",
      icon: <ProjectIcon className="h-4 w-4 sm:h-5 sm:w-5" />
    },
    {
      category: InitiativeCategory.COLETIVO,
      label: "COLETIVOS",
      icon: <CollectiveIcon className="h-4 w-4 sm:h-5 sm:w-5" />
    }
  ];
  
  return (
    <>
      {buttonData.map(data => (
          <FilterButton 
            key={data.category}
            category={data.category} 
            label={data.label} 
            icon={data.icon} 
            isActive={activeFilters.has(data.category)}
            onFilterChange={onFilterChange} 
          />
      ))}
    </>
  );
};
