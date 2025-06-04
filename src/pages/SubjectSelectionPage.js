import React from 'react';
import { useNavigate } from 'react-router-dom';
import questionsData from '../data/questionsData';

function SubjectSelectionPage() {
  const navigate = useNavigate();

  const handleSelectSubject = (subject) => {
    const user = JSON.parse(localStorage.getItem('quizUser')) || {};
    user.subject = subject;
    localStorage.setItem('quizUser', JSON.stringify(user));
    navigate('/quiz');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Select a Subject</h2>
      <div className="grid grid-cols-1 gap-3">
        {Object.keys(questionsData).map((subject, index) => (
          <button
            key={index}
            onClick={() => handleSelectSubject(subject)}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            {subject}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SubjectSelectionPage;
