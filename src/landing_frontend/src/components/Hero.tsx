import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-secondary-900 mb-6 animate-fade-in">
            Pagos Descentralizados con{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
              Bitcoin
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto animate-slide-up">
            Integra pagos en Bitcoin nativo en tu negocio con la tecnología de Internet Computer Protocol. 
            Simple, seguro y descentralizado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <button className="btn-primary text-lg px-8 py-4 shadow-glow hover:shadow-medium transition-all duration-300">
              Comenzar Ahora
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Ver Demo
            </button>
          </div>
          
          <div className="mt-12 flex justify-center items-center space-x-8 text-secondary-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>100% Descentralizado</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Bitcoin Nativo</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span>Sin Comisiones Ocultas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 