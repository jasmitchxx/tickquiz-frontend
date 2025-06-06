// src/pages/RequestAccessWithPayment.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RequestAccessWithPayment() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+233');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('quizUser'));
    if (!user || !user.code || !user.name || !user.subject) {
      localStorage.removeItem('quizUser');
    }
  }, []);

  const handlePayment = async () => {
    if (!name || !email || !phone) {
      alert('Please fill out all fields.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post(`${API_URL}/api/initiate-payment`, {
        name,
        email,
        phone: countryCode + phone,
      });

      localStorage.setItem(
        'pendingUser',
        JSON.stringify({ name, email, phone: countryCode + phone })
      );

      window.location.href = response.data.authorization_url;
    } catch (error) {
      console.error('Payment initialization error:', error);
      setMessage('Payment failed to initialize. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: '1rem', border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Request Access Code & Pay</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={e => setName(e.target.value)}
        style={{ width: '100%', marginBottom: 10, padding: 8 }}
      />
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ width: '100%', marginBottom: 10, padding: 8 }}
      />
      <input
        type="text"
        placeholder="+Country Code"
        value={countryCode}
        onChange={e => setCountryCode(e.target.value)}
        style={{ width: '100%', marginBottom: 10, padding: 8 }}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        style={{ width: '100%', marginBottom: 10, padding: 8 }}
      />

      <button
        onClick={handlePayment}
        disabled={loading}
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: 4,
        }}
      >
        {loading ? 'Processing...' : 'Pay 20 GHS & Get Access Code'}
      </button>

      {message && <p style={{ color: 'red', marginTop: 10 }}>{message}</p>}
    </div>
  );
}

export default RequestAccessWithPayment;