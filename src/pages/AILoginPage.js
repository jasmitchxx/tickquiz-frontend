import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AILoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {

    try {

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/check-ai-subscription`,
        {
          email: email.trim().toLowerCase(),
          password: password.trim()
        }
      );

      if (response.data.active) {

      localStorage.setItem(
  'aiSubscriptionEmail',
  email.trim().toLowerCase()
);

localStorage.setItem(
  'aiPassword',
  password.trim()
);

        navigate('/ask-ai');

      } else {

        alert(
          'No active subscription found.'
        );

      }

    } catch (err) {

      alert(
        'Unable to verify subscription.'
      );

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-black text-center mb-6">
          AI Subscriber Login
        </h1>

        <input
          type="email"
          placeholder="Enter your subscription email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full border p-3 rounded-xl mb-4"
        />
<input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) =>
    setPassword(e.target.value)
  }
  className="w-full border p-3 rounded-xl mb-4"
/>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold"
        >
          Continue
        </button>

      </div>

    </div>

  );

}

export default AILoginPage;