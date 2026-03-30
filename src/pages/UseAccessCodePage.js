import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UseAccessCodePage() {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return; // ?? prevent double click

    setLoading(true);
    setMessage('');
    setSuccess(false);

    try {
      const res = await axios.post(`${API_URL}/api/use-access-code`, { code });

      if (res.data.success) {
        const usageCount = res.data.usageCount || 0;

        // ?? CLEAR OLD DATA (VERY IMPORTANT)
        localStorage.removeItem('quizUser');
        localStorage.removeItem('quizProgress');

        // ?? SAVE CLEAN USER DATA
        const newUser = {
          name: res.data.name || 'Student',
          code: code,
        };

        localStorage.setItem('quizUser', JSON.stringify(newUser));
        localStorage.setItem('quizAccessGranted', 'true');
        localStorage.setItem('quizUsageCount', usageCount);
        localStorage.setItem('quizAccessCode', code);

        // ?? VERIFY STORAGE BEFORE NAVIGATING
        const checkUser = JSON.parse(localStorage.getItem('quizUser'));
        const accessGranted = localStorage.getItem('quizAccessGranted');

        if (checkUser?.code && accessGranted === 'true') {
          setSuccess(true);
          setMessage('Access granted! Redirecting...');

          if (usageCount >= 2) {
            navigate('/request-access');
          } else {
            navigate('/start');
          }
        } else {
          setMessage('Storage error. Please try again.');
        }

      } else {
        setMessage(res.data.message || 'Invalid or expired code.');
      }
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setCode(text.toUpperCase().trim());
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
            disabled={loading}
            className={`w-full py-3 rounded-lg font-bold text-white transition ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {loading ? 'Verifying...' : 'Submit Code'}
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center font-medium ${
              success ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default UseAccessCodePage;