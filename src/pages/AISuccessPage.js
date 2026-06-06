import { useEffect } from 'react';
import axios from 'axios';





import { useNavigate } from 'react-router-dom';

function AISuccessPage() {

  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {

 const activateSubscription = async () => {

  try {

    const name =
      localStorage.getItem(
        'aiSubscriptionName'
      );

    const email =
      localStorage.getItem(
        'aiSubscriptionEmail'
      );

    const phone =
      localStorage.getItem(
        'aiSubscriptionPhone'
      );

    const password =
      localStorage.getItem(
        'aiSubscriptionPassword'
      );

    await axios.post(
      `${API_URL}/api/activate-ai-subscription`,
      {
        name,
        email,
        phone,
        password
      }
    );

    console.log(
      'AI subscription activated'
    );

  } catch (err) {

    console.error(
      'ACTIVATION ERROR:',
      err.response?.data ||
      err.message
    );

  }

};



  activateSubscription();

  setTimeout(() => {

  navigate('/ask-ai');

}, 1500);

}, [navigate, API_URL]);

  return (

    <div className="min-h-screen flex items-center justify-center bg-green-50">

      <div className="bg-white rounded-3xl shadow-xl p-8 text-center max-w-md">

        <div className="text-6xl mb-4">
          ✅
        </div>

        <h1 className="text-3xl font-black mb-3">
          Subscription Activated
        </h1>

        <p className="text-gray-600">
          Your AI Tutor access is active for 30 days.
        </p>

        <p className="mt-4 text-green-600 font-bold">
          Redirecting...
        </p>

      </div>

    </div>

  );

}

export default AISuccessPage;