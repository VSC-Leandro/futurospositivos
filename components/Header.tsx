
import React from 'react';
import { Page } from '../types';
import { SearchIcon, MenuIcon, CloseIcon } from './icons'; 

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  showMapFilters: boolean;
  onOpenLoginModal: () => void; // New prop for opening login modal
  children?: React.ReactNode; 
}

const NavLink: React.FC<{ page: Page; currentPage: Page; onNavigate: (page: Page) => void; children: React.ReactNode }> = ({ page, currentPage, onNavigate, children }) => (
  <button
    onClick={() => onNavigate(page)}
    className={`font-semibold px-3 py-2 text-sm sm:px-4 sm:text-base border-b-2 transition-colors duration-300
                ${currentPage === page ? 'border-positive-lime text-positive-dark-gray' : 'border-transparent hover:border-positive-lime text-gray-600 hover:text-positive-dark-gray'}`}
  >
    {children}
  </button>
);

const PlatformLogo: React.FC<{ onClick?: () => void, className?: string }> = ({ onClick, className }) => (
  <button
    onClick={onClick}
    className={`focus:outline-none group text-positive-dark-gray ${className}`}
    aria-label="Positive Futures Home"
  >
    <div className="flex flex-col items-start leading-none">
      <span className="font-black text-sm sm:text-base tracking-tighter">POSITIVE</span>
      <div className="flex items-center">
        <span className="font-black text-sm sm:text-base tracking-tighter mr-0.5">FUTURES</span>
        <div className="flex items-center">
          <span className="block h-3 w-3 sm:h-3.5 sm:w-3.5 bg-positive-lime rounded-full"></span>
          <span className="block h-2.5 w-2.5 sm:h-3 sm:w-3 bg-positive-lime rounded-full -ml-1.5 sm:-ml-2"></span>
          <span className="block h-2 w-2 sm:h-2.5 sm:w-2.5 bg-positive-lime rounded-full -ml-1 sm:-ml-1.5"></span>
        </div>
      </div>
    </div>
  </button>
);
// Exporting PlatformLogo for use in LoginPage
export { PlatformLogo };


export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, showMapFilters, children, onOpenLoginModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [mobileSearchTerm, setMobileSearchTerm] = React.useState('');

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const handleClearMobileSearch = () => {
    setMobileSearchTerm('');
  };

  return (
    <header className="p-4 bg-white/80 backdrop-blur-sm sticky top-0 z-30 shrink-0 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <PlatformLogo onClick={() => onNavigate(Page.MAP)} />
        <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg hidden md:flex items-center">
          <input
            type="search"
            placeholder="Pesquisar iniciativas, locais..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white border-2 border-positive-lime w-full pl-4 pr-10 py-2 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-positive-lime/50"
          />
          {searchTerm && (
            <button 
              onClick={handleClearSearch} 
              className="absolute right-12 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-positive-dark-gray"
              aria-label="Limpar busca"
            >
              <CloseIcon className="h-4 w-4" />
            </button>
          )}
          <button className="bg-positive-lime absolute right-1 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full hover:bg-opacity-80 transition-colors">
            <SearchIcon className="h-4 w-4 sm:h-5 sm:w-5 text-positive-dark-gray" />
          </button>
        </div>
        <nav className="hidden lg:flex items-center space-x-1">
          <NavLink page={Page.MAP} currentPage={currentPage} onNavigate={onNavigate}>MAPA</NavLink>
          <NavLink page={Page.FORUM} currentPage={currentPage} onNavigate={onNavigate}>FÓRUM</NavLink>
          <NavLink page={Page.INITIATIVES} currentPage={currentPage} onNavigate={onNavigate}>INICIATIVAS</NavLink>
          <button 
            onClick={onOpenLoginModal} // Changed to open modal
            className="ml-3 px-5 py-1.5 sm:px-6 sm:py-2 rounded-full border-2 border-positive-lime text-positive-dark-gray text-sm sm:text-base font-semibold hover:bg-positive-lime transition-all duration-300"
          >
            LOGIN
          </button>
        </nav>
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-positive-dark-gray p-1">
            <MenuIcon />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="lg:hidden mt-4 flex flex-col items-center space-y-2 pb-4 border-t border-positive-light-gray/70 pt-2">
          <NavLink page={Page.MAP} currentPage={currentPage} onNavigate={(page) => { onNavigate(page); setIsMobileMenuOpen(false);}}>MAPA</NavLink>
          <NavLink page={Page.FORUM} currentPage={currentPage} onNavigate={(page) => { onNavigate(page); setIsMobileMenuOpen(false);}}>FÓRUM</NavLink>
          <NavLink page={Page.INITIATIVES} currentPage={currentPage} onNavigate={(page) => { onNavigate(page); setIsMobileMenuOpen(false);}}>INICIATIVAS</NavLink>
           <div className="relative w-full max-w-xs mt-3 md:hidden px-4">
            <input
              type="search"
              placeholder="Pesquisar..."
              value={mobileSearchTerm}
              onChange={(e) => setMobileSearchTerm(e.target.value)}
              className="bg-white border-2 border-positive-lime w-full pl-4 pr-12 py-2 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-positive-lime/50"
            />
            {mobileSearchTerm && (
              <button 
                onClick={handleClearMobileSearch} 
                className="absolute right-12 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-positive-dark-gray"
                aria-label="Limpar busca"
              >
                <CloseIcon className="h-4 w-4" />
              </button>
            )}
            <button className="bg-positive-lime absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-opacity-80 transition-colors">
              <SearchIcon className="h-5 w-5 text-positive-dark-gray" />
            </button>
          </div>
          <button 
            onClick={() => { onOpenLoginModal(); setIsMobileMenuOpen(false); }} // Changed to open modal
            className="mt-3 w-full max-w-xs px-6 py-2 rounded-full border-2 border-positive-lime text-positive-dark-gray font-semibold hover:bg-positive-lime transition-all duration-300"
          >
            LOGIN
          </button>
        </nav>
      )}
      {showMapFilters && (
        <div className="container mx-auto flex flex-wrap justify-center items-center gap-2 md:space-x-3 mt-4 sm:mt-6">
          {children}
        </div>
      )}
    </header>
  );
};
