import React from "react";
import DashboardLayout from "./DashboardLayout";
import DashboardCard from "./components/DashboardCard";

const SupervisorDashboard = () => {
  return (
    <DashboardLayout>
      <h2 className="mb-4">Supervisor Dashboard</h2>
      <div className="row">
        <DashboardCard title="Assigned Students" count={5} icon="bi bi-people" />
        <DashboardCard title="Reviewed Proposals" count={3} icon="bi bi-file-earmark-check" />
        <DashboardCard title="Pending Projects" count={2} icon="bi bi-hourglass-split" />
      </div>
    </DashboardLayout>
  );
};

export default SupervisorDashboard;
