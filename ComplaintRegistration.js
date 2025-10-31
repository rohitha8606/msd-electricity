import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

function ComplaintRegistration() {
  const [complaint, setComplaint] = useState({
    category: '',
    description: '',
    serviceNumber: '',
    contactNumber: '',
    email: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate complaint registration
    alert(`Complaint registered successfully!\nComplaint ID: ${Math.floor(Math.random() * 1000000)}\nYou will be contacted within 24 hours.`);
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
        <h1>Complaint Registration</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="category">Complaint Category:</label>
          <select
            id="category"
            value={complaint.category}
            onChange={(e) => setComplaint({ ...complaint, category: e.target.value })}
            required
          >
            <option value="">Select Category</option>
            <option value="power-outage">Power Outage</option>
            <option value="billing-issue">Billing Issue</option>
            <option value="meter-issue">Meter Issue</option>
            <option value="service-connection">Service Connection</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={complaint.description}
            onChange={(e) => setComplaint({ ...complaint, description: e.target.value })}
            rows="5"
            required
          ></textarea>

          <label htmlFor="serviceNumber">Service Number:</label>
          <input
            type="text"
            id="serviceNumber"
            value={complaint.serviceNumber}
            onChange={(e) => setComplaint({ ...complaint, serviceNumber: e.target.value })}
            required
          />

          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="tel"
            id="contactNumber"
            value={complaint.contactNumber}
            onChange={(e) => setComplaint({ ...complaint, contactNumber: e.target.value })}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={complaint.email}
            onChange={(e) => setComplaint({ ...complaint, email: e.target.value })}
            required
          />

          <button type="submit">Register Complaint</button>
        </form>
      </div>
    </div>
  );
}

export default ComplaintRegistration;
