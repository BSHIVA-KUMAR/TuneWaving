import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Wallet.css";

function Wallet() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("January");
  const navigate = useNavigate();

  const handleCloseClick = () => setShowConfirm(true);
  const handleYes = () => navigate("/"); // Redirect to dashboard
  const handleNo = () => setShowConfirm(false); // Close popup

  const handleMonthChange = (e) => setSelectedMonth(e.target.value);

  return (
    <div className="wallet-page">
      <div className="wallet-container">

        {/* Top Bar */}
        <div className="wallet-header">
          <h2>Withdraw Request</h2>
          <button className="close-btn" onClick={handleCloseClick}>×</button>
        </div>

        {/* Info Message at top */}
        <div className="wallet-info-message">
          Withdrawals are moving to TuneWave Pay — stay tuned!
        </div>

        {/* Info Cards */}
        <div className="wallet-info">
          <div className="card-details">
            <h3>Card Details</h3>
            <div className="detail-row"><span>Beneficiary Name</span><span>Prashanth Varma</span></div>
            <div className="detail-row"><span>Bank Name</span><span>ABC *****</span></div>
            <div className="detail-row"><span>Account Number</span><span>ABC0******</span></div>
            <div className="detail-row"><span>IFSC Code</span><span>ABC******</span></div>
            <div className="detail-row"><span>PAN Number</span><span>ABCDE1234F</span></div>
          </div>

          <div className="wallet-balance">
            <h3>TuneWave Wallet</h3>
            <p>$45,500.12</p>
          </div>
        </div>

        {/* Graph and Table */}
        <div className="wallet-main">
          <div className="wallet-graph">
            <div className="graph-header">
              <h3>Overview Balance</h3>
              <div className="graph-controls">
                <select value={selectedMonth} onChange={handleMonthChange}>
                  {[
                    "January", "February", "March", "April",
                    "May", "June", "July", "August",
                    "September", "October", "November", "December"
                  ].map((month) => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
              </div>
            </div>
            <small className="graph-help-text">
              Revenue generated from your releases on TuneWave
            </small>
            <div className="bar-graph">
              <div className="bar" style={{ height: "50px" }} title="$5,000"></div>
              <div className="bar" style={{ height: "65px" }} title="$6,500"></div>
              <div className="bar" style={{ height: "42px" }} title="$4,200"></div>
              <div className="bar" style={{ height: "70px" }} title="$7,000"></div>
              <div className="bar" style={{ height: "85px" }} title="$8,500"></div>
              <div className="bar" style={{ height: "90px" }} title="$9,000"></div>
            </div>
            <div className="bar-labels">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
            </div>
          </div>

          <div className="wallet-table">
            <h3>Transactions</h3>
            <table>
              <thead>
                <tr>
                  <th>Date</th><th>Transaction ID</th><th>Type</th><th>Amount</th><th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>15-09-2025</td><td>#123456</td><td>Withdrawal</td><td>$1000</td><td>Completed</td>
                </tr>
                <tr>
                  <td>10-09-2025</td><td>#123457</td><td>Deposit</td><td>$500</td><td>Completed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>


        
      {/* Confirmation Popup */}
      {showConfirm && (
        <div className="confirm-popup">
          <div className="confirm-content">
            <p>Do you want to exit?</p>
            <div className="confirm-buttons">
              <button className="yes-btn" onClick={handleYes}>Yes</button>
              <button className="no-btn" onClick={handleNo}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Wallet;
