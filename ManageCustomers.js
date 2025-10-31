import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockCustomers } from '../data/mockData';
import '../styles.css';

function ManageCustomers() {
  const [customers, setCustomers] = useState(mockCustomers);
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '', serviceNumber: '' });
  const navigate = useNavigate();

  const addCustomer = () => {
    if (newCustomer.name && newCustomer.email && newCustomer.serviceNumber) {
      setCustomers([...customers, { ...newCustomer, id: customers.length + 1 }]);
      setNewCustomer({ name: '', email: '', serviceNumber: '' });
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
        <h1>Manage Customers</h1>

        <h2>Add New Customer</h2>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={newCustomer.name}
          onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={newCustomer.email}
          onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
        />
        <label htmlFor="serviceNumber">Service Number:</label>
        <input
          type="text"
          id="serviceNumber"
          placeholder="Service Number"
          value={newCustomer.serviceNumber}
          onChange={(e) => setNewCustomer({ ...newCustomer, serviceNumber: e.target.value })}
        />
        <button onClick={addCustomer}>Add Customer</button>

        <h2>Customer List</h2>
        <ul>
          {customers.map(customer => (
            <li key={customer.id}>
              <strong>Name:</strong> {customer.name}<br />
              <strong>Email:</strong> {customer.email}<br />
              <strong>Service Number:</strong> {customer.serviceNumber}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ManageCustomers;
