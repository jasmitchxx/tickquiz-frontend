import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const shsSubjects = [
  "Physics", "Chemistry", "Add Maths", "Biology", "Core Maths",
  "Core Science", "Economics", "Geography", "Elective ICT",
  "English", "Social Studies", "Accounting", "Cost Accounting",
  "Business Management"
];

const jhsSubjects = [
  "English Language", "Maths", "Core Science", "Social Studies",
  "Career Tech", "Computing", "RME", "French", "Creative Arts and Design"
];

function QuizStartPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    school: '',
    subject: '',
    level: ''
  });
  const [error, setError] = useState('');

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStart = (e) => {
    e.preventDefault();
    const { name, school, subject, level } = formData;

    if (!name || !school || !subject || !level) {
      setError('?? All fields are required.');
      return;
    }

    const userData = JSON.parse(localStorage.getItem('quizUser')) || {};
    localStorage.setItem('quizUser', JSON.stringify({ ...userData, ...formData }));

    navigate('/quiz');
  };

  const getSubjects = () => {
    if (formData.level === 'JHS') return jhsSubjects;
    if (formData.level === 'SHS') return shsSubjects;
    return [];
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4">
      <form
        onSubmit={handleStart}
        className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-lg space-y-6 border border-gray-100"
      >
        <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-2">
          ?? Start Your Quiz
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Fill in your details below to get started
        </p>

        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-6 py-4 border border-gray-300 rounded-xl text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        />

        <input
          type="text"
          name="school"
          placeholder="Enter your school name"
          value={formData.school}
          onChange={handleChange}
          className="w-full px-6 py-4 border border-gray-300 rounded-xl text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        />

        <select
          name="level"
          value={formData.level}
          onChange={handleChange}
          className="w-full px-6 py-4 border border-gray-300 rounded-xl text-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        >
          <option value="">-- Choose Level --</option>
          <option value="SHS">SHS</option>
          <option value="JHS">JHS</option>
        </select>

        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          disabled={!formData.level}
          className="w-full px-6 py-4 border border-gray-300 rounded-xl text-lg shadow-sm bg-white disabled:bg-gray-100 disabled:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        >
          <option value="">-- Choose Subject --</option>
          {getSubjects().map((subj) => (
            <option key={subj} value={subj}>{subj}</option>
          ))}
        </select>

        {error && (
          <p className="text-red-600 font-semibold text-center animate-pulse">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 rounded-xl text-lg shadow-lg transform transition duration-300 hover:-translate-y-1 hover:scale-105"
        >
          Start Quiz
        </button>
      </form>
    </div>
  );
}

export default QuizStartPage;