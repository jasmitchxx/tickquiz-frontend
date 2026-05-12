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
        max-w-6xl
        mx-auto
        grid
        grid-cols-1
        lg:grid-cols-[1fr_1.1fr]
        gap-5
        items-start
      ">

        {/* LEFT SIDE */}
        <div>

          {/* HERO CARD */}
          <div className="
            bg-gradient-to-r
            from-blue-700
            via-indigo-700
            to-purple-800
            rounded-[28px]
            p-6
            text-white
            shadow-2xl
            relative
            overflow-hidden
          ">

            <div className="
              absolute
              top-0
              right-0
              w-56
              h-56
              bg-white/10
              blur-3xl
              rounded-full
            " />

            <div className="relative z-10">

              <div className="
                inline-block
                bg-white/20
                px-3
                py-1
                rounded-full
                text-[11px]
                font-bold
                mb-3
              ">
                🎓 TickQuiz Student Support
              </div>

              <h1 className="
                text-3xl
                lg:text-4xl
                font-black
                leading-tight
              ">
                Contact
                <span className="text-yellow-300">
                  {" "}TickQuiz
                </span>
              </h1>

              <p className="
                text-sm
                text-blue-100
                mt-4
                leading-7
              ">
                Need help with access codes,
                payments, quizzes, rankings,
                or technical issues?
                Our support team is ready to assist you.
              </p>

            </div>

          </div>

          {/* SUPPORT CARDS */}
          <div className="mt-5 space-y-4">

            {/* WHATSAPP */}
            <div className="
              bg-white
              border
              border-gray-100
              rounded-3xl
              p-5
              shadow-md
            ">

              <div className="
                flex
                items-center
                gap-4
              ">

                <div className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-green-100
                  flex
                  items-center
                  justify-center
                  text-3xl
                ">
                  💬
                </div>

                <div>

                  <div className="
                    text-xs
                    text-gray-500
                    mb-1
                  ">
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

                  <div className="
                    text-sm
                    text-gray-500
                    mt-1
                  ">
                    Fast response for students
                  </div>

                </div>

              </div>

            </div>

            {/* EMAIL */}
            <div className="
              bg-white
              border
              border-gray-100
              rounded-3xl
              p-5
              shadow-md
            ">

              <div className="
                flex
                items-center
                gap-4
              ">

                <div className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-blue-100
                  flex
                  items-center
                  justify-center
                  text-3xl
                ">
                  📧
                </div>

                <div>

                  <div className="
                    text-xs
                    text-gray-500
                    mb-1
                  ">
                    Email Support
                  </div>

                  <a
                    href="mailto:support@tickquiz.com"
                    className="
                      text-base
                      font-black
                      text-blue-600
                      break-all
                      hover:underline
                    "
                  >
                    support@tickquiz.com
                  </a>

                  <div className="
                    text-sm
                    text-gray-500
                    mt-1
                  ">
                    Business and technical enquiries
                  </div>

                </div>

              </div>

            </div>

            {/* WEBSITE */}
            <div className="
              bg-gradient-to-r
              from-indigo-600
              to-purple-700
              rounded-3xl
              p-5
              text-white
              shadow-xl
            ">

              <div className="
                text-[11px]
                opacity-80
                mb-1
              ">
                Official Website
              </div>

              <div className="
                text-3xl
                font-black
                break-all
              ">
                tickquiz.com
              </div>

              <div className="
                mt-2
                text-sm
                text-indigo-100
                leading-6
              ">
                Practice smarter. Compete better.
              </div>

            </div>

            {/* FEATURES */}
            <div className="
              bg-white
              border
              border-gray-100
              rounded-3xl
              p-5
              shadow-md
            ">

              <h3 className="
                text-xl
                font-black
                text-gray-900
                mb-4
              ">
                Support Available For
              </h3>

              <div className="space-y-3">

                {[
                  'Payment verification',
                  'Access code issues',
                  'Leaderboard problems',
                  'Quiz technical support',
                  'Student account help',
                  'General enquiries'
                ].map((item, index) => (

                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >

                    <div className="
                      text-green-600
                      font-black
                      text-lg
                    ">
                      ✓
                    </div>

                    <div className="
                      text-sm
                      text-gray-700
                      font-medium
                    ">
                      {item}
                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="
          bg-white/95
          backdrop-blur-lg
          border
          border-gray-200
          rounded-[28px]
          shadow-2xl
          p-5
          lg:p-7
        ">

          <div className="mb-5">

            <div className="
              inline-flex
              items-center
              justify-center
              w-14
              h-14
              rounded-2xl
              bg-gradient-to-br
              from-blue-600
              to-indigo-700
              text-white
              text-2xl
              shadow-lg
              mb-3
            ">
              ✉️
            </div>

            <h2 className="
              text-3xl
              font-black
              text-gray-900
              mb-2
            ">
              Send a Message
            </h2>

            <p className="
              text-sm
              text-gray-500
              leading-6
            ">
              Fill out the form below and our support team will get back to you quickly.
            </p>

          </div>

          {submitted ? (

            <div className="
              bg-green-50
              border
              border-green-200
              rounded-3xl
              p-6
              text-center
            ">

              <div className="text-5xl mb-3">
                ✅
              </div>

              <h3 className="
                text-2xl
                font-black
                text-green-700
              ">
                Message Sent Successfully
              </h3>

              <p className="
                text-sm
                text-green-600
                mt-3
                leading-7
              ">
                Thank you for contacting TickQuiz.
                Our team will respond shortly.
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
                  mb-1.5
                  text-sm
                  font-bold
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
                  placeholder="Enter your full name"
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-2xl
                    border
                    border-gray-300
                    text-sm
                    bg-gray-50
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
                  mb-1.5
                  text-sm
                  font-bold
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
                    rounded-2xl
                    border
                    border-gray-300
                    text-sm
                    bg-gray-50
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
                  mb-1.5
                  text-sm
                  font-bold
                  text-gray-700
                ">
                  Message
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Describe your issue or question..."
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-2xl
                    border
                    border-gray-300
                    text-sm
                    bg-gray-50
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
                  py-3.5
                  rounded-2xl
                  shadow-xl
                  transition-all
                  duration-300
                  hover:scale-[1.01]
                "
              >
                Submit Message 🚀
              </button>

            </form>

          )}

        </div>

      </div>

    </div>

  );

}

export default Contact;