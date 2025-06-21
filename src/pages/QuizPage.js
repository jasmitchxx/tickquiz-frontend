import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import questionsData from '../data/questionsData';

function QuizPage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('quizUser')) || {};
  const { name, subject, code, school } = user;

  const MAX_QUESTIONS = 60;
  const normalizedSubject = subject?.toLowerCase().replace(/\s+/g, '');
  const subjectQuestions = useMemo(() => questionsData[subject] || [], [subject]);

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60 * 60);
  const [finished, setFinished] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [reviewing, setReviewing] = useState(false);
  const [hasSaved, setHasSaved] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const quizDone = localStorage.getItem(`quizCompleted-${code}`) === 'true';
    if (quizDone) navigate('/result');
  }, [code, navigate]);

  const shuffleArray = (arr) => {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const endQuiz = useCallback(() => setFinished(true), []);

  useEffect(() => {
    if (!finished || hasSaved) return;

    const saveResults = async () => {
      if (!name || !school || !subject || typeof score !== 'number') return;

      const payload = {
        name,
        school,
        subject: normalizedSubject,
        score: Number(score),
        timestamp: new Date().toISOString(),
        code,
      };

      try {
        const saveRes = await axios.post(`${process.env.REACT_APP_API_URL}/api/save-result`, payload);
        if (!saveRes.data.success) throw new Error(saveRes.data.message || 'Save failed');

        setHasSaved(true);
        localStorage.removeItem('quizProgress');
        localStorage.setItem(`quizCompleted-${code}`, 'true');

        try {
          await axios.post(`${process.env.REACT_APP_API_URL}/api/increment-usage`, { code });
        } catch {}
      } catch (err) {
        alert('? Result could not be saved. Try again later.');
      }
    };

    saveResults();
  }, [finished, hasSaved, name, school, subject, score, code, normalizedSubject]);

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
      const shuffled = shuffleArray(subjectQuestions).slice(0, Math.min(MAX_QUESTIONS, subjectQuestions.length));
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
    if (answers[current]) return; // Already answered
    const q = shuffledQuestions[current];
    const isCorrect = selected === q.answer;

    const updatedAnswers = [...answers];
    updatedAnswers[current] = {
      question: q.question,
      selected,
      correct: q.answer,
      isCorrect,
    };

    setAnswers(updatedAnswers);
    if (isCorrect) setScore((prev) => prev + 1);
    setSelectedOption(selected);
  };

  const handleNext = () => {
    if (current + 1 === shuffledQuestions.length) {
      endQuiz();
    } else {
      setCurrent(current + 1);
      setSelectedOption(null);
    }
  };

  const handleBack = () => {
    if (current > 0) {
      setCurrent(current - 1);
      setSelectedOption(null);
    }
  };

  const formatTime = () => {
    const safeTime = Number.isFinite(timeLeft) ? timeLeft : 0;
    const mins = Math.floor(safeTime / 60).toString().padStart(2, '0');
    const secs = (safeTime % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

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
    const { grade, level, color } = getGrade(percentage);

    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-200 via-sky-300 to-blue-400 p-6">
        <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg text-center">
          <h1 className="text-3xl font-bold mb-4">Quiz Finished</h1>
          <p className="text-lg">Name: <strong>{name}</strong></p>
          <p className="text-lg">Subject: <strong>{subject}</strong></p>
          <p className="text-xl mt-2">Score: {score} / {shuffledQuestions.length} ({percentage}%)</p>
          <p className={`text-xl mt-2 font-semibold ${color}`}>Grade: <strong>{grade}</strong> – <em>{level}</em></p>

          <div className="mt-6 space-x-4">
            <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700" onClick={() => setReviewing(true)}>Review Answers</button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={() => navigate('/leaderboard')}>View Leaderboard</button>
            <button className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600" onClick={() => navigate('/start')}>Start Over</button>
          </div>
        </div>
      </div>
    );
  }

  if (reviewing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-200 via-sky-300 to-blue-400 p-6">
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Review Answers</h2>
          {answers.map((item, index) => (
            <div key={index} className="mb-4 p-4 border rounded bg-white shadow">
              <p className="font-semibold">{index + 1}. {item.question}</p>
              <p>Your answer: <span className={item.isCorrect ? 'text-green-600' : 'text-red-600'}>{item.selected}</span></p>
              {!item.isCorrect && <p>Correct answer: <span className="text-green-600">{item.correct}</span></p>}
            </div>
          ))}
          <div className="text-center mt-6">
            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={() => navigate('/start')}>Return to Start</button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = shuffledQuestions[current];
  const progressPercent = (timeLeft / 3600) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-200 via-sky-300 to-blue-400 p-6">
      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6">
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">Time Left</span>
            <span className="text-sm font-mono">{formatTime()}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-green-500 h-4 rounded-full transition-all duration-500" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Question {current + 1} of {shuffledQuestions.length}</h2>
          <p className="text-lg mb-4">{currentQuestion?.question}</p>
          <div className="flex flex-wrap gap-4 justify-start">
            {(Array.isArray(currentQuestion?.options) ? currentQuestion.options : Object.keys(currentQuestion.options || {})).map((option, index) => (
              <button
                key={index}
                className={`border rounded-xl px-6 py-3 shadow transition duration-200 ${
                  answers[current]?.selected === option
                    ? answers[current].isCorrect
                      ? 'bg-green-200 border-green-500'
                      : 'bg-red-200 border-red-500'
                    : 'bg-white hover:bg-gray-200'
                }`}
                disabled={!!answers[current]}
                onClick={() => handleAnswer(option)}
              >
                {typeof option === 'string' ? option : `${option}: ${currentQuestion.options[option]}`}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button
            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 disabled:opacity-50"
            onClick={handleBack}
            disabled={current === 0}
          >
            Back
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
            onClick={handleNext}
            disabled={!answers[current]}
          >
            {current + 1 === shuffledQuestions.length ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;