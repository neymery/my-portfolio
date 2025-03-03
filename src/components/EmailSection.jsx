import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const EmailSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-10 bg-black text-white" id="contact">
      {/* Left Side - Contact Info */}
      <div className="w-full md:w-1/2 text-left pr-6">
        <h2 className="text-2xl font-bold">Let's Connect</h2>
        <p className="text-gray-400 mt-2 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="flex gap-4 mt-4 text-3xl">
          <FaGithub className="cursor-pointer hover:text-purple-500" />
          <FaLinkedin className="cursor-pointer hover:text-purple-500" />
        </div>
      </div>
      
      {/* Right Side - Contact Form */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0">
        <form className="flex flex-col gap-4">
          <div>
            <label className="text-gray-400">Your email</label>
            <input 
              type="email" 
              placeholder="username@gmail.com" 
              className="w-full p-3 mt-1 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-gray-400">Subject</label>
            <input 
              type="text" 
              placeholder="Just saying hi" 
              className="w-full p-3 mt-1 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-gray-400">Message</label>
            <textarea 
              placeholder="Let's talk about..." 
              className="w-full p-3 mt-1 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none h-32"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-purple-600 text-white p-3 rounded-lg font-bold hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailSection;
