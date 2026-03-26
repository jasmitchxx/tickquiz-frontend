import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import questionsData from '../data/questionsData';
import useQuizAttempts from '../hooks/useQuizAttempts';

function QuizPage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('quizUser')) || {};
  const { name, subject, code, school, level: rawLevel } = user;

  const { remaining, startAttempt } = useQuizAttempts(); // hook for tracking attempts

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

  // ---------------- Initialize or Resume Quiz ----------------
  useEffect(() => {
    if (!name || !subject || subjectQuestions.length === 0) {
      navigate('/');
      return;
    }

    const saved = JSON.parse(localStorage.getItem('quizProgress'));

    // Resume unfinished attempt
    if (saved && saved.code === code && !saved.finished) {
      setCurrent(saved.current);
      setAnswers(saved.answers);
      setScore(saved.score);
      setTimeLeft(saved.timeLeft);
      setFinished(saved.finished);
      setShuffledQuestions(saved.questions);
      return;
    }

    // Start new attempt if attempts remain
    if (!startAttempt()) {
      alert('You have used all 6 attempts. Please log out to reset.');
      navigate('/start');
      return;
    }

    // Clear previous progress and start fresh
    localStorage.removeItem('quizProgress');
    const shuffled = shuffleArray(subjectQuestions).slice(0, MAX_QUESTIONS);
    setShuffledQuestions(shuffled);
    setCurrent(0);
    setAnswers([]);
    setScore(0);
    setTimeLeft(60 * 60);
    setFinished(false);
  }, [name, subject, subjectQuestions, code, navigate, startAttempt]);

  // ---------------- Save Progress ----------------
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

  // ---------------- Timer ----------------
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

  // ---------------- Save Result on Finish ----------------
  useEffect(() => {
    if (!finished) return;

    const saveResults = async () => {
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
        console.error('Failed to save result:', err);
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

  // ---------------- Finished Screen ----------------
  if (finished && !reviewing) {
    return (
      <div className="p-6 text-center bg-blue-50 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-extrabold mb-4">?? Quiz Completed</h1>

        <p className="mb-4 text-red-600 font-semibold">
          Attempts Remaining: {remaining} / 6
        </p>

        {remaining === 1 && (
          <p className="text-yellow-600 font-bold mb-2">
            ?? This is your LAST attempt!
          </p>
        )}

        {remaining === 0 && (
          <p className="text-red-700 font-bold mb-2">
            ? No attempts left. Please log out to reset.
          </p>
        )}

        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          <button
            className="px-6 py-2 bg-green-600 text-white rounded-lg"
            onClick={() => setReviewing(true)}
          >
            Review Answers
          </button>

          <button
            className={`px-6 py-2 rounded-lg text-white ${
              remaining === 0
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gray-500 hover:bg-gray-600'
            }`}
            disabled={remaining === 0}
            onClick={() => {
              if (remaining === 0) {
                alert('No attempts left. Please log out to reset.');
                return;
              }
              setReviewing(false);
              navigate('/start');
            }}
          >
            Start Over
          </button>

          {/* ---------------- Retake Quiz Button ---------------- */}
          <button
            className={`px-6 py-2 rounded-lg text-white ${
              remaining === 0
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
            disabled={remaining === 0}
            onClick={() => {
              if (remaining === 0) {
                alert('No attempts left. Please log out to reset.');
                return;
              }

              // Start a fresh quiz
              if (!startAttempt()) {
                alert('No attempts left.');
                return;
              }

              const shuffled = shuffleArray(subjectQuestions).slice(0, MAX_QUESTIONS);
              setShuffledQuestions(shuffled);
              setCurrent(0);
              setAnswers([]);
              setScore(0);
              setTimeLeft(60 * 60);
              setFinished(false);
              setReviewing(false);
            }}
          >
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = shuffledQuestions[current];

  // ---------------- Quiz Screen ----------------
  return (
    <div className="max-w-3xl mx-auto p-6 bg-blue-50 min-h-screen">

      {/* Attempts Display */}
      <div className="mb-4 text-center">
        <p className="text-sm font-semibold text-red-600">
          Attempts Remaining: {remaining} / 6
        </p>

        {remaining === 1 && (
          <p className="text-yellow-600 font-bold">
            ?? This is your LAST attempt!
          </p>
        )}
      </div>

      {/* Timer */}
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span>Time Left</span>
          <span>{formatTime()}</span>
        </div>
        <div className="w-full bg-gray-200 h-4 rounded">
          <div
            className="bg-green-500 h-4 rounded"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">
          Question {current + 1}
        </h2>

        <p className="mb-6">{currentQuestion?.question}</p>

        <div className="grid gap-4">
          {currentQuestion?.options?.map((option, index) => (
            <button
              key={index}
              className="bg-gray-100 p-3 rounded hover:bg-gray-200"
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