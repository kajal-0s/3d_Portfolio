import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TiSocialInstagramCircular } from 'react-icons/ti';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Kajal',
          from_email: form.email,
          to_email: 'sawkajal28@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        alert('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
        alert('Something went wrong. Please try again.');
      });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10">
      {/* Form Section */}
      <div className="flex-1">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Get in Touch</h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full mt-10 flex flex-col gap-6"
        >
          <div>
            <label className="block text-lg font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-3 rounded-xl bg-yellow-100 focus:outline-none"
              placeholder="Your name"
              required
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 rounded-xl bg-yellow-100 focus:outline-none"
              placeholder="sawkajal28@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700">Your Message</label>
            <textarea
              name="message"
              rows="4"
              className="w-full p-3 rounded-xl bg-yellow-100 focus:outline-none"
              placeholder="Let me know how I can help!"
              required
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-red-700 text-white font-semibold py-3 px-6 rounded-xl hover:bg-red-800 transition"
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* Social Links Section */}
      <div className="flex-1 flex flex-col items-start lg:items-center">
        <h2 className="text-2xl font-bold text-red-900 mb-6">Let's Connect</h2>
        <div className="flex gap-6 text-4xl text-gray-700 bg-yellow-300 p-4 rounded-2xl shadow-md">
          <a
            href="https://www.linkedin.com/in/kumari-kajal-7b6a15311"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/kajal-0s"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/kajuuuu_07__"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <TiSocialInstagramCircular />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
