import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import questionsData from '../data/questionsData';

function QuizPage() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('quizUser')) || {};
  const { name, subject } = user;

  const subjectData = questionsData.find(s => s.subject === subject);
  
  // ? FIXED: useMemo to make subjectQuestions stable
  const subjectQuestions = useMemo(() => {
    return subjectData?.questions || [];
  }, [subjectData]);

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60 * 60);
  const [finished, setFinished] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  const shuffleArray = (arr) => {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const endQuiz = useCallback(async () => {
    setFinished(true);
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/increment-usage`, {
        code: user?.code,
      });
    } catch (err) {
      console.error('Failed to update usage:', err);
    }
  }, [user?.code]);

  useEffect(() => {
    if (!name || !subject || subjectQuestions.length === 0) {
      navigate('/');
      return;
    }

    const saved = JSON.parse(localStorage.getItem('quizProgress'));
    if (saved && saved.code === user.code) {
      setCurrent(saved.current);
      setAnswers(saved.answers);
      setScore(saved.score);
      setTimeLeft(saved.timeLeft);
      setFinished(saved.finished);
      setShuffledQuestions(saved.questions); // load saved shuffle
    } else {
      const shuffled = shuffleArray(subjectQuestions);
      setShuffledQuestions(shuffled);
    }
  }, [navigate, subjectQuestions, name, subject, user.code]); // ? OK now

  useEffect(() => {
    if (!user.code || shuffledQuestions.length === 0) return;
    const progress = {
      code: user.code,
      current,
      answers,
      score,
      timeLeft,
      finished,
      questions: shuffledQuestions
    };
    localStorage.setItem('quizProgress', JSON.stringify(progress));
  }, [current, answers, score, timeLeft, finished, shuffledQuestions, user.code]);

  useEffect(() => {
    if (finished) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          endQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [finished, endQuiz]);

  const handleAnswer = (selected) => {
    const q = shuffledQuestions[current];
    const isCorrect = selected === q.answer;

    setAnswers(prev => [
      ...prev,
      { question: q.question, selected, correct: q.answer, isCorrect },
    ]);

    if (isCorrect) setScore(prev => prev + 1);

    if (current + 1 === shuffledQuestions.length) {
      endQuiz();
    } else {
      setCurrent(current + 1);
    }
  };

  const formatTime = () => {
    const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const secs = (timeLeft % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  if (finished) {
    return (
      <div style={{ maxWidth: 800, margin: '2rem auto' }}>
        <h2>Quiz Completed</h2>
        <p><strong>{name}</strong>, your score: {score} / {shuffledQuestions.length}</p>
        <h3>Review Answers</h3>
        {answers.map((a, idx) => (
          <div key={idx} style={{ marginBottom: 10, borderBottom: '1px solid #ccc', paddingBottom: 10 }}>
            <p><strong>Q{idx + 1}:</strong> {a.question}</p>
            <p style={{ color: a.isCorrect ? 'green' : 'red' }}>
              Your Answer: {a.selected} {a.isCorrect ? '??' : '?'}
            </p>
            {!a.isCorrect && <p>Correct Answer: {a.correct}</p>}
          </div>
        ))}
      </div>
    );
  }

  const q = shuffledQuestions[current];

  return (
    <div style={{ maxWidth: 700, margin: '2rem auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>Question {current + 1} / {shuffledQuestions.length}</h3>
        <h3>Time Left: {formatTime()}</h3>
      </div>
      <h4>{q.question}</h4>
      {q.options.map(option => (
        <button
          key={option}
          onClick={() => handleAnswer(option)}
          style={{
            display: 'block',
            width: '100%',
            padding: 10,
            marginBottom: 8,
            backgroundColor: '#f1f1f1',
            border: '1px solid #ccc',
            borderRadius: 5,
            textAlign: 'left',
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default QuizPage;