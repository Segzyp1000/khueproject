import React, {useState} from "react";
import { SlOptions } from "react-icons/sl";
import { Link } from "react-router-dom";




function  PartnerTable ({partnerData}) {
  const [showButton, setShowButton] = useState(false);

return (
  <div className="overflow-x-auto p-6">
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
      {partnerData?.map(item => (
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

          <td className="py-2 font-semibold border-b border-gray-300">
            <div>
              <SlOptions
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
                onClick={() =>
                  setShowButton((prevShowButton) => ({
                    ...prevShowButton,
                    [item.id]: !prevShowButton[item.id],
                  }))
                }
              />
              {showButton[item.id] && (
                <Link to={`/details/${item.id}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
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
)
}

export default PartnerTable;