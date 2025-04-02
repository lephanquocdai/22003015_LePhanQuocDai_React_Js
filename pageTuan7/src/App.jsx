import { useState } from 'react';
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Overview from './components/Overview';
import DetailedReport from './components/DetailedReport';
import './App.css';

function App() {
  return (
    <div className="bg-gray-100 font-sans">
      <div className="grid grid-cols-[250px_1fr] grid-rows-[70px_1fr] h-screen gap-4 p-4">
      <Sidebar />
      <Header />
      <Overview />
      <DetailedReport />
      </div>
    </div>
  );
}
export default App;
