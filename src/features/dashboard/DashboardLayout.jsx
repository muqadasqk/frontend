import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Navbar />
        <main className="container mt-4">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
