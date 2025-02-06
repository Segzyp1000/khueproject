import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const AppLayout = () => {
  return (
    <div className="grid grid-cols-[272px_1fr] h-screen">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
