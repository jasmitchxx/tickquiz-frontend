import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Leaderboard() {
  const [results, setResults] = useState([]);
  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [adminPassword, setAdminPassword] = useState("");
  const [resetMessage, setResetMessage] = useState("");
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("quizUser")) || {};
  const isAdmin = user.email === "jasmitch2014@gmail.com";

  const shsSubjects = [
    "Physics", "Chemistry", "Biology", "Core Maths", "Add Maths", "English",
    "Social Studies", "Geography", "Economics", "Elective ICT",
    "Accounting", "Cost Accounting", "Business Management",
  ];

  const jhsSubjects = [
    "English Language", "Maths", "Core Science", "Career Tech", "Computing",
    "RME", "French", "Creative Arts and Design", "Social Studies",
  ];

  const getSubjects = () => (level === "SHS" ? shsSubjects : level === "JHS" ? jhsSubjects : []);

  const fetchResults = async () => {
    if (!subject || !level) return;
    setLoading(true);
    setError(null);

    try {
      const queryParams = new URLSearchParams({
        subject,
        level,
        ...(startDate && { startDate }),
        ...(endDate && { endDate }),
      });

      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/leaderboard?${queryParams.toString()}`
      );
      setResults(res.data.results || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load leaderboard. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResults();
  }, [subject, level, startDate, endDate]);

  const handleReset = async () => {
    if (!window.confirm("Are you sure you want to reset the leaderboard?")) return;

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/leaderboard/reset`, {
        subject,
        level,
        password: adminPassword,
      });

      setResetMessage("? Leaderboard reset successfully.");
      setResults([]);
    } catch (err) {
      console.error(err);
      setResetMessage("? Reset failed. Incorrect password or server error.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Quiz Leaderboard
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <select
          className="p-2 border rounded-lg"
          value={level}
          onChange={(e) => {
            setLevel(e.target.value);
            setSubject("");
          }}
        >
          <option value="">Select Level</option>
          <option value="SHS">SHS</option>
          <option value="JHS">JHS</option>
        </select>

        <select
          className="p-2 border rounded-lg"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          disabled={!level}
        >
          <option value="">Select Subject</option>
          {getSubjects().map((subj) => (
            <option key={subj} value={subj}>
              {subj}
            </option>
          ))}
        </select>

        <input
          type="date"
          className="p-2 border rounded-lg"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          className="p-2 border rounded-lg"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      {/* Results */}
      {loading ? (
        <p className="text-center font-semibold text-blue-600">
          Loading leaderboard...
        </p>
      ) : error ? (
        <p className="text-center text-red-600 font-medium">{error}</p>
      ) : results.length === 0 ? (
        <p className="text-center text-gray-500 font-semibold">
          No results available.
        </p>
      ) : (
        <div className="flex overflow-x-auto gap-4 p-4">
          {results.map((res, index) => {
            const percentage = (res.score / (res.total || 60)) * 100;
            const isCurrentUser = res.code === user.code;

            const formattedDate = new Date(res.submittedAt).toLocaleDateString(
              undefined,
              { year: "numeric", month: "short", day: "numeric" }
            );

            let borderColor = "border-gray-200";
            if (index === 0) borderColor = "border-yellow-400";
            else if (index === 1) borderColor = "border-gray-400";
            else if (index === 2) borderColor = "border-orange-500";

            return (
              <div
                key={index}
                className={`min-w-[250px] bg-white border-2 ${borderColor} rounded-xl shadow-md p-4 flex flex-col gap-2 ${
                  isCurrentUser ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <div className="font-bold text-lg">
                  #{index + 1} {index === 0 ? "??" : index === 1 ? "??" : index === 2 ? "??" : ""}
                </div>
                <div className="font-semibold text-gray-800">{res.name}</div>
                <div className="text-sm text-gray-500">{res.school}</div>
                <div className="text-sm font-medium">Score: {res.score}</div>
                <div
                  className={`text-sm font-bold ${
                    percentage >= 80
                      ? "text-green-600"
                      : percentage >= 60
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {percentage.toFixed(1)}%
                </div>
                <div className="text-xs text-gray-400">{formattedDate}</div>
              </div>
            );
          })}
        </div>
      )}

      {/* Admin Panel */}
      {isAdmin && (
        <div className="mt-8 text-center">
          <h3 className="text-lg font-bold mb-2">Admin Panel</h3>
          <input
            type="password"
            placeholder="Enter Admin Password"
            className="border p-2 rounded-lg mb-2"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
          />
          <br />
          <button
            onClick={handleReset}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg shadow"
          >
            Reset Leaderboard
          </button>
          <p
            className={`mt-2 font-medium ${
              resetMessage.includes("?") ? "text-green-600" : "text-red-600"
            }`}
          >
            {resetMessage}
          </p>
        </div>
      )}

      {/* Back button */}
      <div className="text-center mt-6">
        <button
          onClick={() => navigate("/request-access")}
          className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Leaderboard;