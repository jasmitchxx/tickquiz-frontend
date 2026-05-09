import React, { useState } from 'react';

function Contact() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] =
    useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', form);

    setSubmitted(true);

    setForm({
      name: '',
      email: '',
      message: ''
    });
  };

  return (

  <div className="
    min-h-screen
    bg-gradient-to-br
    from-blue-50
    via-white
    to-indigo-100
    px-3
    py-4
  ">

    <div className="
      max-w-5xl
      mx-auto
      grid
      grid-cols-1
      lg:grid-cols-2
      gap-5
      items-start
    ">

      {/* LEFT */}
      <div>

        <div className="
          inline-block
          bg-blue-100
          text-blue-700
          px-3
          py-1
          rounded-full
          text-[11px]
          font-bold
          mb-3
        ">
          TickQuiz Support
        </div>

        <h1 className="
          text-3xl
          lg:text-4xl
          font-black
          text-gray-900
          leading-tight
        ">
          Contact
          <span className="text-blue-600">
            {" "}TickQuiz
          </span>
        </h1>

        <p className="
          text-sm
          text-gray-600
          mt-4
          leading-6
        ">
          Need help with payments, access codes,
          leaderboard issues or quizzes?
          Our support team is ready to help.
        </p>

        {/* SUPPORT CARDS */}
        <div className="mt-5 space-y-3">

          <div className="
            bg-white
            border
            border-gray-100
            rounded-2xl
            p-4
            shadow-md
          ">

            <div className="text-xs text-gray-500 mb-1">
              WhatsApp Support
            </div>

            <a
              href="https://wa.me/233548951652"
              className="
                text-lg
                font-black
                text-green-600
                hover:underline
              "
            >
              +233 54 895 1652
            </a>

          </div>

          <div className="
            bg-white
            border
            border-gray-100
            rounded-2xl
            p-4
            shadow-md
          ">

            <div className="text-xs text-gray-500 mb-1">
              Email Support
            </div>

            <a
              href="mailto:support@tickquiz.com"
              className="
                text-base
                font-bold
                text-blue-600
                break-all
                hover:underline
              "
            >
              support@tickquiz.com
            </a>

          </div>

        </div>

      </div>

      {/* RIGHT */}
      <div className="
        bg-white/95
        backdrop-blur-lg
        border
        border-gray-200
        rounded-[24px]
        shadow-xl
        p-5
        lg:p-6
      ">

        <h2 className="
          text-2xl
          font-black
          text-gray-900
          mb-1
        ">
          Send a Message
        </h2>

        <p className="
          text-sm
          text-gray-500
          mb-5
        ">
          We usually respond quickly.
        </p>

        {submitted ? (

          <div className="
            bg-green-50
            border
            border-green-200
            rounded-2xl
            p-5
            text-center
          ">

            <div className="text-4xl mb-2">
              ✅
            </div>

            <h3 className="
              text-xl
              font-black
              text-green-700
            ">
              Message Sent
            </h3>

            <p className="
              text-sm
              text-green-600
              mt-2
              leading-6
            ">
              Thank you for contacting TickQuiz.
            </p>

          </div>

        ) : (

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >

            {/* NAME */}
            <div>

              <label className="
                block
                mb-1
                text-sm
                font-semibold
                text-gray-700
              ">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  border
                  border-gray-300
                  text-sm
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-100
                  focus:border-blue-500
                "
              />

            </div>

            {/* EMAIL */}
            <div>

              <label className="
                block
                mb-1
                text-sm
                font-semibold
                text-gray-700
              ">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  border
                  border-gray-300
                  text-sm
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-100
                  focus:border-blue-500
                "
              />

            </div>

            {/* MESSAGE */}
            <div>

              <label className="
                block
                mb-1
                text-sm
                font-semibold
                text-gray-700
              ">
                Message
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Describe your issue..."
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  border
                  border-gray-300
                  text-sm
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-100
                  focus:border-blue-500
                  resize-none
                "
              />

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="
                w-full
                bg-gradient-to-r
                from-blue-600
                to-indigo-700
                hover:from-blue-700
                hover:to-indigo-800
                text-white
                font-black
                text-base
                py-3
                rounded-xl
                shadow-lg
                transition-all
                duration-300
              "
            >
              Submit Message
            </button>

          </form>

        )}

      </div>

    </div>

  </div>

);

}

export default Contact;