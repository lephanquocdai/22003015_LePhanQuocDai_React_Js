import React from 'react';

const Overview = ({ stats }) => {
  if (!stats) return null;

  const formatCurrency = (num) => {
    return num ? `$${Number(num).toLocaleString()}` : "$0";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-red-50 p-6 rounded-xl shadow-sm">
        <h3 className="text-gray-600 mb-3">Turnover</h3>
        <div className="text-3xl font-bold mb-2">
          {formatCurrency(stats.turnover?.value)}
        </div>
        <div className="text-green-600 text-sm">
          ↑ {stats.turnover?.change || 0}% period of change
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
        <h3 className="text-gray-600 mb-3">Profit</h3>
        <div className="text-3xl font-bold mb-2">
          {formatCurrency(stats.profit?.value)}
        </div>
        <div className="text-green-600 text-sm">
          ↑ {stats.profit?.change || 0}% period of change
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-xl shadow-sm">
        <h3 className="text-gray-600 mb-3">New Customers</h3>
        <div className="text-3xl font-bold mb-2">
          {stats.newCustomers?.value || 0}
        </div>
        <div className="text-green-600 text-sm">
          ↑ {stats.newCustomers?.change || 0}% period of change
        </div>
      </div>
    </div>
  );
};

export default Overview;
