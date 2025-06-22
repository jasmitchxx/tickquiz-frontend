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
    <div className="max-w-xl mx-auto mt-10 p-6 text-center bg-blue-50 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">Select a Subject</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(questionsData).map((subject, index) => (
          <button
            key={index}
            onClick={() => handleSelectSubject(subject)}
            className="bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            {formatSubject(subject)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SubjectSelectionPage;