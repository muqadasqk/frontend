import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="bg-light vh-100 p-3">
      <h4>FYP Management</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/admin-dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/students">Students</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
