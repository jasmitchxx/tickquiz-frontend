import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function PaymentSuccessPage() {

  const location = useLocation();
  const navigate = useNavigate();

  const query =
    new URLSearchParams(location.search);

  const reference =
    query.get('reference');

  const [accessCode, setAccessCode] =
    useState('');

  const [phone, setPhone] =
    useState('');

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    if (!reference) {

      navigate('/');
      return;
    }

    const verifyPayment = async () => {

      try {

        const res = await fetch(
          'https://your-backend-url.com/api/verify-payment',
          {
            method: 'POST',

            headers: {
              'Content-Type':
                'application/json'
            },

            body: JSON.stringify({
              reference
            }),
          }
        );

        const data =
          await res.json();

        if (data.success) {
const selectedProduct =
  localStorage.getItem('selectedProduct');

if (selectedProduct === 'ai-tutor') {

  localStorage.setItem(
    'aiAccessGranted',
    'true'
  );

  navigate('/ask-ai');

  return;
}
          setAccessCode(
            data.accessCode
          );

          setPhone(
            data.phone
          );

        } else {

          alert(
            'Payment verification failed.'
          );

          navigate('/');
        }

      } catch (err) {

        console.error(err);

        alert(
          'Server error during payment verification.'
        );

        navigate('/');

      } finally {

        setLoading(false);
      }
    };

    verifyPayment();

  }, [reference, navigate]);

  const handleStartNow = () => {

    navigate(
      '/use-code',
      {
        state: {
          accessCode
        }
      }
    );
  };

  /* =========================
     LOADING SCREEN
  ========================= */

  if (loading) {

  return (

    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-blue-50
      via-white
      to-indigo-100
      px-3
    ">

      <div className="
        bg-white
        rounded-2xl
        shadow-xl
        border
        border-gray-100
        p-6
        text-center
        max-w-sm
        w-full
      ">

        <div className="
          w-14
          h-14
          border-4
          border-blue-200
          border-t-blue-600
          rounded-full
          animate-spin
          mx-auto
          mb-4
        " />

        <h2 className="
          text-2xl
          font-black
          text-gray-900
          mb-2
        ">
          Verifying Payment
        </h2>

        <p className="
          text-sm
          text-gray-500
          leading-6
        ">
          Please wait while we confirm
          your payment.
        </p>

      </div>

    </div>
  );
}

return (

  <div className="
    min-h-screen
    bg-gradient-to-br
    from-green-50
    via-white
    to-blue-100
    px-3
    py-5
    flex
    items-center
    justify-center
  ">

    <div className="
      max-w-xl
      w-full
      bg-white/95
      backdrop-blur-lg
      rounded-2xl
      shadow-xl
      border
      border-gray-200
      overflow-hidden
    ">

      {/* TOP SUCCESS HEADER */}
      <div className="
        bg-gradient-to-r
        from-green-500
        to-emerald-600
        text-white
        p-5
        text-center
      ">

        <div className="
          w-16
          h-16
          rounded-full
          bg-white/20
          flex
          items-center
          justify-center
          text-3xl
          mx-auto
          mb-3
          shadow-lg
        ">
          ✓
        </div>

        <h1 className="
          text-2xl
          lg:text-3xl
          font-black
        ">
          Payment Successful
        </h1>

        <p className="
          mt-2
          text-sm
          text-green-100
          leading-6
          max-w-md
          mx-auto
        ">
          Your TickQuiz access code is ready.
        </p>

      </div>

      {/* BODY */}
      <div className="p-4 lg:p-6">

        {/* PHONE */}
        <div className="
          bg-blue-50
          border
          border-blue-100
          rounded-2xl
          p-4
          mb-5
        ">

          <div className="
            text-xs
            text-gray-500
            mb-1
          ">
            Access Code Sent To
          </div>

          <div className="
            text-xl
            font-black
            text-blue-700
          ">
            {phone}
          </div>

        </div>

        {/* ACCESS CODE */}
        <div className="
          bg-gradient-to-r
          from-blue-600
          to-indigo-700
          rounded-2xl
          p-5
          text-center
          text-white
          shadow-lg
          mb-5
        ">

          <div className="
            text-xs
            opacity-80
            mb-2
            tracking-widest
          ">
            YOUR ACCESS CODE
          </div>

          <div className="
            text-2xl
            lg:text-4xl
            font-black
            tracking-[4px]
            break-all
          ">
            {accessCode}
          </div>

        </div>

        {/* INFO CARDS */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-3
          mb-5
        ">

          <div className="
            bg-gray-50
            rounded-2xl
            p-4
            text-center
            border
            border-gray-100
          ">

            <div className="text-2xl mb-2">
              🎯
            </div>

            <div className="
              font-black
              text-sm
              text-gray-900
              mb-1
            ">
              60 Questions
            </div>

            <div className="
              text-xs
              text-gray-500
            ">
              CBT Experience
            </div>

          </div>

          <div className="
            bg-gray-50
            rounded-2xl
            p-4
            text-center
            border
            border-gray-100
          ">

            <div className="text-2xl mb-2">
              ⏱️
            </div>

            <div className="
              font-black
              text-sm
              text-gray-900
              mb-1
            ">
              60 Minutes
            </div>

            <div className="
              text-xs
              text-gray-500
            ">
              Exam Timing
            </div>

          </div>

          <div className="
            bg-gray-50
            rounded-2xl
            p-4
            text-center
            border
            border-gray-100
          ">

            <div className="text-2xl mb-2">
              🏆
            </div>

            <div className="
              font-black
              text-sm
              text-gray-900
              mb-1
            ">
              Leaderboard
            </div>

            <div className="
              text-xs
              text-gray-500
            ">
              Compete Nationally
            </div>

          </div>

        </div>

        {/* BUTTON */}
        <button
          onClick={handleStartNow}
          className="
            w-full
            bg-gradient-to-r
            from-green-500
            to-emerald-600
            hover:from-green-600
            hover:to-emerald-700
            text-white
            py-3
            rounded-2xl
            text-sm
            font-black
            shadow-lg
            transition-all
            duration-300
          "
        >
          Start Quiz Now
        </button>

        {/* FOOT NOTE */}
        <p className="
          text-center
          text-gray-500
          text-xs
          mt-4
          leading-6
        ">
          Keep your access code safe.
        </p>

      </div>

    </div>

  </div>
);
}