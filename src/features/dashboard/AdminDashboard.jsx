import React from "react";
import DashboardLayout from "./DashboardLayout";
import DashboardCard from "./components/DashboardCard";

const AdminDashboard = () => {
  return (
    <DashboardLayout>
      <h2 className="mb-4">Admin Dashboard</h2>
      <div className="row">
        <DashboardCard title="Total Supervisors" count={3} icon="bi bi-person-badge" />
        <DashboardCard title="Total Students" count={3} icon="bi bi-people" />
        <DashboardCard title="Total Proposals" count={4} icon="bi bi-file-earmark-text" />
        <DashboardCard title="Total Projects" count={2} icon="bi bi-folder" />
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
