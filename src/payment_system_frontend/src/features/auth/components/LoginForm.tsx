import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

export const LoginForm: React.FC = () => {
  const [principal, setPrincipal] = useState('');
  const { login, isLoading, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (principal.trim()) {
      await login(principal.trim());
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-8 text-secondary-800">
        Iniciar Sesión con Internet Identity
      </h2>
      
      {error && (
        <div className="error-message mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="principal" className="block font-medium mb-2 text-secondary-700">
            Principal ID:
          </label>
          <input
            type="text"
            id="principal"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="Ingresa tu Principal ID"
            disabled={isLoading}
            required
            className="input-field"
          />
        </div>
        
        <button 
          type="submit" 
          disabled={isLoading || !principal.trim()}
          className="btn-primary w-full"
        >
          {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
        </button>
      </form>
      
      <div className="info-message mt-6">
        <p className="text-sm">
          <strong>Nota:</strong> Para una integración completa con Internet Identity, 
          necesitarás configurar el sistema de autenticación descentralizada de ICP.
        </p>
      </div>
    </div>
  );
};
