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
    if (!name.trim() || !email.trim() || !phone.trim()) {
      alert('Please fill out all fields correctly.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post(`${API_URL}/api/initiate-payment`, {
        name: name.trim(),
        email: email.trim(),
        phone: countryCode + phone.trim(),
      });

      localStorage.setItem(
        'pendingUser',
        JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: countryCode + phone.trim(),
        })
      );

      // Redirect to Paystack authorization URL
      window.location.href = response.data.authorization_url;
    } catch (error) {
      console.error('Payment initialization error:', error);
      setMessage(
        error.response?.data?.message ||
        'Payment failed to initialize. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 420,
        margin: '2rem auto',
        padding: '1.5rem',
        border: '1px solid #ccc',
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      }}
    >
      <h2 style={{ marginBottom: 10 }}>Buy Access Code</h2>
      <p style={{ fontSize: 14, marginBottom: 20 }}>
        Pay <strong>10 GHS</strong> via Paystack. Your access code will be sent
        via SMS after payment.
      </p>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: '100%', marginBottom: 10, padding: 10 }}
        required
      />

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: '100%', marginBottom: 10, padding: 10 }}
        required
      />

      <select
        value={countryCode}
        onChange={(e) => setCountryCode(e.target.value)}
        style={{ width: '100%', marginBottom: 10, padding: 10 }}
        required
      >
        <option value="">Select Country Code</option>
        <option value="+233">Ghana (+233)</option>
        <option value="+234">Nigeria (+234)</option>
        <option value="+254">Kenya (+254)</option>
        <option value="+27">South Africa (+27)</option>
        <option value="+225">Ivory Coast (+225)</option>
        <option value="+44">United Kingdom (+44)</option>
        <option value="+1">United States (+1)</option>
        <option value="+91">India (+91)</option>
        <option value="+49">Germany (+49)</option>
        <option value="+33">France (+33)</option>
        <option value="+971">United Arab Emirates (+971)</option>
        <option value="+61">Australia (+61)</option>
      </select>

      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ width: '100%', marginBottom: 10, padding: 10 }}
        required
      />

      <button
        onClick={handlePayment}
        disabled={loading}
        style={{
          width: '100%',
          padding: '12px',
          backgroundColor: loading ? '#bbb' : '#28a745',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 16,
          border: 'none',
          borderRadius: 4,
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? 'Processing Payment...' : 'Pay & Get Access Code'}
      </button>

      {message && (
        <p style={{ color: 'red', marginTop: 12, fontSize: 14 }}>{message}</p>
      )}
    </div>
  );
}

export default RequestAccessWithPayment;