import React from "react";

const Result = ({ score, total, onRestart }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
      <p className="text-lg mb-4">You Scored: {score} / {total}</p>
      <p className="text-md mb-6">Great job! Keep challenging yourself!</p>
      <button
        onClick={onRestart}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;