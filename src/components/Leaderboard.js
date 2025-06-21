import React, { useState, useEffect } from 'react';
import axios from 'axios';

const subjects = [
  "Physics", "Chemistry", "Add Maths", "Biology", "Core Maths",
  "Core Science", "Economics", "Geography", "Electiveict",
  "English", "Socialstudies", "Accounting", "Cost Accounting",
  "Business Management"
];

const Leaderboard = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedSchool, setSelectedSchool] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchResults = async (subject) => {
    if (!subject) return;
    setLoading(true);

    const normalized = subject.toLowerCase().replace(/\s+/g, '');

    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/leaderboard?subject=${normalized}`);
      // ? Safely support both array and object response formats
      setResults(Array.isArray(res.data) ? res.data : res.data.results || []);
    } catch (err) {
      console.error('Failed to fetch leaderboard:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setSelectedSchool('');
    fetchResults(selectedSubject);
  }, [selectedSubject]);

  const handleResetLeaderboard = async () => {
    const password = window.prompt('Enter admin password to reset leaderboard:');
    if (!password) return;

    const normalized = selectedSubject.toLowerCase().replace(/\s+/g, '');

    try {
      const res = await axios.delete(`${process.env.REACT_APP_API_URL}/api/leaderboard`, {
        data: { secret: password, subject: normalized }
      });

      if (res.data.success) {
        alert('Leaderboard reset successfully.');
        setResults([]);
      } else {
        alert('Failed to reset leaderboard.');
      }
    } catch (err) {
      console.error('Reset error:', err);
      alert('Error resetting leaderboard. Please check the password or try again later.');
    }
  };

  const uniqueSchools = [...new Set(results.map(r => r.school).filter(Boolean))];
  const filteredResults = selectedSchool
    ? results.filter(r => r.school === selectedSchool)
    : results;

  return (
    <div className="max-w-5xl mx-auto p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-700">Leaderboard</h1>

      <div className="mb-8 flex flex-col items-center space-y-4">
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded shadow-md w-64"
        >
          <option value="">Select Subject</option>
          {subjects.map((subj) => (
            <option key={subj} value={subj}>{subj}</option>
          ))}
        </select>

        {selectedSubject && (
          <>
            <select
              value={selectedSchool}
              onChange={(e) => setSelectedSchool(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded shadow-md w-64"
            >
              <option value="">All Schools</option>
              {uniqueSchools.map((school) => (
                <option key={school} value={school}>{school}</option>
              ))}
            </select>

            <button
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 shadow-md"
              onClick={handleResetLeaderboard}
            >
              Reset Leaderboard (Admin)
            </button>
          </>
        )}
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading leaderboard...</p>
      ) : filteredResults.length === 0 ? (
        <p className="text-center text-gray-500">No results yet for this filter.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded-lg">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 text-left">#</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">School</th>
                <th className="p-3 text-left">Score</th>
                <th className="p-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredResults.map((result, index) => {
                const rowBg =
                  index === 0
                    ? 'bg-yellow-100'
                    : index === 1
                    ? 'bg-gray-100'
                    : index === 2
                    ? 'bg-orange-100'
                    : index % 2 === 0
                    ? 'bg-white'
                    : 'bg-gray-50';

                return (
                  <tr key={result._id || index} className={`${rowBg} hover:bg-blue-50`}>
                    <td className="p-3 font-semibold">{index + 1}</td>
                    <td className="p-3">{result.name}</td>
                    <td className="p-3">{result.school}</td>
                    <td className="p-3 font-bold text-blue-700">{result.score}</td>
                    <td className="p-3 text-sm text-gray-500">{new Date(result.submittedAt).toLocaleDateString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;