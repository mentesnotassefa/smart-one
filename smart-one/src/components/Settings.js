import React from "react";
import { FaHome } from "react-icons/fa";

const Settings = ({ onHome }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center max-w-md w-full relative">
      <button onClick={onHome} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
        <FaHome size={24} />
      </button>
      <h2 className="text-xl md:text-2xl font-bold mb-4">Settings</h2>
      <p className="text-md md:text-lg">Settings page coming soon!</p>
    </div>
  );
};

export default Settings;