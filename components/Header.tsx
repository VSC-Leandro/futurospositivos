
import React from 'react';
import { Page, InitiativeCategory } from '../types';
import { SearchIcon, MenuIcon } from './icons';
import { FilterButtons } from './FilterButtons';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  showMapFilters: boolean;
  onOpenLoginModal: () => void;
  currentFilter: InitiativeCategory | 'all';
  onFilterChange: (category: InitiativeCategory | 'all') => void;
}

const NavLink: React.FC<{ page: Page; currentPage: Page; onNavigate: (page: Page) => void; children: React.ReactNode }> = ({ page, currentPage, onNavigate, children }) => (
  <button
    onClick={() => onNavigate(page)}
    className={`font-semibold px-3 py-1.5 text-sm sm:px-4 sm:text-base border-b-2 transition-colors duration-300
                ${currentPage === page ? 'border-login-button-bg text-login-button-bg' : 'border-transparent text-nav-default hover:border-login-button-bg hover:text-login-button-bg'}`}
  >
    {children}
  </button>
);

const PlatformLogo: React.FC<{ onClick?: () => void, className?: string }> = ({ onClick, className }) => (
  <button
    onClick={onClick}
    className={`focus:outline-none group ${className}`}
    aria-label="Positive Futures Home"
  >
    <img 
      src="https://i.imgur.com/3KH27fq.png" 
      alt="Positive Futures Logo"
      className="h-20 w-auto"
    />
  </button>
);
// Exporting PlatformLogo for use in LoginPage
export { PlatformLogo };


export const Header: React.FC<HeaderProps> = ({ 
  currentPage, 
  onNavigate, 
  showMapFilters, 
  onOpenLoginModal,
  currentFilter,
  onFilterChange
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [mobileSearchTerm, setMobileSearchTerm] = React.useState('');

  return (
    <header className="p-4 bg-white/80 backdrop-blur-sm sticky top-0 z-30 shrink-0 shadow-sm h-28">
      <div className="container mx-auto flex justify-between items-center h-full relative">
        {/* LEFT: LOGO */}
        <PlatformLogo onClick={() => onNavigate(Page.MAP)} />

        {/* CENTER: SEARCH & FILTERS (Desktop) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg hidden md:block">
          <div className="relative w-full">
            <input
              type="search"
              placeholder="Pesquisar iniciativas, locais..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white border-2 border-login-button-bg w-full pl-4 pr-12 py-2 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-login-button-bg/50"
            />
            <button className="bg-login-button-bg absolute right-0 top-1/2 -translate-y-1/2 p-2.5 rounded-full hover:bg-opacity-90 transition-colors">
              <SearchIcon className="h-5 w-5 text-login-button-text" />
            </button>
          </div>
          {showMapFilters && (
            <div className="flex justify-center items-center gap-2 mt-2">
              <FilterButtons currentFilter={currentFilter} onFilterChange={onFilterChange} />
            </div>
          )}
        </div>

        {/* RIGHT: NAV & LOGIN */}
        <nav className="hidden lg:flex items-center space-x-1">
          <NavLink page={Page.MAP} currentPage={currentPage} onNavigate={onNavigate}>MAPA</NavLink>
          <NavLink page={Page.FORUM} currentPage={currentPage} onNavigate={onNavigate}>FÓRUM</NavLink>
          <NavLink page={Page.INITIATIVES} currentPage={currentPage} onNavigate={onNavigate}>INICIATIVAS</NavLink>
          <button 
            onClick={onOpenLoginModal} // Changed to open modal
            className="ml-3 px-5 py-1.5 sm:px-6 sm:py-2 rounded-full bg-login-button-bg text-login-button-text text-sm sm:text-base font-semibold hover:bg-opacity-90 transition-all duration-300"
          >
            LOGIN
          </button>
        </nav>
        
        {/* MOBILE: HAMBURGER BUTTON */}
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-positive-dark-gray p-1">
            <MenuIcon />
          </button>
        </div>
      </div>
      
      {/* MOBILE: MENU CONTENTS */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden mt-4 flex flex-col items-center space-y-3 pb-4 border-t border-positive-light-gray/70 pt-3">
          {/* Mobile Search */}
          <div className="relative w-full max-w-xs px-4">
            <input
              type="search"
              placeholder="Pesquisar..."
              value={mobileSearchTerm}
              onChange={(e) => setMobileSearchTerm(e.target.value)}
              className="bg-white border-2 border-login-button-bg w-full pl-4 pr-12 py-2 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-login-button-bg/50"
            />
            <button className="bg-login-button-bg absolute right-0 top-1/2 -translate-y-1/2 p-2.5 rounded-full hover:bg-opacity-90 transition-colors">
              <SearchIcon className="h-5 w-5 text-login-button-text" />
            </button>
          </div>
          
          {/* Mobile Filters */}
          {showMapFilters && (
            <div className="flex justify-center items-center gap-2 pt-2">
              <FilterButtons currentFilter={currentFilter} onFilterChange={onFilterChange} />
            </div>
          )}
          
          <div className="w-full border-t border-gray-200 my-2"></div>
          
          {/* Mobile Nav Links */}
          <NavLink page={Page.MAP} currentPage={currentPage} onNavigate={(page) => { onNavigate(page); setIsMobileMenuOpen(false);}}>MAPA</NavLink>
          <NavLink page={Page.FORUM} currentPage={currentPage} onNavigate={(page) => { onNavigate(page); setIsMobileMenuOpen(false);}}>FÓRUM</NavLink>
          <NavLink page={Page.INITIATIVES} currentPage={currentPage} onNavigate={(page) => { onNavigate(page); setIsMobileMenuOpen(false);}}>INICIATIVAS</NavLink>
          
          {/* Mobile Login */}
          <button 
            onClick={() => { onOpenLoginModal(); setIsMobileMenuOpen(false); }}
            className="mt-2 w-full max-w-xs px-6 py-2 rounded-full bg-login-button-bg text-login-button-text font-semibold hover:bg-opacity-90 transition-all duration-300"
          >
            LOGIN
          </button>
        </nav>
      )}
    </header>
  );
};
