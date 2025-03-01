import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data/dummy";
import Logo from "../images/logo.png";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  // Toggle between expanded (icons + text) and collapsed (icons only)
  const toggleSidebar = () => setIsOpen(!isOpen);

  // Classes for full view vs. icon-only view
  const normalLink =
    "flex dark:text-gray-200 items-center gap-5 pl-4 pb-2.5 rounded-lg text-md text-[#0D0D12] m-2";
  const iconOnlyLink =
    "flex dark:text-gray-200 justify-center items-center p-3 rounded-lg text-md text-[#0D0D12] m-2";

  return (
    <div
      className={`fixed h-full md:h-screen md:relative top-0 left-0 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-500 transition-all duration-300 ${
        isOpen ? "w-[15rem]" : "w-[4rem]"
      } z-50`} // Added z-index to ensure sidebar stays on top
    >
      {/* Top Section */}
      <div className=" dark:bg-slate-800 bg-white flex items-center shadow-3xl border-r border-black p-4 border-b md:border-gray-200 dark:border-gray-500">
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            className={`object-contain transition-all duration-300 ${
              isOpen ? "w-[13rem]" : "w-0 opacity-0"
            }`}
          />
        </Link>
        <button onClick={toggleSidebar} className="text-gray-899 dark:text-gray-200 p-2 rounded md:block">
          {isOpen ? <MdClose size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Menu Section */}
      <div className="dark:bg-slate-800 bg-white h-full  overflow-auto shadow-6xl bborder-r border-black">
        <p className={`m-3 text-[#A4ABBB] ${isOpen ? "block" : "hidden"}`}>
          Main Menu
        </p>
        {links.map((item) => (
          <div key={item.title}>
            <p
              className={`text-[#A4ABBB] m-3 mt-4 uppercase ${
                isOpen ? "block" : "hidden"
              }`}
            >
              {item.title}
            </p>
            {item.links.map((link) => (
              <NavLink
                to={`/${link.name}`}
                key={link.name}
                className={isOpen ? normalLink : iconOnlyLink}
              >
                {link.icon}
                {isOpen && <span className="capitalize">{link.name}</span>}
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
