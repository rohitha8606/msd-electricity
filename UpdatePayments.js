import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockBills } from '../data/mockData';
import '../styles.css';

function UpdatePayments() {
  const [bills, setBills] = useState(mockBills);
  const navigate = useNavigate();

  const updateStatus = (billId, status) => {
    setBills(bills.map(bill =>
      bill.id === billId ? { ...bill, status } : bill
    ));
  };

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
        <h1>Update Payment Status</h1>

        <h2>All Bills</h2>
        <ul>
          {bills.map(bill => (
            <li key={bill.id}>
              <strong>Bill ID:</strong> {bill.id}<br />
              <strong>Amount:</strong> ₹{bill.amount}<br />
              <strong>Status:</strong> {bill.status}
              <button onClick={() => updateStatus(bill.id, 'paid')}>Mark as Paid</button>
              <button onClick={() => updateStatus(bill.id, 'unpaid')}>Mark as Unpaid</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UpdatePayments;
