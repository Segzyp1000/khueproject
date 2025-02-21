import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useState } from 'react';

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <main className="flex w-full h-screen">
      {/* Sidebar - Dynamic width */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Main Content - Expands when sidebar is closed */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-[16.2rem]' : 'ml-[4rem]'} md:ml-0`}>
        <Outlet />
      </div>
    </main>
  );
};

export default AppLayout;
