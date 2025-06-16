// src/components/Leaderboard.js
import React, { useEffect, useState } from 'react';
import './leaderboard.css';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch('https://tickquiz-backend.onrender.com/api/leaderboard');
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

    fetchLeaderboard();
  }, []);

  const scrollingList = leaders.length > 0 ? [...leaders, ...leaders] : [];

  return (
    <div className="leaderboard">
      <h3>?? Top Quiz Performers</h3>

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