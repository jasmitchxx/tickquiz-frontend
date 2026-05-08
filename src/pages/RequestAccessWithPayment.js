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
  <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-black flex items-center justify-center px-4 py-10 overflow-hidden relative">

    {/* BACKGROUND GLOW */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 blur-3xl rounded-full" />

    <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-10 items-center relative z-10">

      {/* LEFT SIDE */}
      <div className="text-white">

        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm font-bold mb-6 backdrop-blur-lg">
          🚀 Ghana's Modern Online Quiz Platform
        </div>

        <h1 className="text-5xl lg:text-7xl font-black leading-tight">
          Unlock
          <span className="text-blue-400"> Premium </span>
          Exam Practice
        </h1>

        <p className="text-lg text-blue-100 mt-6 leading-8 max-w-xl">
          Practice BECE, WASSCE, SAT, GRE and other competitive exams with
          real-time scoring, leaderboards, analytics, and premium adaptive quizzes.
        </p>

        {/* FEATURES */}
        <div className="grid grid-cols-2 gap-4 mt-10">

          <div className="bg-white/10 border border-white/10 rounded-2xl p-5 backdrop-blur-lg">
            <div className="text-3xl font-black text-blue-300">
              1500+
            </div>
            <div className="text-sm text-blue-100 mt-1">
              Practice Questions
            </div>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-2xl p-5 backdrop-blur-lg">
            <div className="text-3xl font-black text-green-300">
              Live
            </div>
            <div className="text-sm text-blue-100 mt-1">
              Leaderboards
            </div>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-2xl p-5 backdrop-blur-lg">
            <div className="text-3xl font-black text-yellow-300">
              AI
            </div>
            <div className="text-sm text-blue-100 mt-1">
              Performance Analytics
            </div>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-2xl p-5 backdrop-blur-lg">
            <div className="text-3xl font-black text-pink-300">
              24/7
            </div>
            <div className="text-sm text-blue-100 mt-1">
              Online Access
            </div>
          </div>

        </div>

      </div>

      {/* RIGHT SIDE FORM */}
      <div className="bg-white/95 backdrop-blur-xl rounded-[32px] shadow-2xl p-8 lg:p-10 border border-white/30">

        <div className="text-center mb-8">

          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 text-white text-4xl shadow-xl mb-5">
            🎓
          </div>

          <h2 className="text-4xl font-black text-gray-900">
            Buy Access Code
          </h2>

          <p className="text-gray-500 mt-3 leading-7">
            One code gives you access to all subjects until logout.
          </p>

        </div>

        {/* PRICE CARD */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-6 text-white mb-7 shadow-xl">

          <div className="text-sm uppercase tracking-widest opacity-80">
            
          </div>

          <div className="text-5xl font-black mt-2">
            GH₵10
          </div>

          <div className="mt-2 opacity-90">
            Instant activation after payment
          </div>

        </div>

        {/* INPUTS */}
        <div className="space-y-5">

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                w-full
                px-5
                py-4
                rounded-2xl
                border
                border-gray-200
                bg-gray-50
                focus:outline-none
                focus:ring-4
                focus:ring-green-200
                focus:border-green-500
                transition
              "
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full
                px-5
                py-4
                rounded-2xl
                border
                border-gray-200
                bg-gray-50
                focus:outline-none
                focus:ring-4
                focus:ring-green-200
                focus:border-green-500
                transition
              "
              required
            />
          </div>

          <div className="grid grid-cols-[140px_1fr] gap-4">

            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="
                px-4
                py-4
                rounded-2xl
                border
                border-gray-200
                bg-gray-50
                focus:outline-none
                focus:ring-4
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
                px-5
                py-4
                rounded-2xl
                border
                border-gray-200
                bg-gray-50
                focus:outline-none
                focus:ring-4
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
            mt-8
            py-5
            rounded-2xl
            text-lg
            font-black
            text-white
            shadow-xl
            transition-all
            duration-300
            ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-[1.02] hover:shadow-2xl'
            }
          `}
        >
          {loading
            ? 'Processing Payment...'
            : 'Pay & Get Instant Access'}
        </button>

        {/* SECURITY */}
        <div className="mt-6 text-center text-sm text-gray-500 leading-7">
          🔒 Secure payment powered by Paystack
          <br />
          Instant access code on your screen
        </div>

        {/* ERROR */}
        {message && (
          <div className="mt-5 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-2xl text-sm font-medium">
            {message}
          </div>
        )}

      </div>

    </div>

  </div>
);

}

export default RequestAccessWithPayment;