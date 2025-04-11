import React, { useEffect, useState } from "react";
import Overview from "../components/Overview";
import DataTable from "../components/ReportTable";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://67ec9394aa794fb3222e224b.mockapi.io/report");
        if (!response.ok) throw new Error("Network response was not ok");

        const result = await response.json();
        setData(result);

        const totalTurnover = result.reduce(
          (sum, item) => sum + (parseFloat(item.orderValue) || 0),
          0
        );
        const profit = totalTurnover * 0.35;
        const newCustomersCount = result.filter((item) => item.status === "New").length;

        setStats({
          turnover: { value: totalTurnover, change: 12 },
          profit: { value: profit, change: 8 },
          newCustomers: { value: newCustomersCount, change: 5 },
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 bg-white min-h-screen">
      <header className="flex justify-between items-center mb-8 border-b pb-4">
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
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">🔔</div>
          <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">?</div>
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">👤</div>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-black mb-4">Overview</h2>
        {loading || !stats ? <p>Loading stats...</p> : <Overview stats={stats} />}
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-black">Detailed report</h2>
          <div className="flex gap-2">
            <button className="flex items-center px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              <span className="mr-2">➕</span> Add
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              <span className="mr-2">⬆️</span> Import
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              <span className="mr-2">⬇️</span> Export
            </button>
          </div>
        </div>
        <p>Loading data...</p>
      </section>
    </div>
  );
};

export default Dashboard;
