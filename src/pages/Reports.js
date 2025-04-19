import React, { useState } from "react";
import "../styles/Reports.css";

const Reports = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    if (name === "startDate") {
      setStartDate(value);
    } else if (name === "endDate") {
      setEndDate(value);
    }
  };

  const exportToCSV = () => {
    const csvData = reports.map(report => ({
      Title: report.title,
      SubmittedBy: report.submittedBy,
      TotalExpenses: report.totalExpenses,
      Approved: report.approved,
      Rejected: report.rejected,
      Date: report.date,
      Notes: report.notes
    }));
    
    const csvRows = [
      Object.keys(csvData[0]).join(','), // Header row
      ...csvData.map(row => Object.values(row).join(',')) // Data rows
    ];

    const csvContent = csvRows.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "reports.csv";
    link.click();
  };

  const reports = [
    {
      id: 1,
      title: "March Summary",
      submittedBy: "John Doe",
      totalExpenses: "₹25,000",
      approved: "₹20,000",
      rejected: "₹5,000",
      date: "2025-04-01",
      notes: "Monthly summary for March 2025 including travel and food expenses.",
    },
    {
      id: 2,
      title: "Q1 Travel Report",
      submittedBy: "Jane Smith",
      totalExpenses: "₹60,000",
      approved: "₹55,000",
      rejected: "₹5,000",
      date: "2025-04-05",
      notes: "Covers all employee travel expenses for Q1 2025.",
    },
    {
      id: 3,
      title: "Office Supplies Audit",
      submittedBy: "Ravi Kumar",
      totalExpenses: "₹10,500",
      approved: "₹9,000",
      rejected: "₹1,500",
      date: "2025-04-10",
      notes: "Audit of all office supplies purchased in March.",
    },
  ];

  const filteredReports = reports.filter((rep) => {
    const search = searchQuery.toLowerCase();
    const matchesSearchQuery =
      rep.title.toLowerCase().includes(search) ||
      rep.submittedBy.toLowerCase().includes(search) ||
      rep.date.includes(search);

    const withinDateRange =
      (!startDate || new Date(rep.date) >= new Date(startDate)) &&
      (!endDate || new Date(rep.date) <= new Date(endDate));

    return matchesSearchQuery && withinDateRange;
  });

  const sortedReports = filteredReports.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="reports-container">
      <h2 className="reports-heading">Reports</h2>
      <p className="reports-para">View and analyze submitted expense reports</p>

      <div className="reports-controls">
        <input
          type="text"
          placeholder="Search reports..."
          className="search-bar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="date-filters">
          <input
            type="date"
            name="startDate"
            value={startDate}
            onChange={handleDateChange}
            className="date-input"
          />
          <span>to</span>
          <input
            type="date"
            name="endDate"
            value={endDate}
            onChange={handleDateChange}
            className="date-input"
          />
        </div>
        <button className="export-button" onClick={exportToCSV}>
          Export to CSV
        </button>
      </div>

      <div className="report-list">
        {sortedReports.length > 0 ? (
          sortedReports.map((report) => (
            <div
              key={report.id}
              className={`report-item ${expandedId === report.id ? "expanded" : ""}`}
              onClick={() => toggleExpand(report.id)}
            >
              <div className="report-top">
                <div className="report-info">
                  <h4>{report.title}</h4>
                  <p>By: {report.submittedBy}</p>
                  <p>{report.date}</p>
                  <span className="total-expense">{report.totalExpenses}</span>
                </div>
                <div className="report-meta">
                  <p><strong>Approved:</strong> {report.approved}</p>
                  <p><strong>Rejected:</strong> {report.rejected}</p>
                </div>
              </div>
              <div className="report-details">
                <p><strong>Notes:</strong> {report.notes}</p>
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: "#999", fontStyle: "italic", marginTop: "20px" }}>
            No matching reports found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Reports;
