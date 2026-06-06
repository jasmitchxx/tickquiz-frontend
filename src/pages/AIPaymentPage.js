import { useNavigate } from 'react-router-dom';

function AIPaymentPage() {

  const navigate = useNavigate();

  const handleSubscribe = () => {

  navigate('/ai-subscribe');

};


  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-green-950 to-emerald-950 flex items-center justify-center p-4">

      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6">

        <div className="text-center">

          <div className="text-5xl mb-3">
            💳
          </div>

          <h1 className="text-3xl font-black">
            AI Tutor Subscription
          </h1>

          <p className="text-gray-500 mt-2">
            Subscribe for 30 days access.
          </p>

        </div>

        <div className="mt-6 bg-green-50 rounded-xl p-4 text-center">

          <div className="text-gray-500">
            Amount
          </div>

          <div className="text-4xl font-black text-green-600">
            GH₵65
          </div>

        </div>

        <button
          onClick={handleSubscribe}
          className="
            w-full
            mt-6
            bg-green-600
            text-white
            py-3
            rounded-xl
            font-black
          "
        >
          Continue To Payment
        </button>

      </div>

    </div>

  );

}

export default AIPaymentPage;