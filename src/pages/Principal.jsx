import InfoDelDataset from "../Components/InfoDataset";
import InfoGraficasMetricas from "../Components/InfoGraficasMetricas";
import InfoMetricas from "../Components/InfoMetricas";

const Principal = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Resumen del Dataset</h2>
      <InfoDelDataset/>

      <hr className="my-5" />

     <InfoMetricas/>

      <hr className="my-5" />

      <InfoGraficasMetricas/>
    </div>
  );
};

export default Principal;
