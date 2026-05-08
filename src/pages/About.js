import React from 'react';

function About() {

  return (

    <div className="
      min-h-screen
      bg-gradient-to-br
      from-blue-50
      via-white
      to-indigo-100
      px-4
      py-10
    ">

      <div className="
        max-w-6xl
        mx-auto
      ">

        {/* HERO SECTION */}
        <div className="
          bg-white/90
          backdrop-blur-lg
          border
          border-gray-200
          rounded-[32px]
          shadow-2xl
          overflow-hidden
        ">

          {/* TOP */}
          <div className="
            bg-gradient-to-r
            from-blue-600
            via-indigo-600
            to-purple-700
            p-8
            lg:p-12
            text-white
          ">

            <div className="
              inline-block
              bg-white/20
              px-4
              py-2
              rounded-full
              text-sm
              font-bold
              mb-6
            ">
              Ghana's Competitive Quiz Platform
            </div>

            <h1 className="
              text-4xl
              lg:text-6xl
              font-black
              leading-tight
            ">
              About
              <span className="text-yellow-300">
                {" "}TickQuiz
              </span>
            </h1>

            <p className="
              mt-6
              text-lg
              lg:text-xl
              max-w-3xl
              leading-9
              text-blue-100
            ">
              TickQuiz is a modern competitive quiz
              platform helping students across Ghana
              prepare smarter, learn faster, and compete
              nationally through exciting CBT quizzes.
            </p>

          </div>

          {/* CONTENT */}
          <div className="
            p-6
            lg:p-10
          ">

            {/* INTRO GRID */}
            <div className="
              grid
              grid-cols-1
              lg:grid-cols-3
              gap-6
              mb-10
            ">

              <div className="
                bg-blue-50
                border
                border-blue-100
                rounded-3xl
                p-6
              ">

                <div className="text-5xl mb-4">
                  🎓
                </div>

                <h3 className="
                  text-2xl
                  font-black
                  text-gray-900
                  mb-3
                ">
                  JHS & SHS
                </h3>

                <p className="
                  text-gray-600
                  leading-7
                ">
                  Carefully prepared quizzes for
                  Junior and Senior High School
                  students across Ghana.
                </p>

              </div>

              <div className="
                bg-indigo-50
                border
                border-indigo-100
                rounded-3xl
                p-6
              ">

                <div className="text-5xl mb-4">
                  🏆
                </div>

                <h3 className="
                  text-2xl
                  font-black
                  text-gray-900
                  mb-3
                ">
                  Live Competition
                </h3>

                <p className="
                  text-gray-600
                  leading-7
                ">
                  Compete against students nationwide
                  and climb the TickQuiz leaderboard
                  in real-time.
                </p>

              </div>

              <div className="
                bg-purple-50
                border
                border-purple-100
                rounded-3xl
                p-6
              ">

                <div className="text-5xl mb-4">
                  ⚡
                </div>

                <h3 className="
                  text-2xl
                  font-black
                  text-gray-900
                  mb-3
                ">
                  Smart Learning
                </h3>

                <p className="
                  text-gray-600
                  leading-7
                ">
                  Instant grading, review systems,
                  and performance tracking help
                  students improve quickly.
                </p>

              </div>

            </div>

            {/* MAIN CONTENT */}
            <div className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-10
            ">

              {/* LEFT */}
              <div>

                <h2 className="
                  text-3xl
                  font-black
                  text-gray-900
                  mb-6
                ">
                  What is TickQuiz?
                </h2>

                <div className="
                  space-y-5
                  text-gray-600
                  leading-8
                  text-lg
                ">

                  <p>
                    TickQuiz is a competitive,
                    time-based educational platform
                    built to help students practice
                    examination questions in a fun,
                    modern, and interactive way.
                  </p>

                  <p>
                    Students can access quizzes in
                    subjects like Core Mathematics,
                    English, Integrated Science,
                    Social Studies, Geography,
                    Business, RME, and many more.
                  </p>

                  <p>
                    Every quiz session is timed,
                    automatically graded, and linked
                    to a live national leaderboard
                    system.
                  </p>

                </div>

                {/* WEBSITE CARD */}
                <div className="
                  mt-8
                  bg-gradient-to-r
                  from-blue-600
                  to-indigo-700
                  rounded-3xl
                  p-6
                  text-white
                  shadow-2xl
                ">

                  <div className="
                    text-sm
                    opacity-80
                    mb-2
                  ">
                    Official Website
                  </div>

                  <div className="
                    text-3xl
                    font-black
                    break-all
                  ">
                    tickquiz.com
                  </div>

                  <div className="
                    mt-4
                    text-blue-100
                    leading-7
                  ">
                    Practice smarter. Compete better.
                    Learn faster.
                  </div>

                </div>

              </div>

              {/* RIGHT */}
              <div>

                {/* HOW IT WORKS */}
                <div className="
                  bg-gray-50
                  rounded-3xl
                  p-6
                  border
                  border-gray-100
                  mb-6
                ">

                  <h2 className="
                    text-2xl
                    font-black
                    text-gray-900
                    mb-6
                  ">
                    How It Works
                  </h2>

                  <div className="space-y-5">

                    {[
                      'Register and purchase an access code securely.',
                      'Receive your unique quiz access code.',
                      'Select your level and subject.',
                      'Answer 60 timed questions.',
                      'View your score, grade, and ranking instantly.'
                    ].map((item, index) => (

                      <div
                        key={index}
                        className="
                          flex
                          items-start
                          gap-4
                        "
                      >

                        <div className="
                          min-w-[42px]
                          h-10
                          rounded-full
                          bg-blue-600
                          text-white
                          flex
                          items-center
                          justify-center
                          font-black
                        ">
                          {index + 1}
                        </div>

                        <div className="
                          text-gray-700
                          leading-7
                          pt-1
                        ">
                          {item}
                        </div>

                      </div>

                    ))}

                  </div>

                </div>

                {/* WHY LOVE */}
                <div className="
                  bg-white
                  border
                  border-gray-100
                  rounded-3xl
                  p-6
                  shadow-lg
                ">

                  <h2 className="
                    text-2xl
                    font-black
                    text-gray-900
                    mb-6
                  ">
                    Why Students Love TickQuiz
                  </h2>

                  <div className="space-y-4">

                    {[
                      'Mobile-friendly experience',
                      'Fast and reliable CBT system',
                      'National leaderboard competition',
                      'Instant grading and review',
                      'Modern user interface',
                      'Exciting and motivating quizzes'
                    ].map((item, index) => (

                      <div
                        key={index}
                        className="
                          flex
                          items-center
                          gap-4
                        "
                      >

                        <div className="
                          text-green-600
                          text-2xl
                        ">
                          ✓
                        </div>

                        <div className="
                          text-gray-700
                          font-medium
                        ">
                          {item}
                        </div>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </div>

            {/* FOOTER MESSAGE */}
            <div className="
              mt-12
              text-center
              bg-gradient-to-r
              from-blue-50
              to-indigo-50
              border
              border-blue-100
              rounded-3xl
              p-8
            ">

              <h3 className="
                text-3xl
                font-black
                text-gray-900
                mb-4
              ">
                More Than Just a Quiz Platform
              </h3>

              <p className="
                text-lg
                text-gray-600
                leading-8
                max-w-3xl
                mx-auto
              ">
                TickQuiz is building a new generation
                of confident, competitive, and academically
                strong students across Ghana through
                technology-driven learning.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default About;