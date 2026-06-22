import "../index.css";

function ListaDesembarques() {
  let desembarques = ["test", "test2", "test3"];

  return (
    <>
      <h1>Desembarques</h1>
      <ul className="list-group">
        {desembarques.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListaDesembarques;
