import { Link } from 'react-router-dom';

function Sidebarr() {
  return (
    <aside className="border border-gray-100 divide-y divide-[#dfe1e6] grid grid-rows-[auto_1fr_auto]">
      <div className="">Logo</div>
      <nav>
        <h2 className="text-sm text-sidebarColor">Main Menu</h2>
        <ul className="flex flex-col">
          <Link to={'dashboard'} className="">
            {' '}
            Dashboard
          </Link>
          <Link to={'user'} className="">
            User Management
          </Link>
          <Link to={'campaign'} className="">
            Campaign
          </Link>
          <Link to={'referral'} className="">
            Referral
          </Link>
        </ul>
        <h2 className="text-sm text-[#a4abb8]">Store Management</h2>
        <ul className="flex flex-col">
          <Link to={'products'} className="">
            Products
          </Link>
          <Link to={'stores'} className="">
            Stores
          </Link>
        </ul>
        <h2 className="text-sm text-[#a4abb8]">Point Management</h2>
        <ul>
          <Link to={'reward'} className="">
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
