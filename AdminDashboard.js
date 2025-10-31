import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <div>
      <header>
        <h1>APCPDCL - Admin Panel</h1>
        <nav>
          <ul>
            <li><button onClick={handleLogout}>Logout</button></li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <h1>Admin Dashboard</h1>

        <h2>Admin Options</h2>
        <ul>
          <li><button onClick={() => navigate('/manage-customers')}>Manage Customers</button></li>
          <li><button onClick={() => navigate('/generate-bills')}>Generate Bills</button></li>
          <li><button onClick={() => navigate('/update-payments')}>Update Payment Status</button></li>
          <li><button onClick={() => navigate('/reports')}>View Reports</button></li>
        </ul>
      </div>
    </div>
  );
}

export default AdminDashboard;
