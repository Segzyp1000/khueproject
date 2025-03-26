import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { links } from "../data/dummy";
import Logo from "../images/logo.png";
import { FiMenu } from "react-icons/fi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const sidebarRef = useRef(null);
  const location = useLocation();

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close sidebar on mobile when navigating to a new page
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [location.pathname, isMobile]);

  // Close sidebar when clicking outside (on mobile only)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobile && isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, isMobile]);

  // Lock scrolling when sidebar is open (on mobile only)
  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen, isMobile]);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const normalLink = "flex dark:text-gray-300 items-center gap-5 pl-4 pb-2.5 rounded-lg text-md text-[#666d80] m-2";
  const iconOnlyLink = "flex dark:text-gray-300 items-center p-3 rounded-lg text-md text-[#666d80] m-2";

  return (
    <>
      {/* Overlay for clicking outside (on mobile only) */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed z-50  bg-white min-h-full top-0 left-0 dark:bg-gray-800 border-r dark:border-gray-500 transition-all duration-300 ${
          isOpen ? "w-[15rem]" : "w-[4rem]"
        } md:relative`}
      >
        {/* Top Section */}
        <div className="dark:bg-slate-800 bg-white flex items-center shadow-4xl border-r p-4 border-b border-b-gray-200 dark:border-gray-500">
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              className={`object-contain transition-all duration-300 ${isOpen ? "w-[13rem]" : "w-0 opacity-0"}`}
            />
          </Link>
          <button
            onClick={toggleSidebar}
            className="text-gray-800 dark:text-gray-200 p-2 rounded md:block"
          >
            {isOpen ? <MdKeyboardDoubleArrowRight size={20}  className="hidden md:block" /> : <FiMenu size={20} />}
          </button>
        </div>

        {/* Menu Section */}
        <div className="dark:bg-slate-800 bg-white overflow-auto max-h-full space-y-5">
          <p className={`m-3 text-[#A4ABBB] ${isOpen ? "block" : "hidden"}`}>Main Menu</p>
          {links.map((item) => (
            <div key={item.title}>
              <p className={`text-[#A4ABBB] m-3 mt-4 uppercase ${isOpen ? "block" : "hidden"}`}>
                {item.title}
              </p>
              {item.links.map((link) => (
                <NavLink
                  to={`/${link.name}`}
                  key={link.name}
                  className={isOpen ? normalLink : iconOnlyLink}
                  onClick={() => isMobile && setIsOpen(false)} // Close on navigation (mobile only)
                >
                  {link.icon}
                  {isOpen && <span className="capitalize">{link.name}</span>}
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;