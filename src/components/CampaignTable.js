import { useState} from 'react';
import { SlOptions } from "react-icons/sl";
import { Link } from 'react-router-dom';




function CampaignTable({ campaignData }) {
  const [checkedItems, setCheckedItems] = useState({});
   const [showButtons, setShowButtons] = useState({});

    const toggleButton = (id) => {
    setShowButtons((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };


  // Toggle individual checkboxes
  const handleCheckboxChange = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Select all checkboxes
  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    const newCheckedItems = {};
    campaignData.forEach((item) => {
      newCheckedItems[item.id] = isChecked;
    });
    setCheckedItems(newCheckedItems);
  };

  // Check if all items are selected
  const isAllChecked = campaignData.every((item) => checkedItems[item.id]);


  

  return (
    <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
  {/* Header */}
       <thead className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200 uppercase text-xs font-semibold tracking-wide">
        <tr>
          <th>
            <input
              type="checkbox"
              checked={isAllChecked}
              onChange={handleSelectAll}
              className="w-4 h-4 focus:outline-none accent-[#28005B]"
            />
          </th>

          <th className="py-3 px-2">
            <button className="uppercase">
              campaign name <span>🔻</span>
            </button>
          </th>
          <th className="py-3 px-2">created by</th>
          <th className="py-3 px-2">created at</th>
          <th className="py-3 px-2">start</th>
          <th className="py-3 px-2">end</th>
          <th className="py-3 px-2 hidden md:block">campaign usage</th>
          <th className="py-3 px-2">actions</th>  
        </tr>
      </thead>

      {/* Body */}
      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
        {campaignData.map((data) => (
          <tr
            key={data.id}
            className={`${
              checkedItems[data.id]
                ? 'bg-gray-100 dark:bg-gray-700'
                : 'bg-white dark:bg-gray-800'
            } hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors`}
          >
            {/* Checkbox */}
            <td className="py-5 md:px-1 px-2">
              <input
                type="checkbox"
                checked={checkedItems[data.id] || false}
                onChange={() => handleCheckboxChange(data.id)}
                className="w-4 h-4 focus:outline-none accent-[#28005B]"
              />
            </td>
        <td className="px-4 py-3">{data.campaignName}</td>
        <td className="px-4 py-3">{data.createdBy}</td>
        <td className="px-4 py-3">{data.createdAt}</td>
        <td className="px-4 py-3">{data.start}</td>
        <td className="px-4 py-3">{data.end}</td>
        <td className="px-4 py-3 hidden md:table-cell">{data.campaignUsage}</td>
        <td className="py-5 px-6 relative">
                <div className="flex items-center gap-2">
                  <SlOptions
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white cursor-pointer"
                    onClick={() => toggleButton(data.id)}
                  />
                  {showButtons[data.id] && (        
                    <Link to={`/campaign/${data.id}`}>
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
  );
}

export default CampaignTable;