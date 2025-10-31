import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockBills } from '../data/mockData';
import '../styles.css';

function GenerateBills() {
  const [newBill, setNewBill] = useState({ customerId: '', amount: '', dueDate: '' });
  const navigate = useNavigate();

  const generateBill = () => {
    if (newBill.customerId && newBill.amount && newBill.dueDate) {
      mockBills.push({
        id: mockBills.length + 1,
        customerId: parseInt(newBill.customerId),
        amount: parseFloat(newBill.amount),
        dueDate: newBill.dueDate,
        status: 'unpaid'
      });
      setNewBill({ customerId: '', amount: '', dueDate: '' });
      alert('Bill generated successfully!');
    }
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
        <h1>Generate Bills</h1>

        <h2>Create New Bill</h2>
        <label htmlFor="customerName">Enter Customer Name:</label>
        <input
          type="text"
          id="customerName"
          placeholder="Customer Name"
          value={newBill.customerName || ''}
          onChange={(e) => setNewBill({ ...newBill, customerName: e.target.value })}
        />
        <label htmlFor="customerId">Customer ID:</label>
        <input
          type="number"
          id="customerId"
          placeholder="Customer ID"
          value={newBill.customerId}
          onChange={(e) => setNewBill({ ...newBill, customerId: e.target.value })}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          placeholder="Amount"
          value={newBill.amount}
          onChange={(e) => setNewBill({ ...newBill, amount: e.target.value })}
        />
        <label htmlFor="dueDate">Due Date:</label>
        <input
          type="date"
          id="dueDate"
          value={newBill.dueDate}
          onChange={(e) => setNewBill({ ...newBill, dueDate: e.target.value })}
        />
        <button onClick={generateBill}>Generate Bill</button>
      </div>
    </div>
  );
}

export default GenerateBills;
