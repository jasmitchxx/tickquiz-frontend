import React, { useEffect, useState } from 'react';
import axios from 'axios';
import questionsData from '../data/questionsData';

function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds

  const user = JSON.parse(localStorage.getItem('quizUser'));
  const subject = user?.subject;
  const level = user?.level;

  useEffect(() => {
    if (!user || !subject || !level) return;

    const levelKey = level.toUpperCase(); // SHS or JHS
    const subjectKey = Object.keys(questionsData[levelKey] || {}).find(
      (key) => key.toLowerCase() === subject.toLowerCase()
    );

    const selectedQuestions = questionsData[levelKey]?.[subjectKey] || [];
    setQuestions(selectedQuestions.slice(0, 60));
  }, [subject, level, user]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          finishQuiz();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswer = (answer) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = answer === currentQuestion.answer;

    setSelectedAnswers((prev) => [
      ...prev,
      {
        question: currentQuestion.question,
        selected: answer,
        correct: currentQuestion.answer,
        isCorrect,
      },
    ]);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestionIndex + 1 >= questions.length) {
      finishQuiz();
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const finishQuiz = () => {
    setQuizFinished(true);

    axios.post(`${process.env.REACT_APP_API_URL}/api/leaderboard`, {
      name: user.name,
      school: user.school,
      subject: user.subject,
      level: user.level,
      score,
      total: questions.length,
      code: user.code,
    });
  };

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  if (!user) return <p>Please start the quiz again.</p>;

  if (quizFinished) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Quiz Completed</h1>
        <p className="text-lg mb-2">Name: {user.name}</p>
        <p className="text-lg mb-2">School: {user.school}</p>
        <p className="text-lg mb-2">Subject: {subject}</p>
        <p className="text-lg mb-2">Score: {score} / {questions.length}</p>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <span>Question {currentQuestionIndex + 1} / {questions.length}</span>
        <span className="font-mono">{formatTime()}</span>
      </div>

      <div className="bg-white shadow p-6 rounded mb-4">
        <h2 className="text-xl font-semibold mb-4">{currentQuestion?.question}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentQuestion?.options.map((option, index) => (
            <button
              key={index}
              className="bg-blue-100 hover:bg-blue-200 rounded px-4 py-2 text-left"
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