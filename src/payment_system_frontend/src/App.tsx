import { useState } from "react";
import { AuthProvider } from "./features/auth/hooks/useAuth";
import { LoginForm } from "./features/auth/components/LoginForm";

function App() {
  const [greeting, setGreeting] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;

    // Temporalmente comentado hasta que tengamos las declaraciones del backend
    // payment_system_backend.greet(name).then((greeting: string) => {
    //   setGreeting(greeting);
    // });

    // Placeholder para demo
    setGreeting(`¡Hola, ${name}! Bienvenido al Sistema de Pagos ICP`);
    return false;
  }

  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <header className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-8 text-center shadow-soft">
          <img
            src="/logo2.svg"
            alt="DFINITY logo"
            className="w-20 h-20 mx-auto mb-4"
          />
          <h1 className="text-4xl font-light">
            Sistema de Pagos Descentralizado
          </h1>
        </header>

        <main className="flex-1 p-8 max-w-6xl mx-auto w-full">
          <div className="card mb-8">
            <LoginForm />
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold mb-6 text-secondary-800">
              Demo - Funcionalidad Básica
            </h2>
            <form
              onSubmit={handleSubmit}
              className="flex gap-4 items-center mb-4"
            >
              <label htmlFor="name" className="font-medium">
                Enter your name: &nbsp;
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="input-field flex-1"
                placeholder="Tu nombre"
              />
              <button type="submit" className="btn-primary">
                Click Me!
              </button>
            </form>
            {greeting && (
              <section className="success-message">{greeting}</section>
            )}
          </div>
        </main>

        <footer className="bg-secondary-800 text-white text-center py-4 mt-auto">
          <p className="text-sm">Powered by Internet Computer Protocol (ICP)</p>
        </footer>
      </div>
    </AuthProvider>
  );
}

export default App;
