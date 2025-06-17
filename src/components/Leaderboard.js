import React, { useEffect, useState } from 'react';

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
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/leaderboard?subject=${selectedSubject}`
      );
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
    <div className="max-w-2xl mx-auto p-6 bg-blue-50 rounded-xl shadow-lg min-h-[400px]">
      <h3 className="text-2xl font-bold mb-4 text-center">
        ?? Top Performers – {subject.charAt(0).toUpperCase() + subject.slice(1)}
      </h3>

      <div className="mb-4 text-center">
        <label htmlFor="subject-select" className="mr-2 font-medium">
          Choose subject:
        </label>
        <select
          id="subject-select"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1"
        >
          {subjects.map((subj) => (
            <option key={subj} value={subj}>
              {subj.charAt(0).toUpperCase() + subj.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {loading && <p className="text-center text-gray-600">Loading leaderboard...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && leaders.length === 0 && (
        <p className="text-center text-gray-500">No results yet. Be the first to take the quiz!</p>
      )}

      {!loading && !error && leaders.length > 0 && (
        <div className="relative h-64 overflow-hidden">
          <ul className="animate-scroll space-y-2">
            {scrollingList.map((entry, index) => (
              <li
                key={index}
                className="bg-white shadow rounded px-4 py-2 flex justify-between items-center"
              >
                <span className="font-semibold text-blue-700">#{(index % leaders.length) + 1}</span>
                <span className="w-1/3 text-gray-800 truncate">{entry.name}</span>
                <span className="w-1/3 text-gray-600 text-sm truncate">{entry.school}</span>
                <span className="font-bold text-green-700">{entry.score}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;