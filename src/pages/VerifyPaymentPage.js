import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function VerifyPaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const reference = new URLSearchParams(location.search).get('reference');

  const [accessCode, setAccessCode] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!reference) {
      setError('Missing payment reference.');
      setLoading(false);
      return;
    }

    const verifyPayment = async () => {
      try {
        // Call backend to verify payment and generate access code
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/verify-payment`,
          { reference }
        );

        if (res.data.success && res.data.accessCode) {
          setAccessCode(res.data.accessCode);

          // Save locally for quiz usage
          localStorage.setItem(
            'quizUser',
            JSON.stringify({ code: res.data.accessCode, name: 'User' })
          );
        } else {
          setError('Payment verified but access code not generated. Contact support.');
        }
      } catch (err) {
        console.error('Verification error:', err);
        setError('Error verifying payment. Try refreshing.');
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [reference]);

  const handleCopy = () => {
    navigator.clipboard.writeText(accessCode);
    alert('Access code copied!');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-lg text-gray-600">
        Processing your payment, please wait...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-red-600 text-center px-4">
        {error}
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Payment Successful ?
        </h2>

        <p className="text-gray-700 mb-2">
          Your <span className="font-semibold">access code</span> is ready:
        </p>

        <div className="text-4xl font-extrabold tracking-wider text-blue-700 bg-blue-100 py-4 px-6 rounded-xl border border-blue-300 shadow mb-4">
          {accessCode}
        </div>

        <button
          onClick={handleCopy}
          className="mb-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full shadow"
        >
          Copy Code
        </button>

        <button
          onClick={() => navigate('/use-access-code')}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full"
        >
          Continue to Quiz
        </button>
      </div>
    </div>
  );
}