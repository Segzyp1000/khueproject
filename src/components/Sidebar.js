import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { links } from "../data/dummy";
import LogoDark from "../images/logo.svg";
import LogoLight from "../images/logo-light.png";
import { useTheme } from "../ThemeContext";
import { FiMenu } from "react-icons/fi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const sidebarRef = useRef(null);
  const location = useLocation();
  const activeLinkRef = useRef(null); // Reference for the active link

    const { theme } = useTheme(); // get current theme

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

  // Scroll to the active link
  useEffect(() => {
    if (activeLinkRef.current) {
      activeLinkRef.current.scrollIntoView({ behavior: "smooth", value:"scroll", block: "center" });
    }
  }, [location.pathname]);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
   <div
  ref={sidebarRef}
  className={`fixed z-50 bg-white min-h-full top-0 left-0 
    dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700
    transition-all duration-300 ease-in-out shadow-lg
    ${isOpen ? "w-[15rem]" : "w-[4rem]"} md:relative`}
>
  {/* Top Section */}
  <div className="flex items-center justify-between h-[4rem] px-3 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
    <Link to="/" className="flex items-center">
      <img
        src={theme === "light" ? LogoDark : LogoLight}
        alt="company logo"
        className={`object-contain transition-all duration-300 ${
          isOpen ? "w-[9rem] opacity-100" : "w-0 opacity-0"
        }`}
      />
    </Link>
    <button
      onClick={toggleSidebar}
      className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 transition-colors"
    >
      {isOpen ? (
        <MdKeyboardDoubleArrowRight size={22} className="hidden md:block" />
      ) : (
        <FiMenu size={22} />
      )}
    </button>
  </div>

  {/* Menu Section */}
  <div className="overflow-y-auto max-h-[calc(100%-4rem)] px-2 py-4 space-y-4">
    <p className={`text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 ${isOpen ? "block" : "hidden"}`}>
      Main Menu
    </p>
    {links.map((item, index) => (
      <div key={index}>
        <p className={`text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide px-2 mb-2 ${isOpen ? "block" : "hidden"}`}>
          {item.title}
        </p>
        {item.links.map((link) => (
          <NavLink
            to={`/${link.name}`}
            key={link.name}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors
              ${
                isActive
                  ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500"
              }`
            }
            onClick={() => isMobile && setIsOpen(false)}
            ref={(navLink) => {
              if (`location.pathname === /${link.name}`) {
                activeLinkRef.current = navLink;
              }
            }}
          >
            <span className="text-lg">{link.icon}</span>
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