import React from 'react';

function About() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-6">About TickQuiz</h1>

      <p>
        <strong>TickQuiz</strong> is a competitive, time-based quiz platform designed to help students across Ghana test their knowledge and prepare for exams in an exciting, interactive way.
      </p>

      <p>
        With quizzes tailored for both <strong>SHS (Senior High School)</strong> and <strong>JHS (Junior High School)</strong> levels, students can practice a wide variety of subjects such as <strong>Core Mathematics, Integrated Science, English, Geography, Business, Social Studies, Religious and Moral Education (RME)</strong>, and more.
      </p>

      <p>
        Students can take quizzes, view instant results, and climb real-time leaderboards,  creating a fun and competitive academic atmosphere across schools in Ghana.
      </p>

      <h2 className="text-xl font-semibold mt-4">How It Works</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          Visit <a href="https://tickquiz.com" className="text-blue-600 underline">tickquiz.com</a> and fill in your <strong>name, email, and phone number</strong>.
        </li>
        <li>
          Make a secure one-time payment via Paystack to receive a <strong>unique access code via SMS</strong>.
        </li>
        <li>
          Use the access code to unlock your quiz (60 questions, 60 minutes).
        </li>
        <li>
          View your results instantly, including <strong>score, percentage, and grade</strong>.
        </li>
        <li>
          Explore the <strong>Leaderboard</strong> to see how you rank across schools and subjects.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Why Students Love TickQuiz</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Available for both JHS and SHS students</li>
        <li>Mobile-friendly, fast, and reliable</li>
        <li>Real-time leaderboard boosts motivation</li>
        <li>Learn from your mistakes with instant feedback</li>
        <li>Simple to use — just plug in and play</li>
      </ul>

      <p className="mt-4">
        TickQuiz is more than a quiz — it’s a smart tool for academic excellence, national pride, and school spirit.
      </p>

      <p className="font-medium text-center text-gray-700">
        Search online: <strong>TickQuiz Ghana</strong> or visit <a href="https://tickquiz.com" className="text-blue-600 underline">tickquiz.com</a>
      </p>
    </div>
  );
}

export default About;