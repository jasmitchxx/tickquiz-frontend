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
        className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">
          Start Quiz
        </h2>

        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-6 py-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Enter your school name"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          className="w-full px-6 py-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full px-6 py-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Choose Subject --</option>
          {subjects.map((subj) => (
            <option key={subj} value={subj}>{subj}</option>
          ))}
        </select>

        {error && <p className="text-red-600 font-medium text-center">{error}</p>}

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-lg text-lg transition"
        >
          Start Quiz
        </button>
      </form>
    </div>
  );
}

export default QuizStartPage;