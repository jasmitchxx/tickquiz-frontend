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
    if (!selectedSubject) {
      alert('Please select a subject');
      return;
    }

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
        <p>Please request access or enter your code first.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: 400,
        margin: '2rem auto',
        padding: '1rem',
        border: '1px solid #ddd',
        borderRadius: 10,
        textAlign: 'center',
      }}
    >
      <h2>Welcome, {user.name || 'Student'}</h2>
      <p>Please select a subject to begin your quiz.</p>

      <select
        value={selectedSubject}
        onChange={(e) => setSelectedSubject(e.target.value)}
        style={{
          width: '100%',
          padding: 10,
          marginBottom: 20,
          fontSize: 16,
          borderRadius: 5,
          border: '1px solid #ccc',
        }}
      >
        <option value="">-- Choose a Subject --</option>
        {subjects.map((subject) => (
          <option key={subject} value={subject}>
            {subject}
          </option>
        ))}
      </select>

      <button
        onClick={handleStartQuiz}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#28a745',
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