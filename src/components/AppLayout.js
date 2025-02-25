// AppLayout.js
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <main className="flex w-full  transition-colors dark:bg-gray-800">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-[16.2rem]" : "ml-[4rem]"
        } md:ml-0`}
      >
        <Outlet />
      </div>
    </main>
  );
};

export default AppLayout;