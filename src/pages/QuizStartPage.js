import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const levels = ['JHS', 'SHS'];

function StartQuizPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // ?? Small delay ensures localStorage from UseAccessCodePage is ready
    const timer = setTimeout(() => {
      const user = JSON.parse(localStorage.getItem('quizUser'));
      const accessGranted = localStorage.getItem('quizAccessGranted') === 'true';

      if (!accessGranted || !user?.code) {
        // ?? Redirect if access not granted or no code
        navigate('/use-access-code');
      }
    }, 300); // 0.3s delay fixes first-attempt redirect issue

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleLevelSelect = (level) => {
    const user = JSON.parse(localStorage.getItem('quizUser')) || {};

    // ?? Save the selected level
    const updatedUser = {
      ...user,
      level,
    };

    localStorage.setItem('quizUser', JSON.stringify(updatedUser));

    // ?? Clear only previous quiz progress
    localStorage.removeItem('quizProgress');

    // ?? Navigate to subject selection
    navigate('/select-subject');
  };

  return (
  <div className="min-h-[92vh] bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 flex items-center justify-center p-4 relative overflow-hidden">

    {/* BACKGROUND GLOWS */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl" />

    <div className="relative z-10 w-full max-w-4xl">

      {/* MAIN CARD */}
      <div className="
        bg-white/95
        backdrop-blur-2xl
        rounded-[28px]
        shadow-2xl
        border
        border-white/20
        overflow-hidden
      ">

        {/* HEADER */}
        <div className="
          bg-gradient-to-r
          from-blue-600
          to-indigo-700
          px-6
          lg:px-8
          py-8
          text-center
          text-white
        ">

          <div className="
            w-16
            h-16
            mx-auto
            rounded-full
            bg-white/20
            flex
            items-center
            justify-center
            text-3xl
            shadow-xl
            mb-4
          ">
            🎓
          </div>

          <h1 className="text-3xl lg:text-4xl font-black mb-3">
            Select Your Level
          </h1>

          <p className="text-sm lg:text-base opacity-90 max-w-xl mx-auto leading-6">
            Choose your academic level to continue
            to the TickQuiz examination portal.
          </p>

        </div>

        {/* BODY */}
        <div className="p-5 lg:p-7">

          {/* LEVEL CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {levels.map((level) => (

              <button
                key={level}
                onClick={() => handleLevelSelect(level)}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-5
                  shadow-md
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                {/* HOVER BACKGROUND */}
                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-blue-600
                  to-indigo-700
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                " />

                {/* CONTENT */}
                <div className="relative z-10">

                  <div className="
                    w-16
                    h-16
                    mx-auto
                    rounded-full
                    bg-blue-100
                    text-3xl
                    flex
                    items-center
                    justify-center
                    mb-4
                    group-hover:bg-white/20
                    transition-all
                  ">
                    {level === 'JHS' ? '📘' : '🎯'}
                  </div>

                  <h2 className="
                    text-2xl
                    font-black
                    text-gray-900
                    mb-2
                    group-hover:text-white
                    transition-colors
                  ">
                    {level}
                  </h2>

                  <p className="
                    text-sm
                    text-gray-500
                    leading-6
                    group-hover:text-blue-100
                    transition-colors
                  ">
                    {level === 'JHS'
                      ? 'Junior High School quizzes and examinations.'
                      : 'Senior High School quizzes and examinations.'}
                  </p>

                  <div className="
                    mt-5
                    inline-flex
                    items-center
                    justify-center
                    px-5
                    py-2.5
                    rounded-xl
                    bg-blue-600
                    text-white
                    text-sm
                    font-bold
                    shadow-md
                    group-hover:bg-white
                    group-hover:text-blue-700
                    transition-all
                  ">
                    Continue →
                  </div>

                </div>

              </button>

            ))}

          </div>

          {/* FOOTER INFO */}
          <div className="
            mt-6
            bg-blue-50
            border
            border-blue-100
            rounded-2xl
            p-4
            text-center
          ">

            <div className="text-blue-700 font-black text-base mb-1">
              TickQuiz Smart Examination System
            </div>

            <p className="text-sm text-gray-600 leading-6 max-w-xl mx-auto">
              Practice WAEC-style objective questions with
              timer-based quizzes, leaderboard rankings,
              performance tracking, and premium examination simulation.
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>
);

}

export default StartQuizPage;