
import React, { useState, useEffect } from 'react';
import { InitiativeCategory } from '../types';
import { CloseIcon } from './icons';

export interface CreateInitiativeFormData {
  name: string;
  type: InitiativeCategory;
  lat: string;
  lng: string;
  avatar: string;
  banner: string;
  tagsString: string;
  responsavel: string;
  local: string;
  descricao: string;
  departamento: string;
  campo: string;
  countryCode: string;
}

interface CreateInitiativeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateInitiative: (formData: CreateInitiativeFormData) => void;
  defaultType?: InitiativeCategory; // New optional prop
}

export const CreateInitiativeModal: React.FC<CreateInitiativeModalProps> = ({
  isOpen,
  onClose,
  onCreateInitiative,
  defaultType, // Destructure new prop
}) => {
  const [name, setName] = useState('');
  const [type, setType] = useState<InitiativeCategory>(defaultType || InitiativeCategory.PROJETO);
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [avatar, setAvatar] = useState('');
  const [banner, setBanner] = useState('');
  const [tagsString, setTagsString] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [local, setLocal] = useState('');
  const [descricao, setDescricao] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [campo, setCampo] = useState('');
  const [countryCode, setCountryCode] = useState('BR');

  useEffect(() => {
    if (isOpen) {
      // Reset form when modal opens
      setName('');
      setType(defaultType || InitiativeCategory.PROJETO); // Use defaultType if provided
      setLat('');
      setLng('');
      setAvatar('');
      setBanner('');
      setTagsString('');
      setResponsavel('');
      setLocal('');
      setDescricao('');
      setDepartamento('');
      setCampo('');
      setCountryCode('BR');
    }
  }, [isOpen, defaultType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !lat.trim() || !lng.trim() || !responsavel.trim() || !local.trim() || !descricao.trim()) {
      alert('Por favor, preencha todos os campos obrigatórios: Nome, Latitude, Longitude, Responsável, Local e Descrição.');
      return;
    }
    if (isNaN(parseFloat(lat)) || isNaN(parseFloat(lng))) {
      alert('Latitude e Longitude devem ser números válidos.');
      return;
    }
    onCreateInitiative({
      name, type, lat, lng, avatar, banner, tagsString, responsavel, local, descricao, departamento, campo, countryCode
    });
  };

  if (!isOpen) {
    return null;
  }

  const inputClass = "w-full p-2.5 border border-gray-600 bg-positive-dark-gray text-white placeholder-gray-400 rounded-md focus:ring-1 focus:ring-positive-lime focus:border-positive-lime text-sm";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1";

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="create-initiative-title"
    >
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 id="create-initiative-title" className="text-2xl font-bold text-positive-dark-gray">
            Cadastrar Nova Iniciativa
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Fechar modal"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="initiative-name" className={labelClass}>Nome da Iniciativa <span className="text-red-500">*</span></label>
            <input type="text" id="initiative-name" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} required />
          </div>

          <div>
            <label htmlFor="initiative-type" className={labelClass}>Tipo <span className="text-red-500">*</span></label>
            <select id="initiative-type" value={type} onChange={(e) => setType(e.target.value as InitiativeCategory)} className={inputClass} required>
              {Object.values(InitiativeCategory).map(cat => (
                <option key={cat} value={cat} className="bg-positive-dark-gray text-white">{cat}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="initiative-lat" className={labelClass}>Latitude <span className="text-red-500">*</span></label>
              <input type="text" id="initiative-lat" value={lat} onChange={(e) => setLat(e.target.value)} className={inputClass} placeholder="-22.9068" required />
            </div>
            <div>
              <label htmlFor="initiative-lng" className={labelClass}>Longitude <span className="text-red-500">*</span></label>
              <input type="text" id="initiative-lng" value={lng} onChange={(e) => setLng(e.target.value)} className={inputClass} placeholder="-43.1729" required />
            </div>
          </div>
          
          <div>
            <label htmlFor="initiative-responsavel" className={labelClass}>Responsável <span className="text-red-500">*</span></label>
            <input type="text" id="initiative-responsavel" value={responsavel} onChange={(e) => setResponsavel(e.target.value)} className={inputClass} required />
          </div>

          <div>
            <label htmlFor="initiative-local" className={labelClass}>Local (ex: Cidade, Estado, País) <span className="text-red-500">*</span></label>
            <input type="text" id="initiative-local" value={local} onChange={(e) => setLocal(e.target.value)} className={inputClass} required />
          </div>
          
          <div>
            <label htmlFor="initiative-descricao" className={labelClass}>Descrição <span className="text-red-500">*</span></label>
            <textarea id="initiative-descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} rows={4} className={inputClass} required></textarea>
          </div>
          
          <div>
            <label htmlFor="initiative-avatar" className={labelClass}>URL do Avatar (imagem)</label>
            <input type="url" id="initiative-avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)} className={inputClass} placeholder="https://exemplo.com/avatar.png"/>
          </div>

          <div>
            <label htmlFor="initiative-banner" className={labelClass}>URL do Banner (imagem de capa)</label>
            <input type="url" id="initiative-banner" value={banner} onChange={(e) => setBanner(e.target.value)} className={inputClass} placeholder="https://exemplo.com/banner.png"/>
          </div>

          <div>
            <label htmlFor="initiative-tags" className={labelClass}>Tags (separadas por vírgula)</label>
            <input type="text" id="initiative-tags" value={tagsString} onChange={(e) => setTagsString(e.target.value)} className={inputClass} placeholder="Tecnologia, Sustentabilidade, Educação" />
          </div>
          
          <div>
            <label htmlFor="initiative-departamento" className={labelClass}>Departamento (Opcional)</label>
            <input type="text" id="initiative-departamento" value={departamento} onChange={(e) => setDepartamento(e.target.value)} className={inputClass} />
          </div>

          <div>
            <label htmlFor="initiative-campo" className={labelClass}>Campo de Atuação (Opcional)</label>
            <input type="text" id="initiative-campo" value={campo} onChange={(e) => setCampo(e.target.value)} className={inputClass} placeholder="Ex: Mudanças Climáticas" />
          </div>
          
          <div>
            <label htmlFor="initiative-countryCode" className={labelClass}>Código do País (Opcional)</label>
            <input type="text" id="initiative-countryCode" value={countryCode} onChange={(e) => setCountryCode(e.target.value)} className={inputClass} placeholder="BR" />
          </div>

          <div className="flex justify-end space-x-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-sm font-semibold text-white bg-positive-lime hover:bg-opacity-80 rounded-md transition-colors"
            >
              Cadastrar Iniciativa
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
