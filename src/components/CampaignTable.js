import { useState } from 'react';
import { SlOptions } from 'react-icons/sl';

function CampaignTable({ campaignData }) {
  const [checkedItems, setCheckedItems] = useState({});

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
    <table className="w-full h-auto bg-white dark:bg-gray-800 divide-y divide-gray-300 dark:divide-gray-700 text-justify transition-colors duration-300">
      {/* Header */}
      <thead className="text-gray-400 dark:text-gray-500 uppercase text-md font-medium">
        <tr>
          <th>
            <input
              type="checkbox"
              checked={isAllChecked}
              onChange={handleSelectAll}
              className="w-4 h-4 focus:outline-none accent-[#28005B]"
            />
          </th>

          <th className="py-3">
            <button className="uppercase">
              campaign name <span>🔻</span>
            </button>
          </th>
          <th className="py-3">created by</th>
          <th className="py-3">created at</th>
          <th className="py-3">start</th>
          <th className="py-3">end</th>
          <th className="py- hidden md:block">campaign usage</th>
          <th className="py-3"></th>
        </tr>
      </thead>

      {/* Body */}
      <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
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
            <td className="py-5 px-3">
              <input
                type="checkbox"
                checked={checkedItems[data.id] || false}
                onChange={() => handleCheckboxChange(data.id)}
                className="w-4 h-4 focus:outline-none accent-[#28005B]"
              />
            </td>

            {/* Campaign Details */}
            <td className="py-5 text-[#666d80] dark:text-gray-400 font-normal">{data.campaignName}</td>
            <td className="py-5 text-[#666d80] dark:text-gray-400 font-normal">{data.createdBy}</td>
            <td className="py-5 text-[#666d80] dark:text-gray-400 font-normal">{data.createdAt}</td>
            <td className="py-5 text-[#666d80] dark:text-gray-400 font-normal">{data.start}</td>
            <td className="py-5 text-[#666d80] dark:text-gray-400 font-normal">{data.end}</td>
            <td className="py-5 text-[#666d80] dark:text-gray-400 font-normal md:block hidden">{data.campaignUsage}</td>

            {/* Options Button */}
            <td className="py-5">
              <button className="text-gray-600 dark:text-gray-400">
                <SlOptions />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CampaignTable;