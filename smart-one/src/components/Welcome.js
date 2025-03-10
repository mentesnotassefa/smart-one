import React from "react";

const Welcome = ({ onStart }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Quiz App</h1>
      <p className="text-lg mb-6">Test your knowledge with fun quizzes!</p>
      <button
        onClick={onStart}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        Select a Category
      </button>
    </div>
  );
};

export default Welcome;