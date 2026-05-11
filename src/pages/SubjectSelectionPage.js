import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import questionsData from '../data/questionsData';

function SubjectSelectionPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('quizUser'));
    if (!user || !user.code || !user.level) {
      navigate('/start-quiz');
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
    // Remove any previous quiz progress for this new subject
    localStorage.removeItem('quizProgress');
    localStorage.setItem('quizUser', JSON.stringify(user));
    navigate('/quiz');
  };

  // Filter subjects by selected level
  const user = JSON.parse(localStorage.getItem('quizUser')) || {};
  const levelSubjects = user.level ? Object.keys(questionsData[user.level] || {}) : [];

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 py-5 px-3 relative overflow-hidden">

    {/* BACKGROUND GLOWS */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full" />

    <div className="max-w-5xl mx-auto relative z-10">

      {/* HERO */}
      <div className="text-center text-white mb-8">

        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-1 rounded-full backdrop-blur-lg text-xs font-bold mb-4">
          🎯 TickQuiz Subject Portal
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
          Choose Your
          <span className="text-blue-400"> Subject</span>
        </h1>

        <p className="text-blue-100 text-sm max-w-xl mx-auto mt-4 leading-6">
          Select a subject below and begin your examination experience.
        </p>

      </div>

      {/* MAIN CARD */}
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 overflow-hidden">

        {/* TOP INFO */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-5 py-5 text-white">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

            <div>

              <div className="text-xs uppercase tracking-widest opacity-80">
                Examination Level
              </div>

              <h2 className="text-2xl font-black mt-1">
                {user.level}
              </h2>

            </div>

            <div className="grid grid-cols-2 gap-3">

              <div className="bg-white/10 rounded-xl px-4 py-3 backdrop-blur-lg">
                <div className="text-2xl font-black">
                  {levelSubjects.length}
                </div>

                <div className="text-xs opacity-80">
                  Subjects
                </div>
              </div>

              <div className="bg-white/10 rounded-xl px-4 py-3 backdrop-blur-lg">
                <div className="text-2xl font-black">
                  60
                </div>

                <div className="text-xs opacity-80">
                  Questions
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* SUBJECT GRID */}
        <div className="p-4 lg:p-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {levelSubjects.map((subject, index) => (

              <button
                key={index}
                onClick={() => handleSelectSubject(subject)}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  bg-gradient-to-br
                  from-white
                  to-blue-50
                  border
                  border-blue-100
                  p-5
                  text-left
                  shadow-md
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                {/* GLOW */}
                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-blue-500/0
                  to-indigo-500/0
                  group-hover:from-blue-500/10
                  group-hover:to-indigo-500/10
                  transition-all
                  duration-300
                " />

                {/* ICON */}
                <div className="
                  relative
                  w-12
                  h-12
                  rounded-xl
                  bg-gradient-to-br
                  from-blue-600
                  to-indigo-700
                  text-white
                  flex
                  items-center
                  justify-center
                  text-lg
                  shadow-lg
                  mb-4
                ">
                  📘
                </div>

                {/* SUBJECT */}
                <h3 className="
                  relative
                  text-lg
                  font-black
                  text-gray-900
                  leading-tight
                ">
                  {formatSubject(subject)}
                </h3>

                <p className="
                  relative
                  text-gray-500
                  mt-2
                  text-sm
                  leading-6
                ">
                  Start your practice test and compete on the leaderboard.
                </p>

                {/* BUTTON */}
                <div className="
                  relative
                  mt-4
                  inline-flex
                  items-center
                  gap-2
                  text-blue-700
                  text-sm
                  font-bold
                ">

                  Start Quiz

                  <span className="
                    group-hover:translate-x-1
                    transition-transform
                  ">
                    →
                  </span>

                </div>

              </button>

            ))}

          </div>

        </div>

      </div>

    </div>

  </div>
);

}

export default SubjectSelectionPage;