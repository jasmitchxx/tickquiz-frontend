import React, { useEffect, useState } from 'react';
import './leaderboard.css';

const subjects = ['math', 'english', 'science', 'socialstudies'];

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const [subject, setSubject] = useState('math');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchLeaderboard = async (selectedSubject) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/leaderboard?subject=${selectedSubject}`);
      const data = await res.json();

      if (!Array.isArray(data)) {
        throw new Error('Invalid response format');
      }

      setLeaders(data.slice(0, 10));
    } catch (err) {
      console.error('Error fetching leaderboard:', err);
      setError('Unable to load leaderboard. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard(subject);
  }, [subject]);

  const scrollingList = leaders.length > 0 ? [...leaders, ...leaders] : [];

  return (
    <div className="leaderboard">
      <h3>?? Top Performers - {subject.charAt(0).toUpperCase() + subject.slice(1)}</h3>

      <div className="subject-selector">
        <label htmlFor="subject-select">Choose subject:</label>
        <select
          id="subject-select"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          {subjects.map((subj) => (
            <option key={subj} value={subj}>
              {subj.charAt(0).toUpperCase() + subj.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {loading && <p>Loading leaderboard...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && leaders.length === 0 && (
        <p>No results yet. Be the first to take the quiz!</p>
      )}

      {!loading && !error && leaders.length > 0 && (
        <div className="scroll-wrapper">
          <ul className="scrolling-list">
            {scrollingList.map((entry, index) => (
              <li key={index}>
                <span className="rank">#{(index % leaders.length) + 1}</span>
                <span className="name">{entry.name}</span>
                <span className="school">{entry.school}</span>
                <span className="score">{entry.score}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;