import { SlOptions } from "react-icons/sl";
import { partnerData } from "../data/partnerData";


function partnerTable () {

return (

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
            {partnerData?.map((item, index) => (
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
      
    )
 }

 export default partnerTable