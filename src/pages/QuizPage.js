import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import questionsData from '../data/questionsData';

function QuizPage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('quizUser')) || {};
  const { name, subject, subjectKey, code, school, level: rawLevel } = user;

  const MAX_QUESTIONS = 60;
  const level = rawLevel?.toUpperCase();
  const normalizedSubject = subjectKey?.toLowerCase().replace(/\s+/g, '');

  const subjectQuestions = useMemo(() => {
    if (!level || !questionsData[level]) return [];
    const subjectKeyFound = Object.keys(questionsData[level]).find(
      key => key.toLowerCase().replace(/\s+/g, '') === normalizedSubject
    );
    return questionsData[level]?.[subjectKeyFound] || [];
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
  }, []);

  useEffect(() => {
    if (!code || !subject || !level || subjectQuestions.length === 0) {
      navigate('/start-quiz');
      return;
    }

    const saved = JSON.parse(localStorage.getItem('quizProgress'));
    if (saved && saved.code === code && saved.subjectKey === subjectKey) {
      setCurrent(saved.current);
      setAnswers(saved.answers);
      setScore(saved.score);
      setTimeLeft(saved.timeLeft);
      setFinished(saved.finished);
      setShuffledQuestions(saved.questions);
    } else {
      const shuffled = shuffleArray(subjectQuestions).slice(0, MAX_QUESTIONS);
      setShuffledQuestions(shuffled);
      setCurrent(0);
      setAnswers([]);
      setScore(0);
      setTimeLeft(60 * 60);
      setFinished(false);
    }
  }, [code, subject, subjectKey, level, subjectQuestions, navigate]);

  useEffect(() => {
    if (!code || shuffledQuestions.length === 0) return;
    localStorage.setItem(
      'quizProgress',
      JSON.stringify({
        code,
        subjectKey,
        current,
        answers,
        score,
        timeLeft,
        finished,
        questions: shuffledQuestions,
      })
    );
  }, [code, subjectKey, current, answers, score, timeLeft, finished, shuffledQuestions]);

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
      if (!name || !school || !subject || !code || typeof score !== 'number') return;

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
      { question: q.question, selected, correct: q.answer, isCorrect, options: q.options, image: q.image },
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

  const currentQuestion = shuffledQuestions[current];

  // Finished page
  if (finished && !reviewing) {
    const percentage = Math.round((score / shuffledQuestions.length) * 100);
    const { grade, label, color } = getGrade(percentage);

    return (
      <div className="p-6 text-center bg-blue-50 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-extrabold mb-4">Quiz Completed</h1>
        <div className="bg-white p-6 rounded-lg shadow w-full max-w-md">
          <p className="text-lg"><strong>Name:</strong> {name}</p>
          <p className="text-lg"><strong>Level:</strong> {level}</p>
          <p className="text-lg"><strong>Subject:</strong> {subject}</p>
          <p className="text-xl mt-4 font-bold">Score: {score} / {shuffledQuestions.length} ({percentage}%)</p>
          <p className={`text-xl mt-2 font-semibold ${color}`}>
            Grade: <strong>{grade}</strong> - <em>{label}</em>
          </p>
        </div>

        <div className="mt-6 flex gap-4 flex-wrap justify-center">
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
            onClick={() => navigate('/select-subject')}
          >
            Take Another Subject
          </button>
        </div>
      </div>
    );
  }

  // Review answers page
  if (reviewing) {
    return (
      <div className="p-6 bg-blue-50 min-h-screen">
        <h2 className="text-2xl font-extrabold mb-6 text-center">Review Answers</h2>
        {answers.map((item, index) => (
          <div key={index} className="mb-4 p-4 border rounded-lg bg-white shadow">
            <p className="font-semibold">{index + 1}. {item.question}</p>
            {item.image && (
              <img
                src={item.image}
                alt="diagram"
                className="w-full max-w-md h-auto block mx-auto my-4 border border-gray-300 rounded-lg"
              />
            )}
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
                return <div key={i} className={btnClass}>{opt}</div>;
              })}
            </div>
          </div>
        ))}
        <div className="text-center mt-6">
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
            onClick={() => {
              setReviewing(false);
              navigate('/select-subject');
            }}
          >
            Return to Subject Selection
          </button>
        </div>
      </div>
    );
  }

  // Quiz running page
