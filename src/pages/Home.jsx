import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-5 text-center">
      <div className="d-grid gap-3 col-6 mx-auto">
        <Link to={"/principal"} className='btn btn-success' >Pagina Inicio</Link>
        <Link to="/graficas" className="btn btn-secondary">Ver Gráficas</Link>
        <Link to="/predictor" className="btn btn-primary">Ir al Predictor</Link>
        
      </div>
    </div>
  );
};

export default Home;
