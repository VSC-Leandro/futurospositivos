import React from 'react';
import { InitiativeCategory } from '../types';
import { InstitutionIcon, ProjectIcon, CollectiveIcon } from './icons';

interface FilterButtonProps {
  category: InitiativeCategory | 'all';
  label: string;
  icon: React.ReactNode;
  currentFilter: InitiativeCategory | 'all';
  onFilterChange: (category: InitiativeCategory | 'all') => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ category, label, icon, currentFilter, onFilterChange }) => {
  const isActive = currentFilter === category;
  return (
    <button
      onClick={() => onFilterChange(category)}
      className={`flex items-center space-x-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border-2 
                  text-xs sm:text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-positive-lime/50
                  ${isActive 
                    ? 'bg-positive-green-accent border-positive-lime text-positive-dark-gray' 
                    : 'bg-positive-bg-base border-positive-lime text-positive-dark-gray hover:bg-positive-green-accent/60'}`}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
      <span className="sm:hidden">{label.substring(0,6)}</span> {/* Short label for mobile */}
    </button>
  );
};


interface FilterButtonsProps {
  currentFilter: InitiativeCategory | 'all';
  onFilterChange: (category: InitiativeCategory | 'all') => void;
}

export const FilterButtons: React.FC<FilterButtonsProps> = ({ currentFilter, onFilterChange }) => {
  return (
    <>
      <FilterButton 
        category={InitiativeCategory.INSTITUICAO} 
        label="INSTITUIÇÃO" 
        icon={<InstitutionIcon className="h-4 w-4 sm:h-5 sm:w-5"/>} 
        currentFilter={currentFilter} 
        onFilterChange={onFilterChange} 
      />
      <FilterButton 
        category={InitiativeCategory.PROJETO} 
        label="PROJETOS" 
        icon={<ProjectIcon className="h-4 w-4 sm:h-5 sm:w-5"/>} 
        currentFilter={currentFilter} 
        onFilterChange={onFilterChange} 
      />
      <FilterButton 
        category={InitiativeCategory.COLETIVO} 
        label="COLETIVOS" 
        icon={<CollectiveIcon className="h-4 w-4 sm:h-5 sm:w-5"/>} 
        currentFilter={currentFilter} 
        onFilterChange={onFilterChange} 
      />
    </>
  );
};
