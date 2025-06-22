import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PaymentFailedPage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h2 style={{ color: 'red' }}>❌ Payment Failed</h2>
      <p>Unfortunately, your payment could not be verified or was unsuccessful.</p>
      <button
        onClick={() => navigate('/')}
        style={{
          marginTop: '2rem',
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer',
        }}
      >
        Try Again
      </button>
    </div>
  );
}
