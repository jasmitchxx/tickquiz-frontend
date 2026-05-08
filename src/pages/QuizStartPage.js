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
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 flex items-center justify-center p-4 relative overflow-hidden">

    {/* BACKGROUND GLOWS */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

    <div className="relative z-10 w-full max-w-5xl">

      {/* MAIN CARD */}
      <div className="
        bg-white/95
        backdrop-blur-2xl
        rounded-[36px]
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
          lg:px-10
          py-12
          text-center
          text-white
        ">

          <div className="
            w-24
            h-24
            mx-auto
            rounded-full
            bg-white/20
            flex
            items-center
            justify-center
            text-5xl
            shadow-2xl
            mb-6
          ">
            🎓
          </div>

          <h1 className="text-4xl lg:text-5xl font-black mb-4">
            Select Your Level
          </h1>

          <p className="text-lg opacity-90 max-w-2xl mx-auto leading-8">
            Choose your academic level to continue
            to the TickQuiz examination portal.
          </p>

        </div>

        {/* BODY */}
        <div className="p-6 lg:p-10">

          {/* LEVEL CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {levels.map((level) => (

              <button
                key={level}
                onClick={() => handleLevelSelect(level)}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-gray-200
                  bg-white
                  p-8
                  shadow-lg
                  hover:shadow-2xl
                  hover:-translate-y-2
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
                    w-24
                    h-24
                    mx-auto
                    rounded-full
                    bg-blue-100
                    text-5xl
                    flex
                    items-center
                    justify-center
                    mb-6
                    group-hover:bg-white/20
                    transition-all
                  ">
                    {level === 'JHS' ? '📘' : '🎯'}
                  </div>

                  <h2 className="
                    text-3xl
                    font-black
                    text-gray-900
                    mb-3
                    group-hover:text-white
                    transition-colors
                  ">
                    {level}
                  </h2>

                  <p className="
                    text-gray-500
                    leading-7
                    group-hover:text-blue-100
                    transition-colors
                  ">
                    {level === 'JHS'
                      ? 'Junior High School quizzes and examinations.'
                      : 'Senior High School quizzes and examinations.'}
                  </p>

                  <div className="
                    mt-8
                    inline-flex
                    items-center
                    justify-center
                    px-6
                    py-3
                    rounded-2xl
                    bg-blue-600
                    text-white
                    font-bold
                    shadow-lg
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
            mt-10
            bg-blue-50
            border
            border-blue-100
            rounded-3xl
            p-6
            text-center
          ">

            <div className="text-blue-700 font-black text-lg mb-2">
              TickQuiz Smart Examination System
            </div>

            <p className="text-gray-600 leading-7 max-w-2xl mx-auto">
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