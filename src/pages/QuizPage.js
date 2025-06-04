// src/pages/QuizPage.js
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import questionsData from '../data/questionsData';

function QuizPage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('quizUser')) || {};
  const { name, subject, code } = user;

  const subjectData = useMemo(() => {
    return questionsData.find(s => s.subject === subject);
  }, [subject]);

  const subjectQuestions = useMemo(() => subjectData?.questions || [], [subjectData]);

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes
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
      await axios.post(`${process.env.REACT_APP_API_URL}/api/increment-usage`, { code });
    } catch (err) {
      console.error('Failed to update usage:', err);
    }
  }, [code]);

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
      const shuffled = shuffleArray(subjectQuestions);
      setShuffledQuestions(shuffled);
    }
  }, [navigate, name, subject, subjectQuestions, code]);

  useEffect(() => {
    if (!code || shuffledQuestions.length === 0) return;
    const progress = { code, current, answers, score, timeLeft, finished, questions: shuffledQuestions };
    localStorage.setItem('quizProgress', JSON.stringify(progress));
  }, [current, answers, score, timeLeft, finished, shuffledQuestions, code]);

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

  const handleAnswer = (selected) => {
    const q = shuffledQuestions[current];
    const isCorrect = selected === q.answer;

    setAnswers(prev => [...prev, { question: q.question, selected, correct: q.answer, isCorrect }]);
    if (isCorrect) setScore(prev => prev + 1);

    if (current + 1 === shuffledQuestions.length) {
      endQuiz();
    } else {
      setCurrent(current + 1);
    }
  };

  const formatTime = () => {
    const safeTime = Number.isFinite(timeLeft) ? timeLeft : 0;
    const mins = Math.floor(safeTime / 60).toString().padStart(2, '0');
    const secs = (safeTime % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const progressPercent = (timeLeft / 3600) * 100;

  if (finished) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Quiz Finished</h1>
        <p className="text-xl">Score: {score} / {shuffledQuestions.length}</p>
      </div>
    );
  }

  const currentQuestion = shuffledQuestions[current];

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Timer Bar */}
      <div className="mb-4">
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
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Question {current + 1} of {shuffledQuestions.length}
        </h2>
        <p className="text-lg mb-4">{currentQuestion?.question}</p>
        <div className="grid grid-cols-1 gap-3">
          {currentQuestion?.options.map((option, index) => (
            <button
              key={index}
              className="bg-white border rounded-lg px-4 py-2 text-left shadow hover:bg-gray-100"
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