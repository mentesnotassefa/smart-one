import React, { useState, useEffect } from "react";
import axios from "axios";

const Quiz = ({ category, onFinish }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `https://opentdb.com/api.php?amount=20&category=${category.id}&type=multiple`
        );
        const formattedQuestions = response.data.results.map((q) => ({
          question: q.question,
          options: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
          correctAnswer: q.correct_answer,
        }));
        setQuestions(formattedQuestions);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [category]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      onFinish(score, questions);
    }
  };

  if (loading) {
    return <div className="text-center text-lg">Loading questions...</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-xl font-semibold mb-2">
        {category.name} Question {currentQuestion + 1}/{questions.length}
      </h2>
      <p
        className="text-lg mb-4"
        dangerouslySetInnerHTML={{ __html: questions[currentQuestion].question }}
      />
      <div className="space-y-2">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`w-full text-left p-3 rounded ${
              selectedOption === option
                ? option === questions[currentQuestion].correctAnswer
                  ? "bg-green-200"
                  : "bg-red-200"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            disabled={selectedOption !== null}
            dangerouslySetInnerHTML={{ __html: option }}
          />
        ))}
      </div>
      {selectedOption && (
        <button
          onClick={handleNext}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {currentQuestion + 1 === questions.length ? "Finish" : "Next"}
        </button>
      )}
    </div>
  );
};

export default Quiz;