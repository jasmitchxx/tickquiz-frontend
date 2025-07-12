import React, { useState } from 'react';
import axios from 'axios';

function AdminPanel({ subject, onResetSuccess }) {
  const [adminPassword, setAdminPassword] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const user = JSON.parse(localStorage.getItem('quizUser')) || {};
  const isAdmin = user.email === 'jasmitch2014@gmail.com';

  const handleReset = async () => {
    if (!window.confirm('Are you sure you want to reset the leaderboard?')) return;

    try {
      const res = await axios.delete(`${process.env.REACT_APP_API_URL}/api/leaderboard`, {
        data: { subject, secret: adminPassword },
      });

      setResetMessage(`✅ ${res.data.message}`);
      setAdminPassword('');
      onResetSuccess(); // Call parent to refresh results
    } catch (err) {
      console.error(err);
      setResetMessage('❌ Reset failed. Incorrect password or server error.');
    }
  };

  if (!isAdmin) return null;

  return (
    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
      <h4>🔐 Admin Panel</h4>
      <input
        type="password"
        placeholder="Enter Admin Password"
        value={adminPassword}
        onChange={(e) => setAdminPassword(e.target.value)}
        style={{ padding: '0.5rem', borderRadius: '0.5rem', marginBottom: '0.5rem' }}
      />
      <br />
      <button
        onClick={handleReset}
        style={{
          padding: '0.6rem 1.5rem',
          background: '#ef4444',
          color: '#fff',
          border: 'none',
          borderRadius: '0.5rem',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        🔁 Reset Leaderboard
      </button>
      <p style={{ marginTop: '0.5rem', color: resetMessage.includes('✅') ? 'green' : 'red' }}>
        {resetMessage}
      </p>
    </div>
  );
}

export default AdminPanel;
