import { useState } from 'react';
import axios from 'axios';

function AISubscribePage() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
const [loginPassword, setLoginPassword] = useState('');

  const API_URL = process.env.REACT_APP_API_URL;
console.log("API URL =", API_URL);




const handleSubscriberLogin = async () => {

  try {

    const response = await axios.post(
      `${API_URL}/api/check-ai-subscription`,
      {
        email: loginEmail.trim().toLowerCase(),
        password: loginPassword.trim()
      }
    );

    if (response.data.active) {

      localStorage.setItem(
        'aiSubscriptionEmail',
        loginEmail.trim().toLowerCase()
      );

      localStorage.setItem(
        'aiPassword',
        loginPassword.trim()
      );

      window.location.href = '/ask-ai';

    } else {

      alert(
        'Invalid email/password or subscription expired.'
      );

    }

  } catch (err) {

    alert(
      'Unable to verify subscription.'
    );

  }

};

  const handlePayment = async () => {

   try {

  console.log("Sending payment request...");

  const response = await axios.post(
  `${API_URL}/api/initiate-ai-payment`,
  {
  name: name.trim(),
  email: email.trim(),
  phone: phone.trim(),
  password: password.trim()
}
);

console.log("SUCCESS:", response.data);
console.log(
  "SAVING EMAIL:",
  email.trim()
);

localStorage.setItem(
  'aiSubscriptionEmail',
  email.trim().toLowerCase()
);
localStorage.setItem(
  'aiSubscriptionPassword',
  password.trim()
);

localStorage.setItem(
  'aiSubscriptionName',
  name.trim()
);

localStorage.setItem(
  'aiSubscriptionPhone',
  phone.trim()
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
<input
  type="password"
  placeholder="Create Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full border p-3 rounded-xl mb-4"
/>
        <div className="bg-green-50 rounded-xl p-4 text-center mb-4">

          <div className="text-sm text-gray-500">
            Subscription Fee
          </div>

          <div className="text-4xl font-black text-green-600">
            GH₵65
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
<hr className="my-6" />

<h2 className="text-xl font-black text-center mb-4">
  Already Subscribed?
</h2>

<input
  type="email"
  placeholder="Subscription Email"
  value={loginEmail}
  onChange={(e) =>
    setLoginEmail(e.target.value)
  }
  className="w-full border p-3 rounded-xl mb-3"
/>

<input
  type="password"
  placeholder="Password"
  value={loginPassword}
  onChange={(e) =>
    setLoginPassword(e.target.value)
  }
  className="w-full border p-3 rounded-xl mb-4"
/>

<button
  onClick={handleSubscriberLogin}
  className="
    w-full
    bg-blue-600
    text-white
    py-3
    rounded-xl
    font-black
  "
>
  Login To AI Tutor
</button>
      </div>

    </div>

  );

}

export default AISubscribePage;