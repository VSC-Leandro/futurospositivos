
import React, { useState, useEffect } from 'react';
import { CloseIcon } from './icons';
import { PlatformLogo } from './Header'; 

interface LoginPageProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSubmit: (data: { email: string; pass: string }) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ isOpen, onClose, onLoginSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isOpen) {
      // Reset form when modal opens
      setEmail('');
      setPassword('');
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert('Por favor, preencha seu email e senha.');
      return;
    }
    onLoginSubmit({ email, pass: password });
  };

  if (!isOpen) {
    return null;
  }

  const inputClass = "w-full p-3 border border-gray-600 bg-positive-dark-gray text-white placeholder-gray-400 rounded-md focus:ring-1 focus:ring-positive-lime focus:border-positive-lime text-sm";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1.5";

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-page-title"
    >
      <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 w-full max-w-md max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 opacity-100">
        <div className="flex justify-between items-center mb-6">
           <div className="flex-grow flex justify-center">
             {/* The PlatformLogo is clickable and navigates to MAP, which will also close the modal via App's handleNavigate */}
             <PlatformLogo className="text-xl"/>
           </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors -mr-2 -mt-2"
            aria-label="Fechar modal de login"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>
        
        <h2 id="login-page-title" className="text-2xl font-bold text-positive-dark-gray text-center mb-6 sm:mb-8">
          Acessar Plataforma
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="login-email" className={labelClass}>
              Email
            </label>
            <input
              type="email"
              id="login-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
              placeholder="seuemail@exemplo.com"
              required
              autoComplete="email"
            />
          </div>

          <div>
            <label htmlFor="login-password" className={labelClass}>
              Senha
            </label>
            <input
              type="password"
              id="login-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputClass}
              placeholder="Sua senha"
              required
              autoComplete="current-password"
            />
          </div>
          
          <div className="text-right text-xs mt-1">
            <a href="#" className="font-medium text-positive-dark-gray hover:text-positive-lime hover:underline transition-colors" onClick={(e) => { e.preventDefault(); alert("Funcionalidade 'Esqueci minha senha' não implementada."); }}>
              Esqueci minha senha?
            </a>
          </div>

          <button
            type="submit"
            className="w-full mt-2 px-5 py-3 text-base font-semibold text-positive-dark-gray bg-positive-lime hover:bg-opacity-80 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-positive-lime focus:ring-opacity-50"
          >
            ENTRAR
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-8">
          Não tem uma conta?{' '}
          <a href="#" className="font-semibold text-positive-dark-gray hover:text-positive-lime hover:underline transition-colors" onClick={(e) => { e.preventDefault(); alert("Funcionalidade 'Criar conta' não implementada."); }}>
            Criar conta
          </a>
        </p>
      </div>
    </div>
  );
};
