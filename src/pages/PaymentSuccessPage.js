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
        px-4
      ">

        <div className="
          bg-white
          rounded-[32px]
          shadow-2xl
          border
          border-gray-100
          p-10
          text-center
          max-w-md
          w-full
        ">

          <div className="
            w-20
            h-20
            border-4
            border-blue-200
            border-t-blue-600
            rounded-full
            animate-spin
            mx-auto
            mb-6
          " />

          <h2 className="
            text-3xl
            font-black
            text-gray-900
            mb-3
          ">
            Verifying Payment
          </h2>

          <p className="
            text-gray-500
            leading-7
          ">
            Please wait while we confirm
            your payment and generate your
            TickQuiz access code.
          </p>

        </div>

      </div>
    );
  }

  /* =========================
     SUCCESS SCREEN
  ========================= */

  return (

    <div className="
      min-h-screen
      bg-gradient-to-br
      from-green-50
      via-white
      to-blue-100
      px-4
      py-10
      flex
      items-center
      justify-center
    ">

      <div className="
        max-w-2xl
        w-full
        bg-white/95
        backdrop-blur-lg
        rounded-[36px]
        shadow-2xl
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
          p-8
          text-center
        ">

          <div className="
            w-28
            h-28
            rounded-full
            bg-white/20
            flex
            items-center
            justify-center
            text-6xl
            mx-auto
            mb-5
            shadow-xl
          ">
            ✓
          </div>

          <h1 className="
            text-4xl
            lg:text-5xl
            font-black
          ">
            Payment Successful
          </h1>

          <p className="
            mt-4
            text-lg
            text-green-100
            leading-8
            max-w-xl
            mx-auto
          ">
            Your payment has been verified
            successfully and your TickQuiz
            access code is now ready.
          </p>

        </div>

        {/* BODY */}
        <div className="
          p-6
          lg:p-10
        ">

          {/* PHONE */}
          <div className="
            bg-blue-50
            border
            border-blue-100
            rounded-3xl
            p-5
            mb-6
          ">

            <div className="
              text-sm
              text-gray-500
              mb-2
            ">
              Access Code Sent To
            </div>

            <div className="
              text-2xl
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
            rounded-[32px]
            p-8
            text-center
            text-white
            shadow-2xl
            mb-8
          ">

            <div className="
              text-sm
              opacity-80
              mb-3
              tracking-widest
            ">
              YOUR ACCESS CODE
            </div>

            <div className="
              text-4xl
              lg:text-6xl
              font-black
              tracking-[8px]
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
            gap-5
            mb-8
          ">

            <div className="
              bg-gray-50
              rounded-3xl
              p-5
              text-center
              border
              border-gray-100
            ">

              <div className="text-4xl mb-3">
                🎯
              </div>

              <div className="
                font-black
                text-gray-900
                mb-2
              ">
                60 Questions
              </div>

              <div className="
                text-sm
                text-gray-500
              ">
                Full CBT Experience
              </div>

            </div>

            <div className="
              bg-gray-50
              rounded-3xl
              p-5
              text-center
              border
              border-gray-100
            ">

              <div className="text-4xl mb-3">
                ⏱️
              </div>

              <div className="
                font-black
                text-gray-900
                mb-2
              ">
                60 Minutes
              </div>

              <div className="
                text-sm
                text-gray-500
              ">
                Real Exam Timing
              </div>

            </div>

            <div className="
              bg-gray-50
              rounded-3xl
              p-5
              text-center
              border
              border-gray-100
            ">

              <div className="text-4xl mb-3">
                🏆
              </div>

              <div className="
                font-black
                text-gray-900
                mb-2
              ">
                Leaderboard
              </div>

              <div className="
                text-sm
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
              py-5
              rounded-3xl
              text-xl
              font-black
              shadow-2xl
              hover:scale-[1.02]
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
            text-sm
            mt-6
            leading-7
          ">
            Keep your access code safe.
            You may need it again later.
          </p>

        </div>

      </div>

    </div>
  );
}