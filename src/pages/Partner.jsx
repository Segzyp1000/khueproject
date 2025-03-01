import React, { useState } from "react";
import Button from "../components/Button";
import Layout from "../components/Layout";
import { partnerData } from "../data/partnerData";
import { SlOptions } from "react-icons/sl";
import { Link } from "react-router-dom";

function Partner() {
  const [showButton, setShowButton] = useState(false);

  return (
    <Layout title="Partner (20)">
      <section className="flex flex-col justify-between items-center gap-y-[1.4rem] py-[2rem]">
        <div className=" gap-[2rem] flex md:justify-between items-center w-full">
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

      <div className="overflow-x-auto p-6">
        <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-[#EEEFF2] dark:bg-gray-700 text-[#2B0058] uppercase dark:text-white text-sm">
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
            {partnerData.map((item) => (
              <tr className="bg-white dark:bg-gray-800">
                <td className="py-5 px-4 text-left text-[#0D0D12] dark:text-gray-200 font-semibold border-b border-gray-300">
                  {item.company}
                </td>
                <td className="py-5 px-4 text-left text-[#666d80] dark:text-gray-400 font-semibold border-b border-gray-300">
                  {item.category}
                </td>
                <td className="py-5 px-4 text-left text-[#666d80] dark:text-gray-400 font-semibold border-b border-gray-300">
                  {item.domain}
                </td>
                <td className="py-5 px-4 text-left text-[#666d80] dark:text-gray-400 font-semibold border-b border-gray-300">
                  {item.location}
                </td>
                <td className="py-5 px-4 text-left text-[#666d80] dark:text-gray-400 font-semibold border-b border-gray-300 ">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === "Active"
                        ? "text-blue-100 bg-[#4E5FEF]"
                        : "bg-red-200 dark:text-red-600 text-red-800"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="py-2 font-semibold border-b border-gray-300 dark:text-gray-400">
                  <div>
                    <SlOptions
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 cursor-pointer"
                      onClick={() =>
                        setShowButton((prevShowButton) => ({
                          ...prevShowButton,
                          [item.id]: !prevShowButton[item.id],
                        }))
                      }
                    />
                    {showButton[item.id] && (
                      <Link
                        to={`/details/${item.id}`}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800"
                      >
                        <button className="bg-transparent dark:hover:bg-blue hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                          View Details
                        </button>
                      </Link>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Partner;
