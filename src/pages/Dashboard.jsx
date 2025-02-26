import React from "react";
import { Bar, Line, Pie, Doughnut, Scatter, Bubble } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Layout from "../components/Layout";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,

  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Sample data
  const barData = {
    labels: ["Active Users", "Partners Added", "Campaigns", "Referrals"],
    datasets: [
      {
        label: "Count",
        data: [1500, 320, 80, 450],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "User Engagement",
        data: [120, 200, 250, 300, 400, 600, 700],
        borderColor: "#FF6384",
        fill: false,
      },
    ],
  };

  const pieData = {
    labels: ["Home", "Dashboard", "Settings", "Profile"],
    datasets: [
      {
        label: "Most Active Pages",
        data: [40, 30, 20, 10],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  const doughnutData = {
    labels: ["Chrome", "Safari", "Firefox", "Edge"],
    datasets: [
      {
        label: "Browser Usage",
        data: [60, 20, 10, 10],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  const scatterData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "User Growth",
        data: [100, 150, 200, 250, 300],
        backgroundColor: "#36A2EB",
      },
    ],
  };

  const bubbleData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Revenue Growth",
        data: [100, 150, 200, 250],
        backgroundColor: "#FF6384",
        dark: "text-white",
      },
    ],
  };

  return (
    <Layout title="Dashboard">
      <h2 className="text-lg font-semibold mt-5">👋 Hey, Kevin.</h2>
      <section className=" dark:bg-gray-800 grid md:grid-cols-4 grid-cols-1 gap-4  mt-5">
        {/* KPI Metrics */}

        <div className="col-span-1">
          <Bar data={barData} />
        </div>
        <div className="col-span-1">
          <Line data={lineData} />
        </div>
        <div className="col-span-1">
          <Line data={lineData} />
        </div>
        <div className="col-span-1">
          <Scatter data={scatterData} />
        </div>

        {/* User Overview & Most Active Pages */}
        <div className="col-span-1">
          <Pie data={pieData} />
        </div>
        <div className="col-span-1">
          <Bubble data={bubbleData} />
        </div>

        {/* Visitor Insights */}
        <div className="col-span-1">
          <Doughnut data={doughnutData} />
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
