// src/pages/QuizStartPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questionsData from '../data/questionsData';

function QuizStartPage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('quizUser')) || {};
  const [selectedSubject, setSelectedSubject] = useState('');
  const subjects = Object.keys(questionsData);

  const handleStartQuiz = () => {
    if (!selectedSubject) return alert('Please select a subject');
    localStorage.setItem(
      'quizUser',
      JSON.stringify({ ...user, subject: selectedSubject })
    );
    navigate('/quiz');
  };

  if (!user.code) {
    return (
      <div style={{ maxWidth: 400, margin: '2rem auto', textAlign: 'center' }}>
        <h2>No Access Code Found</h2>
        <p>Please request access first.</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', textAlign: 'center' }}>
      <h2>Welcome, {user.name || 'Student'}</h2>
      <label htmlFor="subject-select">Select Subject:</label>
      <br />
      <select
        id="subject-select"
        value={selectedSubject}
        onChange={(e) => setSelectedSubject(e.target.value)}
        style={{ padding: '10px', margin: '10px 0', width: '100%' }}
      >
        <option value="">-- Choose a Subject --</option>
        {subjects.map((subj) => (
          <option key={subj} value={subj}>
            {subj}
          </option>
        ))}
      </select>
      <br />
      <button
        onClick={handleStartQuiz}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default QuizStartPage;