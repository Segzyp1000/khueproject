import React from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
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
import Button from "../components/Button";

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

  return (
    <Layout title="Dashboard">
      <section className="grid grid-cols-4 gap-5 mt-5 h-[981px]">
        {/* KPI Metrics */}
        <div className="col-span-4 flex justify-between">
          <h2 className="text-lg font-semibold">👋 Hey, Kevin.</h2>
          <Button>
            <span>icon</span>
            <span className="text-[1.4rem]">Filter</span>
          </Button>
        </div>

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
          <Doughnut data={doughnutData} />
        </div>

        {/* User Overview & Most Active Pages */}
        <div className="col-span-2">
          <Line data={lineData} />
        </div>
        <div className="col-span-1">
          <Pie data={pieData} />
        </div>

        {/* Visitor Insights */}
        <div className="col-span-1">
          <Doughnut data={doughnutData} />
        </div>
        <div className="col-span-1">
          <Pie data={pieData} />
        </div>
        <div className="col-span-2">
          <Bar data={barData} />
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
