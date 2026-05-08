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
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 flex items-center justify-center p-4 relative overflow-hidden">

    {/* BACKGROUND GLOW */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 blur-3xl rounded-full" />

    <div className="relative z-10 w-full max-w-2xl">

      {/* MAIN CARD */}
      <div className="bg-white/95 backdrop-blur-2xl rounded-[36px] overflow-hidden shadow-2xl border border-white/20">

        {/* TOP SUCCESS AREA */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-12 text-center text-white">

          <div className="w-24 h-24 mx-auto rounded-full bg-white/20 flex items-center justify-center text-5xl shadow-2xl mb-6">
            ✓
          </div>

          <h1 className="text-4xl lg:text-5xl font-black mb-3">
            Payment Successful
          </h1>

          <p className="text-lg opacity-90 max-w-lg mx-auto leading-8">
            Your TickQuiz payment has been verified successfully.
            Your premium access code is now ready.
          </p>

        </div>

        {/* CONTENT */}
        <div className="p-6 lg:p-10">

          {/* USER INFO */}
          <div className="bg-blue-50 border border-blue-100 rounded-3xl p-6 mb-8">

            <div className="text-sm uppercase tracking-wider text-blue-600 font-bold mb-2">
              Candidate Information
            </div>

            <div className="text-3xl font-black text-gray-900">
              {name}
            </div>

            <div className="text-gray-500 mt-2">
              Welcome to TickQuiz Premium Examination Portal
            </div>

          </div>

          {/* ACCESS CODE */}
          <div className="text-center mb-8">

            <div className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-4">
              Your Access Code
            </div>

            <div className="
              bg-gradient-to-r
              from-blue-600
              to-indigo-700
              text-white
              text-3xl
              lg:text-5xl
              font-black
              tracking-[0.3em]
              py-8
              px-6
              rounded-3xl
              shadow-2xl
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
            rounded-2xl
            p-5
            mb-8
          ">

            <div className="font-bold text-amber-800 mb-2">
              Important Notice
            </div>

            <p className="text-amber-700 leading-7">
              Save this access code carefully. You will need it
              to enter TickQuiz examinations and continue your quizzes later.
            </p>

          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">

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
                font-black
                py-4
                rounded-2xl
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
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
                font-black
                py-4
                rounded-2xl
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              Continue to Quiz →
            </button>

          </div>

        </div>

      </div>

    </div>

  </div>
);

  }