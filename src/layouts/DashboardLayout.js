// src/layouts/DashboardLayout.js
import { Outlet } from "react-router-dom";
import EmployeeSidebar from "../components/EmployeeSidebar";
import ManagerSidebar from "../components/ManagerSidebar";
import "../styles/DashboardLayout.css";

const DashboardLayout = () => {
  const role = localStorage.getItem("userRole"); // "manager" or "employee"

  return (
    <div className="dashboard-container">
      {role === "manager" ? <ManagerSidebar /> : <EmployeeSidebar />}
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
