
const datasetInfo = [
  { atributo: "Edad", tipo: "Numérico", descripcion: "Edad del individuo" },
  { atributo: "Género", tipo: "Categórico", descripcion: "Masculino o Femenino" },
  { atributo: "Ingreso", tipo: "Numérico", descripcion: "Ingreso mensual" },
  { atributo: "Educación", tipo: "Categórico", descripcion: "Nivel educativo alcanzado" },
  { atributo: "Estado Civil", tipo: "Categórico", descripcion: "Soltero, Casado, etc." },
  { atributo: "Profesión", tipo: "Categórico", descripcion: "Tipo de trabajo o profesión" },
];

const InfoDelDataset = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-info text-white">
          <h4 className="mb-0"> Información del Dataset</h4>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light text-center">
                <tr>
                  <th>Atributo</th>
                  <th>Tipo</th>
                  <th>Descripción</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {datasetInfo.map((item, index) => (
                  <tr key={index}>
                    <td className="fw-bold">{item.atributo}</td>
                    <td>{item.tipo}</td>
                    <td>{item.descripcion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoDelDataset;
