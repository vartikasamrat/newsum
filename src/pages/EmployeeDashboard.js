// src/pages/EmployeeDashboard.js
import "../styles/Dashboard.css";

const EmployeeDashboard = () => {
  return (
    <>
      <h1 className="dashboard-title">Dashboard</h1>
      <p className="dashboard-welcome">
        Welcome back to your expense dashboard.
      </p>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card">
          <h3 className="card-label">Total Expenses</h3>
          <p className="card-value">₹ 10,000</p>
        </div>
        <div className="summary-card">
          <h3 className="card-label">Pending Approval</h3>
          <p className="card-value">5</p>
        </div>
        <div className="summary-card">
          <h3 className="card-label">Expenses this Month</h3>
          <p className="card-value">₹ 1,000</p>
        </div>
        <div className="summary-card">
          <h3 className="card-label">Budget Utilized</h3>
          <p className="card-value">42%</p>
        </div>
      </div>

      {/* Recent Expenses */}
      <div className="recent-expenses">
        <div className="expenses-header">
          <h2 className="expenses-title">Recent Expenses</h2>
          <button className="view-all-btn">View all</button>
        </div>
        <div className="expenses-list">
          <div className="expense-item">
            <div className="expense-name">Team lunch</div>
            <div className="expense-status">✅</div>
            <div className="expense-amount">₹1200</div>
          </div>
          <div className="expense-item">
            <div className="expense-name">Office staplers</div>
            <div className="expense-status">⏳</div>
            <div className="expense-amount">₹300</div>
          </div>
          <div className="expense-item">
            <div className="expense-name">Printer cartridge</div>
            <div className="expense-status">❌</div>
            <div className="expense-amount">₹3000</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDashboard;
