import { useState, useEffect } from 'react';
import axios from 'axios';

function UseAccessCodePage() {

  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL;

  // AUTO-READ CODE FROM URL
  useEffect(() => {

    const params = new URLSearchParams(window.location.search);

    const urlCode = params.get('code');

    if (urlCode) {

      const cleanCode =
        urlCode.trim().toUpperCase();

      setCode(cleanCode);
    }

  }, []);

  // VERIFY CODE
  const verifyCode = async (inputCode) => {

    if (loading) return;

    if (!name.trim()) {
      setMessage('Please enter your full name.');
      return;
    }

    if (!school.trim()) {
      setMessage('Please enter your school.');
      return;
    }

    setLoading(true);
    setMessage('');
    setSuccess(false);

    try {

      const res = await axios.post(
        `${API_URL}/api/use-access-code`,
        {
          code: inputCode,
        }
      );

      if (res.data.success) {

        const usageCount =
          res.data.usageCount || 0;

        // CLEAR OLD DATA
        localStorage.clear();

        // SAVE USER
        localStorage.setItem(
          'quizUser',
          JSON.stringify({
            name: name.trim(),
            school: school.trim(),
            code: inputCode,
          })
        );

        localStorage.setItem(
          'quizAccessGranted',
          'true'
        );

        localStorage.setItem(
          'quizUsageCount',
          usageCount
        );

        localStorage.setItem(
          'quizAccessCode',
          inputCode
        );

        setSuccess(true);

        setMessage(
          'Access granted! Redirecting...'
        );

        setTimeout(() => {

          if (usageCount >= 2) {

            window.location.href =
              '/request-access';

          } else {

            window.location.href =
              '/start';
          }

        }, 800);

      } else {

        setMessage(
          res.data.message ||
          'Invalid or expired code.'
        );
      }

    } catch (err) {

      console.error(err);

      setMessage(
        err.response?.data?.message ||
        'Something went wrong.'
      );

    } finally {

      setLoading(false);
    }
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    verifyCode(
      code.trim().toUpperCase()
    );
  };

  return (

    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-100
      px-2
    ">

      <div className="
        bg-white
        shadow-md
        rounded-lg
        p-4
        w-full
        max-w-xs
      ">

        <h2 className="
          text-lg
          font-bold
          text-center
          mb-3
        ">
          Enter Details
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-2"
        >

          {/* FULL NAME */}
          <input
            type="text"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            placeholder="Full Name"
            className="
              w-full
              px-3
              py-2
              text-sm
              border
              rounded-md
            "
          />

          {/* SCHOOL */}
          <input
            type="text"
            value={school}
            onChange={(e) =>
              setSchool(e.target.value)
            }
            placeholder="School Name"
            className="
              w-full
              px-3
              py-2
              text-sm
              border
              rounded-md
            "
          />

          {/* ACCESS CODE */}
          <input
            type="text"
            value={code}
            onChange={(e) =>
              setCode(
                e.target.value.toUpperCase()
              )
            }
            placeholder="Enter Access Code"
            className="
              w-full
              px-3
              py-2
              text-sm
              border
              rounded-md
            "
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className={`
              w-full
              py-2
              text-sm
              rounded-md
              text-white
              font-semibold
              ${
                loading
                  ? 'bg-gray-400'
                  : 'bg-green-600 hover:bg-green-700'
              }
            `}
          >

            {loading
              ? 'Verifying...'
              : 'Continue'}

          </button>

        </form>

        {/* MESSAGE */}
        {message && (

          <p
            className={`
              mt-3
              text-center
              text-xs
              ${
                success
                  ? 'text-green-600'
                  : 'text-red-600'
              }
            `}
          >

            {message}

          </p>

        )}

      </div>

    </div>
  );
}

export default UseAccessCodePage;