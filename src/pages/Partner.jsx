import React from "react";
import Button from "../components/Button";
import { SlOptions } from "react-icons/sl";

const Partner = () => {
  const data = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    company: `Company ${i + 1}`,
    category: ["Tech", "Finance", "Healthcare", "Retail"][i % 4],
    domain: `company${i + 1}.com`,
    location: ["New York", "London", "Berlin", "Tokyo"][i % 4],
    status: i % 2 === 0 ? "Active" : "Pending",
  }));

  return (
    <div className="w-[1168px] h-screen">
      <header className="flex justify-between items-center text-[20px] font-semibold p-3 border-gray-200  border-b border-b-primary-50">
        <h1 className="text-[20px] font-semibold">Partner (20)</h1>
        <button className="border rounded-full">dots</button>
      </header>
      <section className="flex flex-col justify-between items-center gap-y-[1.4rem] py-[2rem] px-5">
        <div className=" gap-[2rem] flex justify-between items-center w-full">
          <div className="flex gap-x-[0.8rem]">
            <Button>
              <span>icon</span>
              <span className="text-[1.4rem]">Sort by</span>
            </Button>
            <Button>
              <span>icon</span>
              <span className="text-[1.4rem]">Filter</span>
            </Button>
          </div>
          <div className="flex gap-x-[0.8rem] ">
            <Button>
              <span>icon</span>
              <span className="text-[1.4rem]">Export</span>
            </Button>
            <Button type={"secondary"}>
              <span className="text-[2rem]">&#43;</span>
              <span className="text-[1.4rem]">Add Partner</span>
            </Button>
          </div>
        </div>
      </section>
      <div className="overflow-x-auto p-6 w-[1104px] h-[744px]">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-[#EEEFF2] text-[#2B0058] uppercase text-sm">
            <tr>
              <th className="py-3 px-6 text-left">Company</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">Domain</th>
              <th className="py-3 px-6 text-left">Location</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr className="bg-white">
                <td className="py-5 px-4 text-left text-[#0D0D12] font-semibold border-b border-gray-300">
                  {item.company}
                </td>
                <td className="py-5 px-4 text-left text-[#666d80] font-semibold border-b border-gray-300">
                  {item.category}
                </td>
                <td className="py-5 px-4 text-left text-[#666d80] font-semibold border-b border-gray-300">
                  {item.domain}
                </td>
                <td className="py-5 px-4 text-left text-[#666d80] font-semibold border-b border-gray-300">
                  {item.location}
                </td>
                <td className="py-5 px-4 text-left text-[#666d80]  font-semibold border-b border-gray-300">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === "Active"
                        ? "text-blue-100 bg-[#4E5FEF]"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-left font-semibold border-b border-gray-300">
                  <SlOptions className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Partner;
