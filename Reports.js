import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mockPayments, mockBills } from '../data/mockData';
import '../styles.css';

function Reports() {
  const navigate = useNavigate();
  const totalPayments = mockPayments.reduce((sum, payment) => sum + payment.amount, 0);
  const unpaidBills = mockBills.filter(bill => bill.status === 'unpaid').length;

  return (
    <div>
      <header>
        <h1>APCPDCL - Know & Pay Your Bill</h1>
        <nav>
          <ul>
            <li><a href="/admin-dashboard">Dashboard</a></li>
            <li><button onClick={() => navigate('/admin-dashboard')}>Back</button></li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <h1>Reports</h1>

        <h2>Summary</h2>
        <p><strong>Total Payments:</strong> ₹{totalPayments}</p>
        <p><strong>Unpaid Bills:</strong> {unpaidBills}</p>

        <h2>All Payments</h2>
        <ul>
          {mockPayments.map(payment => (
            <li key={payment.id}>
              <strong>Payment ID:</strong> {payment.id}<br />
              <strong>Amount:</strong> ₹{payment.amount}<br />
              <strong>Date:</strong> {payment.date}<br />
              <strong>Status:</strong> {payment.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Reports;
