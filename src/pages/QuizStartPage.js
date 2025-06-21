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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-white px-4">
      <form
        onSubmit={handleStart}
        className="bg-white shadow-xl rounded-lg p-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Start Quiz
        </h2>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter your school name"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Choose Subject --</option>
            {subjects.map((subj) => (
              <option key={subj} value={subj}>{subj}</option>
            ))}
          </select>
        </div>

        {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          Start Quiz
        </button>
      </form>
    </div>
  );
}

export default QuizStartPage;