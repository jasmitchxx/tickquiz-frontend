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

    <div className="max-w-5xl mx-auto">

      {/* HERO */}
      <div className="
        bg-white/95
        backdrop-blur-lg
        border
        border-gray-200
        rounded-[24px]
        shadow-xl
        overflow-hidden
      ">

        {/* TOP */}
        <div className="
          bg-gradient-to-r
          from-blue-600
          via-indigo-600
          to-purple-700
          px-5
          lg:px-8
          py-6
          text-white
        ">

          <div className="
            inline-block
            bg-white/20
            px-3
            py-1
            rounded-full
            text-[11px]
            font-bold
            mb-3
          ">
            Ghana's Competitive Quiz Platform
          </div>

          <h1 className="
            text-3xl
            lg:text-4xl
            font-black
            leading-tight
          ">
            About
            <span className="text-yellow-300">
              {" "}TickQuiz
            </span>
          </h1>

          <p className="
            mt-3
            text-sm
            lg:text-base
            max-w-2xl
            leading-6
            text-blue-100
          ">
            TickQuiz helps students across Ghana
            prepare smarter, learn faster, and compete
            nationally through CBT quizzes.
          </p>

        </div>

        {/* CONTENT */}
        <div className="p-4 lg:p-6">

          {/* TOP CARDS */}
          <div className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-3
            mb-6
          ">

            {[
              {
                icon: "🎓",
                title: "JHS & SHS",
                text: "Carefully prepared quizzes for students across Ghana.",
                bg: "bg-blue-50 border-blue-100"
              },
              {
                icon: "🏆",
                title: "Competition",
                text: "Compete nationally on live leaderboards.",
                bg: "bg-indigo-50 border-indigo-100"
              },
              {
                icon: "⚡",
                title: "Smart Learning",
                text: "Instant grading and performance tracking.",
                bg: "bg-purple-50 border-purple-100"
              }
            ].map((item, index) => (

              <div
                key={index}
                className={`
                  ${item.bg}
                  border
                  rounded-2xl
                  p-4
                `}
              >

                <div className="text-3xl mb-2">
                  {item.icon}
                </div>

                <h3 className="
                  text-lg
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

          {/* MAIN GRID */}
          <div className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-5
          ">

            {/* LEFT */}
            <div>

              <h2 className="
                text-2xl
                font-black
                text-gray-900
                mb-4
              ">
                What is TickQuiz?
              </h2>

              <div className="
                space-y-3
                text-gray-600
                leading-6
                text-sm
              ">

                <p>
                  TickQuiz is a competitive,
                  time-based educational platform
                  helping students practice exams
                  in a modern interactive way.
                </p>

                <p>
                  Students can access quizzes in
                  Mathematics, English, Science,
                  Social Studies, Geography,
                  Business and more.
                </p>

                <p>
                  Every quiz is timed, graded instantly,
                  and linked to live rankings.
                </p>

              </div>

              {/* WEBSITE */}
              <div className="
                mt-5
                bg-gradient-to-r
                from-blue-600
                to-indigo-700
                rounded-2xl
                p-4
                text-white
                shadow-lg
              ">

                <div className="
                  text-[11px]
                  opacity-80
                  mb-1
                ">
                  Official Website
                </div>

                <div className="
                  text-2xl
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
            <div className="space-y-4">

              {/* HOW IT WORKS */}
              <div className="
                bg-gray-50
                rounded-2xl
                p-4
                border
                border-gray-100
              ">

                <h2 className="
                  text-xl
                  font-black
                  text-gray-900
                  mb-4
                ">
                  How It Works
                </h2>

                <div className="space-y-3">

                  {[
                    'Purchase an access code',
                    'Receive your unique code',
                    'Select level and subject',
                    'Answer 60 timed questions',
                    'View score and ranking'
                  ].map((item, index) => (

                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >

                      <div className="
                        min-w-[32px]
                        h-8
                        rounded-full
                        bg-blue-600
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
                        leading-6
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
                rounded-2xl
                p-4
                shadow-md
              ">

                <h2 className="
                  text-xl
                  font-black
                  text-gray-900
                  mb-4
                ">
                  Why Students Love TickQuiz
                </h2>

                <div className="space-y-2.5">

                  {[
                    'Mobile-friendly experience',
                    'Fast CBT system',
                    'Leaderboard competition',
                    'Instant grading',
                    'Modern interface',
                    'Exciting quizzes'
                  ].map((item, index) => (

                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >

                      <div className="
                        text-green-600
                        text-lg
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

          {/* FOOTER */}
          <div className="
            mt-6
            text-center
            bg-gradient-to-r
            from-blue-50
            to-indigo-50
            border
            border-blue-100
            rounded-2xl
            p-5
          ">

            <h3 className="
              text-2xl
              font-black
              text-gray-900
              mb-2
            ">
              More Than Just a Quiz Platform
            </h3>

            <p className="
              text-sm
              text-gray-600
              leading-6
              max-w-2xl
              mx-auto
            ">
              TickQuiz is building a new generation
              of confident and competitive students
              through technology-driven learning.
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

);

}

export default About;