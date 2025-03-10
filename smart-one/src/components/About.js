import React from "react";
import { FaHome } from "react-icons/fa";

const About = ({ onHome }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center max-w-md w-full relative">
      
      <h2 className="text-xl md:text-2xl font-bold mb-4">About</h2>
      <p className="text-md md:text-lg mb-4">
        Challenge your knowledge with fun and interactive quizzes!
      </p>
      <p className="text-sm md:text-md mb-2">Features:</p>
      <ul className="text-sm md:text-md mb-4 text-left">
        <li>✅Multiple quiz categories</li>
        <li>✅Adjustable difficulty levels</li>
        <li>✅Interactive and responsive design</li>
        <li>✅Track your score and improve your knowledge</li>
      </ul>
      <p className="text-sm md:text-md">Get in Touch: mentesnotassefa@gmail.com</p>
      <p className="text-sm md:text-md">Developed By: Mentesnot Assefa</p>
    </div>
  );
};

export default About;