import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Assets from './pages/Assets';
import Liabilities from './pages/Liabilities';
import Docs from './pages/Docs';
import Diary from './pages/Diary';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const DashboardWrapper = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard Pages */}
        <Route
          path="/dashboard"
          element={
            <DashboardWrapper>
              <Profile />
            </DashboardWrapper>
          }
        />
        <Route
          path="/dashboard/assets"
          element={
            <DashboardWrapper>
              <Assets />
            </DashboardWrapper>
          }
        />
        <Route
          path="/dashboard/liabilities"
          element={
            <DashboardWrapper>
              <Liabilities />
            </DashboardWrapper>
          }
        />
        <Route
          path="/dashboard/docs"
          element={
            <DashboardWrapper>
              <Docs />
            </DashboardWrapper>
          }
        />
        <Route
          path="/dashboard/diary"
          element={
            <DashboardWrapper>
              <Diary />
            </DashboardWrapper>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
