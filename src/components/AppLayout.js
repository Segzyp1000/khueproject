import { Outlet } from 'react-router-dom';
import Sidebarr from './Sidebarr';

const AppLayout = () => {
  return (
    <div className="grid grid-cols-[264px_1fr] h-screen">
      <Sidebarr />
      <Outlet />
    </div>
  );
};

export default AppLayout;
