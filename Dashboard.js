import React, { useState } from 'react';
import '../styles.css'; // Import existing styles

function Dashboard() {
  const [serviceNumber, setServiceNumber] = useState('');
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult('');
    setLoading(false);

    if (serviceNumber.length !== 13 || isNaN(serviceNumber)) {
      setResult('Please enter a valid 13-digit Service Number.');
      return;
    }

    if (aadhaarNumber.length !== 12 || isNaN(aadhaarNumber)) {
      setResult('Please enter a valid 12-digit Aadhaar Number.');
      return;
    }

    setLoading(true);
    setResult('Fetching your bill details...');

    setTimeout(() => {
      setResult(`Service Number: ${serviceNumber}\nAadhaar: ${aadhaarNumber}\nBill Amount: ₹ 750.25\nDue Date: 30-10-2025`);
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <header>
        <h1>APCPDCL - Know & Pay Your Bill</h1>
        <nav>
          <ul>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><button onClick={() => window.history.back()}>Back</button></li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <h1>APCPDCL Customer Dashboard</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="serviceNumber">Service Number (13 digits):</label>
          <input
            type="text"
            id="serviceNumber"
            value={serviceNumber}
            onChange={(e) => setServiceNumber(e.target.value)}
            maxLength="13"
            required
          />

          <label htmlFor="aadhaarNumber">Aadhaar Number (12 digits):</label>
          <input
            type="text"
            id="aadhaarNumber"
            value={aadhaarNumber}
            onChange={(e) => setAadhaarNumber(e.target.value)}
            maxLength="12"
            required
          />

          <button type="submit" disabled={loading}>Check Bill Status</button>
        </form>

        <div id="result" style={{ color: result.includes('Please') ? 'red' : 'black' }}>
          {result}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
