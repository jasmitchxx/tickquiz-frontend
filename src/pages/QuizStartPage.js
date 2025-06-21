import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import questionsData from '../data/questionsData';

function QuizStartPage() {
  const navigate = useNavigate();
  const subjects = Object.keys(questionsData);

  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('quizUser'));
    const completedKey = savedUser?.code && `quizCompleted-${savedUser.code}`;
    const isCompleted = completedKey && localStorage.getItem(completedKey) === 'true';

    // ? Optional: check if user has paid (if you set it after Paystack)
    const hasPaid = savedUser?.paid === true;

    // Redirect if already completed or not paid (optional)
    if (isCompleted) {
      navigate('/result', { replace: true });
    }

    // ? Prevent back-button from going back here after completion
    const blockBack = () => {
      window.history.pushState(null, null, window.location.href);
    };
    window.history.pushState(null, null, window.location.href);
    window.addEventListener('popstate', blockBack);

    return () => {
      window.removeEventListener('popstate', blockBack);
    };
  }, [navigate]);

  const handleStartQuiz = () => {
    if (!name.trim() || !school.trim() || !selectedSubject) {
      alert('Please enter your name, school, and select a subject.');
      return;
    }

    // Prevent retaking quiz
    const existingKey = Object.keys(localStorage).find((key) =>
      key.startsWith('quizCompleted-')
    );

    if (existingKey && localStorage.getItem(existingKey) === 'true') {
      alert('You have already completed a quiz. Redirecting to your results.');
      navigate('/result', { replace: true });
      return;
    }

    const code = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    const user = {
      name: name.trim(),
      school: school.trim(),
      subject: selectedSubject,
      code,
      paid: true, // ? If you want to flag payment status (optional)
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
        background: 'white',
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