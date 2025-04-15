import React, { useState, useEffect } from "react";
import Modal from "./Modal";

const ITEMS_PER_PAGE = 5;

const ReportTable = ({ loading, onUpdateUser }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://67ec9394aa794fb3222e224b.mockapi.io/report");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  const getMonthName = (dateString) => {
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
      return date.toLocaleString('default', { month: 'long' });
    } else {
      return 'N/A';
    }
  };

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const openEditModal = (user) => {
    setSelectedUser({ ...user });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  const handleSave = () => {
    if (selectedUser) {
      setData((prevData) =>
        prevData.map((user) =>
          user.id === selectedUser.id ? selectedUser : user
        )
      );
      closeModal();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-3 text-left"><input type="checkbox" /></th>
              <th className="px-4 py-3 text-left">Customer Name</th>
              <th className="px-4 py-3 text-left">Company</th>
              <th className="px-4 py-3 text-left">Order Value</th>
              <th className="px-4 py-3 text-left">Order Date</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="7" className="text-center py-8">Loading...</td></tr>
            ) : (
              paginatedData.map((user, i) => (
                <tr key={user.id || i} className="border-b">
                  <td className="px-4 py-3"><input type="checkbox" /></td>
                  <td className="px-4 py-3 flex items-center">
                    <img
                      src={user.avatar || `https://i.pravatar.cc/150?img=${i + 1}`}
                      alt="Customer"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    {user.customerName}
                  </td>
                  <td className="px-4 py-3">{user.company}</td>
                  <td className="px-4 py-3">${(+user.orderValue).toLocaleString()}</td>
                  <td className="px-4 py-3">
                    {getMonthName(user.orderDate)} 
                  </td>

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
                    <button
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => openEditModal(user)}
                    >
                      ✏️
                    </button>
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
          <button className="w-8 h-8 border rounded" onClick={() => handlePageChange(currentPage - 1)}>&lt;</button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => handlePageChange(num)}
              className={`w-8 h-8 border rounded ${num === currentPage ? "bg-pink-500 text-white" : "hover:bg-gray-100"}`}
            >
              {num}
            </button>
          ))}
          <button className="w-8 h-8 border rounded" onClick={() => handlePageChange(currentPage + 1)}>&gt;</button>
        </div>
      </div>

  
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedUser ? (
          <div className="space-y-3">
            <div>
              <label className="block text-sm">Customer Name</label>
              <input
                type="text"
                value={selectedUser.customerName}
                onChange={(e) => setSelectedUser({ ...selectedUser, customerName: e.target.value })}
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm">Company</label>
              <input
                type="text"
                value={selectedUser.company}
                onChange={(e) => setSelectedUser({ ...selectedUser, company: e.target.value })}
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm">Order Value</label>
              <input
                type="number"
                value={selectedUser.orderValue}
                onChange={(e) => setSelectedUser({ ...selectedUser, orderValue: e.target.value })}
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm">Order Date</label>
              <input
                type="date"
                value={selectedUser.orderDate}
                onChange={(e) => setSelectedUser({ ...selectedUser, orderDate: e.target.value })}
                className="w-full border px-3 py-2 rounded"
              />
            </div>
        
            <div>
              <label className="block text-sm">Status</label>
              <select
                value={selectedUser.status}
                onChange={(e) => setSelectedUser({ ...selectedUser, status: e.target.value })}
                className="w-full border px-3 py-2 rounded"
              >
                <option value="New">New</option>
                <option value="Completed">Completed</option>
                <option value="In-progress">In-progress</option>
              </select>
            </div>
            <button
              onClick={handleSave}
              className="mt-3 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
            >
              Save
            </button>
          </div>
        ) : null}
      </Modal>
    </div>
  );
};

export default ReportTable;
