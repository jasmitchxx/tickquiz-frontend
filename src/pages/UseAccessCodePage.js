import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UseAccessCodePage() {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setSuccess(false);

    try {
      const res = await axios.post(`${API_URL}/api/use-access-code`, { code });

      if (res.data.success) {
        setSuccess(true);
        setMessage('Access granted! Redirecting...');

        const usageCount = res.data.usageCount || 0;

        // ? SAVE EVERYTHING FIRST
        localStorage.setItem('quizAccessGranted', 'true');
        localStorage.setItem('quizUsageCount', usageCount);
        localStorage.setItem('quizAccessCode', code);

        const storedUser = JSON.parse(localStorage.getItem('quizUser')) || {};
        localStorage.setItem(
          'quizUser',
          JSON.stringify({
            ...storedUser,
            name: res.data.name || storedUser.name || 'Student',
            code: code,
          })
        );

        // ? FIX: Give time for storage before navigating
        setTimeout(() => {
          if (usageCount >= 2) {
            navigate('/request-access');
          } else {
            navigate('/start');
          }
        }, 500); // ?? reduced + stable
      } else {
        setMessage(res.data.message || 'Invalid or expired code.');
      }
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setCode(text.toUpperCase());
    } catch (err) {
      alert('Failed to paste from clipboard.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Enter Access Code
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Enter your code"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="button"
              onClick={handlePaste}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg"
            >
              Paste
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg"
          >
            Submit Code
          </button>
        </form>

        {message && (
          <p className={`mt-4 text-center font-medium ${success ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default UseAccessCodePage;