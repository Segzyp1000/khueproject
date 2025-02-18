import ThemeToggle from "./ThemeToggle";

const Layout = ({ children, title }) => {
  return (
    <div>
      {/* Global Header */}
      <header className="flex justify-between items-center text-[20px] font-semibold p-3 border-gray-200 border-b border-b-primary-50">
        <h1 className="text-[20px] font-semibold">{title}</h1>
        <ThemeToggle />
      </header>

      {/* Page Content */}
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;
