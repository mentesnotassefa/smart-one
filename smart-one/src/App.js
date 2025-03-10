import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CategorySelection from "./components/CategorySelection";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Settings from "./components/Settings";
import About from "./components/About";

const App = () => {
  const [page, setPage] = useState("home");
  const [category, setCategory] = useState(null);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);

  const categories = [
    { name: "🧬 Biology", id: 17 },
    { name: "🧪 Chemistry", id: 17 },
    { name: "🧠 General Knowledge", id: 9 },
    { name: "🏛️ History", id: 23 },
    { name: "📐 Mathematics", id: 19 },
    { name: "⚛️ Physics", id: 17 },
    { name: "🌍 Social Science", id: 22 },
  ];

  const handleCategorySelect = (cat) => {
    setCategory(cat);
    setPage("quiz");
  };

  const handleQuizFinish = (finalScore, quizQuestions) => {
    setScore(finalScore);
    setQuestions(quizQuestions);
    setPage("result");
  };

  const handleHome = () => {
    setPage("home");
    setCategory(null);
    setScore(0);
    setQuestions([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar setPage={setPage} />
      <main className="flex-grow flex items-center justify-center p-4">
        {page === "home" && <Home onCategory={() => setPage("category")} />}
        {page === "category" && (
          <CategorySelection categories={categories} onSelect={handleCategorySelect} onHome={handleHome} />
        )}
        {page === "quiz" && (
          <Quiz category={category} onFinish={handleQuizFinish} onHome={handleHome} />
        )}
        {page === "result" && (
          <Result score={score} total={questions.length} onRestart={handleHome} onHome={handleHome} />
        )}
        {page === "settings" && <Settings onHome={handleHome} />}
        {page === "about" && <About onHome={handleHome} />}
      </main>
    </div>
  );
};

export default App;