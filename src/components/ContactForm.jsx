import React from "react";

const ContactForm = () => {
  return (
    <div
      name="contact"
      className="w-full h-[44%] bg-gradient-to-b from-black to-gray-800
    p-4 text-white pt-[50%] "
    >
      <div
        className="flex flex-col p-4 justify-center max-w-screen-lg
      mx-auto h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/byvvgxea"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="e.g. John Doe"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />

            <input
              type="text"
              name="email"
              placeholder="e.g. john.doe@example.com"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />

            <textarea
              name="message"
              rows="10"
              placeholder="Your message here"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            ></textarea>

            <button
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500
            px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
