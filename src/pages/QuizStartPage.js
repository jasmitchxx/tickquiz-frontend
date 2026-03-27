import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const levels = ['JHS', 'SHS'];

function StartQuizPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('quizUser'));
    if (!user || !user.code) {
      // Redirect to access code page if no code
      navigate('/use-access-code');
    }
  }, [navigate]);

  const handleLevelSelect = (level) => {
    const user = JSON.parse(localStorage.getItem('quizUser')) || {};
    user.level = level;
    // Clear any previous quiz progress but keep code
    localStorage.removeItem('quizProgress');
    localStorage.setItem('quizUser', JSON.stringify(user));
    navigate('/select-subject');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-8 text-center">
        <h2 className="text-3xl font-extrabold mb-6 text-blue-700">Select Your Level</h2>
        <div className="grid grid-cols-2 gap-6">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => handleLevelSelect(level)}
              className="py-4 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow hover:from-blue-600 hover:to-indigo-700 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              {level}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StartQuizPage;