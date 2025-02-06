import { Link } from 'react-router-dom';
import { CiHome as Dashboard } from 'react-icons/ci';
import { HiOutlineUser as User } from 'react-icons/hi2';
import { CiSquareCheck as Campaign } from 'react-icons/ci';
import { CiStickyNote as Referral } from 'react-icons/ci';
import { MdInsertChartOutlined as Chart } from 'react-icons/md';

function Sidebarr() {
  return (
    <aside className="border border-gray-100 divide-y divide-[#dfe1e6] grid grid-rows-[auto_1fr_auto]">
      <div className="">Logo</div>
      <nav>
        <h2 className="text-sm text-[#a4abb8] px-4">Main Menu</h2>
        <ul className="flex flex-col p-2">
          <Link to={'dashboard'} className="flex items-center px-3 py-2 gap-2">
            <Dashboard />
            <span>Dashboard</span>
          </Link>
          <Link to={'user'} className="flex items-center px-3 py-2 gap-2">
            <User />
            User Management
          </Link>
          <Link to={'campaign'} className="flex items-center px-3 py-2 gap-2">
            <Campaign />
            Campaign
          </Link>
          <Link to={'referral'} className="flex items-center px-3 py-2 gap-2">
            <Referral />
            Referral
          </Link>
        </ul>
        <h2 className="text-sm text-[#a4abb8] px-4">Store Management</h2>
        <ul className="flex flex-col p-2">
          <Link to={'products'} className="flex items-center px-3 py-2 gap-2">
            <Chart />
            Products
          </Link>
          <Link to={'stores'} className="flex items-center px-3 py-2 gap-2">
            <Chart />
            Stores
          </Link>
        </ul>
        <h2 className="text-sm text-[#a4abb8] px-4">Point Management</h2>
        <ul className="flex flex-col p-2">
          <Link to={'reward'} className="flex items-center px-3 py-2 gap-2">
            <Chart />
            Reward
          </Link>
        </ul>
      </nav>
      <div>
        <div className="flex items-center">
          {/* <img /> */}
          <div>image</div>
          <div>
            <p>Alexandria Andria</p>
            <p>alexandra@gmail.com</p>
          </div>
          <div>logOut</div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebarr;
