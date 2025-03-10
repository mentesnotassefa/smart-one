import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-600 text-white p-4 flex justify-between items-center relative">
      <div className="flex items-center">
      <img src="/assets/logo2.png" alt="Quiz It Logo" className="h-12 mr-2" />
        <span className="text-xl font-bold hidden md:block">Quiz App</span>
      </div>
      {/* Hamburger Menu for Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white text-2xl focus:outline-none"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        <button onClick={() => setPage("home")} className="hover:underline">
          Home
        </button>
        <button onClick={() => setPage("category")} className="hover:underline">
          Category
        </button>
       
        <button onClick={() => setPage("about")} className="hover:underline">
          About
        </button>
      </div>
      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="absolute top-16 right-4 bg-red-600 p-4 rounded-md shadow-lg md:hidden z-10">
          <button onClick={() => setPage("home")} className="block w-full text-left py-2 hover:underline">
            Home
          </button>
          <button onClick={() => setPage("category")} className="block w-full text-left py-2 hover:underline">
            Category
          </button>
          
          <button onClick={() => setPage("about")} className="block w-full text-left py-2 hover:underline">
            About
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;