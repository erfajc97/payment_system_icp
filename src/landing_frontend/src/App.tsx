import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import "./App.css";

function App() {
  const handleGetStarted = () => {
    // Redirigir al frontend principal
    window.location.href = "http://localhost:3000";
  };

  const handleViewDemo = () => {
    // También redirigir al frontend principal
    window.location.href = "http://localhost:3000";
  };

  const handleLogin = () => {
    // Redirigir al frontend principal
    window.location.href = "http://localhost:3000";
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-dark-900 via-secondary-900 to-dark-800">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navigation
                  onLogin={handleLogin}
                  onGetStarted={handleGetStarted}
                />
                {/* Hero Section */}
                <Hero />

                {/* Features Section */}
                <section id="features" className="py-20 bg-secondary-800">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Características Principales
                      </h2>
                      <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
                        Todo lo que necesitas para aceptar pagos Bitcoin de
                        forma descentralizada y segura
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-700/50 border border-gray-600/50">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">
                          Autenticación Segura
                        </h3>
                        <p className="text-secondary-300">
                          Internet Identity para máxima seguridad y privacidad.
                          Sin contraseñas, sin problemas.
                        </p>
                      </div>

                      <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-700/50 border border-gray-600/50">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">
                          Pagos Bitcoin Nativos
                        </h3>
                        <p className="text-secondary-300">
                          Transacciones Bitcoin directas sin intermediarios.
                          Rápido, seguro y descentralizado.
                        </p>
                      </div>

                      <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-700/50 border border-gray-600/50">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">
                          100% Descentralizado
                        </h3>
                        <p className="text-secondary-300">
                          Basado en Internet Computer Protocol. Sin servidores
                          centrales, sin puntos de falla.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* How it Works Section */}
                <section id="how-it-works" className="py-20 bg-dark-800">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        ¿Cómo Funciona?
                      </h2>
                      <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
                        En solo 3 pasos simples puedes comenzar a recibir pagos
                        Bitcoin
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                          1
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">
                          Conecta tu Wallet
                        </h3>
                        <p className="text-secondary-300">
                          Registra tu comercio y conecta tu wallet Bitcoin para
                          recibir pagos
                        </p>
                      </div>

                      <div className="text-center">
                        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                          2
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">
                          Genera Botones
                        </h3>
                        <p className="text-secondary-300">
                          Crea botones de pago personalizados con QR codes y
                          links únicos
                        </p>
                      </div>

                      <div className="text-center">
                        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                          3
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">
                          Recibe Pagos
                        </h3>
                        <p className="text-secondary-300">
                          Los clientes pagan y recibes Bitcoin directamente en
                          tu wallet
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
                  <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      ¿Listo para Comenzar?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                      Únete a la revolución de los pagos descentralizados. Es
                      gratis y solo toma 2 minutos.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        onClick={handleGetStarted}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-medium"
                      >
                        Crear Cuenta Gratis
                      </button>
                      <button
                        onClick={handleViewDemo}
                        className="border-2 border-red-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-red-600 hover:text-white transition-all duration-200"
                      >
                        Ver Demo
                      </button>
                    </div>
                  </div>
                </section>

                <Footer />
              </>
            }
          />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
