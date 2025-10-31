import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

function FAQ() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How can I check my electricity bill online?',
      answer: 'You can check your bill by logging into your account and navigating to the "View Bills" section, or by using the quick bill check feature on the homepage.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept online payments through credit/debit cards, net banking, UPI, and wallet payments. You can also pay at authorized payment centers.'
    },
    {
      question: 'How do I report a power outage?',
      answer: 'You can report power outages through our complaint registration system or by calling our emergency helpline at 1912.'
    },
    {
      question: 'What should I do if I receive an incorrect bill?',
      answer: 'If you believe your bill is incorrect, please contact our customer care or register a complaint through the portal with details of the discrepancy.'
    },
    {
      question: 'How can I apply for a new electricity connection?',
      answer: 'You can apply for a new connection through our "Service Request" section or visit your nearest regional office with required documents.'
    },
    {
      question: 'What are the due dates for bill payments?',
      answer: 'Bills are due within 15 days from the date of issue. Late payment charges may apply after the due date.'
    },
    {
      question: 'How do I update my contact information?',
      answer: 'You can update your contact information by logging into your account and accessing the profile settings.'
    },
    {
      question: 'What should I do if my meter is faulty?',
      answer: 'Report meter issues through our complaint registration system. Our technicians will inspect and replace if necessary.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
        <h1>Frequently Asked Questions</h1>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span className="faq-toggle">{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
