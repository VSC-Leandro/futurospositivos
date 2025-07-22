

import React, { useState, useMemo } from 'react';
import { Initiative, InitiativeCategory } from '../types';
import { InitiativeCard } from './InitiativeCard';
import { ChevronDownIcon } from './icons';

interface InitiativesPageProps {
  initiatives: Initiative[];
  onShowInitiativeDetails: (initiative: Initiative) => void;
  onOpenCreateInitiativeModal: () => void;
}

export const InitiativesPage: React.FC<InitiativesPageProps> = ({ initiatives, onShowInitiativeDetails, onOpenCreateInitiativeModal }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('recent');
  const [filterCampo, setFilterCampo] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const itemsPerPage = 10;

  const camposDeAtuacao = useMemo(() => {
    const campos = initiatives.map(i => i.campo).filter((c): c is string => !!c);
    return [...new Set(campos)].sort();
  }, [initiatives]);

  const initiativeTypes = Object.values(InitiativeCategory);
  
  const processedInitiatives = useMemo(() => {
    let filtered = [...initiatives];

    if (filterType !== 'all') {
      filtered = filtered.filter(i => i.type === filterType);
    }

    if (filterCampo !== 'all') {
      filtered = filtered.filter(i => i.campo === filterCampo);
    }
    
    switch (sortOrder) {
      case 'recent':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'oldest':
        filtered.sort((a, b) => a.id - b.id);
        break;
      case 'alpha':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [initiatives, sortOrder, filterType, filterCampo]);

  const pageCount = Math.ceil(processedInitiatives.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = processedInitiatives.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleFilterChange = (setter: React.Dispatch<React.SetStateAction<string>>, value: string) => {
      setter(value);
      setCurrentPage(1);
  };
  
  const clearFilters = () => {
    setSortOrder('recent');
    setFilterCampo('all');
    setFilterType('all');
    setCurrentPage(1);
  };

  return (
    <div className="flex-grow p-4 sm:p-6 md:p-8 bg-positive-bg-base overflow-y-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main content area for initiative cards */}
          <div className="lg:col-span-8">
            <div className="space-y-6">
              {currentItems.map(item => (
                <InitiativeCard key={item.id} initiative={item} onAccessInitiative={onShowInitiativeDetails} />
              ))}
              {processedInitiatives.length === 0 && (
                <div className="text-center py-10 bg-white rounded-lg shadow">
                    <p className="text-gray-500">Nenhuma iniciativa encontrada para os filtros selecionados.</p>
                </div>
              )}
            </div>
             {pageCount > 1 && (
                <div className="flex justify-center mt-8">
                  <nav aria-label="Pagination">
                    <ul className="inline-flex items-center -space-x-px text-sm">
                        {/* Previous Button */}
                        <li>
                            <button
                                onClick={() => paginate(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Anterior
                            </button>
                        </li>
                        {/* Page Numbers */}
                        {Array.from({ length: pageCount }, (_, i) => i + 1).map(number => (
                            <li key={number}>
                            <button
                                onClick={() => paginate(number)}
                                className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 ${currentPage === number ? 'text-white bg-cadastrar-button-bg border-cadastrar-button-bg' : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'}`}
                            >
                                {number}
                            </button>
                            </li>
                        ))}
                        {/* Next Button */}
                        <li>
                            <button
                                onClick={() => paginate(currentPage + 1)}
                                disabled={currentPage === pageCount}
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Próxima
                            </button>
                        </li>
                    </ul>
                  </nav>
                </div>
              )}
          </div>

          {/* Sidebar for filters and actions */}
          <aside className="lg:col-span-4">
            <div className="bg-white p-6 rounded-xl shadow-lg sticky top-36">
              <h3 className="text-xl font-bold text-positive-dark-gray mb-5">Filtros de perfil</h3>
              
              <div className="space-y-4">
                {/* Sorting Dropdown */}
                <div className="relative">
                  <select 
                    aria-label="Ordenar por"
                    value={sortOrder}
                    onChange={(e) => handleFilterChange(setSortOrder, e.target.value)}
                    className="w-full appearance-none bg-gray-100 border-transparent rounded-md py-3 px-4 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-positive-lime"
                  >
                    <option value="recent">Mais recentes primeiro</option>
                    <option value="oldest">Mais antigos primeiro</option>
                    <option value="alpha">Ordem Alfabética (A-Z)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                    <ChevronDownIcon className="h-5 w-5" />
                  </div>
                </div>

                {/* Field of Action Dropdown */}
                <div className="relative">
                  <select 
                    id="filter-area"
                    aria-label="Selecione Campo de Atuação"
                    value={filterCampo}
                    onChange={(e) => handleFilterChange(setFilterCampo, e.target.value)}
                    className="w-full appearance-none bg-gray-100 border-transparent rounded-md py-3 px-4 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-positive-lime"
                  >
                    <option value="all">Selecione Campo de Atuação</option>
                    {camposDeAtuacao.map(campo => (
                      <option key={campo} value={campo}>{campo}</option>
                    ))}
                  </select>
                   <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                    <ChevronDownIcon className="h-5 w-5" />
                  </div>
                </div>

                {/* Initiative Type Dropdown */}
                <div className="relative">
                  <select 
                    id="filter-type"
                    aria-label="Selecione Tipo de Iniciativa"
                    value={filterType}
                    onChange={(e) => handleFilterChange(setFilterType, e.target.value)}
                    className="w-full appearance-none bg-gray-100 border-transparent rounded-md py-3 px-4 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-positive-lime"
                  >
                    <option value="all">Selecione Tipo de Iniciativa</option>
                    {initiativeTypes.map(type => (
                       <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                    <ChevronDownIcon className="h-5 w-5" />
                  </div>
                </div>
              </div>
              
              <button 
                onClick={clearFilters}
                className="w-full mt-6 text-center text-sm font-medium text-gray-500 hover:text-positive-dark-gray transition-colors"
              >
                Limpar filtros
              </button>

              <button 
                onClick={onOpenCreateInitiativeModal}
                className="w-full mt-6 bg-cadastrar-button-bg text-white font-bold py-3 px-4 rounded-lg text-center hover:bg-opacity-90 transition-colors shadow-sm hover:shadow-md"
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