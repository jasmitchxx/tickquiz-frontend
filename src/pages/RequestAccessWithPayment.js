import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RequestAccessWithPayment() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+233');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Manual entry fields
  const [manualName, setManualName] = useState('');
  const [manualSubject, setManualSubject] = useState('');
  const [manualCode, setManualCode] = useState('');
  const [manualMessage, setManualMessage] = useState('');

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

  const handleManualEntry = async () => {
    if (!manualName || !manualSubject || !manualCode) {
      setManualMessage('Please fill out all fields.');
      return;
    }

    try {
      const res = await axios.post(`${API_URL}/api/validate-code`, {
        code: manualCode,
      });

      if (res.data.valid) {
        localStorage.setItem('quizUser', JSON.stringify({
          name: manualName,
          subject: manualSubject,
          code: manualCode,
        }));
        navigate('/quiz');
      } else {
        setManualMessage('Invalid or expired access code.');
      }
    } catch (err) {
      console.error('Validation failed:', err);
      setManualMessage('Something went wrong. Please try again.');
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

      <hr style={{ margin: '2rem 0' }} />

      <h3>Already have an access code?</h3>
      <input
        type="text"
        placeholder="Your Name"
        value={manualName}
        onChange={e => setManualName(e.target.value)}
        style={{ width: '100%', marginBottom: 10, padding: 8 }}
      />
      <input
        type="text"
        placeholder="Subject (e.g. Science, Math)"
        value={manualSubject}
        onChange={e => setManualSubject(e.target.value)}
        style={{ width: '100%', marginBottom: 10, padding: 8 }}
      />
      <input
        type="text"
        placeholder="Enter Access Code"
        value={manualCode}
        onChange={e => setManualCode(e.target.value)}
        style={{ width: '100%', marginBottom: 10, padding: 8 }}
      />

      <button
        onClick={handleManualEntry}
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#28A745',
          color: 'white',
          border: 'none',
          borderRadius: 4,
        }}
      >
        Enter Quiz
      </button>

      {manualMessage && <p style={{ color: 'red', marginTop: 10 }}>{manualMessage}</p>}
    </div>
  );
}

export default RequestAccessWithPayment;