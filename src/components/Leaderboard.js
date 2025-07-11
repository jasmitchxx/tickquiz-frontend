import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Leaderboard() {
  const [results, setResults] = useState([]);
  const [subject, setSubject] = useState('');
  const [level, setLevel] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [adminPassword, setAdminPassword] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('quizUser')) || {};
  const isAdmin = user.email === 'jasmitch2014@gmail.com';

  const shsSubjects = [
    "Physics", "Chemistry", "Add Maths", "Biology", "Core Maths",
    "Core Science", "Economics", "Geography", "Electiveict",
    "English", "Socialstudies", "Accounting", "Cost Accounting",
    "Business Management"
  ];

  const jhsSubjects = [
    "English Language", "Maths", "Socialstudies", "Career Tech",
    "Computing", "RME", "French", "Creative Arts and Design", "Core Science"
  ];

  const getSubjects = () => (level === 'SHS' ? shsSubjects : level === 'JHS' ? jhsSubjects : []);

  const fetchResults = async () => {
    if (!subject || !level) return;
    setLoading(true);
    setError(null);

    try {
      const queryParams = new URLSearchParams({
        subject,
        level,
        ...(startDate && { startDate }),
        ...(endDate && { endDate }),
      });

      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/leaderboard?${queryParams.toString()}`);
      setResults(res.data.results || []);
    } catch (err) {
      console.error(err);
      setError('?? Failed to load leaderboard. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResults();
  }, [subject, level, startDate, endDate]);

  const handleReset = async () => {
    if (!window.confirm('Are you sure you want to reset the leaderboard?')) return;

    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/leaderboard`, {
        data: {
          subject,
          secret: adminPassword
        }
      });

      setResetMessage('? Leaderboard reset successfully.');
      setResults([]);
    } catch (err) {
      console.error(err);
      setResetMessage('? Reset failed. Incorrect password or server error.');
    }
  };

  const scrollList = [...results, ...results];

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">?? Quiz Leaderboard</h2>

      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium">Level:</label>
          <select value={level} onChange={(e) => {
            setLevel(e.target.value);
            setSubject('');
          }} className="w-full p-2 border rounded">
            <option value="">Select Level</option>
            <option value="SHS">SHS</option>
            <option value="JHS">JHS</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Subject:</label>
          <select value={subject} onChange={(e) => setSubject(e.target.value)} disabled={!level} className="w-full p-2 border rounded">
            <option value="">Select Subject</option>
            {getSubjects().map((subj) => (
              <option key={subj} value={subj}>{subj}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Start Date:</label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block text-sm font-medium">End Date:</label>
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full p-2 border rounded" />
        </div>
      </div>

      {loading ? (
        <p className="text-center text-blue-500 font-semibold">Loading leaderboard...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : results.length === 0 ? (
        <p className="text-center text-gray-500 font-medium">No results available.</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded shadow-md">
          <ul className="divide-y">
            {scrollList.map((res, index) => {
              const originalIndex = index % results.length;
              const entry = results[originalIndex];
              const percentage = (entry.score / (entry.total || 60)) * 100;
              const isCurrentUser = entry.code === user.code;

              const formattedDate = new Date(entry.submittedAt).toLocaleDateString(undefined, {
                year: 'numeric', month: 'short', day: 'numeric'
              });

              let rankClass = '';
              if (originalIndex === 0) rankClass = 'text-yellow-500 font-bold';
              else if (originalIndex === 1) rankClass = 'text-gray-400 font-semibold';
              else if (originalIndex === 2) rankClass = 'text-orange-400 font-semibold';

              let percentClass = 'text-red-500';
              if (percentage >= 80) percentClass = 'text-green-600 font-bold';
              else if (percentage >= 60) percentClass = 'text-yellow-500';

              return (
                <li key={index} className={`flex items-center justify-between px-4 py-3 ${isCurrentUser ? 'bg-blue-50' : ''}`}>
                  <div className={`w-6 text-center ${rankClass}`}>{originalIndex + 1}</div>
                  <div className="flex-1 ml-4 font-medium">{entry.name}</div>
                  <div className="flex-1 text-sm text-gray-600">{entry.school}</div>
                  <div className="w-12 text-center">{entry.score}</div>
                  <div className={`w-20 text-center ${percentClass}`}>{percentage.toFixed(1)}%</div>
                  <div className="text-xs text-gray-400 ml-4">{formattedDate}</div>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Admin Panel */}
      {isAdmin && (
        <div className="mt-10 text-center">
          <h4 className="text-lg font-semibold mb-2">?? Admin Panel</h4>
          <input
            type="password"
            placeholder="Enter Admin Password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            className="p-2 border rounded w-64 mb-2"
          />
          <br />
          <button
            onClick={handleReset}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded"
          >
            ?? Reset Leaderboard
          </button>
          {resetMessage && (
            <p className={`mt-2 ${resetMessage.startsWith('?') ? 'text-green-600' : 'text-red-500'}`}>
              {resetMessage}
            </p>
          )}
        </div>
      )}

      {/* Back to Home */}
      <div className="text-center mt-10">
        <button
          onClick={() => navigate('/request-access')}
          className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-700 text-white font-bold px-6 py-3 rounded-full shadow"
        >
          ? Back to Home
        </button>
      </div>
    </div>
  );
}

export default Leaderboard;