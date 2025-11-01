import { useState } from "react";
import Layout from "../components/Layout";
import { UserData } from "../data/userData";

const User = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const totalPages = Math.ceil(UserData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedUsers = UserData.slice(startIndex, startIndex + rowsPerPage);

  // Generate pagination numbers (max 5 at a time)
  const paginationNumbers = [];
  const maxButtons = 5;
  const startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxButtons - 1);

  for (let i = startPage; i <= endPage; i++) {
    paginationNumbers.push(i);
  }

  return (
    <Layout title="Users">
      <div className="bg-white dark:bg-gray-800 max-h-full"></div>
      <div className="overflow-x-auto p-6">
        <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white text-sm uppercase">
            <tr>
              <th className="py-3 px-3 text-left">Photo</th>
              <th className="py-3 px-3 text-left">Name</th>
              <th className="py-3 px-3 text-left">Email</th>
              <th className="py-3 px-3 text-left">Phone Number</th>
              <th className="py-3 px-3 text-left">Employmet Status</th>
              <th className="py-3 px-3 text-left hidden md:table-cell">
                Added By
              </th>
              <th className="py-3 px-3 text-left">Date Joined</th>
              <th className="py-3 px-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user) => (
              <tr key={user.id} className="border-b dark:border-gray-600">
                <td className="py-4 px-3">
                  <img
                    src={user.photo}
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="py-4 px-3">{user.name}</td>
                <td className="py-4 px-3">{user.email}</td>
                <td className="py-4 px-3">{user.phone}</td>
                <td className="py-4 px-3">{user.employmentStatus}</td>
                <td className="py-4 px-3 hidden md:table-cell">
                  {user.addedBy}
                </td>
                <td className="py-4 px-3">{user.dateJoined}</td>
                <td className="py-4 px-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      user.status === "Active"
                        ? "bg-green-600 text-white"
                        : user.status === "Pending"
                        ? "bg-blue-600 text-white"
                        : user.status === "Inactive"
                        ? "bg-red-600 text-white"
                        : ""
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Numbered Pagination Controls */}
        <div className="flex justify-end items-center gap-2 mt-6">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 dark:text-gray-800 rounded disabled:opacity-50"
          >
            Previous
          </button>

          {/* Page Numbers */}
          {paginationNumbers.map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`px-4 py-2 rounded-full object-contain ${
                num === currentPage
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:text-gray-800 "
              }`}
            >
              {num}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 dark:text-gray-800  rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default User;
