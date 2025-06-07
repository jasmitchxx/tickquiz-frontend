import React from 'react';

function Contact() {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded mt-10">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="mb-2">?? WhatsApp: <a href="https://wa.me/233548951652" className="text-blue-600 underline">Chat with us</a></p>
      <p className="mb-2">?? Email: <a href="mailto:support@tickquiz.com" className="text-blue-600 underline">support@tickquiz.com</a></p>
      <p className="text-sm text-gray-600 mt-4">We respond within a few hours during working days.</p>
    </div>
  );
}

export default Contact;