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

    if (
      !name ||
      !school ||
      !subject ||
      !code ||
      typeof score !== 'number'
    ) return;

    try {

      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/save-result`,
        {
          name: String(name || 'Student'),
          school: String(school || 'Unknown School'),
          subject: String(normalizedSubject),
          level: String(level),
          score: Number(score),
          total: Number(shuffledQuestions.length),
          code: String(code),
          timestamp: new Date().toISOString(),
        }
      );

    } catch (err) {

      console.error(
        'Failed to save result:',
        err
      );
    }
  };

  saveResults();

}, [
  finished,
  name,
  school,
  subject,
  score,
  code,
  level,
  normalizedSubject,
  shuffledQuestions.length
]);

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
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-2 lg:p-3">

    {/* TOP BAR */}
    <div className="max-w-7xl mx-auto mb-3">

      <div className="bg-white/95 backdrop-blur-lg border border-gray-200 rounded-xl shadow-md px-4 py-3 flex flex-col lg:flex-row justify-between gap-3">

        {/* LEFT */}
        <div>

          <div className="flex items-center gap-2 flex-wrap">

            <div className="bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full text-[10px] font-bold">
              {subject}
            </div>

            <div className="bg-indigo-100 text-indigo-700 px-2.5 py-1 rounded-full text-[10px] font-bold">
              {level}
            </div>

          </div>

          <h1 className="text-lg lg:text-xl font-black mt-1 text-gray-900">
            TickQuiz CBT
          </h1>

          <p className="text-xs text-gray-500">
            {name}
          </p>

        </div>

        {/* TIMER */}
        <div className="lg:text-right">

          <div className="text-[10px] text-gray-500 mb-1">
            TIME LEFT
          </div>

          <div
            className={`text-2xl lg:text-3xl font-black tracking-wide ${
              timeLeft < 300
                ? "text-red-600"
                : "text-blue-700"
            }`}
          >
            {formatTime()}
          </div>

          <div className="w-40 bg-gray-200 rounded-full h-2 mt-1 overflow-hidden ml-auto">
            <div
              className={`h-2 rounded-full transition-all duration-700 ${
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

    {/* MAIN */}
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-3">

      {/* QUESTION AREA */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">

        {/* QUESTION HEADER */}
        <div className="border-b border-gray-100 px-4 py-3 flex justify-between items-center">

          <div>

            <div className="text-[10px] text-gray-500 uppercase">
              Progress
            </div>

            <h2 className="text-lg font-black text-gray-900">
              Q{current + 1}
              <span className="text-gray-400 font-medium">
                /{shuffledQuestions.length}
              </span>
            </h2>

          </div>

          <div className="bg-blue-50 px-3 py-1.5 rounded-lg text-center">

            <div className="text-[10px] text-gray-500">
              SCORE
            </div>

            <div className="text-lg font-black text-blue-700">
              {score}
            </div>

          </div>

        </div>

        {/* BODY */}
        <div className="p-4">

          {/* QUESTION */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 mb-4">

            <p className="text-base leading-6 font-semibold text-gray-800">
              {currentQuestion?.question}
            </p>

          </div>

          {/* IMAGE */}
          {currentQuestion?.image && (

            <div className="mb-4 text-center">

              <img
                src={currentQuestion.image}
                alt="diagram"
                className="w-full max-w-lg mx-auto rounded-lg border border-gray-200 shadow-sm"
              />

            </div>

          )}

          {/* OPTIONS */}
          <div className="grid gap-2.5">

            {currentQuestion?.options?.map((option, index) => (

              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="
                  group
                  bg-white
                  border
                  border-gray-200
                  rounded-lg
                  px-3
                  py-2.5
                  text-left
                  hover:border-blue-500
                  hover:bg-blue-50
                  transition-all
                "
              >

                <div className="flex items-start gap-3">

                  <div className="
                    min-w-[32px]
                    h-8
                    rounded-full
                    bg-blue-600
                    text-white
                    flex
                    items-center
                    justify-center
                    text-xs
                    font-black
                  ">
                    {String.fromCharCode(65 + index)}
                  </div>

                  <div className="
                    text-sm
                    text-gray-800
                    leading-5
                    font-medium
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

      {/* SIDEBAR */}
      <div className="space-y-3">

        {/* DASHBOARD */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-3">

          <h3 className="text-base font-black mb-3">
            Dashboard
          </h3>

          <div className="space-y-2 text-sm">

            <div className="flex justify-between">
              <span className="text-gray-500">
                Subject
              </span>

              <span className="font-bold text-gray-900">
                {subject}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">
                Questions
              </span>

              <span className="font-bold text-gray-900">
                {shuffledQuestions.length}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">
                Current
              </span>

              <span className="font-bold text-blue-700">
                {current + 1}
              </span>
            </div>

          </div>

        </div>

        {/* NAVIGATOR */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-3">

          <h3 className="text-base font-black mb-3">
            Navigator
          </h3>

          <div className="grid grid-cols-5 gap-1.5">

            {shuffledQuestions.map((_, index) => {

              const answered =
                index < answers.length;

              const currentQ =
                index === current;

              return (

                <div
                  key={index}
                  className={`
                    h-8
                    rounded-md
                    flex
                    items-center
                    justify-center
                    font-bold
                    text-[10px]
                    ${
                      currentQ
                        ? "bg-blue-600 text-white"
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

        {/* PERFORMANCE */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-lg p-3 text-white">

          <div className="text-[10px] opacity-80 mb-1">
            PERFORMANCE
          </div>

          <div className="text-2xl font-black">
            {Math.round(
              (score / Math.max(1, answers.length)) * 100
            ) || 0}%
          </div>

          <div className="mt-1 text-xs opacity-90 leading-5">
            Live score updates.
          </div>

        </div>

      </div>

    </div>

  </div>
);

      
}

export default QuizPage;