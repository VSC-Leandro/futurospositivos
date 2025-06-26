
import React from 'react';
import { Initiative, ProjectSummary } from '../types';
import { BackArrowIcon, InstitutionIcon } from './icons'; 

interface ProjectSummaryCardProps {
  project: ProjectSummary;
}

const ProjectSummaryCard: React.FC<ProjectSummaryCardProps> = ({ project }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
    <img src={project.imageUrl} alt={project.name} className="w-full h-40 object-cover"/>
    <div className="p-4">
      <h4 className="font-bold text-lg text-positive-dark-gray mb-1">{project.name}</h4>
      <p className="text-xs text-gray-600 mb-2 h-16 overflow-hidden">{project.description.substring(0,100)}...</p>
      <p className="text-xs font-semibold mb-3">
        <span className="bg-positive-green-accent text-positive-dark-gray px-2 py-0.5 rounded">OBJETIVO: {project.objective}</span>
      </p>
      <button className="w-full bg-positive-button-subtle-bg text-positive-dark-gray font-semibold text-sm py-2 rounded hover:bg-gray-300 transition-colors">
        VEJA MAIS
      </button>
    </div>
  </div>
);

interface InitiativeDetailsPageProps {
  initiative: Initiative | null;
  onBack: () => void;
}

export const InitiativeDetailsPage: React.FC<InitiativeDetailsPageProps> = ({ initiative, onBack }) => {
  if (!initiative) {
    return (
      <div className="flex-grow flex flex-col items-center justify-center p-8 bg-positive-bg-base">
        <p className="text-xl text-gray-600">Iniciativa não encontrada.</p>
        <button 
            onClick={onBack} 
            className="mt-6 bg-positive-lime text-positive-dark-gray font-semibold px-6 py-2 rounded-full hover:bg-opacity-80 transition-colors"
        >
            Voltar para Iniciativas
        </button>
      </div>
    );
  }

  return (
    <div className="flex-grow bg-positive-bg-base overflow-y-auto pb-10">
      <div 
        id="detail-banner" 
        className="h-56 sm:h-72 md:h-80 bg-gray-400 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${initiative.banner})` }}
      >
        <button 
          onClick={onBack} 
          className="absolute top-4 left-4 bg-black/40 text-white hover:bg-black/60 rounded-full p-2.5 z-10 transition-colors"
          aria-label="Voltar"
        >
          <BackArrowIcon className="w-5 h-5" />
        </button>
      </div>
      
      <div className="container mx-auto max-w-4xl p-4 sm:p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center md:items-end -mt-20 md:-mt-28 relative z-10">
          <img 
            id="detail-avatar" 
            src={initiative.avatar} 
            alt={`Avatar de ${initiative.name}`} 
            className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-positive-bg-base shadow-xl"
          />
          <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
            <h1 id="detail-name" className="text-3xl sm:text-4xl font-black tracking-tighter text-positive-dark-gray">{initiative.name}</h1>
            <div className="mt-3">
              <span className="text-xs text-gray-500 mr-1">TIPO:</span>
              <span className="inline-flex items-center bg-positive-green-accent text-positive-dark-gray px-3 py-1.5 rounded-full text-sm font-semibold">
                <InstitutionIcon className="w-4 h-4 mr-2 text-positive-dark-gray" />
                <span id="detail-type">{initiative.type.toUpperCase()}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
          <div className="md:col-span-2">
            <p className="text-sm font-medium text-gray-500 mb-1">Descrição</p>
            <div className="relative">
              <p id="detail-description" className="text-gray-700 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                {initiative.details.Descrição}
              </p>
            </div>

            <div className="flex justify-between items-baseline mt-4">
              <p className="text-xs text-gray-500">Local: {initiative.details.Local}</p>
              <button className="text-xs text-gray-500 hover:text-positive-dark-gray hover:underline transition-colors">
                Denúncia
              </button>
            </div>
            
            <div className="mt-4">
              <button className="w-full sm:w-auto px-6 py-2.5 text-sm rounded-full bg-positive-lime text-positive-dark-gray font-bold hover:bg-opacity-80 transition-all duration-300">
                Informações de Contato
              </button>
            </div>
          </div>
          <aside className="md:col-span-1 space-y-6">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">Campo de Atuação</p>
              <div id="detail-tags" className="flex flex-wrap gap-2">
                {initiative.tags.map(tag => (
                  <span key={tag} className="bg-positive-lime text-positive-dark-gray font-semibold px-3 py-1 rounded-full text-xs">
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
        
        {initiative.projects && initiative.projects.length > 0 && (
          <div className="mt-12 border-t border-positive-light-gray pt-8">
            <h3 className="font-black text-2xl text-positive-dark-gray mb-6 tracking-tight">Projetos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {initiative.projects.map(project => (
                <ProjectSummaryCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
