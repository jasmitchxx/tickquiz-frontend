import { useNavigate } from 'react-router-dom';

function AITutorAccessPage() {

  const navigate = useNavigate();

  return (

    <div className="min-h-[75vh] bg-gradient-to-br from-slate-950 via-green-950 to-emerald-950 flex items-center justify-center p-4">

      <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-white/20">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-6 text-center text-white">

          <div className="w-20 h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center text-5xl shadow-lg">
            🤖
          </div>

          <div className="inline-block mt-3 px-4 py-1 rounded-full bg-yellow-100 text-yellow-700 font-bold text-xs">
            ⭐ PREMIUM LEARNING
          </div>

          <h1 className="text-3xl font-black mt-4">
            TickQuiz AI Tutor
          </h1>

          <p className="text-sm text-green-100 mt-2">
            Your Personal Learning Assistant
          </p>

        </div>

        {/* BODY */}
        <div className="p-6">

          {/* COURSES */}
          <div className="grid grid-cols-2 gap-3">

            <div className="bg-green-50 rounded-xl p-3 text-center font-semibold">
              🎓 SHS Courses
            </div>

            <div className="bg-green-50 rounded-xl p-3 text-center font-semibold">
              📘 JHS Courses
            </div>

            <div className="bg-green-50 rounded-xl p-3 text-center font-semibold">
              🏛 University Courses
            </div>

            <div className="bg-green-50 rounded-xl p-3 text-center font-semibold">
              📊 ICAG Courses
            </div>

            <div className="bg-green-50 rounded-xl p-3 text-center font-semibold">
              💼 ACCA Courses
            </div>

            <div className="bg-green-50 rounded-xl p-3 text-center font-semibold">
              📈 CIMA Courses
            </div>

          </div>

          {/* BENEFITS */}
          <div className="mt-5 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-4">

            <div className="font-bold text-green-700 mb-2">
              Included With Subscription
            </div>

            <div className="space-y-2 text-sm">

              <div>✅ Unlimited AI Questions</div>
              <div>✅ Instant Explanations</div>
              <div>✅ Exam Preparation Support</div>
              <div>✅ Available 24/7</div>

            </div>

          </div>

          {/* PRICE */}
          <div className="mt-5 text-center">

            <div className="text-gray-500 uppercase text-xs tracking-widest">
              Monthly Subscription
            </div>

            <div className="text-5xl font-black text-green-600 mt-2">
              GH₵50
            </div>

            <div className="text-gray-500 text-sm">
              Unlimited Access For 30 Days
            </div>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-3 mt-6 text-center">

            <div className="bg-gray-50 rounded-xl p-3">

              <div className="font-black text-xl text-green-600">
                24/7
              </div>

              <div className="text-xs text-gray-500">
                Available
              </div>

            </div>

            <div className="bg-gray-50 rounded-xl p-3">

              <div className="font-black text-xl text-green-600">
                ∞
              </div>

              <div className="text-xs text-gray-500">
                Questions
              </div>

            </div>

            <div className="bg-gray-50 rounded-xl p-3">

              <div className="font-black text-xl text-green-600">
                30
              </div>

              <div className="text-xs text-gray-500">
                Days Access
              </div>

            </div>

          </div>

          {/* BUTTON */}
          <button
            onClick={() => navigate('/ai-payment')}
            className="
              w-full
              mt-6
              bg-gradient-to-r
              from-green-500
              to-emerald-600
              hover:from-green-600
              hover:to-emerald-700
              text-white
              py-4
              rounded-2xl
              font-black
              text-lg
              shadow-lg
              transition-all
              duration-300
              hover:scale-[1.02]
            "
          >
            🚀 Start Learning Now
          </button>

          <p className="text-center text-xs text-gray-500 mt-4 leading-5">
            One subscription gives you access to all supported courses and unlimited AI assistance.
          </p>

        </div>

      </div>

    </div>

  );

}

export default AITutorAccessPage;