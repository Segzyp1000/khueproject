import { useState } from 'react';
import CheckBox from './CheckBox';
import { SlOptions } from 'react-icons/sl';

function CampaignData({ data }) {
  const [isChecked, setIsChecked] = useState(false);
  const [checked, setChecked] = useState([]);

  const handleCheck = e => {
    let updatedChecks = [...checked];
    if (e.target.checked) {
      updatedChecks = [...checked, e.target.value];
    } else {
      updatedChecks.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(updatedChecks);
  };

  return (
    <table className="w-full font-mono bg-white divide-y divide-gray-300 text-justify">
      <thead className="text-gray-300 uppercase text-sm font-medium">
        <tr className="">
          <th className="">
            <CheckBox isChecked={isChecked} handleCheck={handleCheck} />
          </th>

          <th className="py-3 px-6">
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
      <tbody className={`divide-y divide-gray-300 ${isChecked ? 'bg-gray-100' : 'bg-white'}`}>
        {data.map(value => (
          <tr
            key={value.id}
            className={`${isChecked ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-100`}
          >
            <td className="py-5 mx-auto">
              <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
            </td>
            <td className="py-5 text-[#666d80] font-normal">{value.campaignName}</td>
            <td className="py-5 text-[#666d80] font-normal ">{value.createdBy}</td>
            <td className="py-5 text-[#666d80] font-normal ">{value.createdAt}</td>
            <td className="py-5 text-[#666d80] font-normal ">{value.start}</td>
            <td className="py-5 text-[#666d80] font-normal ">{value.end}</td>
            <td className="py-5 text-[#666d80] font-normal ">{value.campaignUsage}</td>
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

export default CampaignData;
