import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function LineGraph() {
  const lineChartData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Steps',
        data: [1000, 4500, 3000, 6000, 8000, 7000, 9000],
        borderColor: 'rgb(75,192,192)'
      }
    ]
  };
  const options = {};
  return <Line options={options} data={lineChartData} />;
}

export default LineGraph;
