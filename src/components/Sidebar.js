import { useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { links } from "../data/dummy";
import LogoDark from "../images/logo.svg";
import LogoLight from "../images/logo-light.png";
import { useTheme } from "../ThemeContext";
import { FiMenu } from "react-icons/fi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Sidebar = ({ isOpen, setIsOpen, isMobile }) => {
  const sidebarRef = useRef(null);
  const location = useLocation();
  const activeLinkRef = useRef(null);
  const { theme } = useTheme();

  // Close sidebar on mobile when navigating
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [location.pathname, isMobile, setIsOpen]);

  // Close sidebar when clicking outside (mobile only)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobile &&
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, isMobile, setIsOpen]);

  // Lock scrolling when sidebar is open (mobile only)
  useEffect(() => {
    document.body.style.overflow = isMobile && isOpen ? "hidden" : "auto";
  }, [isOpen, isMobile]);

  // Scroll to active link
  useEffect(() => {
    if (activeLinkRef.current) {
      activeLinkRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [location.pathname]);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Backdrop for mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-50 min-h-full bg-white dark:bg-gray-800
          border-r border-gray-200 dark:border-gray-700 shadow-lg
          transition-all duration-300 ease-in-out
          ${isOpen ? "w-[15rem]" : "w-[4rem]"}`}
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
            className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isOpen ? (
              <MdKeyboardDoubleArrowRight size={22} className="hidden md:block" />
            ) : (
              <FiMenu size={22} />
            )}
          </button>
        </div>

        {/* Menu Section */}
        <div className="overflow-y-auto max-h-[calc(100%-4rem)] p-4 space-y-4">
          <p
            className={`text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            Main Menu
          </p>
          {links.map((item, index) => (
            <div key={index}>
              <p
                className={`text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide px-2 mb-0 md:mb-2 ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                {item.title}
              </p>
              {item.links.map((link) => (
                <NavLink
                  to={`/${link.name}`}
                  key={link.name}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-500"
                    }`
                  }
                  onClick={() => isMobile && setIsOpen(false)}
                  ref={(navLink) => {
                    if (`/${link.name}` === location.pathname) {
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
    </>
  );
};

export default Sidebar;