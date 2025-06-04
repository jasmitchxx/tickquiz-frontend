// src/pages/QuizStartPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function QuizStartPage() {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz');
  };

  const user = JSON.parse(localStorage.getItem('quizUser')) || {};
  const { name, subject } = user;

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
      <h2>Welcome, {name || 'Student'}</h2>
      <p>Subject: {subject || 'General'}</p>
      <button
        onClick={handleStartQuiz}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default QuizStartPage;