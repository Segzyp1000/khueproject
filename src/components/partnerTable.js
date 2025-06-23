import React, { useState } from "react";
import { SlOptions } from "react-icons/sl";
import { Link } from "react-router-dom";

function PartnerTable({ data }) {
  const [showButtons, setShowButtons] = useState({});

  const toggleButton = (id) => {
    setShowButtons((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="overflow-x-auto p-6">
      <table className="min-w-full bg-white dark:bg-[#1E1E2F] shadow-md rounded-lg overflow-hidden">
        <thead className="bg-[#EEEFF2] dark:bg-[#2A2A40] text-[#2B0058] dark:text-gray-100 uppercase text-sm">
          <tr>
            <th className="py-4 px-6 text-left">Company</th>
            <th className="py-4 px-6 text-left">Category</th>
            <th className="py-4 px-6 text-left">Domain</th>
            <th className="py-4 px-6 text-left">Location</th>
            <th className="py-4 px-6 text-left">Status</th>
            <th className="py-4 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr
              key={item.id}
              className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#2E2E48]"
            >
              <td className="py-5 px-6 text-[#0D0D12] dark:text-white font-medium">
                {item.company}
              </td>
              <td className="py-5 px-6 text-[#666d80] dark:text-gray-300 font-medium">
                {item.category}
              </td>
              <td className="py-5 px-6 text-[#666d80] dark:text-gray-300 font-medium">
                {item.domain}
              </td>
              <td className="py-5 px-6 text-[#666d80] dark:text-gray-300 font-medium">
                {item.location}
              </td>
              <td className="py-5 px-6">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.status === "Active"
                      ? "bg-[#4E5FEF] text-white"
                      : "bg-red-200 text-red-800 dark:bg-red-800 dark:text-white"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="py-5 px-6 relative">
                <div className="flex items-center gap-2">
                  <SlOptions
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white cursor-pointer"
                    onClick={() => toggleButton(item.id)}
                  />
                  {showButtons[item.id] && (
                    <Link to={`/details/${item.id}`}>
                      <button className="ml-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded transition-all">
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
  );
}

export default PartnerTable;