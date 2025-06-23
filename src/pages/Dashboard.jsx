import React from "react";
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
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Layout from "../components/Layout";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
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
        backgroundColor: "rgba(59, 130, 246, 0.6)", // blue-500
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
          color: "#9CA3AF", // gray-400
        },
      },
      x: {
        ticks: {
          color: "#9CA3AF",
        },
      },
    },
  };

  return (
    <Layout title="Dashboard">
      <section className="p-6 space-y-6">
        {/* Grid - 4 Stat Boxes */}
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

        {/* Grid - Chart & Chat */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chart Box */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-100">
              Campaign Performance
            </h2>
            <Bar data={chartData} options={chartOptions} />
          </div>

          {/* Chat Box (Placeholder) */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md flex flex-col">
            <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-100">
              Chat/Notification Area
            </h2>
            <div className="flex-1 overflow-y-auto space-y-2">
              {/* Mock chat messages */}
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
      </section>
    </Layout>
  );
};

export default Dashboard;
