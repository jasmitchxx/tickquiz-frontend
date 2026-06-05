import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AISuccessPage() {

  const navigate = useNavigate();

  useEffect(() => {

    const expiryDate = new Date();

    expiryDate.setDate(
      expiryDate.getDate() + 30
    );

    localStorage.setItem(
      'aiAccessGranted',
      'true'
    );

    localStorage.setItem(
      'aiExpiryDate',
      expiryDate.toISOString()
    );



    
    setTimeout(() => {

      navigate('/ask-ai');

    }, 3000);

  }, [navigate]);

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