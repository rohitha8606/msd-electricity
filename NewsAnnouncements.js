import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

function NewsAnnouncements() {
  const navigate = useNavigate();

  const announcements = [
    {
      id: 1,
      title: 'Power Supply Schedule for Maintenance',
      date: '2025-01-15',
      content: 'Scheduled maintenance will be conducted on January 20, 2025, from 10 AM to 2 PM in Sector 5. Power supply will be interrupted during this period.'
    },
    {
      id: 2,
      title: 'New Online Payment Portal Launched',
      date: '2025-01-10',
      content: 'We are excited to announce the launch of our new online payment portal with enhanced security features and multiple payment options.'
    },
    {
      id: 3,
      title: 'Energy Conservation Campaign',
      date: '2025-01-05',
      content: 'Join our energy conservation campaign and get rewarded for reducing your electricity consumption. Register now!'
    }
  ];

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
        <h1>News & Announcements</h1>
        <div className="announcements-list">
          {announcements.map(announcement => (
            <div key={announcement.id} className="announcement-item">
              <h3>{announcement.title}</h3>
              <p className="date">Date: {announcement.date}</p>
              <p>{announcement.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsAnnouncements;
