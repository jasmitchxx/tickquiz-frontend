// src/pages/PaymentSuccessPage.js
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function PaymentSuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const reference = query.get('reference'); // get reference from URL

  const [accessCode, setAccessCode] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!reference) {
      navigate('/'); // redirect home if no reference
      return;
    }

    const verifyPayment = async () => {
      try {
        const res = await fetch('https://your-backend-url.com/api/verify-payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ reference }),
        });

        const data = await res.json();

        if (data.success) {
          setAccessCode(data.accessCode);
          setPhone(data.phone);
        } else {
          alert('Payment verification failed. Please try again.');
          navigate('/');
        }
      } catch (err) {
        console.error(err);
        alert('Server error during payment verification.');
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [reference, navigate]);

  const handleStartNow = () => {
    navigate('/use-code', { state: { accessCode } });
  };

  if (loading) return <p style={{ textAlign: 'center', marginTop: '100px' }}>Loading your access code...</p>;

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>?? Payment Successful!</h2>
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