import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questionsData from '../data/questionsData';

function QuizPage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('quizUser'));
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (!user || !user.subject) {
      navigate('/start');
      return;
    }

    const all = questionsData[user.subject] || [];
    const shuffled = [...all].sort(() => 0.5 - Math.random()).slice(0, 60);
    setQuestions(shuffled);
  }, [navigate, user]);

  const handleAnswer = () => {
    if (selected === null) return;

    if (questions[current].answer === selected) {
      setScore((prev) => prev + 1);
    }

    if (current + 1 < questions.length) {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrent((prev) => prev + 1);
        setSelected(null);
        setFade(true); // Fade-in new question
      }, 300); // Match fade transition duration
    } else {
      setQuizDone(true);
    }
  };

  const getGrade = (percentage) => {
    if (percentage >= 75) return { grade: 'A1', remark: 'Excellent' };
    if (percentage >= 70) return { grade: 'B2', remark: 'Very Good' };
    if (percentage >= 65) return { grade: 'B3', remark: 'Good' };
    if (percentage >= 60) return { grade: 'C4', remark: 'Credit' };
    if (percentage >= 55) return { grade: 'C5', remark: 'Credit' };
    if (percentage >= 50) return { grade: 'C6', remark: 'Credit' };
    if (percentage >= 45) return { grade: 'D7', remark: 'Pass' };
    if (percentage >= 40) return { grade: 'E8', remark: 'Pass' };
    return { grade: 'F9', remark: 'Fail' };
  };

  if (!user || !user.subject) return <p>Loading user data...</p>;
  if (questions.length === 0) return <p>Loading questions...</p>;

  if (quizDone) {
    const percentage = Math.round((score / questions.length) * 100);
    const { grade, remark } = getGrade(percentage);

    return (
      <div style={{ maxWidth: 500, margin: '2rem auto', textAlign: 'center' }}>
        <h2>Quiz Completed</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Subject:</strong> {user.subject}</p>
        <p><strong>Score:</strong> {score} / {questions.length}</p>
        <p><strong>Percentage:</strong> {percentage}%</p>
        <p><strong>Grade:</strong> {grade}</p>
        <p><strong>Remark:</strong> {remark}</p>
        <button
          onClick={() => navigate('/start')}
          style={{
            marginTop: '1rem',
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Take Another Quiz
        </button>
      </div>
    );
  }

  const currentQuestion = questions[current];

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', minHeight: '350px', position: 'relative' }}>
      <div
        style={{
          opacity: fade ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          minHeight: '350px',
          pointerEvents: fade ? 'auto' : 'none',
        }}
      >
        <h3>Question {current + 1} of {questions.length}</h3>
        <p>{currentQuestion.question}</p>
        <div>
          {currentQuestion.options.map((opt, idx) => (
            <div key={idx}>
              <label>
                <input
                  type="radio"
                  name="option"
                  value={opt}
                  checked={selected === opt}
                  onChange={() => setSelected(opt)}
                />{' '}
                {opt}
              </label>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handleAnswer}
        style={{
          marginTop: '1rem',
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {current + 1 === questions.length ? 'Finish Quiz' : 'Next'}
      </button>
    </div>
  );
}

export default QuizPage;