
import { Pie, Bar } from 'react-chartjs-2';

const ChartDisplay = ({ data, chartType }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: 'Data',
        data: Object.values(data),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      {chartType === 'pie' && <Pie data={chartData} />}
      {chartType === 'bar' && <Bar data={chartData} />}
      {/* Add more chart types as needed */}
    </div>
  );
};

export default ChartDisplay;
