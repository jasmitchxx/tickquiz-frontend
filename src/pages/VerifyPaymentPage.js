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
    const verify = async () => {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/verify-payment`,
          { reference }
        );

        if (res.data.success && res.data.accessCode) {
          const { accessCode, name } = res.data;

          // Save user info locally
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
          setError('Payment verification failed. Please try again.');
        }
      } catch (err) {
        console.error('Payment verification error:', err);
        setError('Something went wrong verifying your payment.');
      } finally {
        setLoading(false);
      }
    };

    if (reference) verify();
    else {
      setError('Missing payment reference.');
      setLoading(false);
    }
  }, [reference]);

  const handleCopy = () => {
    navigator.clipboard.writeText(accessCode);
    alert('Access code copied to clipboard!');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-medium text-gray-600">
        Verifying your payment, please wait...
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
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 flex items-center justify-center p-3 relative overflow-hidden">

    {/* BACKGROUND GLOW */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full" />

    <div className="relative z-10 w-full max-w-xl">

      {/* MAIN CARD */}
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl border border-white/20">

        {/* TOP SUCCESS AREA */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-7 text-center text-white">

          <div className="w-16 h-16 mx-auto rounded-full bg-white/20 flex items-center justify-center text-3xl shadow-lg mb-4">
            ✓
          </div>

          <h1 className="text-2xl lg:text-3xl font-black mb-2">
            Payment Successful
          </h1>

          <p className="text-sm opacity-90 max-w-md mx-auto leading-6">
            Your TickQuiz payment has been verified successfully.
          </p>

        </div>

        {/* CONTENT */}
        <div className="p-4 lg:p-6">

          {/* USER INFO */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-5">

            <div className="text-xs uppercase tracking-wider text-blue-600 font-bold mb-1">
              Candidate Information
            </div>

            <div className="text-2xl font-black text-gray-900">
              {name}
            </div>

            <div className="text-sm text-gray-500 mt-1">
              Welcome to TickQuiz Premium Portal
            </div>

          </div>

          {/* ACCESS CODE */}
          <div className="text-center mb-5">

            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-3">
              Your Access Code
            </div>

            <div className="
              bg-gradient-to-r
              from-blue-600
              to-indigo-700
              text-white
              text-2xl
              lg:text-4xl
              font-black
              tracking-[0.2em]
              py-5
              px-4
              rounded-2xl
              shadow-lg
              border
              border-blue-400
              break-all
            ">
              {accessCode}
            </div>

          </div>

          {/* NOTICE */}
          <div className="
            bg-amber-50
            border
            border-amber-200
            rounded-xl
            p-4
            mb-5
          ">

            <div className="font-bold text-sm text-amber-800 mb-1">
              Important Notice
            </div>

            <p className="text-sm text-amber-700 leading-6">
              Save this access code carefully for future quiz access.
            </p>

          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3">

            <button
              onClick={handleCopy}
              className="
                flex-1
                bg-gradient-to-r
                from-indigo-600
                to-blue-700
                hover:from-indigo-700
                hover:to-blue-800
                text-white
                text-sm
                font-bold
                py-3
                rounded-xl
                shadow-md
                transition-all
                duration-300
              "
            >
              Copy Access Code
            </button>

            <button
              onClick={() => navigate('/use-access-code')}
              className="
                flex-1
                bg-gradient-to-r
                from-green-500
                to-emerald-600
                hover:from-green-600
                hover:to-emerald-700
                text-white
                text-sm
                font-bold
                py-3
                rounded-xl
                shadow-md
                transition-all
                duration-300
              "
            >
              Continue →
            </button>

          </div>

        </div>

      </div>

    </div>

  </div>
);

  }