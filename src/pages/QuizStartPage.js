import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import questionsData from '../data/questionsData';

function QuizStartPage() {
  const navigate = useNavigate();
  const subjects = Object.keys(questionsData);

  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  // ?? Prevent quiz restart if already completed
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('quizUser'));
    if (savedUser && localStorage.getItem(`quizCompleted-${savedUser.code}`) === 'true') {
      navigate('/result');
    }
  }, [navigate]);

  const handleStartQuiz = () => {
    if (!name.trim() || !school.trim() || !selectedSubject) {
      alert('Please enter your name, school, and select a subject.');
      return;
    }

    
    const existingKey = Object.keys(localStorage).find((key) =>
      key.startsWith('quizCompleted-')
    );

    // Check for completed quiz before proceeding
    if (existingKey && localStorage.getItem(existingKey) === 'true') {
      alert('You have already completed a quiz. Redirecting to your results.');
      navigate('/result');
      return;
    }

    const code = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    const user = {
      name: name.trim(),
      school: school.trim(),
      subject: selectedSubject,
      code,
    };

    localStorage.setItem('quizUser', JSON.stringify(user));
    navigate('/quiz');
  };

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
      <h2>Welcome to TickQuiz!</h2>
      <p>Enter your details to begin:</p>

      <input
        type="text"
        placeholder="Your Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: '100%',
          padding: 10,
          marginBottom: 10,
          fontSize: 16,
          borderRadius: 5,
          border: '1px solid #ccc',
        }}
      />

      <input
        type="text"
        placeholder="Your School"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
        style={{
          width: '100%',
          padding: 10,
          marginBottom: 10,
          fontSize: 16,
          borderRadius: 5,
          border: '1px solid #ccc',
        }}
      />

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