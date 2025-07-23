import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo and title */}
          <div className="flex flex-col items-center justify-center mb-8">
            <img
              src="/logo.png"
              alt="Payment System Logo"
              className="w-20 h-20 mb-4 animate-pulse"
            />
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
                PayWeb3
                <br />
                <span className="text-red-400 text-2xl md:text-3xl">
                  Sistema de Pagos Descentralizado
                </span>
              </h1>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Genera botones de pago, QR codes y recibe Bitcoin de forma segura y
            descentralizada utilizando Internet Computer Protocol. Sin
            intermediarios, sin comisiones ocultas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg text-lg">
              🚀 Comenzar Gratis
            </button>
            <button className="border-2 border-red-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-red-600 hover:text-white transition-all duration-200 text-lg">
              📖 Ver Documentación
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                2%
              </div>
              <div className="text-gray-300">Comisiones</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                100%
              </div>
              <div className="text-gray-300">Descentralizado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                ∞
              </div>
              <div className="text-gray-300">Escalabilidad</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-bounce-slow"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-bounce-slow"
        style={{ animationDelay: "1s" }}
      ></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse"></div>
    </section>
  );
};
