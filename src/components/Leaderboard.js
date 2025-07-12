import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LeaderboardPage() {
  const [subject, setSubject] = useState('');
  const [level, setLevel] = useState('');
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(false);

  const shsSubjects = [
    'Physics', 'Chemistry', 'Biology', 'Core Maths', 'Add Maths',
    'English', 'Social Studies', 'Geography', 'Economics',
    'Elective ICT', 'Accounting', 'Cost Accounting', 'Business Management'
  ];

  const jhsSubjects = [
    'English Language', 'Maths', 'Core Science', 'Career Tech', 'Computing',
    'RME', 'French', 'Creative Arts and Design', 'Social Studies'
  ];

  const allSubjects = [...new Set([...shsSubjects, ...jhsSubjects])];

  const levels = ['JHS', 'SHS'];

  const normalize = (str) => str?.toLowerCase().replace(/\s+/g, '');

  const fetchLeaderboard = async () => {
    if (!subject || !level) return;

    setLoading(true);
    const normalizedSubject = normalize(subject);
    const normalizedLevel = level.toUpperCase();

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/leaderboard?subject=${normalizedSubject}&level=${normalizedLevel}`
      );
      setLeaderboard(res.data);
    } catch (err) {
      console.error('Error fetching leaderboard:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, [subject, level]);

  return (
    <div className="p-6 max-w-5xl mx-auto min-h-screen bg-blue-50">
      <h1 className="text-3xl font-bold text-center mb-6">Leaderboard</h1>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <select
          className="px-4 py-2 rounded border bg-white shadow"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="">Select Subject</option>
          {allSubjects.map((subj) => (
            <option key={subj} value={subj}>{subj}</option>
          ))}
        </select>

        <select
          className="px-4 py-2 rounded border bg-white shadow"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="">Select Level</option>
          {levels.map((lvl) => (
            <option key={lvl} value={lvl}>{lvl}</option>
          ))}
        </select>
      </div>

      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : leaderboard.length === 0 ? (
        <p className="text-center text-gray-600">No results found. Try a different subject or level.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto bg-white shadow rounded">
            <thead>
              <tr className="bg-blue-200 text-left">
                <th className="px-4 py-2">Rank</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">School</th>
                <th className="px-4 py-2">Score</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry, index) => (
                <tr key={index} className="border-t hover:bg-blue-100">
                  <td className="px-4 py-2 font-bold">{index + 1}</td>
                  <td className="px-4 py-2">{entry.name}</td>
                  <td className="px-4 py-2">{entry.school}</td>
                  <td className="px-4 py-2">{entry.score}</td>
                  <td className="px-4 py-2">
                    {new Date(entry.timestamp).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default LeaderboardPage;