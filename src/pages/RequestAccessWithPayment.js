import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function RequestAccessWithPayment() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+233');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const [champions, setChampions] = useState({
  shs: {
    maths: null,
    science: null,
    english: null
  },

  jhs: {
    maths: null,
    science: null,
    english: null
  }
});


  const API_URL = process.env.REACT_APP_API_URL;

console.log('API_URL:', API_URL);

// CHECK USER
useEffect(() => {
  const user = JSON.parse(localStorage.getItem('quizUser'));

  if (!user || !user.code || !user.name || !user.subject) {
    localStorage.removeItem('quizUser');
  }
}, []);

// FETCH CHAMPIONS
useEffect(() => {

  const fetchChampions = async () => {
    try {

      const url = `${API_URL}/api/leaderboard/homepage-champions`;

      console.log('FETCHING:', url);

      const res = await axios.get(url);

      console.log('API RESPONSE:', res.data);

      if (res.data && res.data.success) {

       setChampions({
  shs: res.data.shs || {
    maths: null,
    science: null,
    english: null
  },

  jhs: res.data.jhs || {
    maths: null,
    science: null,
    english: null
  }
});

      }

    } catch (err) {

      console.error('FETCH ERROR:', err.response?.data || err.message);

    }
  };

  if (API_URL) {
    fetchChampions();
  }

}, [API_URL]);



  const handlePayment = async () => {
    if (!name.trim() || !email.trim() || !phone.trim()) {
      alert('Please fill out all fields correctly.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post(
  `${API_URL}/api/initiate-payment`,
  {
    name: name.trim(),
    email: email.trim(),
    phone: countryCode + phone.trim(),
    product: localStorage.getItem('selectedProduct') || 'quiz'
  }
);

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

  console.log(champions);

 return (
  <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-black flex items-center justify-center px-3 py-2 overflow-hidden relative">

    {/* BACKGROUND */}
    <div className="absolute top-0 left-0 w-56 h-56 bg-blue-500/20 blur-3xl rounded-full" />
    <div className="absolute bottom-0 right-0 w-56 h-56 bg-indigo-500/20 blur-3xl rounded-full" />

   <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-start relative z-10">

      {/* LEFT SIDE */}
      <div className="text-white order-1">

        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full text-[11px] font-bold mb-3 backdrop-blur-lg">
          🚀 Ghana's First Online Quiz Platform
        </div>

        <h1 className="text-3xl lg:text-4xl font-black leading-tight">
          Unlock
          <span className="text-blue-400"> Premium BECE AND WASSCE</span>
           Exam QUESTIONS
        </h1>

        <p className="text-sm text-blue-100 mt-3 leading-6 max-w-lg">
          Practice BECE, WASSCE, SAT, GRE and other exams with
          leaderboards, reviews, and adaptive quizzes.
        </p>

        {/* FEATURES */}
        <div className="grid grid-cols-2 gap-2 mt-4">

          <div className="bg-white/10 border border-white/10 rounded-xl p-2.5 backdrop-blur-lg">
            <div className="text-lg font-black text-blue-300">
              5500+
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

    
    {/* CHAMPIONS + AI */}
<div className="mt-5">

  {/* TOP ROW */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

    {/* SHS SECTION */}
    <div>

      <div className="text-sm font-black text-white mb-3">
        🏆 Current SHS Champions
      </div>

      <div className="space-y-2">

        {/* SHS MATHS */}
        <div className="bg-white/10 border border-white/10 rounded-xl px-3 py-2 backdrop-blur-lg flex items-center justify-between">

          <div>
            <div className="text-[11px] text-blue-200">
              SHS Maths Champion
            </div>

            <div className="text-sm font-black text-white">
              {champions.shs?.maths?.name || 'No Champion Yet'}
            </div>

            <div className="text-[11px] text-gray-300">
              {champions.shs?.maths?.school || ''}
            </div>
          </div>

          <div className="text-2xl">👑</div>

        </div>

        {/* SHS SCIENCE */}
        <div className="bg-white/10 border border-white/10 rounded-xl px-3 py-2 backdrop-blur-lg flex items-center justify-between">

          <div>
            <div className="text-[11px] text-green-200">
              SHS Science Champion
            </div>

            <div className="text-sm font-black text-white">
              {champions.shs?.science?.name || 'No Champion Yet'}
            </div>

            <div className="text-[11px] text-gray-300">
              {champions.shs?.science?.school || ''}
            </div>
          </div>

          <div className="text-2xl">🧪</div>

        </div>

        {/* SHS ENGLISH */}
        <div className="bg-white/10 border border-white/10 rounded-xl px-3 py-2 backdrop-blur-lg flex items-center justify-between">

          <div>
            <div className="text-[11px] text-pink-200">
              SHS English Champion
            </div>

            <div className="text-sm font-black text-white">
              {champions.shs?.english?.name || 'No Champion Yet'}
            </div>

            <div className="text-[11px] text-gray-300">
              {champions.shs?.english?.school || ''}
            </div>
          </div>

          <div className="text-2xl">📘</div>

        </div>

      </div>

    </div>

    {/* AI TUTOR */}
    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-5 text-white shadow-xl">

      <div className="text-2xl font-black mb-2">
        🤖 TickQuiz AI Tutor
      </div>

      <p className="text-sm leading-6">
        Ask questions and get step-by-step explanations.
      </p>

      <div className="grid grid-cols-2 gap-2 mt-4 text-sm">

  <div>✅ SHS Courses</div>
  <div>✅ JHS Courses</div>

  <div>✅ University Courses</div>
  <div>✅ ICA Courses</div>

  <div>✅ ACCA Courses</div>
  <div>✅ CIMA Courses</div>

</div>

      <button
 onClick={() => {

  localStorage.setItem(
    'selectedProduct',
    'ai-tutor'
  );

  navigate('/ai-tutor-access');

}}
  className="
    w-full
    mt-4
    bg-white
    text-green-700
    rounded-xl
    p-3
    font-black
    hover:scale-[1.02]
    transition-all
  "
>
  🤖 Try AI Tutor
</button>

    </div>

  </div>

  {/* JHS SECTION */}
  <div className="mt-4">

    <div className="text-sm font-black text-white mb-3">
      🏆 Current JHS Champions
    </div>

    <div className="space-y-2">

      {/* JHS MATHS */}
      <div className="bg-white/10 border border-white/10 rounded-xl px-3 py-2 backdrop-blur-lg flex items-center justify-between">

        <div>
          <div className="text-[11px] text-blue-200">
            JHS Maths Champion
          </div>

          <div className="text-sm font-black text-white">
            {champions.jhs?.maths?.name || 'No Champion Yet'}
          </div>

          <div className="text-[11px] text-gray-300">
            {champions.jhs?.maths?.school || ''}
          </div>
        </div>

        <div className="text-2xl">👑</div>

      </div>

      {/* JHS SCIENCE */}
      <div className="bg-white/10 border border-white/10 rounded-xl px-3 py-2 backdrop-blur-lg flex items-center justify-between">

        <div>
          <div className="text-[11px] text-green-200">
            JHS Science Champion
          </div>

          <div className="text-sm font-black text-white">
            {champions.jhs?.science?.name || 'No Champion Yet'}
          </div>

          <div className="text-[11px] text-gray-300">
            {champions.jhs?.science?.school || ''}
          </div>
        </div>

        <div className="text-2xl">🧪</div>

      </div>

      {/* JHS ENGLISH */}
      <div className="bg-white/10 border border-white/10 rounded-xl px-3 py-2 backdrop-blur-lg flex items-center justify-between">

        <div>
          <div className="text-[11px] text-pink-200">
            JHS English Champion
          </div>

          <div className="text-sm font-black text-white">
            {champions.jhs?.english?.name || 'No Champion Yet'}
          </div>

          <div className="text-[11px] text-gray-300">
            {champions.jhs?.english?.school || ''}
          </div>
        </div>

        <div className="text-2xl">📘</div>

      </div>

    </div>

  </div>

</div>


</div>
 {/* FORM */}
<div className="w-full lg:flex lg:justify-end order-2">

  <div className="bg-white/95 backdrop-blur-2xl rounded-[28px] shadow-2xl p-5 lg:p-6 border border-white/20 w-full max-w-sm sticky top-6">





    {/* HEADER */}
    <div className="text-center mb-5">

      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white text-3xl shadow-xl mb-4">
        🎓
      </div>

      <h2 className="text-3xl font-black text-gray-900 tracking-tight">
        Buy Access Code
      </h2>

      <p className="text-gray-500 mt-2 text-sm leading-6">
        One payment unlocks all subjects instantly.
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

    {message && (
      <div className="mt-2 bg-red-50 border border-red-200 text-red-600 px-3 py-2 rounded-lg text-[11px]">
        {message}
      </div>
    )}

  </div>

</div>

</div>

</div>

);
}

export default RequestAccessWithPayment;