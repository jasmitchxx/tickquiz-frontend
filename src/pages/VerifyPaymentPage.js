import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
          const { accessCode, phone, name, subject } = res.data;

          // ? Save the required fields to localStorage
          localStorage.setItem(
            'quizUser',
            JSON.stringify({
              code: accessCode,
              phone,
              name: name || 'User',
              subject: subject || 'General',
            })
          );

          // ? Redirect to the start page
          navigate('/start');
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