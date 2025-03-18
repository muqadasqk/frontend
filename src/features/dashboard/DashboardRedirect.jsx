import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const DashboardRedirect = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  switch (user.role) {
    case "admin":
      return <Navigate to="/dashboard/admin" />;
    case "supervisor":
      return <Navigate to="/dashboard/supervisor" />;
    case "student":
      return <Navigate to="/dashboard/student" />;
    default:
      return <Navigate to="/login" />;
  }
};

export default DashboardRedirect;
