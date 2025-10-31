import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

function ContactUs() {
  const navigate = useNavigate();

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
        <h1>Contact Us</h1>
        <div className="contact-info">
          <h2>Customer Care</h2>
          <p><strong>Toll-Free Number:</strong> 1800-XXX-XXXX</p>
          <p><strong>Email:</strong> customercare@apcpdcl.in</p>

          <h2>Regional Offices</h2>
          <div className="office-list">
            <div className="office">
              <h3>Head Office</h3>
              <p>APCPDCL Building, Vijayawada</p>
              <p>Phone: +91-XXX-XXXXXXX</p>
            </div>
            <div className="office">
              <h3>Regional Office - East</h3>
              <p>Visakhapatnam</p>
              <p>Phone: +91-XXX-XXXXXXX</p>
            </div>
            <div className="office">
              <h3>Regional Office - West</h3>
              <p>Tirupati</p>
              <p>Phone: +91-XXX-XXXXXXX</p>
            </div>
          </div>

          <h2>Emergency Contact</h2>
          <p>For power outages and emergencies, call: <strong>1912</strong></p>

          <h2>Working Hours</h2>
          <p>Monday to Saturday: 9:00 AM to 5:00 PM</p>
          <p>Sunday: Closed (Emergency services available)</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
