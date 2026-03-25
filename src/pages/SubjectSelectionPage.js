import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import questionsData from '../data/questionsData';

function SubjectSelectionPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('quizUser'));
    if (!user || !user.code) {
      navigate('/use-access-code');
    }
  }, [navigate]);

  const formatSubject = (key) =>
    key
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/addmaths/i, 'Add Maths')
      .replace(/coremaths/i, 'Core Maths')
      .replace(/corescience/i, 'Core Science')
      .replace(/electiveict/i, 'Elective ICT')
      .replace(/socialstudies/i, 'Social Studies')
      .replace(/costaccounting/i, 'Cost Accounting')
      .replace(/businessmanagement/i, 'Business Management')
      .replace(/\b\w/g, (c) => c.toUpperCase());

  const handleSelectSubject = (subjectKey) => {
    const user = JSON.parse(localStorage.getItem('quizUser')) || {};
    user.subject = formatSubject(subjectKey);
    user.subjectKey = subjectKey;
    localStorage.setItem('quizUser', JSON.stringify(user));
    navigate('/quiz');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-extrabold mb-6 text-blue-700 text-center">
          ?? Select a Subject
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Choose your subject to begin the quiz
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {Object.keys(questionsData).map((subject, index) => (
            <button
              key={index}
              onClick={() => handleSelectSubject(subject)}
              className="py-4 px-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow hover:from-blue-600 hover:to-indigo-700 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              {formatSubject(subject)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SubjectSelectionPage;