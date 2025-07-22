
import React, { useState, useEffect, useRef } from 'react';
import { Page, Initiative, InitiativeCategory } from '../types';
import { SearchIcon, MenuIcon } from './icons';
import { FilterButtons } from './FilterButtons';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  showMapFilters: boolean;
  onOpenLoginModal: () => void;
  mapTypeFilters: Set<InitiativeCategory>;
  onMapTypeFilterChange: (category: InitiativeCategory) => void;
  initiatives: Initiative[];
  onSearchSelect: (initiative: Initiative) => void;
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
  mapTypeFilters,
  onMapTypeFilterChange,
  initiatives,
  onSearchSelect,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<Initiative[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const desktopSearchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        (!desktopSearchRef.current || !desktopSearchRef.current.contains(target)) &&
        (!mobileSearchRef.current || !mobileSearchRef.current.contains(target))
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchTerm(query);

    if (query.length > 1) {
      const filtered = initiatives
        .filter(i => i.name.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 5); // Limit suggestions
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
      setActiveSuggestionIndex(0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSelectSuggestion = (initiative: Initiative) => {
    setSearchTerm('');
    setShowSuggestions(false);
    setSuggestions([]);
    onSearchSelect(initiative);
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (showSuggestions && suggestions.length > 0) {
        e.preventDefault();
        handleSelectSuggestion(suggestions[activeSuggestionIndex]);
      }
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveSuggestionIndex(prev => (prev > 0 ? prev - 1 : suggestions.length - 1));
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveSuggestionIndex(prev => (prev < suggestions.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };
  
  const searchInputProps = {
    type: "search",
    value: searchTerm,
    onChange: handleSearchChange,
    className: "bg-white border-2 border-login-button-bg w-full pl-4 pr-12 py-2 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-login-button-bg/50",
    autoComplete: "off"
  };

  const suggestionsList = (
      <ul className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 z-40 overflow-hidden">
        {suggestions.map((suggestion, index) => (
          <li
            key={suggestion.id}
            className={`p-3 cursor-pointer hover:bg-positive-green-accent/50 ${index === activeSuggestionIndex ? 'bg-positive-green-accent/50' : ''}`}
            onClick={() => handleSelectSuggestion(suggestion)}
            onMouseEnter={() => setActiveSuggestionIndex(index)}
          >
            <p className="font-bold text-sm text-positive-dark-gray">{suggestion.name}</p>
            <p className="text-xs text-gray-500">{suggestion.type}</p>
          </li>
        ))}
      </ul>
  );

  return (
    <header className="p-4 bg-white/80 backdrop-blur-sm sticky top-0 z-30 shrink-0 shadow-sm h-28">
      <div className="container mx-auto flex justify-between items-center h-full relative">
        {/* LEFT: LOGO */}
        <PlatformLogo onClick={() => onNavigate(Page.MAP)} />

        {/* CENTER: SEARCH & FILTERS (Desktop) */}
        <div ref={desktopSearchRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg hidden md:block">
          <div className="relative w-full" onKeyDown={handleKeyDown}>
            <input
              {...searchInputProps}
              placeholder="Pesquisar iniciativas, locais..."
            />
            <button className="bg-login-button-bg absolute right-0 top-1/2 -translate-y-1/2 p-2.5 rounded-full hover:bg-opacity-90 transition-colors">
              <SearchIcon className="h-5 w-5 text-login-button-text" />
            </button>
            {showSuggestions && suggestions.length > 0 && suggestionsList}
          </div>
          {showMapFilters && (
            <div className="flex justify-center items-center gap-2 mt-2">
              <FilterButtons activeFilters={mapTypeFilters} onFilterChange={onMapTypeFilterChange} />
            </div>
          )}
        </div>

        {/* RIGHT: NAV & LOGIN */}
        <nav className="hidden lg:flex items-center space-x-1">
          <NavLink page={Page.MAP} currentPage={currentPage} onNavigate={onNavigate}>MAPA</NavLink>
          <NavLink page={Page.FORUM} currentPage={currentPage} onNavigate={onNavigate}>FÓRUM</NavLink>
          <NavLink page={Page.INITIATIVES} currentPage={currentPage} onNavigate={onNavigate}>INICIATIVAS</NavLink>
          <button 
            onClick={onOpenLoginModal}
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
          <div ref={mobileSearchRef} className="relative w-full max-w-xs px-4" onKeyDown={handleKeyDown}>
            <input
              {...searchInputProps}
              placeholder="Pesquisar..."
            />
            <button className="bg-login-button-bg absolute right-0 top-1/2 -translate-y-1/2 p-2.5 rounded-full hover:bg-opacity-90 transition-colors">
              <SearchIcon className="h-5 w-5 text-login-button-text" />
            </button>
            {showSuggestions && suggestions.length > 0 && suggestionsList}
          </div>
          
          {/* Mobile Filters */}
          {showMapFilters && (
            <div className="flex justify-center items-center gap-2 pt-2">
              <FilterButtons activeFilters={mapTypeFilters} onFilterChange={onMapTypeFilterChange} />
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
