import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const AppLayout = () => {
  return (
    <main className="grid grid-cols-[16.2rem,1fr]">
      <Sidebar />
      <Outlet />
    </main>
  );
};

export default AppLayout;
