import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

const ContactPage: React.FC = () => {
  const handleGetStarted = () => {
    window.location.href = "http://localhost:3000";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-secondary-900 to-dark-800">
      <Navigation onGetStarted={handleGetStarted} currentPath="/contact" />

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contacto
            </h1>
            <p className="text-xl text-secondary-300 max-w-2xl mx-auto">
              ¿Tienes preguntas sobre nuestro sistema de pagos descentralizado?
              Estamos aquí para ayudarte.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-secondary-800 rounded-2xl shadow-soft p-8 border border-secondary-700">
              <h2 className="text-2xl font-bold text-white mb-6">
                Envíanos un mensaje
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-secondary-200 mb-2"
                  >
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-secondary-700 border border-secondary-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 text-white placeholder-secondary-400"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-secondary-200 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-secondary-700 border border-secondary-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 text-white placeholder-secondary-400"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-secondary-200 mb-2"
                  >
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-secondary-700 border border-secondary-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 text-white"
                    required
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="support">Soporte técnico</option>
                    <option value="business">Consultas comerciales</option>
                    <option value="partnership">Alianzas estratégicas</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-secondary-200 mb-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary-700 border border-secondary-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 text-white placeholder-secondary-400 resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-medium"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-secondary-800 rounded-2xl shadow-soft p-8 border border-secondary-700">
                <h3 className="text-xl font-bold text-white mb-6">
                  Información de contacto
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <p className="text-secondary-300">contacto@payweb3.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Ubicación</p>
                      <p className="text-secondary-300">
                        Descentralizado - Internet Computer
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold">
                        Tiempo de respuesta
                      </p>
                      <p className="text-secondary-300">24-48 horas</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary-800 rounded-2xl shadow-soft p-8 border border-secondary-700">
                <h3 className="text-xl font-bold text-white mb-6">
                  Recursos útiles
                </h3>
                <div className="space-y-4">
                  <Link
                    to="/#features"
                    className="block text-secondary-300 hover:text-red-400 transition-colors"
                  >
                    → Ver características
                  </Link>
                  <Link
                    to="/#how-it-works"
                    className="block text-secondary-300 hover:text-red-400 transition-colors"
                  >
                    → Cómo funciona
                  </Link>
                  <a
                    href="#"
                    className="block text-secondary-300 hover:text-red-400 transition-colors"
                  >
                    → Documentación técnica
                  </a>
                  <a
                    href="#"
                    className="block text-secondary-300 hover:text-red-400 transition-colors"
                  >
                    → FAQ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <Footer />
    </div>
  );
};

export default ContactPage;
