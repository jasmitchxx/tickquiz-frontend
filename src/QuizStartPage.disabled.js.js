// src/pages/QuizStartPage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questionsData from '../data/questionsData';

function QuizStartPage() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [user, setUser] = useState({ name: '', subject: '' });
  const [timeLeft, setTimeLeft] = useState(2700); // 45 minutes
  const [showWarning, setShowWarning] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('quizUser'));
    if (!savedUser) {
      navigate('/');
      return;
    }
    setUser(savedUser);

    const subjectQuestions = questionsData[savedUser.subject] || [];
    const shuffled = shuffleArray(subjectQuestions);
    setQuestions(shuffled.slice(0, 50));
  }, [navigate]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          alert("Time's up! Submitting your quiz.");
          setShowResult(true);
          return 0;
        }
        if (prev === 300 && !showWarning) {
          setShowWarning(true);
          playWarningSound();
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [showWarning]);

  const shuffleArray = (arr) => {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const playWarningSound = () => {
    const audio = new Audio('/warning.mp3');
    audio.play();
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
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

  if (questions.length === 0) return <p>Loading questions...</p>;

  const percentage = Math.round((score / questions.length) * 100);
  const { grade, remark } = getGrade(percentage);

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h2>{user.subject} Quiz</h2>
      <h4>Student: {user.name}</h4>
      <p><strong>Time Left:</strong> {formatTime(timeLeft)}</p>
      {showWarning && <p style={{ color: 'red' }}>?? 5 minutes remaining!</p>}

      {!showResult ? (
        <div>
          <p>Question {current + 1} of {questions.length}</p>
          <h3>{questions[current].question}</h3>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            {questions[current].options.map((option, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>
                <button
                  onClick={() => handleAnswer(option === questions[current].answer)}
                  style={{ width: '100%', padding: '0.75rem', fontSize: '1rem' }}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h3>Quiz Completed!</h3>
          <p><strong>Total Score:</strong> {score} / {questions.length}</p>
          <p><strong>Percentage:</strong> {percentage}%</p>
          <p><strong>Grade:</strong> {grade}</p>
          <p><strong>Interpretation:</strong> {remark}</p>
          <button onClick={() => navigate('/subject-select')} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
            Take Another Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default QuizStartPage;