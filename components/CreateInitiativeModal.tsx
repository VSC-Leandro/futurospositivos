
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
  defaultType?: InitiativeCategory;
}

// Visual component for the stepper UI
const Stepper = ({ steps, currentStep }: { steps: string[]; currentStep: number }) => {
  return (
    <div className="flex items-center mb-6 sm:mb-8">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300
                  ${isActive ? 'bg-positive-lime text-positive-dark-gray ring-2 ring-positive-lime/50' : ''}
                  ${isCompleted ? 'bg-positive-green-accent text-positive-dark-gray' : ''}
                  ${!isActive && !isCompleted ? 'bg-gray-200 text-gray-500' : ''}
                `}
              >
                {isCompleted ? '✓' : stepNumber}
              </div>
              <p className={`text-xs mt-2 text-center font-semibold w-20 transition-colors duration-300 ${isActive ? 'text-positive-dark-gray' : 'text-gray-500'}`}>
                {step}
              </p>
            </div>
            {stepNumber < steps.length && (
              <div className={`flex-auto border-t-2 transition-colors duration-300 mx-2 
                ${isCompleted ? 'border-positive-green-accent' : 'border-gray-200'}`}
              ></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export const CreateInitiativeModal: React.FC<CreateInitiativeModalProps> = ({
  isOpen,
  onClose,
  onCreateInitiative,
  defaultType,
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

  const [currentStep, setCurrentStep] = useState(1);
  const steps = ['Identificação', 'Localização', 'Detalhes', 'Visual'];

  useEffect(() => {
    if (isOpen) {
      // Reset form and step when modal opens
      setName('');
      setType(defaultType || InitiativeCategory.PROJETO);
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
      setCurrentStep(1);
    }
  }, [isOpen, defaultType]);

  const validateStep = (): boolean => {
    switch (currentStep) {
      case 1:
        if (!name.trim() || !descricao.trim()) {
          alert('Por favor, preencha o Nome e a Descrição da iniciativa.');
          return false;
        }
        break;
      case 2:
        if (!responsavel.trim() || !local.trim() || !lat.trim() || !lng.trim()) {
          alert('Por favor, preencha os campos de Responsável, Local, Latitude e Longitude.');
          return false;
        }
        if (isNaN(parseFloat(lat)) || isNaN(parseFloat(lng))) {
          alert('Latitude e Longitude devem ser números válidos.');
          return false;
        }
        break;
      default: // Steps 3 and 4 have no required fields
        break;
    }
    return true;
  };
  
  const handleFinalSubmit = () => {
     onCreateInitiative({
      name, type, lat, lng, avatar, banner, tagsString, responsavel, local, descricao, departamento, campo, countryCode
    });
  };

  const handleNext = () => {
    if (validateStep()) {
      if (currentStep < steps.length) {
        setCurrentStep(step => step + 1);
      } else {
        handleFinalSubmit();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(step => step - 1);
    }
  };

  if (!isOpen) {
    return null;
  }

  const inputClass = "w-full p-2.5 border border-gray-600 bg-positive-dark-gray text-white placeholder-gray-400 rounded-md focus:ring-1 focus:ring-positive-lime focus:border-positive-lime text-sm";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1";
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 1: // Identificação
        return (
          <>
            <div>
              <label htmlFor="initiative-name" className={labelClass}>Nome da Iniciativa <span className="text-red-500">*</span></label>
              <input type="text" id="initiative-name" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} autoFocus />
            </div>
            <div>
              <label htmlFor="initiative-type" className={labelClass}>Tipo</label>
              <p className="p-2.5 bg-gray-100 rounded-md text-gray-700 text-sm font-medium">{type}</p>
            </div>
            <div>
              <label htmlFor="initiative-descricao" className={labelClass}>Descrição <span className="text-red-500">*</span></label>
              <textarea id="initiative-descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} rows={5} className={inputClass}></textarea>
            </div>
          </>
        );
      case 2: // Localização
        return (
          <>
            <div>
              <label htmlFor="initiative-responsavel" className={labelClass}>Responsável <span className="text-red-500">*</span></label>
              <input type="text" id="initiative-responsavel" value={responsavel} onChange={(e) => setResponsavel(e.target.value)} className={inputClass} autoFocus />
            </div>
            <div>
              <label htmlFor="initiative-local" className={labelClass}>Local (ex: Cidade, Estado, País) <span className="text-red-500">*</span></label>
              <input type="text" id="initiative-local" value={local} onChange={(e) => setLocal(e.target.value)} className={inputClass} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="initiative-lat" className={labelClass}>Latitude <span className="text-red-500">*</span></label>
                <input type="text" id="initiative-lat" value={lat} onChange={(e) => setLat(e.target.value)} className={inputClass} placeholder="-22.9068" />
              </div>
              <div>
                <label htmlFor="initiative-lng" className={labelClass}>Longitude <span className="text-red-500">*</span></label>
                <input type="text" id="initiative-lng" value={lng} onChange={(e) => setLng(e.target.value)} className={inputClass} placeholder="-43.1729" />
              </div>
            </div>
             <div>
                <label htmlFor="initiative-countryCode" className={labelClass}>Código do País (ex: BR)</label>
                <input type="text" id="initiative-countryCode" value={countryCode} onChange={(e) => setCountryCode(e.target.value)} className={inputClass} placeholder="BR" />
            </div>
          </>
        );
      case 3: // Detalhes
        return (
           <>
            <div>
              <label htmlFor="initiative-tags" className={labelClass}>Tags (separadas por vírgula)</label>
              <input type="text" id="initiative-tags" value={tagsString} onChange={(e) => setTagsString(e.target.value)} className={inputClass} placeholder="Tecnologia, Sustentabilidade" autoFocus />
            </div>
            <div>
              <label htmlFor="initiative-campo" className={labelClass}>Campo de Atuação (Opcional)</label>
              <input type="text" id="initiative-campo" value={campo} onChange={(e) => setCampo(e.target.value)} className={inputClass} placeholder="Ex: Mudanças Climáticas" />
            </div>
            <div>
              <label htmlFor="initiative-departamento" className={labelClass}>Departamento (Opcional)</label>
              <input type="text" id="initiative-departamento" value={departamento} onChange={(e) => setDepartamento(e.target.value)} className={inputClass} />
            </div>
          </>
        );
      case 4: // Visual
        return (
          <>
            <div>
              <label htmlFor="initiative-avatar" className={labelClass}>URL do Avatar (imagem de perfil)</label>
              <input type="url" id="initiative-avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)} className={inputClass} placeholder="https://exemplo.com/avatar.png" autoFocus />
               <p className="text-xs text-gray-500 mt-1">Deixe em branco para usar uma imagem padrão.</p>
            </div>
            <div>
              <label htmlFor="initiative-banner" className={labelClass}>URL do Banner (imagem de capa)</label>
              <input type="url" id="initiative-banner" value={banner} onChange={(e) => setBanner(e.target.value)} className={inputClass} placeholder="https://exemplo.com/banner.png"/>
               <p className="text-xs text-gray-500 mt-1">Deixe em branco para usar uma imagem padrão.</p>
            </div>
          </>
        );
      default:
        return null;
    }
  }

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="create-initiative-title"
    >
      <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 w-full max-w-2xl max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center mb-4 flex-shrink-0">
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
        
        <div className="flex-shrink-0">
          <Stepper steps={steps} currentStep={currentStep} />
        </div>

        <div className="space-y-4 overflow-y-auto py-2 pr-2 -mr-2 flex-grow">
          {renderStepContent()}
        </div>

        <div className="flex justify-between items-center pt-6 mt-4 border-t border-gray-200 flex-shrink-0">
           <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            >
              Cancelar
            </button>
          <div className="flex items-center space-x-3">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="px-5 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-md transition-colors"
              >
                Voltar
              </button>
            )}
            <button
              type="button"
              onClick={handleNext}
              className="px-5 py-2 text-sm font-bold text-positive-dark-gray bg-positive-lime hover:bg-opacity-80 rounded-md transition-colors"
            >
              {currentStep === steps.length ? 'Cadastrar Iniciativa' : 'Avançar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
