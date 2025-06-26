
import React from 'react';
import { InitiativeCategory } from '../types';
import { CloseIcon, InstitutionIcon, ProjectIcon } from './icons';

interface AddInitiativeTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectType: (type: InitiativeCategory) => void;
}

const ChoiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}> = ({ icon, title, description, onClick }) => (
  <button
    onClick={onClick}
    className="flex flex-col sm:flex-row items-start text-left w-full p-4 sm:p-5 border-2 border-positive-green-accent hover:border-positive-lime bg-white hover:bg-positive-green-accent/30 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-positive-lime focus:ring-opacity-50 space-y-3 sm:space-y-0 sm:space-x-4"
  >
    <div className="p-3 bg-positive-lime text-positive-dark-gray rounded-lg flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-bold text-positive-dark-gray mb-1">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  </button>
);

export const AddInitiativeTypeModal: React.FC<AddInitiativeTypeModalProps> = ({
  isOpen,
  onClose,
  onSelectType,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-40 transition-opacity duration-300"
      onClick={onClose} // Close on backdrop click
      role="dialog"
      aria-modal="true"
      aria-labelledby="add-initiative-type-title"
    >
      <div
        className="bg-white rounded-xl shadow-xl p-6 sm:p-8 w-full max-w-xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
      >
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <h2 id="add-initiative-type-title" className="text-xl sm:text-2xl font-bold text-positive-dark-gray">
            O que você gostaria de adicionar?
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 -mr-2 -mt-2 sm:-mr-3 sm:-mt-3"
            aria-label="Fechar modal"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-4 sm:space-y-5">
          <ChoiceCard
            icon={<InstitutionIcon className="w-6 h-6 sm:w-7 sm:h-7" />}
            title="Adicionar Instituição"
            description="Para organizações da sociedade civil, academia, governo ou setor empresarial que desejam mapear sua presença e atuação."
            onClick={() => onSelectType(InitiativeCategory.INSTITUICAO)}
          />
          <ChoiceCard
            icon={<ProjectIcon className="w-6 h-6 sm:w-7 sm:h-7" />}
            title="Adicionar Projeto"
            description="Para atividades práticas, presenciais ou digitais, que acontecem em um território específico e buscam gerar impacto positivo."
            onClick={() => onSelectType(InitiativeCategory.PROJETO)}
          />
        </div>
      </div>
    </div>
  );
};
