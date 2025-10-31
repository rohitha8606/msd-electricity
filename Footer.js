import React from 'react';
import '../styles.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>APCPDCL</h3>
          <p>Andhra Pradesh Central Power Distribution Company Limited</p>
          <p>Committed to providing reliable and quality power supply</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/customer-dashboard">Customer Dashboard</a></li>
            <li><a href="/pay-bill/1">Pay Bill</a></li>
            <li><a href="/complaint-registration">Register Complaint</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>Toll-Free: 1800-XXX-XXXX</p>
          <p>Email: info@apcpdcl.in</p>
          <p>Emergency: 1912</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Stay updated with our latest news and announcements</p>
          <div className="social-links">
            <span>Facebook</span>
            <span>Twitter</span>
            <span>YouTube</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 APCPDCL. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
