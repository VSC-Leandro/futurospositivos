



import React, { useEffect, useRef, useCallback } from 'react';
import L from 'leaflet';
import { Initiative, Page, InitiativeCategory } from '../types';
import { MAP_INITIAL_CENTER, MAP_INITIAL_ZOOM, MAP_TILE_URL, MAP_ATTRIBUTION } from '../constants';
import { ForumIcon, PlusIcon } from './icons'; // BrazilFlagIcon removed as it's directly inlined
import { ForumPreviewPopup } from './ForumPreviewPopup';
import { getInitiativeColor } from './utils';

interface MapPageProps {
  initiatives: Initiative[];
  onShowInitiativeDetails: (initiative: Initiative) => void;
  onNavigate: (page: Page) => void;
  isForumPreviewOpen: boolean;
  onToggleForumPreview: () => void;
  onOpenAddTypeModal: () => void;
  typeFilters: Set<InitiativeCategory>;
  searchSelectedInitiative: Initiative | null;
  onClearSearchSelection: () => void;
}

export const MapPage: React.FC<MapPageProps> = ({ 
  initiatives, 
  onShowInitiativeDetails, 
  onNavigate, 
  isForumPreviewOpen, 
  onToggleForumPreview,
  onOpenAddTypeModal,
  typeFilters,
  searchSelectedInitiative,
  onClearSearchSelection,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Map<number, L.Marker>>(new Map());
  
  const renderMarkers = useCallback(() => {
    if (!mapRef.current) return;

    markersRef.current.forEach(marker => marker.remove());
    markersRef.current.clear();

    const filteredInitiatives = initiatives.filter(
      item => typeFilters.has(item.type)
    );

    filteredInitiatives.forEach(item => {
      const markerColor = getInitiativeColor(item.tags);
      const customIcon = L.divIcon({ 
        className: 'custom-map-marker-dot-wrapper',
        html: `<div class="custom-map-marker-dot" style="background-color: ${markerColor};"></div>`,
        iconSize: [16, 16],
      });
      
      const marker = L.marker([item.lat, item.lng], { icon: customIcon }).addTo(mapRef.current!);
      
      const popupEl = document.createElement('div');

      let flagHtml = '';
      if (item.countryCode === 'BR') { 
        flagHtml = `<div class="w-5 h-auto mb-2 rounded-sm overflow-hidden"><svg viewBox="0 0 900 630" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="900" height="630" fill="#009739"/><path d="M450 63L63 315L450 567L837 315L450 63Z" fill="#FEDD00"/><circle cx="450" cy="315" r="135" fill="#002776"/></svg></div>`;
      }
      
      popupEl.innerHTML = `
        <div class="p-4 relative font-inter">
          ${flagHtml}
          <div class="pr-6"> <!-- Padding right to avoid text overlapping with close button -->
              <h3 class="font-black text-2xl mb-3 tracking-tighter text-positive-dark-gray">${item.name.toUpperCase()}</h3>
              <div class="space-y-1.5 text-sm font-medium text-gray-700">
                  <p><strong class="font-bold text-positive-dark-gray">CATEGORIA:</strong> ${item.type}</p>
                  ${item.details.departamento ? `<p><strong class="font-bold text-positive-dark-gray">DEPARTAMENTO:</strong> ${item.details.departamento}</p>` : ''}
                  <p><strong class="font-bold text-positive-dark-gray">LOCAL:</strong> ${item.details.Local}</p>
                  ${item.campo ? `<p><strong class="font-bold text-positive-dark-gray">CAMPO:</strong> ${item.campo}</p>` : ''}
              </div>
          </div>
          <button class="popup-details-btn absolute bottom-3 right-3 w-10 h-10 bg-white text-forum-positive-bg rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-positive-green-accent focus:ring-forum-positive-bg" aria-label="Ver mais detalhes sobre ${item.name}">
              <svg class="w-6 h-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" /></svg>
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
            
      marker.bindPopup(popupEl, { minWidth: 260, closeButton: true });
      markersRef.current.set(item.id, marker);
    });
  }, [initiatives, typeFilters, onShowInitiativeDetails]);

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

  // Effect to handle flying to a selected initiative from search
  useEffect(() => {
    if (searchSelectedInitiative && mapRef.current) {
      const marker = markersRef.current.get(searchSelectedInitiative.id);
      if (marker) {
        const map = mapRef.current;
        const targetLatLng = marker.getLatLng();
        
        // Fly to the marker, using a more detailed zoom level
        const targetZoom = Math.max(map.getZoom() ?? MAP_INITIAL_ZOOM, 15);

        map.flyTo(targetLatLng, targetZoom, {
          animate: true,
          duration: 1.5, // seconds
        });

        // After the animation, open the popup and clear the state
        map.once('moveend', () => {
          marker.openPopup();
          onClearSearchSelection();
        });
      } else {
        // If for some reason the marker isn't on the map (e.g., filtered out), just clear the selection
        onClearSearchSelection();
      }
    }
  }, [searchSelectedInitiative, onClearSearchSelection]);


  return (
    <div className="flex-grow flex flex-col h-full relative">
       <div id="map" ref={mapContainerRef} className="flex-grow h-full w-full bg-positive-map-bg z-0"></div>
       
       <button 
        onClick={onToggleForumPreview}
        className="fixed bottom-6 left-6 z-10 flex items-center space-x-2 px-5 py-2.5 rounded-full shadow-lg 
                   bg-forum-positive-bg text-white font-bold text-sm
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
