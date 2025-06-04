// src/pages/PaymentSuccessPage.js
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function PaymentSuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { phone, accessCode } = location.state || {};

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/use-code');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleStartNow = () => {
    navigate('/use-code');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>? Payment Successful!</h2>
      <p>We’ve sent your access code to <strong>{phone}</strong>.</p>
      <p>Your code: <strong>{accessCode}</strong></p>
      <p>Redirecting you to start the quiz...</p>

      <button
        onClick={handleStartNow}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Start Now
      </button>
    </div>
  );
}