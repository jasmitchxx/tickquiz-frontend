import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function VerifyPaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const reference = new URLSearchParams(location.search).get('reference');

  const [accessCode, setAccessCode] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!reference) {
      setError('Missing payment reference.');
      setLoading(false);
      return;
    }

    let interval;

    const checkPayment = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/check-payment/${reference}`
        );

        if (res.data.success) {
          const code = res.data.accessCode;

          // Save user info locally
          localStorage.setItem(
            'quizUser',
            JSON.stringify({
              code,
              name: 'User', // webhook doesn't return name here
            })
          );

          setAccessCode(code);
          setName('User');
          setLoading(false);
          clearInterval(interval);
        }
      } catch (err) {
        console.error('Check payment error:', err);
        setError('Something went wrong checking your payment.');
        setLoading(false);
        clearInterval(interval);
      }
    };

    // Run immediately
    checkPayment();

    // Then poll every 3 seconds
    interval = setInterval(checkPayment, 3000);

    return () => clearInterval(interval);
  }, [reference]);

  const handleCopy = () => {
    navigator.clipboard.writeText(accessCode);
    alert('Access code copied to clipboard!');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-medium text-gray-600">
        Processing your payment, please wait...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-red-600 text-lg font-semibold text-center px-4">
        {error}
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition"
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
          Payment Successful ??
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
          className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition"
        >
          Continue to Quiz
        </button>
      </div>
    </div>
  );
}