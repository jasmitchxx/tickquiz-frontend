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
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-r from-blue-100 via-cyan-100 to-blue-200">
      {/* Left Form */}
      <div className="w-full md:w-1/2 p-10 flex items-center justify-center">
        <form
          onSubmit={handleStart}
          className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md space-y-4"
        >
          <h2 className="text-2xl font-bold text-center text-blue-700">Welcome to TickQuiz!</h2>
          <p className="text-sm text-center text-gray-600 mb-2">Enter your details to begin:</p>

          <input
            type="text"
            placeholder="Your Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Your School"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Choose a Subject --</option>
            {subjects.map((subj) => (
              <option key={subj} value={subj}>{subj}</option>
            ))}
          </select>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Start Quiz
          </button>
        </form>
      </div>

      {/* Right Side Content */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-10 bg-blue-50">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-4">Ready to Challenge Yourself?</h1>
          <p className="text-lg text-gray-700">
            TickQuiz helps SHS students test their skills in subjects like Accounting, Maths, Science, Geography, and more.
          </p>
          <img src="/logo192.png" alt="TickQuiz Logo" className="w-32 mx-auto mt-6" />
        </div>
      </div>
    </div>
  );
}

export default QuizStartPage;