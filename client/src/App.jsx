import { useState } from 'react';
import ChartForm from './ChartForm';
import ChartDisplay from './ChartDisplay';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
const App = () => {
  const [chartData, setChartData] = useState({});
  const [chartType, setChartType] = useState('');

  const handleFormSubmit = (data, type) => {
    // const parsedData = JSON.parse(data);
    setChartData(data);
    setChartType(type);
  };

  return (
    <div>
      <h1>Chart Generator</h1>
      <ChartForm onSubmit={handleFormSubmit} />
      {Object.keys(chartData).length > 0 && chartType && (
        <ChartDisplay data={chartData} chartType={chartType} />
      )}
    </div>
  );
};

export default App;
