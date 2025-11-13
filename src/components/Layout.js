import ThemeToggle from "./ThemeToggle";


const Layout = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* Header */}
      <header className="flex justify-between items-center p-3 border-b border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800">
        <h1 className="text-xl font-semibold">{title}</h1>
        <div className="flex gap-2 items-center">
          <div className="relative group">
            <ThemeToggle />
            <span className="absolute top-9 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-200 bg-black text-white text-xs  py-1 rounded">
              Change Theme
            </span>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="p-2">{children}</main>
    </div>
  );
};

export default Layout;
