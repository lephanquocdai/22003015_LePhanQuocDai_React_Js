import React from 'react';
function DetailedReport (){
  return (
    <div className="bg-white shadow-lg rounded-lg p-5">
    <h2 className="text-lg font-bold mb-3">Detailed Report</h2>
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="p-2">Customer</th>
          <th className="p-2">Company</th>
          <th className="p-2">Order Value</th>
          <th className="p-2">Order Date</th>
          <th className="p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t">
          <td className="p-2">John Doe</td>
          <td className="p-2">ABC Corp</td>
          <td className="p-2">$1200</td>
          <td className="p-2">2025-04-02</td>
          <td className="p-2 text-green-600">Completed</td>
        </tr>
        <tr className="border-t">
          <td className="p-2">Jane Smith</td>
          <td className="p-2">XYZ Ltd</td>
          <td className="p-2">$500</td>
          <td className="p-2">2025-04-01</td>
          <td className="p-2 text-yellow-600">Pending</td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}
export default DetailedReport;
