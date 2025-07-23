import { useState } from "react";
import { AuthProvider } from "./features/auth/hooks/useAuth";
import { LoginForm } from "./features/auth/components/LoginForm";
import { authService } from "./features/auth/services/auth.service";

function App() {
  const [greeting, setGreeting] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const name = formData.get("name") as string;

      // Probar conexión con el backend real
      const response = await authService.testConnection();
      setGreeting(`¡Hola, ${name}! ${response}`);
    } catch (error) {
      console.error("Error connecting to backend:", error);
      setGreeting(
        `¡Hola, ${name}! Bienvenido al Sistema de Pagos ICP (Modo Demo)`
      );
    } finally {
      setIsLoading(false);
    }

    return false;
  }

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gradient-to-br from-dark-900 via-secondary-900 to-dark-800 flex flex-col">
        {/* Header mejorado */}
        <header className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12 px-4 shadow-lg">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <img
                src="/logo.png"
                alt="Payment System Logo"
                className="w-16 h-16 mr-4 animate-pulse"
              />
              <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                  PayWeb3
                </h1>
                <p className="text-gray-300 text-lg font-medium">
                  Sistema de Pagos Descentralizado
                </p>
              </div>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Genera botones de pago, QR codes y recibe Bitcoin de forma segura
              y descentralizada
            </p>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 p-4 md:p-8 max-w-6xl mx-auto w-full">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Login Section */}
            <div className="bg-secondary-800 rounded-2xl shadow-soft p-6 md:p-8 border border-secondary-700">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Iniciar Sesión
                </h2>
                <p className="text-secondary-300">
                  Conecta con Internet Identity para acceder a tu cuenta
                </p>
              </div>
              <LoginForm />
            </div>

            {/* Demo Section */}
            <div className="bg-secondary-800 rounded-2xl shadow-soft p-6 md:p-8 border border-secondary-700">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Demo Interactivo
                </h2>
                <p className="text-secondary-300">
                  Prueba la funcionalidad básica del sistema
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-secondary-200 mb-2"
                  >
                    Tu Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full px-4 py-3 bg-secondary-700 border border-secondary-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 text-white placeholder-secondary-400"
                    placeholder="Ingresa tu nombre completo"
                    required
                    disabled={isLoading}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-secondary-600 disabled:to-secondary-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed shadow-medium flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Conectando...
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      ¡Probar Sistema!
                    </>
                  )}
                </button>
              </form>

              {greeting && (
                <div className="mt-6 p-4 bg-gradient-to-r from-green-900/50 to-emerald-900/50 border border-green-700 rounded-xl">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-200">
                        {greeting}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-12 bg-secondary-800 rounded-2xl shadow-soft p-6 md:p-8 border border-secondary-700">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Características Principales
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-700/50 border border-gray-600/50">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-white"
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
                <h4 className="font-semibold text-white mb-2">
                  Autenticación Segura
                </h4>
                <p className="text-secondary-300 text-sm">
                  Internet Identity para máxima seguridad
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-700/50 border border-gray-600/50">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-white"
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
                <h4 className="font-semibold text-white mb-2">Pagos Bitcoin</h4>
                <p className="text-secondary-300 text-sm">
                  Transacciones nativas de Bitcoin
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-700/50 border border-gray-600/50">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-white"
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
                <h4 className="font-semibold text-white mb-2">
                  Descentralizado
                </h4>
                <p className="text-secondary-300 text-sm">
                  Basado en Internet Computer Protocol
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer mejorado */}
        <footer className="bg-secondary-900 text-white py-8 px-4 mt-12 border-t border-secondary-800">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <img
                src="/logo.png"
                alt="Payment System Logo"
                className="w-8 h-8 mr-3"
              />
              <p className="text-lg font-semibold">Powered by PayWeb3</p>
            </div>
            <p className="text-secondary-400 text-sm">
              Sistema de pagos descentralizado construido con tecnología
              blockchain de vanguardia
            </p>
          </div>
        </footer>
      </div>
    </AuthProvider>
  );
}

export default App;
