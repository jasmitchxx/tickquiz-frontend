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
      px-4
      py-10
    ">

      <div className="
        max-w-6xl
        mx-auto
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-8
        items-center
      ">

        {/* LEFT SIDE */}
        <div>

          <div className="
            inline-block
            bg-blue-100
            text-blue-700
            px-4
            py-2
            rounded-full
            text-sm
            font-bold
            mb-5
          ">
            TickQuiz Support
          </div>

          <h1 className="
            text-4xl
            lg:text-5xl
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
            text-lg
            text-gray-600
            mt-6
            leading-8
          ">
            Need help with access codes,
            payments, quiz issues, or leaderboard
            problems? Our support team is ready
            to assist you quickly.
          </p>

          {/* SUPPORT CARDS */}
          <div className="mt-8 space-y-5">

            <div className="
              bg-white
              border
              border-gray-100
              rounded-3xl
              p-5
              shadow-lg
            ">

              <div className="text-sm text-gray-500 mb-2">
                WhatsApp Support
              </div>

              <a
                href="https://wa.me/233548951652"
                className="
                  text-2xl
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
              rounded-3xl
              p-5
              shadow-lg
            ">

              <div className="text-sm text-gray-500 mb-2">
                Email Support
              </div>

              <a
                href="mailto:support@tickquiz.com"
                className="
                  text-xl
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

        {/* RIGHT SIDE */}
        <div className="
          bg-white/90
          backdrop-blur-lg
          border
          border-gray-200
          rounded-[32px]
          shadow-2xl
          p-6
          lg:p-8
        ">

          <h2 className="
            text-3xl
            font-black
            text-gray-900
            mb-2
          ">
            Send Us a Message
          </h2>

          <p className="
            text-gray-500
            mb-8
          ">
            Fill the form below and we will
            respond as soon as possible.
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

              <div className="
                text-5xl
                mb-3
              ">
                ✅
              </div>

              <h3 className="
                text-2xl
                font-black
                text-green-700
              ">
                Message Sent
              </h3>

              <p className="
                text-green-600
                mt-2
              ">
                Thank you for contacting TickQuiz.
                Our support team will respond shortly.
              </p>

            </div>

          ) : (

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* NAME */}
              <div>

                <label className="
                  block
                  mb-2
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
                    px-5
                    py-4
                    rounded-2xl
                    border
                    border-gray-300
                    focus:outline-none
                    focus:ring-4
                    focus:ring-blue-100
                    focus:border-blue-500
                    transition
                  "
                />

              </div>

              {/* EMAIL */}
              <div>

                <label className="
                  block
                  mb-2
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
                    px-5
                    py-4
                    rounded-2xl
                    border
                    border-gray-300
                    focus:outline-none
                    focus:ring-4
                    focus:ring-blue-100
                    focus:border-blue-500
                    transition
                  "
                />

              </div>

              {/* MESSAGE */}
              <div>

                <label className="
                  block
                  mb-2
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
                  rows="6"
                  placeholder="Describe your issue..."
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    border
                    border-gray-300
                    focus:outline-none
                    focus:ring-4
                    focus:ring-blue-100
                    focus:border-blue-500
                    transition
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
                  text-lg
                  py-4
                  rounded-2xl
                  shadow-xl
                  transition-all
                  duration-300
                  hover:scale-[1.02]
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