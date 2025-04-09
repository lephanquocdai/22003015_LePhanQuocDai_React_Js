import React from 'react';

const Overview = () => {
  return (
    <div className="grid grid-cols-3 gap-6 bg-white">
      <div className="bg-red-50 p-6 rounded-lg shadow-sm flex justify-between">
        <div>
          <h3 className="text-black mb-3">Turnover</h3>
          <div className="text-3xl text-black font-bold mb-2">$100,000</div>
          <div className="text-green-600 text-sm">↑ 12% period of change</div>
        </div>
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
          🛒
        </div>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg shadow-sm flex justify-between">
        <div>
          <h3 className="text-black mb-3">Profit</h3>
          <div className="text-3xl text-black font-bold mb-2">$25,000</div>
          <div className="text-green-600 text-sm">↑ 8% period of change</div>
        </div>
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
          💲
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg shadow-sm flex justify-between">
        <div>
          <h3 className="text-black mb-3">New customer</h3>
          <div className="text-3xl text-black font-bold mb-2">320</div>
          <div className="text-green-600 text-sm">↑ 5% period of change</div>
        </div>
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
          ⚙️
        </div>
      </div>
    </div>
  );
};

export default Overview;
