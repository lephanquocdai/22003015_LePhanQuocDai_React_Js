import React from "react";

const ReportTable = () => {
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
            {[...Array(5)].map((_, i) => (
              <tr key={i} className="border-b">
                <td className="px-4 py-3">
                  <input type="checkbox" className="rounded" />
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                      <img 
                        src="/default-avatar.jpg" 
                        alt="Customer" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <span>Customer {i + 1}</span>
                  </div>
                </td>
                <td className="px-4 py-3">Company {i + 1}</td>
                <td className="px-4 py-3">$123.45</td>
                <td className="px-4 py-3">04/09/2025</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-600">
                    New
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="text-gray-500 hover:text-gray-700">✏️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-4 py-3 border-t flex justify-between items-center">
        <span className="text-sm text-gray-600">50 results</span>
        <div className="flex gap-1">
          <button className="w-8 h-8 flex items-center justify-center border rounded text-gray-600 hover:bg-gray-50">
            &lt;
          </button>
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className={`w-8 h-8 flex items-center justify-center border rounded ${
                num === 1 ? 'bg-pink-500 text-white border-pink-500' : 'text-gray-600 hover:bg-gray-50'
              }`}>
              {num}
            </button>
          ))}
          <button className="w-8 h-8 flex items-center justify-center border rounded text-gray-600 hover:bg-gray-50">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportTable;
