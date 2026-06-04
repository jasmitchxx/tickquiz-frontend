import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';






function AskAI() {
const navigate = useNavigate();

useEffect(() => {

  const expiry =
    localStorage.getItem('aiExpiryDate');

  if (
    !expiry ||
    new Date(expiry) < new Date()
  ) {

    localStorage.removeItem(
      'aiAccessGranted'
    );

    localStorage.removeItem(
      'aiExpiryDate'
    );

    navigate('/ai-tutor-access');

  }

}, [navigate]);


  const user =
    JSON.parse(localStorage.getItem('quizUser')) || {};

  const [subject, setSubject] = useState(
    user.subject || 'Mathematics'
  );

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAskAI = async () => {

    if (!question.trim()) return;

    try {

      setLoading(true);
      setAnswer('');

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/ask-ai`,
        {
          subject,
          question
        }
      );

      setAnswer(response.data.answer);

    } catch (error) {

      console.error(error);

      setAnswer(
        'Sorry, AI could not answer your question.'
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 p-4">

      <div className="max-w-5xl mx-auto">

        {/* HERO */}

        <div className="text-center text-white mb-8">

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full backdrop-blur-lg text-sm font-bold mb-4">
            🤖 TickQuiz AI Tutor
          </div>

          <h1 className="text-4xl lg:text-5xl font-black">
            Learn With AI
          </h1>

          <p className="text-blue-100 mt-4 max-w-2xl mx-auto">
            Ask questions, get explanations,
            solve problems and learn faster with TickQuiz AI.
          </p>

        </div>

        {/* QUESTION CARD */}

        <div className="bg-white rounded-3xl shadow-2xl p-6">

          <div className="mb-4">

            <label className="block text-sm font-bold text-gray-700 mb-2">
              Subject
            </label>

            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="
                w-full
                border
                border-gray-200
                rounded-xl
                p-3
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            >
              <option>Mathematics</option>
              <option>English</option>
              <option>Science</option>
              <option>Social Studies</option>
              <option>Accounting</option>
              <option>Economics</option>
            </select>

          </div>

          <div className="mb-4">

            <label className="block text-sm font-bold text-gray-700 mb-2">
              Your Question
            </label>

            <textarea
              rows="7"
              value={question}
              onChange={(e) =>
                setQuestion(e.target.value)
              }
              placeholder="Example: Explain Pythagoras theorem with examples."
              className="
                w-full
                border
                border-gray-200
                rounded-xl
                p-4
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

          </div>

          <button
            onClick={handleAskAI}
            disabled={loading}
            className="
              w-full
              bg-gradient-to-r
              from-blue-600
              to-indigo-700
              text-white
              py-4
              rounded-xl
              font-black
              text-lg
              hover:scale-[1.01]
              transition-all
            "
          >
            {loading
              ? '⏳ Thinking...'
              : '🤖 Ask AI Tutor'}
          </button>

        </div>

        {/* ANSWER */}

        {answer && (

          <div className="
            mt-6
            bg-white
            rounded-3xl
            shadow-2xl
            p-6
          ">

            <div className="
              flex
              items-center
              justify-between
              mb-4
            ">

              <h2 className="
                text-2xl
                font-black
                text-gray-900
              ">
                AI Answer
              </h2>

              <button
                onClick={() =>
                  navigator.clipboard.writeText(answer)
                }
                className="
                  px-4
                  py-2
                  bg-blue-100
                  text-blue-700
                  rounded-lg
                  font-bold
                "
              >
                Copy
              </button>

            </div>

            <div className="
              whitespace-pre-wrap
              leading-8
              text-gray-700
            ">
              {answer}
            </div>

          </div>

        )}

      </div>

    </div>

  );

}

export default AskAI;