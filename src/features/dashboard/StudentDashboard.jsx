import React from "react";
import DashboardLayout from "./DashboardLayout";
import DashboardCard from "./components/DashboardCard";

const StudentDashboard = () => {
  return (
    <DashboardLayout>
      <h2 className="mb-4">Student Dashboard</h2>
      <div className="row">
        <DashboardCard title="My Submitted Proposals" count={2} icon="bi bi-file-earmark-text" />
        <DashboardCard title="Approved Projects" count={1} icon="bi bi-folder-check" />
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
