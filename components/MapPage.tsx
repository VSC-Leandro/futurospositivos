
import React, { useEffect, useRef, useCallback } from 'react';
import L from 'leaflet';
import { Initiative, Page, InitiativeCategory } from '../types';
import { MAP_INITIAL_CENTER, MAP_INITIAL_ZOOM, MAP_TILE_URL, MAP_ATTRIBUTION } from '../constants';
import { ForumIcon, PlusIcon } from './icons'; // BrazilFlagIcon removed as it's directly inlined
import { ForumPreviewPopup } from './ForumPreviewPopup';

interface MapPageProps {
  initiatives: Initiative[];
  onShowInitiativeDetails: (initiative: Initiative) => void;
  onNavigate: (page: Page) => void;
  isForumPreviewOpen: boolean;
  onToggleForumPreview: () => void;
  onOpenAddTypeModal: () => void; // New prop to open Add Initiative Type modal
}

export const MapPage: React.FC<MapPageProps> = ({ 
  initiatives, 
  onShowInitiativeDetails, 
  onNavigate, 
  isForumPreviewOpen, 
  onToggleForumPreview,
  onOpenAddTypeModal // Destructure new prop
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  
  const [currentMapFilter, setCurrentMapFilter] = React.useState<InitiativeCategory | 'all'>(InitiativeCategory.COLETIVO);


  const renderMarkers = useCallback(() => {
    if (!mapRef.current) return;

    markersRef.current.forEach(marker => mapRef.current?.removeLayer(marker));
    markersRef.current = [];

    const filteredInitiatives = initiatives.filter(
      item => currentMapFilter === 'all' || item.type === currentMapFilter
    );

    filteredInitiatives.forEach(item => {
      const customIcon = L.divIcon({ 
        className: 'custom-map-marker-dot',
        iconSize: [16, 16],
      });
      
      const marker = L.marker([item.lat, item.lng], { icon: customIcon }).addTo(mapRef.current!);
      
      const popupEl = document.createElement('div');
      popupEl.className = 'font-inter text-positive-dark-gray';

      let flagHtml = '';
      if (item.countryCode === 'BR') { 
        flagHtml = `<div class="w-5 h-auto mb-1 rounded-sm overflow-hidden"><svg viewBox="0 0 900 630"><rect width="900" height="630" fill="#009739"/><path d="M450 63L63 315L450 567L837 315L450 63Z" fill="#FEDD00"/><circle cx="450" cy="315" r="135" fill="#002776"/></svg></div>`;
      }
      
      popupEl.innerHTML = `
        ${flagHtml}
        <h3 class="font-black text-base mb-0.5 tracking-tight">${item.name.toUpperCase()}</h3>
        <p class="text-xs mb-0.5"><strong class="font-semibold">CATEGORIA:</strong> ${item.type}</p>
        ${item.details.departamento ? `<p class="text-xs mb-0.5"><strong class="font-semibold">DEPARTAMENTO:</strong> ${item.details.departamento}</p>` : ''}
        <p class="text-xs mb-0.5"><strong class="font-semibold">LOCAL:</strong> ${item.details.Local.split(',')[0]}</p> 
        ${item.campo ? `<p class="text-xs mb-2"><strong class="font-semibold">CAMPO:</strong> ${item.campo}</p>` : ''}
        <div class="flex justify-between items-center mt-2">
            <button class="popup-details-btn bg-positive-lime text-positive-dark-gray text-xs font-bold py-1 px-3 rounded-full hover:bg-opacity-80 transition-colors">
            VER MAIS
            </button>
            <button class="popup-plus-btn p-1 rounded-full hover:bg-positive-dark-gray/10 transition-colors">
                <svg class="h-4 w-4 text-positive-dark-gray" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" /></svg>
            </button>
        </div>
      `;
      
      const detailButton = popupEl.querySelector('.popup-details-btn');
      if (detailButton) {
        detailButton.addEventListener('click', () => {
          mapRef.current?.closePopup();
          onShowInitiativeDetails(item);
        });
      }
            
      marker.bindPopup(popupEl, { minWidth: 180, className: 'custom-leaflet-popup-styling' });
      markersRef.current.push(marker);
    });
  }, [initiatives, currentMapFilter, onShowInitiativeDetails]);

  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current, {
        center: MAP_INITIAL_CENTER,
        zoom: MAP_INITIAL_ZOOM,
        zoomControl: false,
        attributionControl: false 
      });
      L.tileLayer(MAP_TILE_URL, { attribution: MAP_ATTRIBUTION }).addTo(mapRef.current);
    }
  }, []);

  useEffect(() => {
    renderMarkers();
  }, [renderMarkers]); 

  useEffect(() => {
    const timer = setTimeout(() => {
      mapRef.current?.invalidateSize();
    }, 100);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="flex-grow flex flex-col h-full relative">
       <div id="map" ref={mapContainerRef} className="flex-grow h-full w-full bg-positive-map-bg z-0"></div>
       
       <button 
        onClick={onToggleForumPreview}
        className="fixed bottom-6 left-6 z-10 flex items-center space-x-2 px-5 py-2.5 rounded-full shadow-lg 
                   bg-positive-lime border-2 border-positive-lime text-positive-dark-gray font-bold text-sm
                   hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 focus:outline-none"
        aria-expanded={isForumPreviewOpen}
        aria-controls="forum-preview-popup"
      >
        <ForumIcon className="h-5 w-5" /> 
        <span>FÓRUM POSITIVO</span>
      </button>

      <ForumPreviewPopup isOpen={isForumPreviewOpen} onClose={onToggleForumPreview} onNavigate={onNavigate} />

      {/* New FAB for adding initiative */}
      <button
        onClick={onOpenAddTypeModal}
        className="fixed bottom-6 right-6 z-10 bg-positive-lime text-positive-dark-gray p-4 rounded-full shadow-lg hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-positive-lime focus:ring-opacity-50 transition-all duration-300 hover:transform hover:scale-105"
        aria-label="Adicionar iniciativa ao mapa"
      >
        <PlusIcon className="h-6 w-6" />
      </button>
    </div>
  );
};
