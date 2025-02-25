// Layout.js
import React from "react";
import ThemeToggle from "./ThemeToggle";

const Layout = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800">
        <h1 className="text-xl font-semibold">{title}</h1>
        <ThemeToggle />
      </header>

      {/* Page Content */}
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;