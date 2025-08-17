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
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/verify-payment`, {
          reference,
        });

        if (res.data.success && res.data.accessCode) {
          const { accessCode, name } = res.data;

          localStorage.setItem(
            'quizUser',
            JSON.stringify({
              code: accessCode,
              name: name || 'User',
            })
          );

          setAccessCode(accessCode);
          setName(name || 'User');
        } else {
          setError("? Payment verification failed. Please try again.");
        }
      } catch (err) {
        console.error('Payment verification error:', err);
        setError("? Something went wrong verifying payment.");
      } finally {
        setLoading(false);
      }
    };

    if (reference) verify();
    else {
      setError("? Missing payment reference.");
      setLoading(false);
    }
  }, [reference]);

  const handleCopy = () => {
    navigator.clipboard.writeText(accessCode);
    setCopied(true);
    setShowToast(true);
    setTimeout(() => {
      setCopied(false);
      setShowToast(false);
    }, 2000); // Hide after 2s
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-medium text-gray-600">
        {"?"} Verifying your payment, please wait...
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
          {"??"} Retry
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 relative">
      {/* ? Toast Notification */}
      {showToast && (
        <div className="absolute top-6 right-6 bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg animate-bounce">
          ? Access code copied!
        </div>
      )}

      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          {"?"} Payment Verified!
        </h2>
        <p className="text-gray-700 mb-2">
          Hi <span className="font-semibold">{name}</span>, your payment was successful.
        </p>
        <p className="text-gray-700 mb-2">Save this access code somewhere safe.</p>
        <p className="text-gray-700 mb-6">You’ll need it to access the quiz.</p>

        {/* New message before the code */}
        <p className="text-lg font-semibold text-gray-800 mb-3">
          ?? Here is your access code:
        </p>

        {/* Access Code Display */}
        <div className="flex flex-col items-center justify-center">
          <div className="text-5xl font-extrabold tracking-widest text-blue-800 bg-blue-100 py-6 px-8 rounded-2xl border-4 border-blue-400 shadow-xl text-center">
            {accessCode}
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className={`mt-4 px-6 py-2 rounded-full font-bold transition ${
              copied
                ? "bg-green-500 text-white"
                : "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-pink-500 hover:to-purple-500"
            }`}
          >
            {copied ? "? Copied!" : "?? Copy Code"}
          </button>
        </div>

        {/* Continue Button */}
        <button
          onClick={() => navigate('/use-access-code')}
          className="mt-8 bg-green-600 hover:bg-green-700 text-white font-extrabold text-lg py-3 px-10 rounded-full shadow-lg transition"
        >
          {"?"} CONTINUE TO QUIZ
        </button>
      </div>
    </div>
  );
}