import { useState } from "react";
import "../styles/Dashboard.css"; // Keep this for styling

const getStatusIcon = (status) => {
  switch (status) {
    case "approved":
      return "✅";
    case "pending":
      return "⏳";
    case "rejected":
      return "❌";
    default:
      return "❓";
  }
};

const DashboardManager = () => {
  const [pendingApprovals, setPendingApprovals] = useState([
    { id: 1, name: "Team lunch", amount: 1200, status: "pending", submittedBy: "John", daysAgo: 2 },
    { id: 2, name: "Office supplies", amount: 300, status: "pending", submittedBy: "James", daysAgo: 1 },
  ]);

  const [recentExpenses, setRecentExpenses] = useState([
    { id: 1, name: "Team lunch", amount: 1200, status: "approved" },
    { id: 2, name: "Office staplers", amount: 300, status: "pending" },
    { id: 3, name: "Printer cartridge", amount: 3000, status: "rejected" },
  ]);

  const handleApprove = (id) => {
    setPendingApprovals((prev) => prev.filter((approval) => approval.id !== id));
    setRecentExpenses((prev) =>
      prev.map((expense) =>
        expense.id === id ? { ...expense, status: "approved" } : expense
      )
    );
  };

  const handleReject = (id) => {
    setPendingApprovals((prev) => prev.filter((approval) => approval.id !== id));
    setRecentExpenses((prev) =>
      prev.map((expense) =>
        expense.id === id ? { ...expense, status: "rejected" } : expense
      )
    );
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header"></div>

      <div className="summary-cards">
        <div className="summary-card">
          <h3 className="card-label">Total Expenses</h3>
          <p className="card-value">₹ 10,000</p>
        </div>
        <div className="summary-card">
          <h3 className="card-label">Pending Approval</h3>
          <p className="card-value">{pendingApprovals.length}</p>
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

      {/* Recent Expenses Section */}
      <div className="recent-expenses" style={{ flex: 1 }}>
        <div className="expenses-header">
          <h2 className="expenses-title">Recent Expenses</h2>
          <button className="view-all-btn">View all</button>
        </div>
        <div className="expenses-list">
          {recentExpenses.map((expense) => (
            <div className="expense-item" key={expense.id}>
              <div className="expense-name">{expense.name}</div>
              <div className="expense-status">{getStatusIcon(expense.status)}</div>
              <div className="expense-amount">₹{expense.amount}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Approvals Section */}
      <div className="recent-expenses" style={{ flex: 1 }}>
        <div className="expenses-header">
          <h2 className="expenses-title">Your Approvals</h2>
        </div>

        {pendingApprovals.length > 0 ? (
          <div className="expenses-list">
            {pendingApprovals.map((approval) => (
              <div key={approval.id} className="approval-item">
                <div className="approval-name">{approval.name}</div>
                <div className="approval-info">
                  Submitted by {approval.submittedBy} • {approval.daysAgo} days ago
                </div>
                <div className="approval-actions">
                  <span className="approval-amount">₹{approval.amount}</span>
                  <button className="approve-btn" onClick={() => handleApprove(approval.id)}>
                    Approve
                  </button>
                  <button className="reject-btn" onClick={() => handleReject(approval.id)}>
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-approvals">No pending approvals</div>
        )}
      </div>
    </div>
  );
};

export default DashboardManager;
