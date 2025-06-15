// src/components/Leaderboard.js
import React, { useEffect, useState } from 'react';
import './leaderboard.css';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch('https://tickquiz-backend.onrender.com/api/leaderboard');
        const data = await res.json();
        setLeaders(data.slice(0, 10)); // top 10 only
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };

    fetchLeaderboard();
  }, []);

  const scrollingList = [...leaders, ...leaders]; // for animation

  return (
    <div className="leaderboard">
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

export default Leaderboard;