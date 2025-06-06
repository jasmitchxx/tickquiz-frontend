// src/pages/VerifyPaymentPage.js
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function VerifyPaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const reference = new URLSearchParams(location.search).get('reference');

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/verify-payment`, {
          reference,
        });

        if (res.data.message === 'Payment verified. Access code sent!') {
          const { accessCode, phone, name } = res.data;

          // Save basic user info (excluding subject for now)
          localStorage.setItem(
            'quizUser',
            JSON.stringify({
              code: accessCode,
              phone,
              name: name || 'User',
            })
          );

          // ? Redirect to access code entry page
          navigate('/use-access-code');
        } else {
          navigate('/payment-failed');
        }
      } catch (err) {
        console.error('Payment verification error:', err);
        navigate('/payment-failed');
      }
    };

    if (reference) verify();
    else navigate('/payment-failed');
  }, [reference, navigate]);

  return <p>Verifying your payment, please wait...</p>;
}