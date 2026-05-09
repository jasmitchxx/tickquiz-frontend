import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RequestAccessWithPayment() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+233');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('quizUser'));
    if (!user || !user.code || !user.name || !user.subject) {
      localStorage.removeItem('quizUser');
    }
  }, []);

  const handlePayment = async () => {
    if (!name.trim() || !email.trim() || !phone.trim()) {
      alert('Please fill out all fields correctly.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post(`${API_URL}/api/initiate-payment`, {
        name: name.trim(),
        email: email.trim(),
        phone: countryCode + phone.trim(),
      });

      localStorage.setItem(
        'pendingUser',
        JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: countryCode + phone.trim(),
        })
      );

      // Redirect to Paystack authorization URL
      window.location.href = response.data.authorization_url;
    } catch (error) {
      console.error('Payment initialization error:', error);
      setMessage(
        error.response?.data?.message ||
        'Payment failed to initialize. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

 return (
  <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-black flex items-center justify-center px-3 py-2 overflow-hidden relative">

    {/* BACKGROUND */}
    <div className="absolute top-0 left-0 w-56 h-56 bg-blue-500/20 blur-3xl rounded-full" />
    <div className="absolute bottom-0 right-0 w-56 h-56 bg-indigo-500/20 blur-3xl rounded-full" />

    <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-4 items-center relative z-10">

      {/* LEFT SIDE */}
      <div className="text-white">

        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full text-[11px] font-bold mb-3 backdrop-blur-lg">
          🚀 Ghana's First Online Quiz Platform
        </div>

        <h1 className="text-3xl lg:text-4xl font-black leading-tight">
          Unlock
          <span className="text-blue-400"> Premium </span>
          Exam Practice
        </h1>

        <p className="text-sm text-blue-100 mt-3 leading-6 max-w-lg">
          Practice BECE, WASSCE, SAT, GRE and other exams with
          leaderboards, reviews, and adaptive quizzes.
        </p>

        {/* FEATURES */}
        <div className="grid grid-cols-2 gap-2 mt-4">

          <div className="bg-white/10 border border-white/10 rounded-xl p-2.5 backdrop-blur-lg">
            <div className="text-lg font-black text-blue-300">
              1500+
            </div>

            <div className="text-[11px] text-blue-100">
              Questions
            </div>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-xl p-2.5 backdrop-blur-lg">
            <div className="text-lg font-black text-green-300">
              Live
            </div>

            <div className="text-[11px] text-blue-100">
              Leaderboards
            </div>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-xl p-2.5 backdrop-blur-lg">
            <div className="text-lg font-black text-yellow-300">
              Result
            </div>

            <div className="text-[11px] text-blue-100">
              Reviews
            </div>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-xl p-2.5 backdrop-blur-lg">
            <div className="text-lg font-black text-pink-300">
              24/7
            </div>

            <div className="text-[11px] text-blue-100">
              Access
            </div>
          </div>

        </div>

      </div>

      {/* FORM */}
      <div className="bg-white/95 backdrop-blur-xl rounded-[24px] shadow-2xl p-4 lg:p-5 border border-white/20">

        {/* HEADER */}
        <div className="text-center mb-4">

          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white text-2xl shadow-lg mb-3">
            🎓
          </div>

          <h2 className="text-2xl font-black text-gray-900">
            Buy Access Code
          </h2>

          <p className="text-gray-500 mt-1 text-xs leading-5">
            One code unlocks all subjects.
          </p>

        </div>

        {/* PRICE */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-3 text-white mb-4 shadow-lg">

          <div className="text-3xl font-black">
            GH₵10
          </div>

          <div className="text-xs mt-1 opacity-90">
            Instant activation
          </div>

        </div>

        {/* INPUTS */}
        <div className="space-y-3">

          <div>

            <label className="block text-xs font-bold text-gray-700 mb-1">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                w-full
                px-3
                py-2.5
                rounded-lg
                border
                border-gray-200
                bg-gray-50
                text-sm
                focus:outline-none
                focus:ring-2
                focus:ring-green-200
                focus:border-green-500
              "
              required
            />

          </div>

          <div>

            <label className="block text-xs font-bold text-gray-700 mb-1">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full
                px-3
                py-2.5
                rounded-lg
                border
                border-gray-200
                bg-gray-50
                text-sm
                focus:outline-none
                focus:ring-2
                focus:ring-green-200
                focus:border-green-500
              "
              required
            />

          </div>

          <div className="grid grid-cols-[100px_1fr] gap-2">

            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="
                px-2
                py-2.5
                rounded-lg
                border
                border-gray-200
                bg-gray-50
                text-sm
                focus:outline-none
                focus:ring-2
                focus:ring-green-200
              "
            >
              <option value="+233">🇬🇭 +233</option>
              <option value="+234">🇳🇬 +234</option>
              <option value="+254">🇰🇪 +254</option>
              <option value="+27">🇿🇦 +27</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+1">🇺🇸 +1</option>
            </select>

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="
                w-full
                px-3
                py-2.5
                rounded-lg
                border
                border-gray-200
                bg-gray-50
                text-sm
                focus:outline-none
                focus:ring-2
                focus:ring-green-200
                focus:border-green-500
              "
              required
            />

          </div>

        </div>

        {/* BUTTON */}
        <button
          onClick={handlePayment}
          disabled={loading}
          className={`
            w-full
            mt-4
            py-3
            rounded-xl
            text-sm
            font-black
            text-white
            shadow-lg
            transition-all
            duration-300
            ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-[1.01]'
            }
          `}
        >
          {loading
            ? 'Processing Payment...'
            : 'Pay & Get Instant Access'}
        </button>

        {/* SECURITY */}
        <div className="mt-3 text-center text-[11px] text-gray-500 leading-5">
          🔒 Secure payment via Paystack
        </div>

        {/* ERROR */}
        {message && (
          <div className="mt-3 bg-red-50 border border-red-200 text-red-600 px-3 py-2 rounded-lg text-xs font-medium">
            {message}
          </div>
        )}

      </div>

    </div>

  </div>
);

}

export default RequestAccessWithPayment;