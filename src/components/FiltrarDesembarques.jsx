function FiltrarDesembarques({ filtro, onFiltroChange }) {
  return (
    <aside
      className="bg-dark text-white p-4"
      style={{ width: "260px", minHeight: "100vh" }}
    >
      <h5 className="mb-4">Filtros</h5>

      <label htmlFor="busqueda" className="form-label">
        Buscar
      </label>
      <input
        id="busqueda"
        type="search"
        className="form-control"
        placeholder="Especie o estado..."
        value={filtro}
        onChange={(e) => onFiltroChange(e.target.value)}
      />
    </aside>
  );
}

export default FiltrarDesembarques;
