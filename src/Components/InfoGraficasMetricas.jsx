import {
    Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";

const InfoGraficasMetricas = () => {
  const datos = [
    {
      algoritmo: "RandomForest",
      MAE: 25.9246,
      RMSE: 103.2030,
      Entrenamiento: 94.8083,
      Prediccion: 13.2571,
      Peso: 3031.3627,
    },
    {
      algoritmo: "XGBoost",
      MAE: 8111.9491,
      RMSE: 30376.2244,
      Entrenamiento: 5.8786,
      Prediccion: 0.5094,
      Peso: 0.7404,
    },
    {
      algoritmo: "GradientBoosting",
      MAE: 5668.3905,
      RMSE: 29127.9507,
      Entrenamiento: 27.3905,
      Prediccion: 0.3373,
      Peso: 0.3647,
    },
    {
      algoritmo: "MLPRegressor",
      MAE: 5547.2761,
      RMSE: 48315.7149,
      Entrenamiento: 169.2024,
      Prediccion: 0.3206,
      Peso: 0.3006,
    },
  ];

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Gráfica de Métricas de Modelos</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={datos} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="algoritmo" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="MAE" fill="#8884d8" />
          <Bar dataKey="RMSE" fill="#82ca9d" />
          <Bar dataKey="Entrenamiento" fill="#ffc658" />
          <Bar dataKey="Prediccion" fill="#ff8042" />
          <Bar dataKey="Peso" fill="#0088FE" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InfoGraficasMetricas;