return (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4 lg:p-6">

    {/* TOP BAR */}
    <div className="max-w-7xl mx-auto mb-6">

      <div className="bg-white/90 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-xl p-5 flex flex-col lg:flex-row justify-between gap-4">

        <div>
          <div className="flex items-center gap-3 flex-wrap">

            <div className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold">
              {subject}
            </div>

            <div className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-bold">
              {level}
            </div>

          </div>

          <h1 className="text-2xl lg:text-3xl font-black mt-3 text-gray-900">
            TickQuiz Examination
          </h1>

          <p className="text-gray-500 mt-1">
            Candidate: {name}
          </p>
        </div>

        {/* TIMER */}
        <div className="lg:text-right">

          <div className="text-sm text-gray-500 mb-2">
            Time Remaining
          </div>

          <div className={`text-4xl lg:text-5xl font-black tracking-wider ${
            timeLeft < 300
              ? "text-red-600"
              : "text-blue-700"
          }`}>
            {formatTime()}
          </div>

          <div className="w-56 bg-gray-200 rounded-full h-3 mt-3 overflow-hidden ml-auto">
            <div
              className={`h-3 rounded-full transition-all duration-700 ${
                timeLeft < 300
                  ? "bg-red-500"
                  : "bg-green-500"
              }`}
              style={{
                width: `${progressPercent}%`
              }}
            />
          </div>

        </div>

      </div>

    </div>

    {/* MAIN LAYOUT */}
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">

      {/* LEFT PANEL */}
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">

        {/* QUESTION HEADER */}
        <div className="border-b border-gray-100 px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

          <div>

            <div className="text-sm text-gray-500 font-medium">
              Question Progress
            </div>

            <h2 className="text-2xl font-black text-gray-900">
              Question {current + 1}
              <span className="text-gray-400 font-medium">
                {" "}of {shuffledQuestions.length}
              </span>
            </h2>

          </div>

          <div className="bg-blue-50 px-5 py-3 rounded-2xl">

            <div className="text-sm text-gray-500">
              Current Score
            </div>

            <div className="text-2xl font-black text-blue-700">
              {score}
            </div>

          </div>

        </div>

        {/* QUESTION BODY */}
        <div className="p-6 lg:p-8">

          {/* QUESTION */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl p-6 mb-8">

            <p className="text-xl leading-9 font-semibold text-gray-800">
              {currentQuestion?.question}
            </p>

          </div>

          {/* IMAGE */}
          {currentQuestion?.image && (
            <div className="mb-8 text-center">

              <img
                src={currentQuestion.image}
                alt="diagram"
                className="w-full max-w-2xl mx-auto rounded-2xl border border-gray-200 shadow-lg"
              />

            </div>
          )}

          {/* OPTIONS */}
          <div className="grid grid-cols-1 gap-5">

            {currentQuestion?.options?.map((option, index) => (

              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="
                  group
                  relative
                  overflow-hidden
                  bg-white
                  border-2
                  border-gray-200
                  rounded-2xl
                  p-5
                  text-left
                  hover:border-blue-500
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all
                  duration-200
                "
              >

                <div className="flex items-start gap-5">

                  <div className="
                    min-w-[48px]
                    h-12
                    rounded-full
                    bg-blue-600
                    text-white
                    flex
                    items-center
                    justify-center
                    font-black
                    text-lg
                    shadow-md
                  ">
                    {String.fromCharCode(65 + index)}
                  </div>

                  <div className="
                    text-lg
                    font-medium
                    text-gray-800
                    leading-7
                    pt-1
                  ">
                    {option}
                  </div>

                </div>

              </button>

            ))}

          </div>

        </div>

      </div>

      {/* RIGHT SIDEBAR */}
      <div className="space-y-6">

        {/* EXAM INFO */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6">

          <h3 className="text-xl font-black mb-5">
            Exam Dashboard
          </h3>

          <div className="space-y-4">

            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <span className="text-gray-500">
                Candidate
              </span>

              <span className="font-bold text-gray-900">
                {name}
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <span className="text-gray-500">
                Subject
              </span>

              <span className="font-bold text-gray-900">
                {subject}
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <span className="text-gray-500">
                Questions
              </span>

              <span className="font-bold text-gray-900">
                {shuffledQuestions.length}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-500">
                Current
              </span>

              <span className="font-bold text-blue-700">
                {current + 1}
              </span>
            </div>

          </div>

        </div>

        {/* QUESTION NAVIGATOR */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6">

          <h3 className="text-xl font-black mb-5">
            Question Navigator
          </h3>

          <div className="grid grid-cols-5 gap-3">

            {shuffledQuestions.map((_, index) => {

              const answered =
                index < answers.length;

              const currentQ =
                index === current;

              return (

                <div
                  key={index}
                  className={`
                    h-12
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    font-bold
                    text-sm
                    transition-all
                    ${
                      currentQ
                        ? "bg-blue-600 text-white shadow-lg scale-105"
                        : answered
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-500"
                    }
                  `}
                >
                  {index + 1}
                </div>

              );
            })}

          </div>

        </div>

        {/* LIVE PERFORMANCE */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-2xl p-6 text-white">

          <div className="text-sm opacity-80 mb-2">
            Live Performance
          </div>

          <div className="text-5xl font-black">
            {Math.round(
              (score / Math.max(1, answers.length)) * 100
            ) || 0}%
          </div>

          <div className="mt-3 opacity-90 leading-7">
            Keep going strong. Your performance
            updates in real-time as you answer.
          </div>

        </div>

      </div>

    </div>

  </div>
);

      
}

export default QuizPage;