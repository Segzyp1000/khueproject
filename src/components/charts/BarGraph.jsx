import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarGraph() {
  const barChartData = {
    labels: [
      "Rent",
      "Groceries",
      "Utilities",
      "Entertainment",
      "Transportation",
    ],
    datasets: [
      {
        label: "Expenses",
        data: [1200, 250, 150, 300, 120],
        backgroundColor: ["rgb(225,99,132,0.2)"],
        borderColor: ["rgb(54,162,235,1)"],
        borderWidth: 1,
      },
    ],
  };
  const options = {};
  return <Bar options={options} data={barChartData} />;
}

export default BarGraph;
