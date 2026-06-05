import React, {
  useState,
  useEffect,
  useRef
} from 'react';



import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AskAI() {
  const navigate = useNavigate();

  useEffect(() => {
    const expiry = localStorage.getItem('aiExpiryDate');

    if (!expiry || new Date(expiry) < new Date()) {
      localStorage.removeItem('aiAccessGranted');
      localStorage.removeItem('aiExpiryDate');

      navigate('/ai-tutor-access');
    }
  }, [navigate]);




  const user =
    JSON.parse(localStorage.getItem('quizUser')) || {};

  const [level, setLevel] = useState('SHS');

  const [subject, setSubject] = useState(
    user.subject || ''
  );

  const [question, setQuestion] = useState('');

  const [messages, setMessages] = useState(() => {

  const saved =
    localStorage.getItem('aiChatHistory');

  return saved
    ? JSON.parse(saved)
    : [];

});


  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

useEffect(() => {

  localStorage.setItem(
    'aiChatHistory',
    JSON.stringify(messages)
  );

}, [messages]);

useEffect(() => {

  chatEndRef.current?.scrollIntoView({
    behavior: 'smooth'
  });

}, [messages]);


  const expiryDate =
  localStorage.getItem('aiExpiryDate');

const daysLeft = expiryDate
  ? Math.max(
      0,
      Math.ceil(
        (
          new Date(expiryDate) -
          new Date()
        ) /
        (1000 * 60 * 60 * 24)
      )
    )
  : 0;




  const suggestedPrompts = [
  'Explain photosynthesis',
  'Solve a quadratic equation',
  'Explain VAT in Ghana',
  'What is React?',
  'Explain demand and supply',
  'What is depreciation?'
];

  const handleAskAI = async () => {
    if (!subject.trim()) {
      alert('Please enter a subject');
      return;
    }

    if (!question.trim()) return;

    try {
      setLoading(true);
      const userMessage = {
  type: 'user',
  text: question
};

setMessages(prev => [
  ...prev,
  userMessage
]);

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/ask-ai`,
        {
          subject: `${level} - ${subject}`,
          question,
        }
      );

      setMessages(prev => [
  ...prev,
  {
    type: 'ai',
    text: response.data.answer
  }
]);
    } catch (error) {
      console.error(error);

      setMessages(prev => [
  ...prev,
  {
    type: 'ai',
    text: 'Sorry, AI could not answer your question.'
  }
]);
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

{/* PREMIUM STATUS CARD */}

<div className="
  bg-white/10
  backdrop-blur-xl
  border
  border-white/10
  rounded-3xl
  p-5
  mb-6
  text-white
">

  <div className="
    flex
    flex-col
    md:flex-row
    md:items-center
    md:justify-between
    gap-4
  ">

    <div>

      <h3 className="text-xl font-black">
        Premium AI Plan
      </h3>

      <p className="text-blue-100 text-sm">
        Unlimited AI tutoring access
      </p>

    </div>

    <div className="
      flex
      flex-wrap
      gap-3
    ">

      <div className="
        bg-green-500/20
        px-4
        py-2
        rounded-xl
        font-bold
      ">
        ✅ Active
      </div>

      <div className="
        bg-blue-500/20
        px-4
        py-2
        rounded-xl
        font-bold
      ">
        ⏳ {daysLeft} Days Left
      </div>

    </div>

  </div>

</div>



        {/* QUESTION CARD */}
        <div className="bg-white rounded-3xl shadow-2xl p-6">

          {/* LEVEL */}
          <div className="mb-5">

            <label className="block text-sm font-bold text-gray-700 mb-2">
              Education Level
            </label>

            <div className="grid grid-cols-3 gap-2">

              {[
                'SHS',
                'JHS',
                'University',
                'ICAG',
                'ACCA',
                'CIMA'
              ].map((item) => (

                <button
                  key={item}
                  type="button"
                  onClick={() => setLevel(item)}
                  className={`
                    py-3
                    rounded-xl
                    font-bold
                    text-sm
                    transition-all
                    ${
                      level === item
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700'
                    }
                  `}
                >
                  {item}
                </button>

              ))}

            </div>

          </div>

          {/* SUBJECT */}
          <div className="mb-5">

            <label className="block text-sm font-bold text-gray-700 mb-2">
              Subject
            </label>

            <input
              type="text"
              value={subject}
              onChange={(e) =>
                setSubject(e.target.value)
              }
              placeholder="Example: Financial Accounting"
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
            />

          </div>

          {/* QUESTION */}
          <div className="mb-5">

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

<div className="mt-3">

  <p className="text-sm font-bold text-gray-600 mb-2">
    💡 Try asking:
  </p>

  <div className="flex flex-wrap gap-2">

    {suggestedPrompts.map((prompt) => (

      <button
        key={prompt}
        type="button"
        onClick={() => setQuestion(prompt)}
        className="
          px-3
          py-2
          bg-blue-100
          text-blue-700
          rounded-full
          text-sm
          font-semibold
          hover:bg-blue-200
          transition
        "
      >
        {prompt}
      </button>

    ))}

  </div>

</div>




          </div>

          {/* ASK BUTTON */}
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
              ? '🤖 AI Tutor is thinking...'
              : '🚀 Ask AI Tutor'}
          </button>

          {/* CLEAR BUTTON */}
          <button
            onClick={() => {
              setQuestion('');
              setMessages([]);

localStorage.removeItem(
  'aiChatHistory'
);
            }}
            className="
              w-full
              mt-3
              bg-gray-200
              py-3
              rounded-xl
              font-bold
              hover:bg-gray-300
            "
          >
            Clear Chat
          </button>

        </div>
{messages.length === 0 && (

  <div className="
    mt-6
    bg-white
    rounded-3xl
    shadow-2xl
    p-8
    text-center
  ">

    <div className="text-6xl mb-4">
      🤖
    </div>

    <h2 className="
      text-3xl
      font-black
      text-gray-900
      mb-3
    ">
      Welcome to TickQuiz AI Tutor
    </h2>

    <p className="
      text-gray-600
      mb-6
    ">
      Ask questions from any subject,
      course, or professional programme.
    </p>

    <div className="
      grid
      grid-cols-2
      md:grid-cols-3
      gap-3
      mb-6
    ">

      <div className="bg-blue-50 p-3 rounded-xl">
        📘 SHS
      </div>

      <div className="bg-blue-50 p-3 rounded-xl">
        📗 JHS
      </div>

      <div className="bg-blue-50 p-3 rounded-xl">
        🎓 University
      </div>

      <div className="bg-blue-50 p-3 rounded-xl">
        📊 ICAG
      </div>

      <div className="bg-blue-50 p-3 rounded-xl">
        💼 ACCA
      </div>

      <div className="bg-blue-50 p-3 rounded-xl">
        📈 CIMA
      </div>

    </div>

    <p className="
      font-bold
      text-gray-700
      mb-3
    ">
      Popular Questions
    </p>

    <div className="
      flex
      flex-wrap
      justify-center
      gap-2
    ">

      {[
        'Explain photosynthesis',
        'What is depreciation?',
        'Solve a quadratic equation'
      ].map((item) => (

        <button
          key={item}
          onClick={() =>
            setQuestion(item)
          }
          className="
            px-4
            py-2
            bg-blue-100
            text-blue-700
            rounded-full
            font-semibold
          "
        >
          {item}
        </button>

      ))}

    </div>

  </div>

)}



{messages.length === 0 && (

  <div className="
    mt-6
    bg-white
    rounded-3xl
    shadow-2xl
    p-8
    text-center
  ">

    <div className="text-6xl mb-4">
      🤖
    </div>

    <h2 className="
      text-3xl
      font-black
      text-gray-900
      mb-3
    ">
      Welcome to TickQuiz AI Tutor
    </h2>

    <p className="
      text-gray-600
      mb-6
    ">
      Ask questions from any subject,
      course, or professional programme.
    </p>

    <div className="
      grid
      grid-cols-2
      md:grid-cols-3
      gap-3
      mb-6
    ">

      <div className="bg-blue-50 p-3 rounded-xl">
        📘 SHS
      </div>

      <div className="bg-blue-50 p-3 rounded-xl">
        📗 JHS
      </div>

      <div className="bg-blue-50 p-3 rounded-xl">
        🎓 University
      </div>

      <div className="bg-blue-50 p-3 rounded-xl">
        📊 ICAG
      </div>

      <div className="bg-blue-50 p-3 rounded-xl">
        💼 ACCA
      </div>

      <div className="bg-blue-50 p-3 rounded-xl">
        📈 CIMA
      </div>

    </div>

    <p className="
      font-bold
      text-gray-700
      mb-3
    ">
      Popular Questions
    </p>

    <div className="
      flex
      flex-wrap
      justify-center
      gap-2
    ">

      {[
        'Explain photosynthesis',
        'What is depreciation?',
        'Solve a quadratic equation'
      ].map((item) => (

        <button
          key={item}
          onClick={() => setQuestion(item)}
          className="
            px-4
            py-2
            bg-blue-100
            text-blue-700
            rounded-full
            font-semibold
          "
        >
          {item}
        </button>

      ))}

    </div>

  </div>

)}


        {/* ANSWER */}
       {messages.length > 0 && (

  <div className="mt-6 space-y-4">

    {messages.map((msg, index) => (

      <div
        key={index}
        className={
          msg.type === 'user'
            ? 'flex justify-end'
            : 'flex justify-start'
        }
      >

        <div
          className={`
            max-w-[85%]
            p-4
            rounded-2xl
            shadow-lg
            whitespace-pre-wrap
            ${
              msg.type === 'user'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-800'
            }
          `}
        >

          <div className="font-bold mb-2">

            {msg.type === 'user'
              ? '👤 You'
              : '🤖 AI Tutor'}

          </div>

          {msg.text}

        </div>

      </div>

    ))}

<div ref={chatEndRef}></div>
  </div>

)}

      </div>

    </div>
  );
}

export default AskAI;