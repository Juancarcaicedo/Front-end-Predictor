import InfoDelDataset from "../Components/InfoDataset";
import InfoGraficasMetricas from "../Components/InfoGraficasMetricas";
import InfoMetricas from "../Components/InfoMetricas";

const Principal = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Predictor Ingreso del Hogar Calidad de vida</h2>
      <p>Aqui podras obtener toda la informacion del aplicativo </p>
      <InfoDelDataset/>

      <hr className="my-5" />

     <InfoMetricas/>

      <hr className="my-5" />

      <InfoGraficasMetricas/>
    </div>
  );
};

export default Principal;
