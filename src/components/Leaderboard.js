import React, { useState, useEffect } from 'react';
import axios from 'axios';

const subjects = [
  "Physics",
  "Chemistry",
  "Add Maths",
  "Biology",
  "Core Maths",
  "Core Science",
  "Economics",
  "Geography",
  "Electiveict",
  "English",
  "Socialstudies",
  "Accounting",
  "Cost Accounting",
  "Business Management"
];

const Leaderboard = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchResults = async (subject) => {
    if (!subject) return;
    setLoading(true);
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/leaderboard?subject=${subject}`);
      setResults(res.data.results || []);
    } catch (err) {
      console.error('Failed to fetch leaderboard:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResults(selectedSubject);
  }, [selectedSubject]);

  return (
    <div className="max-w-4xl mx-auto p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center">Leaderboard</h1>

      <div className="mb-6 text-center">
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded shadow"
        >
          <option value="">Select Subject</option>
          {subjects.map((subj) => (
            <option key={subj} value={subj}>
              {subj}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading leaderboard...</p>
      ) : results.length === 0 ? (
        <p className="text-center text-gray-500">No results yet. Be the first to take the quiz!</p>
      ) : (
        <table className="w-full table-auto bg-white shadow-md rounded">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">#</th>
              <th className="p-3">Name</th>
              <th className="p-3">School</th>
              <th className="p-3">Score</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={result._id} className="border-t hover:bg-gray-100">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{result.name}</td>
                <td className="p-3">{result.school}</td>
                <td className="p-3 font-bold">{result.score}</td>
                <td className="p-3">
                  {new Date(result.submittedAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Leaderboard;