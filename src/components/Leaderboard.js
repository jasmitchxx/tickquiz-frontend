import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [levelFilter, setLevelFilter] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('');

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/leaderboard`);
        setLeaderboard(res.data || []);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch leaderboard:', err);
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  const filteredData = leaderboard.filter(entry => {
    const matchesLevel = levelFilter ? entry.level === levelFilter : true;
    const matchesSubject = subjectFilter ? entry.subject === subjectFilter : true;
    return matchesLevel && matchesSubject;
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>

      <div className="mb-4 flex gap-4">
        <select
          className="border px-4 py-2 rounded"
          value={levelFilter}
          onChange={(e) => setLevelFilter(e.target.value)}
        >
          <option value="">All Levels</option>
          <option value="JHS">JHS</option>
          <option value="SHS">SHS</option>
        </select>

        <select
          className="border px-4 py-2 rounded"
          value={subjectFilter}
          onChange={(e) => setSubjectFilter(e.target.value)}
        >
          <option value="">All Subjects</option>
          {[...new Set(leaderboard.map((entry) => entry.subject))].map((subject, index) => (
            <option key={index} value={subject}>{subject}</option>
          ))}
        </select>
      </div>

      {loading ? (
        <p>Loading leaderboard...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border-b">#</th>
                <th className="px-4 py-2 border-b">Name</th>
                <th className="px-4 py-2 border-b">School</th>
                <th className="px-4 py-2 border-b">Level</th>
                <th className="px-4 py-2 border-b">Subject</th>
                <th className="px-4 py-2 border-b">Score</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.slice(0, 100).map((entry, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{entry.name}</td>
                  <td className="px-4 py-2 border-b">{entry.school}</td>
                  <td className="px-4 py-2 border-b">{entry.level}</td>
                  <td className="px-4 py-2 border-b">{entry.subject}</td>
                  <td className="px-4 py-2 border-b">{entry.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Leaderboard;