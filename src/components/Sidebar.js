import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { links, Links2 } from '../data/dummy';
import Logo from '../images/logo.png';
import profile from '../images/profile.jpg';

const Sidebar = () => {
  const normalLink =
    'flex items-center gap-5 pl-4  pb-2.5 rounded-lg text-md text-[#666D8D] m-2 ';

  return (
    <div className="h-[1012px]  md:hover:overflow-auto w-[15rem]">
      <div className="w-[15rem] h-[5.5rem] border-gray-200  border-b border-b-primary-50">
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            className="w-[13rem] h-[2.5rem] object-contain top-5 relative"
          />
        </Link>
      </div>

      <div className=" h-[56.4rem] w-[17rem] border-gray-300 border-b relative left-0 bottom-0">
        <p className="m-3 text-[#A4ABBB]">Main Menu</p>
        {links.map(item => (
          <div key={item.title}>
            <p className="text-[#A4ABBB] m-3 mt-4 uppercase">{item.title}</p>
            {item.links.map(link => (
              <NavLink to={`/${link.name}`} key={link.name} className={() => normalLink}>
                {link.icon}
                <span className="capitalize ">{link.name}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>

      <div className=" h-[7.5rem] w-[15rem] border-b border-gray-300">
        {Links2.map(item => (
          <div key={item.title}>
            {item.Links2.map(link => (
              <NavLink to={`/${link.name}`} key={link.name} className={() => normalLink}>
                {link.icon}
                <span>{link.name}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
        {/* profile  section */}
      <div className="flex w-[17rem] h-[5rem] mt-20 space-x-2 relative bott-">
        <img src={profile} alt="profile" className="mt-3 w-[2rem] h-[2rem] object-contain top-2" />
        <div>
          <p>Kelvin Gate</p>
          <p>kelvingate@mail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
