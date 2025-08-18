import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import questionsData from '../data/questionsData';

function QuizPage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('quizUser')) || {};
  const { name, subject, code, school, level: rawLevel } = user;

  const MAX_QUESTIONS = 60;
  const level = rawLevel?.toUpperCase();
  const normalizedSubject = subject?.toLowerCase().replace(/\s+/g, '');

  const subjectQuestions = useMemo(() => {
    if (!level || !questionsData[level]) return [];
    const subjectKey = Object.keys(questionsData[level]).find(
      key => key.toLowerCase().replace(/\s+/g, '') === normalizedSubject
    );
    return questionsData[level]?.[subjectKey] || [];
  }, [level, normalizedSubject]);

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
    if (!name || !subject || subjectQuestions.length === 0) {
      navigate('/');
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
  }, [name, subject, subjectQuestions, code, navigate]);

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
      if (
        !name || !school || !subject || !code ||
        typeof score !== 'number' ||
        !Array.isArray(shuffledQuestions)
      ) return;

      try {
        await axios.post(`${process.env.REACT_APP_API_URL}/api/leaderboard`, {
          name: String(name),
          school: String(school),
          subject: normalizedSubject,
          level: String(level),
          score: Number(score),
          total: Number(shuffledQuestions.length),
          code: String(code),
        });
      } catch (err) {
        console.error('? Failed to save result:', err);
      }
    };

    saveResults();
  }, [finished, name, school, subject, score, code, level, normalizedSubject, shuffledQuestions.length]);

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

  const progressPercent = (timeLeft / 3600) * 100;

  const getGrade = (percentage) => {
    if (percentage >= 80) return { grade: 'A1', label: 'Excellent', color: 'text-green-600' };
    if (percentage >= 70) return { grade: 'B2', label: 'Very Good', color: 'text-lime-600' };
    if (percentage >= 60) return { grade: 'B3', label: 'Good', color: 'text-yellow-500' };
    if (percentage >= 55) return { grade: 'C4', label: 'Credit', color: 'text-amber-500' };
    if (percentage >= 50) return { grade: 'C5', label: 'Credit', color: 'text-amber-500' };
    if (percentage >= 45) return { grade: 'C6', label: 'Credit', color: 'text-amber-500' };
    if (percentage >= 40) return { grade: 'D7', label: 'Pass', color: 'text-orange-500' };
    if (percentage >= 35) return { grade: 'D8', label: 'Pass', color: 'text-orange-500' };
    return { grade: 'F9', label: 'Fail', color: 'text-red-600' };
  };

  if (finished && !reviewing) {
    const percentage = Math.round((score / shuffledQuestions.length) * 100);
    const { grade, label, color } = getGrade(percentage);

    return (
      <div className="p-6 text-center bg-blue-50 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-extrabold mb-4">?? Quiz Completed</h1>
        <div className="bg-white p-6 rounded-lg shadow w-full max-w-md">
          <p className="text-lg"><strong>Name:</strong> {name}</p>
          <p className="text-lg"><strong>Level:</strong> {level}</p>
          <p className="text-lg"><strong>Subject:</strong> {subject}</p>
          <p className="text-xl mt-4 font-bold">Score: {score} / {shuffledQuestions.length} ({percentage}%)</p>
          <p className={`text-xl mt-2 font-semibold ${color}`}>
            Grade: <strong>{grade}</strong> – <em>{label}</em>
          </p>
        </div>

        <div className="mt-6 flex gap-4">
          <button
            className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
            onClick={() => setReviewing(true)}
          >
            Review Answers
          </button>
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
            onClick={() => navigate('/leaderboard')}
          >
            View Leaderboard
          </button>
          <button
            className="px-6 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600"
            onClick={() => {
              setReviewing(false);
              navigate('/start');
            }}
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

  if (reviewing) {
    return (
      <div className="p-6 bg-blue-50 min-h-screen">
        <h2 className="text-2xl font-extrabold mb-6 text-center">Review Answers</h2>
        {answers.map((item, index) => (
          <div key={index} className="mb-4 p-4 border rounded-lg bg-white shadow">
            <p className="font-semibold">{index + 1}. {item.question}</p>
            <div className="mt-2 space-y-2">
              {item.options.map((opt, i) => {
                let btnClass = "border rounded-lg px-4 py-2 w-full text-left";
                if (opt === item.correct) {
                  btnClass += " bg-green-100 border-green-500 text-green-700 font-bold";
                } else if (opt === item.selected && opt !== item.correct) {
                  btnClass += " bg-red-100 border-red-500 text-red-700 font-bold";
                } else {
                  btnClass += " bg-gray-50";
                }
                return (
                  <div key={i} className={btnClass}>
                    {opt}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        <div className="text-center mt-6">
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
            onClick={() => {
              setReviewing(false);
              navigate('/start');
            }}
          >
            Return to Start
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = shuffledQuestions[current];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-blue-50 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow p-4 rounded-lg mb-6 flex justify-between items-center">
        <div>
          <p className="font-bold text-lg">{subject}</p>
          <p className="text-sm text-gray-600">Level: {level}</p>
        </div>
        <div className="text-right">
          <p className="font-semibold">Candidate: {name}</p>
          <p className="font-mono text-sm">Code: {code}</p>
        </div>
      </div>

      {/* Timer */}
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium">Time Left</span>
          <span className="text-sm font-mono">{formatTime()}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-green-500 h-4 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">
          Question {current + 1} of {shuffledQuestions.length}
        </h2>
        <p className="text-lg mb-6 font-medium">{currentQuestion?.question}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {currentQuestion?.options?.map((option, index) => (
            <button
              key={index}
              className="bg-gray-50 border rounded-lg px-6 py-3 shadow hover:bg-gray-100 font-medium transition"
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuizPage;