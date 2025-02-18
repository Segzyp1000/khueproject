import { useState } from 'react';
// import CheckBox from './CheckBox';
import { SlOptions } from 'react-icons/sl';

function CampaignTable({ campaignData }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <table className="w-[1110px] h-[570px]  bg-white divide-y divide-gray-300 text-justify">
      <thead className="text-gray-400 uppercase text-md font-medium">
        <tr>
          <th>
            <input
              type="checkbox"
              // value={campaignData}
              checked={isChecked}
              onChange={e => setIsChecked(e.target.checked)}
              className="w-4 h-4 focus:outline-none  accent-[#28005B] "
            />
          </th>

          <th className="py-3">
            <button className="uppercase">
              campaign name<span>🔻</span>
            </button>
          </th>
          <th className="py-3">created by</th>
          <th className="py-3">created at</th>
          <th className="py-3">start</th>
          <th className="py-3">end</th>
          <th className="py-3">campaign usage</th>
          <th className="py-3"></th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-300 bg-white">
        {campaignData.map(data => (
          <tr
            key={data.id}
            className={`${isChecked ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-100`}
          >
            <td className="py-5 px-3">
              <input
                type="checkbox"
                // value={data}
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
                className="w-4 h-4 focus:outline-none  accent-[#28005B] "
              />
            </td>
            <td className="py-5 text-[#666d80] font-normal">{data.campaignName}</td>
            <td className="py-5 text-[#666d80] font-normal ">{data.createdBy}</td>
            <td className="py-5 text-[#666d80] font-normal ">{data.createdAt}</td>
            <td className="py-5 text-[#666d80] font-normal ">{data.start}</td>
            <td className="py-5 text-[#666d80] font-normal ">{data.end}</td>
            <td className="py-5 text-[#666d80] font-normal ">{data.campaignUsage}</td>
            <td className="py-5">
              <button className="text-gray-600">
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
