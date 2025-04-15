import React, { useEffect, useState } from "react";
import Overview from "../components/Overview";
import DataTable from "../components/ReportTable";
import Modal from "../components/Modal";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newRecord, setNewRecord] = useState({
    customerName: "",
    company: "",
    orderValue: "",
    orderDate: "",
    status: "New",
  });

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

  const handleAddRecord = async () => {
    try {
      const response = await fetch("https://67ec9394aa794fb3222e224b.mockapi.io/report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecord),
      });

      if (!response.ok) throw new Error("Failed to add new record");

      const addedRecord = await response.json();
      setData((prevData) => [...prevData, addedRecord]);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding new record:", error);
    }
  };

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
            <button
              className="flex items-center px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              onClick={() => setIsModalOpen(true)}
            >
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
        <DataTable data={data} loading={loading} />
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="space-y-3">
          <div>
            <label className="block text-sm">Customer Name</label>
            <input
              type="text"
              value={newRecord.customerName}
              onChange={(e) => setNewRecord({ ...newRecord, customerName: e.target.value })}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm">Company</label>
            <input
              type="text"
              value={newRecord.company}
              onChange={(e) => setNewRecord({ ...newRecord, company: e.target.value })}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm">Order Value</label>
            <input
              type="number"
              value={newRecord.orderValue}
              onChange={(e) => setNewRecord({ ...newRecord, orderValue: e.target.value })}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm">Order Date</label>
            <input
              type="date"
              value={newRecord.orderDate}
              onChange={(e) => setNewRecord({ ...newRecord, orderDate: e.target.value })}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm">Status</label>
            <select
              value={newRecord.status}
              onChange={(e) => setNewRecord({ ...newRecord, status: e.target.value })}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="New">New</option>
              <option value="Completed">Completed</option>
              <option value="In-progress">In-progress</option>
            </select>
          </div>
          <button
            onClick={handleAddRecord}
            className="mt-3 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
          >
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;
