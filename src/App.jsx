import { useState } from "react";
import ListaDesembarques from "./components/ListaDesembarques";
import FiltrarDesembarques from "./components/FiltrarDesembarques";

function App() {
  const [filtro, setFiltro] = useState("");

  return (
    <>
      <div className="d-flex" style={{ minHeight: "100vh" }}>
        <FiltrarDesembarques filtro={filtro} onFiltroChange={setFiltro} />
        <main className="flex-grow-1 p-4">
          <ListaDesembarques filtro={filtro} />
        </main>
      </div>
    </>
  );
}

export default App;
