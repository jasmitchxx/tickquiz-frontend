import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function QuizStartPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [subject, setSubject] = useState('');
  const [error, setError] = useState('');

  const subjects = [
    "Physics", "Chemistry", "Add Maths", "Biology", "Core Maths",
    "Core Science", "Economics", "Geography", "Electiveict",
    "English", "Socialstudies", "Accounting", "Cost Accounting",
    "Business Management"
  ];

  useEffect(() => {
    const usageCount = Number(localStorage.getItem('quizUsageCount')) || 0;
    const accessGranted = localStorage.getItem('quizAccessGranted') === 'true';

    if (!accessGranted) {
      alert('Access denied. Please use a valid access code.');
      navigate('/use-access-code');
    } else if (usageCount >= 2) {
      alert('You have already used your access code twice.');
      navigate('/request-access');
    }
  }, [navigate]);

  const handleStart = (e) => {
    e.preventDefault();

    if (!name || !school || !subject) {
      setError('All fields are required.');
      return;
    }

    const userData = JSON.parse(localStorage.getItem('quizUser')) || {};
    localStorage.setItem(
      'quizUser',
      JSON.stringify({
        ...userData,
        name,
        school,
        subject,
      })
    );

    navigate('/quiz');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 flex items-center justify-center px-4">
      <form
        onSubmit={handleStart}
        className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-6"
      >
        <h1 className="text-3xl font-bold text-center text-blue-800">Start Your Quiz</h1>
        <p className="text-center text-sm text-gray-500">Enter your details below to continue.</p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="School Name"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Choose Subject --</option>
            {subjects.map((subj) => (
              <option key={subj} value={subj}>{subj}</option>
            ))}
          </select>

          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
          >
            Start Quiz
          </button>
        </div>
      </form>
    </div>
  );
}

export default QuizStartPage;