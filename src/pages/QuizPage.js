import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import questionsData from '../data/questionsData';

function QuizPage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('quizUser')) || {};
  const { name, subject, code, school, level: rawLevel } = user;

  const MAX_QUESTIONS = 60;
  const level = rawLevel?.toUpperCase(); // JHS or SHS
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
  }, [navigate, name, subject, subjectQuestions, code]);

  useEffect(() => {
    if (!code || shuffledQuestions.length === 0) return;
    const progress = {
      code,
      current,
      answers,
      score,
      timeLeft,
      finished,
      questions: shuffledQuestions,
    };
    localStorage.setItem('quizProgress', JSON.stringify(progress));
  }, [current, answers, score, timeLeft, finished, shuffledQuestions, code]);

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

  useEffect(() => {
    if (!finished) return;

    const saveResults = async () => {
      if (!name || !school || !subject || typeof score !== 'number') return;
      const timestamp = new Date().toISOString();

      try {
        await axios.post(`${process.env.REACT_APP_API_URL}/api/increment-usage`, { code });

        await axios.post(`${process.env.REACT_APP_API_URL}/api/save-result`, {
          name,
          school,
          level,
          subject: normalizedSubject,
          score,
          timestamp,
          code,
        });

        await axios.get(`${process.env.REACT_APP_API_URL}/api/leaderboard?subject=${normalizedSubject}&level=${level}`);
      } catch (err) {
        console.error('Failed to save quiz data or fetch leaderboard:', err);
      }
    };

    saveResults();
  }, [finished]);

  const handleAnswer = (selected) => {
    const q = shuffledQuestions[current];
    const isCorrect = selected === q.answer;

    setAnswers((prev) => [
      ...prev,
      { question: q.question, selected, correct: q.answer, isCorrect },
    ]);
    if (isCorrect) setScore((prev) => prev + 1);

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

  const getGrade = (percentage) => {
    if (percentage >= 80) return { grade: 'A1', level: 'Excellent', color: 'text-green-600' };
    if (percentage >= 70) return { grade: 'B2', level: 'Very Good', color: 'text-lime-600' };
    if (percentage >= 60) return { grade: 'B3', level: 'Good', color: 'text-yellow-500' };
    if (percentage >= 55) return { grade: 'C4', level: 'Credit', color: 'text-amber-500' };
    if (percentage >= 50) return { grade: 'C5', level: 'Credit', color: 'text-amber-500' };
    if (percentage >= 45) return { grade: 'C6', level: 'Credit', color: 'text-amber-500' };
    if (percentage >= 40) return { grade: 'D7', level: 'Pass', color: 'text-orange-500' };
    if (percentage >= 35) return { grade: 'D8', level: 'Pass', color: 'text-orange-500' };
    return { grade: 'F9', level: 'Fail', color: 'text-red-600' };
  };

  if (finished && !reviewing) {
    const percentage = Math.round((score / shuffledQuestions.length) * 100);
    const { grade, level: gradeLevel, color } = getGrade(percentage);

    return (
      <div className="p-6 text-center bg-blue-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Quiz Finished</h1>
        <p className="text-lg">Name: <strong>{name}</strong></p>
        <p className="text-lg">Level: <strong>{level}</strong></p>
        <p className="text-lg">Subject: <strong>{subject}</strong></p>
        <p className="text-xl mt-2">Score: {score} / {shuffledQuestions.length} ({percentage}%)</p>
        <p className={`text-xl mt-2 font-semibold ${color}`}>
          Grade: <strong>{grade}</strong> – <em>{gradeLevel}</em>
        </p>

        <div className="mt-6 space-x-4">
          <button
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            onClick={() => setReviewing(true)}
          >
            Review Answers
          </button>
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => navigate('/leaderboard')}
          >
            View Leaderboard
          </button>
          <button
            className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={() => navigate('/start')}
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

  if (reviewing) {
    return (
      <div className="p-6 bg-blue-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-4 text-center">Review Answers</h2>
        {answers.map((item, index) => (
          <div key={index} className="mb-4 p-4 border rounded bg-white shadow">
            <p className="font-semibold">{index + 1}. {item.question}</p>
            <p>
              Your answer:{' '}
              <span className={item.isCorrect ? 'text-green-600' : 'text-red-600'}>
                {item.selected}
              </span>
            </p>
            {!item.isCorrect && (
              <p>
                Correct answer: <span className="text-green-600">{item.correct}</span>
              </p>
            )}
          </div>
        ))}
        <div className="text-center mt-6">
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => navigate('/start')}
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

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Question {current + 1} of {shuffledQuestions.length}
        </h2>
        <p className="text-lg mb-4">{currentQuestion?.question}</p>
        <div className="flex flex-wrap gap-4 justify-start">
          {currentQuestion?.options.map((option, index) => (
            <button
              key={index}
              className="bg-white border rounded-lg px-6 py-3 shadow hover:bg-gray-100 text-center min-w-[120px]"
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