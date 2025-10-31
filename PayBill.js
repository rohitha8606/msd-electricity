import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles.css';

function PayBill() {
  const { billId } = useParams();
  const navigate = useNavigate();
  const [bill, setBill] = useState(null);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');


  useEffect(() => {
    const fetchBill = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await fetch(`http://localhost:5001/api/bills/${billId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const billData = await response.json();
        setBill(billData);
      } catch (error) {
        console.error('Error fetching bill:', error);
      }
    };

    fetchBill();
  }, [billId, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('http://localhost:5001/api/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          billId: bill._id,
          amount: bill.amount,
          paymentMethod: 'card'
        })
      });

      if (response.ok) {
        alert('Payment successful!');
        navigate('/customer-dashboard');
      } else {
        alert('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      alert('Payment failed. Please try again.');
    }
  };

  if (!bill) return <div>Loading bill...</div>;

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
        <h1>Pay Bill</h1>
        <p><strong>Bill Amount:</strong> ₹{bill.amount}</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />

          <label htmlFor="expiry">Expiry Date (MM/YY):</label>
          <input
            type="text"
            id="expiry"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            required
          />

          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />

          <button type="submit">Pay Now</button>
        </form>
      </div>
    </div>
  );
}

export default PayBill;
