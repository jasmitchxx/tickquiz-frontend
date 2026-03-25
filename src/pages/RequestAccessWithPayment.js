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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Buy Access Code
        </h2>
        <p className="text-center text-gray-600 text-sm mb-6">
          Pay <span className="font-bold text-green-600">10 GHS</span> via Paystack. 
          Your <span className="font-semibold">access code</span> will be shown on the verification page after payment.
        </p>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <select
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        >
          <option value="">Select Country Code</option>
          <option value="+233">Ghana (+233)</option>
          <option value="+234">Nigeria (+234)</option>
          <option value="+254">Kenya (+254)</option>
          <option value="+27">South Africa (+27)</option>
          <option value="+225">Ivory Coast (+225)</option>
          <option value="+44">United Kingdom (+44)</option>
          <option value="+1">United States (+1)</option>
          <option value="+91">India (+91)</option>
          <option value="+49">Germany (+49)</option>
          <option value="+33">France (+33)</option>
          <option value="+971">United Arab Emirates (+971)</option>
          <option value="+61">Australia (+61)</option>
        </select>

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <button
          onClick={handlePayment}
          disabled={loading}
          className={`w-full py-3 rounded-lg font-bold text-white transition ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {loading ? 'Processing Payment...' : 'Pay & Get Access Code'}
        </button>

        {message && (
          <p className="mt-4 text-center text-sm text-red-600 font-medium">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default RequestAccessWithPayment;