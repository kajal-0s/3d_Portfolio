import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialInstagramCircular } from "react-icons/ti";




const Contact = () => {
  const formRef = useRef(null);
  const [form, setform] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false);


  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    console.log()
    emailjs.sendForm(
      import.meta.env.
        VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.eve.
        VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "kajal",
        from_email: form.email,
        to_email: 'sawkajal28@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      //TODO:show success message
      //TODO: Hide an alert
      setform({ name: '', email: '', message: '' });
    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
      //TODO: Show errror message
    })
  }
  const handleFocus = () => { };
  const handleBlur = () => { };
  return (
    <section className="relative ml-15 flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[%70] flex flex-col">
        <h1 className="head-text text-4xl font-bold">Get in Touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 text-2xl font-semibold">
            Name   </label>

          <input
            type="text"
            name="name"
            className="input w-50 h-9 bg-yellow-600 rounded-2xl p-2"
            placeholder="yours_name"
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />


          <label className="text-black-500 text-2xl  font-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="input w-50 h-9  bg-yellow-600 rounded-2xl p-2" placeholder="sawkajal28@gmail.com"
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />


          <label className="text-black-500 text-2xl font-semibold">
            Your Message
          </label>
          <textarea
            name="message"
            rows={2}
            className="textarea w-70 h-15 bg-yellow-600 rounded-2xl p-2 "
            placeholder="let me know how may I help you!"
            required
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />


          <button
            type="submit"
            className="btn  w-60 h-10 ml-10 mt-5 bg-red-700 rounded-2xl p-2 "
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending....' : 'Message sent'}
          </button>
        </form>
      </div>
      <div className="mt-130 ml-30">
    <div className=" text-3xl  font-bold text-red-900">Let's connect</div>
    <div className="  mt-5 flex flex-row gap-7 text-3xl h-11 w-42 p-2 rounded-2xl bg-yellow-600 mr-162">
    <a href=" https://www.linkedin.com/in/kumari-kajal-7b6a15311" target="_blank" className="rounded-l-2xl hover:translate-0.5"> <FaLinkedin /> </a>
    <a href="https://github.com/kajal-0s" target="_blank" className="rounded-l-2xl hover:translate-0.5"> <FaGithub />  </a>
    <a href="https://www.instagram.com/kajuuuu_07__" target="_blank" className="rounded-l-2xl  hover:translate-0.5"> <TiSocialInstagramCircular /> </a>
    </div>
  </div>
    </section>
  )
}

export default Contact