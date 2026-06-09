import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Leaderboard() {

  const [results, setResults] = useState([]);
  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [adminPassword, setAdminPassword] = useState("");
  const [resetMessage, setResetMessage] = useState("");

  const navigate = useNavigate();

  const user =
    JSON.parse(localStorage.getItem("quizUser")) || {};

  const isAdmin =
    user.email === "jasmitch2014@gmail.com";

  const shsSubjects = [
    "Physics",
    "Chemistry",
    "Biology",
    "Core Maths",
    "Add Maths",
    "English",
    "Social Studies",
    "Geography",
    "Economics",
    "Elective ICT",
    "Accounting",
    "Cost Accounting",
    "Business Management",
  ];

  const jhsSubjects = [
    "English Language",
    "Maths",
    "Core Science",
    "Career Tech",
    "Computing",
    "RME",
    "French",
    "Creative Arts and Design",
    "Social Studies",
  ];

  const getSubjects = () => (
    level === "SHS"
      ? shsSubjects
      : level === "JHS"
      ? jhsSubjects
      : []
  );

  const fetchResults = async () => {

    if (!subject || !level) return;

    setLoading(true);
    setError(null);

    try {

      const queryParams = new URLSearchParams({
        subject,
        level,
        
        
      });

      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/leaderboard?${queryParams.toString()}`
      );

      setResults(res.data.results || []);

    } catch (err) {

      console.error(err);

      setError(
        "Failed to load leaderboard. Please try again later."
      );

    } finally {
      setLoading(false);
    }
  };
useEffect(() => {
  fetchResults();
}, [subject, level]);

  const handleReset = async () => {

    if (
      !window.confirm(
        "Are you sure you want to reset the leaderboard?"
      )
    ) return;

    try {

      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/leaderboard/reset`,
        {
          subject,
          level,
          password: adminPassword,
        }
      );

      setResetMessage(
        "✅ Leaderboard reset successfully."
      );

      setResults([]);

    } catch (err) {

      console.error(err);

      setResetMessage(
        "❌ Reset failed. Incorrect password or server error."
      );

    }
  };

  return (

    <div className="
      min-h-screen
      bg-gradient-to-br
      from-blue-50
      via-white
      to-indigo-100
      px-3
      py-5
    ">

      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-8">

          <div className="
            inline-block
            bg-blue-100
            text-blue-700
            px-4
            py-1
            rounded-full
            text-xs
            font-black
            mb-3
          ">
            🏆 National Rankings
          </div>

          <h1 className="
            text-4xl
            lg:text-5xl
            font-black
            text-gray-900
            leading-tight
          ">
            TickQuiz
            <span className="text-blue-600">
              {" "}Leaderboard
            </span>
          </h1>

          <p className="
            text-gray-600
            mt-3
            max-w-2xl
            mx-auto
            text-sm
            leading-6
          ">
            See the top-performing students
            competing across Ghana in live
            CBT quizzes and national rankings.
          </p>

        </div>

        {/* FILTERS */}
        <div className="
          bg-white/90
          backdrop-blur-lg
          border
          border-gray-200
          rounded-3xl
          p-4
          shadow-xl
          mb-6
        ">

          <div className="
            flex
            flex-wrap
            gap-3
            justify-center
          ">

            <select
              className="
                p-3
                border
                border-gray-200
                rounded-xl
                bg-white
                text-sm
                focus:outline-none
                focus:ring-2
                focus:ring-blue-100
              "
              value={level}
              onChange={(e) => {
                setLevel(e.target.value);
                setSubject("");
              }}
            >

              <option value="">
                Select Level
              </option>

              <option value="SHS">
                SHS
              </option>

              <option value="JHS">
                JHS
              </option>

            </select>

            <select
              className="
                p-3
                border
                border-gray-200
                rounded-xl
                bg-white
                text-sm
                focus:outline-none
                focus:ring-2
                focus:ring-blue-100
              "
              value={subject}
              onChange={(e) =>
                setSubject(e.target.value)
              }
              disabled={!level}
            >

              <option value="">
                Select Subject
              </option>

              {getSubjects().map((subj) => (
                <option
                  key={subj}
                  value={subj}
                >
                  {subj}
                </option>
              ))}

            </select>

            

            

          </div>

        </div>
{/* CURRENT CHAMPION */}

{results.length > 0 && (

  <div className="
    bg-gradient-to-r
    from-yellow-400
    via-yellow-500
    to-amber-500
    rounded-3xl
    shadow-xl
    p-6
    mb-6
    text-white
  ">

    <div className="text-sm font-black">
      🏆 CURRENT CHAMPION
    </div>

    <div className="text-3xl font-black mt-2">
      {results[0].name}
    </div>

    <div className="text-lg">
      {results[0].school}
    </div>

    <div className="mt-4">

      <div className="text-sm">
        Top Score
      </div>

      <div className="text-4xl font-black">
        {results[0].score}/{results[0].total || 60}
      </div>

    </div>

  </div>

)}






{/* LEADERBOARD STATS */}

{results.length > 0 && (

  <div className="
    grid
    grid-cols-1
    md:grid-cols-3
    gap-4
    mb-6
  ">

    <div className="
      bg-white
      rounded-3xl
      shadow-lg
      p-5
      text-center
    ">

      <div className="text-3xl mb-2">
        👥
      </div>

      <div className="text-sm text-gray-500">
        Participants
      </div>

      <div className="text-3xl font-black text-blue-600">
        {results.length}
      </div>

    </div>

    <div className="
      bg-white
      rounded-3xl
      shadow-lg
      p-5
      text-center
    ">

      <div className="text-3xl mb-2">
        🎯
      </div>

      <div className="text-sm text-gray-500">
        Highest Score
      </div>

      <div className="text-3xl font-black text-green-600">
        {results[0].score}
      </div>

    </div>

    <div className="
      bg-white
      rounded-3xl
      shadow-lg
      p-5
      text-center
    ">

      <div className="text-3xl mb-2">
        📚
      </div>

      <div className="text-sm text-gray-500">
        Subject
      </div>

      <div className="text-xl font-black text-purple-600">
        {subject}
      </div>

    </div>

  </div>

)}


        {/* RESULTS */}
        {loading ? (

          <div className="text-center py-16">

            <div className="
              animate-spin
              text-5xl
              mb-4
            ">
              ⚡
            </div>

            <div className="
              font-black
              text-blue-700
              text-xl
            ">
              Loading Rankings...
            </div>

          </div>

        ) : error ? (

          <div className="
            bg-red-50
            border
            border-red-200
            rounded-2xl
            p-5
            text-center
            text-red-600
            font-semibold
          ">
            {error}
          </div>

        ) : results.length === 0 ? (

          <div className="
            bg-white
            rounded-3xl
            shadow-lg
            p-10
            text-center
          ">

            <div className="text-6xl mb-4">
              🏆
            </div>

            <div className="
              text-2xl
              font-black
              text-gray-900
            ">
              No Rankings Yet
            </div>

            <p className="
              text-gray-500
              mt-2
              text-sm
            ">
              Complete quizzes to appear on
              the national leaderboard.
            </p>

          </div>

        ) : (

          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-4
          ">

            {results.map((res, index) => {

              const percentage =
                (res.score / (res.total || 60)) * 100;

              const isCurrentUser =
                res.code === user.code;

              const formattedDate =
                new Date(
                  res.submittedAt
                ).toLocaleDateString(
                  undefined,
                  {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                  }
                );

              let borderColor =
                "border-gray-200";

              if (index === 0)
                borderColor =
                  "border-yellow-400";

              else if (index === 1)
                borderColor =
                  "border-gray-400";

              else if (index === 2)
                borderColor =
                  "border-orange-500";

              return (

                <div
                  key={index}
                  className={`
                    bg-white
                    border-2
                    ${borderColor}
                    rounded-3xl
                    shadow-lg
                    p-5
                    flex
                    flex-col
                    gap-3
                    hover:scale-[1.02]
                    transition-all
                    duration-300
                    ${
                      isCurrentUser
                        ? "ring-4 ring-blue-500 bg-blue-50"
                        : ""
                    }
                  `}
                >

                  {/* TOP */}
                  <div className="
                    flex
                    items-center
                    justify-between
                  ">

                    <div className="
                      text-xl
                      font-black
                      text-gray-900
                    ">
                      #{index + 1}
                    </div>

                    <div className="text-3xl">

                      {index === 0
                        ? "🥇"
                        : index === 1
                        ? "🥈"
                        : index === 2
                        ? "🥉"
                        : "🏅"}

                    </div>

                  </div>

                  {/* LEVEL */}
                  <div className="
                    inline-block
                    bg-indigo-100
                    text-indigo-700
                    px-3
                    py-1
                    rounded-full
                    text-[10px]
                    font-black
                    w-fit
                  ">
                    {level}
                  </div>

                  {/* NAME */}
                  <div>

                    <div className="
                      text-lg
                      font-black
                      text-gray-900
                    ">
                      {res.name}
                    </div>

                    <div className="
                      text-sm
                      text-gray-500
                    ">
                      {res.school}
                    </div>

                  </div>

                  {/* SUBJECT */}
                  <div className="
                    text-sm
                    font-semibold
                    text-blue-700
                  ">
                    {res.subject}
                  </div>

                  {/* SCORE */}
                  <div className="
                    bg-gray-50
                    rounded-2xl
                    p-3
                  ">

                    <div className="
                      text-xs
                      text-gray-500
                      mb-1
                    ">
                      Quiz Score
                    </div>

                    <div className="
                      text-2xl
                      font-black
                      text-gray-900
                    ">
                      {res.score}/{res.total || 60}
                    </div>

                    <div
                      className={`
                        text-sm
                        font-black
                        mt-1
                        ${
                          percentage >= 80
                            ? "text-green-600"
                            : percentage >= 60
                            ? "text-yellow-600"
                            : "text-red-600"
                        }
                      `}
                    >
                      {percentage.toFixed(1)}%
                    </div>

                  </div>

                  {/* DATE */}
                  <div className="
                    text-xs
                    text-gray-400
                  ">
                    {formattedDate}
                  </div>

                </div>
              );
            })}

          </div>

        )}

        {/* ADMIN PANEL */}
        {isAdmin && (

          <div className="
            mt-10
            bg-red-50
            border
            border-red-200
            rounded-3xl
            p-6
            shadow-lg
          ">

            <div className="
              text-2xl
              font-black
              text-red-700
              mb-2
            ">
              ⚠ Admin Panel
            </div>

            <p className="
              text-sm
              text-red-600
              mb-4
            ">
              Reset leaderboard rankings.
            </p>

            <input
              type="password"
              placeholder="Enter Admin Password"
              className="
                w-full
                border
                border-red-200
                p-3
                rounded-xl
                mb-4
                focus:outline-none
              "
              value={adminPassword}
              onChange={(e) =>
                setAdminPassword(e.target.value)
              }
            />

            <button
              onClick={handleReset}
              className="
                bg-red-600
                hover:bg-red-700
                text-white
                font-black
                px-6
                py-3
                rounded-xl
                shadow-lg
                transition-all
                duration-300
              "
            >
              Reset Leaderboard
            </button>

            {resetMessage && (

              <p className="
                mt-4
                font-semibold
                text-sm
              ">
                {resetMessage}
              </p>

            )}

          </div>

        )}

        {/* BACK */}
        <div className="text-center mt-10">

          <button
            onClick={() =>
              navigate("/request-access")
            }
            className="
              bg-gradient-to-r
              from-blue-600
              to-indigo-700
              hover:from-blue-700
              hover:to-indigo-800
              text-white
              px-8
              py-3
              rounded-2xl
              font-black
              shadow-xl
              transition-all
              duration-300
            "
          >
            ← Back to TickQuiz
          </button>

        </div>

      </div>

    </div>
  );
}

export default Leaderboard;