import React from "react";
import LineGraph from "../components/charts/LineGraph";
import BarGraph from "../components/charts/BarGraph";

const Dashboard = () => {
  return (
    <main>
      <div className="flex justify-between items-center flex-col">
        <h1 className="text-[20px] font-semibold p-3 border-b shadow-sm w-full ">
          Dashboard
        </h1>
        <div>button</div>
      </div>
      <section className="grid grid-cols-4">
        <div className="col-start-1 -col-end-1 flex justify-between">
          <div>
            <h2 className="text-base font-semibold">👋Hey, Kevin.</h2>
            <p className="text-sm font-normal">
              Here is all your Relik analytic overview.
            </p>
          </div>
          <div>
            <span>filter</span>
            <span>Export</span>
          </div>
        </div>
        <div>
          <LineGraph />
        </div>
        <div>
          <BarGraph />
        </div>
        <div>
          <LineGraph />
        </div>
        <div>
          <BarGraph />
        </div>
        <div className="col-span-3 mx-auto">
          <LineGraph />
        </div>
        <div>
          <BarGraph />
        </div>
        <div>
          <LineGraph />
        </div>
        <div className="col-span-2 mx-auto">
          <BarGraph />
        </div>
        <div>
          <LineGraph />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
