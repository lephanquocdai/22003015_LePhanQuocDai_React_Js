import React from "react";
import Overview from "../components/Overview";
import DataTable from "../components/ReportTable";

const Dashboard = () => {
  return (
    <div className="p-6 bg-white">
      <header className="flex justify-between items-center mb-8 border-b">
        <h1 className="text-2xl text-red-500 font-bold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="relative text-black">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 px-4 pr-10 border border-gray-200 rounded-md w-48"
            />
            <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
          </div>
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            🔔
          </div>
          <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
            ?
          </div>
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            👤
          </div>
        </div>
      </header>
      <section className="mb-8">
        <h2 className="text-xl text-black font-bold mb-4">Overview</h2>
        <Overview stats={{}} />
      </section>
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl text-black font-bold">Detailed report</h2>
          <div className="flex gap-2">
            <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded">
              <span className="mr-2">➕</span> Add
            </button>
            <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded">
              <span className="mr-2">⬆️</span> Import
            </button>
            <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded">
              <span className="mr-2">⬇️</span> Export
            </button>
          </div>
        </div>
        <DataTable data={[]} loading={false} />
      </section>
    </div>
  );
};

export default Dashboard;
