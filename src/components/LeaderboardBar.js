import React, { useEffect, useState } from 'react';
import './LeaderboardBar.css';

const LeaderboardBar = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch('https://tickquiz-backend.onrender.com/api/leaderboard');// Replace with your real backend URL
        const data = await res.json();
        setLeaders(data);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };

    fetchLeaderboard();
  }, []);

  // Duplicate list for seamless infinite scroll
  const scrollingList = [...leaders, ...leaders];

  return (
    <div className="leaderboard-bar">
      <h3>?? Top Quiz Performers</h3>
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
    </div>
  );
};

export default LeaderboardBar;