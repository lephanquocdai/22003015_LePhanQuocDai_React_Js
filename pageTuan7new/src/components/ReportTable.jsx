import React, { useState } from "react";

const ITEMS_PER_PAGE = 5;

const ReportTable = ({ data = [], loading }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-3 text-left">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase text-left">Customer Name</th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase text-left">Company</th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase text-left">Order Value</th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase text-left">Order Date</th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase text-left">Status</th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="7" className="text-center py-8">Loading...</td>
              </tr>
            ) : (
              paginatedData.map((user, i) => (
                <tr key={user.id || i} className="border-b">
                  <td className="px-4 py-3">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                        <img 
                          src={user.avatar || `https://i.pravatar.cc/150?img=${i + 1}`} 
                          alt="Customer" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <span>{user.customerName}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">{user.company}</td>
                  <td className="px-4 py-3">${(+user.orderValue).toLocaleString()}</td>
                  <td className="px-4 py-3">{user.oderDate}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                      user.status === 'Completed' ? 'bg-green-100 text-green-600' :
                      user.status === 'In-progress' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-blue-100 text-blue-600'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-gray-500 hover:text-gray-700">✏️</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="px-4 py-3 border-t flex justify-between items-center">
        <span className="text-sm text-gray-600">
          Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, data.length)} of {data.length} results
        </span>
        <div className="flex gap-1">
          <button
            className="w-8 h-8 flex items-center justify-center border rounded text-gray-600 hover:bg-gray-50"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => handlePageChange(num)}
              className={`w-8 h-8 flex items-center justify-center border rounded ${
                num === currentPage ? 'bg-pink-500 text-white border-pink-500' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {num}
            </button>
          ))}
          <button
            className="w-8 h-8 flex items-center justify-center border rounded text-gray-600 hover:bg-gray-50"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportTable;
