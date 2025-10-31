import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import '../styles.css';

function CustomerDashboard() {
  const [bills, setBills] = useState([]);
  const [payments, setPayments] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const user = JSON.parse(localStorage.getItem('user'));

      if (!token || !user) {
        navigate('/login');
        return;
      }

      try {
        const billsResponse = await fetch(`http://localhost:5001/api/bills/customer/${user.id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const billsData = await billsResponse.json();
        setBills(Array.isArray(billsData) ? billsData : []);

        const paymentsResponse = await fetch(`http://localhost:5001/api/payments/customer/${user.id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const paymentsData = await paymentsResponse.json();
        setPayments(Array.isArray(paymentsData) ? paymentsData : []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [navigate]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <div>
      <header>
        <div className="header-left">
          <button onClick={toggleSidebar} className="menu-button">☰</button>
          <h1>APCPDCL - Customer Portal</h1>
        </div>
        <nav>
          <ul>
            <li><button onClick={handleLogout}>Logout</button></li>
          </ul>
        </nav>
      </header>
      {sidebarOpen && (
        <div className="sidebar">
          <div className="sidebar-header">
            <button onClick={toggleSidebar} className="close-button">×</button>
          </div>
          <div className="sidebar-content">
            <button onClick={() => { navigate('/complaint-registration'); setSidebarOpen(false); }}>Register Complaint</button>
            <button onClick={() => { navigate('/service-request'); setSidebarOpen(false); }}>Service Request</button>
            <button onClick={() => { navigate('/news-announcements'); setSidebarOpen(false); }}>News & Announcements</button>
            <button onClick={() => { navigate('/contact-us'); setSidebarOpen(false); }}>Contact Us</button>
            <button onClick={() => { navigate('/faq'); setSidebarOpen(false); }}>FAQ</button>
          </div>
        </div>
      )}
      <div className="container">
        <h1>Customer Dashboard</h1>

        <h2>Your Bills</h2>
        <ul>
          {bills.map(bill => (
            <li key={bill._id}>
              <strong>Amount:</strong> ₹{bill.amount}<br />
              <strong>Due Date:</strong> {new Date(bill.dueDate).toLocaleDateString()}<br />
              <strong>Status:</strong> {bill.status}
              {bill.status === 'unpaid' && (
                <button onClick={() => navigate(`/pay-bill/${bill._id}`)} className="pay-now-button">Pay Now</button>
              )}
            </li>
          ))}
        </ul>

        <h2>Payment History</h2>
        <ul>
          {payments.map(payment => (
            <li key={payment._id}>
              <strong>Amount:</strong> ₹{payment.amount}<br />
              <strong>Date:</strong> {new Date(payment.date).toLocaleDateString()}<br />
              <strong>Status:</strong> {payment.status}
            </li>
          ))}
        </ul>

        <h2>Actions</h2>
        <button onClick={() => navigate('/pay-bill/1')} className="pay-bill-button">Pay Bill</button>

      </div>
      <Footer />
    </div>
  );
}

export default CustomerDashboard;
