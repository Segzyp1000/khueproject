import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale,
} from "chart.js";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import Layout from "../components/Layout";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale
);

const Dashboard = () => {
  const stats = [
    { title: "Total Campaigns", value: 128, color: "bg-blue-500" },
    { title: "Running", value: 64, color: "bg-green-500" },
    { title: "Scheduled", value: 30, color: "bg-yellow-500" },
    { title: "Expired", value: 34, color: "bg-red-500" },
  ];

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Campaigns Created",
        data: [10, 25, 20, 40, 30, 50],
        backgroundColor: "rgba(59, 130, 246, 0.6)",
        borderRadius: 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#9CA3AF",
        },
      },
      x: {
        ticks: {
          color: "#9CA3AF",
        },
      },
    },
  };

  const pieData = {
    labels: ["Email", "Social Media", "SMS"],
    datasets: [
      {
        label: "Distribution",
        data: [40, 35, 25],
        backgroundColor: [
          "rgba(59, 130, 246, 0.7)",
          "rgba(34, 197, 94, 0.7)",
          "rgba(234, 179, 8, 0.7)",
        ],
        borderWidth: 0,
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "User Engagement",
        data: [400, 600, 750, 900, 1100, 1400],
        fill: true,
        borderColor: "rgba(59, 130, 246, 1)",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#9CA3AF" },
      },
      x: {
        ticks: { color: "#9CA3AF" },
      },
    },
  };

  const doughnutData = {
    labels: ["Clicked", "Ignored", "Bounced"],
    datasets: [
      {
        label: "Click Rate",
        data: [60, 30, 10],
        backgroundColor: [
          "rgba(34, 197, 94, 0.7)",
          "rgba(239, 68, 68, 0.7)",
          "rgba(234, 179, 8, 0.7)",
        ],
        borderWidth: 0,
      },
    ],
  };

  const doughnutOptions = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  return (
    <Layout title="Dashboard">
      <section className="p-6 space-y-6">
        {/* Stat Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl text-white shadow-md ${item.color} dark:shadow-lg`}
            >
              <h3 className="text-md font-medium">{item.title}</h3>
              <p className="text-3xl font-bold mt-2">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Main Chart & Chat Box */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-100">
              Campaign Performance
            </h2>
            <Bar data={chartData} options={chartOptions} />
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md flex flex-col">
            <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-100">
              Chat/Notification Area
            </h2>
            <div className="flex-1 overflow-y-auto space-y-2">
              <div className="p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-sm">
                🔔 New campaign created: "Summer Promo"
              </div>
              <div className="p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-sm">
                ✅ Campaign "Spring Sale" is now running.
              </div>
              <div className="p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-sm">
                📅 "Autumn Blast" scheduled for next week.
              </div>
            </div>
          </div>
        </div>

        {/* Additional Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Pie Chart */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-100">
              Campaign Type Distribution
            </h2>
            <Pie data={pieData} options={pieOptions} />
          </div>

          {/* Line Chart */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-100">
              User Engagement
            </h2>
            <Line data={lineData} options={lineOptions} />
          </div>

          {/* Doughnut Chart */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-100">
              Click Through Breakdown
            </h2>
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
