import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

function ServiceRequest() {
  const [request, setRequest] = useState({
    type: '',
    description: '',
    address: '',
    contactNumber: '',
    email: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate service request
    alert(`Service request submitted successfully!\nRequest ID: ${Math.floor(Math.random() * 1000000)}\nEstimated response time: 2-3 business days.`);
    navigate('/customer-dashboard');
  };

  return (
    <div>
      <header>
        <h1>APCPDCL - Know & Pay Your Bill</h1>
        <nav>
          <ul>
            <li><a href="/customer-dashboard">Dashboard</a></li>
            <li><button onClick={() => navigate('/customer-dashboard')}>Back</button></li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <h1>Service Request</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="type">Service Type:</label>
          <select
            id="type"
            value={request.type}
            onChange={(e) => setRequest({ ...request, type: e.target.value })}
            required
          >
            <option value="">Select Service Type</option>
            <option value="new-connection">New Connection</option>
            <option value="load-enhancement">Load Enhancement</option>
            <option value="name-transfer">Name Transfer</option>
            <option value="meter-replacement">Meter Replacement</option>
            <option value="disconnection">Disconnection</option>
            <option value="reconnection">Reconnection</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={request.description}
            onChange={(e) => setRequest({ ...request, description: e.target.value })}
            rows="5"
            required
          ></textarea>

          <label htmlFor="address">Service Address:</label>
          <textarea
            id="address"
            value={request.address}
            onChange={(e) => setRequest({ ...request, address: e.target.value })}
            rows="3"
            required
          ></textarea>

          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="tel"
            id="contactNumber"
            value={request.contactNumber}
            onChange={(e) => setRequest({ ...request, contactNumber: e.target.value })}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={request.email}
            onChange={(e) => setRequest({ ...request, email: e.target.value })}
            required
          />

          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  );
}

export default ServiceRequest;
