import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="flex w-full transition-colors dark:bg-gray-800">
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        isMobile={isMobile}
      />
      <div
        className={`flex-1 min-h-screen transition-all duration-300 ${
          isMobile
            ? "ml-20"
            : isSidebarOpen
            ? "ml-[15rem]"
            : "ml-[4rem]"
        }`}
      >
        <Outlet />
      </div>
    </main>
  );
};

export default AppLayout;