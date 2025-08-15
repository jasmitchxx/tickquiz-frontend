import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function VerifyPaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const reference = new URLSearchParams(location.search).get('reference');

  const [accessCode, setAccessCode] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/verify-payment`, {
          reference,
        });

        if (res.data.success && res.data.accessCode) {
          const { accessCode, phone, name } = res.data;

          localStorage.setItem(
            'quizUser',
            JSON.stringify({
              code: accessCode,
              phone,
              name: name || 'User',
            })
          );

          setAccessCode(accessCode);
          setPhone(phone);
          setName(name || 'User');
        } else {
          setError("\u274C Payment verification failed. Please try again.");
        }
      } catch (err) {
        console.error('Payment verification error:', err);
        setError("\u26A0 Something went wrong verifying payment.");
      } finally {
        setLoading(false);
      }
    };

    if (reference) verify();
    else {
      setError("\u26D4 Missing payment reference.");
      setLoading(false);
    }
  }, [reference]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-medium text-gray-600">
        {"\u23F3"} Verifying your payment, please wait...
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
          {"\u21BA"} Retry
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          {"\u2705"} Payment Verified!
        </h2>
        <p className="text-gray-700 mb-2">
          Hi <span className="font-semibold">{name}</span>, your payment was successful.
        </p>
        <p className="text-gray-700 mb-2">Save this access code somewhere safe.</p>
        <p className="text-gray-700 mb-4">You’ll need it to access the quiz.</p>

        <p className="text-gray-700 mb-2">
          {"\uD83D\uDCE7"} An SMS has been sent to <strong>{phone}</strong>.
        </p>
        <p className="text-gray-700 mb-4">In case it delays, here’s your access code:</p>

        <div className="text-4xl font-extrabold tracking-wider text-blue-700 bg-blue-100 py-4 px-6 rounded-xl border border-blue-300 shadow mb-6">
          {accessCode}
        </div>

        <button
          onClick={() => navigate('/use-access-code')}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition"
        >
          {"\u27A1"} Continue to Quiz
        </button>
      </div>
    </div>
  );
}