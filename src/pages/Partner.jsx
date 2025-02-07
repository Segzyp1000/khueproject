import React from "react";

const Partner = () => {
  const data = Array(20)
    .fill(0)
    .map((_, index) => ({
      company: `Company ${index + 1}`,
      category: `Category ${(index % 5) + 1}`,
      domain: `domain${index + 1}.com`,
      localStatus: index % 2 === 0 ? "Active" : "Inactive",
      status: index % 2 === 0 ? "bg-green-500" : "bg-red-500",
    }));

  return (
    <div>
      <h1 className="text-[20px] font-semibold p-3  border-b border-gray-200 w-[1168px] h-[72px]">
        Partners (20)
      </h1>
      <div className="flex justify-between items-center ">
        <div className="flex">
          <button>Sort by </button>
          <button>Filter </button>
        </div>
        <div className="flex">
          <button>Export</button>
          <button className="bg-buttonBg">Add Partner</button>
        </div>
      </div>
      <div className="overflow-x-auto w-[1142px]">
        <table className="table-auto ">
          <thead className="bg-white border-b border-gray-200 relative left-0">
            <tr>
              <th className="px-4 py-2">Company</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Domain</th>
              <th className="px-4 py-2">Stat</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="bg-white border-b border-gray-200">
                <td className="px-4 py-2">{item.company}</td>
                <td className="px-4 py-2">{item.category}</td>
                <td className="px-4 py-2">{item.domain}</td>
                <td className="px-4 py-2">{item.localStatus}</td>
                <td className="px-4 py-2">
                  <button className={`py-1 px-4 rounded ${item.status}`}>
                    {item.localStatus}
                  </button>
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
