import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import questionsData from '../data/questionsData';

const QuizStartPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [subject, setSubject] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const access = localStorage.getItem('quizAccessGranted');
    const code = localStorage.getItem('accessCodeUsed');
    if (access !== 'true' || !code) {
      navigate('/request-access');
    }

    const completed = localStorage.getItem(`quizCompleted-${code}`) === 'true';
    if (completed) {
      navigate('/result');
    }
  }, [navigate]);

  const handleStart = () => {
    if (!name || !school || !subject) {
      setError('Please fill in all fields.');
      return;
    }

    const code = localStorage.getItem('accessCodeUsed');
    const quizUser = {
      name,
      school,
      subject,
      code,
    };

    localStorage.setItem('quizUser', JSON.stringify(quizUser));
    localStorage.removeItem('quizProgress'); // Clear old quiz progress
    navigate('/quiz');
  };

  const subjectOptions = Object.keys(questionsData);

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Welcome to TickQuiz!</h2>
      <p className="mb-4 text-center text-gray-600">Enter your details to begin:</p>

      {error && <div className="mb-4 text-red-500 font-medium">{error}</div>}

      <div className="mb-4">
        <label className="block mb-1 font-medium">Your Full Name</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Your School</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label className="block mb-1 font-medium">-- Choose a Subject --</label>
        <select
          className="w-full px-4 py-2 border rounded"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="">Select a Subject</option>
          {subjectOptions.map((subj) => (
            <option key={subj} value={subj}>{subj}</option>
          ))}
        </select>
      </div>

      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-semibold"
        onClick={handleStart}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default QuizStartPage;