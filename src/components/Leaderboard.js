import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LeaderboardPage() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [level, setLevel] = useState('SHS');

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/leaderboard?level=${level}`
        );
        // ? FIX: Access results properly from API response
        setEntries(res.data.results || []);
      } catch (err) {
        console.error('Failed to fetch leaderboard:', err);
        setEntries([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, [level]);

  // Group and sort top 10 per subject
  const topEntriesBySubject = () => {
    const grouped = {};

    for (const entry of entries) {
      const subject = entry.subject.toLowerCase();
      if (!grouped[subject]) grouped[subject] = [];
      grouped[subject].push(entry);
    }

    const sortedTop = {};
    for (const subject in grouped) {
      sortedTop[subject] = grouped[subject]
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);
    }

    return sortedTop;
  };

  const groupedData = topEntriesBySubject();

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">
        Leaderboard – Top 10 by Subject
      </h1>

      <div className="mb-4 text-center">
        <label className="mr-2 font-medium">Select Level:</label>
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="SHS">SHS</option>
          <option value="JHS">JHS</option>
        </select>
      </div>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : Object.keys(groupedData).length === 0 ? (
        <p className="text-center">No results found for {level}.</p>
      ) : (
        Object.entries(groupedData).map(([subject, records]) => (
          <div key={subject} className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 capitalize border-b pb-1">
              {subject}
            </h2>
            <table className="min-w-full border-collapse border text-sm">
              <thead className="bg-blue-200">
                <tr>
                  <th className="p-2 border text-left">#</th>
                  <th className="p-2 border text-left">Name</th>
                  <th className="p-2 border text-left">School</th>
                  <th className="p-2 border text-left">Score</th>
                </tr>
              </thead>
              <tbody>
                {records.map((entry, index) => (
                  <tr key={index} className="odd:bg-white even:bg-blue-50">
                    <td className="p-2 border">{index + 1}</td>
                    <td className="p-2 border">{entry.name}</td>
                    <td className="p-2 border">{entry.school}</td>
                    <td className="p-2 border font-bold">{entry.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
  );
}

export default LeaderboardPage;