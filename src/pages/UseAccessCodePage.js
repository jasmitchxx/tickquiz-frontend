// src/pages/UseAccessCodePage.js
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

        localStorage.setItem(
          'quizUser',
          JSON.stringify({
            name: res.data.name || 'Student',
            code: code,
            // Do NOT set subject here – it will be selected next
          })
        );

        setTimeout(() => {
          navigate('/select-subject'); // ? Redirect to subject selection
        }, 2000);
      } else {
        setMessage(res.data.message || 'Invalid or expired code.');
      }
    } catch (err) {
      console.error(err);
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div style={{
      maxWidth: 400,
      margin: '2rem auto',
      padding: '1rem',
      border: '1px solid #ccc',
      borderRadius: 8
    }}>
      <h2>Enter Access Code</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your code"
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          style={{ width: '100%', marginBottom: 10, padding: 8 }}
          required
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: 10,
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: 4
          }}
        >
          Submit Code
        </button>
      </form>
      {message && (
        <p style={{ color: success ? 'green' : 'red', marginTop: 10 }}>
          {message}
        </p>
      )}
    </div>
  );
}

export default UseAccessCodePage;