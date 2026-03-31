import { useState, useEffect } from 'react';
import axios from 'axios';

function UseAccessCodePage() {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL;

  // ? AUTO-READ CODE FROM URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlCode = params.get('code');

    if (urlCode) {
      const cleanCode = urlCode.trim().toUpperCase();
      setCode(cleanCode);

      // ?? AUTO SUBMIT
      verifyCode(cleanCode);
    }
  }, []);

  // ? MOVE LOGIC INTO FUNCTION (REUSABLE)
  const verifyCode = async (inputCode) => {
    if (loading) return;

    setLoading(true);
    setMessage('');
    setSuccess(false);

    try {
      const res = await axios.post(`${API_URL}/api/use-access-code`, {
        code: inputCode,
      });

      if (res.data.success) {
        const usageCount = res.data.usageCount || 0;

        // ?? CLEAR OLD DATA
        localStorage.clear();

        // ?? SAVE USER
        localStorage.setItem(
          'quizUser',
          JSON.stringify({
            name: res.data.name || 'Student',
            code: inputCode,
          })
        );

        localStorage.setItem('quizAccessGranted', 'true');
        localStorage.setItem('quizUsageCount', usageCount);
        localStorage.setItem('quizAccessCode', inputCode);

        setSuccess(true);
        setMessage('Access granted! Redirecting...');

        // ?? HARD REDIRECT
        setTimeout(() => {
          if (usageCount >= 2) {
            window.location.href = '/request-access';
          } else {
            window.location.href = '/start';
          }
        }, 800);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyCode(code.trim().toUpperCase());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Enter Access Code
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            placeholder="Enter your code"
            className="w-full px-4 py-3 border rounded-lg"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-bold ${
              loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {loading ? 'Verifying...' : 'Submit Code'}
          </button>
        </form>

        {message && (
          <p className={`mt-4 text-center ${success ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default UseAccessCodePage;