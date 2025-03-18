import React from "react";

const DashboardCard = ({ title, count, icon }) => {
  return (
    <div className="col-md-3">
      <div className="card p-3 text-center shadow">
        <i className={`${icon} display-4 text-primary`}></i>
        <h5 className="mt-2">{title}</h5>
        <h3>{count}</h3>
      </div>
    </div>
  );
};

export default DashboardCard;
