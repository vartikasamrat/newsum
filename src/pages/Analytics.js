import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../styles/Analytics.css";

const Analytics = () => {
  const expenseSummary = {
    totalReports: 12,
    totalExpenses: 250000,
    totalApproved: 210000,
    totalRejected: 40000,
    avgPerReport: 20833,
  };

  const departmentWiseData = [
    { name: "Sales", amount: 75000 },
    { name: "Marketing", amount: 55000 },
    { name: "Engineering", amount: 65000 },
    { name: "HR", amount: 35000 },
    { name: "Admin", amount: 20000 },
  ];

  const statusData = [
    { name: "Approved", value: 210000 },
    { name: "Rejected", value: 40000 },
  ];

  const COLORS = ["#00C49F", "#FF6B6B"];

  return (
    <div className="analytics-container">
      <h2 className="analytics-heading">Expense Analytics</h2>
      <p className="analytics-subheading">Insights based on recent reports</p>

      <div className="summary-cards">
        <div className="summary-card">
          <h3>Total Reports</h3>
          <p>{expenseSummary.totalReports}</p>
        </div>
        <div className="summary-card">
          <h3>Total Expenses</h3>
          <p>₹{expenseSummary.totalExpenses.toLocaleString()}</p>
        </div>
        <div className="summary-card">
          <h3>Total Approved</h3>
          <p>₹{expenseSummary.totalApproved.toLocaleString()}</p>
        </div>
        <div className="summary-card">
          <h3>Total Rejected</h3>
          <p>₹{expenseSummary.totalRejected.toLocaleString()}</p>
        </div>
        <div className="summary-card">
          <h3>Avg. Per Report</h3>
          <p>₹{expenseSummary.avgPerReport.toLocaleString()}</p>
        </div>
      </div>

      <div className="chart-section">
        <div className="chart-container">
          <h4>Department-wise Expenses</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={departmentWiseData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#8884d8" barSize={50} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h4>Approval Status</h4>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
