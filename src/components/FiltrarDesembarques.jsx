import { useState } from "react";

function FiltrarDesembarques({ filtro, onFiltroChange }) {
  const [error, setError] = useState("");

  function sanitizarEntrada(e) {
    const valor = e.target.value;

    if (/[^a-záéíóúüñA-ZÁÉÍÓÚÜÑ\s]/.test(valor)) {
      setError("Solo se permiten letras.");
      return;
    }

    if (valor.length > 20) {
      setError("El filtro no puede superar los 20 caracteres.");
      return;
    }

    setError("");
    onFiltroChange(valor);
  }

  return (
    <aside
      className="bg-secondary text-white p-4"
      style={{ width: "260px", minHeight: "100vh" }}
    >
      <h5 className="mb-4">Filtros</h5>

      <label htmlFor="busqueda" className="form-label">
        Buscar
      </label>
      <input
        id="busqueda"
        type="search"
        className={`form-control ${error ? "is-invalid" : ""}`}
        placeholder="Especie o estado..."
        value={filtro}
        onChange={sanitizarEntrada}
      />
      {error && <div className="invalid-feedback d-block">{error}</div>}
    </aside>
  );
}

export default FiltrarDesembarques;
