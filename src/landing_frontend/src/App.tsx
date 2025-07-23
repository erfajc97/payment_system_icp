import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          🚀 Payment System ICP
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Sistema de Pagos Descentralizado con Internet Computer Protocol
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Comenzar
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Documentación
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
