import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Filters from './Filters';
import LeaderboardRow from './LeaderboardRow';
import AdminPanel from './AdminPanel';

function Leaderboard() {
  const [results, setResults] = useState([]);
  const [subject, setSubject] = useState('');
  const [level, setLevel] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const user = JSON.parse(localStorage.getItem('quizUser')) || {};
  const isAdmin = user.email === 'jasmitch2014@gmail.com';
  const navigate = useNavigate();

  const subjects = [
    "Physics", "Chemistry", "Add Maths", "Biology", "Core Maths", "Core Science",
    "Economics", "Geography", "Electiveict", "English", "Socialstudies",
    "Accounting", "Cost Accounting", "Business Management",
    "RME", "Bdt", "Creative Art", "History", "Ghanaian Language", "French",
    "Science", "Mathematics"
  ];

  useEffect(() => {
    const fetchResults = async () => {
      if (!subject) return;

      setLoading(true);
      setError(null);

      try {
        const queryParams = new URLSearchParams({
          subject: subject.trim(),
          ...(level && { level: level.trim() }),
          ...(startDate && { startDate }),
          ...(endDate && { endDate }),
        });

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/leaderboard?${queryParams}`);
        setResults(res.data.results || []);
      } catch (err) {
        console.error(err);
        setError('?? Failed to load leaderboard. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [subject, level, startDate, endDate]);

  const scrollList = [...results, ...results]; // infinite scroll animation

  return (
    <div className="leaderboard">
      <h3 style={{ textAlign: 'center' }}>?? Quiz Leaderboard</h3>

      <Filters
        subject={subject}
        level={level}
        startDate={startDate}
        endDate={endDate}
        onSubjectChange={setSubject}
        onLevelChange={setLevel}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        subjects={subjects} // Pass subject list to Filters
      />

      {loading ? (
        <p style={{ textAlign: 'center', color: '#2563eb' }}>? Loading leaderboard...</p>
      ) : error ? (
        <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>
      ) : results.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#64748b' }}>?? No results found.</p>
      ) : (
        <div className="scroll-wrapper">
          <ul className="scrolling-list">
            <li className="header-row">
              <span className="rank">Rank</span>
              <span className="name">Name</span>
              <span className="school">School</span>
              <span className="score">Score</span>
              <span className="percentage">%</span>
              <span className="date">Date</span>
            </li>

            {scrollList.map((res, index) => (
              <LeaderboardRow
                key={index}
                index={index}
                result={res}
                userCode={user.code}
                total={res.total || 60}
                originalLength={results.length}
              />
            ))}
          </ul>
        </div>
      )}

      {isAdmin && (
        <AdminPanel
          level={level}
          subject={subject}
          onResetSuccess={() => setResults([])}
        />
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
          }}
          onClick={() => navigate('/request-access')}
        >
          ?? Back to Home
        </button>
      </div>
    </div>
  );
}

export default Leaderboard;