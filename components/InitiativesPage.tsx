
import React from 'react';
import { Initiative } from '../types';
import { InitiativeCard } from './InitiativeCard';

interface InitiativesPageProps {
  initiatives: Initiative[];
  onShowInitiativeDetails: (initiative: Initiative) => void;
  onOpenCreateInitiativeModal: () => void; // New prop
}

export const InitiativesPage: React.FC<InitiativesPageProps> = ({ initiatives, onShowInitiativeDetails, onOpenCreateInitiativeModal }) => {
  return (
    <div className="flex-grow p-4 sm:p-6 md:p-8 bg-positive-bg-base overflow-y-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Main content area for initiative cards */}
          <div className="md:col-span-3">
            <div className="space-y-6">
              {initiatives.map(item => (
                <InitiativeCard key={item.id} initiative={item} onAccessInitiative={onShowInitiativeDetails} />
              ))}
              {initiatives.length === 0 && (
                <div className="text-center py-10 bg-white rounded-lg shadow">
                    <p className="text-gray-500">Nenhuma iniciativa encontrada.</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar for filters and actions */}
          <aside className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-28"> {/* Adjusted sticky top */}
              <h3 className="text-xl font-bold text-positive-dark-gray mb-4">Filtros de perfil</h3>
              
              {/* Sorting Dropdown - Moved here */}
              <div className="mb-4">
                <select 
                  aria-label="Ordenar por"
                  className="w-full mt-1 bg-white border-2 border-gray-300 rounded-md p-2 text-sm text-gray-700 focus:border-positive-lime focus:ring-1 focus:ring-positive-lime"
                >
                  <option>Mais recentes primeiro</option>
                  <option>Mais antigos primeiro</option>
                  <option>Ordem Alfabética (A-Z)</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="filter-area" className="font-semibold text-gray-700 text-sm">Selecione Campo de Atuação</label>
                <select 
                  id="filter-area"
                  className="w-full mt-1 bg-white border-2 border-gray-300 rounded-md p-2 text-sm focus:border-positive-lime focus:ring-1 focus:ring-positive-lime"
                >
                  <option>Todas as áreas</option>
                  <option>Mudanças Climáticas</option>
                  <option>Desenvolvimento Local</option>
                  <option>Reflorestamento</option>
                  <option>Arte e Cultura</option>
                  <option>Agroecologia</option>
                  {/* Add more options based on available tags */}
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="filter-type" className="font-semibold text-gray-700 text-sm">Selecione Tipo de Iniciativa</label>
                <select 
                  id="filter-type"
                  className="w-full mt-1 bg-white border-2 border-gray-300 rounded-md p-2 text-sm focus:border-positive-lime focus:ring-1 focus:ring-positive-lime"
                >
                  <option>Todos os tipos</option>
                  <option>Instituição</option>
                  <option>Projeto</option>
                  <option>Coletivo</option>
                </select>
              </div>
              
              <button className="w-full mt-6 text-center font-semibold text-sm text-gray-600 hover:text-positive-dark-gray transition-colors">
                Limpar filtros
              </button>

              <button 
                onClick={onOpenCreateInitiativeModal} // Connect handler
                className="w-full mt-8 bg-positive-lime text-positive-dark-gray font-bold py-3 px-4 rounded-lg text-center hover:bg-opacity-80 transition-colors"
              >
                CADASTRAR INICIATIVA
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
