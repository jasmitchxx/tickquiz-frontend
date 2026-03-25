import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can replace this with an API call or backend logic
    console.log('Form submitted:', form);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded mt-10">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>

      <p className="mb-4 text-gray-700">
        If you're experiencing any issues or have questions about TickQuiz, feel free to reach out using the form below. We typically respond within a few hours on working days.
      </p>

      {submitted ? (
        <p className="text-green-600 font-medium">Thank you! Your message has been received.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      )}

      <div className="mt-6">
        <p className="mb-2">
          WhatsApp:{' '}
          <a href="https://wa.me/233548951652" className="text-blue-600 underline">
            Chat with us
          </a>
        </p>
        <p>
          Email:{' '}
          <a href="mailto:support@tickquiz.com" className="text-blue-600 underline">
            support@tickquiz.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;