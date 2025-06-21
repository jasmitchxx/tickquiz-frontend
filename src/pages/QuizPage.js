import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import questionsData from '../data/questionsData';

// Define allowed subjects to match QuizStartPage
const allowedSubjects = [
  "Physics", "Chemistry", "Add Maths", "Biology", "Core Maths",
  "Core Science", "Economics", "Geography", "Electiveict",
  "English", "Socialstudies", "Accounting", "Cost Accounting",
  "Business Management"
];

function QuizPage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('quizUser')) || {};
  const { name = '', subject = '', code = '', school = '' } = user;

  const normalize = (str) => str.trim().toLowerCase().replace(/\s+/g, '');
  const normalizedSubject = normalize(subject);
  const allowedSubjectsMap = useMemo(
    () => Object.fromEntries(allowedSubjects.map(subj => [normalize(subj), subj])),
    []
  );

  const subjectKey = allowedSubjectsMap[normalizedSubject];

  const MAX_QUESTIONS = 60;

  const subjectQuestions = useMemo(() => {
    const questions = questionsData[normalizedSubject];
    if (!questions) {
      console.warn(`No questions found for normalized subject: "${normalizedSubject}"`);
    }
    return questions || [];
  }, [normalizedSubject]);

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3600);
  const [finished, setFinished] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [reviewing, setReviewing] = useState(false);
  const [hasSaved, setHasSaved] = useState(false);

  const endQuiz = useCallback(() => setFinished(true), []);

  // Prevent access with invalid subject
  useEffect(() => {
    const quizDone = localStorage.getItem(`quizCompleted-${code}`) === 'true';
    if (quizDone) return navigate('/result');

    if (!name || !school || !subject || !subjectKey) {
      alert("Invalid or missing quiz details. Please start again.");
      return navigate('/');
    }

    if (!subjectQuestions || subjectQuestions.length === 0) {
      alert("No questions found for the selected subject.");
      return navigate('/');
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
  }, [navigate, name, subject, subjectKey, subjectQuestions, school, code]);

  useEffect(() => {
    if (!finished || hasSaved) return;

    const saveResults = async () => {
      try {
        const payload = {
          name,
          school,
          subject: subjectKey,
          score,
          timestamp: new Date().toISOString(),
          code,
        };

        await axios.post(`${process.env.REACT_APP_API_URL}/api/increment-usage`, { code });
        const saveRes = await axios.post(`${process.env.REACT_APP_API_URL}/api/save-result`, payload);

        if (!saveRes.data.success) throw new Error(saveRes.data.message);

        await axios.get(`${process.env.REACT_APP_API_URL}/api/leaderboard?subject=${normalizedSubject}`);
        setHasSaved(true);
        localStorage.removeItem('quizProgress');
        localStorage.setItem(`quizCompleted-${code}`, 'true');
      } catch (err) {
        console.error('Save error:', err.response?.data || err.message);
        alert('Problem saving your result. Please try again.');
      }
    };

    saveResults();
  }, [finished, hasSaved, name, school, subjectKey, score, code, normalizedSubject]);

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
    if (!code || shuffledQuestions.length === 0) return;
    localStorage.setItem('quizProgress', JSON.stringify({
      code,
      current,
      answers,
      score,
      timeLeft,
      finished,
      questions: shuffledQuestions,
    }));
  }, [current, answers, score, timeLeft, finished, shuffledQuestions, code]);

  const handleAnswer = (selected) => {
    const q = shuffledQuestions[current];
    const isCorrect = selected === q.answer;

    setAnswers(prev => [...prev, {
      question: q.question,
      selected,
      correct: q.answer,
      isCorrect
    }]);

    if (isCorrect) setScore(prev => prev + 1);
    if (current + 1 === shuffledQuestions.length) endQuiz();
    else setCurrent(current + 1);
  };

  const shuffleArray = (arr) => {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const formatTime = () => {
    const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const secs = (timeLeft % 60).toString().padStart(2, '0');
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
      <div className="min-h-screen bg-blue-100 p-6 text-center">
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6">
          <h1 className="text-3xl font-bold mb-4">Quiz Finished</h1>
          <p className="text-lg">Name: <strong>{name}</strong></p>
          <p className="text-lg">Subject: <strong>{subjectKey}</strong></p>
          <p className="text-xl mt-2">Score: {score} / {shuffledQuestions.length} ({percentage}%)</p>
          <p className={`text-xl mt-2 font-semibold ${color}`}>
            Grade: <strong>{grade}</strong> – <em>{level}</em>
          </p>
          <div className="mt-6 space-x-4">
            <button onClick={() => setReviewing(true)} className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">Review Answers</button>
            <button onClick={() => navigate('/leaderboard')} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Leaderboard</button>
          </div>
        </div>
      </div>
    );
  }

  if (reviewing) {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Review Answers</h2>
          {answers.map((item, index) => (
            <div key={index} className="mb-4 p-4 bg-white border rounded shadow">
              <p className="font-semibold">{index + 1}. {item.question}</p>
              <p>Your answer: <span className={item.isCorrect ? 'text-green-600' : 'text-red-600'}>{item.selected}</span></p>
              {!item.isCorrect && <p>Correct: <span className="text-green-600">{item.correct}</span></p>}
            </div>
          ))}
          <div className="text-center mt-6">
            <button onClick={() => navigate('/start')} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Start Again</button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = shuffledQuestions[current];

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <div className="mb-4">
          <div className="flex justify-between text-sm font-medium mb-2">
            <span>Time Left</span>
            <span className="font-mono">{formatTime()}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-green-500 h-4 rounded-full" style={{ width: `${(timeLeft / 3600) * 100}%` }} />
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-4">Question {current + 1} of {shuffledQuestions.length}</h2>
        <p className="text-lg mb-4">{currentQuestion?.question}</p>
        <div className="flex flex-wrap gap-4">
          {Array.isArray(currentQuestion?.options)
            ? currentQuestion.options.map((opt, idx) => (
              <button
                key={idx}
                className="bg-white border px-6 py-3 rounded shadow hover:bg-gray-200 transition"
                onClick={() => handleAnswer(opt)}
              >
                {opt}
              </button>
            ))
            : Object.entries(currentQuestion?.options || {}).map(([key, val]) => (
              <button
                key={key}
                className="bg-white border px-6 py-3 rounded shadow hover:bg-gray-200 transition"
                onClick={() => handleAnswer(key)}
              >
                {key}: {val}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}

export default QuizPage;