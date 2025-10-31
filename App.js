import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import ForgotPassword from './components/ForgotPassword';

import CustomerDashboard from './components/CustomerDashboard';
import PayBill from './components/PayBill';
import AdminDashboard from './components/AdminDashboard';
import ManageCustomers from './components/ManageCustomers';
import GenerateBills from './components/GenerateBills';
import UpdatePayments from './components/UpdatePayments';
import Reports from './components/Reports';
import ComplaintRegistration from './components/ComplaintRegistration';
import ServiceRequest from './components/ServiceRequest';
import NewsAnnouncements from './components/NewsAnnouncements';
import ContactUs from './components/ContactUs';
import FAQ from './components/FAQ';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customer-dashboard" element={<CustomerDashboard />} />
          <Route path="/pay-bill/:billId" element={<PayBill />} />
          <Route path="/complaint-registration" element={<ComplaintRegistration />} />
          <Route path="/service-request" element={<ServiceRequest />} />
          <Route path="/news-announcements" element={<NewsAnnouncements />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/manage-customers" element={<ManageCustomers />} />
          <Route path="/generate-bills" element={<GenerateBills />} />
          <Route path="/update-payments" element={<UpdatePayments />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
