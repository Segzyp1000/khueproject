import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data/dummy";
import Logo from "../images/logo.png";
import { FiMenu } from "react-icons/fi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle screen resize to update `isMobile`
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set sidebar to collapsed mode by default on mobile
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const normalLink = "flex dark:text-gray-200 items-center gap-5 pl-4 pb-2.5 rounded-lg text-md text-[#0D0D12] m-2";
  const iconOnlyLink = "flex dark:text-gray-200 justify-center items-center p-3 rounded-lg text-md text-[#0D0D12] m-2";

  return (
    <div
      className={`fixed min-h-full md:relative top-0 left-0 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-500 transition-all duration-300 ${
        isOpen ? "w-[15rem]" : "w-[4rem]"
      } z-50`}
    >
      {/* Top Section */}
      <div className="dark:bg-slate-800 bg-white flex items-center shadow-3xl border-r border-black p-4 border-b md:border-gray-200 dark:border-gray-500">
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            className={`object-contain transition-all duration-300 ${
              isOpen ? "w-[13rem]" : "w-0 opacity-0"
            }`}
          />
        </Link>
        <button
          onClick={toggleSidebar}
          className="text-gray-899 dark:text-gray-200 p-2 rounded md:block"
        >
          {isOpen ? <MdKeyboardDoubleArrowRight size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Menu Section */}
      <div className="dark:bg-slate-800 bg-white overflow-auto min-h-full border-r border-gray-200 space-y-5">
        <p className={`m-3 text-[#A4ABBB] ${isOpen ? "block" : "hidden"}`}>Main Menu</p>
        {links.map((item) => (
          <div key={item.title}>
            <p className={`text-[#A4ABBB] m-3 mt-4 uppercase ${isOpen ? "block" : "hidden"}`}>
              {item.title}
            </p>
            {item.links.map((link) => (
              <NavLink to={`/${link.name}`} key={link.name} className={isOpen ? normalLink : iconOnlyLink}>
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
