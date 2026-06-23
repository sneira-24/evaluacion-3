import { useState, useEffect } from "react";

function ListaDesembarques({ filtro }) {
  const [desembarques, setDesembarques] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [prioritarios, setPrioritarios] = useState(() => {
    const guardados = localStorage.getItem("prioritarios");
    return guardados ? JSON.parse(guardados) : [];
  });

  useEffect(() => {
    async function obtenerDesembarques() {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/desembarques`);

        if (!res.ok) {
          throw new Error(`Error del servidor: ${res.status}`);
        }

        const datos = await res.json();
        setDesembarques(datos);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    }
    obtenerDesembarques();
  }, []);

  if (cargando) {
    return (
      <div className="d-flex align-items-center gap-2 text-muted mt-4">
        <div className="spinner-border spinner-border-sm" role="status" />
        <span>Cargando desembarques...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger mt-4" role="alert">
        <strong>No se pudo conectar al servidor.</strong> {error}
      </div>
    );
  }

  function agregarPrioritario(id) {
    setPrioritarios((prio) => {
      if (prio.includes(id)) return prio;
      const actualizado = [...prio, id];
      localStorage.setItem("prioritarios", JSON.stringify(actualizado));
      return actualizado;
    });
  }

  const texto = filtro.toLowerCase();
  const resultado = desembarques.filter(
    (lote) =>
      lote.especie.toLowerCase().includes(texto) ||
      lote.estado.toLowerCase().includes(texto),
  );

  return (
    <>
      <h1>Desembarques</h1>
      <table className="table table-hover table-bordered align-middle">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Especie</th>
            <th>Embarcación</th>
            <th>Fecha</th>
            <th>Kilos</th>
            <th>Estado</th>
            <th>Prioridad</th>
          </tr>
        </thead>
        <tbody>
          {resultado.length > 0 ? (
            resultado.map((lote) => (
              <tr key={lote.id}>
                <td>{lote.id}</td>
                <td>{lote.especie}</td>
                <td>{lote.embarcacion}</td>
                <td>{lote.fecha}</td>
                <td>{lote.kilos}</td>
                <td>{lote.estado}</td>
                <td>
                  <button
                    className={"btn btn-sm btn-warning"}
                    onClick={() => agregarPrioritario(lote.id)}
                  >
                    Priorizar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="text-center text-muted py-4">
                No se encontraron lotes para "{filtro}"
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default ListaDesembarques;
