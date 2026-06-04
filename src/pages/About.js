import React from 'react';

function About() {

  return (

    <div className="
      min-h-screen
      bg-gradient-to-br
      from-blue-50
      via-white
      to-indigo-100
      px-3
      py-4
    ">

      <div className="max-w-6xl mx-auto">

        {/* HERO CONTAINER */}
        <div className="
          bg-white/95
          backdrop-blur-lg
          border
          border-gray-200
          rounded-[28px]
          shadow-2xl
          overflow-hidden
        ">

          {/* HERO */}
          <div className="
            bg-gradient-to-r
            from-blue-700
            via-indigo-700
            to-purple-800
            px-5
            lg:px-8
            py-8
            text-white
            relative
            overflow-hidden
          ">

            <div className="
              absolute
              top-0
              right-0
              w-64
              h-64
              bg-white/10
              blur-3xl
              rounded-full
            " />

            <div className="
              relative
              z-10
            ">

              <div className="
                inline-block
                bg-white/20
                px-3
                py-1
                rounded-full
                text-[11px]
                font-bold
                mb-4
              ">
                🇬🇭 Ghana's Competitive CBT Quiz Platform
              </div>

              <h1 className="
                text-4xl
                lg:text-5xl
                font-black
                leading-tight
              ">
                About
                <span className="text-yellow-300">
                  {" "}TickQuiz
                </span>
              </h1>

              <p className="
                mt-4
                text-sm
                lg:text-base
                max-w-3xl
                leading-7
                text-blue-100
              ">
                TickQuiz is Ghana’s modern exam practice platform helping JHS and SHS students prepare for BECE and WASSCE through real CBT-style quizzes, live rankings, instant results, and nationwide competition.
              </p>

            </div>

          </div>

          {/* LIVE STATS */}
          <div className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-3
            p-4
            lg:p-6
            bg-white
            border-b
            border-gray-100
          ">

            {[
              ['5000+', 'Students'],
              ['5500+', 'Questions'],
              ['24/7', 'Access'],
              ['Nationwide', 'Competition']
            ].map((item, i) => (

              <div
                key={i}
                className="
                  bg-gray-50
                  rounded-2xl
                  p-4
                  text-center
                  border
                  border-gray-100
                "
              >

                <div className="
                  text-2xl
                  font-black
                  text-blue-700
                ">
                  {item[0]}
                </div>

                <div className="
                  text-xs
                  text-gray-600
                  mt-1
                ">
                  {item[1]}
                </div>

              </div>

            ))}

          </div>

          {/* MAIN CONTENT */}
          <div className="p-4 lg:p-6">

            {/* TOP CARDS */}
            <div className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-4
              mb-6
            ">

              {[
                {
                  icon: "🎓",
                  title: "JHS & SHS",
                  text: "Carefully prepared quizzes aligned with BECE and WASSCE standards.",
                  bg: "bg-blue-50 border-blue-100"
                },
                {
                  icon: "🏆",
                  title: "National Competition",
                  text: "Compete with students across Ghana on live rankings and leaderboards.",
                  bg: "bg-indigo-50 border-indigo-100"
                },
                {
                  icon: "⚡",
                  title: "Smart CBT Learning",
                  text: "Timed quizzes, instant grading, and performance tracking.",
                  bg: "bg-purple-50 border-purple-100"
                }
              ].map((item, index) => (

                <div
                  key={index}
                  className={`
                    ${item.bg}
                    border
                    rounded-3xl
                    p-5
                  `}
                >

                  <div className="text-4xl mb-3">
                    {item.icon}
                  </div>

                  <h3 className="
                    text-xl
                    font-black
                    text-gray-900
                    mb-2
                  ">
                    {item.title}
                  </h3>

                  <p className="
                    text-sm
                    text-gray-600
                    leading-6
                  ">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

                  >
                    {/* SUBJECTS */}
<div className="mb-6">

  <h2 className="
    text-2xl
    font-black
    text-gray-900
    mb-4
  ">
    All SHS And JHS Subjects
  </h2>

  <div className="
    grid
    grid-cols-2
    md:grid-cols-4
    gap-3
  ">

    {[
      'Core Maths',
      'English',
      'Core Science',
      'Social Studies',
      'Biology',
      'Chemistry',
      'Physics',
      'Geography',
      'Economics',
      'Elective ICT',
      'Accounting',
      'Business Management',
      'Computing',
      'Career Tech',
      'RME',
      'French'
    ].map((subject, i) => (

      <div
        key={i}
        className="
          bg-gradient-to-br
          from-blue-50
          to-indigo-50
          border
          border-blue-100
          rounded-2xl
          p-4
          text-center
          font-bold
          text-sm
          text-gray-700
        "
      >
        {subject}
      </div>

    ))}

  </div>

</div>

            {/* MAIN GRID */}
            <div className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-6
            ">

              {/* LEFT */}
              <div>

                <h2 className="
                  text-3xl
                  font-black
                  text-gray-900
                  mb-4
                ">
                  What is TickQuiz?
                </h2>

                <div className="
                  space-y-4
                  text-gray-600
                  leading-7
                  text-sm
                ">

                  <p>
                    TickQuiz is a modern online CBT learning platform built for students who want to improve speed, accuracy, confidence, and exam performance through real competitive practice.
                  </p>

                  <p>
                    Students can practice Mathematics, English, Science, Social Studies, Biology, Chemistry, Physics, Geography, and more through engaging timed quizzes.
                  </p>

                  <p>
                    Every quiz is graded instantly and connected to live national rankings that motivate students to improve continuously.
                  </p>

                </div>

                {/* CBT EXPERIENCE */}
                <div className="
                  mt-5
                  bg-gradient-to-r
                  from-indigo-600
                  to-purple-700
                  rounded-3xl
                  p-5
                  text-white
                  shadow-xl
                ">

                  <div className="
                    text-lg
                    font-black
                    mb-2
                  ">
                    🎯 Real CBT Exam Experience
                  </div>

                  <p className="
                    text-sm
                    leading-7
                    text-indigo-100
                  ">
                    TickQuiz simulates real BECE and WASSCE exam conditions with timers, instant grading, rankings, and pressure-based learning.
                  </p>

                </div>

                {/* WEBSITE */}
                <div className="
                  mt-5
                  bg-gradient-to-r
                  from-blue-600
                  to-indigo-700
                  rounded-3xl
                  p-5
                  text-white
                  shadow-xl
                ">

                  <div className="
                    text-[11px]
                    opacity-80
                    mb-1
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
                    mt-2
                    text-sm
                    text-blue-100
                    leading-6
                  ">
                    Practice smarter. Compete better.
                  </div>

                </div>

              </div>

              {/* RIGHT */}
              <div className="space-y-5">

                {/* HOW IT WORKS */}
                <div className="
                  bg-gray-50
                  rounded-3xl
                  p-5
                  border
                  border-gray-100
                ">

                  <h2 className="
                    text-2xl
                    font-black
                    text-gray-900
                    mb-5
                  ">
                    How TickQuiz Works
                  </h2>

                  <div className="space-y-4">

                    {[
                      'Purchase an access code',
                      'Receive your unique activation code',
                      'Select your level and subject',
                      'Answer 60 timed CBT questions',
                      'View score, corrections, and ranking'
                    ].map((item, index) => (

                      <div
                        key={index}
                        className="flex items-start gap-3"
                      >

                        <div className="
                          min-w-[34px]
                          h-[34px]
                          rounded-full
                          bg-blue-700
                          text-white
                          flex
                          items-center
                          justify-center
                          text-xs
                          font-black
                        ">
                          {index + 1}
                        </div>

                        <div className="
                          text-sm
                          text-gray-700
                          leading-7
                        ">
                          {item}
                        </div>

                      </div>

                    ))}

                  </div>

                </div>

                {/* WHY STUDENTS LOVE */}
                <div className="
                  bg-white
                  border
                  border-gray-100
                  rounded-3xl
                  p-5
                  shadow-md
                ">

                  <h2 className="
                    text-2xl
                    font-black
                    text-gray-900
                    mb-5
                  ">
                    Why Students Love TickQuiz
                  </h2>

                  <div className="space-y-3">

                    {[
                      'Real CBT exam simulation',
                      'Nationwide student rankings',
                      'Instant score analysis',
                      'Mobile-friendly platform',
                      'Timed exam practice',
                      'Fast and modern interface',
                      'Performance tracking',
                      'Competitive learning experience'
                    ].map((item, index) => (

                      <div
                        key={index}
                        className="flex items-center gap-3"
                      >

                        <div className="
                          text-green-600
                          text-lg
                          font-black
                        ">
                          ✓
                        </div>

                        <div className="
                          text-sm
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

            {/* CTA */}
            <div className="
              mt-8
              rounded-[28px]
              overflow-hidden
              bg-gradient-to-r
              from-blue-700
              via-indigo-700
              to-purple-800
              text-white
              p-7
              text-center
              shadow-2xl
            ">

              <div className="
                text-3xl
                lg:text-4xl
                font-black
                mb-3
              ">
                Ready to Compete?
              </div>

              <p className="
                max-w-2xl
                mx-auto
                text-sm
                leading-7
                text-blue-100
              ">
                Join students across Ghana practicing for BECE and WASSCE using TickQuiz’s smart CBT system.
              </p>

              <div className="
                mt-5
                inline-flex
                items-center
                justify-center
                bg-white
                text-blue-700
                font-black
                px-7
                py-3
                rounded-2xl
                shadow-lg
                text-sm
              ">
                Start Practicing Today 🚀
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default About;