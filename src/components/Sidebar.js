import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data/dummy";
import Logo from "../images/logo.png";
import { MdOutlineKeyboardDoubleArrowRight, MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleMobileSidebar = () => setIsMobileOpen(!isMobileOpen);

  const normalLink =
    "flex dark:text-gray-200 items-center gap-5 pl-4 pb-2.5 rounded-lg text-md text-[#0D0D12] m-2";
  const iconOnlyLink =
    "flex dark:text-gray-200 justify-center items-center p-3 rounded-lg text-md text-[#0D0D12] m-2";

  return (
    <>
      {/* Mobile Toggle Button */}
      {!isMobileOpen && (
        <button
          className="md:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded"
          onClick={toggleMobileSidebar}
        >
          <FiMenu size={24} />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:relative top-0 left-0 h-full dark:bg-gray-800 border-r border-gray-200 dark:border-gray-500 transition-all duration-300
          ${isOpen ? "w-[15rem]" : "w-[4rem]"}
          ${isMobileOpen ? "w-[15rem] h-screen bg-white dark:bg-gray-800 z-50" : "md:block hidden"}`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-500">
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              className={`object-contain transition-all duration-300 ${
                isOpen ? "w-[13rem]" : "w-0 hidden"
              }`}
            />
          </Link>
          
          {/* Desktop Toggle Button */}
          <button className="hidden md:block" onClick={toggleSidebar}>
            {isOpen ? (
              <MdOutlineKeyboardDoubleArrowRight size={20} />
            ) : (
              <FiMenu size={20} />
            )}
          </button>

          {/* Mobile Close Button */}
          {isMobileOpen && (
            <button className="md:hidden text-white" onClick={toggleMobileSidebar}>
              <MdClose size={24} />
            </button>
          )}
        </div>

        <div className="overflow-auto">
          <p className={`m-3 text-[#A4ABBB] ${!isOpen && "hidden"}`}>Main Menu</p>
          {links.map((item) => (
            <div key={item.title}>
              <p className={`text-[#A4ABBB] m-3 mt-4 uppercase ${!isOpen && "hidden"}`}>
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

      {/* Overlay for Mobile Sidebar */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={toggleMobileSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;