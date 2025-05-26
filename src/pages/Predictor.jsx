import Modelos from "../Components/Modelos";
import Variables from "../Components/Variables";


const Predictor = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary mb-4">Predicción de Ingreso del Hogar</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <Variables/>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <Modelos/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Predictor;
