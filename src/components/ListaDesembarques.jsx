function ListaDesembarques() {
  const desembarques = [
    {
      id: "001",
      especie: "Anchoveta",
      embarcacion: "Doña Rosa",
      fecha: "2025-06-10",
      kilos: 12400,
      estado: "Pendiente",
    },
    {
      id: "002",
      especie: "Sardina",
      embarcacion: "San Borondón",
      fecha: "2025-06-10",
      kilos: 8750,
      estado: "Procesado",
    },
    {
      id: "003",
      especie: "Jurel",
      embarcacion: "El Vikingo",
      fecha: "2025-06-11",
      kilos: 21300,
      estado: "Rechazado",
    },
    {
      id: "004",
      especie: "Anchoveta",
      embarcacion: "Doña Rosa",
      fecha: "2025-06-11",
      kilos: 9200,
      estado: "Procesado",
    },
    {
      id: "005",
      especie: "Sardina",
      embarcacion: "Talcahuano I",
      fecha: "2025-06-12",
      kilos: 15600,
      estado: "Pendiente",
    },
  ];

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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {desembarques.map((lote) => (
            <tr key={lote.id}>
              <td>{lote.id}</td>
              <td>{lote.especie}</td>
              <td>{lote.embarcacion}</td>
              <td>{lote.fecha}</td>
              <td>{lote.kilos}</td>
              <td>{lote.estado}</td>
              <td>
                <button onclick="">Priorizar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListaDesembarques;
