import React from 'react';
import img from "../assets/3_Data/Selection_Sidebar.jpg";
import imgLogo from "../assets/3_Data/Logo.jpg";

const Sidebar = () => {
  return (
    <div className="w-56 bg-white border-r border-gray-200 flex flex-col h-screen">
      <div className="px-5 py-4">
        <div className="text-pink-500 font-bold text-xl flex items-center gap-2">
          <img src={imgLogo} alt="Logo" />
        </div>
      </div>

      <nav className="flex-1">
        <div className="flex items-center px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded cursor-pointer">
          <span className="mr-3">📊</span> Dashboard
        </div>
        <div className="flex items-center px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded cursor-pointer">
          <span className="mr-3">📁</span> Projects
        </div>
        <div className="flex items-center px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded cursor-pointer">
          <span className="mr-3">👥</span> Teams
        </div>
        <div className="flex items-center px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded cursor-pointer">
          <span className="mr-3">📈</span> Analytics
        </div>
        <div className="flex items-center px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded cursor-pointer">
          <span className="mr-3">✉️</span> Messages
        </div>
        <div className="flex items-center px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded cursor-pointer">
          <span className="mr-3">🔄</span> Integrations
        </div>
      </nav>

      <div className="p-4 m-4 bg-blue-50 rounded-lg text-center mt-auto">
        <div className="mb-2">
          <img src={img} alt="Promo" />
        </div>
        <div className="font-bold mb-2">v2.0 is available</div>
        <button className="w-full py-2 px-4 text-black bg-white border border-black rounded hover:bg-gray-50">
          Try now
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
