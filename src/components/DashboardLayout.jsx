import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-[#f9fafb]">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6 bg-white rounded-tl-xl shadow-inner">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
