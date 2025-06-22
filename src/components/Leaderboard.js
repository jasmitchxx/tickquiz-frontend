import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Leaderboard() {
  const [results, setResults] = useState([]);
  const [subject, setSubject] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('quizUser')) || {};

  const fetchResults = async (selectedSubject) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/leaderboard?subject=${selectedSubject}`
      );
      setResults(res.data.results || []);
    } catch (err) {
      console.error(err);
      setError('? Failed to load leaderboard. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (subject) fetchResults(subject);
  }, [subject]);

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">?? Quiz Leaderboard</h1>

        {/* Subject Dropdown */}
        <div className="mb-4 text-center">
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="border px-4 py-2 rounded shadow text-lg"
          >
            <option value="">?? Select Subject</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Biology">Biology</option>
            <option value="CoreMaths">Core Maths</option>
            <option value="AddMaths">Add Maths</option>
            <option value="English">English</option>
            <option value="SocialStudies">Social Studies</option>
            <option value="Geography">Geography</option>
            <option value="Economics">Economics</option>
            <option value="ElectiveICT">Elective ICT</option>
            <option value="Accounting">Accounting</option>
            <option value="CostAccounting">Cost Accounting</option>
            <option value="BusinessManagement">Business Management</option>
          </select>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">? Loading leaderboard...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : results.length === 0 ? (
          <p className="text-center text-gray-500">?? No results available.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-blue-100 text-left">
                  <th className="p-3">#</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">School</th>
                  <th className="p-3">Score</th>
                  <th className="p-3">Percentage (%)</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, index) => {
                  const percentage = (result.score / (result.total || 60)) * 100;
                  const isCurrentUser = result.code === user.code;

                  // Rank emojis for top 3
                  let rankIcon = '';
                  if (index === 0) rankIcon = '??';
                  else if (index === 1) rankIcon = '??';
                  else if (index === 2) rankIcon = '??';

                  // Color based on percentage
                  const percentageColor =
                    percentage >= 80
                      ? 'text-green-600'
                      : percentage >= 60
                      ? 'text-yellow-600'
                      : 'text-red-600';

                  return (
                    <tr
                      key={index}
                      className={`border-t ${
                        isCurrentUser
                          ? 'bg-yellow-100 font-bold'
                          : index % 2 === 0
                          ? 'bg-white'
                          : 'bg-blue-50'
                      }`}
                    >
                      <td className="p-3 font-mono">{rankIcon || index + 1}</td>
                      <td className="p-3">{result.name}</td>
                      <td className="p-3">{result.school}</td>
                      <td className="p-3">{result.score}</td>
                      <td className={`p-3 ${percentageColor}`}>
                        {percentage.toFixed(1)}%
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        <div className="text-center mt-6">
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => navigate('/request-access')}
          >
            ?? Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;