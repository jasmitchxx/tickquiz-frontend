import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Leaderboard() {
  const [results, setResults] = useState([]);
  const [subject, setSubject] = useState('');
  const [level, setLevel] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [adminPassword, setAdminPassword] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('quizUser')) || {};
  const isAdmin = user.email === 'jasmitch2014@gmail.com';

  const shsSubjects = [
    "Physics", "Chemistry", "Biology", "Core Maths", "Add Maths", "English",
    "Social Studies", "Geography", "Economics", "Elective ICT",
    "Accounting", "Cost Accounting", "Business Management",
  ];

  const jhsSubjects = [
    "English Language", "Maths", "Core Science", "Career Tech", "Computing",
    "RME", "French", "Creative Arts and Design", "Social Studies"
  ];

  const getSubjects = () => (level === 'SHS' ? shsSubjects : level === 'JHS' ? jhsSubjects : []);

  const fetchResults = async () => {
    if (!subject || !level) return;
    setLoading(true);
    setError(null);

    try {
      const queryParams = new URLSearchParams({
        subject,
        level,
        ...(startDate && { startDate }),
        ...(endDate && { endDate }),
      });

      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/leaderboard?${queryParams.toString()}`);
      setResults(res.data.results || []);
    } catch (err) {
      console.error(err);
      setError('? Failed to load leaderboard. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResults();
  }, [subject, level, startDate, endDate]);

  const handleReset = async () => {
    if (!window.confirm('Are you sure you want to reset the leaderboard?')) return;

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/leaderboard/reset`, {
        subject,
        level,
        password: adminPassword
      });

      setResetMessage('? Leaderboard reset successfully.');
      setResults([]);
    } catch (err) {
      console.error(err);
      setResetMessage('? Reset failed. Incorrect password or server error.');
    }
  };

  const scrollList = results;

  return (
    <div className="leaderboard">
      <h3>?? Quiz Leaderboard</h3>

      <div className="subject-selector">
        <label>
          Level:
          <select value={level} onChange={(e) => {
            setLevel(e.target.value);
            setSubject('');
          }}>
            <option value="">Select Level</option>
            <option value="SHS">SHS</option>
            <option value="JHS">JHS</option>
          </select>
        </label>

        <label>
          Subject:
          <select value={subject} onChange={(e) => setSubject(e.target.value)} disabled={!level}>
            <option value="">Select Subject</option>
            {getSubjects().map((subj) => (
              <option key={subj} value={subj}>{subj}</option>
            ))}
          </select>
        </label>

        <label>
          Start Date:
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </label>

        <label>
          End Date:
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </label>
      </div>

      {loading ? (
        <p style={{ textAlign: 'center', fontWeight: '700', color: '#2563eb' }}>
          ? Loading leaderboard...
        </p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : results.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#64748b', fontWeight: '600' }}>
          ?? No results available.
        </p>
      ) : (
        <div
          className="scroll-wrapper"
          aria-live="polite"
          aria-label="Leaderboard results scrolling list"
          style={{
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            padding: '1rem',
            display: 'flex',
            gap: '1rem',
            scrollSnapType: 'x mandatory',
          }}
        >
          {scrollList.map((result, index) => {
            const originalIndex = index % results.length;
            const res = results[originalIndex];
            const percentage = (res.score / (res.total || 60)) * 100;
            const isCurrentUser = res.code === user.code;

            const formattedDate = new Date(res.submittedAt).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            });

            let rankClass = '';
            let rankLabel = '';
            if (originalIndex === 0) {
              rankClass = 'gold';
              rankLabel = '??';
            } else if (originalIndex === 1) {
              rankClass = 'silver';
              rankLabel = '??';
            } else if (originalIndex === 2) {
              rankClass = 'bronze';
              rankLabel = '??';
            }

            let percentClass = 'percent-low';
            if (percentage >= 80) percentClass = 'percent-high';
            else if (percentage >= 60) percentClass = 'percent-medium';

            return (
              <div
                key={index}
                className={`scroll-card ${isCurrentUser ? 'highlight' : ''}`}
                role="listitem"
                style={{
                  minWidth: '250px',
                  background: '#fff',
                  borderRadius: '1rem',
                  padding: '1rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  scrollSnapAlign: 'start',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  border: rankClass ? `2px solid ${rankClass === 'gold' ? '#facc15' : rankClass === 'silver' ? '#a1a1aa' : '#f97316'}` : '1px solid #e2e8f0'
                }}
              >
                <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                  {rankLabel || `#${originalIndex + 1}`}
                </div>
                <div className="name" style={{ fontSize: '1.1rem', fontWeight: '600' }}>{res.name}</div>
                <div className="school" style={{ fontSize: '0.95rem', color: '#64748b' }}>{res.school}</div>
                <div className="score" style={{ fontSize: '0.95rem' }}>Score: {res.score}</div>
                <div className={percentClass} style={{ fontSize: '0.95rem', fontWeight: '500' }}>
                  {percentage.toFixed(1)}%
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  {formattedDate}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {isAdmin && (
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <h4>??? Admin Panel</h4>
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
              cursor: 'pointer'
            }}
          >
            ?? Reset Leaderboard
          </button>
          <p style={{ marginTop: '0.5rem', color: resetMessage.includes('?') ? 'green' : 'red' }}>
            {resetMessage}
          </p>
        </div>
      )}

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button
          style={{
            padding: '0.75rem 2rem',
            background: 'linear-gradient(90deg, #2563eb 0%, #3b82f6 100%)',
            borderRadius: '1rem',
            color: '#fff',
            fontWeight: '700',
            fontSize: '1.1rem',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 5px 15px rgba(37, 99, 235, 0.4)',
            transition: 'background 0.3s ease',
          }}
          onClick={() => navigate('/request-access')}
          onMouseEnter={e => e.currentTarget.style.background = 'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)'}
          onMouseLeave={e => e.currentTarget.style.background = 'linear-gradient(90deg, #2563eb 0%, #3b82f6 100%)'}
        >
          ?? Back to Home
        </button>
      </div>
    </div>
  );
}

export default Leaderboard;
