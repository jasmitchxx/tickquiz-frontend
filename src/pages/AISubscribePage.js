import { useState } from 'react';
import axios from 'axios';

function AISubscribePage() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const API_URL = process.env.REACT_APP_API_URL;
console.log("API URL =", API_URL);

  const handlePayment = async () => {

   try {

  console.log("Sending payment request...");

  const response = await axios.post(
  `${API_URL}/api/initiate-ai-payment`,
  {
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim()
  }
);

console.log("SUCCESS:", response.data);
console.log(
  "SAVING EMAIL:",
  email.trim()
);

localStorage.setItem(
  'aiSubscriptionEmail',
  email.trim()
);

window.location.href =
  response.data.authorization_url;

} catch (err) {

  console.error("FULL ERROR:", err);

  console.log("Response:", err.response);
  console.log("Data:", err.response?.data);

  alert(
    err.response?.data?.message ||
    err.message ||
    'Payment failed'
  );

}

  };

  return (

    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">

      <div className="bg-white rounded-3xl shadow-xl max-w-md w-full p-6">

        <h1 className="text-3xl font-black text-center mb-5">
          🤖 AI Tutor Subscription
        </h1>

        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-3 rounded-xl mb-3"
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded-xl mb-3"
        />

        <input
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border p-3 rounded-xl mb-4"
        />

        <div className="bg-green-50 rounded-xl p-4 text-center mb-4">

          <div className="text-sm text-gray-500">
            Subscription Fee
          </div>

          <div className="text-4xl font-black text-green-600">
            GH₵2
          </div>

          <div className="text-sm text-gray-500">
            30 Days Access
          </div>

        </div>

        <button
          onClick={handlePayment}
          className="w-full bg-green-600 text-white py-3 rounded-xl font-black"
        >
          Pay Now
        </button>

      </div>

    </div>

  );

}

export default AISubscribePage;