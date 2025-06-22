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
        setMessage(res.data.message);
        setSuccess(true);

        const usageCount = res.data.usageCount || 0;

        // Store access flag and usage count
        localStorage.setItem('quizAccessGranted', 'true');
        localStorage.setItem('quizUsageCount', usageCount);
        localStorage.setItem('quizAccessCode', code);

        // Store or update quizUser
        const storedUser = JSON.parse(localStorage.getItem('quizUser')) || {};
        localStorage.setItem(
          'quizUser',
          JSON.stringify({
            ...storedUser,
            name: res.data.name || storedUser.name || 'Student',
            code: code,
          })
        );

        // Redirect to start page directly
        setTimeout(() => {
          if (usageCount >= 2) {
            alert('You have used all your attempts.');
            navigate('/request-access');
          } else {
            navigate('/start'); // ? go straight to quiz start
          }
        }, 1500);
      } else {
        setMessage(res.data.message || 'Invalid or expired code.');
      }
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          ?? Enter Access Code
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter your code"
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
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