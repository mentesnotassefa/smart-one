import React from "react";

const Navbar = ({ setPage }) => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center md:justify-around">
      <div className="text-xl font-bold">Quiz App</div>
      <div className="flex space-x-4 md:space-x-8">
        <button onClick={() => setPage("home")} className="hover:underline">
          Home
        </button>
        <button onClick={() => setPage("category")} className="hover:underline">
          Category
        </button>
        <button onClick={() => setPage("settings")} className="hover:underline">
          Settings
        </button>
        <button onClick={() => setPage("about")} className="hover:underline">
          About
        </button>
      </div>
    </nav>
  );
};

export default Navbar;