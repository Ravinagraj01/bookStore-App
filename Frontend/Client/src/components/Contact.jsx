import React from "react";
import Navbar from "./Navbar";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-base-500 flex flex-col items-center">
      <Navbar />
      <div className="max-w-3xl bg-gray-200 p-8 m-12 shadow-lg rounded-lg mt-[100px]">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Get in Touch 📚
        </h2>
        
        <p className="text-gray-600 text-center mb-4">
          We'd love to hear from you! Whether you have a question, suggestion, or just want to say hello, feel free to reach out.
        </p>

        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-3">
            <FaPhone className="text-blue-500" />
            <span className="text-gray-700">+91 123 456 7890</span>
          </div>

          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-red-500" />
            <span className="text-gray-700">support@bookstore.com</span>
          </div>

          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-green-500" />
            <span className="text-gray-700">123, Book Street, Bangalore, India</span>
          </div>
        </div>

        <form className="mt-6 flex flex-col space-y-4">
          <input type="text" placeholder="Your Name" className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300" />
          <input type="email" placeholder="Your Email" className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300" />
          <textarea placeholder="Your Message" className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"></textarea>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
