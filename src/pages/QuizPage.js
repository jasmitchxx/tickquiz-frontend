import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import questionsData from '../data/questionsData';

function QuizPage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('quizUser')) || {};
  const { name, subjectKey, code, school, level: rawLevel } = user;

  const MAX_QUESTIONS = 60;
  const level = rawLevel?.toUpperCase();

  const subjectQuestions = useMemo(() => {
    if (!level || !questionsData[level] || !subjectKey) return [];
    return questionsData[level][subjectKey] || [];
  }, [level, subjectKey]);

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60 * 60);
  const [finished, setFinished] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [reviewing, setReviewing] = useState(false);

  const shuffleArray = (arr) => {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const endQuiz = useCallback(() => {
    setFinished(true);
    localStorage.removeItem('quizProgress');
  }, []);

  useEffect(() => {
    if (!name || !subjectKey || subjectQuestions.length === 0) {
      navigate('/start');
      return;
    }

    const saved = JSON.parse(localStorage.getItem('quizProgress'));
    if (saved && saved.code === code) {
      setCurrent(saved.current);
      setAnswers(saved.answers);
      setScore(saved.score);
      setTimeLeft(saved.timeLeft);
      setFinished(saved.finished);
      setShuffledQuestions(saved.questions);
    } else {
      const shuffled = shuffleArray(subjectQuestions).slice(0, MAX_QUESTIONS);
      setShuffledQuestions(shuffled);
    }
  }, [name, subjectKey, subjectQuestions, code, navigate]);

  useEffect(() => {
    if (!code || shuffledQuestions.length === 0) return;
    localStorage.setItem(
      'quizProgress',
      JSON.stringify({
        code,
        current,
        answers,
        score,
        timeLeft,
        finished,
        questions: shuffledQuestions,
      })
    );
  }, [code, current, answers, score, timeLeft, finished, shuffledQuestions]);

  useEffect(() => {
    if (finished) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
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

  useEffect(() => {
    if (!finished) return;

    const saveResults = async () => {
      if (!name || !school || !subjectKey || !code) return;

      try {
        await axios.post(`${process.env.REACT_APP_API_URL}/api/leaderboard`, {
          name: String(name),
          school: String(school),
          subject: subjectKey,
          level: String(level),
          score: Number(score),
          total: Number(shuffledQuestions.length),
          code: String(code),
        });
      } catch (err) {
        console.error('Failed to save result:', err);
      }
    };

    saveResults();
  }, [finished, name, school, subjectKey, score, code, level, shuffledQuestions.length]);

  const handleAnswer = (selected) => {
    const q = shuffledQuestions[current];
    const isCorrect = selected === q.answer;

    setAnswers(prev => [
      ...prev,
      { question: q.question, selected, correct: q.answer, isCorrect, options: q.options },
    ]);

    if (isCorrect) setScore(prev => prev + 1);

    if (current + 1 >= shuffledQuestions.length) {
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

  const getGrade = (percentage) => {
    if (percentage >= 80) return { grade: 'A1', label: 'Excellent', color: 'text-green-600' };
    if (percentage >= 70) return { grade: 'B2', label: 'Very Good', color: 'text-lime-600' };
    if (percentage >= 60) return { grade: 'B3', label: 'Good', color: 'text-yellow-500' };
    if (percentage >= 50) return { grade: 'C5', label: 'Credit', color: 'text-amber-500' };
    if (percentage >= 40) return { grade: 'D7', label: 'Pass', color: 'text-orange-500' };
    return { grade: 'F9', label: 'Fail', color: 'text-red-600' };
  };

  // ================= RESULT =================
  if (finished && !reviewing) {
    const percentage = Math.round((score / shuffledQuestions.length) * 100);
    const { grade, label, color } = getGrade(percentage);

    return (
      <div className="p-6 text-center bg-blue-50 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Quiz Completed</h1>

        <div className="bg-white p-6 rounded shadow max-w-md w-full">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Level:</strong> {level}</p>
          <p><strong>Subject:</strong> {subjectKey.toUpperCase()}</p>
          <p className="mt-4 font-bold">
            Score: {score} / {shuffledQuestions.length} ({percentage}%)
          </p>
          <p className={`mt-2 ${color}`}>
            Grade: {grade} – {label}
          </p>
        </div>

        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          <button
            className="px-6 py-2 bg-green-600 text-white rounded"
            onClick={() => setReviewing(true)}
          >
            Review Answers
          </button>

          <button
            className="px-6 py-2 bg-blue-600 text-white rounded"
            onClick={() => navigate('/leaderboard')}
          >
            View Leaderboard
          </button>

          <button
            className="px-6 py-2 bg-purple-600 text-white rounded"
            onClick={() => {
              localStorage.removeItem('quizProgress');
              navigate('/start');
            }}
          >
            Take Quiz Again
          </button>
        </div>
      </div>
    );
  }

  // ================= REVIEW =================
  if (reviewing) {
    return (
      <div className="p-6 bg-blue-50 min-h-screen">
        <h2 className="text-2xl text-center mb-6">Review Answers</h2>

        {answers.map((item, index) => (
          <div key={index} className="mb-4 p-4 bg-white rounded shadow">
            <p>{index + 1}. {item.question}</p>
            {item.options.map((opt, i) => (
              <div key={i}>{opt}</div>
            ))}
          </div>
        ))}

        <div className="text-center mt-6">
          <button
            className="px-6 py-2 bg-purple-600 text-white rounded"
            onClick={() => {
              setReviewing(false);
              localStorage.removeItem('quizProgress');
              navigate('/start');
            }}
          >
            Take Quiz Again
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = shuffledQuestions[current];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <p>{subjectKey.toUpperCase()} | {level}</p>
      <p>{name}</p>
      <p>{formatTime()}</p>

      <h2>Question {current + 1}</h2>
      <p>{currentQuestion?.question}</p>

      {currentQuestion?.options?.map((opt, i) => (
        <button
          key={i}
          onClick={() => handleAnswer(opt)}
          className="block mt-2 px-4 py-2 bg-white border rounded w-full text-left"
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default QuizPage;