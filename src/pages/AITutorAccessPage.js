import { useNavigate } from 'react-router-dom';

function AITutorAccessPage() {

  const navigate = useNavigate();

  return (

    <div className="min-h-[65vh] bg-gradient-to-br from-slate-950 via-green-950 to-emerald-950 flex items-center justify-center p-4">

      <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-md w-full overflow-hidden">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-5 text-center text-white">

          <div className="text-4xl mb-2">
            🤖
          </div>

          <h1 className="text-2xl font-black">
            TickQuiz AI Tutor
          </h1>

          <p className="text-sm text-green-100 mt-2">
            Learn faster. Ask unlimited questions.
          </p>

        </div>

        {/* BODY */}
        <div className="p-5">

          <div className="grid grid-cols-2 gap-2 text-sm">

            <div className="bg-green-50 rounded-lg p-2">
              🎓 SHS Courses
            </div>

            <div className="bg-green-50 rounded-lg p-2">
              📘 JHS Courses
            </div>

            <div className="bg-green-50 rounded-lg p-2">
              🏛 University
            </div>

            <div className="bg-green-50 rounded-lg p-2">
              📊 ICAG
            </div>

            <div className="bg-green-50 rounded-lg p-2">
              💼 ACCA
            </div>

            <div className="bg-green-50 rounded-lg p-2">
              📈 CIMA
            </div>

          </div>

          <div className="mt-4 bg-emerald-50 rounded-xl p-3 text-center">

            <div className="text-sm text-gray-600">
              Unlimited AI Questions
            </div>

            <div className="text-3xl font-black text-green-600 mt-1">
              GH₵50
            </div>

            <div className="text-xs text-gray-500">
              30 Days Access
            </div>

          </div>

          <button
            onClick={() => navigate('/ai-payment')}
            className="
              w-full
              mt-4
              bg-gradient-to-r
              from-green-600
              to-emerald-700
              text-white
              py-3
              rounded-xl
              font-black
              shadow-lg
              hover:scale-[1.02]
              transition-all
            "
          >
            🚀 Subscribe Now
          </button>

          <p className="text-center text-xs text-gray-500 mt-3">
            Access all supported courses with one subscription.
          </p>

        </div>

      </div>

    </div>

  );

}

export default AITutorAccessPage;